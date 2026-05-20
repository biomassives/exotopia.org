<template>
  <q-layout view="lHh Lpr lFf">

    <!-- ── Header ──────────────────────────────────────────────────────── -->
    <q-header elevated class="bg-transparent">
      <q-toolbar>
        <!-- EXOTOPIA logo — always routes to cosmic (L1) top of scale hierarchy -->
        <q-toolbar-title
          class="text-weight-light exo-logo"
          style="letter-spacing:0.12em"
          @click="goToCosmic"
        >
          <span class="text-cyan-4">EXO</span><span class="text-blue-grey-3">TOPIA</span>
          <span class="exo-level" :class="{ 'exo-level--here': isAtCosmic }">
            {{ currentLevelLabel }}
          </span>
        </q-toolbar-title>

        <!-- Realm / address entry -->
        <q-btn
          flat dense rounded
          icon="mdi-crosshairs-gps"
          label="Enter"
          color="cyan-7"
          class="q-mr-sm"
          size="sm"
          @click="addressDialog = true"
        />

        <!-- Wallet status pill -->
        <q-btn
          v-if="wallet.connected"
          flat dense rounded
          color="positive"
          icon="account_balance_wallet"
          :label="wallet.shortAddress || ''"
          class="q-mr-sm"
          @click="$router.push('/mint')"
        />
        <q-btn
          v-else
          flat dense rounded
          color="blue-grey-4"
          icon="account_balance_wallet"
          label="Connect"
          class="q-mr-sm"
          @click="connectDialog = true"
        />

        <q-btn flat dense round icon="help_outline" color="blue-grey-5"
          @click="portalStore.showHelp = !portalStore.showHelp">
          <q-tooltip anchor="bottom right" self="top right">Settlement guide</q-tooltip>
        </q-btn>
      </q-toolbar>
    </q-header>

    <!-- ── Page area ───────────────────────────────────────────────────── -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- ── Wormhole portal overlay ──────────────────────────────────────── -->
    <WormholePortal />

    <!-- ── Address / realm entry dialog ──────────────────────────────── -->
    <q-dialog v-model="addressDialog" position="top">
      <q-card class="address-card q-pa-none" style="margin-top:56px;min-width:420px;max-width:600px;width:92vw">

        <q-card-section class="q-pb-xs">
          <div class="text-caption text-cyan-6 q-mb-xs" style="letter-spacing:0.14em">
            NAVIGATE EXOTOPIA
          </div>
          <q-input
            v-model="addressInput"
            dark dense outlined
            placeholder="Planet name · star system · exolocation address"
            color="cyan"
            input-class="address-input-field"
            autofocus
            @update:model-value="onAddressInput"
            @keyup.enter="onEnterKey"
          >
            <template #prepend>
              <q-icon name="mdi-crosshairs-gps" color="cyan-8" size="16px" />
            </template>
            <template #append>
              <q-btn flat dense icon="send" color="cyan-7" size="sm" @click="navigateToFirst" />
            </template>
          </q-input>
        </q-card-section>

        <!-- Search results -->
        <q-list v-if="searchResults.length" dense separator class="search-results">
          <q-item
            v-for="r in searchResults"
            :key="r.route"
            clickable v-ripple
            class="result-item"
            @click="navigateTo(r.route)"
          >
            <q-item-section avatar>
              <q-icon :name="r.icon" :color="r.color" size="15px" />
            </q-item-section>
            <q-item-section>
              <q-item-label class="text-blue-grey-1" style="font-family:monospace;font-size:12px">
                {{ r.label }}
              </q-item-label>
              <q-item-label caption class="text-blue-grey-5" style="font-size:10px">
                {{ r.meta }}
              </q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-icon name="chevron_right" color="blue-grey-7" size="14px" />
            </q-item-section>
          </q-item>
          <q-item v-if="noResults" class="result-item">
            <q-item-section>
              <q-item-label class="text-blue-grey-6" style="font-size:11px">
                No matching planet or system found
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>

        <!-- Realm shortcuts (shown when input empty) -->
        <q-card-section v-if="!addressInput" class="q-pt-xs q-pb-md">
          <div class="text-caption text-blue-grey-6 q-mb-sm" style="letter-spacing:0.1em">
            REALMS
          </div>
          <div class="row q-gutter-sm">
            <q-btn
              v-for="realm in realmLinks"
              :key="realm.to"
              unelevated dense
              :icon="realm.icon"
              :label="realm.label"
              :color="realm.color"
              class="realm-btn text-caption"
              size="sm"
              @click="navigateTo(realm.to)"
            />
          </div>
        </q-card-section>

      </q-card>
    </q-dialog>

    <!-- ── Connect wallet dialog ───────────────────────────────────────── -->
    <q-dialog v-model="connectDialog">
      <q-card class="glass-card" style="min-width:300px">
        <q-card-section>
          <div class="text-h6 text-blue-grey-2">Connect Wallet</div>
        </q-card-section>
        <q-card-section class="q-gutter-sm">
          <q-btn
            outline color="cyan" label="Phantom (Solana)"
            icon="mdi-currency-eth" class="full-width"
            @click="connectDialog = false"
          />
          <q-btn
            outline color="blue-4" label="Pera (Algorand)"
            icon="mdi-wallet" class="full-width"
            @click="connectDialog = false"
          />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="blue-grey-4" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

  </q-layout>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useWalletStore }      from 'src/stores/wallet'
import { useGalaxyStore }      from 'src/stores/galaxy'
import { usePortalStore }      from 'src/stores/portal'
import WormholePortal          from 'src/components/WormholePortal.vue'

const router       = useRouter()
const route        = useRoute()
const wallet       = useWalletStore()
const galaxyStore  = useGalaxyStore()
const portalStore  = usePortalStore()

// ── Logo — cosmic zoom-out ────────────────────────────────────────────────────

const isAtCosmic = computed(() => route.path === '/cosmic' || route.path === '/')

// Show the current level in the hierarchy next to the logo
const currentLevelLabel = computed((): string => {
  const p = route.path
  if (p.startsWith('/surface'))  return '· L4 SURFACE'
  if (p.startsWith('/galaxy'))   return '· L2 GALAXY'
  if (p.startsWith('/cosmic'))   return '· L1 COSMIC ◈'
  if (p.startsWith('/welcome'))  return '· L4 SETTLEMENT'
  if (p.startsWith('/gallery'))  return '· L6 GALLERY'
  if (p.startsWith('/station'))  return '· L3 SYSTEM'
  return '· EXOTOPIA'
})

/** Click EXOTOPIA → zoom out to Level 1 (Cosmic view) via portal. */
function goToCosmic() {
  if (route.path === '/cosmic') return
  // Source color derived from current level; destination is deep space blue (cosmic)
  const srcColors: Record<string, string> = {
    '/galaxy':  '#c8882a',   // Milky Way amber
    '/welcome': '#46b9a0',   // settlement teal
    '/gallery': '#7744aa',   // gallery violet
    '/station': '#66aacc',   // station blue
  }
  const srcColor = Object.entries(srcColors).find(([k]) => route.path.startsWith(k))?.[1]
  portalStore.openPortal({
    label:       'Cosmic Web  ·  Level 1',
    route:       '/cosmic',
    sourceColor: srcColor,
    destColor:   '#1a3778',  // deep space blue for cosmic arrival
  })
}

const addressDialog = ref(false)
const connectDialog = ref(false)
const addressInput  = ref('')

interface SearchResult {
  label: string
  meta:  string
  route: string
  icon:  string
  color: string
}

const searchResults = ref<SearchResult[]>([])
const noResults     = ref(false)

// ── Realm shortcuts ───────────────────────────────────────────────────────────

const realmLinks = [
  { to: '/cosmic',  icon: 'mdi-web',              label: 'Cosmic',    color: 'cyan-9'       },
  { to: '/galaxy',  icon: 'scatter_plot',          label: 'Galaxy',    color: 'blue-grey-8'  },
  { to: '/welcome', icon: 'mdi-home-circle-outline', label: 'Settlement', color: 'blue-grey-8' },
  { to: '/gallery', icon: 'mdi-rotate-3d',         label: 'Gallery',   color: 'blue-grey-8'  },
  { to: '/station', icon: 'mdi-space-station',     label: 'Station',   color: 'blue-grey-8'  },
  { to: '/mint',       icon: 'mdi-hexagon-multiple',  label: 'Mint NFT',      color: 'cyan-10'      },
  { to: '/mint-style', icon: 'mdi-tune-variant',      label: 'Style Builder', color: 'amber-9'      },
  { to: '/chains',     icon: 'mdi-link-variant',       label: 'Chains',        color: 'blue-grey-8'  },
  { to: '/glossary',   icon: 'mdi-book-open-variant',  label: 'Glossary',      color: 'blue-grey-8'  },
]

// ── Address search ────────────────────────────────────────────────────────────

function onAddressInput() {
  const q = addressInput.value.trim().toLowerCase()
  if (!q) {
    searchResults.value = []
    noResults.value     = false
    return
  }

  if (!galaxyStore.isLoaded) {
    void galaxyStore.loadData()
    return
  }

  const results: SearchResult[] = []
  const seenHosts = new Set<string>()

  // Match planets first
  for (const p of galaxyStore.planets) {
    if (results.length >= 8) break
    if (p.pl_name.toLowerCase().includes(q)) {
      results.push({
        label: p.pl_name,
        meta:  `${p.hostname} · ${p.sy_dist?.toFixed(0) ?? '?'} pc`,
        route: `/surface/${encodeURIComponent(p.hostname)}/${encodeURIComponent(p.pl_name)}`,
        icon:  'mdi-earth',
        color: 'cyan-5',
      })
      seenHosts.add(p.hostname)
    }
  }

  // Then match host star systems not already shown
  for (const [host, sys] of galaxyStore.systems) {
    if (results.length >= 8) break
    if (seenHosts.has(host)) continue
    if (host.toLowerCase().includes(q)) {
      const planet = sys.planets[0]
      if (planet) {
        results.push({
          label: host,
          meta:  `${sys.planets.length} planet(s) · ${sys.sy_dist?.toFixed(0) ?? '?'} pc`,
          route: `/surface/${encodeURIComponent(host)}/${encodeURIComponent(planet.pl_name)}`,
          icon:  'scatter_plot',
          color: 'amber-6',
        })
      }
    }
  }

  searchResults.value = results
  noResults.value     = results.length === 0
}

function onEnterKey() {
  navigateToFirst()
}

function navigateToFirst() {
  if (searchResults.value.length) {
    navigateTo(searchResults.value[0]!.route)
  }
}

function navigateTo(route: string) {
  addressDialog.value = false
  addressInput.value  = ''
  searchResults.value = []
  noResults.value     = false
  void router.push(route)
}

// Reset state when dialog closes
watch(addressDialog, open => {
  if (!open) {
    addressInput.value  = ''
    searchResults.value = []
    noResults.value     = false
  }
})
</script>

<style scoped>
.address-card {
  background: rgba(1, 6, 22, 0.97);
  border: 1px solid rgba(0, 200, 255, 0.2);
  border-radius: 10px;
  backdrop-filter: blur(12px);
}

.search-results {
  max-height: 280px;
  overflow-y: auto;
}

.result-item {
  min-height: 40px;
}
.result-item:hover {
  background: rgba(0, 180, 255, 0.06);
}

.realm-btn {
  letter-spacing: 0.06em;
}

.nav-active {
  background: rgba(49, 204, 236, 0.08);
  border-left: 2px solid #31ccec;
}

/* ── EXOTOPIA logo — cosmic zoom-out link ─────────────────────── */

.exo-logo {
  cursor: pointer;
  user-select: none;
  transition: filter 0.14s ease, opacity 0.14s ease;
  width: auto !important;   /* override Quasar flex-grow so it doesn't eat all space */
  flex: 0 0 auto;
  padding-right: 12px;
}

.exo-logo:hover {
  filter: brightness(1.3) drop-shadow(0 0 6px rgba(0, 200, 255, 0.4));
}

.exo-logo:active {
  opacity: 0.75;
}

/* Level indicator — small monospace label next to the logo */
.exo-level {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  letter-spacing: 0.14em;
  color: rgba(0, 160, 200, 0.45);
  margin-left: 8px;
  vertical-align: middle;
  font-weight: 400;
  transition: color 0.2s;
}

/* Highlight level label when already at L1 */
.exo-level--here {
  color: rgba(0, 229, 255, 0.75);
}
</style>
