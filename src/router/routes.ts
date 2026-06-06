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
        path: 'clusters',
        name: 'clusters',
        component: () => import('src/pages/GalaxyClustersPage.vue'),
        meta: { title: 'Galaxy Clusters' },
      },
      {
        path: 'planet-systems',
        name: 'planet-systems',
        component: () => import('src/pages/PlanetSystemsPage.vue'),
        meta: { title: 'Planet Systems · Settlement Guide' },
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
        // Cluster interior: navigate member galaxies within a named cluster
        path: 'cluster-interior/:slug',
        name: 'cluster-interior',
        component: () => import('src/pages/ClusterInteriorPage.vue'),
        meta: { title: 'Cluster Interior' },
        props: true,
      },
      {
        // Cosmic void interior: sparse particle view for great voids
        path: 'void/:voidId',
        name: 'void-interior',
        component: () => import('src/pages/VoidInteriorPage.vue'),
        meta: { title: 'Void Interior' },
        props: true,
      },
      {
        // X-ray cluster interior: oracle-generated galaxy field for Takey2013 clusters
        path: 'xcluster/:xid',
        name: 'xcluster',
        component: () => import('src/pages/XClusterPage.vue'),
        meta: { title: 'X-Ray Cluster' },
        props: true,
      },
      {
        // Cluster galaxy interior: enter a member galaxy from the cosmic cluster view
        path: 'cluster-galaxy/:clusterSlug/:memberId',
        name: 'cluster-galaxy',
        component: () => import('src/pages/ClusterGalaxyPage.vue'),
        meta: { title: 'Galaxy Interior' },
        props: true,
      },
      {
        // Cluster star system view: orrery of a single star + planets before descending
        path: 'cluster-system/:clusterSlug/:memberId/:systemIdx',
        name: 'cluster-system',
        component: () => import('src/pages/ClusterSystemPage.vue'),
        meta: { title: 'Star System · Local View' },
        props: true,
      },
      {
        // Cluster world surface: planet surface generated from cluster member galaxy star system
        path: 'cluster-surface/:clusterSlug/:memberId/:systemIdx',
        name: 'cluster-surface',
        component: () => import('src/pages/ClusterSurfacePage.vue'),
        meta: { title: 'Cluster World' },
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
        meta: { title: 'Networks · Exotopia' },
      },
      {
        path: 'cve_alerts',
        name: 'cve_alerts',
        component: () => import('src/pages/SecAlertsQueuePage.vue'),
        meta: { title: 'CVEs · ALERTS RELAY' },
      },
      {
        path: 'glossary',
        name: 'glossary',
        component: () => import('src/pages/GlossaryPage.vue'),
        meta: { title: 'Glossary' },
      },
      {
        path: 'eco-ops/:area?',
        name: 'eco-ops',
        component: () => import('src/pages/EcoOpsPage.vue'),
        meta: { title: 'Eco Ops' },
      },
      {
        path: 'eco-library',
        name: 'eco-library',
        component: () => import('src/pages/EcoLibrary.vue'),
        meta: { title: 'Eco Library' },
      },
      {
        path: 'eco-ledger',
        name: 'eco-ledger',
        component: () => import('src/pages/EcoLedgerPage.vue'),
        meta: { title: 'Eco Ledger · Field Record' },
      },
      {
        path: 'onboard',
        name: 'onboard',
        component: () => import('src/pages/OnboardPage.vue'),
        meta: { title: 'Get Started · Exotopia' },
      },
      {
        path: 'data-coverage',
        name: 'data-coverage',
        component: () => import('src/pages/DataCoveragePage.vue'),
        meta: { title: 'Data Coverage · Exotopia' },
      },
      {
        path: 'admin',
        name: 'admin',
        component: () => import('src/pages/AdminPage.vue'),
        meta: { title: 'Admin · Configuration' },
      },
      {
        path: 'learn',
        name: 'learn',
        component: () => import('src/pages/LearnPage.vue'),
        meta: { title: 'Knowledge Quizzes' },
      },
      {
        path: 'docs',
        name: 'docs',
        component: () => import('src/pages/DocPage0.vue'),
        meta: { title: 'Docs' },
      },
      {
        path: 'pon-ink',
        name: 'pon-ink',
        component: () => import('src/pages/PonInkPage.vue'),
        meta: { title: 'PON.INK · Settlement Registry' },
      },
      // Catch-all — must be inside MainLayout so ErrorNotFound gets a QLayout ancestor
      {
        path: ':catchAll(.*)*',
        component: () => import('src/pages/ErrorNotFound.vue'),
      },
    ],
  },
]

export default routes
