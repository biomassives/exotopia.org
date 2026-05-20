<template>
  <q-page class="bg-black overflow-hidden" style="height:100vh">
    <canvas
      ref="canvas"
      class="three-canvas"
      :class="{ 'canvas--group-select': groupSelectMode && mode === 'galaxy' }"
      @mousedown="onCanvasMouseDown"
      @mousemove="onHover"
      @mouseleave="clearHover"
      @click="onClick"
    />

    <!-- Drag-selection rectangle (rendered on top of canvas) -->
    <div
      v-if="selRect"
      class="sel-rect"
      :style="{
        left:   Math.min(selRect.x1, selRect.x2) + 'px',
        top:    Math.min(selRect.y1, selRect.y2) + 'px',
        width:  Math.abs(selRect.x2 - selRect.x1) + 'px',
        height: Math.abs(selRect.y2 - selRect.y1) + 'px',
      }"
    />

    <!-- Group stats panel -->
    <Transition name="fade">
      <div v-if="selectedGroup.length > 0" class="group-panel">
        <div class="gp-head">
          <span class="gp-icon">◈</span>
          <span class="gp-count">{{ selectedGroup.length }} SYSTEMS IN GROUP</span>
          <button class="gp-close" @click="clearGroup">✕</button>
        </div>
        <div class="gp-stats">
          <div class="gp-row">
            <span class="gp-stat">
              <span class="gp-stat-icon">★</span>
              {{ groupStats.totalPlanets }} planets
            </span>
            <span class="gp-sep">·</span>
            <span class="gp-stat gp-stat--hz">HZ {{ groupStats.hzPlanets }}</span>
            <span class="gp-sep">·</span>
            <span class="gp-stat">★★ {{ groupStats.multiStar }}</span>
          </div>
          <div class="gp-row">
            <span class="gp-stat">⟳ {{ groupStats.totalMoons }} moons</span>
            <span class="gp-sep">·</span>
            <span class="gp-stat">avg {{ groupStats.avgDist }} pc</span>
          </div>
          <div class="gp-spec-row">
            <span v-for="(n, cls) in groupStats.spectral" :key="cls"
              class="gp-spec-chip" :style="{ color: spectralChipColor(String(cls)) }">
              {{ cls }}:{{ n }}
            </span>
          </div>
        </div>
        <div class="gp-actions">
          <button class="gp-btn gp-btn--primary" @click="focusGroup">
            ⊙ Focus group
          </button>
          <button class="gp-btn" @click="enterNearestInGroup">
            → Enter nearest
          </button>
        </div>
      </div>
    </Transition>

    <!-- Status overlay — top left -->
    <div class="space-overlay" style="top:12px;left:12px;max-width:320px">
      <div class="text-caption text-cyan-3" style="letter-spacing:0.1em">
        {{ mode === 'system' ? 'SYSTEM VIEW' : 'GALAXY VIEW' }}
      </div>
      <div class="text-caption text-blue-grey-4 q-mt-xs">{{ statusText }}</div>
    </div>

    <!-- Hover info card -->
    <Transition name="hover-fade">
      <!-- ── Activity badge hover panel ─────────────────────────────── -->
      <div v-if="hoveredInfo" class="hover-box" :style="hoverStyle">
        <div class="hb-name">{{ hoveredInfo.name }}</div>
        <div class="hb-spec">
          {{ hoveredInfo.spec ?? '—' }}
          <span v-if="hoveredInfo.dist" class="hb-dot">·</span>
          {{ hoveredInfo.dist }}
        </div>

        <!-- System composition badges -->
        <div class="hb-row hb-row--system">
          <span class="hb-badge hb-badge--planets" :title="`${hoveredInfo.planets ?? 0} confirmed planets`">
            ★ {{ hoveredInfo.planets ?? 0 }}
          </span>
          <span class="hb-badge hb-badge--moons" :title="`${hoveredInfo.moons ?? 0} known moons`">
            ⟳ {{ hoveredInfo.moons ?? 0 }}
          </span>
          <span v-if="(hoveredInfo.stars ?? 1) > 1" class="hb-badge hb-badge--binary"
            :title="`${hoveredInfo.stars}-star system`">
            ★★ {{ hoveredInfo.stars }}
          </span>
          <span v-if="hoveredInfo.hz" class="hb-badge hb-badge--hz" title="Habitable zone planet">
            HZ ✓
          </span>
        </div>

        <!-- Activity badges — live counts when pon.ink data available -->
        <div class="hb-row hb-row--activity">
          <span class="hb-badge hb-badge--settlement"
            :class="{ 'hb-badge--live': (hoveredInfo.settledCount ?? 0) > 0 }"
            title="Active settlements">
            ⬡ {{ hoveredInfo.settledCount ? hoveredInfo.settledCount : '—' }}
          </span>
          <span class="hb-badge hb-badge--art"
            :class="{ 'hb-badge--live': (hoveredInfo.artCount ?? 0) > 0 }"
            title="Art / gallery NFTs at this system">
            ♪ {{ hoveredInfo.artCount ? hoveredInfo.artCount : '—' }}
          </span>
          <span class="hb-badge hb-badge--science"
            :class="{ 'hb-badge--live': (hoveredInfo.ecoOpsCount ?? 0) > 0 }"
            title="Eco-ops / citizen science check-ins">
            ◈ {{ hoveredInfo.ecoOpsCount ? hoveredInfo.ecoOpsCount : '—' }}
          </span>
        </div>

        <div v-if="hoveredInfo.note" class="hb-note">{{ hoveredInfo.note }}</div>
      </div>
    </Transition>

    <!-- Navigator inset — bottom-right, visible in system view -->
    <NavigatorInset
      v-if="mode === 'system' && currentSystem"
      mode="neighborhood"
      :hostname="currentSystem.hostname"
    />

    <!-- Planet entry fade overlay -->
    <Transition name="planet-fade">
      <div v-if="enteringPlanet" class="planet-entry-overlay" />
    </Transition>

    <!-- System-view panel -->
    <Transition name="fade">
      <div v-if="mode === 'system' && currentSystem" class="space-overlay system-panel q-pa-md">
        <div class="text-subtitle1 text-blue-grey-1" style="letter-spacing:0.06em">
          {{ currentSystem.hostname }}
        </div>
        <div class="text-caption text-blue-grey-4 q-mb-xs">
          {{ currentSystem.st_spectype ?? '' }}
          {{ currentSystem.st_teff ? ' · ' + currentSystem.st_teff + ' K' : '' }}
          {{ currentSystem.sy_dist ? ' · ' + currentSystem.sy_dist.toFixed(1) + ' pc' : '' }}
        </div>
        <q-separator color="blue-grey-8" class="q-my-xs" />
        <div class="text-caption text-blue-grey-5 q-mb-xs">Click to zoom to planet</div>
        <div
          v-for="p in currentSystem.planets"
          :key="p.pl_name"
          class="text-caption q-mb-xs row items-center cursor-pointer planet-row"
          :class="selectedPlanet?.pl_name === p.pl_name ? 'text-cyan-3 planet-row--selected' : 'text-blue-grey-3'"
          @click="goToSurface(p.pl_name)"
        >
          <div
            class="planet-dot q-mr-sm"
            :style="{ background: '#' + planetColorHex(p) }"
          />
          {{ p.pl_name }}
          <span class="text-blue-grey-5 q-ml-xs">
            {{ p.pl_eqt != null ? p.pl_eqt + ' K' : '' }}
            {{ p.pl_rade != null ? ' · ' + p.pl_rade.toFixed(1) + ' R⊕' : '' }}
          </span>
          <q-icon v-if="selectedPlanet?.pl_name === p.pl_name"
            name="chevron_right" size="14px" color="cyan-5" class="q-ml-auto" />
        </div>
      </div>
    </Transition>

    <!-- Planet detail card -->
    <Transition name="fade">
      <div v-if="selectedPlanet" class="space-overlay planet-card q-pa-md">
        <!-- Header row -->
        <div class="row items-center q-mb-xs">
          <div class="planet-card-dot q-mr-sm"
               :style="{ background: '#' + planetColorHex(selectedPlanet) }" />
          <div class="text-subtitle2 text-blue-grey-1" style="letter-spacing:0.05em">
            {{ selectedPlanet.pl_name }}
          </div>
          <q-btn flat dense round icon="close" color="blue-grey-5" size="xs"
            class="q-ml-auto" @click="selectedPlanet = null" />
        </div>
        <div class="text-caption text-cyan-6 q-mb-xs">
          Exoplanet · {{ selectedPlanet.hostname }}
          {{ selectedPlanet.st_spectype ? ' · ' + selectedPlanet.st_spectype : '' }}
        </div>

        <!-- Rarity badge -->
        <div v-if="selectedRarity" class="rarity-badge q-mb-sm"
             :style="{ borderColor: selectedRarity.color, color: selectedRarity.color }">
          <span class="rarity-tier">{{ selectedRarity.tier }}</span>
          <span class="rarity-desc">{{ selectedRarity.desc }}</span>
        </div>

        <q-separator color="blue-grey-8" class="q-mb-sm" />
        <div v-for="(val, key) in planetCardStats" :key="key"
             class="row justify-between q-mb-xs">
          <span class="text-caption text-blue-grey-5">{{ key }}</span>
          <span class="text-caption text-blue-grey-2 text-right" style="max-width:58%">{{ val }}</span>
        </div>
        <q-separator color="blue-grey-8" class="q-mt-sm q-mb-sm" />
        <q-btn
          dense rounded unelevated
          color="cyan-8" icon="public" label="Enter Surface"
          class="full-width"
          :loading="enteringPlanet"
          @click="enterPlanetSurface(selectedPlanet)"
        />
      </div>
    </Transition>

    <!-- ── Galaxy view layer controls (bottom-right) ──────────────── -->

    <!-- GALAXY MODE: three toggle pill layers -->
    <div v-if="mode === 'galaxy'" class="gl-controls">
      <button
        :class="['gl-pill', { 'gl-pill--on': filterHZ }]"
        @click="filterHZ = !filterHZ"
        title="Show only habitable-zone systems — others fade to near-invisible"
      >
        <span class="gl-pip" :style="{ background: filterHZ ? '#22ff88' : '#3a5a4a' }" />
        HZ WORLDS
      </button>
      <button
        :class="['gl-pill', { 'gl-pill--on': filterNearby }]"
        @click="filterNearby = !filterNearby"
        title="Highlight star systems within 150 pc of Earth"
      >
        <span class="gl-pip" :style="{ background: filterNearby ? '#00e5ff' : '#1a4055' }" />
        NEARBY
      </button>
      <button
        :class="['gl-pill', { 'gl-pill--on': showPredicted }]"
        @click="showPredicted = !showPredicted"
        title="Toggle predicted candidate and frontier star systems"
      >
        <span class="gl-pip" :style="{ background: showPredicted ? '#f0a030' : '#3a2d10' }" />
        PREDICTED
      </button>
      <button
        :class="['gl-pill', { 'gl-pill--on': groupSelectMode }]"
        @click="toggleGroupSelect"
        title="Drag to draw a selection box over star systems — release to group them"
      >
        <span class="gl-pip" :style="{ background: groupSelectMode ? '#ff9900' : '#3a2800' }" />
        GROUP SELECT
      </button>
    </div>

    <!-- SYSTEM MODE: icon-only controls on the LEFT — clear of the NavigatorInset -->
    <!-- Labels slide out on hover so the buttons never block the neighborhood viewer -->
    <div v-if="mode === 'system'" class="sys-controls">

      <button class="sys-btn"
        @click="focusedPlanet ? defocusPlanet() : exitSystem()"
        :title="focusedPlanet ? 'Return to system view' : 'Return to galaxy map'">
        <span class="sys-icon">←</span>
        <span class="sys-label">{{ focusedPlanet ? 'SYSTEM' : 'GALAXY' }}</span>
      </button>

      <button
        class="sys-btn sys-btn--surface"
        :class="{ 'sys-btn--disabled': !selectedPlanet }"
        :disabled="!selectedPlanet"
        @click="selectedPlanet && enterPlanetSurface(selectedPlanet)"
        :title="selectedPlanet ? `Enter surface of ${selectedPlanet.pl_name}` : 'Select a planet first'"
      >
        <span class="sys-icon">↗</span>
        <span class="sys-label">{{ selectedPlanet ? 'SURFACE' : 'SELECT PLANET' }}</span>
      </button>

      <button class="sys-btn"
        @click="onContextZoom"
        title="Zoom out to see Earth and this system together">
        <span class="sys-icon">↔</span>
        <span class="sys-label">EARTH ↔</span>
      </button>

    </div>

    <!-- Legend — bottom left -->
    <div class="space-overlay" style="bottom:92px;left:14px">
      <div class="legend-block q-pa-sm">
        <div class="legend-section">STAR TYPE</div>
        <div v-for="s in starLegend" :key="s.label" class="legend-row">
          <span class="legend-dot" :style="{ background: s.color }" />
          <span class="text-caption text-blue-grey-4">{{ s.label }}</span>
        </div>
        <div class="legend-section" style="margin-top:6px">PLANET TEMP</div>
        <div v-for="s in planetLegend" :key="s.label" class="legend-row">
          <span class="legend-dot" :style="{ background: s.color }" />
          <span class="text-caption text-blue-grey-4">{{ s.label }}</span>
        </div>
        <div class="legend-section" style="margin-top:6px">ACTIVITY PIPS</div>
        <div v-for="s in pipLegend" :key="s.label" class="legend-row">
          <span class="legend-dot legend-pip" :style="{ background: s.color }" />
          <span class="text-caption text-blue-grey-4">{{ s.label }}</span>
        </div>
        <div class="legend-section" style="margin-top:6px">HOVER BADGES</div>
        <div class="legend-badge-row">
          <span class="legend-badge" style="color:#b0e0b0">⬡ n</span>
          <span class="text-caption text-blue-grey-5">settlements</span>
        </div>
        <div class="legend-badge-row">
          <span class="legend-badge" style="color:#c8a0e0">♪ n</span>
          <span class="text-caption text-blue-grey-5">art / $BARS</span>
        </div>
        <div class="legend-badge-row">
          <span class="legend-badge" style="color:#a0c8e0">◈ n</span>
          <span class="text-caption text-blue-grey-5">eco-ops</span>
        </div>
        <div class="legend-badge-row">
          <span class="legend-badge" style="color:#888">—</span>
          <span class="text-caption text-blue-grey-6">no data yet</span>
        </div>
      </div>
    </div>

    <!-- Loading -->
    <Transition name="fade">
      <div v-if="!loaded" class="loading-overlay column items-center justify-center">
        <q-spinner-orbit color="cyan" size="52px" />
        <div class="text-caption text-blue-grey-4 q-mt-sm">Loading star systems…</div>
      </div>
    </Transition>

    <DefenderNav
      ref="defenderNav"
      :mode="mode === 'system' ? 'system' : 'cosmic'"
      :sceneLabel="mode === 'system' ? (currentSystem?.hostname ?? '') : 'Stellar Neighborhood'"
      :showReturnBtn="hasReturnPosition"
      @flyTo="onDefenderFlyTo"
      @portalTo="onDefenderPortalTo"
      @contextZoom="onContextZoom"
      @returnToPrev="onReturnToPrev"
    />
  </q-page>
</template>

<script setup lang="ts">
/**
 * GalaxyPage.vue
 *
 * Full galaxy + system visualisation, ported from main_oct2.js to Vue 3.
 * Galaxy view: one sphere per star system, coloured by spectral type.
 * System view: star + orbital rings + animated planets + moons.
 * GSAP camera transitions between views.
 * Click planet → navigate to /surface/:hostname/:planetName
 */

import { ref, computed, onMounted, onUnmounted, nextTick, watch, watchEffect } from 'vue'
import { useRouter, useRoute }                             from 'vue-router'
import * as THREE                                 from 'three'
import { OrbitControls }                          from 'three/examples/jsm/controls/OrbitControls.js'
import gsap                                       from 'gsap'
import { useGalaxyStore }                         from 'src/stores/galaxy'
import {
  starColorFromTeff,
  planetColor,
  raDecToVec3,
  distToViz,
  auToViz,
  fallbackAU,
} from 'src/lib/three-utils'
import { makeStarMesh, teffToSpectral } from 'src/lib/star-sprites'
import { logNavEvent }                  from 'src/lib/nav-history'
import NavigatorInset                   from 'src/components/NavigatorInset.vue'
import type { StarSystem, Planet }      from 'src/stores/galaxy'
import DefenderNav from 'src/components/DefenderNav.vue'
import type { DefenderNavData, PlanetStripEntry, StellarConfig, DefenderTarget } from 'src/lib/defender-nav.types'
import { usePortalStore } from 'src/stores/portal'

// ── Store / router ────────────────────────────────────────────────────────────

const galaxyStore = useGalaxyStore()
const portalStore = usePortalStore()
const router      = useRouter()
const route       = useRoute()

// ── UI state ──────────────────────────────────────────────────────────────────

const canvas          = ref<HTMLCanvasElement | null>(null)
const loaded          = ref(false)
const showPredicted   = ref(false)   // opt-in: loads candidate + frontier tiers

// ── Galaxy view filter layers ─────────────────────────────────────────────────

const filterHZ     = ref(false)   // HZ WORLDS — dim non-habitable-zone systems
const filterNearby = ref(false)   // NEARBY    — dim systems beyond 150 pc

function isHZSystem(sys: StarSystem): boolean {
  return sys.planets.some(p =>
    (p.pl_eqt != null && p.pl_eqt > 200 && p.pl_eqt < 380) ||
    (p.pl_orbsmax != null && p.pl_orbsmax > 0.7 && p.pl_orbsmax < 1.8)
  )
}

function applyGalaxyFilter() {
  for (const marker of galaxyMarkers) {
    const sys    = marker.userData.system as StarSystem | undefined
    const sprite = marker.userData.sprite as THREE.Sprite | undefined
    if (!sprite || !sys) continue
    const mat    = sprite.material as THREE.SpriteMaterial
    const baseOp = (marker.userData.baseOpacity as number | undefined) ?? 0.88
    let   tgt    = baseOp
    if (filterHZ.value     && !isHZSystem(sys))                 tgt = Math.min(tgt, 0.04)
    if (filterNearby.value && (sys.sy_dist ?? Infinity) > 150)  tgt = Math.min(tgt, 0.04)
    mat.opacity = tgt
  }
}

watch([filterHZ, filterNearby], ([hz, nearby]) => {
  applyGalaxyFilter()
  if (hz)      logNavEvent('hz_filter',     { activatedAt: Date.now() })
  if (nearby)  logNavEvent('nearby_filter', { activatedAt: Date.now() })
})

// ── Group selection ───────────────────────────────────────────────────────────
// Drag-select: draw a screen-space rectangle in galaxy mode to group systems.

const groupSelectMode = ref(false)
const selectedGroup   = ref<StarSystem[]>([])

// Live drag rectangle {x1,y1,x2,y2} in screen pixels
const selRect = ref<{ x1: number; y1: number; x2: number; y2: number } | null>(null)
let   selDragging = false
let   selStart    = { x: 0, y: 0 }

function toggleGroupSelect() {
  groupSelectMode.value = !groupSelectMode.value
  if (!groupSelectMode.value) clearGroup()
}

function clearGroup() {
  selectedGroup.value = []
  // Restore sprite opacities
  applyGroupHighlight([])
}

// Project a world-space position to screen pixels.
// Returns null when behind the camera or outside the viewport.
function worldToScreen(pos: THREE.Vector3): { x: number; y: number } | null {
  const v = pos.clone().project(camera)
  if (v.z > 1) return null    // behind camera
  const x = (v.x + 1) / 2 * window.innerWidth
  const y = (-v.y + 1) / 2 * window.innerHeight
  return { x, y }
}

function computeGroupSelection(r: typeof selRect.value) {
  if (!r) return
  const minX = Math.min(r.x1, r.x2), maxX = Math.max(r.x1, r.x2)
  const minY = Math.min(r.y1, r.y2), maxY = Math.max(r.y1, r.y2)

  // Minimum rectangle size — smaller = single click, not a drag
  if (maxX - minX < 8 && maxY - minY < 8) { selectedGroup.value = []; return }

  const group: StarSystem[] = []
  for (const marker of galaxyMarkers) {
    if (!marker.visible || !marker.userData.system) continue
    const sp = worldToScreen(marker.position)
    if (!sp) continue
    if (sp.x >= minX && sp.x <= maxX && sp.y >= minY && sp.y <= maxY) {
      group.push(marker.userData.system as StarSystem)
    }
  }
  selectedGroup.value = group
  applyGroupHighlight(group)
}

// Dim non-selected systems; boost selected ones.
function applyGroupHighlight(group: StarSystem[]) {
  const inGroup = new Set(group.map(s => s.hostname))
  for (const marker of galaxyMarkers) {
    const sprite = marker.userData.sprite as THREE.Sprite | undefined
    if (!sprite) continue
    const mat    = sprite.material as THREE.SpriteMaterial
    const base   = (marker.userData.baseOpacity as number | undefined) ?? 0.88

    if (group.length === 0) {
      // No selection — restore filter state
      mat.opacity = base
      applyGalaxyFilter()
    } else if (inGroup.has(marker.userData.system?.hostname)) {
      mat.opacity = Math.min(1, base * 1.1)   // selected: at/above base
      sprite.scale.setScalar((sprite.scale.x > 0 ? sprite.scale.x : 4) * 1.0)
    } else {
      mat.opacity = Math.max(0.04, base * 0.12)  // not selected: ghosted
    }
  }
}

// ── Group stats ────────────────────────────────────────────────────────────────

const groupStats = computed(() => {
  const g = selectedGroup.value
  if (!g.length) return { totalPlanets: 0, hzPlanets: 0, totalMoons: 0, multiStar: 0, avgDist: '—', spectral: {} }

  let totalPlanets = 0, hzPlanets = 0, totalMoons = 0, multiStar = 0, distSum = 0, distCount = 0
  const spectral: Record<string, number> = {}

  for (const sys of g) {
    totalPlanets += sys.planets.length
    totalMoons   += sys.sy_mnum ?? 0
    if ((sys.sy_snum ?? 1) > 1) multiStar++
    if (sys.sy_dist) { distSum += sys.sy_dist; distCount++ }
    hzPlanets += sys.planets.filter(p =>
      (p.pl_eqt != null && p.pl_eqt > 200 && p.pl_eqt < 380) ||
      (p.pl_orbsmax != null && p.pl_orbsmax > 0.7 && p.pl_orbsmax < 1.8)
    ).length

    const cls = (sys.st_spectype?.[0]?.toUpperCase()) ?? '?'
    spectral[cls] = (spectral[cls] ?? 0) + 1
  }

  // Sort spectral by count, keep top 5
  const sorted = Object.fromEntries(
    Object.entries(spectral).sort((a, b) => b[1] - a[1]).slice(0, 5)
  )

  return {
    totalPlanets, hzPlanets, totalMoons, multiStar,
    avgDist: distCount ? Math.round(distSum / distCount).toString() : '—',
    spectral: sorted,
  }
})

function spectralChipColor(cls: string): string {
  const m: Record<string, string> = { O: '#9bb0ff', B: '#aabfff', A: '#cad7ff', F: '#fff4ea', G: '#ffeecc', K: '#ffcc88', M: '#ffaa66' }
  return m[cls] ?? '#7799aa'
}

// ── Group actions ─────────────────────────────────────────────────────────────

function focusGroup() {
  const g = selectedGroup.value
  if (!g.length || !renderer) return

  // Find 3D positions for all systems in the group
  const positions: THREE.Vector3[] = []
  for (const sys of g) {
    const m = galaxyMarkers.find(mk => mk.userData.system?.hostname === sys.hostname)
    if (m) positions.push(m.position.clone())
  }
  if (!positions.length) return

  // Compute centroid and max spread
  const centroid = positions.reduce((a, b) => a.clone().add(b), new THREE.Vector3()).divideScalar(positions.length)
  const maxDist  = positions.reduce((m, p) => Math.max(m, centroid.distanceTo(p)), 0)
  const camDist  = Math.max(maxDist * 2.2, 80)

  const fromCam = camera.position.clone().sub(centroid).normalize()

  gsap.to(controls.target, {
    duration: 1.4, x: centroid.x, y: centroid.y, z: centroid.z,
    ease: 'power2.inOut', onUpdate: () => controls.update(),
  })
  gsap.to(camera.position, {
    duration: 2.0,
    x: centroid.x + fromCam.x * camDist,
    y: centroid.y + fromCam.y * camDist + camDist * 0.18,
    z: centroid.z + fromCam.z * camDist,
    ease: 'power3.inOut', onUpdate: () => controls.update(),
  })
}

function enterNearestInGroup() {
  const g = selectedGroup.value
  if (!g.length) return
  // Find the system closest to the camera
  const nearest = g.reduce((best, sys) => {
    const m    = galaxyMarkers.find(mk => mk.userData.system?.hostname === sys.hostname)
    if (!m) return best
    const dist = camera.position.distanceTo(m.position)
    return (!best.dist || dist < best.dist) ? { sys, dist } : best
  }, {} as { sys?: StarSystem; dist?: number })
  if (nearest.sys) {
    clearGroup()
    enterSystemView(nearest.sys)
  }
}

// ── Mouse handlers for drag-select ────────────────────────────────────────────

function onCanvasMouseDown(e: MouseEvent) {
  if (mode.value !== 'galaxy' || !groupSelectMode.value) return
  selDragging = true
  selStart    = { x: e.clientX, y: e.clientY }
  selRect.value = { x1: e.clientX, y1: e.clientY, x2: e.clientX, y2: e.clientY }

  // Listen for mousemove + mouseup on the window so drag outside canvas works
  window.addEventListener('mousemove', onSelMouseMove)
  window.addEventListener('mouseup',   onSelMouseUp, { once: true })
}

function onSelMouseMove(e: MouseEvent) {
  if (!selDragging) return
  selRect.value = { x1: selStart.x, y1: selStart.y, x2: e.clientX, y2: e.clientY }
}

function onSelMouseUp(e: MouseEvent) {
  selDragging = false
  window.removeEventListener('mousemove', onSelMouseMove)
  computeGroupSelection(selRect.value)
  selRect.value = null
}
const mode            = ref<'galaxy' | 'system'>('galaxy')
const currentSystem   = ref<StarSystem | null>(null)
const selectedPlanet  = ref<Planet | null>(null)
const focusedPlanet   = ref<Planet | null>(null)
const enteringPlanet  = ref(false)
interface HoverInfo {
  name:           string
  type?:          string
  spec?:          string
  dist?:          string
  planets?:       number
  moons?:         number
  stars?:         number
  hz?:            boolean
  // Activity badges — populated from pon.ink when live; 0/undefined = no data yet
  settledCount?:  number
  artCount?:      number
  ecoOpsCount?:   number
  note?:          string
}

const hoveredInfo  = ref<HoverInfo | null>(null)
const hoverStyle   = ref({ left: '0px', top: '0px' })
let   hoverTimer: ReturnType<typeof setTimeout> | null = null

const planetCardStats = computed<Record<string, string>>(() => {
  const p = selectedPlanet.value
  if (!p) return {}
  return {
    ...(p.pl_rade    != null ? { 'Radius':  p.pl_rade.toFixed(2)    + ' R⊕' } : {}),
    ...(p.pl_bmasse  != null ? { 'Mass':    p.pl_bmasse.toFixed(1)   + ' M⊕' } : {}),
    ...(p.pl_eqt     != null ? { 'Eq. Temp': Math.round(p.pl_eqt)   + ' K'  } : {}),
    ...(p.pl_orbsmax != null ? { 'Orbit':   p.pl_orbsmax.toFixed(3)  + ' AU' } : {}),
    ...(p.pl_orbper  != null ? { 'Period':  p.pl_orbper.toFixed(1)   + ' d'  } : {}),
    ...(p.pl_insol   != null ? { 'Insolation': p.pl_insol.toFixed(2) + ' S⊕' } : {}),
    ...(p.discoverymethod   ? { 'Detected': p.discoverymethod } : {}),
    'Atmosphere': atmosphereDesc(p),
    'Settlements': 'None logged',
  }
})

const selectedRarity = computed(() =>
  selectedPlanet.value ? planetRarity(selectedPlanet.value) : null
)

const statusText = computed(() => {
  if (!loaded.value) return 'Loading…'
  if (mode.value === 'galaxy')
    return `${galaxyStore.systems.size.toLocaleString()} star systems · click to explore`
  return currentSystem.value
    ? `${currentSystem.value.planets.length} planet${currentSystem.value.planets.length !== 1 ? 's' : ''}`
      + (currentSystem.value.sy_mnum > 0 ? ` · ${currentSystem.value.sy_mnum} moon${currentSystem.value.sy_mnum !== 1 ? 's' : ''}` : '')
    : ''
})

// ── Three.js refs ─────────────────────────────────────────────────────────────

let renderer:      THREE.WebGLRenderer
let scene:         THREE.Scene
let camera:        THREE.PerspectiveCamera
let controls:      OrbitControls
let raycaster:     THREE.Raycaster
let animId:        number

let galaxyMarkers:      THREE.Mesh[]       = []
let galaxyVisuals:      THREE.Object3D[]  = []   // sprites + HZ rings; show/hide with markers
let theoreticalMarkers: THREE.Mesh[]      = []
let frontierMarkers:    THREE.Mesh[]      = []
let candidateMarkers:   THREE.Mesh[]      = []
let systemObjects:      THREE.Object3D[] = []
let animObjects:        THREE.Mesh[]     = []
let focusMoonObjects:   THREE.Object3D[] = []   // spawned when zoomed to a planet
let focusedPlanetMesh:  THREE.Mesh | null = null

let currentHovered: THREE.Mesh | null = null
let binaryAngle = 0

const mouseNDC    = new THREE.Vector2()
const defenderNav = ref<InstanceType<typeof DefenderNav> | null>(null)

// ── Initialise Three.js ───────────────────────────────────────────────────────

function initScene() {
  if (!canvas.value) return

  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping        = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.85

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x02040a)

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 5000)
  camera.position.set(0, 0, 600)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping  = true
  controls.dampingFactor  = 0.12
  controls.rotateSpeed    = 0.4
  controls.zoomSpeed      = 1.2
  controls.maxDistance    = 2500
  controls.minDistance    = 4

  raycaster = new THREE.Raycaster()

  // Scene lighting
  scene.add(new THREE.AmbientLight(0x111822, 0.8))
  const dir = new THREE.DirectionalLight(0xffffff, 0.35)
  dir.position.set(1, 1, 1)
  scene.add(dir)

  window.addEventListener('resize', onResize)
  startLoop()
}

// ── Galaxy view ───────────────────────────────────────────────────────────────

function buildGalaxyView() {
  for (const [, sys] of galaxyStore.systems) {
    if (sys.ra == null || sys.dec == null) continue

    const vizDist  = distToViz(sys.sy_dist)
    const pos      = raDecToVec3(sys.ra, sys.dec, vizDist)
    const spectral = teffToSpectral(sys.st_teff)
    const pCount   = sys.planets.length
    const dist     = sys.sy_dist ?? 500
    const teff     = sys.st_teff ?? 5778

    // ── Size from stellar luminosity ────────────────────────────────────────
    // Main-sequence approximation: L ∝ T^4 (Stefan-Boltzmann for fixed radius).
    // logLum: 0 = solar,  +4 = hot O supergiant (~10⁴ L☉),  -3 = faint M dwarf.
    const lumEst = Math.pow(teff / 5778, 4)
    const logLum = Math.log10(Math.max(0.0001, lumEst))
    // Scene-unit diameter: M-dwarf → ~2.5, G-type → ~3.8, A-type → ~7, O-type → ~14
    const baseSize = Math.max(2.5, 3.8 + logLum * 2.6)

    // Bonus: more planets = system has been surveyed deeply → slightly larger dot
    const richBoost = Math.min(2.2, pCount * 0.40)
    // Nearby stars (< 40 pc) are visually prominent — modest extra size
    const nearBoost = dist < 20 ? 1.8 : dist < 40 ? 0.8 : dist < 100 ? 0.2 : 0
    const sizeUnits = baseSize + richBoost + nearBoost

    // ── Apparent magnitude from luminosity + distance ───────────────────────
    // m = M_abs + 5·log₁₀(d/10pc),  M_abs ≈ 4.83 - 2.5·logLum
    const appMag = 4.83 - 2.5 * logLum + 5 * Math.log10(Math.max(10, dist) / 10)
    // Map to 3 sprite tiers used by makeStarMesh
    const magnitude = appMag < 1 ? 1 : appMag < 4.5 ? 3 : 7

    const sprite  = makeStarMesh(spectral, magnitude, sizeUnits)
    const baseOp  = (sprite.material as THREE.SpriteMaterial).opacity
    sprite.position.copy(pos)
    scene.add(sprite)
    galaxyVisuals.push(sprite)

    // ── System property detection ────────────────────────────────────────────
    const hasHZ = sys.planets.some(p =>
      (p.pl_eqt != null && p.pl_eqt > 200 && p.pl_eqt < 380) ||
      (p.pl_orbsmax != null && p.pl_orbsmax > 0.7 && p.pl_orbsmax < 1.8)
    )
    const moons = sys.sy_mnum ?? 0
    const stars  = sys.sy_snum ?? 1

    // ── HZ pip — replaces the full green ring ─────────────────────────────
    // A tiny glowing green dot offset at ~2 o'clock from the star sprite.
    // Same information density at 1/50th the visual weight.
    if (hasHZ) {
      const pip = makeGlowPip(0x22ff88, Math.max(2.2, sizeUnits * 0.28))
      pip.position.copy(pos)
      pip.position.x += sizeUnits * 0.60    // 2 o'clock offset
      pip.position.y += sizeUnits * 0.35
      pip.userData = { type: 'hz_pip' }
      scene.add(pip)
      galaxyVisuals.push(pip)
    }

    // ── Rich system pip — 5+ planets get a blue dot at 10 o'clock ────────
    if (pCount >= 5) {
      const pip = makeGlowPip(0x88bbff, Math.max(1.8, sizeUnits * 0.22))
      pip.position.copy(pos)
      pip.position.x -= sizeUnits * 0.60    // 10 o'clock offset
      pip.position.y += sizeUnits * 0.35
      pip.userData = { type: 'rich_pip' }
      scene.add(pip)
      galaxyVisuals.push(pip)
    }

    // ── Binary/multi-star pip — amber at 6 o'clock ────────────────────────
    if (stars >= 2) {
      const pip = makeGlowPip(0xffd480, Math.max(1.8, sizeUnits * 0.22))
      pip.position.copy(pos)
      pip.position.y -= sizeUnits * 0.55    // 6 o'clock offset
      pip.userData = { type: 'binary_pip' }
      scene.add(pip)
      galaxyVisuals.push(pip)
    }

    // ── Invisible hit sphere ────────────────────────────────────────────────
    const hitR  = Math.max(4.5, sizeUnits * 0.60)
    const mesh  = new THREE.Mesh(
      new THREE.SphereGeometry(hitR, 8, 8),
      new THREE.MeshBasicMaterial({ visible: false })
    )
    mesh.position.copy(pos)
    mesh.userData = {
      type:   'star_system',
      system: sys,
      sprite,
      hoverInfo: {
        name:    sys.hostname,
        type:    'Star System',
        spec:    sys.st_spectype
          ?? (sys.st_teff ? `${spectral}-type  ${Math.round(teff)} K` : undefined),
        dist:    dist ? `${dist.toFixed(1)} pc` : undefined,
        planets: pCount,
        moons,
        stars,
        hz:      hasHZ,
        settledCount: 0, artCount: 0, ecoOpsCount: 0,
      } as HoverInfo,
      baseOpacity: baseOp,   // stored for filter restoration
    }
    scene.add(mesh)
    galaxyMarkers.push(mesh)
  }
}

// ── Theoretical systems (sparse/unsurveyed sky regions) ──────────────────────

function buildTheoreticalSystems() {
  // 15 canonical zones from SPEC_NFT_FRONTIER.md Appendix A
  // Each zone: [zone_id, ra_min, ra_max, dec_min, dec_max, count, dist_min_pc, dist_max_pc, mission_zone_id | null]
  const ZONES: [string, number, number, number, number, number, number, number, string | null][] = [
    ['south-cap-1',       0, 360, -90, -75, 40,  200, 1800, null],
    ['south-cap-2',       0,  90, -75, -60, 35,  150, 1600, null],
    ['south-cap-3',      90, 270, -75, -60, 35,  150, 1600, null],
    ['sculptor-eridanus', 0,  90, -45, -10, 55,   90, 1600, null],
    ['south-mid-1',       0,  60, -60, -30, 40,  120, 1400, null],
    ['south-mid-2',     120, 210, -60, -30, 40,  120, 1400, null],
    ['galactic-cap-n',  120, 240,  60,  90, 28,   80, 1200, null],
    ['coma-virgo-gap',  180, 270,  30,  60, 50,   80, 1400, null],
    ['oph-sgr-gap',     240, 285,   5,  30, 35,  100, 2000, null],
    ['roman-zone',      260, 273, -32, -26, 30,  400, 8000, 'roman-zone'],
    ['plato-1',         243, 264,  54,  66, 55,   60, 1200, 'plato-1'],
    ['plato-2',          83, 104, -36, -24, 55,   60, 1200, 'plato-2'],
    ['lsst-south-1',      0,  90, -30,  -5, 45,  100, 2000, 'lsst-south'],
    ['lsst-south-2',    150, 240, -30,  -5, 45,  100, 2000, 'lsst-south'],
    ['csst-zone',       300, 360, -10,  30, 30,  150, 1800, null],
  ]

  const rng = mulberry32(99991)

  // Colour by zone type
  function zoneColor(missionZone: string | null): THREE.Color {
    if (missionZone === 'roman-zone')  return new THREE.Color().setHSL(0.08, 0.6, 0.28)  // amber-red
    if (missionZone === 'plato-1' || missionZone === 'plato-2') return new THREE.Color().setHSL(0.55, 0.5, 0.28) // blue
    if (missionZone === 'lsst-south') return new THREE.Color().setHSL(0.35, 0.35, 0.25) // green-grey
    return new THREE.Color().setHSL(0.72 + rng() * 0.08, 0.18, 0.22 + rng() * 0.12)    // default violet
  }

  for (const [zone_id, raMin, raMax, decMin, decMax, count, distMin, distMax, missionZone] of ZONES) {
    const col = zoneColor(missionZone)

    for (let i = 0; i < count; i++) {
      const ra   = raMin + rng() * (raMax - raMin)
      const dec  = decMin + rng() * (decMax - decMin)
      const dist = distMin + rng() * (distMax - distMin)

      const vizDist = distToViz(dist)
      const pos     = raDecToVec3(ra, dec, vizDist)

      const geo = new THREE.SphereGeometry(0.55, 5, 5)
      const mat = new THREE.MeshStandardMaterial({
        color: col, emissive: col, emissiveIntensity: 0.35,
        transparent: true, opacity: missionZone ? 0.65 : 0.50,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.copy(pos)
      mesh.userData = {
        type:        'theoretical_system',
        zone_id,
        mission_zone: missionZone,
        label:       missionZone
          ? `⊙ ${missionZone.toUpperCase()} zone — ${Math.round(dist)} pc`
          : `⊙ Theoretical — ${zone_id}  (${Math.round(dist)} pc)`,
        ra, dec, dist,
      }
      scene.add(mesh)
      theoreticalMarkers.push(mesh)
    }
  }
}

function mulberry32(seed: number) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

function buildCandidateView() {
  for (const p of galaxyStore.candidatePlanets) {
    if (p.ra == null || p.dec == null) continue
    const vizDist = distToViz(p.sy_dist)
    const pos     = raDecToVec3(p.ra, p.dec, vizDist)

    // Warm amber — visually distinct from confirmed (spectral) and frontier (blue-grey)
    const col = new THREE.Color(0xf0a030)

    // Small amber sprite (slightly smaller than confirmed stars)
    const sprite = makeStarMesh('K', 6, 1.8)
    sprite.position.copy(pos)
    scene.add(sprite)

    // Invisible hit sphere
    const hitMesh = new THREE.Mesh(
      new THREE.SphereGeometry(3.5, 6, 6),
      new THREE.MeshBasicMaterial({ visible: false })
    )
    hitMesh.position.copy(pos)
    hitMesh.userData = {
      type: 'candidate_system',
      planet: p,
      hoverInfo: {
        name:    p.hostname,
        type:    'Planet Candidate',
        spec:    p.st_spectype ?? (p.st_teff ? `${Math.round(p.st_teff)} K` : undefined),
        dist:    p.sy_dist ? `${p.sy_dist.toFixed(1)} pc` : undefined,
        planets: 1,
        note:    `⚠ CANDIDATE · ${p.source_catalog?.toUpperCase() ?? ''} ${p.source_id ?? ''}`,
      } as HoverInfo,
    }
    scene.add(hitMesh)
    candidateMarkers.push(hitMesh)
  }
}

function buildFrontierView() {
  for (const p of galaxyStore.frontierPlanets) {
    if (p.ra == null || p.dec == null) continue
    const vizDist = distToViz(p.sy_dist)
    const pos     = raDecToVec3(p.ra, p.dec, vizDist)

    // Pale blue-grey — dim, clearly distinct from confirmed
    const sprite = makeStarMesh('A', 8, 1.4)
    ;(sprite.material as THREE.SpriteMaterial).opacity = 0.50
    sprite.position.copy(pos)
    scene.add(sprite)

    const hitMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.8, 5, 5),
      new THREE.MeshBasicMaterial({ visible: false })
    )
    hitMesh.position.copy(pos)
    hitMesh.userData = {
      type: 'frontier_system',
      planet: p,
      hoverInfo: {
        name:    p.hostname,
        type:    'Frontier (Predicted)',
        spec:    p.st_spectype ?? (p.st_teff ? `${Math.round(p.st_teff)} K` : undefined),
        dist:    p.sy_dist ? `${p.sy_dist.toFixed(1)} pc` : undefined,
        planets: 1,
        note:    `◌ FRONTIER · ${p.mission_zone ? p.mission_zone.toUpperCase() + ' · ' : ''}HIP ${p.source_id ?? ''}`,
      } as HoverInfo,
    }
    scene.add(hitMesh)
    frontierMarkers.push(hitMesh)
  }
}

const KNOWN_CIRCUMBINARY = new Set([
  'Kepler-16', 'Kepler-34', 'Kepler-35', 'Kepler-38', 'Kepler-47',
  'Kepler-64', 'Kepler-413', 'Kepler-453', 'Kepler-1647', 'TOI-1338',
  'BEBOP-1', 'Kepler-1661',
])

function resolveStellarConfig(sys: import('src/stores/galaxy').StarSystem): StellarConfig {
  const snum = sys.sy_snum ?? 1
  if (snum <= 1) return { type: 'single' }

  const primaryTeff    = sys.st_teff ?? 5778
  const companionTeff  = primaryTeff * 0.72
  const innermostAU    = Math.min(...sys.planets.map(p => p.pl_orbsmax ?? 999).filter(v => v < 990))
  const isCircumbinary = KNOWN_CIRCUMBINARY.has(sys.hostname) || (innermostAU > 0.8 && snum === 2)

  if (snum === 2) {
    if (isCircumbinary) {
      const sep = Math.max(0.05, isNaN(innermostAU) ? 0.2 : innermostAU / 4)
      return {
        type: 'circumbinary',
        innerBinary: {
          primaryTeff, companionTeff,
          separation: sep,
          periodDays: Math.pow(sep, 1.5) * 365.25,
          angle: 0,
          massRatio: 0.72,
          forbiddenZoneRadius: sep * 3.5,
        },
      }
    }
    return {
      type: 'circumstellar',
      companion: { teff: companionTeff, orbitalRadius: 50, orbitalAngle: 0, massRatio: 0.72 },
    }
  }

  const sep = Math.max(0.05, isNaN(innermostAU) ? 0.1 : innermostAU / 4)
  return {
    type: 'hierarchical_triple',
    innerBinary: {
      primaryTeff, companionTeff,
      separation: sep,
      periodDays: Math.pow(sep, 1.5) * 365.25,
      angle: 0,
      massRatio: 0.72,
      forbiddenZoneRadius: sep * 3.5,
    },
    outerCompanion: { teff: companionTeff * 0.8, orbitalRadius: 200, orbitalAngle: 0 },
  }
}

// ── Activity pip helper ───────────────────────────────────────────────────────
// Creates a tiny notification-dot Sprite that replaces heavy ring geometry.
// The radial gradient gives a soft glow; AdditiveBlending makes it space-accurate.

function makeGlowPip(hexColor: number, size: number): THREE.Sprite {
  const cv  = document.createElement('canvas')
  cv.width  = cv.height = 32
  const ctx = cv.getContext('2d')!
  const col = '#' + new THREE.Color(hexColor).getHexString()
  const grd = ctx.createRadialGradient(16, 16, 0, 16, 16, 16)
  grd.addColorStop(0,   col)
  grd.addColorStop(0.40, col)
  grd.addColorStop(1,    'rgba(0,0,0,0)')
  ctx.fillStyle = grd
  ctx.fillRect(0, 0, 32, 32)
  const mat = new THREE.SpriteMaterial({
    map:         new THREE.CanvasTexture(cv),
    transparent: true,
    depthWrite:  false,
    blending:    THREE.AdditiveBlending,
    opacity:     0.78,
  })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.setScalar(size)
  return sprite
}

// ── System view ───────────────────────────────────────────────────────────────

// Deterministic orbital inclination per planet — adds visual depth without
// astronomical fiction.  Seeded from hostname + index so the same system
// always looks the same.  Range: ±11°.
function planetInclinationRad(hostname: string, idx: number): number {
  let h = 0
  for (let i = 0; i < hostname.length; i++) h = (h * 31 + hostname.charCodeAt(i)) >>> 0
  const raw = ((h ^ (idx * 2654435761)) >>> 0) / 0xffffffff
  return (raw - 0.5) * (22 * Math.PI / 180)
}

function enterSystemView(sys: StarSystem) {
  if (mode.value === 'system') exitSystemViewImmediate()
  mode.value       = 'system'
  currentSystem.value = sys

  // Log for smart preset generation in MintStylePage
  logNavEvent('system_view', {
    hostname: sys.hostname,
    dist:     sys.sy_dist,
    teff:     sys.st_teff,
    spectype: sys.st_spectype,
    pCount:   sys.planets.length,
    moons:    sys.sy_mnum ?? 0,
    snum:     sys.sy_snum ?? 1,
    hasHZ:    isHZSystem(sys),
  })

  // Hide galaxy markers and their visual sprites
  const marker = galaxyMarkers.find(m => m.userData.system.hostname === sys.hostname) ?? null
  galaxyMarkers.forEach(m => { m.visible = m === marker })
  galaxyVisuals.forEach(v => { v.visible = false })

  const starPos = marker ? marker.position.clone() : new THREE.Vector3(0, 0, 0)
  buildSystemScene(sys, starPos)
  moveCameraToSystem(starPos, sys.planets.length)
}

function buildSystemScene(sys: StarSystem, starPos: THREE.Vector3) {
  const starCol     = starColorFromTeff(sys.st_teff)
  const spectral    = teffToSpectral(sys.st_teff)

  // ── Star: invisible hit-target sphere + sprite glow + corona ────────────
  const hitGeo  = new THREE.SphereGeometry(9, 16, 16)
  const hitMat  = new THREE.MeshBasicMaterial({ visible: false })
  const starMesh = new THREE.Mesh(hitGeo, hitMat)
  starMesh.position.copy(starPos)
  starMesh.userData = {
    type: 'star', system: sys,
    label: `★ ${sys.hostname}${sys.st_spectype ? '  [' + sys.st_spectype + ']' : ''}${sys.st_teff ? '  ' + Math.round(sys.st_teff) + ' K' : ''}`,
  }
  scene.add(starMesh); systemObjects.push(starMesh)

  // Sprite — scientifically coloured, additive blending
  const starSprite = makeStarMesh(spectral, 1, 80)
  starSprite.position.copy(starPos)
  scene.add(starSprite); systemObjects.push(starSprite as unknown as THREE.Object3D)

  // Large corona glow sphere
  const coronaGeo = new THREE.SphereGeometry(30, 12, 12)
  const coronaMat = new THREE.MeshBasicMaterial({
    color: starCol, transparent: true, opacity: 0.08,
    depthWrite: false, blending: THREE.AdditiveBlending,
  })
  const corona = new THREE.Mesh(coronaGeo, coronaMat)
  corona.position.copy(starPos)
  scene.add(corona); systemObjects.push(corona)

  const starLight = new THREE.PointLight(starCol, 3, 900)
  starLight.position.copy(starPos)
  scene.add(starLight); systemObjects.push(starLight)

  // ── Habitable zone band ─────────────────────────────────────────────���────
  // Approximate luminosity from teff (main-sequence): L ∝ T^4
  const teff  = sys.st_teff ?? 5778
  const lum   = Math.pow(teff / 5778, 4)
  const hzIn  = auToViz(Math.sqrt(lum / 1.1))
  const hzOut = auToViz(Math.sqrt(lum / 0.36))
  const hzGeo = new THREE.RingGeometry(hzIn, hzOut, 128)
  const hzMat = new THREE.MeshBasicMaterial({
    color: 0x22ff88, side: THREE.DoubleSide,
    transparent: true, opacity: 0.08,
    depthWrite: false,
  })
  const hzRing = new THREE.Mesh(hzGeo, hzMat)
  hzRing.rotation.x = Math.PI / 2
  hzRing.position.copy(starPos)
  hzRing.userData = { type: 'orbit_ring' }
  scene.add(hzRing); systemObjects.push(hzRing)

  // ── Planets ───────────────────────────────────────────────────────��──────
  const sorted = [...sys.planets].sort((a, b) => {
    const au = (p: Planet) => p.pl_orbsmax != null ? p.pl_orbsmax : 999
    return au(a) - au(b)
  })

  sorted.forEach((pl, i) => {
    const orbAU  = pl.pl_orbsmax != null ? pl.pl_orbsmax : fallbackAU(i, sorted.length)
    const orbR   = auToViz(orbAU)

    // Per-planet inclination — deterministic, ±11°, removes the flat merry-go-round look
    const incl = planetInclinationRad(sys.hostname, i)

    // Orbital ring — thicker (0.55 wide), planet-color-tinted, tilted by inclination
    const ringCol = planetColor(pl.pl_eqt, orbAU).clone().lerp(new THREE.Color(0x08121e), 0.45)
    const ring = new THREE.Mesh(
      new THREE.RingGeometry(orbR - 0.55, orbR + 0.55, 96),
      new THREE.MeshBasicMaterial({
        color: ringCol, side: THREE.DoubleSide, transparent: true, opacity: 0.75, depthWrite: false,
      })
    )
    ring.rotation.x = Math.PI / 2
    ring.rotation.z = incl    // tilt ring plane to match orbital inclination
    ring.position.copy(starPos)
    ring.userData   = { type: 'orbit_ring' }
    scene.add(ring); systemObjects.push(ring)

    // Planet sphere — geometry detail + physically-typed material
    const pR    = Math.max(0.9, Math.min(5, (pl.pl_rade ?? 2.0) * 0.42))
    const pCol  = planetColor(pl.pl_eqt, orbAU)
    const initAngle = (i / sorted.length) * Math.PI * 2

    const pMesh = new THREE.Mesh(
      new THREE.SphereGeometry(pR, 32, 32),
      buildPlanetMaterial(pl, pCol)
    )
    // Apply inclination to Y — planets are no longer all coplanar
    pMesh.position.set(
      starPos.x + orbR * Math.cos(initAngle),
      starPos.y  + orbR * Math.sin(initAngle) * Math.sin(incl),
      starPos.z  + orbR * Math.sin(initAngle) * Math.cos(incl)
    )
    const periodDays = pl.pl_orbper ?? 365
    // Visual time-scale: Earth takes ~60 s to orbit; floor at 150 d prevents hot Jupiters from spinning
    const angSpeed   = (2 * Math.PI * 365) / (Math.max(periodDays, 150) * 3600)

    pMesh.userData = {
      type: 'planet', planet: pl, system: sys,
      starPos, orbR, orbAngle: initAngle, angSpeed,
      incl,
      originalEmissive: pCol.clone(),
      label: describePlanet(pl),
    }

    scene.add(pMesh); systemObjects.push(pMesh); animObjects.push(pMesh)

    const l4geo = new THREE.ConeGeometry(1.2, 3.5, 3)
    const l4mat = new THREE.MeshBasicMaterial({ color: 0x3cdc64, transparent: true, opacity: 0.7 })
    const l4mesh = new THREE.Mesh(l4geo, l4mat)
    const l4initAngle = initAngle + Math.PI / 3
    l4mesh.position.set(
      starPos.x + orbR * Math.cos(l4initAngle),
      starPos.y  + orbR * Math.sin(l4initAngle) * Math.sin(incl),
      starPos.z  + orbR * Math.sin(l4initAngle) * Math.cos(incl)
    )
    l4mesh.userData = {
      type: 'lagrange', point: 'L4', planet: pl,
      starPos, orbR, orbAngle: l4initAngle, angSpeed, incl,
      label: `L4 — ${pl.pl_name} Lagrange point (+60°)`,
    }
    scene.add(l4mesh)
    systemObjects.push(l4mesh)
    animObjects.push(l4mesh)

    const l5geo = new THREE.ConeGeometry(1.2, 3.5, 3)
    const l5mat = new THREE.MeshBasicMaterial({ color: 0xffb41e, transparent: true, opacity: 0.7 })
    const l5mesh = new THREE.Mesh(l5geo, l5mat)
    const l5initAngle = initAngle - Math.PI / 3
    l5mesh.position.set(
      starPos.x + orbR * Math.cos(l5initAngle),
      starPos.y  + orbR * Math.sin(l5initAngle) * Math.sin(incl),
      starPos.z  + orbR * Math.sin(l5initAngle) * Math.cos(incl)
    )
    l5mesh.userData = {
      type: 'lagrange', point: 'L5', planet: pl,
      starPos, orbR, orbAngle: l5initAngle, angSpeed, incl,
      label: `L5 — ${pl.pl_name} Lagrange zone (−60°)`,
    }
    scene.add(l5mesh)
    systemObjects.push(l5mesh)
    animObjects.push(l5mesh)

    // Atmosphere glow shell — opacity driven by planet type
    const atmCol     = atmosphereColor(pl.pl_eqt, orbAU)
    const atmOpacity = atmosphereOpacity(pl.pl_eqt, pl.pl_rade)
    const atmGeo = new THREE.SphereGeometry(pR * 1.28, 24, 24)
    const atmMat = new THREE.MeshBasicMaterial({
      color: atmCol, transparent: true, opacity: atmOpacity,
      depthWrite: false, blending: THREE.AdditiveBlending,
    })
    const atm = new THREE.Mesh(atmGeo, atmMat)
    atm.position.copy(pMesh.position)
    atm.userData = { type: 'atm', parentPlanet: pMesh }
    scene.add(atm); systemObjects.push(atm); animObjects.push(atm)

    // Floating 3D name label — monospace canvas sprite anchored above each planet
    {
      const lc = document.createElement('canvas')
      lc.width = 256; lc.height = 44
      const lx = lc.getContext('2d')!
      lx.clearRect(0, 0, 256, 44)
      lx.font      = 'bold 14px "Courier New", monospace'
      lx.fillStyle = '#aad4ff'
      lx.fillText(pl.pl_name, 5, 30)
      const lbl = new THREE.Sprite(new THREE.SpriteMaterial({
        map: new THREE.CanvasTexture(lc),
        transparent: true, depthWrite: false, blending: THREE.NormalBlending,
      }))
      lbl.scale.set(16, 3.5, 1)
      lbl.position.copy(pMesh.position)
      lbl.position.y += pR + 7
      lbl.userData = { type: 'planet_label', parentPlanet: pMesh, pR }
      scene.add(lbl)
      systemObjects.push(lbl)
      animObjects.push(lbl as unknown as THREE.Mesh)
    }

    // Moons on outermost planet
    if (sys.sy_mnum > 0 && i === sorted.length - 1) {
      spawnMoons(pMesh, Math.min(sys.sy_mnum, 4), pR)
    }
  })
}

function atmosphereColor(eqt: number | null | undefined, orbAU: number): THREE.Color {
  if (eqt != null && eqt > 1500) return new THREE.Color(0xff3300)
  if (eqt != null && eqt > 700)  return new THREE.Color(0xff8800)
  if (eqt != null && eqt > 200)  return new THREE.Color(0x2299ff)
  return new THREE.Color(0x88bbff)
}

function atmosphereOpacity(eqt: number | null | undefined, rade: number | null | undefined): number {
  if (rade != null && rade < 0.6) return 0.04  // bare rock — almost no atmosphere
  if (eqt != null && eqt > 2000)  return 0.32  // outgassed steam/magma glow
  if (eqt != null && eqt > 1000)  return 0.24
  if (eqt != null && eqt > 300)   return 0.18  // thick hot envelope
  if (eqt != null && eqt >= 200)  return 0.22  // habitable-zone — visible scattering
  return 0.10                                    // cold / gas giant
}

function buildPlanetMaterial(pl: Planet, pCol: THREE.Color): THREE.MeshStandardMaterial {
  const eqt  = pl.pl_eqt
  const rade = pl.pl_rade
  const mass = pl.pl_bmasse

  if ((rade != null && rade > 4) || (mass != null && mass > 50)) {
    // Gas / ice giant: banded, smooth
    return new THREE.MeshStandardMaterial({ color: pCol, emissive: pCol, emissiveIntensity: 0.10, roughness: 0.55, metalness: 0.0 })
  }
  if (eqt != null && eqt > 1800) {
    // Lava world: self-luminous
    return new THREE.MeshStandardMaterial({ color: pCol, emissive: pCol, emissiveIntensity: 0.75, roughness: 0.85, metalness: 0.0 })
  }
  if (eqt != null && eqt > 800) {
    // Hot rocky: warm glow
    return new THREE.MeshStandardMaterial({ color: pCol, emissive: pCol, emissiveIntensity: 0.40, roughness: 0.88, metalness: 0.0 })
  }
  if (eqt != null && eqt >= 200 && eqt <= 380) {
    // Temperate / ocean: blue-water sheen
    return new THREE.MeshStandardMaterial({ color: pCol, emissive: pCol, emissiveIntensity: 0.06, roughness: 0.30, metalness: 0.04 })
  }
  if (eqt != null && eqt < 120) {
    // Frozen world: icy reflective crust
    return new THREE.MeshStandardMaterial({ color: pCol, emissive: pCol, emissiveIntensity: 0.03, roughness: 0.90, metalness: 0.0 })
  }
  return new THREE.MeshStandardMaterial({ color: pCol, emissive: pCol, emissiveIntensity: 0.18, roughness: 0.70, metalness: 0.02 })
}

// ── Planet rarity + atmosphere description (for card panel) ──────────────────

function planetRarity(p: Planet): { tier: string; color: string; desc: string } {
  const rade = p.pl_rade
  const eqt  = p.pl_eqt
  const au   = p.pl_orbsmax
  const mass = p.pl_bmasse

  const earthSize  = rade != null && rade >= 0.8 && rade <= 1.4
  const superEarth = rade != null && rade > 1.4  && rade <= 2.5
  const isGas      = (rade != null && rade > 4) || (mass != null && mass > 50)
  const inHZ = (eqt != null && eqt >= 200 && eqt <= 380) ||
               (au  != null && au  >= 0.7 && au  <= 1.8)
  const ultraHot = (eqt != null && eqt > 2000) || (au != null && au < 0.04)
  const frozen   = (eqt != null && eqt < 80)

  if (earthSize && inHZ)          return { tier: 'LEGENDARY', color: '#00ffcc', desc: 'Earth analog — extreme rarity' }
  if (earthSize)                  return { tier: 'RARE',      color: '#cc88ff', desc: 'Earth-sized world' }
  if (superEarth && inHZ)         return { tier: 'RARE',      color: '#cc88ff', desc: 'Super-Earth in habitable zone' }
  if (inHZ)                       return { tier: 'UNCOMMON',  color: '#5599ff', desc: 'Habitable zone candidate' }
  if (ultraHot && !isGas)         return { tier: 'COMMON',    color: '#778899', desc: 'Extreme hot-zone world' }
  if (frozen)                     return { tier: 'COMMON',    color: '#778899', desc: 'Deep-frozen outer world' }
  if (superEarth)                 return { tier: 'UNCOMMON',  color: '#5599ff', desc: 'Super-Earth class' }
  if (isGas)                      return { tier: 'COMMON',    color: '#778899', desc: 'Gas / ice giant' }
  return                                 { tier: 'COMMON',    color: '#778899', desc: 'Cataloged rocky world' }
}

function atmosphereDesc(p: Planet): string {
  const eqt  = p.pl_eqt
  const rade = p.pl_rade
  const mass = p.pl_bmasse

  if (rade != null && rade < 0.6)             return 'Bare rock — unlikely to retain atmosphere'
  if ((rade != null && rade > 4) || (mass != null && mass > 50)) return 'Gas/ice giant — no solid surface'
  if (mass != null && mass > 15)              return 'Sub-Neptune — thick H₂/He envelope'
  if (eqt != null && eqt > 2500)             return 'Molten — volatiles vaporized'
  if (eqt != null && eqt > 1500)             return 'Outgassed steam/CO₂ atmosphere'
  if (eqt != null && eqt > 700)              return 'Dense CO₂/SO₂ volcanic atmosphere'
  if (eqt != null && eqt >= 200 && eqt <= 380) {
    if (rade != null && rade <= 1.5)          return 'Potentially habitable thin N₂/O₂'
    return 'Thick N₂/H₂O vapor envelope'
  }
  if (eqt != null && eqt < 120)              return 'CO₂/N₂ collapsed to surface (frozen)'
  return 'Atmosphere composition uncharted'
}

function spawnMoons(parentMesh: THREE.Mesh, count: number, parentR: number) {
  for (let m = 0; m < count; m++) {
    const moonOrbR = parentR + 3.5 + m * 2.8

    const mRing = new THREE.Mesh(
      new THREE.RingGeometry(moonOrbR - 0.18, moonOrbR + 0.18, 48),
      new THREE.MeshBasicMaterial({
        color: 0x334455, side: THREE.DoubleSide, transparent: true, opacity: 0.4,
      })
    )
    mRing.rotation.x = Math.PI / 2
    scene.add(mRing); systemObjects.push(mRing)

    const moonMesh = new THREE.Mesh(
      new THREE.SphereGeometry(0.38 + m * 0.08, 8, 8),
      new THREE.MeshStandardMaterial({ color: 0x9999aa, emissive: new THREE.Color(0x1a1a2a) })
    )
    moonMesh.userData = {
      type: 'moon',
      parent: parentMesh,
      ring: mRing,
      moonOrbR,
      moonAngle: (m / count) * Math.PI * 2,
      moonSpeed: (2.0 + m * 0.7) / 60,
      label: `Moon of ${parentMesh.userData.planet?.pl_name ?? 'planet'} (proposed)`,
    }
    scene.add(moonMesh); systemObjects.push(moonMesh); animObjects.push(moonMesh as THREE.Mesh)
  }
}

function exitSystemViewImmediate() {
  clearFocusMoons()
  removeContextLine()                  // clear Sol↔system line if present
  hasReturnPosition.value = false
  savedCamPos = null; savedTargetPos = null
  systemObjects.forEach(o => scene.remove(o))
  systemObjects = []
  animObjects   = []
  galaxyMarkers.forEach(m => { m.visible = true })
  galaxyVisuals.forEach(v => { v.visible = true })
  mode.value           = 'galaxy'
  currentSystem.value  = null
  selectedPlanet.value = null
  focusedPlanet.value  = null
  enteringPlanet.value = false
  controls.enabled     = true
}

function exitSystem() {
  exitSystemViewImmediate()
  gsap.to(camera.position, {
    duration: 1.4, x: 0, y: 0, z: 600,
    onUpdate: () => controls.update(),
  })
  gsap.to(controls.target, {
    duration: 1.4, x: 0, y: 0, z: 0,
    onUpdate: () => controls.update(),
  })
}

function moveCameraToSystem(starPos: THREE.Vector3, planetCount: number) {
  // Sweep in from a 3/4 elevated angle so the orbital plane is visible on arrival
  const spread = 90 + planetCount * 14
  gsap.to(camera.position, {
    duration: 2.2,
    x: starPos.x + spread * 0.28,
    y: starPos.y + spread * 0.38,
    z: starPos.z + spread,
    ease: 'power2.inOut',
    onUpdate: () => controls.update(),
  })
  gsap.to(controls.target, {
    duration: 2.2,
    x: starPos.x, y: starPos.y, z: starPos.z,
    ease: 'power2.inOut', onUpdate: () => controls.update(),
  })
}

// ── Planet focus mode ─────────────────────────────────────────────────────────

function focusPlanet(pMesh: THREE.Mesh) {
  clearFocusMoons()
  focusedPlanetMesh = pMesh
  focusedPlanet.value  = pMesh.userData.planet as Planet
  selectedPlanet.value = pMesh.userData.planet as Planet

  const p    = pMesh.position.clone()
  const pR   = (pMesh.geometry as THREE.SphereGeometry).parameters?.radius ?? 2
  const dist = Math.max(38, pR * 14)

  // Arrive at a gentle elevated angle — looking slightly down onto the orbital plane
  gsap.to(camera.position, {
    duration: 2.0,
    x: p.x + dist * 0.15,
    y: p.y + dist * 0.45,
    z: p.z + dist,
    ease: 'power2.inOut',
    onUpdate: () => controls.update(),
  })
  gsap.to(controls.target, {
    duration: 2.0,
    x: p.x, y: p.y, z: p.z,
    ease: 'power2.inOut', onUpdate: () => controls.update(),
  })

  // Equatorial ring — colour-coded by rarity tier
  const rar = planetRarity(pMesh.userData.planet as Planet)
  const eqTorus = new THREE.Mesh(
    new THREE.TorusGeometry(pR * 1.40, pR * 0.038, 8, 80),
    new THREE.MeshBasicMaterial({
      color: new THREE.Color(rar.color),
      transparent: true, opacity: 0.55,
      depthWrite: false, blending: THREE.AdditiveBlending,
    })
  )
  eqTorus.position.copy(p)
  eqTorus.rotation.x = Math.PI / 2
  scene.add(eqTorus)
  focusMoonObjects.push(eqTorus)

  // Moons: use system total, max 5
  const moonCount = Math.min(5, Math.max(1, currentSystem.value?.sy_mnum ?? 1))
  spawnFocusMoons(pMesh, moonCount, pR)
}

function spawnFocusMoons(parentMesh: THREE.Mesh, count: number, parentR: number) {
  for (let m = 0; m < count; m++) {
    // Orbit radii spaced further out than system-level moons — visible at close zoom
    const moonOrbR = parentR + 8 + m * 6

    // Ring — slightly tilted per moon for orbital-inclination realism
    const tiltDeg  = 8 + m * 12   // 8°, 20°, 32°, 44°, 56°
    const ringGeo  = new THREE.RingGeometry(moonOrbR - 0.25, moonOrbR + 0.25, 64)
    const ringMat  = new THREE.MeshBasicMaterial({
      color: 0x445566, side: THREE.DoubleSide, transparent: true, opacity: 0.35,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.rotation.x = Math.PI / 2
    ring.rotation.z = (tiltDeg * Math.PI) / 180
    scene.add(ring); focusMoonObjects.push(ring)

    // Moon mesh — slightly larger and more varied than system-level moons
    const moonR    = 0.55 + m * 0.18
    const moonHue  = 0.55 + m * 0.06     // range of grey-blue tones
    const moonCol  = new THREE.Color().setHSL(moonHue, 0.12, 0.38 + m * 0.04)
    const moonMesh = new THREE.Mesh(
      new THREE.SphereGeometry(moonR, 12, 12),
      new THREE.MeshStandardMaterial({
        color: moonCol,
        emissive: moonCol,
        emissiveIntensity: 0.08,
        roughness: 0.9,
      })
    )

    moonMesh.userData = {
      type:       'focus_moon',
      parent:     parentMesh,
      ring,
      moonOrbR,
      tiltRad:    (tiltDeg * Math.PI) / 180,
      moonAngle:  (m / count) * Math.PI * 2,
      // Gentle speeds: ~8–12× slower than system-level moons
      moonSpeed:  0.0018 + m * 0.0007,
      label:      `Moon ${m + 1} of ${parentMesh.userData.planet?.pl_name ?? 'planet'}`,
    }
    scene.add(moonMesh); focusMoonObjects.push(moonMesh)
  }
}

function clearFocusMoons() {
  focusMoonObjects.forEach(o => {
    scene.remove(o)
    if ((o as THREE.Mesh).geometry) (o as THREE.Mesh).geometry.dispose()
  })
  focusMoonObjects    = []
  focusedPlanetMesh   = null
  focusedPlanet.value = null
}

function defocusPlanet() {
  clearFocusMoons()
  selectedPlanet.value = null
  if (!currentSystem.value) return
  const marker  = galaxyMarkers.find(m => m.userData.system.hostname === currentSystem.value!.hostname)
  const starPos = marker ? marker.position.clone() : new THREE.Vector3()
  moveCameraToSystem(starPos, currentSystem.value.planets.length)
}

// ── Animation loop ────────────────────────────────────────────────────────────

function startLoop() {
  const tick = () => {
    animId = requestAnimationFrame(tick)
    controls.update()

    if (mode.value === 'system' && currentSystem.value) {
      const cfg = resolveStellarConfig(currentSystem.value)
      if (cfg.innerBinary) {
        const dtDays = (1 / 60) / 86400
        binaryAngle = (binaryAngle + (360 / cfg.innerBinary.periodDays) * dtDays) % 360
      }
    }

    if (mode.value === 'system') {
      for (const obj of animObjects) {
        const d = obj.userData
        if (d.type === 'planet') {
          d.orbAngle += d.angSpeed
          const incl = d.incl ?? 0
          obj.position.set(
            d.starPos.x + d.orbR * Math.cos(d.orbAngle),
            d.starPos.y  + d.orbR * Math.sin(d.orbAngle) * Math.sin(incl),
            d.starPos.z  + d.orbR * Math.sin(d.orbAngle) * Math.cos(incl)
          )
        } else if (d.type === 'moon') {
          d.moonAngle += d.moonSpeed
          const px = d.parent.position
          obj.position.set(
            px.x + d.moonOrbR * Math.cos(d.moonAngle),
            px.y,
            px.z + d.moonOrbR * Math.sin(d.moonAngle)
          )
          d.ring.position.copy(px)
        } else if (d.type === 'atm') {
          obj.position.copy(d.parentPlanet.position)
        } else if (d.type === 'planet_label') {
          // Follow parent planet, stay anchored above it
          obj.position.copy(d.parentPlanet.position)
          obj.position.y += (d.pR ?? 2) + 7
        } else if (d.type === 'lagrange') {
          d.orbAngle += d.angSpeed
          const incl = d.incl ?? 0
          obj.position.set(
            d.starPos.x + d.orbR * Math.cos(d.orbAngle),
            d.starPos.y  + d.orbR * Math.sin(d.orbAngle) * Math.sin(incl),
            d.starPos.z  + d.orbR * Math.sin(d.orbAngle) * Math.cos(incl),
          )
        }
      }

      // Focus moon animation — gentle, inclined orbits
      for (const obj of focusMoonObjects) {
        const d = obj.userData
        if (d.type !== 'focus_moon') continue
        d.moonAngle += d.moonSpeed
        const px  = d.parent.position
        const cos = Math.cos(d.moonAngle)
        const sin = Math.sin(d.moonAngle)
        // Apply tilt: rotate orbit plane around z-axis by tiltRad
        const ct  = Math.cos(d.tiltRad)
        const st  = Math.sin(d.tiltRad)
        obj.position.set(
          px.x + d.moonOrbR * cos,
          px.y + d.moonOrbR * sin * st,
          px.z + d.moonOrbR * sin * ct,
        )
        // Ring stays centred on planet, keeps its own rotation
        d.ring.position.copy(px)
      }
    }

    defenderNav.value?.redraw(buildDefenderData())
    renderer.render(scene, camera)
  }
  tick()
}

// ── Interaction ───────────────────────────────────────────────────────────────

function getHitTargets(): THREE.Mesh[] {
  if (mode.value === 'galaxy') return [...galaxyMarkers, ...theoreticalMarkers, ...candidateMarkers, ...frontierMarkers]
  return systemObjects.filter(
    o => (o as THREE.Mesh).isMesh && o.userData.type !== 'orbit_ring'
  ) as THREE.Mesh[]
}

function raycast(x: number, y: number) {
  const el = canvas.value!
  mouseNDC.x =  (x / el.clientWidth)  * 2 - 1
  mouseNDC.y = -(y / el.clientHeight) * 2 + 1
  raycaster.setFromCamera(mouseNDC, camera)
  return raycaster.intersectObjects(getHitTargets(), false)
}

function makeHoverInfo(obj: THREE.Mesh): HoverInfo | null {
  // Pre-built info on the mesh takes priority (galaxy-view star systems)
  if (obj.userData.hoverInfo) return obj.userData.hoverInfo as HoverInfo

  const t = obj.userData.type
  if (t === 'star') {
    const sys = obj.userData.system as StarSystem
    return {
      name:    sys.hostname,
      type:    'Host Star',
      spec:    sys.st_spectype ?? undefined,
      dist:    sys.sy_dist ? `${sys.sy_dist.toFixed(1)} pc` : undefined,
      planets: sys.planets.length,
    }
  }
  if (t === 'planet') {
    const pl = obj.userData.planet as Planet
    return {
      name: pl.pl_name,
      type: 'Exoplanet',
      spec: pl.pl_eqt    ? `${Math.round(pl.pl_eqt)} K eq.temp`    : undefined,
      dist: pl.pl_orbsmax ? `${pl.pl_orbsmax.toFixed(3)} AU orbit` : undefined,
      note: pl.discoverymethod ?? undefined,
    }
  }
  if (t === 'lagrange') {
    const pl = obj.userData.planet as Planet
    return {
      name: `${obj.userData.point} — ${pl.pl_name}`,
      type: `Lagrange ${obj.userData.point} Zone`,
      note: `Orbital stability zone ${obj.userData.point === 'L4' ? '+60°' : '−60°'} relative to ${pl.pl_name}`,
    }
  }
  if (t === 'moon' || t === 'focus_moon') {
    return { name: obj.userData.label ?? 'Moon', type: 'Natural satellite' }
  }
  if (t === 'theoretical_system') {
    return { name: 'Proposed system', type: 'Unsurveyed region', note: obj.userData.label }
  }
  const label = obj.userData.label ?? obj.userData.system?.hostname
  return label ? { name: label, type: '' } : null
}

// Object types that should never receive hover/click — they sit in front of the
// real interactive mesh (planet, star) and silently intercept pointer events.
const TRANSPARENT_TYPES = new Set([
  'orbit_ring', 'hz_ring', 'hz_pip', 'rich_pip', 'binary_pip',
  'atm',           // atmosphere sphere — larger than planet, intercepts clicks
  'planet_label',  // floating name sprite — sits above the planet
  'multi_halo',
])

/** Return the first hit that is actually interactive, skipping transparent overlays. */
function firstInteractableHit(hits: THREE.Intersection[]): THREE.Mesh | null {
  for (const h of hits) {
    const m = h.object as THREE.Mesh
    if (!TRANSPARENT_TYPES.has(m.userData.type as string)) return m
  }
  return null
}

function onHover(e: MouseEvent) {
  hoverStyle.value = { left: (e.clientX + 14) + 'px', top: (e.clientY + 14) + 'px' }

  if (hoverTimer !== null) { clearTimeout(hoverTimer); hoverTimer = null }
  if (currentHovered) { restoreHighlight(currentHovered); currentHovered = null }

  const hits = raycast(e.clientX, e.clientY)
  if (!hits.length) {
    if (hoveredInfo.value !== null) {
      hoverTimer = setTimeout(() => { hoveredInfo.value = null; hoverTimer = null }, 2000)
    }
    return
  }

  const obj = firstInteractableHit(hits)
  if (!obj) {
    if (hoveredInfo.value !== null) {
      hoverTimer = setTimeout(() => { hoveredInfo.value = null; hoverTimer = null }, 2000)
    }
    return
  }

  currentHovered = obj
  applyHighlight(obj)
  hoveredInfo.value = makeHoverInfo(obj)
}

function clearHover() {
  if (currentHovered) { restoreHighlight(currentHovered); currentHovered = null }
  // Persist label 2 s after cursor leaves canvas entirely
  if (hoveredInfo.value !== null) {
    if (hoverTimer !== null) clearTimeout(hoverTimer)
    hoverTimer = setTimeout(() => { hoveredInfo.value = null; hoverTimer = null }, 2000)
  }
}

function onClick(e: MouseEvent) {
  const hits = raycast(e.clientX, e.clientY)
  if (!hits.length) return

  // Skip transparent overlay meshes (atm spheres, label sprites, pip dots)
  // so clicks always reach the underlying interactive planet or star
  const obj = firstInteractableHit(hits)
  if (!obj) return
  const t   = obj.userData.type

  if (mode.value === 'galaxy' && t === 'star_system') {
    selectedPlanet.value = null
    enterSystemView(obj.userData.system as StarSystem)
  } else if (mode.value === 'system' && t === 'star') {
    // Clicking star while in planet focus → return to system overview
    if (focusedPlanet.value) { defocusPlanet(); return }
    selectedPlanet.value = null
  } else if (mode.value === 'system' && t === 'planet') {
    focusPlanet(obj as THREE.Mesh)
    return
  } else if (mode.value === 'galaxy' && t === 'theoretical_system') {
    // Theoretical systems: just zoom in and show label; no catalog data to enter
    const p   = obj.position.clone()
    const dir = camera.position.clone().sub(p).normalize()
    gsap.to(camera.position, {
      duration: 1.2, x: p.x + dir.x * 80, y: p.y + dir.y * 80, z: p.z + dir.z * 80,
      onUpdate: () => controls.update(),
    })
    gsap.to(controls.target, {
      duration: 1.2, x: p.x, y: p.y, z: p.z,
      onUpdate: () => controls.update(),
    })
  } else if (mode.value === 'galaxy' && (t === 'candidate_system' || t === 'frontier_system')) {
    // Show info via hoverInfo but no system entry
    const p   = obj.position.clone()
    const dir = camera.position.clone().sub(p).normalize()
    gsap.to(camera.position, {
      duration: 1.0, x: p.x + dir.x * 60, y: p.y + dir.y * 60, z: p.z + dir.z * 60,
      onUpdate: () => controls.update(),
    })
    gsap.to(controls.target, {
      duration: 1.0, x: p.x, y: p.y, z: p.z,
      onUpdate: () => controls.update(),
    })
  }
}

function goToSurface(planetName: string) {
  // Called from the system panel planet list — drives camera to the planet in 3D.
  // If the planet mesh exists in the scene, focus it (animates camera + spawns moons).
  // Fallback: just show the detail card if the system hasn't fully built yet.
  const pl = currentSystem.value?.planets.find(p => p.pl_name === planetName)
  if (!pl) return

  const pMesh = systemObjects.find(
    o => (o as THREE.Mesh).isMesh
      && o.userData.type === 'planet'
      && o.userData.planet?.pl_name === planetName,
  ) as THREE.Mesh | undefined

  if (pMesh) {
    focusPlanet(pMesh)   // animates camera + equatorial ring + moons + detail card
  } else {
    selectedPlanet.value = pl   // mesh not ready — at least show the card
  }
}

function enterPlanetSurface(pl: Planet) {
  if (enteringPlanet.value) return
  enteringPlanet.value = true
  controls.enabled = false

  // Find the planet mesh to zoom into
  const pMesh = systemObjects.find(
    o => (o as THREE.Mesh).isMesh && o.userData.type === 'planet' && o.userData.planet?.pl_name === pl.pl_name
  ) as THREE.Mesh | undefined

  const onComplete = () => void router.push(`/surface/${encodeURIComponent(pl.hostname)}/${encodeURIComponent(pl.pl_name)}`)

  if (pMesh) {
    const p = pMesh.position.clone()
    gsap.to(camera.position, {
      duration: 2.0,
      x: p.x, y: p.y, z: p.z + 1,
      ease: 'power3.in',
      onUpdate: () => controls.update(),
      onComplete,
    })
    gsap.to(controls.target, {
      duration: 1.2, x: p.x, y: p.y, z: p.z,
      ease: 'power2.in', onUpdate: () => controls.update(),
    })
  } else {
    onComplete()
  }
}

function applyHighlight(obj: THREE.Mesh) {
  // Sprite-backed hit meshes: scale up the associated sprite
  if (obj.userData.sprite) {
    const sp = obj.userData.sprite as THREE.Sprite
    obj.userData._savedSpriteScale = sp.scale.clone()
    sp.scale.multiplyScalar(1.5)
    return
  }
  const mat = obj.material as THREE.MeshStandardMaterial
  if (!mat?.emissive) return
  obj.userData._savedEmissive  = mat.emissive.getHex()
  obj.userData._savedIntensity = mat.emissiveIntensity
  mat.emissive.setHex(0xffffff)
  mat.emissiveIntensity = 0.85
}

function restoreHighlight(obj: THREE.Mesh) {
  if (obj.userData.sprite && obj.userData._savedSpriteScale) {
    const sp = obj.userData.sprite as THREE.Sprite
    sp.scale.copy(obj.userData._savedSpriteScale)
    obj.userData._savedSpriteScale = undefined
    return
  }
  const mat = obj.material as THREE.MeshStandardMaterial
  if (!mat?.emissive || obj.userData._savedEmissive === undefined) return
  mat.emissive.setHex(obj.userData._savedEmissive)
  mat.emissiveIntensity = obj.userData._savedIntensity
}

// ── Surface panel helpers ─────────────────────────────────────────────────────

function planetColorHex(p: Planet): string {
  return planetColor(p.pl_eqt, p.pl_orbsmax).getHexString()
}

// ── Resize ────────────────────────────────────────────────────────────────────

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function describePlanet(p: Planet): string {
  const parts = [p.pl_name]
  if (p.pl_rade   != null) parts.push(p.pl_rade.toFixed(2)   + ' R⊕')
  if (p.pl_bmasse != null) parts.push(p.pl_bmasse.toFixed(1) + ' M⊕')
  if (p.pl_eqt    != null) parts.push(Math.round(p.pl_eqt)   + ' K')
  if (p.pl_orbsmax != null) parts.push(p.pl_orbsmax.toFixed(3) + ' AU')
  if (p.pl_orbper  != null) parts.push(p.pl_orbper.toFixed(1)  + ' d')
  return parts.join(' · ')
}

// ── DefenderNav data + event handlers ────────────────────────────────────────

function buildDefenderData(): DefenderNavData {
  if (mode.value !== 'system' || !currentSystem.value) return {}
  const sys = currentSystem.value

  const starMarker = galaxyMarkers.find(m => m.userData.system?.hostname === sys.hostname)
  const starPos    = starMarker?.position ?? new THREE.Vector3()

  const camDelta       = camera.position.clone().sub(starPos)
  const cameraAngleDeg = ((Math.atan2(camDelta.x, camDelta.z) * 180 / Math.PI) + 360) % 360
  const vizR           = Math.max(0, camDelta.length())
  const cameraRadiusAU = Math.max(0, (Math.pow(10, Math.max(0, vizR - 14) * Math.log10(61) / 171) - 1) / 6)

  const cfg = resolveStellarConfig(sys)
  if (cfg.innerBinary) cfg.innerBinary.angle = binaryAngle

  const planets: PlanetStripEntry[] = []
  for (const obj of animObjects) {
    const d = obj.userData
    if (d.type !== 'planet') continue
    const pl  = d.planet as Planet
    const au  = pl.pl_orbsmax ?? fallbackAU(0, sys.planets.length)
    const deg = ((d.orbAngle * 180 / Math.PI) + 360) % 360
    planets.push({
      name:          pl.pl_name,
      angle:         deg,
      radius:        au,
      eqt:           pl.pl_eqt ?? null,
      hasMoon:       sys.sy_mnum > 0,
      hasSettlement: false,
      l4angle:       (deg + 60)  % 360,
      l5angle:       (deg - 60 + 360) % 360,
      orbitType:     cfg.type === 'circumbinary' ? 'circumbinary' : 'circumstellar',
      isCurrent:     selectedPlanet.value?.pl_name === pl.pl_name,
    })
  }

  return {
    systemData: {
      starTeff:      sys.st_teff ?? 5778,
      starPos:       { x: starPos.x, z: starPos.z },
      planets,
      galleries:     [],
      cameraAngle:   cameraAngleDeg,
      cameraRadius:  cameraRadiusAU,
      stellarConfig: cfg,
    },
    // Earth↔System inset — always provided in system mode
    currentSystemRef: sys.sy_dist != null ? {
      hostname: sys.hostname,
      distPc:   sys.sy_dist,
      ra:       sys.ra,
      dec:      sys.dec,
    } : undefined,
  }
}

function onDefenderFlyTo(target: DefenderTarget) {
  if (target.type === 'planet') {
    const mesh = systemObjects.find(
      o => (o as THREE.Mesh).isMesh && o.userData.type === 'planet'
        && o.userData.planet?.pl_name === target.id
    ) as THREE.Mesh | undefined
    if (mesh) focusPlanet(mesh)
  } else if (target.type === 'lagrange') {
    const mesh = systemObjects.find(
      o => (o as THREE.Mesh).isMesh && o.userData.type === 'lagrange'
        && `${o.userData.point} — ${o.userData.planet?.pl_name}` === target.id
    ) as THREE.Mesh | undefined
    if (mesh) {
      const p = mesh.position.clone()
      gsap.to(camera.position, { duration: 1.6, x: p.x + 15, y: p.y + 8, z: p.z + 15, ease: 'power2.inOut', onUpdate: () => controls.update() })
      gsap.to(controls.target, { duration: 1.6, x: p.x, y: p.y, z: p.z, ease: 'power2.inOut', onUpdate: () => controls.update() })
    }
  }
}

function onDefenderPortalTo(dest: { label: string; route: string }) {
  const srcColor = currentSystem.value
    ? '#' + starColorFromTeff(currentSystem.value.st_teff).getHexString()
    : undefined
  portalStore.openPortal({ ...dest, sourceColor: srcColor })
}

// ── Context zoom — Earth ↔ current system ────────────────────────────────────

const hasReturnPosition = ref(false)

// Saved camera state for the ◄ PREV return
let savedCamPos:    THREE.Vector3 | null = null
let savedTargetPos: THREE.Vector3 | null = null
let contextLine:    THREE.Line    | null = null   // Sol↔system dashed line

function onContextZoom() {
  if (!currentSystem.value || !renderer) return
  logNavEvent('context_zoom', { hostname: currentSystem.value.hostname, dist: currentSystem.value.sy_dist })

  // Save current camera so we can return
  savedCamPos    = camera.position.clone()
  savedTargetPos = controls.target.clone()
  hasReturnPosition.value = true

  // Sol is at galaxy-view origin; current system is at its 3D viz position
  const solPos = new THREE.Vector3(0, 0, 0)
  const sys    = currentSystem.value
  const sysPos = raDecToVec3(sys.ra, sys.dec, distToViz(sys.sy_dist ?? 500))

  // Add or refresh the Sol↔system connecting line
  removeContextLine()
  const pts = [solPos, sysPos]
  const geo = new THREE.BufferGeometry().setFromPoints(pts)
  // Dashed line via LineSegments with alternating segments
  const lineMat = new THREE.LineDashedMaterial({
    color: 0x00c8ff, dashSize: 4, gapSize: 6,
    transparent: true, opacity: 0.55, depthWrite: false,
  })
  contextLine = new THREE.Line(geo, lineMat)
  contextLine.computeLineDistances()
  scene.add(contextLine)

  // Midpoint between Sol and the system
  const mid  = solPos.clone().lerp(sysPos, 0.5)
  const span = solPos.distanceTo(sysPos)

  // Camera: slightly above and behind the midpoint to show both clearly
  const fromCam  = camera.position.clone().sub(mid).normalize()
  const camDist  = Math.max(span * 0.9, 80)
  const targetX  = mid.x + fromCam.x * camDist * 0.15
  const targetY  = mid.y + camDist * 0.38
  const targetZ  = mid.z + fromCam.z * camDist * 0.85

  gsap.to(camera.position, {
    duration: 3.0, x: targetX, y: targetY, z: targetZ,
    ease: 'power3.inOut', onUpdate: () => controls.update(),
  })
  gsap.to(controls.target, {
    duration: 3.0, x: mid.x, y: mid.y, z: mid.z,
    ease: 'power2.inOut', onUpdate: () => controls.update(),
  })
}

function onReturnToPrev() {
  if (!savedCamPos || !savedTargetPos) return
  const cam = savedCamPos.clone(), tgt = savedTargetPos.clone()

  gsap.to(camera.position, {
    duration: 2.2, x: cam.x, y: cam.y, z: cam.z,
    ease: 'power2.inOut', onUpdate: () => controls.update(),
    onComplete: () => { hasReturnPosition.value = false; removeContextLine() },
  })
  gsap.to(controls.target, {
    duration: 2.2, x: tgt.x, y: tgt.y, z: tgt.z,
    ease: 'power2.inOut', onUpdate: () => controls.update(),
  })
  savedCamPos = null; savedTargetPos = null
}

function removeContextLine() {
  if (contextLine) { scene.remove(contextLine); contextLine.geometry.dispose(); contextLine = null }
}

// ── Legend data ───────────────────────────────────────────────────────────────

const starLegend = [
  { color: '#9bb0ff', label: 'O/B  >10 000 K' },
  { color: '#cad7ff', label: 'A    white' },
  { color: '#fff4ea', label: 'F/G  Sun-like' },
  { color: '#ffd2a1', label: 'K    orange' },
  { color: '#ffcc6f', label: 'M    red dwarf' },
]
const planetLegend = [
  { color: '#ff4500', label: '>2 000 K  ultra-hot' },
  { color: '#ff8c42', label: '1 000 K   hot' },
  { color: '#4ecdc4', label: '200 K     temperate' },
  { color: '#82b4d0', label: '<200 K    icy' },
  { color: '#9999bb', label: 'Moon (proposed)' },
  { color: '#5a4a7a', label: 'Proposed — unsurveyed' },
  { color: '#f0a030', label: 'Candidate (TOI/KOI)' },
  { color: '#8899bb', label: 'Frontier (predicted)' },
]

// Pip indicators replace ring geometry — same info at 1/50th visual weight
const pipLegend = [
  { color: '#22ff88', label: 'HZ planet confirmed  (2 oclock)' },
  { color: '#88bbff', label: '5+ planet system     (10 oclock)' },
  { color: '#ffd480', label: 'Binary / multi-star  (6 oclock)' },
]

// ── Lifecycle ─────────────────────────────────────────────────────────────────

onMounted(async () => {
  await galaxyStore.loadData()
  initScene()
  buildGalaxyView()
  buildTheoreticalSystems()
  loaded.value = true

  // Supplementary tiers loaded only when user toggles them on (see showPredicted)
  watchEffect(() => {
    if (!showPredicted.value) return
    if (!galaxyStore.isCandidateLoaded) { void galaxyStore.loadCandidateData() }
    if (!galaxyStore.isFrontierLoaded)  { void galaxyStore.loadFrontierData()  }
    if (galaxyStore.isCandidateLoaded && candidateMarkers.length === 0) buildCandidateView()
    if (galaxyStore.isFrontierLoaded  && frontierMarkers.length  === 0) buildFrontierView()
  })

  // Deep-link from cosmic view or surface view: auto-enter the specified system
  const focusHost    = route.query.focusHost    as string | undefined
  const contextView  = route.query.contextView  as string | undefined
  if (focusHost) {
    const sys = galaxyStore.getSystem(focusHost)
    if (sys) {
      await nextTick()
      enterSystemView(sys)
      // If arriving from surface with contextView=true, auto-trigger context zoom
      if (contextView === 'true') {
        setTimeout(() => onContextZoom(), 800)  // brief delay to let scene build
      }
    }
  }
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  window.removeEventListener('resize', onResize)
  window.removeEventListener('mousemove', onSelMouseMove)
  renderer?.dispose()
  controls?.dispose()
  frontierMarkers  = []
  candidateMarkers = []
})
</script>

<style scoped>
/* ── Activity badge hover panel ───────────────────────────────── */

.hover-box {
  position: fixed;
  background: rgba(1, 6, 20, 0.95);
  border: 1px solid rgba(0, 180, 220, 0.30);
  border-radius: 6px;
  padding: 8px 11px 7px;
  font-family: 'Courier New', monospace;
  font-size: 10px;
  color: #b0c8e8;
  pointer-events: none;
  z-index: 10;
  min-width: 180px;
  max-width: 280px;
  backdrop-filter: blur(6px);
  box-shadow: 0 2px 16px rgba(0, 160, 220, 0.12);
}

.hb-name {
  font-size: 12px;
  color: rgba(200, 230, 255, 0.92);
  letter-spacing: 0.05em;
  margin-bottom: 2px;
  font-weight: 600;
}

.hb-spec {
  font-size: 9px;
  color: rgba(80, 150, 190, 0.72);
  letter-spacing: 0.04em;
  margin-bottom: 7px;
}

.hb-dot { margin: 0 4px; opacity: 0.45; }

/* Badge row layout */
.hb-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 4px;
}

/* Base badge pill */
.hb-badge {
  display: inline-flex;
  align-items: center;
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 0.04em;
  padding: 2px 7px;
  border-radius: 3px;
  border: 1px solid;
  white-space: nowrap;
}

/* System composition badges */
.hb-badge--planets  { color: rgba(180, 220, 255, 0.82); border-color: rgba(80, 140, 200, 0.35); background: rgba(0, 60, 120, 0.25); }
.hb-badge--moons    { color: rgba(160, 200, 240, 0.72); border-color: rgba(60, 110, 170, 0.28); background: rgba(0, 40, 100, 0.20); }
.hb-badge--binary   { color: rgba(255, 210, 130, 0.82); border-color: rgba(200, 160, 50, 0.38); background: rgba(80, 50, 0, 0.25); }
.hb-badge--hz       { color: rgba(80, 220, 140, 0.90);  border-color: rgba(60, 200, 100, 0.45); background: rgba(0, 80, 40, 0.28); }

/* Activity badges — greyed when no data (—), coloured when live */
.hb-row--activity   { margin-top: 2px; }
.hb-badge--settlement { color: rgba(100, 190, 150, 0.60); border-color: rgba(80, 160, 110, 0.22); background: transparent; }
.hb-badge--art        { color: rgba(170, 130, 210, 0.60); border-color: rgba(140, 100, 190, 0.22); background: transparent; }
.hb-badge--science    { color: rgba(100, 170, 210, 0.60); border-color: rgba(80, 140, 190, 0.22); background: transparent; }

/* When activity badge has live data (non-zero count) */
.hb-badge--live {
  opacity: 1;
  border-color: currentColor;
  background: rgba(0, 40, 80, 0.35);
  box-shadow: 0 0 6px currentColor;
}

.hb-note {
  margin-top: 4px;
  font-size: 9px;
  color: rgba(80, 130, 160, 0.60);
  white-space: normal;
  line-height: 1.45;
}
.hover-fade-enter-active,
.hover-fade-leave-active { transition: opacity 0.15s ease; }
.hover-fade-enter-from,
.hover-fade-leave-to    { opacity: 0; }

.system-panel {
  position: absolute;
  top: 50px;
  left: 12px;
  width: 260px;
  background: rgba(2, 6, 18, 0.88);
  border: 1px solid rgba(49, 204, 236, 0.2);
  border-radius: 6px;
  backdrop-filter: blur(4px);
  z-index: 5;
}

.planet-row {
  padding: 3px 6px;
  border-radius: 3px;
  transition: background 0.15s;
}
.planet-row:hover { background: rgba(49, 204, 236, 0.1); }

.planet-dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.planet-row--selected {
  background: rgba(0, 200, 220, 0.08);
  border-radius: 3px;
}

/* ── Planet detail card ─────────────────────────────────────────────── */

.planet-card {
  position: absolute;
  top: 54px;
  right: 12px;
  width: 240px;
  background: rgba(1, 4, 16, 0.94);
  border: 1px solid rgba(0, 200, 220, 0.22);
  border-radius: 7px;
  backdrop-filter: blur(8px);
  z-index: 6;
}

.planet-card-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  flex-shrink: 0;
}

.rarity-badge {
  display: flex;
  align-items: baseline;
  gap: 6px;
  padding: 3px 8px;
  border: 1px solid;
  border-radius: 4px;
  background: rgba(0,0,0,0.35);
}
.rarity-tier {
  font-family: monospace;
  font-size: 9px;
  letter-spacing: 0.12em;
  font-weight: 700;
}
.rarity-desc {
  font-family: monospace;
  font-size: 9px;
  opacity: 0.75;
}

/* ── Planet entry fade overlay ──────────────────────────────────────── */

.planet-entry-overlay {
  position: fixed;
  inset: 0;
  background: #000;
  animation: planetFadeIn 2.0s ease-in forwards;
  z-index: 50;
  pointer-events: none;
}

@keyframes planetFadeIn {
  0%   { opacity: 0; }
  50%  { opacity: 0.5; }
  100% { opacity: 1; }
}

.planet-fade-enter-active { animation: planetFadeIn 2.0s ease-in forwards; }

.legend-block {
  background: rgba(0, 0, 0, 0.68);
  border-radius: 5px;
  font-family: monospace;
}
.legend-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
}
.legend-section {
  font-size: 7px;
  letter-spacing: 0.12em;
  color: rgba(80, 130, 160, 0.60);
  margin-bottom: 3px;
}

.legend-dot {
  display: inline-block;
  width: 8px; height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

/* Pip dots are slightly smaller than legend dots — more accurate scale */
.legend-pip {
  width: 5px;
  height: 5px;
  box-shadow: 0 0 4px currentColor;
}

.legend-badge-row {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 2px;
}

.legend-badge {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  min-width: 28px;
  text-align: right;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  background: rgba(2, 4, 10, 0.85);
  z-index: 20;
}

/* ── Galaxy view layer controls ───────────────────────────────── */

.gl-controls {
  position: fixed;
  bottom: 92px;
  right: 14px;
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: flex-end;
}

.gl-controls--system {
  /* System mode buttons are slightly larger — primary action is prominent */
}

/* Base pill button */
.gl-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  min-width: 120px;
  border: 1px solid rgba(0, 140, 180, 0.30);
  border-radius: 22px;
  background: rgba(0, 8, 24, 0.90);
  color: rgba(120, 180, 210, 0.72);
  font-family: 'Courier New', monospace;
  font-size: 10px;
  letter-spacing: 0.10em;
  cursor: pointer;
  transition: all 0.14s;
  backdrop-filter: blur(6px);
  user-select: none;
  white-space: nowrap;
  justify-content: flex-start;
}

.gl-pill:hover:not(.gl-pill--disabled) {
  background: rgba(0, 40, 80, 0.85);
  border-color: rgba(0, 200, 240, 0.50);
  color: rgba(180, 230, 255, 0.90);
}

/* Active / toggled on */
.gl-pill--on {
  background: rgba(0, 30, 60, 0.92);
  border-color: rgba(0, 200, 240, 0.50);
  color: rgba(180, 230, 255, 0.92);
  box-shadow: 0 0 12px rgba(0, 160, 220, 0.15);
}

/* Primary action (Enter Surface) */
.gl-pill--primary {
  background: rgba(0, 60, 100, 0.85);
  border-color: rgba(0, 200, 240, 0.55);
  color: #00e5ff;
  font-weight: 600;
  min-width: 140px;
  justify-content: center;
}

.gl-pill--primary:hover:not(.gl-pill--disabled) {
  background: rgba(0, 100, 160, 0.85);
  box-shadow: 0 0 18px rgba(0, 200, 240, 0.25);
}

/* Disabled state */
.gl-pill--disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

/* Small coloured pip indicator inside pill */
.gl-pip {
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  flex-shrink: 0;
  transition: background 0.15s;
  box-shadow: 0 0 5px currentColor;
}

/* ── Crosshair cursor in group-select mode ────────────────────── */

.canvas--group-select { cursor: crosshair !important; }

/* ── Drag-selection rectangle ─────────────────────────────────── */

.sel-rect {
  position: fixed;
  pointer-events: none;
  z-index: 9;
  border: 1px dashed rgba(255, 165, 0, 0.75);
  background: rgba(255, 140, 0, 0.055);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.35);
}

/* ── Group stats panel ─────────────────────────────────────────── */

.group-panel {
  position: fixed;
  top: 58px;
  right: 14px;
  z-index: 8;
  width: 270px;
  background: rgba(1, 6, 20, 0.96);
  border: 1px solid rgba(255, 160, 30, 0.35);
  border-radius: 7px;
  font-family: 'Courier New', monospace;
  backdrop-filter: blur(10px);
  overflow: hidden;
}

.gp-head {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 10px;
  background: rgba(255, 120, 0, 0.10);
  border-bottom: 1px solid rgba(255, 160, 30, 0.20);
}

.gp-icon  { font-size: 11px; color: rgba(255, 160, 40, 0.80); }
.gp-count {
  flex: 1;
  font-size: 8px;
  letter-spacing: 0.12em;
  color: rgba(255, 180, 80, 0.85);
}

.gp-close {
  background: none; border: none;
  color: rgba(180, 120, 60, 0.55);
  font-size: 10px; cursor: pointer; padding: 0 2px;
  transition: color 0.1s;
}
.gp-close:hover { color: rgba(255, 160, 40, 0.85); }

.gp-stats {
  padding: 8px 10px 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.gp-row {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-wrap: wrap;
}

.gp-stat {
  font-size: 9px;
  color: rgba(160, 210, 235, 0.80);
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.gp-stat--hz { color: rgba(60, 220, 120, 0.85); }

.gp-stat-icon {
  font-size: 9px;
  color: rgba(255, 200, 80, 0.65);
}

.gp-sep {
  font-size: 9px;
  color: rgba(80, 110, 140, 0.35);
}

.gp-spec-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 2px;
}

.gp-spec-chip {
  font-size: 7.5px;
  letter-spacing: 0.05em;
  padding: 1px 5px;
  border-radius: 2px;
  background: rgba(0, 20, 50, 0.55);
  border: 1px solid rgba(255,255,255,0.08);
}

.gp-actions {
  display: flex;
  gap: 5px;
  padding: 6px 10px 8px;
  border-top: 1px solid rgba(255, 160, 30, 0.15);
}

.gp-btn {
  flex: 1;
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 0.08em;
  padding: 5px 8px;
  border-radius: 3px;
  border: 1px solid rgba(255, 160, 30, 0.28);
  background: rgba(0, 10, 25, 0.70);
  color: rgba(200, 170, 100, 0.75);
  cursor: pointer;
  transition: all 0.12s;
}

.gp-btn:hover {
  background: rgba(40, 25, 0, 0.80);
  border-color: rgba(255, 160, 30, 0.55);
  color: rgba(255, 190, 80, 0.90);
}

.gp-btn--primary {
  border-color: rgba(0, 200, 240, 0.35);
  color: rgba(0, 200, 240, 0.75);
}

.gp-btn--primary:hover {
  background: rgba(0, 40, 80, 0.80);
  border-color: rgba(0, 229, 255, 0.55);
  color: #00e5ff;
}

/* ── System-mode controls — bottom-right, ABOVE the NavigatorInset ──
   NavigatorInset: bottom 142 px, height ~190 px → top edge ~332 px.
   Buttons sit at bottom: 340 px so there is a clear gap above the inset.
   Legend lives at bottom-left so there is zero overlap.
   Labels expand LEFTWARD from the icon (row-reverse) so text never
   spills into the right margin or over the inset.              ──── */

.sys-controls {
  position: fixed;
  bottom: 340px;
  right: 14px;
  left: auto;
  z-index: 6;
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;   /* flush to right edge */
}

.sys-btn {
  display: inline-flex;
  align-items: center;
  flex-direction: row-reverse;  /* icon right, label expands leftward */
  gap: 0;
  height: 34px;
  max-width: 34px;         /* collapsed: icon-only circle */
  overflow: hidden;
  border-radius: 17px;
  border: 1px solid rgba(0, 140, 180, 0.28);
  background: rgba(0, 8, 24, 0.88);
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: max-width 0.28s ease, gap 0.28s ease,
              background 0.14s, border-color 0.14s;
  padding: 0 11px;
  user-select: none;
}

.sys-btn:hover:not(.sys-btn--disabled) {
  max-width: 175px;       /* expands leftward (row-reverse) */
  gap: 8px;
  background: rgba(0, 40, 80, 0.88);
  border-color: rgba(0, 200, 240, 0.48);
}

.sys-btn--surface        { border-color: rgba(0, 180, 220, 0.35); }
.sys-btn--surface:hover:not(.sys-btn--disabled) {
  background: rgba(0, 60, 110, 0.88);
  border-color: rgba(0, 229, 255, 0.60);
  box-shadow: 0 0 14px rgba(0, 200, 240, 0.20);
}

.sys-btn--disabled { opacity: 0.32; cursor: not-allowed; }

.sys-icon {
  font-size: 15px;
  flex-shrink: 0;
  width: 16px;
  text-align: center;
  color: rgba(140, 200, 230, 0.80);
}

.sys-label {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 0.10em;
  white-space: nowrap;
  color: rgba(160, 215, 240, 0.85);
  opacity: 0;
  transform: translateX(-5px);
  transition: opacity 0.16s 0.10s, transform 0.16s 0.10s;
}

.sys-btn:hover:not(.sys-btn--disabled) .sys-label {
  opacity: 1;
  transform: translateX(0);
}
</style>
