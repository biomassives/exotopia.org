<template>
  <!-- Playing-card format SVG collector's item — 280×392 px viewport -->
  <svg
    :width="width"
    :height="height"
    :viewBox="`0 0 280 392`"
    xmlns="http://www.w3.org/2000/svg"
    class="collector-card"
    :class="`card-rarity--${card.rarity}`"
    role="img"
    :aria-label="`${card.name} — ${card.rarity}`"
  >
    <defs>
      <!-- Card background gradient -->
      <linearGradient :id="`bg-${card.id}`" x1="0" y1="0" x2="0.4" y2="1">
        <stop offset="0%"   :stop-color="card.bgFrom" />
        <stop offset="100%" :stop-color="card.bgTo" />
      </linearGradient>

      <!-- Rarity border glow filter -->
      <filter :id="`glow-${card.id}`" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- Soft inner glow for artwork -->
      <filter :id="`soft-${card.id}`" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <!-- Shimmer highlight gradient -->
      <linearGradient :id="`shimmer-${card.id}`" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%"   stop-color="rgba(255,255,255,0.10)" />
        <stop offset="45%"  stop-color="rgba(255,255,255,0.04)" />
        <stop offset="55%"  stop-color="rgba(255,255,255,0.10)" />
        <stop offset="100%" stop-color="rgba(255,255,255,0.02)" />
      </linearGradient>

      <!-- Art background gradient (radial) -->
      <radialGradient :id="`art-bg-${card.id}`" cx="50%" cy="50%" r="60%">
        <stop offset="0%"   :stop-color="card.artColors[0]" stop-opacity="0.25" />
        <stop offset="100%" :stop-color="card.bgFrom" stop-opacity="0" />
      </radialGradient>

      <clipPath :id="`card-clip-${card.id}`">
        <rect x="0" y="0" width="280" height="392" rx="14" />
      </clipPath>
    </defs>

    <!-- Card body -->
    <rect x="0" y="0" width="280" height="392" rx="14"
      :fill="`url(#bg-${card.id})`" />

    <!-- Rarity outer glow border -->
    <rect x="2" y="2" width="276" height="388" rx="13"
      fill="none" :stroke="card.borderColor" stroke-width="1.8"
      :filter="`url(#glow-${card.id})`"
      opacity="0.75" />

    <!-- Inner border -->
    <rect x="6" y="6" width="268" height="380" rx="11"
      fill="none" :stroke="card.borderColor" stroke-width="0.6" opacity="0.30" />

    <!-- Shimmer overlay -->
    <rect x="0" y="0" width="280" height="392" rx="14"
      :fill="`url(#shimmer-${card.id})`" />

    <!-- ── HEADER ─────────────────────────────────────────────────────────── -->
    <g clip-path="none">
      <!-- Header background -->
      <rect x="6" y="6" width="268" height="36" rx="8"
        fill="rgba(0,0,0,0.50)" />

      <!-- Series name -->
      <text x="14" y="20"
        font-family="'Courier New', monospace" font-size="7"
        letter-spacing="0.18em" fill="rgba(255,255,255,0.45)" text-anchor="start">
        EXOTOPIA
      </text>
      <text x="14" y="30"
        font-family="'Courier New', monospace" font-size="6"
        letter-spacing="0.14em" fill="rgba(255,255,255,0.30)" text-anchor="start">
        EXTRAPOLATION EDITION
      </text>

      <!-- Card number top-right -->
      <text x="266" y="22"
        font-family="'Courier New', monospace" font-size="8"
        letter-spacing="0.05em"
        :fill="card.borderColor" text-anchor="end" opacity="0.90">
        #{{ String(card.edition).padStart(2, '0') }}/{{ String(card.maxEdition).padStart(2,'0') }}
      </text>

      <!-- Rarity indicator -->
      <circle cx="253" cy="33" r="3.5" :fill="card.borderColor" opacity="0.80" />
      <text x="248" y="36.5"
        font-family="'Courier New', monospace" font-size="5.5"
        letter-spacing="0.10em" :fill="card.borderColor" text-anchor="end" opacity="0.75">
        {{ RARITY_CONFIG[card.rarity].label }}
      </text>
    </g>

    <!-- ── ARTWORK PANEL ──────────────────────────────────────────────────── -->
    <g :clip-path="`url(#card-clip-${card.id})`">
      <!-- Art area background -->
      <rect x="10" y="46" width="260" height="210" rx="6"
        fill="rgba(0,0,0,0.45)" />
      <rect x="10" y="46" width="260" height="210" rx="6"
        :fill="`url(#art-bg-${card.id})`" />

      <!-- ── UNIQUE ARTWORK per card.id ────────────────────────────────────── -->

      <!-- 1: Blue Supergiant — radial star with corona spikes -->
      <g v-if="card.id === 1" :transform="`translate(140, 151)`">
        <circle cx="0" cy="0" r="55" :fill="card.artColors[2]" opacity="0.15" :filter="`url(#soft-${card.id})`" />
        <circle cx="0" cy="0" r="32" :fill="card.artColors[1]" opacity="0.35" />
        <circle cx="0" cy="0" r="18" :fill="card.artColors[0]" opacity="0.85" />
        <circle cx="0" cy="0" r="9"  fill="#ffffff" opacity="0.95" />
        <!-- 8 spikes -->
        <g v-for="i in 8" :key="i" :transform="`rotate(${i * 45})`">
          <line x1="0" y1="-22" x2="0" y2="-75"
            :stroke="card.artColors[0]" stroke-width="1.5" stroke-linecap="round" opacity="0.50" />
          <line x1="0" y1="-22" x2="0" y2="-52"
            :stroke="card.artColors[4]" stroke-width="0.8" stroke-linecap="round" opacity="0.90" />
        </g>
        <!-- Outer glow ring -->
        <circle cx="0" cy="0" r="70" fill="none" :stroke="card.artColors[1]" stroke-width="0.5" opacity="0.30" />
        <circle cx="0" cy="0" r="90" fill="none" :stroke="card.artColors[2]" stroke-width="0.3" opacity="0.15" />
      </g>

      <!-- 2: Wormhole Conduit — E8 octagon + spiral -->
      <g v-else-if="card.id === 2" :transform="`translate(140, 151)`">
        <!-- Outer rings -->
        <circle cx="0" cy="0" r="90" fill="none" :stroke="card.artColors[2]" stroke-width="0.4" opacity="0.20" />
        <circle cx="0" cy="0" r="68" fill="none" :stroke="card.artColors[0]" stroke-width="0.6" opacity="0.25" />
        <!-- E8 octagon (8 nodes at equal angles) -->
        <g v-for="i in 8" :key="i">
          <circle :cx="Math.cos(i * Math.PI/4) * 55" :cy="Math.sin(i * Math.PI/4) * 55" r="5"
            :fill="card.artColors[0]" opacity="0.85" />
          <!-- Connect to adjacent nodes -->
          <line
            :x1="Math.cos(i * Math.PI/4) * 55" :y1="Math.sin(i * Math.PI/4) * 55"
            :x2="Math.cos((i+1) * Math.PI/4) * 55" :y2="Math.sin((i+1) * Math.PI/4) * 55"
            :stroke="card.artColors[2]" stroke-width="0.8" opacity="0.55" />
          <!-- Connect to centre -->
          <line x1="0" y1="0"
            :x2="Math.cos(i * Math.PI/4) * 55" :y2="Math.sin(i * Math.PI/4) * 55"
            :stroke="card.artColors[0]" stroke-width="0.4" opacity="0.30" />
        </g>
        <!-- Central portal -->
        <circle cx="0" cy="0" r="20" :fill="card.artColors[4]" opacity="0.50" :filter="`url(#soft-${card.id})`" />
        <circle cx="0" cy="0" r="12" :fill="card.artColors[2]" opacity="0.70" />
        <circle cx="0" cy="0" r="5"  fill="#ffffff" opacity="0.90" />
        <!-- Spiral -->
        <path :d="spiralPath(30, 3)" :stroke="card.artColors[0]" stroke-width="0.8" fill="none" opacity="0.40" />
      </g>

      <!-- 3: Cosmic Web — filament network -->
      <g v-else-if="card.id === 3">
        <g v-for="(node, i) in webNodes" :key="i">
          <circle :cx="node.x" :cy="node.y" :r="node.r"
            :fill="card.artColors[i % 3]" :opacity="node.r > 5 ? 0.75 : 0.45" />
        </g>
        <g v-for="(edge, i) in webEdges" :key="i">
          <line :x1="edge.x1" :y1="edge.y1" :x2="edge.x2" :y2="edge.y2"
            :stroke="card.artColors[0]" stroke-width="0.5" opacity="0.22" />
        </g>
        <!-- Milky Way marker -->
        <circle cx="140" cy="151" r="7" :fill="card.artColors[3]" opacity="0.90" />
        <circle cx="140" cy="151" r="14" fill="none" :stroke="card.artColors[3]" stroke-width="0.6" opacity="0.45" />
      </g>

      <!-- 4: Habitable World — planet with HZ ring -->
      <g v-else-if="card.id === 4" :transform="`translate(140, 151)`">
        <!-- HZ band -->
        <circle cx="0" cy="0" r="88" fill="none" :stroke="card.artColors[0]" stroke-width="6" opacity="0.10" stroke-dasharray="3,3" />
        <!-- Planet -->
        <circle cx="0" cy="0" r="42" :fill="card.artColors[1]" opacity="0.90" />
        <!-- Landmass shapes -->
        <ellipse cx="-8" cy="-15" rx="14" ry="10" :fill="card.artColors[2]" opacity="0.75" transform="rotate(-25)" />
        <ellipse cx="12" cy="8"  rx="10" ry="7"  :fill="card.artColors[2]" opacity="0.70" transform="rotate(15)" />
        <ellipse cx="-5" cy="18" rx="8"  ry="5"  :fill="card.artColors[2]" opacity="0.60" />
        <!-- Atmosphere glow -->
        <circle cx="0" cy="0" r="46" fill="none" :stroke="card.artColors[3]" stroke-width="4" opacity="0.20" :filter="`url(#soft-${card.id})`" />
        <!-- Host star -->
        <circle cx="80" cy="-70" r="12" fill="#fff4ea" opacity="0.85" />
        <circle cx="80" cy="-70" r="20" fill="#fff4ea" opacity="0.15" :filter="`url(#soft-${card.id})`" />
        <!-- Orbital path -->
        <circle cx="0" cy="0" r="88" fill="none" :stroke="card.artColors[4]" stroke-width="0.4" opacity="0.20" stroke-dasharray="2,4" />
      </g>

      <!-- 5: Binary Dance — two stars spiral -->
      <g v-else-if="card.id === 5" :transform="`translate(140, 151)`">
        <!-- Orbital trail -->
        <ellipse cx="0" cy="0" rx="58" ry="28" fill="none"
          :stroke="card.artColors[0]" stroke-width="0.6" opacity="0.20" stroke-dasharray="3,5" transform="rotate(-20)" />
        <!-- Star A — larger, amber -->
        <circle cx="-38" cy="12" r="24" :fill="card.artColors[0]" opacity="0.80" />
        <circle cx="-38" cy="12" r="32" :fill="card.artColors[0]" opacity="0.12" :filter="`url(#soft-${card.id})`" />
        <circle cx="-38" cy="12" r="8"  fill="#ffffff" opacity="0.85" />
        <!-- Star B — smaller, cooler orange -->
        <circle cx="42" cy="-10" r="16" :fill="card.artColors[1]" opacity="0.80" />
        <circle cx="42" cy="-10" r="24" :fill="card.artColors[1]" opacity="0.14" :filter="`url(#soft-${card.id})`" />
        <circle cx="42" cy="-10" r="6"  fill="#ffffff" opacity="0.80" />
        <!-- Barycentre -->
        <circle cx="0" cy="0" r="2" fill="rgba(255,255,255,0.40)" />
      </g>

      <!-- 6: The Void — sparse, dark, ominous -->
      <g v-else-if="card.id === 6">
        <!-- Void darkness -->
        <rect x="10" y="46" width="260" height="210" rx="6" fill="#000000" opacity="0.60" />
        <!-- Edge particle scatter -->
        <g v-for="p in voidParticles" :key="p.x">
          <circle :cx="p.x" :cy="p.y" :r="p.r" :fill="card.artColors[2]" :opacity="p.o" />
        </g>
        <!-- Central void symbol -->
        <circle cx="140" cy="151" r="35" fill="none"
          :stroke="card.artColors[2]" stroke-width="0.4" opacity="0.20" stroke-dasharray="2,6" />
        <circle cx="140" cy="151" r="18" fill="none"
          :stroke="card.artColors[2]" stroke-width="0.3" opacity="0.15" />
        <text x="140" y="157" font-family="'Courier New', monospace" font-size="9"
          fill="rgba(80,60,120,0.50)" text-anchor="middle" letter-spacing="0.15em">
          ∅
        </text>
      </g>

      <!-- 7: The Nebula — colorful gas blobs -->
      <g v-else-if="card.id === 7" :clip-path="`url(#art-clip-${card.id})`">
        <defs>
          <clipPath :id="`art-clip-${card.id}`">
            <rect x="10" y="46" width="260" height="210" rx="6" />
          </clipPath>
        </defs>
        <ellipse cx="100" cy="130" rx="70" ry="55" :fill="card.artColors[0]" opacity="0.28" :filter="`url(#soft-${card.id})`" />
        <ellipse cx="175" cy="165" rx="65" ry="50" :fill="card.artColors[1]" opacity="0.24" :filter="`url(#soft-${card.id})`" />
        <ellipse cx="140" cy="145" rx="45" ry="38" :fill="card.artColors[2]" opacity="0.22" :filter="`url(#soft-${card.id})`" />
        <ellipse cx="115" cy="175" rx="40" ry="30" :fill="card.artColors[3]" opacity="0.20" :filter="`url(#soft-${card.id})`" />
        <!-- Embedded stars -->
        <circle v-for="s in nebulaStars" :key="s.x" :cx="s.x" :cy="s.y" :r="s.r" fill="#ffffff" :opacity="s.o" />
        <!-- Dense core -->
        <circle cx="140" cy="151" r="12" fill="#ffffff" opacity="0.15" :filter="`url(#soft-${card.id})`" />
      </g>

      <!-- 8: Red Dwarf Companion — small star, large dark planet -->
      <g v-else-if="card.id === 8" :transform="`translate(140, 151)`">
        <!-- Background glow -->
        <circle cx="0" cy="0" r="95" :fill="card.artColors[0]" opacity="0.06" :filter="`url(#soft-${card.id})`" />
        <!-- Dark planet silhouette (large) -->
        <circle cx="30" cy="20" r="58" fill="#050000" opacity="0.95" />
        <!-- Red dwarf star (small but bright) -->
        <circle cx="-52" cy="-38" r="22" :fill="card.artColors[0]" opacity="0.90" />
        <circle cx="-52" cy="-38" r="30" :fill="card.artColors[0]" opacity="0.22" :filter="`url(#soft-${card.id})`" />
        <circle cx="-52" cy="-38" r="9"  fill="#ffaa88" opacity="0.95" />
        <!-- Terminator glow on planet edge -->
        <circle cx="30" cy="20" r="60" fill="none"
          :stroke="card.artColors[2]" stroke-width="3" opacity="0.25"
          :filter="`url(#soft-${card.id})`" />
        <!-- Orbital ring hint -->
        <ellipse cx="0" cy="0" rx="85" ry="30" fill="none"
          :stroke="card.artColors[2]" stroke-width="0.4" opacity="0.15" transform="rotate(-15)" stroke-dasharray="2,5" />
      </g>

      <!-- 9: Settlement Pioneer — dome + stone circle -->
      <g v-else-if="card.id === 9" :transform="`translate(140, 170)`">
        <!-- Stars background -->
        <circle v-for="s in settlementStars" :key="s.x" :cx="s.x" :cy="s.y" :r="s.r" fill="#ffffff" :opacity="s.o" />
        <!-- Terrain -->
        <ellipse cx="0" cy="40" rx="110" ry="18" :fill="card.artColors[1]" opacity="0.18" />
        <!-- Stone circle (8 stones) -->
        <g v-for="i in 8" :key="i">
          <rect
            :x="Math.cos(i * Math.PI/4) * 55 - 3"
            :y="Math.sin(i * Math.PI/4) * 18 + 30 - 8"
            width="5" height="9" rx="1"
            :fill="card.artColors[3]" opacity="0.60" />
        </g>
        <!-- Dome -->
        <path d="M -50 35 A 50 50 0 0 1 50 35 Z" :fill="card.artColors[0]" opacity="0.20" />
        <path d="M -50 35 A 50 50 0 0 1 50 35" fill="none" :stroke="card.artColors[0]" stroke-width="1.5" opacity="0.70" />
        <!-- Dome base ring -->
        <ellipse cx="0" cy="35" rx="50" ry="6" fill="none" :stroke="card.artColors[0]" stroke-width="0.8" opacity="0.45" />
        <!-- Library beacon -->
        <rect x="-4" y="15" width="8" height="16" rx="1" :fill="card.artColors[2]" opacity="0.65" />
        <circle cx="0" cy="12" r="3" :fill="card.artColors[3]" opacity="0.85" />
        <!-- Dome glow -->
        <path d="M -50 35 A 50 50 0 0 1 50 35 Z" :fill="card.artColors[0]" opacity="0.05" :filter="`url(#soft-${card.id})`" />
      </g>

      <!-- 10: The Mule — knowledge web nodes -->
      <g v-else-if="card.id === 10" :transform="`translate(140, 151)`">
        <!-- Central mule entity -->
        <circle cx="0" cy="0" r="20" :fill="card.artColors[0]" opacity="0.85" :filter="`url(#soft-${card.id})`" />
        <circle cx="0" cy="0" r="12" :fill="card.artColors[1]" opacity="0.90" />
        <circle cx="0" cy="0" r="5"  fill="#ffffff" opacity="0.95" />
        <!-- Knowledge rays (corpus depth indicator) -->
        <g v-for="i in 12" :key="i" :transform="`rotate(${i * 30})`">
          <line x1="0" y1="-24" :x2="0" :y2="-35 - (i % 3) * 8"
            :stroke="card.artColors[0]" stroke-width="1.0" opacity="0.55" stroke-linecap="round" />
          <!-- Corpus nodes at tips -->
          <circle cx="0" :cy="-38 - (i % 3) * 8" r="2.5"
            :fill="card.artColors[i % 5 === 0 ? 1 : 0]" opacity="0.75" />
        </g>
        <!-- Outer orbit ring -->
        <circle cx="0" cy="0" r="65" fill="none"
          :stroke="card.artColors[2]" stroke-width="0.4" opacity="0.20" stroke-dasharray="2,4" />
        <!-- PON INK symbol -->
        <text x="0" y="5" font-family="'Courier New', monospace" font-size="6"
          fill="rgba(0,0,0,0.70)" text-anchor="middle">M</text>
      </g>

      <!-- 11: Water Quality — wave + data -->
      <g v-else-if="card.id === 11" :transform="`translate(140, 151)`">
        <!-- Water background -->
        <ellipse cx="0" cy="20" rx="95" ry="60" :fill="card.artColors[1]" opacity="0.18" :filter="`url(#soft-${card.id})`" />
        <!-- Wave paths -->
        <path d="M -100 -10 Q -65 -30 -25 -10 Q 15 10 55 -10 Q 90 -30 100 -10" fill="none"
          :stroke="card.artColors[0]" stroke-width="2.0" opacity="0.65" stroke-linecap="round" />
        <path d="M -100 8 Q -65 -12 -25 8 Q 15 28 55 8 Q 90 -12 100 8" fill="none"
          :stroke="card.artColors[2]" stroke-width="1.5" opacity="0.45" stroke-linecap="round" />
        <path d="M -100 26 Q -65 6 -25 26 Q 15 46 55 26 Q 90 6 100 26" fill="none"
          :stroke="card.artColors[0]" stroke-width="1.0" opacity="0.30" stroke-linecap="round" />
        <!-- Droplet -->
        <path d="M 0 -60 C -15 -35 -22 -20 -22 -8 A 22 22 0 0 0 22 -8 C 22 -20 15 -35 0 -60 Z"
          :fill="card.artColors[2]" opacity="0.70" />
        <circle cx="0" cy="-14" r="6" fill="#ffffff" opacity="0.25" />
        <!-- pH label -->
        <text x="-65" y="55" font-family="'Courier New', monospace" font-size="8"
          :fill="card.artColors[0]" opacity="0.70" letter-spacing="0.08em">pH 7.1</text>
        <text x="20" y="55" font-family="'Courier New', monospace" font-size="8"
          :fill="card.artColors[2]" opacity="0.65" letter-spacing="0.05em">✓ POTABLE</text>
      </g>

      <!-- ══ EDITION 2: Anti-AI Slop Drop (IDs 12–22) ═══════════════════════ -->

      <!-- 12: The Field Reading — data table grid with real measurements -->
      <g v-else-if="card.id === 12" :transform="`translate(140, 151)`">
        <!-- Grid background -->
        <rect x="-95" y="-80" width="190" height="160" rx="3" fill="rgba(0,0,0,0.40)" />
        <!-- Column headers -->
        <rect x="-95" y="-80" width="190" height="20" rx="3" :fill="card.artColors[0]" opacity="0.30" />
        <text x="-80" y="-66" font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[0]" opacity="0.90" letter-spacing="0.08em">PARAMETER</text>
        <text x="20"  y="-66" font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[0]" opacity="0.90" letter-spacing="0.06em">VALUE</text>
        <text x="78"  y="-66" font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[0]" opacity="0.90" letter-spacing="0.04em">STATUS</text>
        <!-- Data rows -->
        <g v-for="(row, i) in [
          ['pH',          '7.1',    '✓'],
          ['Turbidity',   '0.3 NTU','✓'],
          ['Conductivity','280 µS', '✓'],
          ['Nitrate',     '2.1 mg/L','✓'],
          ['Coliform',    '0 CFU',  '✓'],
          ['Temp (°C)',   '22.4',   '✓'],
        ]" :key="i">
          <rect x="-95" :y="-57 + i*20" width="190" height="19"
            :fill="i%2===0 ? 'rgba(0,80,40,0.12)' : 'rgba(0,0,0,0.05)'" />
          <text x="-82" :y="-43 + i*20" font-family="'Courier New', monospace" font-size="7.5" :fill="card.artColors[2]" opacity="0.80">{{ row[0] }}</text>
          <text x="20"  :y="-43 + i*20" font-family="'Courier New', monospace" font-size="7.5" fill="rgba(200,240,210,0.85)">{{ row[1] }}</text>
          <text x="78"  :y="-43 + i*20" font-family="'Courier New', monospace" font-size="9" :fill="card.artColors[0]" opacity="0.85">{{ row[2] }}</text>
        </g>
        <!-- GPS tag -->
        <text x="0" y="92" font-family="'Courier New', monospace" font-size="6" :fill="card.artColors[1]" opacity="0.60" text-anchor="middle" letter-spacing="0.06em">GPS: −2.2887°, 40.9162° · VERIFIED</text>
      </g>

      <!-- 13: The Living Verse — poetry on the page, recorded or written -->
      <g v-else-if="card.id === 13">
        <!-- Soft page background -->
        <rect x="22" y="52" width="235" height="205" rx="4"
          fill="rgba(30,10,40,0.45)" />

        <!-- Verse lines — varying indent and length, like real stanzas -->
        <!-- Stanza 1 -->
        <g v-for="(ln, i) in [
          { x: 35,  w: 155, indent: false },
          { x: 35,  w: 190, indent: false },
          { x: 55,  w: 140, indent: true  },
          { x: 35,  w: 170, indent: false },
        ]" :key="'s1-' + i">
          <rect :x="ln.x" :y="72 + i * 15" :width="ln.w" height="5" rx="2"
            :fill="ln.indent ? card.artColors[1] : card.artColors[0]"
            :opacity="ln.indent ? 0.45 : 0.62" />
        </g>

        <!-- Breath gap between stanzas — the pause that means something -->
        <line x1="35" y1="138" x2="90" y2="138"
          :stroke="card.artColors[1]" stroke-width="0.6" opacity="0.30" stroke-dasharray="2,4" />

        <!-- Stanza 2 -->
        <g v-for="(ln, i) in [
          { x: 35, w: 175, indent: false },
          { x: 35, w: 120, indent: false },
          { x: 55, w: 160, indent: true  },
          { x: 55, w: 145, indent: true  },
          { x: 35, w: 90,  indent: false },
        ]" :key="'s2-' + i">
          <rect :x="ln.x" :y="150 + i * 15" :width="ln.w" height="5" rx="2"
            :fill="ln.indent ? card.artColors[1] : card.artColors[0]"
            :opacity="ln.indent ? 0.42 : 0.58" />
        </g>

        <!-- Stanza 3 (shorter — trailing off) -->
        <g v-for="(ln, i) in [
          { x: 35, w: 160 },
          { x: 35, w: 70  },
        ]" :key="'s3-' + i">
          <rect :x="ln.x" :y="232 + i * 15" :width="ln.w" height="5" rx="2"
            :fill="card.artColors[0]" :opacity="0.35 - i * 0.10" />
        </g>

        <!-- Recording microphone — verse spoken aloud, not just written -->
        <g :transform="`translate(215, 210)`">
          <!-- Mic body -->
          <rect x="-7" y="-24" width="14" height="26" rx="7"
            fill="none" :stroke="card.artColors[0]" stroke-width="1.4" opacity="0.60" />
          <!-- Mic grille lines -->
          <line x1="-5" y1="-18" x2="5" y2="-18" :stroke="card.artColors[0]" stroke-width="0.7" opacity="0.40" />
          <line x1="-6" y1="-12" x2="6" y2="-12" :stroke="card.artColors[0]" stroke-width="0.7" opacity="0.40" />
          <line x1="-6" y1="-6"  x2="6" y2="-6"  :stroke="card.artColors[0]" stroke-width="0.7" opacity="0.40" />
          <!-- Stand -->
          <line x1="0" y1="2" x2="0" y2="12" :stroke="card.artColors[0]" stroke-width="1.2" opacity="0.50" />
          <line x1="-8" y1="12" x2="8" y2="12" :stroke="card.artColors[0]" stroke-width="1.2" opacity="0.50" stroke-linecap="round" />
          <!-- Soft glow -->
          <circle cx="0" cy="-11" r="14" :fill="card.artColors[1]" opacity="0.06"
            :filter="`url(#soft-${card.id})`" />
        </g>

        <!-- Caption -->
        <text x="140" y="244" font-family="'Courier New', monospace" font-size="6.5"
          :fill="card.artColors[1]" opacity="0.60" text-anchor="middle" letter-spacing="0.10em">
          HONOUR THE RHYME  ·  HONOUR THE VERSE
        </text>
      </g>

      <!-- 14: The Raw Take — audio waveform -->
      <g v-else-if="card.id === 14" :transform="`translate(140, 151)`">
        <!-- Timeline -->
        <line x1="-95" y1="0" x2="95" y2="0" stroke="rgba(255,255,255,0.15)" stroke-width="0.5" />
        <!-- Waveform bars — irregular heights simulate real recording -->
        <g v-for="(h, i) in [8,22,14,35,18,52,28,65,44,58,35,72,48,60,38,55,42,68,30,75,52,40,62,28,45,58,33,22,48,35,25,40,18,30,12,22,8,16,10,6]" :key="i">
          <rect
            :x="-90 + i*4.7" :y="-h/2"
            width="3.5" :height="h"
            :fill="card.artColors[0]"
            :opacity="h > 60 ? 0.85 : h > 40 ? 0.65 : 0.45"
            rx="1"
          />
        </g>
        <!-- Chair creak annotation -->
        <line x1="25" y1="-80" x2="25" y2="-38" :stroke="card.artColors[1]" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.50" />
        <text x="28" y="-82" font-family="'Courier New', monospace" font-size="6" :fill="card.artColors[1]" opacity="0.65" letter-spacing="0.06em">chair creak</text>
        <text x="28" y="-74" font-family="'Courier New', monospace" font-size="6" :fill="card.artColors[1]" opacity="0.50">2m 08s (real)</text>
        <!-- Duration -->
        <text x="0" y="70" font-family="'Courier New', monospace" font-size="8" :fill="card.artColors[2]" opacity="0.60" text-anchor="middle" letter-spacing="0.10em">3m 41s  ·  WAV 48kHz  ·  TAKE 1</text>
      </g>

      <!-- 15: Cipher Tongue — overlapping text blocks -->
      <g v-else-if="card.id === 15">
        <!-- Text blocks in multiple scripts/languages at different angles -->
        <text x="30"  y="110" font-family="'Courier New', monospace" font-size="12" :fill="card.artColors[0]" opacity="0.65" transform="rotate(-12, 30, 110)">Habari yako</text>
        <text x="80"  y="140" font-family="'Courier New', monospace" font-size="11" :fill="card.artColors[1]" opacity="0.55" transform="rotate(8, 80, 140)">wha gwaan</text>
        <text x="15"  y="165" font-family="'Courier New', monospace" font-size="10" :fill="card.artColors[2]" opacity="0.60" transform="rotate(-5, 15, 165)">niaje</text>
        <text x="100" y="120" font-family="'Courier New', monospace" font-size="9"  :fill="card.artColors[0]" opacity="0.45" transform="rotate(15, 100, 120)">sawa sawa</text>
        <text x="45"  y="185" font-family="'Courier New', monospace" font-size="13" :fill="card.artColors[1]" opacity="0.50" transform="rotate(-8, 45, 185)">irie</text>
        <text x="120" y="170" font-family="'Courier New', monospace" font-size="8"  :fill="card.artColors[2]" opacity="0.55" transform="rotate(20, 120, 170)">mambo vipi</text>
        <text x="60"  y="220" font-family="'Courier New', monospace" font-size="11" :fill="card.artColors[0]" opacity="0.45" transform="rotate(-15, 60, 220)">nini hali</text>
        <text x="30"  y="245" font-family="'Courier New', monospace" font-size="9"  :fill="card.artColors[1]" opacity="0.40" transform="rotate(5, 30, 245)">big up</text>
        <!-- Overlay scan effect -->
        <rect x="10" y="46" width="260" height="210" fill="none" :stroke="card.artColors[2]" stroke-width="0.3" opacity="0.15" rx="4" />
      </g>

      <!-- 16: Callus Print — fingerprint rings -->
      <g v-else-if="card.id === 16" :transform="`translate(140, 151)`">
        <!-- Fingerprint loop pattern — concentric irregular ovals -->
        <g v-for="(s, i) in [8,16,24,32,40,48,56,64,72,80,88]" :key="i">
          <ellipse cx="0" cy="0" :rx="s * 0.85" :ry="s"
            fill="none" :stroke="card.artColors[0]" stroke-width="1.2"
            :opacity="0.55 - i * 0.03"
            :transform="`rotate(${i * 3 - 15})`" />
        </g>
        <!-- Core whorl -->
        <ellipse cx="2" cy="-4" rx="5" ry="6" :fill="card.artColors[0]" opacity="0.80" />
        <!-- Ridge interruption (scar) -->
        <rect x="20" y="-30" width="18" height="2.5" :fill="card.bgFrom" opacity="1" transform="rotate(5, 20, -30)" />
        <!-- Label -->
        <text x="0" y="98" font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[1]" opacity="0.60" text-anchor="middle" letter-spacing="0.12em">RIGHT INDEX  ·  CALLUS RIDGE PRESENT</text>
      </g>

      <!-- 17: The Circle — people arranged in ring from above -->
      <g v-else-if="card.id === 17" :transform="`translate(140, 151)`">
        <!-- Ground shadow -->
        <circle cx="0" cy="0" r="75" :fill="card.artColors[1]" opacity="0.08" />
        <!-- People (circles) in a ring, 12 positions -->
        <g v-for="i in 12" :key="i">
          <!-- Person body -->
          <circle
            :cx="Math.cos((i-1) * Math.PI/6) * 62"
            :cy="Math.sin((i-1) * Math.PI/6) * 62"
            r="7"
            :fill="card.artColors[i % 3 === 0 ? 2 : i % 3 === 1 ? 0 : 1]"
            :opacity="0.72 + (i % 4) * 0.05"
          />
          <!-- Head -->
          <circle
            :cx="Math.cos((i-1) * Math.PI/6) * 62"
            :cy="Math.sin((i-1) * Math.PI/6) * 62 - 10"
            r="4"
            :fill="card.artColors[i % 3 === 0 ? 2 : i % 3 === 1 ? 0 : 1]"
            :opacity="0.60"
          />
        </g>
        <!-- Central open space marker -->
        <circle cx="0" cy="0" r="38" fill="none" :stroke="card.artColors[0]" stroke-width="0.5" opacity="0.18" stroke-dasharray="3,5" />
        <circle cx="0" cy="0" r="4" :fill="card.artColors[0]" opacity="0.30" />
        <!-- Lines connecting everyone to centre -->
        <g v-for="i in 12" :key="i" opacity="0.07">
          <line x1="0" y1="0"
            :x2="Math.cos((i-1) * Math.PI/6) * 55"
            :y2="Math.sin((i-1) * Math.PI/6) * 55"
            :stroke="card.artColors[0]" stroke-width="0.5" />
        </g>
      </g>

      <!-- 18: Compost Logic — decomposition spiral -->
      <g v-else-if="card.id === 18" :transform="`translate(140, 151)`">
        <!-- Background glow -->
        <circle cx="0" cy="0" r="90" :fill="card.artColors[0]" opacity="0.05" :filter="`url(#soft-${card.id})`" />
        <!-- Spiral path (Archimedean, 2 turns) -->
        <path :d="spiralPath(80, 2)" :stroke="card.artColors[1]" stroke-width="1.5" fill="none" opacity="0.50" />
        <!-- Organic blobs along the spiral -->
        <g v-for="(pt, i) in compostPoints" :key="i">
          <ellipse :cx="pt.x" :cy="pt.y"
            :rx="4 + i * 1.2" :ry="3 + i * 0.9"
            :fill="pt.color" :opacity="pt.o"
            :transform="`rotate(${i * 37}, ${pt.x}, ${pt.y})`"
          />
        </g>
        <!-- Cycle labels -->
        <text x="-30" y="-70" font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[2]" opacity="0.65">FOOD</text>
        <text x="55"  y="20"  font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[2]" opacity="0.65">SCRAPS</text>
        <text x="-80" y="30"  font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[0]" opacity="0.55">SOIL</text>
        <text x="-10" y="75"  font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[1]" opacity="0.60">COMPOST</text>
        <!-- Arrows -->
        <path d="M -25 -60 L -10 -48" :stroke="card.artColors[2]" stroke-width="1" fill="none" opacity="0.40" />
      </g>

      <!-- 19: Street Frequency — radio wave arcs -->
      <g v-else-if="card.id === 19" :transform="`translate(140, 151)`">
        <!-- Antenna mast -->
        <line x1="0" y1="60" x2="0" y2="-20" :stroke="card.artColors[0]" stroke-width="2" opacity="0.80" />
        <line x1="0" y1="-20" x2="-12" y2="-6" :stroke="card.artColors[0]" stroke-width="1.2" opacity="0.65" />
        <line x1="0" y1="-20" x2="12"  y2="-6" :stroke="card.artColors[0]" stroke-width="1.2" opacity="0.65" />
        <!-- Broadcast arcs -->
        <g v-for="(r, i) in [25, 45, 65, 85, 105]" :key="i">
          <path
            :d="`M ${-r * Math.cos(Math.PI*0.35)} ${-r * Math.sin(Math.PI*0.35)} A ${r} ${r} 0 0 1 ${r * Math.cos(Math.PI*0.35)} ${-r * Math.sin(Math.PI*0.35)}`"
            fill="none" :stroke="card.artColors[0]" :stroke-width="1.8 - i * 0.2"
            :opacity="0.65 - i * 0.10" />
        </g>
        <!-- Signal waves leftward (community direction) -->
        <g v-for="(r, i) in [20, 38, 56]" :key="'l' + i">
          <path
            :d="`M ${-r * 0.5} ${-r * 0.1} A ${r} ${r * 0.8} 0 0 0 ${-r} ${r * 0.3}`"
            fill="none" :stroke="card.artColors[1]" stroke-width="0.8" :opacity="0.35 - i * 0.08" />
        </g>
        <text x="0" y="85" font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[1]" opacity="0.60" text-anchor="middle" letter-spacing="0.10em">COMMUNITY RADIO  ·  LOCAL SIGNAL</text>
      </g>

      <!-- 20: Mending Season — cross-stitch / repair grid -->
      <g v-else-if="card.id === 20" :transform="`translate(140, 151)`">
        <!-- Fabric grid base -->
        <g v-for="i in 14" :key="'h' + i">
          <line :x1="-91" :y1="-91 + i*14" :x2="91" :y2="-91 + i*14"
            stroke="rgba(180,120,120,0.12)" stroke-width="0.5" />
        </g>
        <g v-for="i in 14" :key="'v' + i">
          <line :x1="-91 + i*14" y1="-91" :x2="-91 + i*14" y2="91"
            stroke="rgba(180,120,120,0.12)" stroke-width="0.5" />
        </g>
        <!-- Stitch crosses — scattered organic pattern -->
        <g v-for="(s, i) in stitchPoints" :key="i">
          <line :x1="s.x-5" :y1="s.y-5" :x2="s.x+5" :y2="s.y+5"
            :stroke="card.artColors[0]" stroke-width="1.8" opacity="0.75" stroke-linecap="round" />
          <line :x1="s.x+5" :y1="s.y-5" :x2="s.x-5" :y2="s.y+5"
            :stroke="card.artColors[0]" stroke-width="1.8" opacity="0.75" stroke-linecap="round" />
        </g>
        <!-- Running stitch along a tear -->
        <g v-for="(d, i) in [-56,-42,-28,-14,0,14,28,42,56]" :key="'rs' + i">
          <circle v-if="i%2===0" :cx="d" cy="-20" r="2.5" :fill="card.artColors[1]" opacity="0.60" />
        </g>
        <text x="0" y="85" font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[2]" opacity="0.55" text-anchor="middle" letter-spacing="0.10em">REPAIR OVER REPLACEMENT</text>
      </g>

      <!-- 21: The Count — tally marks -->
      <g v-else-if="card.id === 21" :transform="`translate(140, 151)`">
        <!-- Tally groups (|||||) -->
        <g v-for="(row, ri) in [
          [5, 5, 5, 4],
          [5, 5, 3, 0],
          [5, 2, 0, 0],
        ]" :key="ri">
          <g v-for="(count, ci) in row.filter(c => c > 0)" :key="ci">
            <!-- Individual strokes -->
            <g v-for="n in Math.min(count, 4)" :key="n">
              <line
                :x1="-80 + ci * 48 + (n-1) * 8" :y1="-65 + ri * 46"
                :x2="-80 + ci * 48 + (n-1) * 8" :y2="-65 + ri * 46 + 30"
                :stroke="card.artColors[0]" stroke-width="2.5" opacity="0.75" stroke-linecap="round" />
            </g>
            <!-- Diagonal cross for 5th -->
            <line v-if="count >= 5"
              :x1="-84 + ci * 48" :y1="-60 + ri * 46"
              :x2="-84 + ci * 48 + 34" :y2="-35 + ri * 46"
              :stroke="card.artColors[1]" stroke-width="2" opacity="0.80" stroke-linecap="round" />
          </g>
        </g>
        <!-- Total -->
        <rect x="-60" y="50" width="120" height="24" rx="3" :fill="card.artColors[0]" opacity="0.12" />
        <text x="0" y="67" font-family="'Courier New', monospace" font-size="11" :fill="card.artColors[0]" opacity="0.75" text-anchor="middle" letter-spacing="0.12em">TOTAL: 37</text>
        <text x="0" y="88" font-family="'Courier New', monospace" font-size="7" :fill="card.artColors[1]" opacity="0.50" text-anchor="middle" letter-spacing="0.10em">VERIFIED EVENTS ONLY · NO ESTIMATES</text>
      </g>

      <!-- 22: Margin Notes — page with handwritten annotations -->
      <g v-else-if="card.id === 22">
        <!-- Page lines (text) -->
        <g v-for="i in 9" :key="i">
          <line :x1="30" :y1="70 + i * 19" :x2="250" :y2="70 + i * 19"
            stroke="rgba(150,160,180,0.20)" stroke-width="0.8" />
        </g>
        <!-- Margin line -->
        <line x1="38" y1="55" x2="38" y2="225" :stroke="card.artColors[0]" stroke-width="0.8" opacity="0.30" />
        <!-- Margin annotations (handwritten marks) -->
        <text x="12" y="90"  font-family="serif" font-size="9"  :fill="card.artColors[0]" opacity="0.55" transform="rotate(-3)">?</text>
        <text x="14" y="130" font-family="serif" font-size="8"  :fill="card.artColors[1]" opacity="0.50" transform="rotate(2)">✓</text>
        <text x="10" y="165" font-family="serif" font-size="7"  :fill="card.artColors[0]" opacity="0.45" transform="rotate(-4)">see p.47</text>
        <text x="11" y="200" font-family="serif" font-size="8"  :fill="card.artColors[0]" opacity="0.55" transform="rotate(1)">!</text>
        <!-- Underline on one text line -->
        <line x1="55" y1="127" x2="180" y2="127" :stroke="card.artColors[1]" stroke-width="0.8" opacity="0.35" />
        <!-- Circle around a word (line 3) -->
        <ellipse cx="110" cy="109" rx="35" ry="8" fill="none" :stroke="card.artColors[0]" stroke-width="0.7" opacity="0.30" />
        <!-- Dog-eared corner -->
        <path d="M 250 46 L 262 46 L 262 60 Z" :fill="card.artColors[2]" opacity="0.40" />
        <!-- Note in corner -->
        <text x="140" y="235" font-family="'Courier New', monospace" font-size="6.5" :fill="card.artColors[0]" opacity="0.45" text-anchor="middle" letter-spacing="0.08em">AI GENERATES THE PAGE · NOT THE MARGIN</text>
      </g>

    </g><!-- end artwork clip group -->

    <!-- ── TITLE BAND ──────────────────────────────────────────────────────── -->
    <rect x="6" y="260" width="268" height="58" rx="4"
      fill="rgba(0,0,0,0.55)" />

    <text x="140" y="282"
      font-family="'Courier New', monospace" font-size="14"
      font-weight="600" letter-spacing="0.06em"
      :fill="card.borderColor" text-anchor="middle">
      {{ card.name.toUpperCase() }}
    </text>

    <!-- Description excerpt (first 80 chars) -->
    <text x="140" y="296"
      font-family="'Courier New', monospace" font-size="6.5"
      letter-spacing="0.04em" fill="rgba(180,210,230,0.65)" text-anchor="middle">
      {{ card.description.slice(0, 72) }}…
    </text>

    <!-- Rarity bar -->
    <rect x="14" y="306" width="252" height="3" rx="1.5"
      fill="rgba(255,255,255,0.08)" />
    <rect x="14" y="306" :width="rarityBarWidth" height="3" rx="1.5"
      :fill="card.borderColor" opacity="0.65" />

    <!-- ── STATS BAR ───────────────────────────────────────────────────────── -->
    <rect x="6" y="322" width="268" height="64" rx="4"
      fill="rgba(0,0,0,0.45)" />

    <!-- Rarity score -->
    <text x="50" y="340"
      font-family="'Courier New', monospace" font-size="8"
      fill="rgba(150,190,220,0.55)" text-anchor="middle">RARITY</text>
    <text x="50" y="356"
      font-family="'Courier New', monospace" font-size="18"
      font-weight="700" :fill="card.borderColor" text-anchor="middle">
      {{ card.rarityScore }}<tspan font-size="10" opacity="0.55">/10</tspan>
    </text>

    <!-- Edition -->
    <text x="140" y="340"
      font-family="'Courier New', monospace" font-size="8"
      fill="rgba(150,190,220,0.55)" text-anchor="middle">EDITION</text>
    <text x="140" y="356"
      font-family="'Courier New', monospace" font-size="14"
      font-weight="600" fill="rgba(200,230,255,0.80)" text-anchor="middle">
      {{ card.edition }}<tspan font-size="10" opacity="0.45">/{{ card.maxEdition }}</tspan>
    </text>

    <!-- Minted -->
    <text x="228" y="340"
      font-family="'Courier New', monospace" font-size="8"
      fill="rgba(150,190,220,0.55)" text-anchor="middle">MINTED</text>
    <text x="228" y="356"
      font-family="'Courier New', monospace" font-size="18"
      font-weight="700" fill="rgba(200,230,255,0.80)" text-anchor="middle">
      {{ card.mintedCount }}<tspan font-size="10" opacity="0.45">/{{ card.maxEdition }}</tspan>
    </text>

    <!-- Dividers -->
    <line x1="95" y1="328" x2="95" y2="378" stroke="rgba(255,255,255,0.08)" stroke-width="1" />
    <line x1="185" y1="328" x2="185" y2="378" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

    <!-- Footer: chain + protocol -->
    <text x="140" y="374"
      font-family="'Courier New', monospace" font-size="6"
      letter-spacing="0.12em" fill="rgba(100,140,160,0.45)" text-anchor="middle">
      PON INK v1.0 · EXOTOPIA · GPL v3
    </text>

    <!-- Bottom edge line -->
    <line x1="14" y1="381" x2="266" y2="381"
      :stroke="card.borderColor" stroke-width="0.5" opacity="0.25" />

  </svg>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CollectorCard } from 'src/data/collector-cards'
import { RARITY_CONFIG } from 'src/data/collector-cards'

const props = withDefaults(defineProps<{
  card:   CollectorCard
  width?: number
  height?: number
}>(), {
  width:  280,
  height: 392,
})

const { card } = props

// Rarity bar width (0–252 px based on score/10)
const rarityBarWidth = computed(() => Math.round((card.rarityScore / 10) * 252))

// ── Procedural geometry helpers ───────────────────────────────────────────────

function spiralPath(r: number, turns: number): string {
  const steps = 80
  let d = 'M 0 0 '
  for (let i = 1; i <= steps; i++) {
    const t     = i / steps
    const angle = t * Math.PI * 2 * turns
    const radius = t * r
    d += `L ${Math.cos(angle) * radius} ${Math.sin(angle) * radius} `
  }
  return d
}

// Cosmic web node + edge data (card 3)
const webNodes = (() => {
  const nodes: { x: number; y: number; r: number }[] = []
  const seed = 42
  const rng  = (n: number) => ((Math.sin(n * 127.1 + seed) * 43758.5453) % 1 + 1) / 2
  for (let i = 0; i < 18; i++) {
    nodes.push({
      x: 10 + rng(i * 3)     * 260,
      y: 46 + rng(i * 3 + 1) * 210,
      r: 2 + rng(i * 3 + 2) * 7,
    })
  }
  return nodes
})()

const webEdges = (() => {
  const edges: { x1: number; y1: number; x2: number; y2: number }[] = []
  for (let i = 0; i < webNodes.length - 1; i++) {
    if (i % 3 !== 2) {  // connect ~2/3 of adjacent nodes
      edges.push({ x1: webNodes[i]!.x, y1: webNodes[i]!.y, x2: webNodes[i+1]!.x, y2: webNodes[i+1]!.y })
    }
    if (i % 5 === 0 && i + 4 < webNodes.length) {
      edges.push({ x1: webNodes[i]!.x, y1: webNodes[i]!.y, x2: webNodes[i+4]!.x, y2: webNodes[i+4]!.y })
    }
  }
  return edges
})()

// Void particles (card 6) — scattered near edges
const voidParticles = (() => {
  const pts: { x: number; y: number; r: number; o: number }[] = []
  const rng = (n: number) => ((Math.sin(n * 91.3) * 43758.5) % 1 + 1) / 2
  for (let i = 0; i < 30; i++) {
    const edge = Math.floor(rng(i * 7) * 4)
    let x = 0, y = 0
    if (edge === 0) { x = 10 + rng(i)     * 260; y = 46 + rng(i+1) * 40 }
    if (edge === 1) { x = 10 + rng(i)     * 260; y = 216 - rng(i+1) * 40 }
    if (edge === 2) { x = 10 + rng(i)     * 50;  y = 46 + rng(i+1) * 210 }
    if (edge === 3) { x = 220 + rng(i)    * 50;  y = 46 + rng(i+1) * 210 }
    pts.push({ x, y, r: 0.5 + rng(i+3) * 1.5, o: 0.15 + rng(i+4) * 0.35 })
  }
  return pts
})()

// Nebula embedded stars (card 7)
const nebulaStars = (() => {
  const stars: { x: number; y: number; r: number; o: number }[] = []
  const rng = (n: number) => ((Math.sin(n * 113.7) * 43758.5) % 1 + 1) / 2
  for (let i = 0; i < 22; i++) {
    stars.push({ x: 20 + rng(i*4) * 240, y: 56 + rng(i*4+1) * 190, r: 0.5 + rng(i*4+2) * 1.5, o: 0.3 + rng(i*4+3) * 0.65 })
  }
  return stars
})()

// Compost spiral points (card 18)
const compostPoints = (() => {
  const pts: { x: number; y: number; color: string; o: number }[] = []
  const colors = ['#88cc22', '#446600', '#ccee88', '#664400', '#228800']
  for (let i = 0; i < 14; i++) {
    const t     = i / 13
    const angle = t * Math.PI * 2 * 2
    const r     = 10 + t * 72
    pts.push({
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
      color: colors[i % colors.length] ?? colors[0],
      o: 0.35 + t * 0.35,
    })
  }
  return pts
})()

// Stitch points (card 20) — scattered within artwork area
const stitchPoints = (() => {
  const pts: { x: number; y: number }[] = []
  const rng = (n: number) => ((Math.sin(n * 91.3) * 43758.5) % 1 + 1) / 2
  const occupied = new Set<string>()
  for (let i = 0; i < 24; i++) {
    const col = Math.round((rng(i*3)     * 12 - 6)) * 14
    const row = Math.round((rng(i*3 + 1) * 12 - 6)) * 14
    const key = `${col},${row}`
    if (!occupied.has(key)) {
      occupied.add(key)
      pts.push({ x: col, y: row })
    }
  }
  return pts
})()

// Settlement background stars (card 9)
const settlementStars = (() => {
  const stars: { x: number; y: number; r: number; o: number }[] = []
  const rng = (n: number) => ((Math.sin(n * 78.3) * 43758.5) % 1 + 1) / 2
  for (let i = 0; i < 20; i++) {
    stars.push({ x: (rng(i*3) - 0.5) * 220, y: (rng(i*3+1) - 0.5) * 160 - 30, r: 0.4 + rng(i*3+2), o: 0.20 + rng(i) * 0.45 })
  }
  return stars
})()
</script>

<style scoped>
.collector-card {
  display: block;
  transition: transform 0.25s ease, filter 0.25s ease;
}

.collector-card:hover {
  transform: translateY(-4px) scale(1.02);
}

.card-rarity--legendary:hover { filter: drop-shadow(0 8px 24px rgba(255, 215, 0, 0.45)); }
.card-rarity--rare:hover       { filter: drop-shadow(0 8px 20px rgba(68, 136, 255, 0.40)); }
.card-rarity--uncommon:hover   { filter: drop-shadow(0 8px 18px rgba(34, 204, 102, 0.38)); }
.card-rarity--common:hover     { filter: drop-shadow(0 6px 14px rgba(102, 119, 136, 0.30)); }
</style>
