<script setup lang="ts">
import { categories } from '../config/categories'
import { ref } from 'vue'



const props = defineProps<{
  activeTab: string
}>()

const products = [
  { 
    id: 'anyquery', 
    name: 'anyQuery',
    description: '— AI-поиск, который сам увеличивает конверсию. Снизит долю нулевых запросов до 1% и удержит покупателей на сайте. Проверено более чем в 700 магазинах.'
  },
  { 
    id: 'anyimage', 
    name: 'anyImages',
    description: '— Самые продвинутые AI-технологии в России для удобного поиска товаров по фото. Кнопка — прямо в строке поиска и в карточке товара.'
  },
  { 
    id: 'anyrecs', 
    name: 'anyRecs',
    description: '— AI-алгоритмы товарных рекомендаций для увеличения среднего чека. Персонализация индивидуально под каждого пользователя.'
  },
  { 
    id: 'anyreviews', 
    name: 'anyReviews',
    description: '— AI-суммаризация отзывов в карточке товара. Покажет преимущества товара в виде виджета и поможет быстрее принять решение о покупке.'
  },
]

const activeProductId = ref('anyquery')

const setActiveProduct = (id: string) => {
  activeProductId.value = id
}
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

      <div class="category-grid product-grid" v-if="props.activeTab === 'products'">
        <div 
          v-for="prod in products" 
          :key="prod.id"
          class="category-card product-card"
          :class="{ 'active': activeProductId === prod.id }"
          @click="setActiveProduct(prod.id)"
        >
          <div class="product-info">
            <div class="product-header">
              <span class="product-title">{{ prod.name }}</span>
              <svg 
                class="product-chevron"
                :class="{ 'active': activeProductId === prod.id }"
                width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 9L12 15L18 9" stroke="#0F1121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <p class="product-description" v-show="activeProductId === prod.id">{{ prod.description }}</p>
          </div>
        </div>
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

.product-grid {
  display: flex;
  flex-direction: column;
  gap: 0;
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
  --hover-color: transparent;
  align-items: flex-start;
  background: transparent;
  border: none;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  border-radius: 0;
  box-shadow: none;
  transition: all 0.3s ease;
  cursor: pointer;
  opacity: 0.5;
}

.product-card.active {
  opacity: 1;
  padding-bottom: 40px;
}

.product-card:hover {
  background: transparent;
  transform: none;
  box-shadow: none;
  border-color: #eee;
  opacity: 0.8;
}

.product-card.active:hover {
  opacity: 1;
}

.product-info {
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 800px;
  width: 100%;
}

.product-header {
  display: flex;
  align-items: center;
  gap: 16px;
  cursor: pointer;
}

.product-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 800;
  font-size: 64px;
  line-height: 1;
  color: #0F1121;
  letter-spacing: -0.02em;
  margin-bottom: 0;
}

.product-chevron {
  transition: transform 0.3s ease;
  opacity: 0.5;
}

.product-chevron.active {
  transform: rotate(180deg);
  opacity: 1;
}

.product-card:hover .product-chevron {
  opacity: 1;
}

.product-description {
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  color: #333;
  line-height: 1.4;
  margin: 0;
  font-weight: 400;
  max-width: 600px;
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
