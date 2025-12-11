<script setup lang="ts">
import { ref } from 'vue'

const primaryFilters = [
  { label: 'Кейсы', count: 96, active: true },
  { label: 'Новости', count: 11, active: false },
  { label: 'Статьи', count: 73, active: false },
  { label: 'Видео', count: 9, active: false },
  { label: 'Календарь мероприятий', count: 0, active: false },
]

const secondaryFilters = [
  { label: 'Индустрия' },
  { label: 'Продукты' },
]
</script>

<template>
  <section class="filters">
    <div class="container">
      <div class="primary-filters">
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
      
      <div class="secondary-filters">
        <button 
          v-for="filter in secondaryFilters" 
          :key="filter.label"
          class="sec-filter-btn"
        >
          {{ filter.label }}
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

.secondary-filters {
  display: flex;
  gap: 32px;
}

.sec-filter-btn {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  color: #555555; /* Approximate from description */
  font-weight: 400;
}
</style>
