import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/welcome',
      },
      {
        path: 'welcome',
        name: 'welcome',
        component: () => import('src/pages/WelcomePage.vue'),
        meta: { title: 'Welcome' },
      },
      {
        path: 'cosmic',
        name: 'cosmic',
        component: () => import('src/pages/CosmicPage.vue'),
        meta: { title: 'Cosmic View' },
      },
      {
        path: 'galaxy',
        name: 'galaxy',
        component: () => import('src/pages/GalaxyPage.vue'),
        meta: { title: 'Galaxy View' },
      },
      {
        // Surface view: /surface/:hostname/:planetName
        // Add ?parent=PlanetName for moon surface view
        path: 'surface/:hostname/:planetName',
        name: 'surface',
        component: () => import('src/pages/SurfaceViewPage.vue'),
        meta: { title: 'Surface View' },
        props: true,
      },
      {
        path: 'gallery',
        name: 'gallery',
        component: () => import('src/pages/GalleryPage.vue'),
        meta: { title: 'Orbital Gallery' },
      },
      {
        path: 'station/:stationId?',
        name: 'station',
        component: () => import('src/pages/StationPage.vue'),
        meta: { title: 'Station Builder' },
        props: true,
      },
      {
        path: 'mint',
        name: 'mint',
        component: () => import('src/pages/MintPage.vue'),
        meta: { title: 'Mint NFT' },
      },
      {
        path: 'mint-style',
        name: 'mint-style',
        component: () => import('src/pages/MintStylePage.vue'),
        meta: { title: 'Minting Style Builder' },
      },
      {
        path: 'chains',
        name: 'chains',
        component: () => import('src/pages/ChainStatusPage.vue'),
        meta: { title: 'Chain Support Matrix' },
      },
      {
        path: 'eco-ops',
        name: 'eco-ops',
        component: () => import('src/pages/EcoOpsPage.vue'),
        meta: { title: 'Eco Ops' },
      },
    ],
  },

  // Catch-all
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
]

export default routes
