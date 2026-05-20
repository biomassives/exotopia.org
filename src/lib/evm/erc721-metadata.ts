/**
 * src/lib/evm/erc721-metadata.ts
 *
 * ERC-721 / OpenSea-compatible metadata builders for all EVM-chain NFT types
 * in the PON INK protocol.
 *
 * All builders return a plain JSON object ready for:
 *   1. Pinata IPFS upload (then use returned CID as tokenURI)
 *   2. On-chain URI storage (if metadata is small enough)
 *   3. Dry-run display in MintPage.vue
 *
 * Fee isolation:
 *   Metadata reflects creator attribution and community impact only.
 *   Network gas costs are NEVER included in the metadata schema.
 *
 * Chains:
 *   Polygon (MATIC) — $BARS, Water Quality Certs, Health Card IDs
 *   Celo            — Community Badges, Eco-ops Participation Tokens
 */

// ── Shared types ──────────────────────────────────────────────────────────────

export interface Erc721Attribute {
  trait_type:   string
  value:        string | number
  display_type?: 'number' | 'boost_number' | 'boost_percentage' | 'date'
}

export interface Erc721Metadata {
  name:          string
  description:   string
  image:         string          // IPFS URI: ipfs://<CID>
  external_url?: string
  animation_url?: string | null
  attributes:    Erc721Attribute[]
  // PON INK extension fields (shown in explorers that support arbitrary properties)
  pon_ink?:      Record<string, unknown>
}

function today(): string {
  return new Date().toISOString().split('T')[0]!
}

// ── $BARS — Sound / Music NFT (Polygon) ──────────────────────────────────────

export interface BarsParams {
  title:          string
  artist:         string          // pon.ink handle
  duration_sec:   number
  bpm?:           number | null
  key?:           string | null   // musical key e.g. "Am"
  genre?:         string | null
  ipfs_audio_cid: string          // audio file IPFS CID
  ipfs_cover_cid?: string         // cover art IPFS CID
  license:        'personal_use' | 'commercial' | 'sync' | 'exclusive'
  co_artists?:    string[]
  sample_credits?: string[]
  description?:   string
}

export function buildBarsMeta(p: BarsParams): Erc721Metadata {
  const attrs: Erc721Attribute[] = [
    { trait_type: 'NFT Type',    value: '$BARS Sound NFT' },
    { trait_type: 'Artist',      value: p.artist },
    { trait_type: 'Duration',    value: p.duration_sec, display_type: 'number' },
    { trait_type: 'License',     value: p.license },
    { trait_type: 'Protocol',    value: 'PON INK v1.0' },
    { trait_type: 'Chain',       value: 'Polygon' },
    { trait_type: 'Mint Date',   value: today() },
  ]
  if (p.bpm)   attrs.push({ trait_type: 'BPM',   value: p.bpm,   display_type: 'number' })
  if (p.key)   attrs.push({ trait_type: 'Key',   value: p.key })
  if (p.genre) attrs.push({ trait_type: 'Genre', value: p.genre })
  if (p.co_artists?.length) attrs.push({ trait_type: 'Co-artists', value: p.co_artists.join(', ') })

  return {
    name:          p.title,
    description:   p.description ?? `$BARS sound NFT by ${p.artist} on PON INK.`,
    image:         p.ipfs_cover_cid ? `ipfs://${p.ipfs_cover_cid}` : '',
    external_url:  'https://pon.ink',
    animation_url: `ipfs://${p.ipfs_audio_cid}`,
    attributes:    attrs,
    pon_ink: {
      nft_type:       'bars',
      chain:          'polygon',
      audio_cid:      p.ipfs_audio_cid,
      sample_credits: p.sample_credits ?? [],
      license_terms:  p.license,
      resonance_split: { creator: 0.80, hardware_fund: 0.15, platform: 0.05 },
    },
  }
}

// ── Water Quality Certification (Polygon) ────────────────────────────────────

export interface WqCertParams {
  cert_id:        string          // e.g. "WQC-LAMU-2026-0012"
  location_name:  string          // human-readable site name
  lat?:           number | null
  lng?:           number | null
  measured_by:    string          // field worker pon.ink handle
  date_utc:       string          // ISO date of measurement
  // measurements
  ph?:            number | null
  turbidity_ntu?: number | null
  conductivity_us_cm?: number | null
  nitrate_mg_l?:  number | null
  coliform_cfu_100ml?: number | null
  // outcome
  potable:        boolean
  ipfs_report_cid?: string        // PDF report CID
}

export function buildWqCertMeta(p: WqCertParams): Erc721Metadata {
  const attrs: Erc721Attribute[] = [
    { trait_type: 'NFT Type',      value: 'Water Quality Certificate' },
    { trait_type: 'Cert ID',       value: p.cert_id },
    { trait_type: 'Location',      value: p.location_name },
    { trait_type: 'Measured By',   value: p.measured_by },
    { trait_type: 'Date',          value: p.date_utc },
    { trait_type: 'Potable',       value: p.potable ? 'YES' : 'NO' },
    { trait_type: 'Protocol',      value: 'PON INK v1.0' },
    { trait_type: 'Chain',         value: 'Polygon' },
  ]
  if (p.ph != null)                 attrs.push({ trait_type: 'pH',                    value: p.ph,                display_type: 'number' })
  if (p.turbidity_ntu != null)      attrs.push({ trait_type: 'Turbidity (NTU)',        value: p.turbidity_ntu,     display_type: 'number' })
  if (p.conductivity_us_cm != null) attrs.push({ trait_type: 'Conductivity (µS/cm)',  value: p.conductivity_us_cm,display_type: 'number' })
  if (p.nitrate_mg_l != null)       attrs.push({ trait_type: 'Nitrate (mg/L)',         value: p.nitrate_mg_l,      display_type: 'number' })
  if (p.coliform_cfu_100ml != null) attrs.push({ trait_type: 'Coliform (CFU/100mL)',  value: p.coliform_cfu_100ml,display_type: 'number' })
  if (p.lat != null && p.lng != null) {
    attrs.push({ trait_type: 'Latitude',  value: p.lat,  display_type: 'number' })
    attrs.push({ trait_type: 'Longitude', value: p.lng,  display_type: 'number' })
  }

  return {
    name:         `Water Quality Certificate — ${p.location_name}`,
    description:  `On-chain water quality certification for ${p.location_name} measured on ${p.date_utc}. Potable: ${p.potable ? 'YES' : 'NO'}.`,
    image:        '',
    external_url: 'https://pon.ink/wqcert',
    attributes:   attrs,
    pon_ink: {
      nft_type:      'wq_cert',
      chain:         'polygon',
      cert_id:       p.cert_id,
      report_cid:    p.ipfs_report_cid ?? null,
      tamper_evident: true,
      data_standard: 'WHO-2022',
    },
  }
}

// ── Community Badge (Celo) ────────────────────────────────────────────────────

export interface CommunityBadgeParams {
  badge_id:       string          // e.g. "BADGE-FANA-KA-2026-042"
  badge_name:     string          // e.g. "Fana Ka Founding Member"
  community:      string          // e.g. "Fana Ka"
  recipient:      string          // pon.ink handle
  awarded_for:    string          // human-readable reason
  event_id?:      string | null   // pon.ink event ID if event-triggered
  tier:           'bronze' | 'silver' | 'gold' | 'platinum'
  ipfs_art_cid?:  string
  description?:   string
}

export function buildCommunityBadgeMeta(p: CommunityBadgeParams): Erc721Metadata {
  const tierColors: Record<string, string> = {
    bronze: '#CD7F32', silver: '#C0C0C0', gold: '#FFD700', platinum: '#E5E4E2',
  }
  const attrs: Erc721Attribute[] = [
    { trait_type: 'NFT Type',    value: 'Community Badge' },
    { trait_type: 'Badge ID',    value: p.badge_id },
    { trait_type: 'Community',   value: p.community },
    { trait_type: 'Recipient',   value: p.recipient },
    { trait_type: 'Tier',        value: p.tier.charAt(0).toUpperCase() + p.tier.slice(1) },
    { trait_type: 'Awarded For', value: p.awarded_for },
    { trait_type: 'Chain',       value: 'Celo' },
    { trait_type: 'Protocol',    value: 'PON INK v1.0' },
    { trait_type: 'Awarded',     value: today() },
  ]
  if (p.event_id) attrs.push({ trait_type: 'Event ID', value: p.event_id })

  return {
    name:         p.badge_name,
    description:  p.description ?? `Community badge awarded to ${p.recipient} by ${p.community}: "${p.awarded_for}".`,
    image:        p.ipfs_art_cid ? `ipfs://${p.ipfs_art_cid}` : '',
    external_url: 'https://pon.ink/community',
    attributes:   attrs,
    pon_ink: {
      nft_type:  'community_badge',
      chain:     'celo',
      badge_id:  p.badge_id,
      community: p.community,
      tier:      p.tier,
      tier_color: tierColors[p.tier],
    },
  }
}

// ── Eco-ops Participation Token (Celo) ────────────────────────────────────────

export interface EcoOpsTokenParams {
  token_id:       string          // e.g. "ECO-LAMU-WQ-2026-0001"
  activity_type:  'wqMap' | 'garbageMap' | 'farmMap' | 'productMap' | 'transportMap' | 'storageMap' | 'sourceMap' | 'cleaningMap'
  participant:    string          // pon.ink handle
  location_name:  string
  checkin_count:  number          // eco-ops check-ins that triggered this token
  milestone:      string          // e.g. "10 water quality readings"
  group?:         string | null   // SHG group name if applicable
  ipfs_art_cid?:  string
}

const ACTIVITY_LABELS: Record<string, string> = {
  wqMap:        'Water Quality Mapping',
  garbageMap:   'Waste Resource Mapping',
  farmMap:      'Farm Practice / Climate Credit',
  productMap:   'Circular Resource Production',
  transportMap: 'Resource Transport',
  storageMap:   'Resource Storage',
  sourceMap:    'Material Sourcing',
  cleaningMap:  'Community Cleaning',
}

export function buildEcoOpsTokenMeta(p: EcoOpsTokenParams): Erc721Metadata {
  const attrs: Erc721Attribute[] = [
    { trait_type: 'NFT Type',      value: 'Eco-ops Participation Token' },
    { trait_type: 'Token ID',      value: p.token_id },
    { trait_type: 'Activity Type', value: ACTIVITY_LABELS[p.activity_type] ?? p.activity_type },
    { trait_type: 'Participant',   value: p.participant },
    { trait_type: 'Location',      value: p.location_name },
    { trait_type: 'Check-ins',     value: p.checkin_count, display_type: 'number' },
    { trait_type: 'Milestone',     value: p.milestone },
    { trait_type: 'Awarded',       value: today() },
    { trait_type: 'Chain',         value: 'Celo' },
    { trait_type: 'Protocol',      value: 'PON INK v1.0' },
  ]
  if (p.group) attrs.push({ trait_type: 'SHG Group', value: p.group })

  return {
    name:         `Eco-ops Token — ${ACTIVITY_LABELS[p.activity_type] ?? p.activity_type}`,
    description:  `Eco-ops participation token for ${p.participant}: ${p.milestone} at ${p.location_name}.`,
    image:        p.ipfs_art_cid ? `ipfs://${p.ipfs_art_cid}` : '',
    external_url: 'https://pon.ink/eco-ops',
    attributes:   attrs,
    pon_ink: {
      nft_type:      'eco_ops_token',
      chain:         'celo',
      token_id:      p.token_id,
      activity_type: p.activity_type,
      checkin_count: p.checkin_count,
      milestone:     p.milestone,
      tamper_evident: true,
    },
  }
}
