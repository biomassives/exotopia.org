<template>
  <q-page class="vi-page bg-black overflow-hidden">
    <canvas ref="canvasEl" class="vi-canvas" />

    <!-- Breadcrumb -->
    <div class="vi-breadcrumb row items-center q-gutter-xs no-wrap">
      <q-btn flat dense size="xs" color="blue-grey-5" icon="mdi-chevron-left" label="Cosmic"
        @click="$router.push('/cosmic')" />
      <span class="text-blue-grey-7 text-caption">/</span>
      <span class="text-blue-grey-4 text-caption" style="font-size:10px;letter-spacing:0.06em">
        {{ displayName }}
      </span>
    </div>

    <!-- Header -->
    <div class="vi-header">
      <div class="text-caption text-blue-grey-6 q-mb-xs" style="letter-spacing:0.12em">
        COSMIC VOID · GREAT EMPTINESS
      </div>
      <div class="text-h6 text-blue-grey-3" style="font-size:14px;letter-spacing:0.06em">
        {{ displayName }}
      </div>
      <div class="text-caption text-blue-grey-6 q-mt-xs">
        <span v-if="radiusMpc">{{ radiusMpc }} Mpc radius</span>
        <span v-if="radiusMpc && distMpc"> · </span>
        <span v-if="distMpc && distMpc > 0">{{ distMpc }} Mpc from Milky Way</span>
        <span v-if="!distMpc || distMpc === 0">surrounding the Milky Way</span>
      </div>
    </div>

    <!-- Data panel -->
    <div class="vi-data-panel">
      <div class="vi-section-label">VOID PROPERTIES</div>

      <div class="vi-row">
        <span class="vi-lbl">Structure type</span>
        <span class="vi-val">Cosmic void — underdense region</span>
      </div>
      <div v-if="radiusMpc" class="vi-row">
        <span class="vi-lbl">Radius</span>
        <span class="vi-val">{{ radiusMpc }} Mpc · {{ (radiusMpc * 3.26).toFixed(0) }} Mly</span>
      </div>
      <div v-if="distMpc && distMpc > 0" class="vi-row">
        <span class="vi-lbl">Distance</span>
        <span class="vi-val">{{ distMpc }} Mpc from Milky Way</span>
      </div>
      <div v-else-if="distMpc === 0" class="vi-row">
        <span class="vi-lbl">Location</span>
        <span class="vi-val text-blue-grey-4">We are inside this void</span>
      </div>
      <div class="vi-row">
        <span class="vi-lbl">Galaxy density</span>
        <span class="vi-val">~10–20% of cosmic mean</span>
      </div>
      <div class="vi-row">
        <span class="vi-lbl">Wormhole conduit</span>
        <span class="vi-val" :class="hasConduit ? 'text-cyan-6' : 'text-blue-grey-6'">
          {{ hasConduit ? 'Yes — transit node at void periphery' : 'None mapped' }}
        </span>
      </div>

      <div class="vi-divider" />

      <div class="vi-section-label">INTERIOR CONDITIONS</div>
      <div class="vi-row">
        <span class="vi-lbl">Star density</span>
        <span class="vi-val">Sparse — isolated field galaxies only</span>
      </div>
      <div class="vi-row">
        <span class="vi-lbl">ICM temperature</span>
        <span class="vi-val">Sub-keV · no X-ray emission</span>
      </div>
      <div class="vi-row">
        <span class="vi-lbl">Dark matter</span>
        <span class="vi-val">Severely underdense — < 20% mean</span>
      </div>
      <div class="vi-row">
        <span class="vi-lbl">Settlement tier</span>
        <span class="vi-val text-amber-8">Frontier — theoretical only</span>
      </div>

      <div v-if="hasConduit" class="vi-divider" />

      <template v-if="hasConduit">
        <div class="vi-section-label">TRANSIT</div>
        <div class="text-caption text-blue-grey-6 q-mb-sm" style="font-size:9px;line-height:1.6">
          A wormhole conduit node is located at the void periphery. Void-edge transit allows
          unlimited-range jumps between conduit nodes across the cosmic web.
        </div>
        <q-btn dense unelevated size="sm" color="blue-grey-9" class="full-width"
          icon="mdi-hexagon-outline" label="View Conduit Network"
          @click="$router.push('/cosmic')"
        />
      </template>
    </div>

    <!-- Bottom HUD -->
    <div class="vi-hud">
      <span class="text-caption text-blue-grey-7">
        Cosmic void — {{ volumeLabel }}
      </span>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import * as THREE from 'three'

// ── Route ──────────────────────────────────────────────────────────────────────

const route = useRoute()

const displayName = computed(() => String(route.query.name ?? route.params.voidId ?? 'Cosmic Void').toUpperCase())
const radiusMpc   = computed(() => route.query.radius ? Number(route.query.radius) : null)
const distMpc     = computed(() => route.query.dist   ? Number(route.query.dist)   : null)
const hasConduit  = computed(() => route.query.conduit === '1')

const volumeLabel = computed(() => {
  if (!radiusMpc.value) return 'unknown extent'
  const r = radiusMpc.value
  const vol = (4 / 3) * Math.PI * r * r * r
  if (vol > 1e6) return `${(vol / 1e6).toFixed(1)} × 10⁶ Mpc³`
  return `${Math.round(vol).toLocaleString()} Mpc³`
})

// ── Three.js: sparse particle field conveying emptiness ────────────────────────

const canvasEl = ref<HTMLCanvasElement | null>(null)
let renderer: THREE.WebGLRenderer
let animId: number

function buildScene() {
  if (!canvasEl.value) return
  const w = canvasEl.value.clientWidth
  const h = canvasEl.value.clientHeight

  renderer = new THREE.WebGLRenderer({ canvas: canvasEl.value, antialias: false, alpha: false })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))
  renderer.setClearColor(0x000004, 1)
  renderer.setSize(w, h)

  const scene  = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(60, w / h, 0.1, 500)
  camera.position.set(0, 0, 80)

  // Very sparse distant galaxies — most are faint smears at the void wall
  const wallCount = 120
  const wallGeo   = new THREE.BufferGeometry()
  const wallPos   = new Float32Array(wallCount * 3)
  const wallCol   = new Float32Array(wallCount * 3)
  for (let i = 0; i < wallCount; i++) {
    // Place on a distant shell (80–120 units) simulating void wall galaxies
    const theta = Math.random() * Math.PI * 2
    const phi   = Math.acos(2 * Math.random() - 1)
    const r     = 80 + Math.random() * 40
    wallPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta)
    wallPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
    wallPos[i * 3 + 2] = r * Math.cos(phi)
    // Warm amber tint — typical void-wall galaxy population
    wallCol[i * 3]     = 0.55 + Math.random() * 0.25
    wallCol[i * 3 + 1] = 0.35 + Math.random() * 0.20
    wallCol[i * 3 + 2] = 0.10 + Math.random() * 0.15
  }
  wallGeo.setAttribute('position', new THREE.BufferAttribute(wallPos, 3))
  wallGeo.setAttribute('color',    new THREE.BufferAttribute(wallCol, 3))
  const wallMat = new THREE.PointsMaterial({
    size: 0.6, sizeAttenuation: true,
    vertexColors: true, transparent: true, opacity: 0.55,
  })
  scene.add(new THREE.Points(wallGeo, wallMat))

  // A handful of void field galaxies — extremely isolated
  const fieldCount = 18
  const fieldGeo   = new THREE.BufferGeometry()
  const fieldPos   = new Float32Array(fieldCount * 3)
  for (let i = 0; i < fieldCount; i++) {
    fieldPos[i * 3]     = (Math.random() - 0.5) * 120
    fieldPos[i * 3 + 1] = (Math.random() - 0.5) * 120
    fieldPos[i * 3 + 2] = (Math.random() - 0.5) * 120
  }
  fieldGeo.setAttribute('position', new THREE.BufferAttribute(fieldPos, 3))
  const fieldMat = new THREE.PointsMaterial({
    color: 0x445566, size: 0.35, sizeAttenuation: true,
    transparent: true, opacity: 0.40,
  })
  scene.add(new THREE.Points(fieldGeo, fieldMat))

  // Very slow drift — the void breathes
  let t = 0
  const loop = () => {
    animId = requestAnimationFrame(loop)
    t += 0.0003
    camera.position.x = Math.sin(t * 0.7) * 4
    camera.position.y = Math.cos(t * 0.5) * 2
    camera.lookAt(0, 0, 0)
    renderer.render(scene, camera)
  }
  loop()
}

function onResize() {
  if (!canvasEl.value || !renderer) return
  renderer.setSize(canvasEl.value.clientWidth, canvasEl.value.clientHeight)
}

onMounted(() => {
  window.addEventListener('resize', onResize)
  buildScene()
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
  cancelAnimationFrame(animId)
  renderer?.dispose()
})
</script>

<style scoped>
.vi-page { position: relative; width: 100%; height: 100vh; }

.vi-canvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  display: block;
}

.vi-breadcrumb {
  position: absolute; top: 12px; left: 12px;
  z-index: 10;
  background: rgba(0,0,0,0.55);
  border-radius: 6px;
  padding: 2px 8px;
}

.vi-header {
  position: absolute; top: 44px; left: 12px;
  z-index: 10;
  max-width: 280px;
}

/* Data panel — right side */
.vi-data-panel {
  position: absolute; top: 50%; right: 16px;
  transform: translateY(-50%);
  width: 240px;
  background: rgba(2, 4, 14, 0.90);
  border: 1px solid rgba(60, 90, 140, 0.20);
  border-radius: 8px;
  padding: 14px;
  z-index: 10;
  backdrop-filter: blur(12px);
}

.vi-section-label {
  font-size: 9px;
  letter-spacing: 0.12em;
  color: rgba(80, 110, 160, 0.70);
  margin-bottom: 6px;
}

.vi-row {
  display: flex;
  justify-content: space-between;
  font-size: 9.5px;
  line-height: 1.7;
  color: rgba(180, 200, 220, 0.55);
}

.vi-lbl { color: rgba(80, 110, 150, 0.75); flex-shrink: 0; padding-right: 6px; }
.vi-val { text-align: right; }

.vi-divider {
  border-top: 1px solid rgba(60, 90, 130, 0.18);
  margin: 8px 0;
}

/* Bottom HUD */
.vi-hud {
  position: absolute; bottom: 12px; left: 50%;
  transform: translateX(-50%);
  background: rgba(0,0,0,0.45);
  border-radius: 12px;
  padding: 2px 14px;
  z-index: 10;
}
</style>
