<script setup lang="ts">



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
