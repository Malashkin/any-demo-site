<script setup lang="ts">
import { useRoute } from 'vue-router'
import { categories } from '../config/categories'
import { computed } from 'vue'

const route = useRoute()
const categoryId = route.params.category as string
const categoryConfig = computed(() => categories.find(c => c.id === categoryId))
</script>

<template>
  <div class="catalog-view">
    <div class="container" v-if="categoryConfig">
      <button @click="$router.push('/')" class="back-btn">← Назад</button>
      <h1 :style="{ color: categoryConfig.themeColor }">{{ categoryConfig.title }}</h1>
      <div class="demo-features">
        <div class="feature-card" v-if="categoryConfig.features.search">
          <h3>Поиск</h3>
          <p>Демонстрация умного поиска</p>
        </div>
        <div class="feature-card" v-if="categoryConfig.features.recommendations">
          <h3>Рекомендации</h3>
          <p>Персональные рекомендации</p>
        </div>
        <div class="feature-card" v-if="categoryConfig.features.review">
          <h3>Ревью</h3>
          <p>Саммари отзывов</p>
        </div>
        <div class="feature-card" v-if="categoryConfig.features.neurocart">
          <h3>Нейрокарт</h3>
          <p>Умное описание</p>
        </div>
      </div>
      
      <div class="product-list-mock">
        <router-link to="/product/1" class="product-card">
          <div class="product-image"></div>
          <div class="product-info">
            <h4>Пример товара 1</h4>
            <p>Описание товара...</p>
          </div>
        </router-link>
        <router-link to="/product/2" class="product-card">
          <div class="product-image"></div>
          <div class="product-info">
            <h4>Пример товара 2</h4>
            <p>Описание товара...</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="container" v-else>
      <h1>Категория не найдена</h1>
    </div>
  </div>
</template>

<style scoped>
.catalog-view {
  padding: 40px 0;
}

.back-btn {
  background: none;
  border: none;
  color: #666;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
  margin-bottom: 20px;
  font-family: 'Inter', sans-serif;
  transition: color 0.2s;
}

.back-btn:hover {
  color: #000;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
}

.demo-features {
  display: flex;
  gap: 20px;
  margin: 40px 0;
}

.feature-card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 12px;
  flex: 1;
}

.product-list-mock {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s;
}

.product-card:hover {
  transform: translateY(-4px);
}

.product-image {
  height: 200px;
  background: #eee;
}

.product-info {
  padding: 16px;
}
</style>
