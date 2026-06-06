/**
 * src/composables/useVizRenderer.ts
 *
 * Singleton WebGLRenderer shared across all visualization pages.
 *
 * The renderer, scene, camera, and controls live at module scope — they survive
 * Vue component lifecycle and router transitions. Each visualization page:
 *   1. On mount  — adds its objects to a pageGroup, configures camera/controls,
 *                  registers a per-frame tick callback via addTick().
 *   2. On unmount — unregisters the tick, disposes and removes its pageGroup,
 *                   removes any canvas event listeners it added.
 *
 * MainLayout.vue owns the <canvas> element and calls init() / destroy() /
 * resize(). All other code calls useVizRenderer() to get the shared refs.
 */

import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

// ── Singleton state (module-level — survives Vue lifecycle) ───────────────────

let _canvas:   HTMLCanvasElement        | null = null
let _renderer: THREE.WebGLRenderer      | null = null
let _scene:    THREE.Scene              | null = null
let _camera:   THREE.PerspectiveCamera  | null = null
let _controls: OrbitControls            | null = null
let _rafId:    number                    = 0
let _ready     = false

const _tickFns = new Set<(t: number) => void>()

// Nav-bar height — must match .exo-bar height in MainLayout CSS
export const VIZ_BAR_H = 44

// ── Public composable ─────────────────────────────────────────────────────────

export function useVizRenderer() {

  /**
   * Create the renderer. Call once from MainLayout.vue onMounted.
   * Safe to call again — no-op if already initialized.
   */
  function init(canvas: HTMLCanvasElement) {
    if (_ready) return
    _canvas = canvas

    _renderer = new THREE.WebGLRenderer({ canvas, antialias: true })
    _renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    _renderer.setSize(_w(), _h())
    _renderer.toneMapping         = THREE.ACESFilmicToneMapping
    _renderer.toneMappingExposure  = 0.9

    _scene = new THREE.Scene()

    _camera = new THREE.PerspectiveCamera(55, _w() / _h(), 0.01, 400)

    _controls = new OrbitControls(_camera, canvas)
    _controls.enableDamping  = true
    _controls.dampingFactor  = 0.1

    _ready = true
    _startLoop()
  }

  /**
   * Destroy everything. Call from MainLayout.vue onUnmounted only —
   * i.e. when the whole app is being torn down, not on route changes.
   */
  function destroy() {
    cancelAnimationFrame(_rafId)
    _tickFns.clear()
    _controls?.dispose()
    _renderer?.dispose()
    _canvas = null; _renderer = null; _scene = null
    _camera = null; _controls = null; _ready = false
  }

  /**
   * Update renderer + camera on window resize.
   * Call from MainLayout.vue's resize handler.
   */
  function resize() {
    if (!_renderer || !_camera) return
    _renderer.setSize(_w(), _h())
    _camera.aspect = _w() / _h()
    _camera.updateProjectionMatrix()
  }

  /**
   * Register a per-frame callback. Returns a cleanup function — call it in
   * the page's onUnmounted to unregister before the page is destroyed.
   *
   *   const stopTick = viz.addTick(t => { ... })
   *   onUnmounted(() => stopTick())
   */
  function addTick(fn: (t: number) => void): () => void {
    _tickFns.add(fn)
    return () => { _tickFns.delete(fn) }
  }

  return {
    /** True once init() has been called. */
    get ready()    { return _ready    },
    get renderer() { return _renderer },
    get scene()    { return _scene    },
    get camera()   { return _camera   },
    get controls() { return _controls },
    /** The canvas element owned by MainLayout. Use for addEventListeners in pages. */
    get canvas()   { return _canvas   },
    init,
    destroy,
    resize,
    addTick,
  }
}

// ── Internal helpers ──────────────────────────────────────────────────────────

function _w() { return window.innerWidth }
function _h() { return Math.max(1, window.innerHeight - VIZ_BAR_H) }

function _startLoop() {
  const tick = () => {
    _rafId = requestAnimationFrame(tick)
    _controls?.update()
    const t = performance.now() / 1000
    for (const fn of _tickFns) fn(t)
    if (_renderer && _scene && _camera) _renderer.render(_scene, _camera)
  }
  tick()
}
