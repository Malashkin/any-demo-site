<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'

</script>

<template>
  <main>
    <AppHeader />
    <router-view />
    <AppFooter />
  </main>
</template>

<style scoped>
/* No specific styles needed here as components are self-contained */
</style>
