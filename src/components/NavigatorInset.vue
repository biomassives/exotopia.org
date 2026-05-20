<template>
  <div class="nav-inset">
    <div class="nav-bar">
      <span class="nav-icon">{{ modeIcon }}</span>
      <span class="nav-title">{{ title }}</span>
    </div>
    <canvas ref="navCanvas" :width="W * 2" :height="H * 2" class="nav-canvas" />
    <div class="nav-footer">{{ scaleHint }}</div>
  </div>
</template>

<script setup lang="ts">
/**
 * NavigatorInset.vue
 *
 * Bottom-right minimap that shows spatial context one scale above the current view.
 *  mode='orbital'      → star-system orbital diagram (used on SurfaceViewPage)
 *  mode='neighborhood' → local stellar neighborhood dot-map (used on GalaxyPage system view)
 */

import { ref, computed, onMounted, watch } from 'vue'
import { useGalaxyStore }                  from 'src/stores/galaxy'

const props = defineProps<{
  mode:           'orbital' | 'neighborhood'
  hostname:       string
  currentPlanet?: string
}>()

const W = 180
const H = 140

const navCanvas   = ref<HTMLCanvasElement | null>(null)
const galaxyStore = useGalaxyStore()

const modeIcon = computed(() => props.mode === 'orbital' ? '⬤' : '✦')
const title    = computed(() =>
  props.mode === 'orbital' ? props.hostname : 'Stellar Neighborhood'
)
const scaleHint = computed(() =>
  props.mode === 'orbital' ? '↑ Galaxy view' : '↑ Cosmic web'
)

// ── Colour helpers (no THREE dependency) ─────────────────────────────────────

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
  if (au != null) {
    if (au < 0.08) return '#ff4500'
    if (au < 0.5)  return '#ff8c42'
    if (au < 1.5)  return '#4ecdc4'
    if (au < 4.0)  return '#82b4d0'
    return '#c8e8f8'
  }
  return '#7fb3d3'
}

// ── Canvas drawing ────────────────────────────────────────────────────────────

function draw() {
  const cv = navCanvas.value
  if (!cv) return
  const ctx = cv.getContext('2d')!
  ctx.save()
  ctx.scale(2, 2)   // retina 2× resolution
  ctx.clearRect(0, 0, W, H)
  ctx.fillStyle = '#020612'
  ctx.fillRect(0, 0, W, H)

  if (!galaxyStore.isLoaded) {
    ctx.fillStyle = 'rgba(80,130,170,0.55)'
    ctx.font      = '10px monospace'
    ctx.textAlign = 'center'
    ctx.fillText('Loading…', W / 2, H / 2 + 4)
  } else if (props.mode === 'orbital') {
    drawOrbital(ctx)
  } else {
    drawNeighborhood(ctx)
  }
  ctx.restore()
}

function drawOrbital(ctx: CanvasRenderingContext2D) {
  const sys = galaxyStore.getSystem(props.hostname)
  if (!sys?.planets.length) return

  const cx   = W / 2
  const cy   = H / 2 + 4
  const maxR = Math.min(cx - 10, cy - 10)

  const maxAU = Math.max(...sys.planets.map(p => p.pl_orbsmax ?? 0.3), 0.3)

  sys.planets.forEach((p, i) => {
    const au    = p.pl_orbsmax ?? (0.1 * (i + 1))
    const frac  = Math.pow(Math.min(au / maxAU, 1), 0.52)
    const r     = 14 + frac * (maxR - 14)
    const angle = (i / sys.planets.length) * Math.PI * 2 - Math.PI * 0.25
    const isCur = p.pl_name === props.currentPlanet
    const col   = planetHex(p.pl_eqt, p.pl_orbsmax)

    // Orbit ring
    ctx.beginPath()
    ctx.setLineDash(isCur ? [] : [3, 4])
    ctx.strokeStyle = isCur ? 'rgba(0,210,235,0.6)' : 'rgba(35,75,115,0.5)'
    ctx.lineWidth   = isCur ? 1.1 : 0.65
    ctx.arc(cx, cy, r, 0, Math.PI * 2)
    ctx.stroke()
    ctx.setLineDash([])

    // Planet dot
    const px = cx + Math.cos(angle) * r
    const py = cy + Math.sin(angle) * r

    if (isCur) {
      const g = ctx.createRadialGradient(px, py, 0, px, py, 9)
      g.addColorStop(0, col + 'cc')
      g.addColorStop(1, 'transparent')
      ctx.fillStyle = g
      ctx.beginPath(); ctx.arc(px, py, 9, 0, Math.PI * 2); ctx.fill()
    }

    ctx.fillStyle = isCur ? col : col + '88'
    ctx.beginPath()
    ctx.arc(px, py, isCur ? 3.8 : 2.2, 0, Math.PI * 2)
    ctx.fill()

    if (isCur) {
      ctx.fillStyle = '#00ddf0'
      ctx.font      = '8px monospace'
      ctx.textAlign = px >= cx ? 'left' : 'right'
      ctx.fillText(p.pl_name, px + (px >= cx ? 5 : -5), py + 3)
    }
  })

  // Host star
  const sc = starHex(sys.st_teff)
  const g  = ctx.createRadialGradient(cx, cy, 0, cx, cy, 10)
  g.addColorStop(0,    '#ffffff')
  g.addColorStop(0.22, sc)
  g.addColorStop(1,    sc + '00')
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(cx, cy, 10, 0, Math.PI * 2); ctx.fill()

  // Host label
  ctx.fillStyle = 'rgba(160,200,225,0.65)'
  ctx.font      = '7px monospace'
  ctx.textAlign = 'center'
  ctx.fillText(sys.hostname, cx, H - 4)
}

function drawNeighborhood(ctx: CanvasRenderingContext2D) {
  const sys = galaxyStore.getSystem(props.hostname)
  if (!sys) return

  const cx  = W / 2
  const cy  = H / 2
  const DEG = 18    // RA/Dec degrees shown across half-width

  // Background stars (first ~350 entries as representative sample)
  let n = 0
  for (const [, s] of galaxyStore.systems) {
    if (n++ > 350) break
    const dx =  (s.ra  - sys.ra)  * (cx / DEG)
    const dy = -(s.dec - sys.dec) * (cy / DEG)
    const sx = cx + dx
    const sy = cy + dy
    if (sx < 1 || sx > W - 1 || sy < 1 || sy > H - 1) continue
    ctx.fillStyle = starHex(s.st_teff) + '55'
    ctx.fillRect(sx - 0.9, sy - 0.9, 1.8, 1.8)
  }

  // Current system glow
  const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, 8)
  g.addColorStop(0,    '#ffffff')
  g.addColorStop(0.35, starHex(sys.st_teff))
  g.addColorStop(1,    'transparent')
  ctx.fillStyle = g
  ctx.beginPath(); ctx.arc(cx, cy, 8, 0, Math.PI * 2); ctx.fill()

  // Crosshair
  ctx.strokeStyle = 'rgba(0,210,245,0.55)'
  ctx.lineWidth   = 0.7
  ctx.beginPath()
  ctx.moveTo(cx - 15, cy); ctx.lineTo(cx - 6, cy)
  ctx.moveTo(cx +  6, cy); ctx.lineTo(cx + 15, cy)
  ctx.moveTo(cx, cy - 15); ctx.lineTo(cx, cy -  6)
  ctx.moveTo(cx, cy +  6); ctx.lineTo(cx, cy + 15)
  ctx.stroke()

  // Distance + hostname
  ctx.fillStyle = 'rgba(110,180,215,0.75)'
  ctx.font      = '8px monospace'
  ctx.textAlign = 'center'
  const distStr = sys.sy_dist ? `${sys.sy_dist.toFixed(1)} pc` : ''
  ctx.fillText(`${sys.hostname}  ${distStr}`, cx, H - 4)
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────

onMounted(draw)
watch(() => [props.hostname, props.currentPlanet, galaxyStore.isLoaded] as const, draw)
</script>

<style scoped>
.nav-inset {
  position: absolute;
  bottom: 142px;
  right: 14px;
  width: 180px;
  background: rgba(2, 6, 18, 0.88);
  border: 1px solid rgba(0, 140, 200, 0.22);
  border-radius: 6px;
  overflow: hidden;
  backdrop-filter: blur(6px);
  z-index: 5;
}
.nav-bar {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 3px 8px 2px;
  border-bottom: 1px solid rgba(0, 90, 150, 0.2);
}
.nav-icon {
  font-size: 7px;
  color: rgba(0, 190, 240, 0.7);
  flex-shrink: 0;
}
.nav-title {
  font-family: monospace;
  font-size: 9px;
  letter-spacing: 0.07em;
  color: rgba(110, 190, 230, 0.85);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
}
.nav-canvas {
  display: block;
  width: 180px;
  height: 140px;
}
.nav-footer {
  padding: 2px 8px;
  border-top: 1px solid rgba(0, 70, 120, 0.2);
  font-family: monospace;
  font-size: 8px;
  color: rgba(60, 100, 140, 0.85);
  letter-spacing: 0.06em;
}
</style>
