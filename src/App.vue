<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <AppHeader />
  <main>
    <router-view />
  </main>
</template>

<style scoped>
/* No specific styles needed here as components are self-contained */
</style>
