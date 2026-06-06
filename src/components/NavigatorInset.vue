<template>
  <div class="nav-inset">
    <div class="nav-bar">
      <span class="nav-icon" :class="{ 'nav-icon-pulse': isScanning }">{{ modeIcon }}</span>
      <span class="nav-title">{{ title }}</span>
      <span class="nav-count" v-if="mode === 'orbital' && planetCount > 1">
        {{ planetCount }} pl
      </span>
    </div>

    <canvas
      ref="navCanvas"
      :width="W * 2"
      :height="H * 2"
      class="nav-canvas"
      :class="{ 'canvas-active-target': !!hoveredPlanet }"
      @click="onCanvasClick"
      @mousemove="onCanvasHover"
      @mouseleave="onCanvasLeave"
    />

    <div v-if="hoveredPlanet" class="nav-tooltip" :style="tooltipStyle">
      <div class="tooltip-header">{{ hoveredPlanet.pl_name }}</div>
      <div class="tooltip-meta">
        <span v-if="hoveredPlanet.pl_eqt">🌡️ {{ Math.round(hoveredPlanet.pl_eqt) }}K</span>
        <span v-if="hoveredPlanet.pl_orbsmax"> · 🌌 {{ hoveredPlanet.pl_orbsmax.toFixed(2) }} AU</span>
      </div>
    </div>

    <div class="nav-footer">
      <span class="nav-scale-hint">{{ scaleHint }}</span>
      <span v-if="mode === 'orbital' && moonCount > 0" class="nav-moons">⟳ {{ moonCount }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter }    from 'vue-router'
import { useGalaxyStore } from 'src/stores/galaxy'
import type { Planet }    from 'src/stores/galaxy'

const props = defineProps<{
  mode:           'orbital' | 'neighborhood'
  hostname:       string
  currentPlanet?: string
}>()

const emit = defineEmits<{
  (e: 'select-planet', name: string): void
}>()

const W = 180
const H = 160

const navCanvas     = ref<HTMLCanvasElement | null>(null)
const galaxyStore   = useGalaxyStore()
const router        = useRouter()

const hoveredPlanet = ref<Planet | null>(null)
const tooltipStyle  = ref({ left: '0px', top: '0px' })

// ── Interactive Animation States ─────────────────────────────────────────────
const isScanning    = ref(true)
let animationId     = 0
let scanY           = 0
let transitionProgress = ref(1.0) // 0.0 = neighborhood, 1.0 = orbital grid
let lastMode        = props.mode

// Magnetic Target Snap Offset Trackers
const targetCrosshairOffset = ref({ x: 0, y: 0 })
const hitDots: { planet: Planet; cx: number; cy: number }[] = []

// ── Derived ───────────────────────────────────────────────────────────────────
const modeIcon    = computed(() => props.mode === 'orbital' ? '⬤' : '✦')
const title       = computed(() => props.mode === 'orbital' ? props.hostname : 'Stellar Neighborhood')
const scaleHint   = computed(() => props.mode === 'orbital' ? '↑ [CLICK STAR] SYSTEM' : '↑ [DRAG] SECTOR')
const planetCount = computed(() => galaxyStore.getSystem(props.hostname)?.planets.length ?? 0)
const moonCount   = computed(() => galaxyStore.getSystem(props.hostname)?.sy_mnum ?? 0)

// ── Color helpers ─────────────────────────────────────────────────────────────
function starHex(teff?: number | null): string {
  if (!teff) return '#fff4ea'
  if (teff >= 30000) return '#9bb0ff'
  if (teff >= 10000) return '#aabfff'
  if (teff >= 7500)  return '#cad7ff'
  if (teff >= 6000)  return '#f8f7ff'
  if (teff >= 5200)  return '#fff4ea'
  if (teff >= 3700)  return '#ffd2a1'
  return '#ffcc6f'
}

function planetHex(eqt?: number | null, au?: number | null): string {
  if (eqt != null) {
    if (eqt > 2000) return '#ff4500'
    if (eqt > 1200) return '#ff8c42'
    if (eqt > 500)  return '#f0c040'
    if (eqt > 273)  return '#4ecdc4'
    if (eqt > 100)  return '#82b4d0'
    return '#c8e8f8'
  }
  return '#7fb3d3'
}

// ── Render Cycle Frame Loop ──────────────────────────────────────────────────
function tick() {
  // Animate systemic telemetry interface sweep
  scanY = (scanY + 0.75) % H

  // Handle crosshair magnetic micro-interpolation damping
  if (props.mode === 'orbital' && transitionProgress.value < 1.0) {
    transitionProgress.value = Math.min(1.0, transitionProgress.value + 0.07)
  } else if (props.mode === 'neighborhood' && transitionProgress.value > 0.0) {
    transitionProgress.value = Math.max(0.0, transitionProgress.value - 0.07)
  }

  draw()
  animationId = requestAnimationFrame(tick)
}

function draw() {
  const cv = navCanvas.value
  if (!cv) return
  const ctx = cv.getContext('2d')!
  ctx.save()
  ctx.scale(2, 2)
  ctx.clearRect(0, 0, W, H)
  
  // Matrix Space Background Tint
  ctx.fillStyle = '#020612'
  ctx.fillRect(0, 0, W, H)

  if (!galaxyStore.isLoaded) {
    ctx.fillStyle = 'rgba(80,130,170,0.55)'
    ctx.font      = '10px monospace'
    ctx.textAlign = 'center'
    ctx.fillText('CALIBRATING ARRAY…', W / 2, H / 2 + 4)
    ctx.restore()
    return
  }

  // Draw blending views using our scalar interpolator
  if (transitionProgress.value < 1.0) {
    ctx.save()
    ctx.globalAlpha = 1.0 - transitionProgress.value
    drawNeighborhood(ctx)
    ctx.restore()
  }
  
  if (transitionProgress.value > 0.0) {
    ctx.save()
    ctx.globalAlpha = transitionProgress.value
    drawOrbital(ctx)
    ctx.restore()
  }

  // Overlay Active UI Scan Line Sweep Effect
  if (isScanning.value) {
    ctx.strokeStyle = 'rgba(0, 210, 245, 0.06)'
    ctx.lineWidth   = 1
    ctx.beginPath()
    ctx.moveTo(0, scanY); ctx.lineTo(W, scanY)
    ctx.stroke()
  }
  
  ctx.restore()
}

function drawOrbital(ctx: CanvasRenderingContext2D) {
  const sys = galaxyStore.getSystem(props.hostname)
  if (!sys?.planets.length) return

  hitDots.length = 0
  const cx   = W / 2
  const cy   = H / 2 + 2
  const maxR = Math.min(cx - 10, cy - 14)

  const sorted = [...sys.planets].sort((a, b) => (a.pl_orbsmax ?? 999) - (b.pl_orbsmax ?? 999))
  const maxAU  = Math.max(...sorted.map(p => p.pl_orbsmax ?? 0.3), 0.3)

  // Stable HZ render configuration
  const hzInnerAU = 0.72
  const hzOuterAU = 1.77
  if (hzOuterAU <= maxAU) {
    const ri = 14 + Math.pow(hzInnerAU / maxAU, 0.52) * (maxR - 14)
    const ro = 14 + Math.pow(hzOuterAU / maxAU, 0.52) * (maxR - 14)
    const grad = ctx.createRadialGradient(cx, cy, ri, cx, cy, ro)
    grad.addColorStop(0,   'rgba(60, 200, 110, 0.00)')
    grad.addColorStop(0.5, 'rgba(60, 200, 110, 0.06)')
    grad.addColorStop(1,   'rgba(60, 200, 110, 0.00)')
    ctx.fillStyle = grad
    ctx.beginPath(); ctx.arc(cx, cy, ro, 0, Math.PI * 2); ctx.arc(cx, cy, ri, 0, Math.PI * 2, true); ctx.fill()
  }

  sorted.forEach((p, i) => {
    const au     = p.pl_orbsmax ?? (0.12 * (i + 1))
    const frac   = Math.pow(Math.min(au / maxAU, 1), 0.52)
    const orbitR = 14 + frac * (maxR - 14)
    const isCur  = p.pl_name === props.currentPlanet
    const col    = planetHex(p.pl_eqt, p.pl_orbsmax)

    const angle  = -Math.PI * 0.5 + (i / sorted.length) * Math.PI * 2
    const px     = cx + Math.cos(angle) * orbitR
    const py     = cy + Math.sin(angle) * orbitR

    hitDots.push({ planet: p, cx: px, cy: py })

    // Active Orbit Ring highlight logic on selection
    ctx.beginPath()
    ctx.setLineDash(isCur ? [] : [2, 4])
    ctx.strokeStyle = isCur ? 'rgba(0, 210, 235, 0.7)' : 'rgba(30, 70, 110, 0.35)'
    ctx.lineWidth   = isCur ? 1.2 : 0.6
    ctx.arc(cx, cy, orbitR, 0, Math.PI * 2)
    ctx.stroke()
    ctx.setLineDash([])

    // Pulse core engine tracking
    if (isCur) {
      ctx.fillStyle = col + '22'
      ctx.beginPath(); ctx.arc(px, py, 7 + Math.sin(scanY * 0.1) * 2, 0, Math.PI * 2); ctx.fill()
    }

    ctx.fillStyle = isCur ? col : col + 'b3'
    ctx.beginPath(); ctx.arc(px, py, isCur ? 3.5 : 2.0, 0, Math.PI * 2); ctx.fill()

    if (hoveredPlanet.value?.pl_name === p.pl_name) {
      ctx.strokeStyle = '#ffffff'
      ctx.lineWidth   = 1.0
      ctx.beginPath(); ctx.arc(px, py, 5, 0, Math.PI * 2); ctx.stroke()
    }
  })

  // Center Target Core Star
  const sc = starHex(sys.st_teff)
  ctx.fillStyle = sc
  ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill()
}

function drawNeighborhood(ctx: CanvasRenderingContext2D) {
  const sys = galaxyStore.getSystem(props.hostname)
  if (!sys) return

  const cx  = W / 2
  const cy  = H / 2
  const DEG = 18

  // Render ambient field stars
  for (const [, s] of galaxyStore.systems) {
    const dx =  (s.ra  - sys.ra)  * (cx / DEG)
    const dy = -(s.dec - sys.dec) * (cy / DEG)
    const sx = cx + dx
    const sy = cy + dy
    if (sx < 1 || sx > W - 1 || sy < 1 || sy > H - 1) continue
    ctx.fillStyle = starHex(s.st_teff) + '44'
    ctx.fillRect(sx, sy, 1.2, 1.2)
  }

  // Crosshair with active target snapping offsets
  const hx = cx + targetCrosshairOffset.value.x
  const hy = cy + targetCrosshairOffset.value.y

  ctx.strokeStyle = 'rgba(0,210,245,0.7)'
  ctx.lineWidth   = 0.8
  ctx.beginPath()
  ctx.moveTo(hx - 12, hy); ctx.lineTo(hx - 4, hy)
  ctx.moveTo(hx +  4, hy); ctx.lineTo(hx + 12, hy)
  ctx.moveTo(hx, hy - 12); ctx.lineTo(hx, hy -  4)
  ctx.moveTo(hx, hy +  4); ctx.lineTo(hx, hy + 12)
  ctx.stroke()
}

// ── Interaction Mechanisms ────────────────────────────────────────────────────
function canvasCoords(e: MouseEvent): { x: number; y: number } {
  const rect = (e.currentTarget as HTMLCanvasElement).getBoundingClientRect()
  return {
    x: (e.clientX - rect.left) * (W / rect.width),
    y: (e.clientY - rect.top)  * (H / rect.height),
  }
}

function onCanvasHover(e: MouseEvent) {
  const { x, y } = canvasCoords(e)
  const rect = (e.currentTarget as HTMLCanvasElement).getBoundingClientRect()
  
  tooltipStyle.value = {
    left: `${e.clientX - rect.left + 12}px`,
    top:  `${e.clientY - rect.top  - 28}px`,
  }

  if (props.mode === 'orbital') {
    let best: Planet | null = null
    let bestD = 14 // Snap threshold radius limit
    for (const d of hitDots) {
      const dist = Math.hypot(d.cx - x, d.cy - y)
      if (dist < bestD) { bestD = dist; best = d.planet }
    }
    if (best?.pl_name !== hoveredPlanet.value?.pl_name) {
      hoveredPlanet.value = best
    }
  } else {
    // Neighborhood Magnetic Pull feedback calculations
    const cx = W / 2, cy = H / 2
    const distanceToStar = Math.hypot(cx - x, cy - y)
    if (distanceToStar < 30) {
      targetCrosshairOffset.value = { x: (x - cx) * 0.45, y: (y - cy) * 0.45 }
    } else {
      targetCrosshairOffset.value = { x: 0, y: 0 }
    }
  }
}

function onCanvasLeave() {
  hoveredPlanet.value = null
  targetCrosshairOffset.value = { x: 0, y: 0 }
}

function onCanvasClick(e: MouseEvent) {
  if (props.mode !== 'orbital' || !hoveredPlanet.value) return
  emit('select-planet', hoveredPlanet.value.pl_name)
  void router.push(`/surface/${encodeURIComponent(props.hostname)}/${encodeURIComponent(hoveredPlanet.value.pl_name)}`)
}

// ── Lifecycle Hook Handlers ───────────────────────────────────────────────────
onMounted(() => {
  tick()
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
})

watch(() => props.mode, (newMode) => {
  lastMode = newMode
})
</script>

<style scoped>
.nav-inset {
  position: absolute;
  bottom: 142px;
  right: 14px;
  width: 180px;
  background: rgba(2, 6, 18, 0.93);
  border: 1px solid rgba(0, 140, 200, 0.35);
  border-radius: 6px;
  overflow: visible;
  backdrop-filter: blur(12px);
  box-shadow: 0 8px 32px rgba(0, 2, 10, 0.6);
  z-index: 5;
  transition: border-color 0.3s ease;
}

.nav-inset:hover {
  border-color: rgba(0, 210, 245, 0.5);
}

.nav-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px 8px 4px;
  border-bottom: 1px solid rgba(0, 90, 150, 0.25);
  background: rgba(0, 15, 35, 0.4);
}

.nav-icon {
  font-size: 7px;
  color: rgba(0, 190, 240, 0.85);
  transition: transform 0.2s ease;
}

.nav-icon-pulse {
  animation: telemetryPulse 2s infinite ease-in-out;
}

.nav-canvas {
  display: block;
  width: 180px;
  height: 160px;
  transition: filter 0.2s ease;
}

.canvas-active-target {
  filter: drop-shadow(0 0 2px rgba(0, 210, 245, 0.3));
}

.nav-tooltip {
  position: absolute;
  font-family: monospace;
  background: rgba(2, 10, 28, 0.96);
  border: 1px solid #00d2f5;
  border-radius: 4px;
  padding: 4px 8px;
  pointer-events: none;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(0,0,0,0.5);
  z-index: 20;
}

.tooltip-header {
  font-size: 8.5px;
  font-weight: bold;
  color: #ffffff;
}

.tooltip-meta {
  font-size: 7.5px;
  color: rgba(0, 210, 245, 0.8);
  margin-top: 2px;
}

.nav-footer {
  display: flex;
  justify-content: space-between;
  padding: 4px 8px;
  border-top: 1px solid rgba(0, 70, 120, 0.25);
  font-family: monospace;
  font-size: 7.5px;
  color: rgba(75, 120, 165, 0.9);
}

@keyframes telemetryPulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); color: #00d2f5; }
}
</style>