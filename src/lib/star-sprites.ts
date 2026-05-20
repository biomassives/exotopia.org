/**
 * src/lib/star-sprites.ts
 *
 * Scientifically-styled star sprite textures for Three.js.
 *
 * Design goals:
 *   – Spectral color is the DOMINANT visual feature — stars look their actual color
 *   – Smooth Gaussian-like falloff — no visible ring artefacts from sharp gradient stops
 *   – White hot-spot limited to the innermost 3–5% of the sprite radius
 *   – Hot stars (O/B/W) get a secondary nebula ring at ~45–60% radius
 *   – Cool stars (M/K) get an extended dim red halo for distinctiveness
 *   – Diffraction spikes only for genuinely bright stars (appMag ≤ 2), 6-point
 *
 * Spectral colours follow the Planckian locus approximated to the
 * UBVRI photometric system used in observational astronomy.
 */

import * as THREE from 'three'

// ── Spectral type palette ─────────────────────────────────────────────────────

export type SpectralClass = 'O' | 'B' | 'A' | 'F' | 'G' | 'K' | 'M' | 'W'

export const SPECTRAL_RGB: Record<SpectralClass, [number, number, number]> = {
  O: [155, 176, 255],   // blue
  B: [170, 191, 255],   // blue-white
  A: [202, 215, 255],   // white-blue
  F: [248, 247, 255],   // warm white
  G: [255, 236, 170],   // solar yellow  ← slightly more saturated than before
  K: [255, 190, 110],   // orange
  M: [255, 130,  80],   // red-orange    ← more saturated than before
  W: [ 80, 230, 255],   // Wolf-Rayet cyan
}

// ── Texture cache ─────────────────────────────────────────────────────────────

const CACHE = new Map<string, THREE.CanvasTexture>()

// ── Core sprite builder ───────────────────────────────────────────────────────

/**
 * Build a cached star texture.
 *
 * magnitude tiers:
 *   1  = very bright (appMag < 1)   — diffraction spikes, max glow
 *   3  = medium      (appMag 1–4.5) — standard glow, no spikes
 *   7  = dim         (appMag > 4.5) — reduced corona
 */
export function makeStarSprite(
  spectral:  SpectralClass = 'G',
  magnitude: number        = 7,
  _res:      number        = 128,   // kept for API compat — internally we pick resolution
): THREE.CanvasTexture {
  const tier   = magnitude <= 1 ? 'V' : magnitude <= 3 ? 'M' : 'D'   // Vivid / Mid / Dim
  const cacheKey = `${spectral}_${tier}`
  if (CACHE.has(cacheKey)) return CACHE.get(cacheKey)!

  const res = tier === 'V' ? 256 : 128
  const cv  = document.createElement('canvas')
  cv.width  = cv.height = res
  const ctx = cv.getContext('2d')!
  const cx  = res / 2

  const [r, g, b] = SPECTRAL_RGB[spectral]
  const rgb        = `${r},${g},${b}`

  // ── Glow strengths per tier ────────────────────────────────────────────────
  //    The key fix: white core is tiny; spectral color alpha is HIGH and smooth.
  //    Multiple stops make a gentle Gaussian — no visible rings.
  const wa = tier === 'V' ? 1.00 : tier === 'M' ? 0.90 : 0.78   // white alpha
  const c1 = tier === 'V' ? 0.96 : tier === 'M' ? 0.82 : 0.68   // spectral near core
  const c2 = tier === 'V' ? 0.72 : tier === 'M' ? 0.55 : 0.36   // mid-inner
  const c3 = tier === 'V' ? 0.42 : tier === 'M' ? 0.26 : 0.14   // mid corona
  const c4 = tier === 'V' ? 0.18 : tier === 'M' ? 0.10 : 0.05   // outer corona
  const c5 = tier === 'V' ? 0.07 : tier === 'M' ? 0.03 : 0.01   // far halo

  // ── Main gradient: white hot-spot (3% radius) → spectral → transparent ────
  const grad = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx)
  grad.addColorStop(0.000, `rgba(255,255,255,${wa})`)       // white point
  grad.addColorStop(0.030, `rgba(255,255,255,${wa * 0.90})`) // still white
  grad.addColorStop(0.060, `rgba(${rgb},${c1})`)            // spectral colour starts here
  grad.addColorStop(0.110, `rgba(${rgb},${c2})`)            // corona inner edge
  grad.addColorStop(0.220, `rgba(${rgb},${c3})`)            // smooth mid-corona
  grad.addColorStop(0.420, `rgba(${rgb},${c4})`)            // outer corona
  grad.addColorStop(0.680, `rgba(${rgb},${c5})`)            // far halo
  grad.addColorStop(1.000, `rgba(${rgb},0)`)                // transparent edge

  ctx.fillStyle = grad
  ctx.fillRect(0, 0, res, res)

  // ── Secondary nebula ring — hot stars (O / B / W) ─────────────────────────
  //    Ring at 40–58% radius: spectral glow peaks in this band.
  if (spectral === 'O' || spectral === 'B' || spectral === 'W') {
    const rI = cx * 0.38, rO = cx * 0.58
    const ringA = tier === 'V' ? 0.30 : tier === 'M' ? 0.18 : 0.08
    const ring  = ctx.createRadialGradient(cx, cx, rI, cx, cx, rO)
    ring.addColorStop(0,   `rgba(${rgb},0)`)
    ring.addColorStop(0.45, `rgba(${rgb},${ringA})`)
    ring.addColorStop(0.70, `rgba(${rgb},${ringA * 0.60})`)
    ring.addColorStop(1,   `rgba(${rgb},0)`)
    ctx.globalCompositeOperation = 'screen'
    ctx.fillStyle = ring
    ctx.fillRect(0, 0, res, res)
    ctx.globalCompositeOperation = 'source-over'
  }

  // ── Extended dim halo — cool stars (M / K) ────────────────────────────────
  //    Wide faint halo that makes red/orange stars look distinctly warm.
  if (spectral === 'M' || spectral === 'K') {
    const rI = cx * 0.50, rO = cx * 0.95
    const hA = spectral === 'M'
      ? (tier === 'V' ? 0.22 : tier === 'M' ? 0.14 : 0.07)
      : (tier === 'V' ? 0.12 : tier === 'M' ? 0.07 : 0.03)
    const halo = ctx.createRadialGradient(cx, cx, rI, cx, cx, rO)
    halo.addColorStop(0,   `rgba(${rgb},0)`)
    halo.addColorStop(0.30, `rgba(${rgb},${hA})`)
    halo.addColorStop(0.70, `rgba(${rgb},${hA * 0.40})`)
    halo.addColorStop(1,   `rgba(${rgb},0)`)
    ctx.globalCompositeOperation = 'screen'
    ctx.fillStyle = halo
    ctx.fillRect(0, 0, res, res)
    ctx.globalCompositeOperation = 'source-over'
  }

  // ── Diffraction spikes — vivid tier only (appMag < 1), 6-point ────────────
  //    3 axes × 2 directions = 6-point star, like a real telescope image.
  //    Soft spikes (max 0.32 opacity) — informative, not distracting.
  if (tier === 'V') {
    ctx.globalCompositeOperation = 'screen'
    for (let a = 0; a < 3; a++) {
      const angle  = (a / 3) * Math.PI
      const spkLen = cx * 0.90
      const spkW   = res * 0.014

      const sg = ctx.createLinearGradient(
        cx + Math.cos(angle) * spkLen, cx + Math.sin(angle) * spkLen,
        cx - Math.cos(angle) * spkLen, cx - Math.sin(angle) * spkLen,
      )
      sg.addColorStop(0.00, `rgba(${rgb},0)`)
      sg.addColorStop(0.28, `rgba(${rgb},0)`)
      sg.addColorStop(0.44, `rgba(255,255,255,0.26)`)
      sg.addColorStop(0.50, `rgba(255,255,255,0.32)`)
      sg.addColorStop(0.56, `rgba(255,255,255,0.26)`)
      sg.addColorStop(0.72, `rgba(${rgb},0)`)
      sg.addColorStop(1.00, `rgba(${rgb},0)`)

      ctx.save()
      ctx.translate(cx, cx); ctx.rotate(angle); ctx.translate(-cx, -cx)
      ctx.fillStyle = sg
      ctx.fillRect(0, cx - spkW / 2, res, spkW)
      ctx.restore()
    }
    ctx.globalCompositeOperation = 'source-over'
  }

  const tex = new THREE.CanvasTexture(cv)
  CACHE.set(cacheKey, tex)
  return tex
}

// ── Sprite mesh builder ───────────────────────────────────────────────────────

/**
 * Create a billboard Sprite for a star.
 * `sizeUnits` is the world-space diameter of the sprite.
 */
export function makeStarMesh(
  spectral:  SpectralClass = 'G',
  magnitude: number        = 7,
  sizeUnits: number        = 4,
): THREE.Sprite {
  const tex     = makeStarSprite(spectral, magnitude)
  const isVivid = magnitude <= 1
  const isMid   = magnitude <= 3

  const mat = new THREE.SpriteMaterial({
    map:         tex,
    transparent: true,
    depthWrite:  false,
    blending:    THREE.AdditiveBlending,
    // Vivid stars always at full opacity; dim stars slightly transparent
    opacity:     isVivid ? 1.0 : isMid ? 0.90 : 0.76,
  })

  const sprite = new THREE.Sprite(mat)
  // Vivid stars rendered slightly larger to emphasise their brightness
  sprite.scale.setScalar(sizeUnits * (isVivid ? 1.35 : isMid ? 1.08 : 1.0))
  return sprite
}

// ── Spectral helpers ──────────────────────────────────────────────────────────

/** Map effective temperature (K) → spectral class. */
export function teffToSpectral(teff: number | null | undefined): SpectralClass {
  if (!teff) return 'G'
  if (teff >= 30000) return 'O'
  if (teff >= 10000) return 'B'
  if (teff >= 7500)  return 'A'
  if (teff >= 6000)  return 'F'
  if (teff >= 5200)  return 'G'
  if (teff >= 3700)  return 'K'
  return 'M'
}

/** Derive spectral class from a Takey-catalog color_hex. */
export function spectralFromHex(hex: string): SpectralClass {
  if (hex === '#aaccff') return 'B'
  if (hex === '#ffeecc') return 'K'
  return 'G'
}

/**
 * Weighted random spectral class for a cluster member galaxy.
 * X-ray clusters are dominated by old ellipticals → mostly K/M/G.
 */
export function randomClusterSpectral(rng: () => number, isBcg = false): SpectralClass {
  if (isBcg) {
    const t = rng()
    return t < 0.5 ? 'K' : t < 0.8 ? 'F' : 'G'
  }
  const t = rng()
  if (t < 0.40) return 'M'
  if (t < 0.65) return 'K'
  if (t < 0.80) return 'G'
  if (t < 0.90) return 'F'
  if (t < 0.95) return 'A'
  if (t < 0.98) return 'B'
  return 'O'
}

// ── Galaxy / cluster sprite ───────────────────────────────────────────────────

/**
 * Billboard Sprite representing a distant galaxy or cluster.
 * Soft Gaussian blob tinted by `color`; `aspectRatio` creates elliptical shapes.
 */
/**
 * Build a galaxy/cluster sprite at the requested canvas resolution.
 * Higher `res` eliminates blurriness on close approach; use 128 for far-field,
 * 384 for mid-approach, and hide the sprite entirely at LOD_NEAR (star field takes over).
 */
export function makeGalaxySprite(
  color:       THREE.Color,
  richness:    number = 5,
  sizeUnits:   number = 0.30,
  aspectRatio: number = 1.5,
  res:         number = 128,   // canvas resolution — higher = sharper on approach
): THREE.Sprite {
  const texKey = `gal_${Math.round(richness)}_${res}`
  let tex: THREE.CanvasTexture

  if (CACHE.has(texKey)) {
    tex = CACHE.get(texKey)!
  } else {
    const cv  = document.createElement('canvas')
    cv.width  = cv.height = res
    const ctx = cv.getContext('2d')!
    const cx  = res / 2
    const pk  = Math.min(0.92, 0.38 + richness * 0.054)

    // Main Gaussian glow
    const g = ctx.createRadialGradient(cx, cx, 0, cx, cx, cx)
    g.addColorStop(0.00, `rgba(255,255,255,${pk})`)
    g.addColorStop(0.05, `rgba(255,255,255,${(pk * 0.85).toFixed(3)})`)
    g.addColorStop(0.18, `rgba(255,255,255,${(pk * 0.38).toFixed(3)})`)
    g.addColorStop(0.50, `rgba(255,255,255,${(pk * 0.09).toFixed(3)})`)
    g.addColorStop(1.00, `rgba(255,255,255,0)`)
    ctx.fillStyle = g
    ctx.fillRect(0, 0, res, res)

    // At higher resolutions, add structure that reads well on close approach:
    // concentric ring hints (galactic disk / halo transitions)
    if (res >= 256) {
      const ringOpacity = 0.055 + richness * 0.007
      for (const rFrac of [0.22, 0.42, 0.62]) {
        const ring = ctx.createRadialGradient(cx, cx, cx * (rFrac - 0.04), cx, cx, cx * (rFrac + 0.04))
        ring.addColorStop(0,   `rgba(255,255,255,0)`)
        ring.addColorStop(0.5, `rgba(255,255,255,${ringOpacity.toFixed(3)})`)
        ring.addColorStop(1,   `rgba(255,255,255,0)`)
        ctx.fillStyle = ring
        ctx.fillRect(0, 0, res, res)
      }
    }

    tex = new THREE.CanvasTexture(cv)
    CACHE.set(texKey, tex)
  }

  const mat = new THREE.SpriteMaterial({
    map: tex, color, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  })
  const sprite = new THREE.Sprite(mat)
  sprite.scale.set(sizeUnits, sizeUnits / aspectRatio, 1)
  return sprite
}

/** Simple seeded RNG (mulberry32). */
export function seededRng(seed: number): () => number {
  return function () {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
