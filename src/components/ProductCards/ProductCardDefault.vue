<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '../../types/Product'

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  openModal: [product: Product]
}>()

const addedToCart = ref(false)

function handleCardClick() {
  emit('openModal', props.product)
}

function handleAddToCart(event: Event) {
  event.stopPropagation()
  addedToCart.value = true
  setTimeout(() => {
    addedToCart.value = false
  }, 2000)
}
</script>

<template>
  <div class="product-card-default" @click="handleCardClick">
    <div class="product-image">
      <img v-if="product.image" :src="product.image" :alt="product.name" />
    </div>
    <div class="product-info">
      <h4>{{ product.name }}</h4>
      <p class="product-vendor" v-if="product.vendor">{{ product.vendor }}</p>
      <div class="product-price">
        <span class="price">{{ product.price }} ₽</span>
        <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} ₽</span>
      </div>
      <button 
        @click="handleAddToCart" 
        class="add-to-cart"
        :class="{ added: addedToCart }"
      >
        <span v-if="!addedToCart">В корзину</span>
        <span v-else>✓ Добавлено</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.product-card-default {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.product-card-default:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.product-image {
  height: 200px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.product-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-info h4 {
  margin: 0 0 8px 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-vendor {
  font-size: 14px;
  color: #666;
  margin: 4px 0;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  margin-bottom: 12px;
}

.price {
  font-size: 18px;
  font-weight: 700;
  color: #000;
}

.old-price {
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.add-to-cart {
  width: 100%;
  background: #5856D6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  margin-top: auto;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.add-to-cart:hover {
  background: #4745B8;
}

.add-to-cart.added {
  background: #4CAF50;
  transform: scale(1.05);
}
</style>
