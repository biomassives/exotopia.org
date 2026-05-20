<template>
  <q-page class="bg-black overflow-hidden" style="height:100vh;position:relative">
    <canvas
      ref="canvas"
      class="three-canvas"
      @mousemove="onHover"
      @mouseleave="clearHover"
      @click="onClick"
    />

    <!-- ── Milky Way entry fade overlay ────────────────────────────── -->
    <Transition name="mw-fade">
      <div v-if="enteringMW" class="mw-entry-overlay" />
    </Transition>

    <!-- ── Floating cluster / void name labels ──────────────────────── -->
    <div class="labels-layer">
      <div
        v-for="lbl in clusterLabels"
        :key="lbl.name"
        v-show="lbl.visible"
        class="cluster-label"
        :style="{
          left: lbl.x + 'px',
          top:  lbl.y + 'px',
          '--sc-color': lbl.scColor,
        }"
      >
        <div class="cl-name">{{ lbl.name }}</div>
        <div v-if="lbl.supercluster" class="cl-super">{{ lbl.supercluster }}</div>
      </div>
    </div>

    <!-- Level badge -->
    <!-- ── Contextual left-side info panel ──────────────────────────────── -->
    <div class="ctx-panel">

      <!-- Level header -->
      <div class="ctx-header">
        <span class="ctx-icon">◈</span>
        <span class="ctx-headline">{{ contextLevelLabel }}</span>
        <span class="ctx-l1">L1</span>
      </div>

      <!-- ── OVERVIEW ──────────────────────────────────────────────────── -->
      <template v-if="contextLevel === 'overview'">
        <div class="ctx-body">
          <div class="ctx-line">Galaxy clusters · Great voids</div>
          <div class="ctx-line">Wormhole conduit network</div>
          <div class="ctx-div" />
          <div class="ctx-row"><span class="ctx-k">Scale</span><span class="ctx-v">1 unit ≈ 15 Mpc</span></div>
          <div class="ctx-row"><span class="ctx-k">Clusters</span><span class="ctx-v">{{ CLUSTERS.length - 1 }}</span></div>
          <div class="ctx-row">
            <span class="ctx-k">Confirmed worlds</span>
            <span class="ctx-v text-cyan-5">{{ galaxyStore.isLoaded ? galaxyStore.planets.length.toLocaleString() : '…' }}</span>
          </div>
        </div>
      </template>

      <!-- ── SELECTED — named cluster ──────────────────────────────────── -->
      <template v-else-if="contextLevel === 'selected' && selected">
        <div class="ctx-body">
          <div v-if="selected.supercluster" class="ctx-sc" :style="{ color: selected.scColor }">
            {{ selected.supercluster }} Supercluster
          </div>
          <div class="ctx-div" />
          <div v-for="(val, key) in selected.details" :key="key" class="ctx-row">
            <span class="ctx-k">{{ key }}</span>
            <span class="ctx-v">{{ val }}</span>
          </div>
          <div class="ctx-div" />
          <q-btn dense unelevated size="xs" color="cyan-9" class="full-width"
            icon="mdi-telescope" label="Enter Cluster"
            @click="enterCluster()" />
        </div>
      </template>

      <!-- ── X-RAY CLUSTER ─────────────────────────────────────────────── -->
      <template v-else-if="contextLevel === 'xray' && selected">
        <div class="ctx-body">
          <div v-for="(val, key) in selected.details" :key="key" class="ctx-row">
            <span class="ctx-k">{{ key }}</span>
            <span class="ctx-v">{{ val }}</span>
          </div>
          <template v-if="nearestSystemHost">
            <div class="ctx-div" />
            <div class="ctx-row">
              <span class="ctx-k">Nearest system</span>
              <span class="ctx-v text-cyan-5">{{ nearestSystemHost }}</span>
            </div>
            <div class="ctx-row ctx-settle-hint">
              <span class="ctx-k">Status</span>
              <span class="ctx-v text-amber-5">Available to settle</span>
            </div>
            <div class="ctx-div" />
            <div class="row q-gutter-xs">
              <q-btn dense unelevated size="xs" color="cyan-9" style="flex:1"
                icon="mdi-rocket-launch" label="Enter System"
                @click="enterXraySystem()" />
              <q-btn dense outline size="xs" color="amber-7" style="flex:1"
                icon="mdi-map-marker-plus" label="Settle"
                @click="$router.push('/mint')" />
            </div>
          </template>
        </div>
      </template>

      <!-- ── WORMHOLE CONDUIT ──────────────────────────────────────────── -->
      <template v-else-if="contextLevel === 'conduit' && selected">
        <div class="ctx-body">
          <div v-for="(val, key) in selected.details" :key="key" class="ctx-row">
            <span class="ctx-k">{{ key }}</span>
            <span class="ctx-v">{{ val }}</span>
          </div>
          <div class="ctx-div" />
          <div class="ctx-line" style="color:rgba(0,229,255,0.55)">
            Void-edge transit — unlimited range
          </div>
        </div>
      </template>

      <!-- ── MILKY WAY / LOCAL GROUP ───────────────────────────────────── -->
      <template v-else-if="contextLevel === 'milkyway' || contextLevel === 'nearby'">
        <div class="ctx-body">
          <div class="ctx-line">Solar neighbourhood · Local Group</div>
          <div class="ctx-div" />
          <div class="ctx-row">
            <span class="ctx-k">Confirmed worlds</span>
            <span class="ctx-v text-cyan-5">{{ galaxyStore.isLoaded ? galaxyStore.planets.length.toLocaleString() : '…' }}</span>
          </div>
          <div class="ctx-row">
            <span class="ctx-k">Star systems</span>
            <span class="ctx-v">{{ galaxyStore.isLoaded ? galaxyStore.systems.size.toLocaleString() : '…' }}</span>
          </div>
          <div class="ctx-div" />
          <q-btn dense unelevated size="xs" color="amber-8" class="full-width"
            icon="scatter_plot" label="Open Galaxy Map"
            @click="$router.push('/galaxy')" />
        </div>
      </template>

      <!-- ── Navigation pathway (always shown) ────────────────────────── -->
      <div class="ctx-pathway">
        <div class="ctx-path-lbl">NAVIGATION PATH</div>
        <div class="ctx-steps">
          <span class="ctx-step ctx-step--active">COSMIC</span>
          <span class="ctx-arr">›</span>
          <span class="ctx-step ctx-step--link" @click="$router.push('/galaxy')">GALAXY</span>
          <span class="ctx-arr">›</span>
          <span class="ctx-step ctx-step--dim">SYSTEM</span>
          <span class="ctx-arr">›</span>
          <span class="ctx-step ctx-step--dim">PLANET</span>
          <span class="ctx-arr">›</span>
          <span class="ctx-step ctx-step--settle" @click="$router.push('/mint')">SETTLE</span>
        </div>
      </div>

      <!-- ── Settle / claim CTA ────────────────────────────────────────── -->
      <div class="ctx-claim">
        <div class="ctx-claim-title">CLAIM A WORLD</div>
        <div class="ctx-claim-sub">
          40 acres · one mule · permanent deed
        </div>

        <!-- 6-chain support grid (mini) -->
        <div class="ctx-chains">
          <button
            v-for="c in SUPPORTED_CHAINS" :key="c.id"
            class="ctx-chain-chip"
            :class="`ctx-chain-chip--${c.status}`"
            :title="`${c.name} — ${c.statusLabel}`"
            @click="$router.push('/chains')"
          >
            <span class="ctx-chain-dot" :style="{ background: c.color }" />
            {{ c.symbol }}
          </button>
        </div>
        <div class="ctx-chains-hint" @click="$router.push('/chains')">
          6 chains · view status matrix →
        </div>

        <div class="row q-gutter-xs q-mt-sm">
          <q-btn dense unelevated size="xs" color="cyan-9" icon="scatter_plot"
            label="Browse Worlds" style="flex:1"
            @click="$router.push('/galaxy')" />
          <q-btn dense unelevated size="xs" color="amber-8" icon="mdi-map-marker-plus"
            label="Mint Deed" style="flex:1"
            @click="$router.push('/mint')" />
        </div>
      </div>
    </div>

    <!-- Hover tooltip -->
    <div v-if="hoveredLabel" class="hover-box" :style="hoverStyle">
      <div class="text-caption text-blue-grey-1 text-weight-medium">{{ hoveredLabel.name }}</div>
      <div class="text-caption text-cyan-5">{{ hoveredLabel.type }}</div>
      <div v-if="hoveredLabel.detail" class="text-caption text-blue-grey-4 q-mt-xs">{{ hoveredLabel.detail }}</div>
    </div>

    <!-- Side info panel (shown when cluster/conduit is selected) -->
    <Transition name="fade">
      <div v-if="selected" class="space-overlay side-panel q-pa-md">
        <div class="row items-center q-mb-sm">
          <q-icon :name="selected.icon" :color="selected.iconColor" size="18px" class="q-mr-sm" />
          <div class="text-subtitle2 text-blue-grey-1">{{ selected.name }}</div>
        </div>
        <div class="text-caption text-cyan-5 q-mb-xs">{{ selected.type }}</div>

        <!-- Supercluster badge -->
        <div v-if="selected.supercluster" class="sc-badge q-mb-xs q-px-sm q-py-xs row items-center"
             :style="{ borderColor: selected.scColor }">
          <q-icon name="mdi-web" size="12px" class="q-mr-xs" :style="{ color: selected.scColor }" />
          <span class="text-caption" :style="{ color: selected.scColor, letterSpacing: '0.08em' }">
            {{ selected.supercluster }} Supercluster
          </span>
        </div>

        <q-separator color="blue-grey-8" class="q-my-sm" />
        <div v-for="(val, key) in selected.details" :key="key" class="text-caption text-blue-grey-3 q-mb-xs">
          <span class="text-blue-grey-5">{{ key }}: </span>{{ val }}
        </div>

        <template v-if="selected.isConduit">
          <q-separator color="blue-grey-8" class="q-my-sm" />
          <div class="text-caption text-cyan-5 q-mb-xs" style="letter-spacing:0.08em">
            TRANSIT DESTINATIONS
          </div>
          <div v-if="!galaxyStore.isLoaded" class="text-caption text-blue-grey-6 q-mb-sm">
            Loading star systems…
          </div>
          <template v-else>
            <div
              v-for="dest in transitTargets"
              :key="dest.route"
              class="transit-row row items-center justify-between q-mb-xs"
            >
              <div class="col">
                <div class="text-caption text-blue-grey-1 dest-name">{{ dest.label }}</div>
                <div class="text-caption text-blue-grey-6 dest-meta">{{ dest.dist }} pc · {{ dest.spec }}</div>
              </div>
              <q-btn
                dense rounded unelevated size="xs" color="cyan-9"
                icon="mdi-hexagon-outline" label="Warp"
                class="warp-btn"
                @click="initiateTransit(dest)"
              />
            </div>
            <div v-if="!transitTargets.length" class="text-caption text-blue-grey-7 q-mb-sm">
              No catalogued systems in this conduit's range.
            </div>
            <q-separator color="blue-grey-9" class="q-mt-sm q-mb-sm" />
            <q-btn flat dense size="xs" color="blue-grey-5" icon="scatter_plot" label="Galaxy map"
              @click="$router.push('/galaxy')" />
          </template>
        </template>

        <template v-if="selected.isBrightGalaxy">
          <q-separator color="blue-grey-8" class="q-my-sm" />
          <div class="text-caption text-blue-grey-6" style="font-size:9px;letter-spacing:0.06em">
            PROMINENT GALAXY OBJECT · catalogued luminous source within parent cluster
          </div>
        </template>

        <!-- Named cluster navigation (fly-in + LOD star field) -->
        <template v-if="!selected.isConduit && !selected.isMilkyWay && !selected.isBrightGalaxy && !selected.xrayCluster">
          <q-separator color="blue-grey-8" class="q-my-sm" />
          <div class="text-caption text-blue-grey-5 q-mb-xs" style="letter-spacing:0.08em">NAVIGATION</div>
          <q-btn
            dense rounded unelevated size="sm" color="cyan-8"
            icon="mdi-telescope" label="Enter Cluster"
            @click="enterCluster()"
          />
          <div class="text-caption text-blue-grey-7 q-mt-xs" style="font-size:9px">
            Fly into cluster · internal star field spawns on approach
          </div>
        </template>

        <!-- X-ray cluster star-field navigation -->
        <template v-if="selected.xrayCluster">
          <q-separator color="blue-grey-8" class="q-my-sm" />
          <div class="text-caption text-blue-grey-5 q-mb-xs" style="letter-spacing:0.08em">STAR FIELD</div>
          <template v-if="galaxyStore.isLoaded">
            <div v-if="nearestSystemHost" class="text-caption text-blue-grey-4 q-mb-sm">
              Nearest catalogued system<br>
              <span class="text-cyan-4" style="letter-spacing:0.04em">{{ nearestSystemHost }}</span>
            </div>
            <div v-else class="text-caption text-blue-grey-6 q-mb-sm" style="font-size:9px">
              No catalogued systems in this region — extrapolating theoretical candidate
            </div>
            <q-btn
              dense rounded unelevated size="sm"
              :color="nearestSystemHost ? 'cyan-8' : 'blue-grey-8'"
              icon="mdi-rocket-launch"
              :label="nearestSystemHost ? 'Enter System' : 'Enter Candidate'"
              @click="enterXraySystem"
            />
            <div class="text-caption text-blue-grey-7 q-mt-xs" style="font-size:9px">
              {{ nearestSystemHost ? 'NASA exoplanet catalog · verified' : 'Star formation extrapolated · speculative' }}
            </div>
          </template>
          <div v-else class="text-caption text-blue-grey-6">Loading catalog…</div>
        </template>

        <q-btn flat dense round icon="close" color="blue-grey-5" size="xs"
          class="absolute-top-right q-ma-xs" @click="selected = null" />
      </div>
    </Transition>

    <!-- Event panel -->
    <Transition name="fade">
      <div v-if="activeEvent" class="space-overlay event-panel q-pa-md">
        <div class="row items-center justify-between q-mb-xs">
          <div class="event-type-badge q-px-sm q-py-xs"
               :style="{ background: eventTypeColor(activeEvent.type) + '22', borderColor: eventTypeColor(activeEvent.type) }">
            <span class="text-caption" :style="{ color: eventTypeColor(activeEvent.type), letterSpacing: '0.1em' }">
              {{ eventTypeLabel(activeEvent.type) }}
            </span>
          </div>
          <q-btn flat dense round icon="close" color="blue-grey-5" size="xs" @click="activeEvent = null" />
        </div>

        <div class="text-subtitle2 text-blue-grey-1 q-mb-xs" style="line-height:1.3">
          {{ activeEvent.title }}
        </div>
        <div class="text-caption text-blue-grey-4 q-mb-sm">{{ activeEvent.community }}</div>

        <q-separator color="blue-grey-8" class="q-mb-sm" />

        <div class="text-caption text-blue-grey-3 q-mb-sm" style="line-height:1.6">
          {{ activeEvent.description }}
        </div>

        <!-- Timed event countdown -->
        <template v-if="activeEvent.eventTimeUtc">
          <div class="row items-center q-mb-xs" style="gap:6px">
            <q-icon name="mdi-clock-outline" color="cyan-6" size="14px" />
            <span class="text-caption text-blue-grey-3">{{ formatEventTime(activeEvent.eventTimeUtc) }}</span>
          </div>
          <div v-if="eventCountdown" class="countdown-display q-mb-sm">
            <span class="text-caption text-blue-grey-5" style="letter-spacing:0.06em">STARTS IN  </span>
            <span class="text-caption text-cyan-4" style="font-family:monospace;letter-spacing:0.1em">
              {{ eventCountdown }}
            </span>
          </div>
        </template>

        <!-- Capacity -->
        <div v-if="activeEvent.maxGuests" class="row items-center q-mb-sm" style="gap:6px">
          <q-icon name="mdi-account-group-outline" color="blue-grey-5" size="13px" />
          <span class="text-caption text-blue-grey-5">Up to {{ activeEvent.maxGuests.toLocaleString() }} guests</span>
        </div>

        <q-separator color="blue-grey-8" class="q-mb-sm" />

        <!-- pon.ink actions -->
        <div class="column q-gutter-xs">
          <q-btn v-if="activeEvent.ponInkUrl"
            dense rounded unelevated size="sm"
            color="amber-8" icon="mdi-music-note-plus"
            :label="activeEvent.type === 'settlement' ? 'Open in pon.ink' : 'Join Event — pon.ink'"
            @click="openPonInk(activeEvent.ponInkUrl!)"
          />
          <q-btn v-if="activeEvent.airdropId"
            dense rounded outline size="sm"
            color="cyan-7" icon="mdi-gift-outline"
            label="Claim Airdrop"
            @click="openPonInk(activeEvent.ponInkUrl ?? 'https://pon.ink')"
          />
          <q-btn
            flat dense size="xs" color="blue-grey-5"
            icon="mdi-arrow-expand-all" label="Fly to cluster"
            @click="flyToActiveEvent"
          />
        </div>
      </div>
    </Transition>

    <!-- Defender navigator strip -->
    <DefenderNav
      ref="defenderNav"
      mode="cosmic"
      :sceneLabel="selected?.name ?? 'Cosmic Web'"
      @flyTo="onDefenderCosmicFlyTo"
      @portalTo="dest => portalStore.openPortal(dest)"
      @viewModeChange="onCosmicViewModeChange"
    />

    <!-- ── DK.MAT dark matter / conduit overlay ──────────────────────── -->
    <Transition name="fade">
      <div v-if="cosmicViewMode === 'dark_matter'" class="dm-overlay">
        <div class="dm-title">
          <q-icon name="mdi-dots-hexagon" color="purple-4" size="12px" class="q-mr-xs" />
          DARK MATTER  ·  VOID-EDGE CONDUIT NETWORK
        </div>
        <div class="dm-body">
          Wormhole conduit nodes ◆ are placed at the periphery of great cosmic voids —
          the same regions where dark matter filaments converge between superclusters.
          The E8 lattice transit network routes through these density peaks.
        </div>
        <div class="dm-legend">
          <span class="dm-dot dm-conduit" />  Conduit node
          <span class="dm-dot dm-void" />  Void boundary
          <span class="dm-dot dm-filament" />  Filament / dark matter wall
        </div>
      </div>
    </Transition>

    <!-- Bottom nav -->
    <div class="space-overlay" style="bottom:92px;right:14px;display:flex;gap:8px">
      <q-btn flat dense rounded icon="scatter_plot" label="Milky Way" color="amber-5" size="sm"
        @click="flyToMilkyWay" />
      <q-btn flat dense rounded icon="zoom_out_map" label="Full web" color="blue-grey-4" size="sm"
        @click="flyToOverview" />
    </div>

    <!-- Legend — bottom left: clusters + superclusters -->
    <div class="space-overlay" style="bottom:92px;left:14px">
      <div class="legend-block q-pa-sm">
        <div class="text-caption text-blue-grey-6 q-mb-xs" style="letter-spacing:0.08em;font-size:9px">
          STRUCTURE
        </div>
        <div v-for="l in legendItems" :key="l.label" class="legend-row">
          <span class="legend-dot" :style="{ background: l.color, width: l.size+'px', height: l.size+'px' }" />
          <span class="text-caption text-blue-grey-4">{{ l.label }}</span>
        </div>
        <q-separator color="blue-grey-9" class="q-my-xs" />
        <div class="text-caption text-blue-grey-6 q-mb-xs" style="letter-spacing:0.08em;font-size:9px">
          SUPERCLUSTERS
        </div>
        <div v-for="sc in superclusters" :key="sc.name" class="legend-row">
          <span class="legend-dot" style="border-radius:2px" :style="{ background: sc.colorHex, width: '8px', height: '8px' }" />
          <span class="text-caption" :style="{ color: sc.colorHex, opacity: 0.75 }">{{ sc.name }}</span>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
/**
 * CosmicPage.vue — Level 1 cosmic view
 *
 * Shows the local cosmic web: galaxy clusters as glowing spheres,
 * great voids as transparent wireframe shells, filaments as faint
 * arcing lines, and wormhole conduit markers at void periphery.
 *
 * The conduit network is the long-distance substrate of the
 * wormhole transit system. Short routes use direct transit;
 * inter-cluster routes route through void-edge conduits.
 */

import { ref, computed, shallowRef, onMounted, onUnmounted, reactive } from 'vue'
import { useRouter } from 'vue-router'
import * as THREE                                            from 'three'
import { OrbitControls }                                    from 'three/examples/jsm/controls/OrbitControls.js'
import gsap                                                  from 'gsap'
import { usePortalStore }                                    from 'src/stores/portal'
import { useGalaxyStore }                                    from 'src/stores/galaxy'
import DefenderNav                                           from 'src/components/DefenderNav.vue'
import type { DefenderNavData, CosmicStripEntry, ConduitStripEntry, DefenderTarget } from 'src/lib/defender-nav.types'
import {
  CLUSTERS,
  VOIDS,
  SUPERCLUSTERS,
  buildConduits,
  clusterScenePos,
  voidScenePos,
  voidSceneRadius,
  superclusters as lookupSupercluster,
  MPC_SCALE,
  loadXrayClusters,
  xrayClusterScenePos,
  tapKevToRichness,
  type CosmicCluster,
  type CosmicVoid,
  type WormholeConduit,
  type BrightGalaxy,
  type XRayCluster,
} from 'src/data/cosmic-structures'
import {
  makeStarMesh,
  makeGalaxySprite,
  randomClusterSpectral,
  seededRng,
} from 'src/lib/star-sprites'
import {
  COSMIC_EVENTS,
  eventForCluster,
  formatEventTime,
  msUntilEvent,
  EVENT_TYPE_LABEL,
  EVENT_TYPE_COLOR,
  type CosmicEvent,
} from 'src/data/events'

// ── Stores ────────────────────────────────────────────────────────────────────

const portalStore  = usePortalStore()
const galaxyStore  = useGalaxyStore()
const router       = useRouter()

// ── Reactive UI state ─────────────────────────────────────────────────────────

const canvas       = ref<HTMLCanvasElement | null>(null)
const hoveredLabel = ref<{ name: string; type: string; detail?: string } | null>(null)
const hoverStyle   = ref({ left: '0px', top: '0px' })

interface SelectedInfo {
  name:             string
  type:             string
  icon:             string
  iconColor:        string
  details:          Record<string, string>
  supercluster?:    string
  scColor?:         string
  isConduit?:       boolean
  isMilkyWay?:      boolean
  isBrightGalaxy?:  boolean
  conduitVoidName?: string
  xrayCluster?:     XRayCluster
}

const selected       = ref<SelectedInfo | null>(null)
const enteringMW     = ref(false)
const activeEvent    = ref<CosmicEvent | null>(null)

// ── Contextual info panel ─────────────────────────────────────────────────────

// Distance from camera to Milky Way (origin) — updated each frame
const camDistToOrigin = ref(12)

type ContextLevel = 'overview' | 'nearby' | 'milkyway' | 'conduit' | 'xray' | 'selected'

const contextLevel = computed((): ContextLevel => {
  if (selected.value?.isMilkyWay || camDistToOrigin.value < 0.7) return 'milkyway'
  if (camDistToOrigin.value < 3.5)                                return 'nearby'
  if (selected.value?.isConduit)                                  return 'conduit'
  if (selected.value?.xrayCluster)                                return 'xray'
  if (selected.value && !selected.value.isBrightGalaxy)           return 'selected'
  return 'overview'
})

const contextLevelLabel = computed((): string => {
  const lv = contextLevel.value
  if (lv === 'milkyway') return 'MILKY WAY'
  if (lv === 'nearby')   return 'LOCAL GROUP'
  if (lv === 'xray')     return selected.value?.name ?? 'X-RAY CLUSTER'
  if (lv === 'conduit')  return selected.value?.name ?? 'CONDUIT'
  if (lv === 'selected') return selected.value?.name ?? 'CLUSTER'
  return 'COSMIC WEB'
})

// ── DefenderNav view mode ─────────────────────────────────────────────────────

const cosmicViewMode = ref<'natural' | 'xray' | 'dark_matter'>('natural')

// Accent colours per mode
const CONDUIT_NAT  = { color: 0x00e5ff, emissive: 0x00e5ff, intensity: 1.2, scale: 1.0 }
const CONDUIT_XRAY = { color: 0xff8833, emissive: 0xff4400, intensity: 0.7, scale: 0.85 }
const CONDUIT_DKM  = { color: 0xcc55ff, emissive: 0x9900cc, intensity: 2.2, scale: 2.2 }

function onCosmicViewModeChange(mode: 'natural' | 'xray' | 'dark_matter') {
  cosmicViewMode.value = mode
  const cfg = mode === 'dark_matter' ? CONDUIT_DKM
            : mode === 'xray'        ? CONDUIT_XRAY
            :                          CONDUIT_NAT

  for (const mesh of conduitMeshes) {
    const mat = mesh.material as THREE.MeshStandardMaterial
    mat.color.setHex(cfg.color)
    mat.emissive.setHex(cfg.emissive)
    mat.emissiveIntensity = cfg.intensity
    mesh.scale.setScalar(cfg.scale)
  }
}

// Countdown display for timed events (updated each second)
const eventCountdown = ref('')

// ── Cluster label overlay state ───────────────────────────────────────────────

interface ClusterLabel {
  name:        string
  supercluster: string
  scColor:     string
  x:           number
  y:           number
  visible:     boolean
}

const clusterLabels = shallowRef<ClusterLabel[]>([])

// ── Supercluster legend data ──────────────────────────────────────────────────

const superclusters = SUPERCLUSTERS.map(sc => ({
  name:     sc.name,
  colorHex: '#' + new THREE.Color(sc.color).getHexString(),
}))

interface TransitDest {
  label: string
  route: string
  dist:  string
  spec:  string
}

// Transit destination list — filtered from galaxy data by void type
const transitTargets = computed<TransitDest[]>(() => {
  if (!selected.value?.isConduit || !galaxyStore.isLoaded) return []
  const voidName = selected.value.conduitVoidName ?? ''

  const allSystems = [...galaxyStore.systems.values()]

  let candidates: typeof allSystems
  if (voidName.includes('Boötes')) {
    // Far-field: systems > 300 pc  (inter-supercluster routing)
    candidates = allSystems.filter(s => (s.sy_dist ?? 0) > 300)
  } else if (voidName.includes('Sculptor')) {
    // Southern sky direction (dec < −15°)
    candidates = allSystems.filter(s => s.dec < -15)
  } else {
    // Local Void: intermediate range 50–300 pc
    candidates = allSystems.filter(s => {
      const d = s.sy_dist ?? 0
      return d >= 50 && d <= 300
    })
  }

  // Sort by ascending distance, take 6
  candidates.sort((a, b) => (a.sy_dist ?? 9999) - (b.sy_dist ?? 9999))

  return candidates.slice(0, 6).map(sys => {
    const planet = sys.planets[0]
    return {
      label: sys.hostname,
      route: planet
        ? `/surface/${encodeURIComponent(sys.hostname)}/${encodeURIComponent(planet.pl_name)}`
        : '/galaxy',
      dist: sys.sy_dist?.toFixed(0) ?? '?',
      spec: sys.st_spectype?.slice(0, 2) ?? '—',
    }
  })
})

function initiateTransit(dest: TransitDest) {
  selected.value = null
  portalStore.openPortal({ label: dest.label, route: dest.route })
}

// ── Three.js ──────────────────────────────────────────────────────────────────

let renderer:  THREE.WebGLRenderer
let scene:     THREE.Scene
let camera:    THREE.PerspectiveCamera
let controls:  OrbitControls
let raycaster: THREE.Raycaster
let animId:    number

const mouseNDC = new THREE.Vector2()

interface HitTarget {
  mesh:  THREE.Object3D
  label: NonNullable<typeof hoveredLabel.value>
  info:  SelectedInfo
}
let hitTargets: HitTarget[] = []

// conduit meshes for pulse animation
let conduitMeshes: THREE.Mesh[] = []

// ── X-ray cluster LOD tracking ────────────────────────────────────────────────

interface XRayLodEntry {
  cluster:        XRayCluster
  sphere:         THREE.Mesh    // invisible hit target
  visual:         THREE.Sprite  // galaxy point sprite
  pos:            THREE.Vector3
  starGroup:      THREE.Group | null
  beaconRing:     THREE.Mesh | null
  hasEvent:       boolean
  spriteBaseSize: number        // original sprite scale (for distance-based scaling)
  bcgGlowMesh:    THREE.Mesh | null   // warm inner glow at BCG when star field is active
  spriteRes:      number        // current texture resolution (128 = far, 384 = near)
  clusterColor:   THREE.Color   // stored so we can rebuild the sprite material
  clusterRichness: number
}

let xrayLodEntries: XRayLodEntry[] = []
let activeLodEntry:  XRayLodEntry | null = null
const LOD_FAR    = 40.0  // scene units — begin sprite brightening and scale-up
const LOD_MID    = 20.0  // scene units — pronounced glow, approaching
const LOD_NEAR   = 9.0   // scene units — spawn star field
const LOD_REVEAL = 2.5   // scene units — all stars fully revealed

// ── Named cluster LOD tracking ────────────────────────────────────────────────

interface NamedClusterLodEntry {
  cluster:   CosmicCluster
  pos:       THREE.Vector3
  physR:     number          // physical radius in scene units
  starGroup: THREE.Group | null
}

let namedLodEntries: NamedClusterLodEntry[] = []
let activeNamedLodEntry: NamedClusterLodEntry | null = null
const LOD_NAMED_NEAR = 0.45  // scene units (~6.75 Mpc) — fly into cluster to trigger

// Countdown interval handle
let countdownInterval: ReturnType<typeof setInterval> | null = null

// ── Scene setup ───────────────────────────────────────────────────────────────

function initScene() {
  if (!canvas.value) return

  renderer = new THREE.WebGLRenderer({ canvas: canvas.value, antialias: true })
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.toneMapping        = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 0.9

  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x010208)
  scene.fog        = new THREE.FogExp2(0x010208, 0.022)

  camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.05, 400)
  camera.position.set(3, 2, 12)
  camera.lookAt(0, 0, 0)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.1
  controls.minDistance   = 0.3
  controls.maxDistance   = 250   // covers ~3750 Mpc at MPC_SCALE 1/15

  raycaster = new THREE.Raycaster()
  raycaster.params.Points = { threshold: 0.3 }

  scene.add(new THREE.AmbientLight(0x080c18, 1))

  buildBackground()
  buildVoids()
  buildFilaments()
  buildClusters()
  buildConduitMarkers()

  // X-ray clusters load async after scene is up
  void loadXrayClusters().then(buildXrayClusters).catch(e => console.warn('X-ray clusters:', e))

  window.addEventListener('resize', onResize)
  startLoop()
}

// ── Background: distant galaxy sprites ───────────────────────────────────────

function buildBackground() {
  const positions: number[] = []
  const colors: number[]    = []
  const rng = mulberry32(12345)

  for (let i = 0; i < 3000; i++) {
    // Distribute on a large sphere
    const theta = rng() * Math.PI * 2
    const phi   = Math.acos(2 * rng() - 1)
    const r     = 70 + rng() * 60
    positions.push(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi)
    )
    const brightness = 0.15 + rng() * 0.35
    const hue = rng()
    const col = new THREE.Color().setHSL(hue, 0.3, brightness)
    colors.push(col.r, col.g, col.b)
  }

  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('color',    new THREE.Float32BufferAttribute(colors, 3))
  const mat = new THREE.PointsMaterial({
    size: 0.4, vertexColors: true, sizeAttenuation: false,
    transparent: true, opacity: 0.55, depthWrite: false,
  })
  scene.add(new THREE.Points(geo, mat))
}

// ── Void shells ───────────────────────────────────────────────────────────────

function buildVoids() {
  for (const v of VOIDS) {
    const pos = voidScenePos(v)
    const r   = voidSceneRadius(v)
    if (r < 0.2) continue   // skip tiny/zero-radius

    // Fill — very faint dark interior
    const fillGeo = new THREE.SphereGeometry(r, 24, 16)
    const fillMat = new THREE.MeshBasicMaterial({
      color: v.color, transparent: true, opacity: 0.04,
      side: THREE.BackSide, depthWrite: false,
    })
    const fill = new THREE.Mesh(fillGeo, fillMat)
    fill.position.copy(pos)
    scene.add(fill)

    // Wireframe shell
    const wireGeo = new THREE.SphereGeometry(r, 20, 12)
    const wireMat = new THREE.MeshBasicMaterial({
      color: v.color === 0x00050e ? 0x001133 : v.color,
      wireframe: true, transparent: true, opacity: 0.07, depthWrite: false,
    })
    const wire = new THREE.Mesh(wireGeo, wireMat)
    wire.position.copy(pos)
    scene.add(wire)

    // Void label sprite (circle billboard)
    addTextMarker(pos.clone().setY(pos.y + r * 0.85), v.name, 0x334466, 0.8)
  }
}

// ── Cosmic web filaments ──────────────────────────────────────────────────────

function buildFilaments() {
  const clusterMap = new Map<string, CosmicCluster>()
  CLUSTERS.forEach(c => clusterMap.set(c.name, c))

  const drawn = new Set<string>()

  for (const c of CLUSTERS) {
    if (!c.filaments) continue
    for (const targetName of c.filaments) {
      const key = [c.name, targetName].sort().join('↔')
      if (drawn.has(key)) continue
      drawn.add(key)

      const target = clusterMap.get(targetName)
      if (!target) continue

      const a = clusterScenePos(c)
      const b = clusterScenePos(target)

      // Arc: midpoint offset perpendicular to chord
      const mid  = a.clone().lerp(b, 0.5)
      const perp = new THREE.Vector3(
        -(b.z - a.z), Math.abs(b.y - a.y) * 0.3 + 0.8, (b.x - a.x)
      ).normalize().multiplyScalar(a.distanceTo(b) * 0.12)
      mid.add(perp)

      const curve = new THREE.QuadraticBezierCurve3(a, mid, b)
      const pts   = curve.getPoints(40)
      const geo   = new THREE.BufferGeometry().setFromPoints(pts)
      const mat   = new THREE.LineBasicMaterial({
        color: 0x1a3a6a, transparent: true, opacity: 0.35,
        depthWrite: false,
      })
      scene.add(new THREE.Line(geo, mat))
    }
  }
}

// ── Galaxy clusters ───────────────────────────────────────────────────────────

function buildClusters() {
  for (const c of CLUSTERS) {
    const pos  = clusterScenePos(c)
    const isMW = c.name === 'Milky Way'
    const col  = new THREE.Color(c.color)
    const sc   = lookupSupercluster(c.name)
    const scColor = sc ? '#' + new THREE.Color(sc.color).getHexString() : undefined

    if (isMW) {
      // Milky Way: central bulge sphere + disk ring + soft glow
      const r   = 0.38
      const geo = new THREE.SphereGeometry(r, 24, 24)
      const mat = new THREE.MeshStandardMaterial({
        color: col, emissive: col, emissiveIntensity: 1.3,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.copy(pos)
      scene.add(mesh)

      // Galactic disk ring
      const diskGeo = new THREE.RingGeometry(r * 1.15, r * 2.6, 64)
      const diskMat = new THREE.MeshBasicMaterial({
        color: col, side: THREE.DoubleSide, transparent: true,
        opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending,
      })
      const disk = new THREE.Mesh(diskGeo, diskMat)
      disk.position.copy(pos)
      disk.rotation.x = Math.PI * 0.12
      scene.add(disk)

      // Soft outer glow
      const glowGeo  = new THREE.SphereGeometry(r * 3.5, 8, 8)
      const glowMat  = new THREE.MeshBasicMaterial({
        color: col, transparent: true, opacity: 0.10,
        depthWrite: false, blending: THREE.AdditiveBlending,
      })
      const glowMesh = new THREE.Mesh(glowGeo, glowMat)
      glowMesh.position.copy(pos)
      scene.add(glowMesh)

      const light = new THREE.PointLight(col, 1.5, r * 20)
      light.position.copy(pos)
      scene.add(light)

      hitTargets.push({
        mesh,
        label: { name: 'Milky Way', type: 'Our Galaxy — click to enter', detail: 'Galaxy view' },
        info: {
          name: 'Milky Way', type: 'Our Galaxy',
          icon: 'scatter_plot', iconColor: 'amber',
          supercluster: c.supercluster, scColor,
          details: { 'Distance': '—', 'Richness': `${c.richness} / 10` },
          isMilkyWay: true,
        },
      })

    } else {
      // Named cluster: galaxy point sprite + thin wireframe boundary + invisible hit sphere
      const physR      = (0.4 + c.richness * 0.28) * MPC_SCALE   // true physical radius in scene units
      const spriteSize = Math.max(0.14, 0.08 + c.richness * 0.026)
      const aspect     = 1.25 + (c.richness % 4) * 0.14           // varied ellipticity

      const sprite = makeGalaxySprite(col, c.richness, spriteSize, aspect)
      sprite.position.copy(pos)
      scene.add(sprite)

      // Thin geodesic wireframe at true cluster boundary scale
      const wireGeo = new THREE.IcosahedronGeometry(physR, 1)
      const wireMat = new THREE.MeshBasicMaterial({
        color: c.color, wireframe: true, transparent: true,
        opacity: 0.08, depthWrite: false,
      })
      const wire = new THREE.Mesh(wireGeo, wireMat)
      wire.position.copy(pos)
      scene.add(wire)

      // Invisible hit sphere — slightly larger than sprite for comfortable clicking
      const hitR   = Math.max(0.10, spriteSize * 0.55)
      const hitGeo = new THREE.SphereGeometry(hitR, 5, 5)
      const hitMat = new THREE.MeshBasicMaterial({ visible: false })
      const hitMesh = new THREE.Mesh(hitGeo, hitMat)
      hitMesh.position.copy(pos)
      scene.add(hitMesh)

      hitTargets.push({
        mesh: hitMesh,
        label: { name: c.name, type: 'Galaxy Cluster', detail: `${c.distMpc} Mpc` },
        info: {
          name:         c.name,
          type:         'Galaxy Cluster',
          icon:         'mdi-star-circle',
          iconColor:    'cyan-4',
          supercluster: c.supercluster,
          scColor,
          details: {
            'Distance':  `${c.distMpc} Mpc`,
            'Richness':  `${c.richness} / 10`,
            'Connected': c.filaments?.join(', ') ?? '—',
          },
        },
      })

      namedLodEntries.push({ cluster: c, pos: pos.clone(), physR, starGroup: null })

      if (c.brightGalaxies?.length) buildBrightGalaxies(c, pos, col)
    }
  }
}

function buildBrightGalaxies(cluster: CosmicCluster, clusterPos: THREE.Vector3, baseCol: THREE.Color) {
  const bgCol = baseCol.clone().lerp(new THREE.Color(0xffffff), 0.35)

  for (const bg of cluster.brightGalaxies!) {
    const bgPos = clusterPos.clone().add(
      new THREE.Vector3(bg.offset[0], bg.offset[1], bg.offset[2])
    )

    // Small glowing orb
    const geo = new THREE.SphereGeometry(0.07, 8, 8)
    const mat = new THREE.MeshStandardMaterial({
      color: bgCol, emissive: bgCol, emissiveIntensity: 1.4,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.copy(bgPos)
    scene.add(mesh)

    // Additive halo
    const haloGeo = new THREE.SphereGeometry(0.18, 6, 6)
    const haloMat = new THREE.MeshBasicMaterial({
      color: bgCol, transparent: true, opacity: 0.12,
      depthWrite: false, blending: THREE.AdditiveBlending,
    })
    const halo = new THREE.Mesh(haloGeo, haloMat)
    halo.position.copy(bgPos)
    scene.add(halo)

    hitTargets.push({
      mesh,
      label: { name: bg.name, type: bg.type, detail: bg.lum },
      info: {
        name:            bg.name,
        type:            bg.type,
        icon:            'mdi-star-four-points',
        iconColor:       'amber-3',
        isBrightGalaxy:  true,
        details: {
          'Cluster':     cluster.name,
          'Class':       bg.type,
          ...(bg.lum ? { 'Luminosity': bg.lum } : {}),
          'Distance':    `${cluster.distMpc} Mpc`,
        },
      },
    })
  }
}

// ── Wormhole conduit markers ──────────────────────────────────────────────────

function buildConduitMarkers() {
  const conduits = buildConduits()

  for (const conduit of conduits) {
    const pos = conduit.pos.clone().multiplyScalar(1 / 15)  // Mpc → scene units

    // Marker: small upward-pointing tetrahedron (4-sided cone)
    const geo = new THREE.ConeGeometry(0.18, 0.55, 4)
    const mat = new THREE.MeshStandardMaterial({
      color: 0x00e5ff, emissive: 0x00e5ff, emissiveIntensity: 1.2,
    })
    const mesh = new THREE.Mesh(geo, mat)
    mesh.position.copy(pos)
    mesh.userData = { conduit }
    scene.add(mesh)
    conduitMeshes.push(mesh)

    // Ring glow
    const ringGeo = new THREE.RingGeometry(0.22, 0.32, 20)
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x00e5ff, side: THREE.DoubleSide, transparent: true,
      opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.position.copy(pos).setY(pos.y - 0.05)
    ring.rotation.x = -Math.PI / 2
    scene.add(ring)

    // Hit target
    const info: SelectedInfo = {
      name:             conduit.name,
      type:             'Wormhole Conduit',
      icon:             'mdi-hexagon-outline',
      iconColor:        'cyan-4',
      details: {
        'Void':     conduit.voidName,
        'Position': `${conduit.pos.x.toFixed(0)}, ${conduit.pos.y.toFixed(0)}, ${conduit.pos.z.toFixed(0)} Mpc`,
        'Access':   'Open — transit direct from cosmic view',
        'Range':    'Unlimited (void-edge routing)',
      },
      isConduit:        true,
      conduitVoidName:  conduit.voidName,
    }
    hitTargets.push({ mesh, label: { name: conduit.name, type: 'Wormhole Conduit', detail: conduit.voidName }, info })
  }
}

// ── X-ray cluster catalog layer ───────────────────────────────────────────────

function buildXrayClusters(clusters: XRayCluster[]) {
  for (const c of clusters) {
    const pos      = xrayClusterScenePos(c)
    const richness = tapKevToRichness(c.tapKev)
    const col      = new THREE.Color(c.colorHex)

    // Galaxy point sprite — size from X-ray temperature (richness proxy)
    const spriteSize = 0.035 + richness * 0.010
    const aspect     = 1.20 + (c.name.charCodeAt(3) % 5) * 0.10  // deterministic variety
    const visual     = makeGalaxySprite(col, richness, spriteSize, aspect)
    visual.position.copy(pos)
    scene.add(visual)

    // Invisible hit sphere for raycasting
    const hitR   = Math.max(0.055, spriteSize * 0.55)
    const hitGeo = new THREE.SphereGeometry(hitR, 4, 4)
    const hitMat = new THREE.MeshBasicMaterial({ visible: false })
    const mesh   = new THREE.Mesh(hitGeo, hitMat)
    mesh.position.copy(pos)
    scene.add(mesh)

    const ev       = eventForCluster(c.name)
    const hasEvent = !!ev

    // Event / settlement beacon ring (sized to sprite, not old sphere radius)
    let beaconRing: THREE.Mesh | null = null
    if (hasEvent) {
      const evColor = new THREE.Color(EVENT_TYPE_COLOR[ev!.type])
      const br      = spriteSize * 1.3
      const ringGeo = new THREE.RingGeometry(br, br * 1.35, 32)
      const ringMat = new THREE.MeshBasicMaterial({
        color: evColor, side: THREE.DoubleSide,
        transparent: true, opacity: 0.7,
        depthWrite: false, blending: THREE.AdditiveBlending,
      })
      beaconRing = new THREE.Mesh(ringGeo, ringMat)
      beaconRing.position.copy(pos)
      beaconRing.rotation.x = -Math.PI / 2
      scene.add(beaconRing)
    }

    const entry: XRayLodEntry = {
      cluster: c, sphere: mesh, visual, pos: pos.clone(),
      starGroup: null, beaconRing, hasEvent,
      spriteBaseSize: spriteSize,
      bcgGlowMesh:   null,
      spriteRes:     128,
      clusterColor:  col.clone(),
      clusterRichness: richness,
    }
    xrayLodEntries.push(entry)

    const detailLabel = ev
      ? `${EVENT_TYPE_LABEL[ev.type]}  ·  ${ev.title}`
      : `z ${c.z.toFixed(3)}  ·  ${c.distMpc.toFixed(0)} Mpc  ·  ${c.tapKev} keV`

    hitTargets.push({
      mesh,
      label: { name: c.name, type: ev ? `${EVENT_TYPE_LABEL[ev.type]} — X-ray cluster` : 'X-ray cluster', detail: detailLabel },
      info: {
        name:      c.name,
        type:      ev ? `${EVENT_TYPE_LABEL[ev.type]} — X-ray cluster` : 'X-ray Galaxy Cluster',
        icon:      hasEvent ? 'mdi-broadcast' : 'mdi-radioactive',
        iconColor: hasEvent ? 'amber-4' : 'orange-4',
        details: {
          'Redshift':   c.z.toFixed(4),
          'Distance':   `${c.distMpc.toFixed(1)} Mpc`,
          'X-ray temp': `${c.tapKev} keV`,
          'Richness':   `${richness} / 10`,
          'Catalog':    c.source,
          ...(ev ? { 'Event': ev.title, 'Host': ev.community } : {}),
        },
        xrayCluster: c,
        ...(hasEvent ? { isXrayEvent: true, eventId: ev!.id } as any : {}),
      },
    })
  }
}

// ── Star-field LOD spawn / despawn ────────────────────────────────────────────

function spawnStarField(entry: XRayLodEntry) {
  if (entry.starGroup) return
  const richness = tapKevToRichness(entry.cluster.tapKev)
  const rng      = seededRng(entry.cluster.name.charCodeAt(1) * 997 + entry.cluster.name.charCodeAt(5))
  const count    = 35 + Math.round(richness * 4)
  const radius   = 0.55 + richness * 0.08
  const group    = new THREE.Group()
  group.position.copy(entry.pos)

  for (let i = 0; i < count; i++) {
    const isBcg  = i === 0
    const spec   = randomClusterSpectral(rng, isBcg)
    const mag    = isBcg ? 1 : 4 + rng() * 5     // BCG is mag 1 (vivid tier)
    const size   = isBcg ? 0.62 : 0.18 + rng() * 0.22
    const star   = makeStarMesh(spec, mag, size)

    const theta  = rng() * Math.PI * 2
    const phi    = Math.acos(2 * rng() - 1)
    const r      = radius * (isBcg ? 0.05 : 0.15 + rng() * 0.85)
    star.position.set(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi),
    )
    // All stars except BCG start hidden — revealed progressively by distance
    star.visible = isBcg
    group.add(star)
  }

  // Warm glow mesh at BCG position: simulates the BCG illuminating the cluster.
  // Uses additive blending so it adds light-like tint to nearby sprites.
  const bcgGlowGeo = new THREE.SphereGeometry(0.18, 14, 14)
  const bcgGlowMat = new THREE.MeshBasicMaterial({
    color: 0xffe0aa,
    transparent: true, opacity: 0.55,
    depthWrite: false, blending: THREE.AdditiveBlending,
  })
  const bcgGlowMesh = new THREE.Mesh(bcgGlowGeo, bcgGlowMat)
  // BCG is group.children[0]; its local position is near the group centre
  bcgGlowMesh.position.copy((group.children[0] as THREE.Sprite).position)
  group.add(bcgGlowMesh)
  entry.bcgGlowMesh = bcgGlowMesh

  // Outer halo around BCG
  const outerHaloGeo = new THREE.SphereGeometry(0.55, 8, 8)
  const outerHaloMat = new THREE.MeshBasicMaterial({
    color: 0xffcc88,
    transparent: true, opacity: 0.12,
    depthWrite: false, blending: THREE.AdditiveBlending,
  })
  const outerHalo = new THREE.Mesh(outerHaloGeo, outerHaloMat)
  outerHalo.position.copy(bcgGlowMesh.position)
  group.add(outerHalo)

  entry.starGroup = group
  scene.add(group)
  entry.visual.visible = false
}

function despawnStarField(entry: XRayLodEntry) {
  if (!entry.starGroup) return
  scene.remove(entry.starGroup)
  entry.starGroup.traverse(o => {
    if ((o as THREE.Sprite).isSprite) {
      ;(o as THREE.Sprite).material.dispose()
    } else if ((o as THREE.Mesh).isMesh) {
      const m = o as THREE.Mesh
      m.geometry?.dispose()
      ;(m.material as THREE.Material)?.dispose()
    }
  })
  entry.starGroup  = null
  entry.bcgGlowMesh = null
  entry.visual.visible = true
}

// ── Named cluster star-field LOD ──────────────────────────────────────────────

function spawnNamedStarField(entry: NamedClusterLodEntry) {
  if (entry.starGroup) return
  const seed   = entry.cluster.name.split('').reduce((a, c) => a + c.charCodeAt(0), 0)
  const rng    = seededRng(seed)
  const count  = 28 + Math.round(entry.cluster.richness * 5)
  const radius = Math.max(0.12, entry.physR * 2.5)
  const group  = new THREE.Group()
  group.position.copy(entry.pos)

  for (let i = 0; i < count; i++) {
    const isBcg  = i === 0
    const spec   = randomClusterSpectral(rng, isBcg)
    const mag    = isBcg ? 2 : 4 + rng() * 5
    const size   = isBcg ? 0.042 : 0.014 + rng() * 0.016
    const star   = makeStarMesh(spec, mag, size)

    const theta  = rng() * Math.PI * 2
    const phi    = Math.acos(2 * rng() - 1)
    const r      = radius * (0.08 + rng() * 0.92)
    star.position.set(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi),
    )
    group.add(star)
  }

  entry.starGroup = group
  scene.add(group)
}

function despawnNamedStarField(entry: NamedClusterLodEntry) {
  if (!entry.starGroup) return
  scene.remove(entry.starGroup)
  entry.starGroup.traverse(o => {
    if ((o as THREE.Sprite).isSprite) {
      ;(o as THREE.Sprite).material.dispose()
    }
  })
  entry.starGroup = null
}

function updateNamedLod() {
  let closestEntry: NamedClusterLodEntry | null = null
  let closestDist  = Infinity

  for (const entry of namedLodEntries) {
    const d = camera.position.distanceTo(entry.pos)
    if (d < closestDist) { closestDist = d; closestEntry = entry }
  }

  if (closestEntry && closestDist < LOD_NAMED_NEAR) {
    if (activeNamedLodEntry !== closestEntry) {
      if (activeNamedLodEntry) despawnNamedStarField(activeNamedLodEntry)
      activeNamedLodEntry = closestEntry
      spawnNamedStarField(closestEntry)
    }
  } else if (activeNamedLodEntry && closestDist >= LOD_NAMED_NEAR * 1.3) {
    despawnNamedStarField(activeNamedLodEntry)
    activeNamedLodEntry = null
  }
}

function enterCluster() {
  if (!selected.value) return
  const entry = namedLodEntries.find(e => e.cluster.name === selected.value!.name)
  if (!entry) return

  // Elevated vista: approach from slightly above the cluster's plane so we
  // land looking down at the member galaxies.
  const fromCam    = camera.position.clone().sub(entry.pos).normalize()
  const up         = new THREE.Vector3(0, 1, 0)
  const right      = new THREE.Vector3().crossVectors(fromCam, up).normalize()
  const flyR       = Math.max(0.04, entry.physR * 0.38)
  const elevOffset = flyR * 0.35   // 35% upward offset

  // Phase 1: Turn to face cluster
  gsap.to(controls.target, {
    duration: 1.0,
    x: entry.pos.x, y: entry.pos.y, z: entry.pos.z,
    ease: 'power2.out',
    onUpdate: () => controls.update(),
  })

  // Phase 2: Fly in — slow start, smooth landing
  gsap.to(camera.position, {
    duration: 5.0,
    x: entry.pos.x - fromCam.x * flyR + right.x * flyR * 0.25,
    y: entry.pos.y + elevOffset,
    z: entry.pos.z - fromCam.z * flyR + right.z * flyR * 0.25,
    ease: 'power4.inOut',
    onUpdate: () => controls.update(),
  })
}

// ── Text marker (billboard disc with label) ───────────────────────────────────

function addTextMarker(pos: THREE.Vector3, label: string, color: number, opacity: number) {
  // Simple circle disc
  const geo = new THREE.CircleGeometry(0.08, 12)
  const mat = new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, depthWrite: false,
  })
  const m = new THREE.Mesh(geo, mat)
  m.position.copy(pos)
  scene.add(m)
}

// ── Interaction ───────────────────────────────────────────────────────────────

function onHover(e: MouseEvent) {
  const el = canvas.value!
  mouseNDC.x =  (e.clientX / el.clientWidth)  * 2 - 1
  mouseNDC.y = -(e.clientY / el.clientHeight) * 2 + 1
  hoverStyle.value = { left: (e.clientX + 14) + 'px', top: (e.clientY + 14) + 'px' }

  raycaster.setFromCamera(mouseNDC, camera)
  const meshes = hitTargets.map(t => t.mesh)
  const hits   = raycaster.intersectObjects(meshes, false)

  if (hits.length) {
    const ht = hitTargets.find(t => t.mesh === hits[0].object)
    hoveredLabel.value = ht?.label ?? null
    canvas.value!.style.cursor = 'pointer'
  } else {
    hoveredLabel.value = null
    canvas.value!.style.cursor = ''
  }
}

function clearHover() {
  hoveredLabel.value = null
  if (canvas.value) canvas.value.style.cursor = ''
}

function onClick(e: MouseEvent) {
  if (enteringMW.value) return
  const el = canvas.value!
  mouseNDC.x =  (e.clientX / el.clientWidth)  * 2 - 1
  mouseNDC.y = -(e.clientY / el.clientHeight) * 2 + 1

  raycaster.setFromCamera(mouseNDC, camera)
  const hits = raycaster.intersectObjects(hitTargets.map(t => t.mesh), false)
  if (!hits.length) { selected.value = null; return }

  const ht = hitTargets.find(t => t.mesh === hits[0].object)
  if (!ht) return

  // Milky Way click → animated fly-in, no panel
  if (ht.info.isMilkyWay) {
    enterMilkyWay()
    return
  }

  selected.value = ht.info

  // Open event panel if this cluster has an event
  const evId = (ht.info as any).eventId as string | undefined
  if (evId) {
    const ev = COSMIC_EVENTS.find(e => e.id === evId) ?? null
    activeEvent.value = ev
    startCountdown(ev)
  } else {
    activeEvent.value = null
  }

  // X-ray cluster → zoom into LOD range so star field appears immediately
  if (ht.info.xrayCluster) {
    const entry = xrayLodEntries.find(e => e.sphere === hits[0].object)
    if (entry) zoomToXrayCluster(entry)
    return
  }

  // All other objects: partial fly toward the click
  const targetPos = hits[0].object.position.clone()
  const dist      = camera.position.distanceTo(targetPos)
  const flyDist   = ht.info.isBrightGalaxy
    ? Math.max(0.4, dist * 0.25)
    : Math.max(1.5, dist * 0.4)
  const dir = camera.position.clone().sub(targetPos).normalize()
  gsap.to(camera.position, {
    duration: 1.2,
    x: targetPos.x + dir.x * flyDist,
    y: targetPos.y + dir.y * flyDist + 0.3,
    z: targetPos.z + dir.z * flyDist,
    ease: 'power2.inOut',
    onUpdate: () => controls.update(),
  })
  gsap.to(controls.target, {
    duration: 1.2,
    x: targetPos.x, y: targetPos.y, z: targetPos.z,
    ease: 'power2.inOut',
    onUpdate: () => controls.update(),
  })
}

function startCountdown(ev: CosmicEvent | null) {
  if (countdownInterval) clearInterval(countdownInterval)
  if (!ev?.eventTimeUtc) { eventCountdown.value = ''; return }

  const update = () => {
    const ms = msUntilEvent(ev.eventTimeUtc!)
    if (ms <= 0) {
      eventCountdown.value = 'LIVE NOW'
      return
    }
    const h = Math.floor(ms / 3_600_000)
    const m = Math.floor((ms % 3_600_000) / 60_000)
    const s = Math.floor((ms % 60_000) / 1000)
    eventCountdown.value = h > 0
      ? `${h}h ${m}m`
      : `${m}m ${String(s).padStart(2, '0')}s`
  }
  update()
  countdownInterval = setInterval(update, 1000)
}

function enterMilkyWay() {
  enteringMW.value = true
  controls.enabled = false
  // Phase 1: fly camera into the Milky Way sphere centre
  gsap.to(camera.position, {
    duration: 2.4,
    x: 0, y: 0, z: 0.05,
    ease: 'power3.in',
    onUpdate: () => controls.update(),
    onComplete: () => void router.push('/galaxy'),
  })
  gsap.to(controls.target, {
    duration: 1.2,
    x: 0, y: 0, z: 0,
    ease: 'power2.inOut',
    onUpdate: () => controls.update(),
  })
}

// ── Camera presets ────────────────────────────────────────────────────────────

function flyToMilkyWay() {
  gsap.to(camera.position, { duration: 1.5, x: 1, y: 0.5, z: 4, ease: 'power2.inOut', onUpdate: () => controls.update() })
  gsap.to(controls.target, { duration: 1.5, x: 0, y: 0,   z: 0, ease: 'power2.inOut', onUpdate: () => controls.update() })
}

function flyToOverview() {
  gsap.to(camera.position, { duration: 2.0, x: 8, y: 6, z: 22, ease: 'power2.inOut', onUpdate: () => controls.update() })
  gsap.to(controls.target, { duration: 2.0, x: 3, y: 0, z: 0,  ease: 'power2.inOut', onUpdate: () => controls.update() })
}

// ── Label projection ──────────────────────────────────────────────────────────

let lastLabelMs = 0
const _projVec   = new THREE.Vector3()

function updateClusterLabels(nowMs: number) {
  if (nowMs - lastLabelMs < 40) return   // ~25 fps is plenty for DOM labels
  lastLabelMs = nowMs

  const W = window.innerWidth
  const H = window.innerHeight
  const pad = 60   // hide labels near edge

  const labels: ClusterLabel[] = CLUSTERS.map(c => {
    _projVec.copy(clusterScenePos(c))
    _projVec.project(camera)

    const x = (_projVec.x + 1) / 2 * W
    const y = (-_projVec.y + 1) / 2 * H
    const visible = _projVec.z < 1
      && x > pad && x < W - pad
      && y > pad && y < H - pad

    const sc = lookupSupercluster(c.name)
    return {
      name:        c.name,
      supercluster: c.supercluster ?? '',
      scColor:     sc ? '#' + new THREE.Color(sc.color).getHexString() : '#667788',
      x, y, visible,
    }
  })

  clusterLabels.value = labels
}

// ── Animation loop ────────────────────────────────────────────────────────────

function startLoop() {
  const tick = () => {
    animId = requestAnimationFrame(tick)
    controls.update()

    const now = performance.now()
    const t   = now / 1000

    // Pulse conduit markers
    for (let i = 0; i < conduitMeshes.length; i++) {
      const s = 0.85 + Math.sin(t * 2.2 + i * 1.1) * 0.2
      conduitMeshes[i].scale.setScalar(s)
      ;(conduitMeshes[i].material as THREE.MeshStandardMaterial).emissiveIntensity =
        0.9 + Math.sin(t * 2.2 + i * 1.1) * 0.5
    }

    // LOD: find closest X-ray cluster, spawn/despawn star fields
    updateXrayLod(t)
    updateNamedLod()

    // Context panel — camera position relative to Milky Way origin
    camDistToOrigin.value = camera.position.length()

    updateClusterLabels(now)
    defenderNav.value?.redraw(buildCosmicDefenderData())
    renderer.render(scene, camera)
  }
  tick()
}

// Progressive star reveal: show N stars based on distance.
// BCG (child[0]) is always visible; secondaries reveal as camera approaches.
function progressiveReveal(entry: XRayLodEntry, dist: number) {
  if (!entry.starGroup) return
  const children = entry.starGroup.children
  const starCount = children.filter(c => (c as THREE.Sprite).isSprite).length

  // Reveal fraction: 0 at LOD_NEAR (only BCG), 1 at LOD_REVEAL (all stars)
  const t        = Math.max(0, Math.min(1, (LOD_NEAR - dist) / (LOD_NEAR - LOD_REVEAL)))
  const revealed = Math.max(1, Math.round(1 + t * t * (starCount - 1)))  // ease-in curve

  let spriteIdx = 0
  for (const child of children) {
    if (!(child as THREE.Sprite).isSprite) continue
    child.visible = spriteIdx < revealed
    spriteIdx++
  }

  // BCG glow pulses gently — dims as secondary stars emerge (they share the light)
  if (entry.bcgGlowMesh) {
    const gMat = entry.bcgGlowMesh.material as THREE.MeshBasicMaterial
    gMat.opacity = 0.55 * (1 - t * 0.35) + Math.sin(t * Math.PI * 0.4) * 0.06
  }
}

// Vista point: an elevated, angled position that gives a good view of the cluster.
// Arrives inside LOD_NEAR so the star field is visible from the moment of landing.
function computeVistaPoint(target: THREE.Vector3, richness: number): THREE.Vector3 {
  const vistaR = LOD_NEAR * 0.60   // land 5.4 scene units from cluster — inside LOD_NEAR

  // Elevation: 20-30° above the cluster's midplane — varies gently by richness
  const elevAngle = 0.34 + richness * 0.022

  // Lateral offset: approach at 25° from the camera's current direction so we
  // see the cluster from a slight angle rather than head-on
  const fromCam = camera.position.clone().sub(target).normalize()
  const up      = new THREE.Vector3(0, 1, 0)
  const right   = new THREE.Vector3().crossVectors(fromCam, up).normalize()

  return new THREE.Vector3(
    target.x - fromCam.x * vistaR * Math.cos(elevAngle) + right.x * vistaR * 0.30,
    target.y + vistaR * Math.sin(elevAngle),
    target.z - fromCam.z * vistaR * Math.cos(elevAngle) + right.z * vistaR * 0.30,
  )
}

function updateXrayLod(t: number) {
  let closestEntry: XRayLodEntry | null = null
  let closestDist  = Infinity

  for (const entry of xrayLodEntries) {
    const d = camera.position.distanceTo(entry.pos)

    // ── Galaxy sprite: multi-stage glow as camera approaches ─────────────────
    if (entry.visual.visible) {
      let opacity = 0.75
      if (d < LOD_FAR) {
        // Stage 1 (LOD_FAR → LOD_MID): gentle brightening
        const farProg = 1 - (d - LOD_MID) / (LOD_FAR - LOD_MID)
        opacity += Math.max(0, farProg) * 0.20
      }
      if (d < LOD_MID) {
        // Stage 2 (LOD_MID → LOD_NEAR): pronounced bloom, sprite scales up
        const midProg = 1 - d / LOD_MID
        opacity += midProg * 0.45
        // Scale up sprite so it appears to resolve into a blob as you approach
        const scaleBoost = 1 + midProg * 2.0
        entry.visual.scale.setScalar(entry.spriteBaseSize * scaleBoost)
      } else {
        entry.visual.scale.setScalar(entry.spriteBaseSize)
      }
      ;(entry.visual.material as THREE.SpriteMaterial).opacity = Math.min(1, opacity)
    }

    // ── Pulse event beacons ───────────────────────────────────────────────────
    if (entry.beaconRing) {
      const pulse = 0.4 + Math.sin(t * 2.4 + entry.pos.x) * 0.35
      ;(entry.beaconRing.material as THREE.MeshBasicMaterial).opacity = pulse
      entry.beaconRing.rotation.z = t * 0.3
    }

    // ── Progressive star reveal when star field is active ─────────────────────
    if (entry.starGroup) progressiveReveal(entry, d)

    if (d < closestDist) { closestDist = d; closestEntry = entry }
  }

  // Spawn when inside LOD_NEAR; despawn with hysteresis
  if (closestEntry && closestDist < LOD_NEAR) {
    if (activeLodEntry !== closestEntry) {
      if (activeLodEntry) despawnStarField(activeLodEntry)
      activeLodEntry = closestEntry
      spawnStarField(closestEntry)
    }
  } else if (activeLodEntry && closestDist >= LOD_NEAR * 1.25) {
    despawnStarField(activeLodEntry)
    activeLodEntry = null
  }
}

// ── Resize ────────────────────────────────────────────────────────────────────

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function mulberry32(seed: number) {
  return function() {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────

onMounted(() => {
  void galaxyStore.loadData()   // preload so destinations are ready when conduit is clicked
  initScene()
  // Gentle flythrough intro
  setTimeout(() => {
    gsap.from(camera.position, {
      duration: 3, z: 30, ease: 'power2.out',
      onUpdate: () => controls.update(),
    })
  }, 300)
})

onUnmounted(() => {
  cancelAnimationFrame(animId)
  if (countdownInterval) clearInterval(countdownInterval)
  window.removeEventListener('resize', onResize)
  if (activeNamedLodEntry) despawnNamedStarField(activeNamedLodEntry)
  namedLodEntries = []
  renderer?.dispose()
  controls?.dispose()
})

// ── Legend ────────────────────────────────────────────────────────────────────

// ── Event helpers exposed to template ────────────────────────────────────────

function eventTypeLabel(type: string): string {
  return EVENT_TYPE_LABEL[type as keyof typeof EVENT_TYPE_LABEL] ?? type
}
function eventTypeColor(type: string): string {
  return EVENT_TYPE_COLOR[type as keyof typeof EVENT_TYPE_COLOR] ?? '#88aacc'
}
function openPonInk(url: string) {
  window.open(url, '_blank', 'noopener')
}
// ── X-ray cluster navigation ──────────────────────────────────────────────────

function zoomToXrayCluster(entry: XRayLodEntry) {
  const target  = entry.pos.clone()
  const richness = tapKevToRichness(entry.cluster.tapKev)
  const vista   = computeVistaPoint(target, richness)

  // Phase 1 (0–1.2 s): Turn the camera to face the cluster — feel its pull
  // before you start moving. Controls target swings smoothly.
  gsap.to(controls.target, {
    duration: 1.2,
    x: target.x, y: target.y, z: target.z,
    ease: 'power2.out',
    onUpdate: () => controls.update(),
  })

  // Phase 2 (0–5.5 s): Fly camera from current position to vista point.
  // power4.inOut: extremely gentle start (barely feels like moving at first),
  // then builds momentum, then eases into the landing — the "slowly resolves" feel.
  gsap.to(camera.position, {
    duration: 5.5,
    x: vista.x, y: vista.y, z: vista.z,
    ease: 'power4.inOut',
    onUpdate: () => controls.update(),
  })
}

function findNearestSystem(raDeg: number, decDeg: number): string | null {
  if (!galaxyStore.isLoaded) return null
  const dec1 = (decDeg * Math.PI) / 180
  const ra1  = (raDeg  * Math.PI) / 180
  let bestHost = ''
  let bestCos  = -2
  for (const [, sys] of galaxyStore.systems) {
    const dec2 = (sys.dec * Math.PI) / 180
    const ra2  = (sys.ra  * Math.PI) / 180
    const cosD = Math.sin(dec1) * Math.sin(dec2) + Math.cos(dec1) * Math.cos(dec2) * Math.cos(ra1 - ra2)
    if (cosD > bestCos) { bestCos = cosD; bestHost = sys.hostname }
  }
  return bestHost || null
}

const nearestSystemHost = computed<string | null>(() => {
  if (!selected.value?.xrayCluster || !galaxyStore.isLoaded) return null
  return findNearestSystem(selected.value.xrayCluster.raDeg, selected.value.xrayCluster.decDeg)
})

function enterXraySystem() {
  if (!selected.value?.xrayCluster) return
  const cluster = selected.value.xrayCluster
  const host    = nearestSystemHost.value
  void router.push({
    path:  '/galaxy',
    query: host
      ? { focusHost: host, fromCluster: cluster.name }
      : { candidateCluster: cluster.name, candidateRa: String(cluster.raDeg), candidateDec: String(cluster.decDeg) },
  })
}

function flyToActiveEvent() {
  if (!activeEvent.value) return
  const entry = xrayLodEntries.find(e => e.cluster.name === activeEvent.value!.clusterName)
  if (!entry) return
  const p = entry.pos
  gsap.to(camera.position, { duration: 2.0, x: p.x + 2, y: p.y + 1, z: p.z + 4, ease: 'power2.inOut', onUpdate: () => controls.update() })
  gsap.to(controls.target, { duration: 2.0, x: p.x, y: p.y, z: p.z, ease: 'power2.inOut', onUpdate: () => controls.update() })
}

// Re-export for template
const formatEventTime = (iso: string) => {
  const d = new Date(iso)
  return d.toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' })
}

// ── DefenderNav — cosmic mode ─────────────────────────────────────────────────

const defenderNav = ref<InstanceType<typeof DefenderNav> | null>(null)

function buildCosmicDefenderData(): DefenderNavData {
  const clusters: CosmicStripEntry[] = CLUSTERS.map(c => {
    const pos = clusterScenePos(c)
    return {
      name:      c.name,
      x:         pos.x,
      z:         pos.z,
      richness:  c.richness,
      color:     '#' + new THREE.Color(c.color).getHexString(),
      hasEvent:  false,
    }
  })

  // Add X-ray clusters from loaded entries
  for (const entry of xrayLodEntries) {
    clusters.push({
      name:     entry.cluster.name,
      x:        entry.pos.x,
      z:        entry.pos.z,
      richness: tapKevToRichness(entry.cluster.tapKev),
      color:    entry.cluster.colorHex,
      hasEvent: entry.hasEvent,
    })
  }

  const conduits: ConduitStripEntry[] = conduitMeshes.map((m, i) => ({
    name:      m.userData.conduit?.name ?? `Conduit ${i}`,
    x:         m.position.x,
    z:         m.position.z,
    isPulsing: true,
  }))

  return {
    cosmicData: {
      cameraX:  camera.position.x,
      cameraZ:  camera.position.z,
      clusters,
      conduits,
    },
  }
}

function onDefenderCosmicFlyTo(target: DefenderTarget) {
  if (target.type === 'cluster') {
    const entry = xrayLodEntries.find(e => e.cluster.name === target.id)
    if (entry) { zoomToXrayCluster(entry); return }
    const named = namedLodEntries.find(e => e.cluster.name === target.id)
    if (named) {
      // Reuse the elevated vista logic via a local inline
      const fromCam = camera.position.clone().sub(named.pos).normalize()
      const right   = new THREE.Vector3().crossVectors(fromCam, new THREE.Vector3(0, 1, 0)).normalize()
      const flyR    = Math.max(0.08, named.physR * 0.38)
      gsap.to(controls.target, {
        duration: 1.0,
        x: named.pos.x, y: named.pos.y, z: named.pos.z,
        ease: 'power2.out', onUpdate: () => controls.update(),
      })
      gsap.to(camera.position, {
        duration: 5.0,
        x: named.pos.x - fromCam.x * flyR + right.x * flyR * 0.25,
        y: named.pos.y + flyR * 0.35,
        z: named.pos.z - fromCam.z * flyR + right.z * flyR * 0.25,
        ease: 'power4.inOut', onUpdate: () => controls.update(),
      })
    }
  }
}

// ── Supported chain quick-reference (mirrors ChainStatusPage data) ────────────
const SUPPORTED_CHAINS = [
  { id: 'algo',   symbol: 'ALGO',  name: 'Algorand', color: '#1b85e0', status: 'live',    statusLabel: 'Live — Exolocation NFTs (ARC-3/ARC-69)' },
  { id: 'matic',  symbol: 'MATIC', name: 'Polygon',  color: '#8247e5', status: 'testing', statusLabel: 'Testnet (Amoy) — $BARS, WQ Certs, Health Cards' },
  { id: 'sol',    symbol: 'SOL',   name: 'Solana',   color: '#14f195', status: 'live',    statusLabel: 'Live — Station Core / Module / EcocitySolution' },
  { id: 'tez',    symbol: 'TEZ',   name: 'Tezos',    color: '#2c7df7', status: 'planned', statusLabel: 'Planned — Art collectibles, $BARS (FA2)' },
  { id: 'hbar',   symbol: 'HBAR',  name: 'Hedera',   color: '#3dbcb4', status: 'planned', statusLabel: 'Planned — Eco-data certs, supply chain' },
  { id: 'celo',   symbol: 'CELO',  name: 'Celo',     color: '#35d07f', status: 'testing', statusLabel: 'Testnet (Alfajores) — Community badges, Eco-ops tokens' },
]

const legendItems = [
  { label: 'Milky Way',             color: '#ffd480', size: 12 },
  { label: 'Galaxy cluster',        color: '#88ccff', size: 9 },
  { label: 'Bright galaxy object',  color: '#ffe8aa', size: 5 },
  { label: 'X-ray cluster (Takey)', color: '#ffcc88', size: 5 },
  { label: 'Cosmic void shell',     color: '#112244', size: 9 },
  { label: 'Filament',              color: '#1a3a6a', size: 4 },
  { label: 'Wormhole conduit',      color: '#00e5ff', size: 8 },
]
</script>

<style scoped>
.hover-box {
  position: fixed;
  background: rgba(2, 8, 20, 0.9);
  border: 1px solid rgba(0, 229, 255, 0.25);
  border-radius: 4px;
  padding: 6px 10px;
  font-family: monospace;
  pointer-events: none;
  z-index: 10;
  max-width: 220px;
}

.side-panel {
  position: absolute;
  top: 54px;
  right: 12px;
  width: 250px;
  background: rgba(1, 4, 16, 0.92);
  border: 1px solid rgba(0, 229, 255, 0.18);
  border-radius: 6px;
  backdrop-filter: blur(6px);
  z-index: 5;
}

.transit-row {
  padding: 3px 2px;
  border-radius: 3px;
}
.transit-row:hover {
  background: rgba(0, 229, 255, 0.06);
}
.dest-name {
  font-size: 11px;
  font-family: monospace;
  line-height: 1.3;
}
.dest-meta {
  font-size: 9px;
  line-height: 1.2;
}
.warp-btn {
  font-size: 9px;
  flex-shrink: 0;
}

.legend-block {
  background: rgba(0, 0, 0, 0.65);
  border-radius: 5px;
  font-family: monospace;
}
.legend-row {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 3px;
}
.legend-dot {
  display: inline-block;
  border-radius: 50%;
  flex-shrink: 0;
}

/* ── Cluster label overlays ──────────────────────────────────────────── */

.labels-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 3;
  overflow: hidden;
}

.cluster-label {
  position: absolute;
  transform: translate(-50%, calc(-100% - 10px));
  text-align: center;
  pointer-events: none;
  filter: drop-shadow(0 1px 3px rgba(0,0,0,0.8));
}

.cl-name {
  font-size: 9px;
  font-family: monospace;
  color: rgba(180, 220, 255, 0.78);
  letter-spacing: 0.09em;
  line-height: 1.3;
  white-space: nowrap;
  text-transform: uppercase;
}

.cl-super {
  font-size: 8px;
  font-family: monospace;
  color: var(--sc-color, #7799aa);
  opacity: 0.65;
  letter-spacing: 0.06em;
  white-space: nowrap;
}

/* ── Supercluster badge in side panel ──────────────────────────────── */

.sc-badge {
  border: 1px solid;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.35);
}

/* ── Event panel ─────────────────────────────────────────────────────── */

.event-panel {
  position: absolute;
  bottom: 54px;
  left: 14px;
  width: 270px;
  background: rgba(1, 4, 16, 0.94);
  border: 1px solid rgba(255, 200, 80, 0.22);
  border-radius: 7px;
  backdrop-filter: blur(8px);
  z-index: 6;
}

.event-type-badge {
  border: 1px solid;
  border-radius: 3px;
  font-family: monospace;
}

.countdown-display {
  background: rgba(0, 229, 255, 0.06);
  border: 1px solid rgba(0, 229, 255, 0.15);
  border-radius: 3px;
  padding: 4px 8px;
  font-family: monospace;
}

/* ── Milky Way entry fade overlay ───────────────────────────────────── */

.mw-entry-overlay {
  position: fixed;
  inset: 0;
  background: radial-gradient(ellipse at center, #ffd48022 0%, #000000 70%);
  animation: mwFadeIn 2.4s ease-in forwards;
  z-index: 50;
  pointer-events: none;
}

@keyframes mwFadeIn {
  0%   { opacity: 0; background-color: transparent; }
  40%  { opacity: 0.4; }
  100% { opacity: 1; background-color: #000000; }
}

.mw-fade-enter-active { animation: mwFadeIn 2.4s ease-in forwards; }

/* ── Contextual info panel (top-left) ─────────────────────────────── */

.ctx-panel {
  position: fixed;
  top: 12px;
  left: 12px;
  z-index: 5;
  width: 244px;
  background: rgba(1, 4, 16, 0.91);
  border: 1px solid rgba(0, 180, 220, 0.18);
  border-radius: 6px;
  backdrop-filter: blur(9px);
  font-family: 'Courier New', monospace;
  overflow: hidden;
}

.ctx-header {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  background: rgba(0, 8, 24, 0.55);
  border-bottom: 1px solid rgba(0, 80, 120, 0.32);
}

.ctx-icon     { color: rgba(0, 200, 240, 0.78); font-size: 11px; }
.ctx-headline {
  flex: 1;
  font-size: 9px;
  letter-spacing: 0.11em;
  color: rgba(0, 200, 240, 0.82);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ctx-l1 {
  font-size: 7px;
  letter-spacing: 0.13em;
  color: rgba(0, 150, 180, 0.52);
  background: rgba(0, 80, 120, 0.22);
  padding: 1px 5px;
  border-radius: 2px;
  flex-shrink: 0;
}

/* Body section */
.ctx-body { padding: 6px 10px 4px; }

.ctx-line {
  font-size: 8px;
  letter-spacing: 0.05em;
  color: rgba(100, 150, 180, 0.65);
  line-height: 1.55;
}

.ctx-div {
  height: 1px;
  background: rgba(0, 80, 120, 0.28);
  margin: 5px 0;
}

.ctx-sc {
  font-size: 8px;
  letter-spacing: 0.07em;
  opacity: 0.8;
  margin-bottom: 3px;
}

.ctx-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 6px;
  margin-bottom: 2px;
}

.ctx-k {
  font-size: 7px;
  color: rgba(70, 120, 155, 0.65);
  letter-spacing: 0.04em;
  white-space: nowrap;
}

.ctx-v {
  font-size: 8px;
  color: rgba(160, 210, 232, 0.85);
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 148px;
}

.ctx-settle-hint .ctx-v { font-weight: bold; }

/* Navigation pathway */
.ctx-pathway {
  padding: 5px 10px;
  border-top: 1px solid rgba(0, 80, 120, 0.28);
  background: rgba(0, 4, 16, 0.45);
}

.ctx-path-lbl {
  font-size: 6px;
  letter-spacing: 0.16em;
  color: rgba(50, 90, 130, 0.6);
  margin-bottom: 4px;
}

.ctx-steps {
  display: flex;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
}

.ctx-step {
  font-size: 7px;
  letter-spacing: 0.08em;
  color: rgba(70, 120, 155, 0.5);
  white-space: nowrap;
}
.ctx-step--active {
  color: #00e5ff;
}
.ctx-step--link {
  color: rgba(0, 200, 240, 0.68);
  cursor: pointer;
  text-decoration: underline;
  text-decoration-color: rgba(0, 180, 220, 0.28);
  text-underline-offset: 2px;
  transition: color 0.1s;
}
.ctx-step--link:hover { color: #00e5ff; }
.ctx-step--dim { color: rgba(50, 90, 130, 0.38); }
.ctx-step--settle {
  color: rgba(255, 180, 40, 0.78);
  cursor: pointer;
  transition: color 0.1s;
}
.ctx-step--settle:hover { color: #ffcc44; }
.ctx-arr {
  font-size: 8px;
  color: rgba(0, 80, 120, 0.35);
  padding: 0 1px;
}

/* Claim CTA section */
.ctx-claim {
  padding: 6px 10px 8px;
  border-top: 1px solid rgba(0, 80, 120, 0.28);
  background: rgba(0, 6, 20, 0.5);
}

.ctx-claim-title {
  font-size: 7px;
  letter-spacing: 0.15em;
  color: rgba(255, 180, 40, 0.72);
  margin-bottom: 3px;
}

.ctx-claim-sub {
  font-size: 7px;
  color: rgba(70, 120, 155, 0.65);
  letter-spacing: 0.04em;
  line-height: 1.55;
  margin-bottom: 7px;
}

/* ── 6-chain mini-grid in claim panel ─────────────────────────── */

.ctx-chains {
  display: flex;
  gap: 4px;
  flex-wrap: wrap;
  margin-bottom: 3px;
}

.ctx-chain-chip {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-family: 'Courier New', monospace;
  font-size: 7px;
  letter-spacing: 0.07em;
  padding: 2px 6px;
  border-radius: 3px;
  border: 1px solid rgba(255,255,255,0.10);
  background: rgba(0, 8, 22, 0.60);
  color: rgba(140, 190, 220, 0.72);
  cursor: pointer;
  transition: all 0.12s;
}

.ctx-chain-chip:hover {
  background: rgba(0, 40, 80, 0.65);
  color: rgba(200, 230, 255, 0.90);
}

.ctx-chain-chip--live    { border-color: rgba(50, 220, 140, 0.30); }
.ctx-chain-chip--testing { border-color: rgba(200, 160, 50, 0.30); }
.ctx-chain-chip--planned { border-color: rgba(80, 100, 140, 0.22); color: rgba(100, 140, 170, 0.55); }

.ctx-chain-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  flex-shrink: 0;
  opacity: 0.85;
}

.ctx-chains-hint {
  font-family: 'Courier New', monospace;
  font-size: 6px;
  letter-spacing: 0.08em;
  color: rgba(50, 100, 140, 0.50);
  cursor: pointer;
  margin-bottom: 5px;
  transition: color 0.12s;
}
.ctx-chains-hint:hover { color: rgba(0, 180, 220, 0.65); }

/* ── Dark matter overlay (DK.MAT mode) ─────────────────────────── */

.dm-overlay {
  position: fixed;
  bottom: 90px;
  left: 14px;
  z-index: 7;
  width: 280px;
  background: rgba(18, 4, 38, 0.94);
  border: 1px solid rgba(180, 80, 255, 0.35);
  border-radius: 7px;
  padding: 10px 13px;
  font-family: 'Courier New', monospace;
  backdrop-filter: blur(10px);
}

.dm-title {
  font-size: 8px;
  letter-spacing: 0.14em;
  color: rgba(200, 120, 255, 0.80);
  margin-bottom: 8px;
  display: flex;
  align-items: center;
}

.dm-body {
  font-size: 8px;
  color: rgba(160, 120, 200, 0.72);
  letter-spacing: 0.03em;
  line-height: 1.6;
  margin-bottom: 9px;
}

.dm-legend {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 7px;
  color: rgba(160, 120, 200, 0.60);
  letter-spacing: 0.06em;
  border-top: 1px solid rgba(180, 80, 255, 0.18);
  padding-top: 7px;
}

.dm-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 3px;
  flex-shrink: 0;
}

.dm-conduit  { background: rgba(200, 80, 255, 0.85); }
.dm-void     { background: rgba(60, 100, 180, 0.65); }
.dm-filament { background: rgba(100, 50, 160, 0.55); }
</style>
