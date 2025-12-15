<script setup lang="ts">
const primaryFilters = []


const props = defineProps<{
  activeTab: string
}>()

const emit = defineEmits<{
  (e: 'update:active-tab', value: string): void
}>()

const tabs = [
  { id: 'industries', label: 'Индустрия' },
  { id: 'products', label: 'Продукты' },
]
</script>

<template>
  <section class="filters">
    <div class="container">
      <div class="primary-filters" v-if="primaryFilters.length > 0">
        <button 
          v-for="filter in primaryFilters" 
          :key="filter.label"
          class="filter-btn"
          :class="{ active: filter.active }"
        >
          <span class="filter-label">{{ filter.label }}</span>
          <span class="filter-count">{{ filter.count }}</span>
        </button>
      </div>
      
      <div class="toggle-filters">
        <button 
          v-for="tab in tabs" 
          :key="tab.id"
          class="toggle-btn"
          :class="{ active: props.activeTab === tab.id }"
          @click="emit('update:active-tab', tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.filters {
  margin-top: 40px;
  margin-bottom: 20px;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.primary-filters {
  display: flex;
  gap: 40px;
  border-bottom: 1px solid transparent; /* Placeholder for alignment if needed */
  margin-bottom: 24px;
}

.filter-btn {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: var(--color-text-dark); /* Default color for inactive */
  padding-bottom: 8px;
  border-bottom: 2px solid transparent;
  display: flex;
  gap: 6px;
  align-items: center;
  transition: all 0.2s;
}

.filter-btn.active {
  color: var(--color-active-blue);
  border-bottom-color: var(--color-active-blue);
  font-weight: 500;
}

.filter-count {
  color: var(--color-active-blue);
  font-weight: 500;
}

.filter-btn:not(.active) .filter-count {
  color: var(--color-active-blue);
}

.filter-btn:not(.active) .filter-label {
    color: #1A1A1A;
}

.toggle-filters {
  display: flex;
  gap: 32px;
}

.toggle-btn {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #555555;
  font-weight: 400;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}

.toggle-btn.active {
  color: var(--color-active-blue);
  font-weight: 500;
}
</style>
