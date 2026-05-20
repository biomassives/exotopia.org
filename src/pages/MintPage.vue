<template>
  <q-page class="mint-page">

    <!-- ════════════════════════════════════════════════════════════════════
         HERO — card fan showcase + edition intro
         ════════════════════════════════════════════════════════════════════ -->
    <div class="mint-hero">

      <!-- Star field backdrop -->
      <div class="hero-stars" aria-hidden="true">
        <div v-for="s in heroStars" :key="s.id"
          class="hero-star"
          :style="{ left: s.x + '%', top: s.y + '%', width: s.r + 'px', height: s.r + 'px', opacity: s.o, animationDelay: s.d + 's' }"
        />
      </div>

      <!-- Copy left -->
      <div class="hero-copy">
        <div class="hero-edition">
          <span class="edition-dot" />
          EXTRAPOLATION EDITION
        </div>

        <h1 class="hero-heading">
          Claim your<br>
          <span class="hero-heading-accent">place in the cosmos</span>
        </h1>

        <p class="hero-desc">
          11 hand-crafted SVG collector's cards. Each one a unique astronomical
          object, phenomenon, or concept from the Exotopia ecosystem.
          Minted on-chain. Yours permanently.
        </p>

        <!-- Rarity chips -->
        <div class="hero-rarities">
          <span v-for="r in RARITY_SUMMARY" :key="r.label" class="rarity-pill"
            :style="{ borderColor: r.color + '55', color: r.color }">
            <span class="rarity-pip" :style="{ background: r.color }" />
            {{ r.count }} {{ r.label }}
          </span>
        </div>

        <!-- Free badge + chains -->
        <div class="hero-meta q-mt-md">
          <span class="free-badge">FREE TO MINT</span>
          <span class="chain-list">ALGO · MATIC · SOL · TEZ · HBAR · CELO</span>
        </div>

        <!-- CTAs -->
        <div class="hero-ctas q-mt-lg">
          <q-btn
            unelevated color="cyan-8" icon="mdi-hexagon-multiple"
            label="Start Minting"
            @click="scrollToForms"
          />
          <q-btn
            flat color="blue-grey-4" icon="mdi-view-gallery"
            label="View Collection"
            @click="$router.push('/gallery')"
            class="q-ml-sm"
          />
        </div>
      </div>

      <!-- Card fan right -->
      <div class="hero-fan" aria-hidden="true">
        <div
          v-for="(fc, i) in fanCards"
          :key="fc.id"
          class="fan-slot"
          :style="fanStyle(i)"
          @click="$router.push('/gallery')"
        >
          <CollectorCard
            :card="fc"
            :width="fanCardWidth(i)"
            :height="Math.round(fanCardWidth(i) * 1.4)"
          />
        </div>
      </div>

    </div><!-- /hero -->

    <!-- Edition stats ticker -->
    <div class="edition-ticker">
      <div class="ticker-inner">
        <span v-for="c in COLLECTOR_CARDS" :key="c.id" class="ticker-item">
          <span class="ticker-num">#{{ String(c.id).padStart(2,'0') }}</span>
          {{ c.name }}
          <span class="ticker-sep">·</span>
        </span>
        <!-- duplicate for seamless loop -->
        <span v-for="c in COLLECTOR_CARDS" :key="'b' + c.id" class="ticker-item" aria-hidden="true">
          <span class="ticker-num">#{{ String(c.id).padStart(2,'0') }}</span>
          {{ c.name }}
          <span class="ticker-sep">·</span>
        </span>
      </div>
    </div>

    <!-- ════════════════════════════════════════════════════════════════════
         MINTING FORMS
         ════════════════════════════════════════════════════════════════════ -->
    <div ref="formsAnchor" class="mint-forms q-pa-md">

      <div class="row items-center q-mb-xs">
        <div class="text-h6 text-blue-grey-2" style="font-family:monospace; letter-spacing:0.08em">
          ◈ CONFIGURE YOUR MINT
        </div>
        <q-space />
        <q-btn flat dense size="sm" color="amber-6" icon="mdi-tune-variant" label="Style Builder"
          @click="$router.push('/mint-style')"
          title="Configure generative minting styles combining network sources" />
      </div>

      <div class="text-caption text-blue-grey-5 q-mb-md" style="font-family:monospace; letter-spacing:0.05em">
        <span class="text-green-5">FREE TO MINT</span> · utility-first model ·
        platform maintenance draw is <strong class="text-amber-5">5%</strong> on aftermarket sales only.
        Network gas is the only cost at mint time.
      </div>

    <q-tabs v-model="tab" dense align="left" class="q-mb-md" scrollable>
      <q-tab name="exolocation" label="Exolocation (Algorand)" />
      <q-tab name="station"     label="Station Core (Solana)"  />
      <q-tab name="module"      label="Module (Solana)"        />
      <q-tab name="solution"    label="Ecocity Solution"       />
      <q-tab name="polygon"     label="Polygon / MATIC" />
      <q-tab name="celo"        label="Celo"            />
    </q-tabs>

    <q-tab-panels v-model="tab" animated class="bg-transparent">

      <!-- ── Exolocation (Algorand ARC-3 / ARC-69) ───────────────────── -->
      <q-tab-panel name="exolocation">
        <div class="mint-form">

          <div class="form-section-label">LOCATION METADATA</div>

          <q-select
            v-model="exo.coordSystem"
            :options="COORD_SYSTEMS"
            label="Coordinate System  (Trophic Level)"
            dark dense outlined
            class="q-mb-sm"
            emit-value map-options
          />

          <!-- Trophic level badge -->
          <div v-if="exo.coordSystem" class="trophic-badge q-mb-sm">
            {{ COORD_SYSTEMS.find(c => c.value === exo.coordSystem)?.label ?? exo.coordSystem }}
          </div>

          <q-input
            v-model="exo.refBody"
            :label="isMoonCoord ? 'Parent Planet (hostname / planet)' : 'Reference Body (hostname / planet)'"
            dark dense outlined
            class="q-mb-sm"
            :rules="[v => !!v.trim() || 'Required']"
          />

          <!-- Moon-specific fields -->
          <template v-if="isMoonCoord">
            <div class="moon-section-label">MOON SPECIFICATION</div>
            <div class="row q-col-gutter-sm q-mb-sm">
              <div class="col-4">
                <q-input v-model.number="exo.moonIndex" type="number" min="1" max="9"
                  label="Moon index (I=1, II=2…)" dark dense outlined />
              </div>
              <div class="col-8">
                <q-input
                  :model-value="exo.refBody ? `${exo.refBody} Moon ${'IIIIIVVVIVIIVIII'.slice((exo.moonIndex-1)*0).charAt(0) || exo.moonIndex}` : ''"
                  label="Moon name (auto-built)"
                  dark dense outlined readonly
                  hint="Derived from parent planet + index"
                />
              </div>
            </div>
            <q-toggle v-model="exo.tidallyLocked" :true-value="true" :false-value="false" :null-value="null"
              label="Tidally locked (one face always toward parent planet)"
              color="amber-6" dense class="q-mb-sm" />
          </template>

          <!-- L5 SYZYGY: Lagrange point selector -->
          <template v-if="isMoonLagrange">
            <div class="moon-section-label">LAGRANGE POINT</div>
            <q-select
              v-model="exo.lagrangePoint"
              :options="MOON_LAGRANGE_OPTS"
              emit-value map-options
              label="Lagrange Point"
              dark dense outlined class="q-mb-sm"
            />
            <div class="lagrange-physics" v-if="exo.lagrangePoint">
              <div v-for="lp in MOON_LAGRANGE_OPTS.filter(o => o.value === exo.lagrangePoint)" :key="lp.value">
                <span :class="['lagrange-stability', exo.lagrangePoint === 'L4' || exo.lagrangePoint === 'L5' ? 'stable' : 'unstable']">
                  {{ exo.lagrangePoint === 'L4' || exo.lagrangePoint === 'L5' ? 'STABLE — no station-keeping required' : 'UNSTABLE — active station-keeping required' }}
                </span>
              </div>
            </div>
          </template>

          <!-- L6 LIMINAL: Interface zone selector -->
          <template v-if="isMoonInterface">
            <div class="moon-section-label">INTERFACE ZONE TYPE</div>
            <q-select
              v-model="exo.interfaceZone"
              :options="MOON_INTERFACE_OPTS"
              emit-value map-options
              label="Zone Type"
              dark dense outlined class="q-mb-sm"
            />
          </template>

          <q-input
            v-model="exo.regionName"
            label="Settlement / Region Name"
            dark dense outlined
            class="q-mb-sm"
            counter maxlength="64"
            :rules="[v => v.trim().length >= 2 || 'Min 2 characters']"
          />

          <q-input
            v-if="!isMoonLagrange && !isMoonInterface"
            v-model="exo.boundary"
            :label="isMoonSurface ? 'Moon surface lat/long boundary' : 'Boundary descriptor (e.g. lat/long or AU range)'"
            dark dense outlined
            class="q-mb-sm"
            :hint="isMoonSurface ? 'e.g. 14.5,-23.1 (terminator zone coordinates)' : 'e.g. 14.5,-23.1 or 1.1-1.3au'"
          />

          <div class="form-section-label q-mt-md">TRANSACTION PREVIEW</div>

          <!-- ── FEE ISOLATION DISPLAY ──────────────────────────────── -->
          <!-- SPEC: community return and network costs are displayed in  -->
          <!-- separate blocks with independent data paths.               -->
          <!-- NEVER compute Total = Yield - NetworkFee in the template. -->

          <div class="fee-isolation-card q-mb-sm">
            <!-- MINT COST — FREE ────────────────────────────────────────── -->
            <div class="fee-block fee-block--free">
              <div class="fee-block-label">MINT COST</div>
              <div class="fee-block-value text-green-4">
                FREE · KES {{ mintCostKES }} · USD {{ mintCostUSD }}
              </div>
              <div class="fee-block-note">
                Utility-first model — no purchase required to mint your initial exolocation deed.
                Platform growth takes priority over early monetisation.
              </div>
            </div>

            <q-separator dark class="q-my-sm" style="opacity:0.15" />

            <!-- AFTERMARKET REFERENCE (informational only) ──────────────── -->
            <div class="fee-block fee-block--network">
              <div class="fee-row">
                <span>Platform maintenance draw</span>
                <span class="text-amber-5">5% on aftermarket sales · KES {{ platformDrawKES }} ref.</span>
              </div>
              <div class="fee-row">
                <span>Algorand ASA creation fee</span>
                <span class="text-blue-grey-5">0.001 ALGO (network only)</span>
              </div>
              <div class="fee-row">
                <span>IPFS metadata pin</span>
                <span class="text-blue-grey-5">~0.00 ALGO (Pinata free tier)</span>
              </div>
              <div class="fee-row">
                <span>Secondary sales</span>
                <span class="text-blue-grey-5">80 / 15 / 5 Resonance Split applies</span>
              </div>
              <div class="fee-block-note fee-note--warn">
                The KES {{ platformDrawKES }} reference is 5% of a benchmark 5 USDC aftermarket transaction.
                It is never charged at mint time.
              </div>
            </div>
          </div>

          <q-btn
            unelevated color="cyan-8"
            icon="mdi-hexagon-outline"
            label="Dry Run — Preview without on-chain cost"
            class="full-width q-mb-xs"
            @click="dryRun('exolocation')"
          />
          <q-btn
            outline color="cyan-6"
            icon="mdi-send"
            label="Execute Mint (connects wallet)"
            class="full-width"
            :disable="!exoFormValid"
            @click="executeMint('exolocation')"
          />
          <div v-if="!exoFormValid" class="validation-hint">
            Complete all required fields before minting.
          </div>
        </div>
      </q-tab-panel>

      <!-- ── Station Core (Solana Bubblegum cNFT) ────────────────────── -->
      <q-tab-panel name="station">
        <div class="mint-form">

          <div class="form-section-label">STATION METADATA</div>

          <q-input
            v-model="station.name"
            label="Station Name"
            dark dense outlined class="q-mb-sm"
            counter maxlength="48"
            :rules="[v => !!v.trim() || 'Required']"
          />

          <q-select
            v-model="station.category"
            :options="STATION_CATEGORIES"
            label="Station Category"
            dark dense outlined class="q-mb-sm"
            emit-value map-options
          />

          <q-input
            v-model="station.exolocationRef"
            label="Exolocation NFT address"
            dark dense outlined class="q-mb-sm"
            hint="exo-surface-v1:hostname:region"
            :rules="[v => v.startsWith('exo-') || 'Must start with exo- prefix']"
          />

          <div class="form-section-label q-mt-md">TRANSACTION PREVIEW</div>

          <div class="fee-isolation-card q-mb-sm">
            <div class="fee-block fee-block--free">
              <div class="fee-block-label">MINT COST</div>
              <div class="fee-block-value text-green-4">FREE · KES 0</div>
              <div class="fee-block-note">
                Utility-first model. On aftermarket sales, 5% platform draw (≈ KES {{ platformDrawKES }}) and 15% Hardware Fund apply automatically.
              </div>
            </div>
            <q-separator dark class="q-my-sm" style="opacity:0.15" />
            <div class="fee-block fee-block--network">
              <div class="fee-row">
                <span>Platform draw (aftermarket ref.)</span>
                <span class="text-amber-5">5% · KES {{ platformDrawKES }}</span>
              </div>
              <div class="fee-row">
                <span>Solana Bubblegum cNFT gas</span>
                <span class="text-blue-grey-5">~0.000005 SOL (network only)</span>
              </div>
              <div class="fee-row">
                <span>Metaplex protocol fee</span>
                <span class="text-blue-grey-5">~0.01 SOL (network only)</span>
              </div>
              <div class="fee-block-note fee-note--warn">
                Gas is estimated — confirm in wallet. Never deducted from community allocation.
              </div>
            </div>
          </div>

          <q-btn
            unelevated color="cyan-8"
            icon="mdi-hexagon-outline"
            label="Dry Run — Preview without on-chain cost"
            class="full-width q-mb-xs"
            @click="dryRun('station')"
          />
          <q-btn
            outline color="cyan-6"
            icon="mdi-send"
            label="Execute Mint (connects wallet)"
            class="full-width"
            :disable="!stationFormValid"
            @click="executeMint('station')"
          />
        </div>
      </q-tab-panel>

      <!-- ── Module (Solana) ──────────────────────────────────────────── -->
      <q-tab-panel name="module">
        <div class="mint-form">
          <div class="text-caption text-blue-grey-5 q-mb-sm">
            Station Module NFT — binds a functional zone to a Station Core.
          </div>
          <div class="form-section-label">MODULE METADATA</div>
          <q-select
            v-model="module_.type"
            :options="MODULE_TYPES"
            label="Module Type"
            dark dense outlined class="q-mb-sm"
            emit-value map-options
          />
          <q-input
            v-model="module_.stationRef"
            label="Parent Station Core NFT address"
            dark dense outlined class="q-mb-sm"
            :rules="[v => !!v.trim() || 'Station Core reference required']"
          />
          <div class="fee-isolation-card q-mt-md q-mb-sm">
            <div class="fee-block fee-block--network">
              <div class="fee-row"><span>Solana cNFT mint</span><span class="text-pink-4">~0.000005 SOL</span></div>
              <div class="fee-block-note fee-note--warn">Gas is informational — confirmed at wallet signing only.</div>
            </div>
          </div>
          <q-btn unelevated color="cyan-8" label="Dry Run" class="full-width q-mb-xs" @click="dryRun('module')" />
          <q-btn outline color="cyan-6" label="Execute Mint" class="full-width" :disable="!moduleFormValid" @click="executeMint('module')" />
        </div>
      </q-tab-panel>

      <!-- ── Ecocity Solution ─────────────────────────────────────────── -->
      <q-tab-panel name="solution">
        <div class="mint-form">
          <div class="text-caption text-blue-grey-5 q-mb-sm">
            EcocitySolution NFT — records a real-world sustainable design object
            earned through eco-ops activity or workshop completion.
          </div>
          <div class="form-section-label">SOLUTION METADATA</div>
          <q-select
            v-model="solution.category"
            :options="ECOCITY_CATEGORIES"
            label="Category"
            dark dense outlined class="q-mb-sm"
            emit-value map-options
          />
          <q-input
            v-model="solution.impactMetric"
            label="Impact metric (e.g. 200L/day, 1.5kWh/day)"
            dark dense outlined class="q-mb-sm"
            :rules="[v => !!v.trim() || 'Required']"
          />
          <q-input
            v-model="solution.recipientAddress"
            label="Recipient wallet address"
            dark dense outlined class="q-mb-sm"
            :rules="[v => v.trim().length > 10 || 'Valid wallet required']"
          />
          <div class="fee-isolation-card q-mt-md q-mb-sm">
            <div class="fee-block fee-block--community">
              <div class="fee-block-label">ECO-OPS MILESTONE REWARD</div>
              <div class="fee-block-value text-green-5">Earned — no purchase required</div>
              <div class="fee-block-note">Dispatched automatically on milestone completion via pon.ink.</div>
            </div>
            <q-separator dark class="q-my-sm" style="opacity:0.15" />
            <div class="fee-block fee-block--network">
              <div class="fee-row"><span>Solana cNFT (airdrop)</span><span class="text-pink-4">~0.000005 SOL (platform covers)</span></div>
            </div>
          </div>
          <q-btn unelevated color="green-8" label="Dry Run Airdrop" class="full-width q-mb-xs" @click="dryRun('solution')" />
          <q-btn outline color="green-6" label="Execute Airdrop" class="full-width" :disable="!solutionFormValid" @click="executeMint('solution')" />
        </div>
      </q-tab-panel>

      <!-- ── Polygon / MATIC ─────────────────────────────────────────────── -->
      <q-tab-panel name="polygon">
        <div class="mint-form">

          <div class="chain-badge chain-badge--polygon">
            <q-icon name="mdi-hexagon-outline" size="14px" class="q-mr-xs" />
            POLYGON AMOY TESTNET  ·  chainId 80002  ·  Draft Push
          </div>
          <div class="text-caption text-blue-grey-5 q-mb-md">
            Polygon PoS (EVM-compatible) — low gas fees, large ecosystem.
            Used for $BARS sound NFTs, Water Quality Certifications, and Health Card IDs.
          </div>

          <!-- Sub-type selector -->
          <q-btn-toggle
            v-model="polyType"
            unelevated dense
            :options="POLY_TYPES"
            class="q-mb-md"
            color="blue-grey-8" text-color="blue-grey-4"
            toggle-color="purple-9" toggle-text-color="white"
          />

          <!-- $BARS -->
          <template v-if="polyType === 'bars'">
            <div class="form-section-label">$BARS SOUND NFT METADATA</div>
            <q-input v-model="bars.title"    label="Track Title"   dark dense outlined class="q-mb-sm" :rules="[v => !!v.trim() || 'Required']" />
            <q-input v-model="bars.artist"   label="Artist (pon.ink handle)" dark dense outlined class="q-mb-sm" :rules="[v => !!v.trim() || 'Required']" />
            <div class="row q-col-gutter-sm q-mb-sm">
              <div class="col-4"><q-input v-model.number="bars.duration_sec" type="number" label="Duration (s)" dark dense outlined /></div>
              <div class="col-4"><q-input v-model.number="bars.bpm"          type="number" label="BPM" dark dense outlined /></div>
              <div class="col-4"><q-input v-model="bars.key"                               label="Key (e.g. Am)" dark dense outlined /></div>
            </div>
            <q-select v-model="bars.license" :options="BARS_LICENSES" label="License" emit-value map-options dark dense outlined class="q-mb-sm" />
            <q-input v-model="bars.ipfs_audio_cid" label="Audio IPFS CID" dark dense outlined class="q-mb-sm" hint="Upload audio to Pinata first — paste CID here" />
            <q-input v-model="bars.description" label="Description" dark dense outlined type="textarea" rows="2" counter maxlength="200" class="q-mb-sm" />
          </template>

          <!-- Water Quality Cert -->
          <template v-if="polyType === 'wq_cert'">
            <div class="form-section-label">WATER QUALITY CERTIFICATION</div>
            <q-input v-model="wqCert.cert_id"      label="Certificate ID (e.g. WQC-LAMU-2026-001)" dark dense outlined class="q-mb-sm" :rules="[v => !!v.trim() || 'Required']" />
            <q-input v-model="wqCert.location_name" label="Site Name"        dark dense outlined class="q-mb-sm" :rules="[v => !!v.trim() || 'Required']" />
            <q-input v-model="wqCert.measured_by"  label="Field Worker (handle)" dark dense outlined class="q-mb-sm" />
            <div class="row q-col-gutter-sm q-mb-sm">
              <div class="col-4"><q-input v-model.number="wqCert.ph"               type="number" label="pH"             dark dense outlined /></div>
              <div class="col-4"><q-input v-model.number="wqCert.turbidity_ntu"    type="number" label="Turbidity (NTU)" dark dense outlined /></div>
              <div class="col-4"><q-input v-model.number="wqCert.nitrate_mg_l"     type="number" label="Nitrate mg/L"   dark dense outlined /></div>
            </div>
            <q-toggle v-model="wqCert.potable" label="Water is potable (drinkable)" color="green-5" class="q-mb-sm" />
          </template>

          <!-- Fee isolation + preview -->
          <div class="form-section-label q-mt-md">TRANSACTION PREVIEW</div>
          <div class="fee-isolation-card q-mb-sm">
            <div class="fee-block fee-block--free">
              <div class="fee-block-label">MINT COST</div>
              <div class="fee-block-value text-green-4">FREE · KES 0</div>
              <div class="fee-block-note">Utility-first. Platform maintenance draw (5% · KES {{ platformDrawKES }}) applies on aftermarket sales only.</div>
            </div>
            <q-separator dark class="q-my-sm" style="opacity:0.15" />
            <div class="fee-block fee-block--network">
              <div class="fee-row"><span>Platform draw (aftermarket ref.)</span><span class="text-amber-5">5% · KES {{ platformDrawKES }}</span></div>
              <div class="fee-row"><span>Polygon Amoy gas</span><span class="text-blue-grey-5">{{ polyGasEstimate }} (network only)</span></div>
              <div class="fee-row"><span>IPFS metadata pin</span><span class="text-blue-grey-5">0.00 MATIC (Pinata free tier)</span></div>
              <div class="fee-block-note fee-note--warn">Testnet only — use faucet at faucet.polygon.technology</div>
            </div>
          </div>

          <!-- Metadata preview -->
          <div v-if="polyDryResult" class="metadata-preview q-mb-sm">
            <div class="form-section-label">METADATA PREVIEW (dry run)</div>
            <div v-for="w in polyDryResult.warnings" :key="w" class="vp-warning">⚠ {{ w }}</div>
            <div v-for="e in polyDryResult.errors"   :key="e" class="mint-error">✗ {{ e }}</div>
            <pre class="meta-json">{{ polyDryResult.metadataJson.slice(0, 800) }}{{ polyDryResult.metadataJson.length > 800 ? '\n…' : '' }}</pre>
            <div class="meta-bytes">{{ polyDryResult.metadataBytes }} bytes — {{ polyDryResult.metadataBytes < 512 ? 'on-chain safe' : 'use IPFS URI' }}</div>
          </div>

          <div class="wallet-status q-mb-sm" v-if="walletAddress">
            <q-icon name="account_balance_wallet" size="12px" color="cyan-5" class="q-mr-xs" />
            {{ walletAddress.slice(0, 6) }}…{{ walletAddress.slice(-4) }} connected
          </div>

          <div class="row q-gutter-xs">
            <q-btn unelevated color="cyan-8" icon="mdi-eye" label="Dry Run" @click="polyDryRun" :loading="polyLoading" class="col" />
            <q-btn outline color="cyan-6" icon="mdi-send" label="Mint on Amoy" @click="polyExecute"
              :disable="!polyCanMint" :loading="polyLoading" class="col" />
          </div>
          <div v-if="polyResult" class="mint-result q-mt-sm" :class="polyResult.success ? 'mint-result--ok' : 'mint-result--fail'">
            <template v-if="polyResult.success">
              ✓ Minted — <a :href="polyResult.explorerUrl" target="_blank" rel="noopener">View on Polygonscan</a>
            </template>
            <template v-else>✗ {{ polyResult.error }}</template>
          </div>
        </div>
      </q-tab-panel>

      <!-- ── Celo ─────────────────────────────────────────────────────────── -->
      <q-tab-panel name="celo">
        <div class="mint-form">

          <div class="chain-badge chain-badge--celo">
            <q-icon name="mdi-leaf-circle-outline" size="14px" class="q-mr-xs" />
            CELO ALFAJORES TESTNET  ·  chainId 44787  ·  Draft Push
          </div>
          <div class="text-caption text-blue-grey-5 q-mb-md">
            Celo is EVM-compatible, mobile-first, and has strong adoption in East Africa.
            Its cUSD stablecoin maps directly to M-Pesa payment flows for community workers.
            Used for Community Badges and Eco-ops Participation Tokens.
          </div>

          <!-- Sub-type selector -->
          <q-btn-toggle
            v-model="celoType"
            unelevated dense
            :options="CELO_TYPES"
            class="q-mb-md"
            color="blue-grey-8" text-color="blue-grey-4"
            toggle-color="green-9" toggle-text-color="white"
          />

          <!-- Community Badge -->
          <template v-if="celoType === 'community_badge'">
            <div class="form-section-label">COMMUNITY BADGE METADATA</div>
            <q-input v-model="badge.badge_name"  label="Badge Name" dark dense outlined class="q-mb-sm" :rules="[v => !!v.trim() || 'Required']" />
            <q-input v-model="badge.community"   label="Community (e.g. Fana Ka)" dark dense outlined class="q-mb-sm" :rules="[v => !!v.trim() || 'Required']" />
            <q-input v-model="badge.recipient"   label="Recipient (pon.ink handle)" dark dense outlined class="q-mb-sm" />
            <q-input v-model="badge.awarded_for" label="Awarded for" dark dense outlined class="q-mb-sm" />
            <q-select v-model="badge.tier" :options="['bronze','silver','gold','platinum']" label="Badge Tier" dark dense outlined class="q-mb-sm" />
          </template>

          <!-- Eco-ops token -->
          <template v-if="celoType === 'eco_ops_token'">
            <div class="form-section-label">ECO-OPS PARTICIPATION TOKEN</div>
            <q-input v-model="ecoToken.token_id"      label="Token ID (e.g. ECO-LAMU-WQ-001)" dark dense outlined class="q-mb-sm" :rules="[v => !!v.trim() || 'Required']" />
            <q-select v-model="ecoToken.activity_type" :options="ECO_OPS_TYPES" emit-value map-options label="Activity Type" dark dense outlined class="q-mb-sm" />
            <q-input v-model="ecoToken.participant"   label="Participant (pon.ink handle)" dark dense outlined class="q-mb-sm" />
            <q-input v-model="ecoToken.location_name" label="Location Name" dark dense outlined class="q-mb-sm" />
            <q-input v-model.number="ecoToken.checkin_count" type="number" label="Check-in count at milestone" dark dense outlined class="q-mb-sm" />
            <q-input v-model="ecoToken.milestone"     label="Milestone description" dark dense outlined class="q-mb-sm" />
            <q-input v-model="ecoToken.group"         label="SHG Group (optional)" dark dense outlined class="q-mb-sm" />
          </template>

          <!-- Fee isolation -->
          <div class="form-section-label q-mt-md">TRANSACTION PREVIEW</div>
          <div class="fee-isolation-card q-mb-sm">
            <div class="fee-block fee-block--free">
              <div class="fee-block-label">MINT COST</div>
              <div class="fee-block-value text-green-4">FREE · KES 0</div>
              <div class="fee-block-note">Earned via eco-ops or event attendance. Dispatched automatically via pon.ink. No purchase required. Platform draw (5% · KES {{ platformDrawKES }}) applies on secondary sales only.</div>
            </div>
            <q-separator dark class="q-my-sm" style="opacity:0.15" />
            <div class="fee-block fee-block--network">
              <div class="fee-row"><span>Platform draw (aftermarket ref.)</span><span class="text-amber-5">5% · KES {{ platformDrawKES }}</span></div>
              <div class="fee-row"><span>Celo Alfajores gas</span><span class="text-blue-grey-5">{{ celoGasEstimate }} (network only)</span></div>
              <div class="fee-block-note fee-note--warn">Testnet only — use faucet at faucet.celo.org/alfajores</div>
            </div>
          </div>

          <!-- Metadata preview -->
          <div v-if="celoDryResult" class="metadata-preview q-mb-sm">
            <div class="form-section-label">METADATA PREVIEW (dry run)</div>
            <div v-for="w in celoDryResult.warnings" :key="w" class="vp-warning">⚠ {{ w }}</div>
            <div v-for="e in celoDryResult.errors"   :key="e" class="mint-error">✗ {{ e }}</div>
            <pre class="meta-json">{{ celoDryResult.metadataJson.slice(0, 800) }}{{ celoDryResult.metadataJson.length > 800 ? '\n…' : '' }}</pre>
          </div>

          <div class="wallet-status q-mb-sm" v-if="walletAddress">
            <q-icon name="account_balance_wallet" size="12px" color="green-5" class="q-mr-xs" />
            {{ walletAddress.slice(0, 6) }}…{{ walletAddress.slice(-4) }} connected
          </div>

          <div class="row q-gutter-xs">
            <q-btn unelevated color="green-8" icon="mdi-eye" label="Dry Run" @click="celoDryRun" :loading="celoLoading" class="col" />
            <q-btn outline color="green-6" icon="mdi-send" label="Mint on Alfajores" @click="celoExecute"
              :disable="!celoCanMint" :loading="celoLoading" class="col" />
          </div>
          <div v-if="celoResult" class="mint-result q-mt-sm" :class="celoResult.success ? 'mint-result--ok' : 'mint-result--fail'">
            <template v-if="celoResult.success">
              ✓ Minted — <a :href="celoResult.explorerUrl" target="_blank" rel="noopener">View on Celoscan</a>
            </template>
            <template v-else>✗ {{ celoResult.error }}</template>
          </div>
        </div>
      </q-tab-panel>

    </q-tab-panels>

    </div><!-- /mint-forms -->

  </q-page>
</template>

<script setup lang="ts">
/**
 * MintPage.vue — NFT minting interface
 *
 * SECURITY: Strict fee isolation enforced throughout.
 *   - Community return (80% Resonance Split) is computed from its own variable.
 *   - Platform draw (5%) and Hardware Fund (15%) are computed independently.
 *   - Network gas costs are informational only — displayed in a separate UI block
 *     and never combined with community values in any expression.
 *   - Dry-run mode is always offered before any wallet interaction.
 *
 * TODO (next sprint):
 *   - Bind exolocation tab to buildARC3() in src/lib/algorand/exolocation-metadata.js
 *   - Bind station tab to mintStation() in src/lib/solana/mint-station.ts
 *   - Connect wallet store (useWalletStore) for address resolution
 *   - Add IPFS upload step (Pinata) before on-chain mint
 */

import { ref, computed } from 'vue'
import CollectorCard         from 'src/components/CollectorCard.vue'
import {
  COLLECTOR_CARDS, RARITY_CONFIG,
} from 'src/data/collector-cards'
import { POLYGON_AMOY, CELO_ALFAJORES, TESTNET_CONTRACTS } from 'src/lib/evm/chains'
import {
  buildBarsMeta, buildWqCertMeta, buildCommunityBadgeMeta, buildEcoOpsTokenMeta,
} from 'src/lib/evm/erc721-metadata'
import {
  dryRunMint, executeMint, requestAccount, hasInjectedWallet,
  type DryRunResult, type MintResult,
} from 'src/lib/evm/mint-evm'

const tab           = ref('exolocation')
const walletAddress = ref<string | null>(null)
const formsAnchor   = ref<HTMLElement | null>(null)

function scrollToForms() {
  formsAnchor.value?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// ── Hero card fan ─────────────────────────────────────────────────────────────

const fanCards = [
  COLLECTOR_CARDS[0]!,   // #1 Blue Supergiant  — Legendary
  COLLECTOR_CARDS[6]!,   // #7 Nebula           — Rare
  COLLECTOR_CARDS[1]!,   // #2 Wormhole Conduit — Legendary (centre)
  COLLECTOR_CARDS[3]!,   // #4 Habitable World  — Rare
  COLLECTOR_CARDS[2]!,   // #3 Cosmic Web       — Legendary
]

const FAN_ANGLES = [-22, -9, 0, 9, 22]
const FAN_YOFFS  = [28, 12, 0, 12, 28]
const FAN_Z      = [2, 3, 5, 3, 2]
const FAN_DELAY  = [0.6, 0.3, 0.0, 0.3, 0.6]

function fanStyle(i: number): Record<string, string> {
  return {
    transform:      `rotate(${FAN_ANGLES[i]}deg) translateY(${FAN_YOFFS[i]}px)`,
    zIndex:         String(FAN_Z[i]),
    animationDelay: FAN_DELAY[i] + 's',
  }
}

function fanCardWidth(i: number): number {
  return i === 2 ? 198 : (i === 1 || i === 3) ? 172 : 152
}

const RARITY_SUMMARY = [
  { label: 'Legendary', count: 3, color: '#ffd700' },
  { label: 'Rare',      count: 4, color: '#4488ff' },
  { label: 'Uncommon',  count: 3, color: '#22cc66' },
  { label: 'Common',    count: 1, color: '#667788' },
]

const heroStars = Array.from({ length: 40 }, (_, i) => {
  const rng = (n: number) => ((Math.sin(n * 127.1 + 17) * 43758.5) % 1 + 1) / 2
  return { id: i, x: rng(i*4)*100, y: rng(i*4+1)*100, r: 0.8+rng(i*4+2)*1.4, o: 0.15+rng(i*4+3)*0.45, d: rng(i)*4 }
})

// Connect wallet helper — called by either Polygon or Celo flows
async function ensureWallet(): Promise<string | null> {
  if (!hasInjectedWallet()) return null
  try {
    const addr = await requestAccount()
    walletAddress.value = addr
    return addr
  } catch {
    return null
  }
}

// ── Option catalogs ───────────────────────────────────────────────────────────

// Trophic hierarchy — ordered L1 (stellar) → L6 (liminal)
const COORD_SYSTEMS = [
  // ── Existing (L1–L3) ───────────────────────────────────────────────────
  { label: 'L1 · Stellar orbital zone',                         value: 'exo-stellar-orbital-v1'  },
  { label: 'L2 · Planet surface (lat/long polygon)',            value: 'exo-surface-v1'           },
  { label: 'L2 · Planet orbital altitude band',                 value: 'exo-orbital-v1'           },
  { label: 'L3 · Moon orbit (altitude above moon)',             value: 'exo-lunar-orbital-v1'     },
  // ── Moon-relative trophic levels (L4–L6) ──────────────────────────────
  { label: 'L4 · Moon surface  (SUBLUNARY)',                    value: 'exo-moon-surface-v1'      },
  { label: 'L5 · Moon–Planet Lagrange  (SYZYGY)  L1/L2/L4/L5', value: 'exo-moon-lagrange-v1'    },
  { label: 'L6 · Moon–Planet interface  (LIMINAL)',             value: 'exo-moon-interface-v1'   },
]

const MOON_LAGRANGE_OPTS = [
  { label: 'L4 — Leading Trojan (stable, permanent settlement)', value: 'L4' },
  { label: 'L5 — Trailing Trojan (stable, permanent settlement)', value: 'L5' },
  { label: 'L1 — Inner Gateway (unstable, requires station-keeping)', value: 'L1' },
  { label: 'L2 — Outer Observatory (unstable, requires station-keeping)', value: 'L2' },
]

const MOON_INTERFACE_OPTS = [
  { label: 'Hill Sphere Boundary — gravitational dominance transition', value: 'hill-sphere' },
  { label: 'Roche Limit Zone — tidal disruption inner boundary',        value: 'roche-limit' },
  { label: 'Tidal Lock Transition — synchronous rotation boundary',     value: 'tidal-lock-zone' },
  { label: 'Magnetosphere Interface — magnetic field boundary',         value: 'magnetosphere' },
  { label: 'Orbital Resonance Zone — mean motion resonance',            value: 'resonance-zone' },
]

const STATION_CATEGORIES = [
  { label: 'Gallery',           value: 'gallery'    },
  { label: 'WATSAN node',       value: 'watsan'     },
  { label: 'Energy node',       value: 'energy'     },
  { label: 'Healthcare post',   value: 'healthcare' },
  { label: 'Food production',   value: 'food'       },
  { label: 'Command module',    value: 'command'    },
]

const MODULE_TYPES = [
  { label: 'Gallery module',    value: 'gallery'    },
  { label: 'WATSAN module',     value: 'watsan'     },
  { label: 'Energy module',     value: 'energy'     },
  { label: 'Shelter module',    value: 'shelter'    },
  { label: 'Healthcare module', value: 'healthcare' },
  { label: 'Food module',       value: 'food'       },
]

const ECOCITY_CATEGORIES = [
  { label: 'WATSAN',     value: 'watsan'     },
  { label: 'ENERGY',     value: 'energy'     },
  { label: 'SHELTER',    value: 'shelter'    },
  { label: 'HEALTHCARE', value: 'healthcare' },
  { label: 'FOOD',       value: 'food'       },
]

// ── Form state ────────────────────────────────────────────────────────────────

const exo = ref({
  coordSystem:   'exo-surface-v1',
  refBody:       '',
  regionName:    '',
  boundary:      '',
  // Moon-specific fields (used when coordSystem is exo-moon-*)
  moonIndex:     1,         // moon ordinal (I=1, II=2, …)
  moonName:      '',        // auto-built from refBody + moonIndex
  lagrangePoint: 'L4',     // for exo-moon-lagrange-v1
  interfaceZone: 'hill-sphere',  // for exo-moon-interface-v1
  tidallyLocked: null as boolean | null,
})

// Derived: is the selected coordinate system a moon-relative one?
const isMoonCoord = computed(() =>
  ['exo-moon-surface-v1', 'exo-moon-lagrange-v1', 'exo-moon-interface-v1',
   'exo-lunar-orbital-v1'].includes(exo.value.coordSystem)
)
const isMoonSurface  = computed(() => exo.value.coordSystem === 'exo-moon-surface-v1')
const isMoonLagrange = computed(() => exo.value.coordSystem === 'exo-moon-lagrange-v1')
const isMoonInterface = computed(() => exo.value.coordSystem === 'exo-moon-interface-v1')

const station = ref({
  name:            '',
  category:        'gallery',
  exolocationRef:  '',
})

const module_ = ref({
  type:       'gallery',
  stationRef: '',
})

const solution = ref({
  category:         'watsan',
  impactMetric:     '',
  recipientAddress: '',
})

// ── Fee isolation — each value has its own independent variable path ──────────
// NEVER combine community yield and network fee in a single expression.
//
// CURRENT MODEL: initial mint is FREE (utility-first, network growth phase).
// Platform maintenance draw of 5% applies to AFTERMARKET / SECONDARY SALES only.
// The KES 33 reference figure is 5% of a 5 USDC benchmark aftermarket transaction.
// This value is displayed as a reference; it is never deducted from any mint cost.

const AFTERMARKET_BENCH_USDC = 5.00    // benchmark aftermarket transaction value
const USD_TO_KES             = 130     // display only; real rate fetched from API

// Initial mint cost — FREE
const mintCostUSD = '0.00'
const mintCostKES = '0'

// Aftermarket platform draw (5%) — reference only, computed from its own path
const platformDrawUSD = computed(() => (AFTERMARKET_BENCH_USDC * 0.05).toFixed(2))
const platformDrawKES = computed(() => Math.round(AFTERMARKET_BENCH_USDC * 0.05 * USD_TO_KES).toString())

// ── Validation ────────────────────────────────────────────────────────────────

const exoFormValid     = computed(() => exo.value.refBody.trim().length > 0 && exo.value.regionName.trim().length >= 2)
const stationFormValid = computed(() => station.value.name.trim().length > 0 && station.value.exolocationRef.startsWith('exo-'))
const moduleFormValid  = computed(() => module_.value.stationRef.trim().length > 0)
const solutionFormValid = computed(() => solution.value.impactMetric.trim().length > 0 && solution.value.recipientAddress.trim().length > 10)

// ── Actions ───────────────────────────────────────────────────────────────────

function dryRun(type: string) {
  console.info(`[MINT DRY RUN] type=${type} — no on-chain transaction dispatched`)
}

function executeMintLegacy(type: string) {
  console.info(`[MINT EXECUTE] type=${type} — dispatching to wallet driver`)
}

// ── Polygon / MATIC state ─────────────────────────────────────────────────────

const POLY_TYPES = [
  { label: '$BARS Sound NFT',        value: 'bars'    },
  { label: 'Water Quality Cert',     value: 'wq_cert' },
]
const BARS_LICENSES = [
  { label: 'Personal use',     value: 'personal_use' },
  { label: 'Commercial',       value: 'commercial'   },
  { label: 'Sync licensing',   value: 'sync'         },
  { label: 'Exclusive rights', value: 'exclusive'    },
]

const polyType    = ref<'bars' | 'wq_cert'>('bars')
const polyLoading = ref(false)
const polyDryResult = ref<DryRunResult | null>(null)
const polyResult    = ref<MintResult | null>(null)
const polyGasEstimate = ref('connect wallet to estimate')

const bars = ref({
  title: '', artist: '', duration_sec: 0, bpm: null as number | null,
  key: null as string | null, license: 'personal_use' as const,
  ipfs_audio_cid: '', description: '',
})

const wqCert = ref({
  cert_id: '', location_name: '', measured_by: '',
  ph: null as number | null, turbidity_ntu: null as number | null,
  nitrate_mg_l: null as number | null, potable: false, date_utc: new Date().toISOString().split('T')[0]!,
})

const polyCanMint = computed(() =>
  polyDryResult.value?.valid && !TESTNET_CONTRACTS.amoy.barsNft?.startsWith('PLACE')
)

async function polyDryRun() {
  polyLoading.value = true
  polyResult.value  = null
  try {
    const meta = polyType.value === 'bars'
      ? buildBarsMeta({ ...bars.value, license: bars.value.license as any })
      : buildWqCertMeta(wqCert.value)
    const addr = walletAddress.value ?? await ensureWallet() ?? undefined
    const contract = polyType.value === 'bars'
      ? TESTNET_CONTRACTS.amoy.barsNft!
      : TESTNET_CONTRACTS.amoy.wqCertNft!
    polyDryResult.value = await dryRunMint(meta, POLYGON_AMOY, contract, addr ?? undefined)
    if (polyDryResult.value.estimatedGasEth) {
      polyGasEstimate.value = polyDryResult.value.estimatedGasEth
    }
  } finally {
    polyLoading.value = false
  }
}

async function polyExecute() {
  polyLoading.value = true
  try {
    const addr = walletAddress.value ?? await ensureWallet()
    if (!addr) { polyResult.value = { success: false, error: 'No wallet connected' }; return }
    const meta     = polyType.value === 'bars'
      ? buildBarsMeta({ ...bars.value, license: bars.value.license as any })
      : buildWqCertMeta(wqCert.value)
    const contract = polyType.value === 'bars'
      ? TESTNET_CONTRACTS.amoy.barsNft!
      : TESTNET_CONTRACTS.amoy.wqCertNft!
    polyResult.value = await executeMint(meta, POLYGON_AMOY, contract, addr)
  } finally {
    polyLoading.value = false
  }
}

// ── Celo state ────────────────────────────────────────────────────────────────

const CELO_TYPES = [
  { label: 'Community Badge',         value: 'community_badge' },
  { label: 'Eco-ops Token',           value: 'eco_ops_token'   },
]
const ECO_OPS_TYPES = [
  { label: 'Water Quality',    value: 'wqMap'        },
  { label: 'Waste Mapping',    value: 'garbageMap'   },
  { label: 'Farm Practice',    value: 'farmMap'       },
  { label: 'Resource Product', value: 'productMap'   },
  { label: 'Transport',        value: 'transportMap' },
  { label: 'Storage',          value: 'storageMap'   },
  { label: 'Source',           value: 'sourceMap'    },
  { label: 'Cleaning',         value: 'cleaningMap'  },
]

const celoType    = ref<'community_badge' | 'eco_ops_token'>('community_badge')
const celoLoading = ref(false)
const celoDryResult = ref<DryRunResult | null>(null)
const celoResult    = ref<MintResult | null>(null)
const celoGasEstimate = ref('connect wallet to estimate')

const badge = ref({
  badge_id: `BADGE-${Date.now()}`, badge_name: '', community: '',
  recipient: '', awarded_for: '', tier: 'bronze' as 'bronze'|'silver'|'gold'|'platinum',
})

const ecoToken = ref({
  token_id: '', activity_type: 'wqMap' as any,
  participant: '', location_name: '', checkin_count: 0,
  milestone: '', group: null as string | null,
})

const celoCanMint = computed(() =>
  celoDryResult.value?.valid && !TESTNET_CONTRACTS.alfajores.communityBadge?.startsWith('PLACE')
)

async function celoDryRun() {
  celoLoading.value = true
  celoResult.value  = null
  try {
    const meta = celoType.value === 'community_badge'
      ? buildCommunityBadgeMeta(badge.value)
      : buildEcoOpsTokenMeta(ecoToken.value)
    const addr     = walletAddress.value ?? await ensureWallet() ?? undefined
    const contract = celoType.value === 'community_badge'
      ? TESTNET_CONTRACTS.alfajores.communityBadge!
      : TESTNET_CONTRACTS.alfajores.ecoOpsToken!
    celoDryResult.value = await dryRunMint(meta, CELO_ALFAJORES, contract, addr ?? undefined)
    if (celoDryResult.value.estimatedGasEth) celoGasEstimate.value = celoDryResult.value.estimatedGasEth
  } finally {
    celoLoading.value = false
  }
}

async function celoExecute() {
  celoLoading.value = true
  try {
    const addr = walletAddress.value ?? await ensureWallet()
    if (!addr) { celoResult.value = { success: false, error: 'No wallet connected' }; return }
    const meta     = celoType.value === 'community_badge'
      ? buildCommunityBadgeMeta(badge.value)
      : buildEcoOpsTokenMeta(ecoToken.value)
    const contract = celoType.value === 'community_badge'
      ? TESTNET_CONTRACTS.alfajores.communityBadge!
      : TESTNET_CONTRACTS.alfajores.ecoOpsToken!
    celoResult.value = await executeMint(meta, CELO_ALFAJORES, contract, addr)
  } finally {
    celoLoading.value = false
  }
}
</script>

<style scoped>
.mint-form {
  max-width: 540px;
}

.form-section-label {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 0.14em;
  color: rgba(0, 180, 220, 0.60);
  margin-bottom: 8px;
}

/* ── Fee isolation card ──────────────────────────────────────── */

.fee-isolation-card {
  background: rgba(0, 8, 22, 0.80);
  border: 1px solid rgba(0, 160, 220, 0.18);
  border-radius: 6px;
  padding: 10px 12px;
  font-family: 'Courier New', monospace;
  font-size: 9px;
}

.fee-block { padding: 4px 0; }

.fee-block--community {
  border-left: 3px solid rgba(0, 200, 240, 0.60);
  padding-left: 10px;
}

/* Free-to-mint indicator — green border, no cost */
.fee-block--free {
  border-left: 3px solid rgba(60, 220, 120, 0.70);
  padding-left: 10px;
  background: rgba(0, 60, 30, 0.12);
  border-radius: 0 3px 3px 0;
}

.fee-block--network {
  padding-left: 13px;
}

.fee-block-label {
  font-size: 7px;
  letter-spacing: 0.12em;
  color: rgba(80, 130, 160, 0.65);
  margin-bottom: 4px;
}

.fee-block-value {
  font-size: 15px;
  letter-spacing: 0.04em;
  margin-bottom: 3px;
}

.fee-block-note {
  font-size: 7px;
  color: rgba(80, 130, 160, 0.55);
  letter-spacing: 0.03em;
  line-height: 1.5;
}

.fee-note--warn {
  color: rgba(200, 140, 60, 0.65);
}

.fee-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
  color: rgba(100, 150, 180, 0.75);
  font-size: 9px;
}

/* ── Trophic level badge ─────────────────────────────────────────── */

.trophic-badge {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 0.08em;
  color: rgba(0, 200, 240, 0.70);
  padding: 3px 10px;
  border: 1px solid rgba(0, 160, 200, 0.28);
  border-radius: 3px;
  background: rgba(0, 40, 80, 0.25);
  display: inline-block;
}

/* ── Moon section ────────────────────────────────────────────────── */

.moon-section-label {
  font-family: 'Courier New', monospace;
  font-size: 7px;
  letter-spacing: 0.16em;
  color: rgba(180, 140, 255, 0.65);
  margin: 8px 0 5px;
  border-left: 2px solid rgba(160, 100, 255, 0.40);
  padding-left: 7px;
}

.lagrange-physics {
  margin-bottom: 8px;
}

.lagrange-stability {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 0.06em;
  padding: 3px 8px;
  border-radius: 3px;
}

.lagrange-stability.stable {
  color: rgba(60, 220, 120, 0.85);
  background: rgba(0, 80, 40, 0.30);
  border: 1px solid rgba(60, 200, 100, 0.35);
}

.lagrange-stability.unstable {
  color: rgba(255, 160, 40, 0.85);
  background: rgba(80, 40, 0, 0.30);
  border: 1px solid rgba(220, 140, 40, 0.35);
}

.validation-hint {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  color: rgba(200, 140, 60, 0.70);
  margin-top: 6px;
  letter-spacing: 0.04em;
}

/* ── Chain badge ──────────────────────────────────────────────── */

.chain-badge {
  display: inline-flex;
  align-items: center;
  font-family: 'Courier New', monospace;
  font-size: 8px;
  letter-spacing: 0.10em;
  padding: 3px 10px;
  border-radius: 3px;
  border: 1px solid;
  margin-bottom: 10px;
}

.chain-badge--polygon {
  border-color: rgba(130, 80, 255, 0.45);
  color: rgba(150, 100, 255, 0.85);
  background: rgba(100, 50, 200, 0.08);
}

.chain-badge--celo {
  border-color: rgba(60, 200, 100, 0.45);
  color: rgba(80, 210, 120, 0.85);
  background: rgba(40, 160, 80, 0.08);
}

/* ── Metadata preview ─────────────────────────────────────────── */

.metadata-preview {
  background: rgba(0, 6, 18, 0.80);
  border: 1px solid rgba(0, 100, 140, 0.25);
  border-radius: 4px;
  padding: 8px 10px;
}

.meta-json {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  color: rgba(120, 190, 220, 0.80);
  white-space: pre-wrap;
  word-break: break-all;
  max-height: 200px;
  overflow-y: auto;
  margin: 6px 0;
  scrollbar-width: thin;
}

.meta-bytes {
  font-family: 'Courier New', monospace;
  font-size: 7px;
  color: rgba(70, 120, 150, 0.60);
  letter-spacing: 0.06em;
}

/* ── Wallet status + result ───────────────────────────────────── */

.wallet-status {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  color: rgba(0, 200, 240, 0.65);
  letter-spacing: 0.06em;
}

.mint-error {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  color: rgba(255, 80, 60, 0.90);
  margin-bottom: 2px;
}

.mint-result {
  font-family: 'Courier New', monospace;
  font-size: 9px;
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid;
}
.mint-result--ok   { border-color: rgba(60, 220, 100, 0.45); color: rgba(60, 220, 100, 0.85); }
.mint-result--fail { border-color: rgba(255, 80, 60, 0.45);  color: rgba(255, 80, 60, 0.85); }
.mint-result a { color: inherit; }

.vp-warning {
  font-family: 'Courier New', monospace;
  font-size: 8px;
  color: rgba(255, 150, 40, 0.85);
  padding: 2px 6px;
  border-left: 2px solid rgba(255, 150, 40, 0.45);
  margin: 2px 0;
}

/* ══════════════════════════════════════════════════════════════
   MINT PAGE — hero + layout
   ══════════════════════════════════════════════════════════════ */

.mint-page {
  background: #000408;
  min-height: 100vh;
  font-family: 'Courier New', monospace;
}

/* ── Hero ────────────────────────────────────────────────────── */

.mint-hero {
  position: relative;
  min-height: 560px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  padding: 60px 40px 50px;
  overflow: hidden;
  background: radial-gradient(ellipse 80% 100% at 60% 50%, rgba(0,40,80,0.35) 0%, transparent 70%);
  border-bottom: 1px solid rgba(0, 120, 180, 0.18);
}

/* ── Star field ──────────────────────────────────────────────── */

.hero-stars { position: absolute; inset: 0; pointer-events: none; }

.hero-star {
  position: absolute;
  border-radius: 50%;
  background: #ffffff;
  animation: star-twinkle 4s ease-in-out infinite alternate;
}

@keyframes star-twinkle {
  from { opacity: var(--star-opacity, 0.3); }
  to   { opacity: calc(var(--star-opacity, 0.3) * 0.35); }
}

/* ── Copy ────────────────────────────────────────────────────── */

.hero-copy {
  flex: 0 0 420px;
  max-width: 420px;
  position: relative;
  z-index: 2;
}

.hero-edition {
  display: flex;
  align-items: center;
  gap: 7px;
  font-size: 8px;
  letter-spacing: 0.18em;
  color: rgba(255, 215, 0, 0.65);
  margin-bottom: 14px;
}

.edition-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: #ffd700;
  box-shadow: 0 0 8px rgba(255,215,0,0.55);
  animation: edition-pulse 2.5s ease-in-out infinite;
}

@keyframes edition-pulse {
  0%, 100% { opacity: 1; box-shadow: 0 0 8px rgba(255,215,0,0.55); }
  50%       { opacity: 0.6; box-shadow: 0 0 3px rgba(255,215,0,0.25); }
}

.hero-heading {
  font-family: 'Courier New', monospace;
  font-size: clamp(26px, 3.5vw, 36px);
  font-weight: 400;
  line-height: 1.25;
  color: rgba(200, 230, 255, 0.92);
  letter-spacing: 0.02em;
  margin: 0 0 14px;
}

.hero-heading-accent {
  color: #00e5ff;
  display: inline-block;
}

.hero-desc {
  font-size: 10px;
  color: rgba(120, 170, 200, 0.72);
  line-height: 1.70;
  margin-bottom: 16px;
  max-width: 380px;
}

.hero-rarities {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 4px;
}

.rarity-pill {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 8px;
  letter-spacing: 0.10em;
  padding: 3px 9px;
  border: 1px solid;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.40);
}

.rarity-pip {
  width: 6px; height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

.hero-meta {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.free-badge {
  font-size: 8px;
  letter-spacing: 0.14em;
  padding: 3px 10px;
  border-radius: 3px;
  background: rgba(0, 80, 40, 0.45);
  border: 1px solid rgba(34, 204, 102, 0.45);
  color: rgba(34, 220, 120, 0.90);
}

.chain-list {
  font-size: 7px;
  letter-spacing: 0.12em;
  color: rgba(80, 130, 160, 0.60);
}

.hero-ctas { display: flex; align-items: center; }

/* ── Card fan ────────────────────────────────────────────────── */

.hero-fan {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex: 0 0 auto;
  position: relative;
  height: 300px;
  margin-right: 20px;
  /* Overlap cards with negative margins */
  gap: -28px;
  padding-bottom: 16px;
  cursor: pointer;
}

.fan-slot {
  position: relative;
  flex-shrink: 0;
  transform-origin: bottom center;
  transition: transform 0.25s ease, filter 0.25s ease;
  animation: fan-float 4.5s ease-in-out infinite alternate;
}

.fan-slot:hover {
  transform: rotate(0deg) translateY(-20px) scale(1.06) !important;
  filter: drop-shadow(0 16px 32px rgba(0, 200, 240, 0.35));
  z-index: 10 !important;
}

@keyframes fan-float {
  from { margin-bottom: 0px; }
  to   { margin-bottom: 8px; }
}

/* ── Ticker ──────────────────────────────────────────────────── */

.edition-ticker {
  background: rgba(0, 6, 18, 0.90);
  border-top: 1px solid rgba(0, 100, 140, 0.25);
  border-bottom: 1px solid rgba(0, 100, 140, 0.25);
  padding: 6px 0;
  overflow: hidden;
  white-space: nowrap;
}

.ticker-inner {
  display: inline-block;
  animation: ticker-scroll 28s linear infinite;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.ticker-item {
  display: inline;
  font-size: 8px;
  letter-spacing: 0.10em;
  color: rgba(80, 130, 160, 0.55);
  margin-right: 12px;
}

.ticker-num {
  color: rgba(0, 180, 220, 0.50);
  margin-right: 5px;
}

.ticker-sep {
  margin: 0 8px;
  opacity: 0.30;
}

/* ── Forms section ───────────────────────────────────────────── */

.mint-forms {
  background: #000408;
  border-top: 1px solid rgba(0, 80, 120, 0.22);
  scroll-margin-top: 54px;  /* below fixed header */
}

/* ── Responsive ──────────────────────────────────────────────── */

@media (max-width: 900px) {
  .mint-hero {
    flex-direction: column;
    padding: 36px 20px 40px;
    min-height: auto;
  }
  .hero-copy   { flex: 0 0 auto; max-width: 100%; }
  .hero-fan    { height: 240px; }
}
</style>
