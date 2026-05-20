<template>
  <q-page class="q-pa-md">
    <div class="text-h5 text-blue-grey-2 q-mb-md">
      <q-icon name="eco" class="q-mr-sm text-positive" />
      Eco Ops
    </div>

    <q-banner class="glass-card q-mb-md text-blue-grey-3" icon="info">
      Field activity log for eco operations — waste, water quality, farming, transport, storage.
      Data sourced from <code>ot6.json</code> and linked to exolocation NFTs.
    </q-banner>

    <!-- TODO: activity table, check-in form, IPFS upload                      -->
    <!-- Port from reportal/app.js and checkin.html                            -->
    <!-- Bind to ot6.json activity schema (garbageMap, wqMap, farmMap, etc.)   -->

    <div class="text-caption text-blue-grey-5">Activity feed — coming soon.</div>
  </q-page>
</template>

<script setup lang="ts">
// TODO: load ot6.json, render activity list, connect to IPFS upload flow
</script>
