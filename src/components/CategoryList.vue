<script setup lang="ts">
import { categories } from '../config/categories'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeCategory = computed(() => route.params.category || 'All')

const props = defineProps<{
  activeTab: string
}>()

const products = [
  { id: 'anyquery', name: 'AI-Поиск и поиск по фото (anyQuery)' },
  { id: 'anyrecs', name: 'AI-Рекомендации (anyRecs)' },
  { id: 'anyreviews', name: 'AI-контент (anyReviews)' },
]
</script>

<template>
  <section class="categories">
    <div class="container">
      <ul class="category-list" v-if="props.activeTab === 'industries'">
        <li v-for="cat in categories" :key="cat.id">
          <router-link :to="{ name: 'catalog', params: { category: cat.id } }" class="category-link" :class="{ active: cat.id === activeCategory }">
            {{ cat.name }}
          </router-link>
        </li>
      </ul>

      <ul class="category-list" v-if="props.activeTab === 'products'">
        <li v-for="prod in products" :key="prod.id">
          <a href="#" class="category-link">
            {{ prod.name }}
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.categories {
  margin-top: 20px;
  margin-bottom: 60px;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.category-list {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 32px; /* Row gap 24px, Col gap 32px */
}

.category-link {
  font-family: 'Inter', sans-serif;
  font-size: 14px; /* 14-16px */
  color: #A1A1A1;
  transition: color 0.2s;
}

.category-link.active {
  color: var(--color-active-blue);
  font-weight: 400;
}

.category-link:hover {
  color: var(--color-active-blue);
}
</style>
