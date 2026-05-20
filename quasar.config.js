/* eslint-env node */
const { configure } = require('quasar/wrappers')
const { readFileSync, existsSync } = require('fs')
const { join } = require('path')

/**
 * Vite plugin: serve any path under /gallery/, /reportal/, or other legacy
 * HTML directories as raw static files, bypassing Vite's transformIndexHtml
 * pipeline.  Those files contain data: URIs and injected scripts that confuse
 * Vite's HTML parser.
 */
function staticPassthroughPlugin () {
  const STATIC_PREFIXES = ['/gallery/', '/reportal/']

  return {
    name: 'static-html-passthrough',
    configureServer (server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split('?')[0] ?? ''
        const isLegacyPath = STATIC_PREFIXES.some(p => url.startsWith(p))
        if (!isLegacyPath) return next()

        const filePath = join(process.cwd(), url)
        if (!existsSync(filePath)) return next()

        const ext = url.split('.').pop()?.toLowerCase()
        const mime = {
          html: 'text/html',
          js:   'text/javascript',
          css:  'text/css',
          json: 'application/json',
          png:  'image/png',
          jpg:  'image/jpeg',
          gif:  'image/gif',
          svg:  'image/svg+xml',
          woff2:'font/woff2',
        }[ext] ?? 'application/octet-stream'

        res.setHeader('Content-Type', mime + (mime.startsWith('text') ? '; charset=utf-8' : ''))
        res.end(readFileSync(filePath))
      })
    },
  }
}

module.exports = configure(function (/* ctx */) {
  return {
    // Boot files run before the app component is mounted
    boot: ['pinia'],

    css: ['app.scss'],

    extras: [
      'material-icons',
      'mdi-v7',
      'roboto-font',
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        node: 'node20',
      },

      vueRouterMode: 'hash',

      // Help Vite pre-bundle the large Three.js package
      extendViteConf (viteConf) {
        viteConf.optimizeDeps = viteConf.optimizeDeps || {}
        viteConf.optimizeDeps.include = [
          ...(viteConf.optimizeDeps.include || []),
          'three',
        ]

        // Serve legacy HTML directories as static files (bypasses HTML parser)
        viteConf.plugins = viteConf.plugins || []
        viteConf.plugins.push(staticPassthroughPlugin())
      },
    },

    devServer: {
      open: true,
    },

    framework: {
      config: {
        dark: true,
        brand: {
          primary:   '#1a73e8',
          secondary: '#26a69a',
          accent:    '#9c27b0',
          dark:      '#0a0f1e',
          positive:  '#21ba45',
          negative:  '#c10015',
          info:      '#31ccec',
          warning:   '#f2c037',
        },
        notify: { position: 'bottom-right' },
      },

      plugins: ['Notify', 'Dialog', 'Loading'],
    },

    animations: ['fadeIn', 'fadeOut'],

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false,
    },
  }
})
