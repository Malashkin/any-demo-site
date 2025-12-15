<script setup lang="ts">
import { categories } from '../config/categories'



const props = defineProps<{
  activeTab: string
}>()

const products = [
  { id: 'anyquery', name: 'AI-Поиск (anyQuery)' },
  { id: 'anyimage', name: 'Поиск по фото (anyImage)' },
  { id: 'anyrecs', name: 'AI-Рекомендации (anyRecs)' },
  { id: 'anyreviews', name: 'AI-контент (anyReviews)' },
]
</script>

<template>
  <section class="categories">
    <div class="container">
      <div class="category-grid" v-if="props.activeTab === 'industries'">
        <router-link 
          v-for="cat in categories" 
          :key="cat.id"
          :to="{ name: 'catalog', params: { category: cat.id } }" 
          class="category-card"
          :style="{ '--hover-color': cat.themeColor }"
        >
          <span class="category-name">{{ cat.name }}</span>
          <span class="category-arrow">→</span>
        </router-link>
      </div>

      <div class="category-grid" v-if="props.activeTab === 'products'">
        <a 
          v-for="prod in products" 
          :key="prod.id"
          href="#" 
          class="category-card product-card"
        >
          <span class="category-name">{{ prod.name }}</span>
          <span class="category-arrow">→</span>
        </a>
      </div>
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

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.category-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background-color: #F8F9FA;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.category-card:hover {
  background-color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
  border-color: var(--hover-color, var(--color-active-blue));
}

.category-name {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #1A1A1A;
  line-height: 1.4;
}

.category-arrow {
  font-size: 20px;
  color: #999;
  transition: color 0.3s;
}

.category-card:hover .category-arrow {
  color: var(--hover-color, var(--color-active-blue));
}

.product-card {
  --hover-color: var(--color-active-blue);
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
