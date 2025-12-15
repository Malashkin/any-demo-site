<script setup lang="ts">
import AppHero from '../components/AppHero.vue'
import FilterBar from '../components/FilterBar.vue'
import CategoryList from '../components/CategoryList.vue'
import { ref } from 'vue'

const activeTab = ref('industries')
</script>

<template>
  <div class="home-view">
    <AppHero />
    <FilterBar :active-tab="activeTab" @update:active-tab="activeTab = $event" />
    <CategoryList :active-tab="activeTab" />
  </div>
</template>
