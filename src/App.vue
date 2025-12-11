<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import AppHero from './components/AppHero.vue'
import FilterBar from './components/FilterBar.vue'
import CategoryList from './components/CategoryList.vue'
</script>

<template>
  <AppHeader />
  <main>
    <AppHero />
    <FilterBar />
    <CategoryList />
  </main>
</template>

<style scoped>
/* No specific styles needed here as components are self-contained */
</style>
