<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const id = route.params.id
</script>

<template>
  <div class="product-view">
    <div class="container">
      <button @click="$router.back()" class="back-link">← Назад</button>
      
      <div class="product-details">
        <div class="product-image-large"></div>
        <div class="product-info-large">
          <h1>Товар #{{ id }}</h1>
          <p class="price">99 990 ₽</p>
          <button class="add-to-cart">В корзину</button>
          
          <div class="demo-features-pdp">
            <div class="feature-block">
              <h3>Нейрокарт</h3>
              <p>Умное описание товара сгенерированное AI</p>
            </div>
            <div class="feature-block">
              <h3>Ревью</h3>
              <p>Саммари отзывов покупателей</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 20px;
}

.back-link {
  display: inline-block;
  margin-bottom: 20px;
  color: #666;
  text-decoration: none;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  padding: 0;
}

.product-details {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
}

.product-image-large {
  height: 500px;
  background: #f0f0f0;
  border-radius: 20px;
}

.product-info-large h1 {
  font-size: 32px;
  margin-bottom: 16px;
}

.price {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 24px;
}

.add-to-cart {
  background: var(--color-primary-orange, #FF6B00);
  color: white;
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 40px;
}

.demo-features-pdp {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-block {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 12px;
  border-left: 4px solid #6366F1;
}
</style>
