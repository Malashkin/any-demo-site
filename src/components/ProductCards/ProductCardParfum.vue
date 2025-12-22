<template>
  <div class="product-card-parfum" @click="handleCardClick">
    <div class="card-image-container">
      <div v-if="discount" class="discount-badge" :class="{ 'hit': isHit }">
        -{{ discount }}%
      </div>
      <div v-if="isHit" class="hit-badge">ХИТ</div>
      <img v-if="product.image" :src="product.image" :alt="product.name" class="product-image" />
      <div v-else class="no-image">Нет фото</div>
    </div>
    
    <div class="card-content">
      <div class="product-vendor" v-if="product.vendor">{{ product.vendor }}</div>
      <div class="product-name" :title="product.name">{{ product.name }}</div>
      
      <div class="card-bottom">
        <div class="price-container">
          <div class="current-price">{{ product.price }} ₽</div>
          <div v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} ₽</div>
        </div>
        
        <button 
          @click="handleAddToCart" 
          class="add-to-cart-btn"
          :class="{ added: addedToCart }"
        >
          <span v-if="!addedToCart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span v-else>✓</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Product } from '../../types/Product'

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  openModal: [product: Product]
}>()

const addedToCart = ref(false)

const discount = computed(() => {
  if (!props.product.oldPrice || props.product.oldPrice <= props.product.price) return 0
  return Math.round(((props.product.oldPrice - props.product.price) / props.product.oldPrice) * 100)
})

const isHit = computed(() => {
  // Mock logic for "Hit" badge, can be based on params or random
  return Math.random() > 0.8
})

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

<style scoped>
.product-card-parfum {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  height: 100%;
  border: 1px solid #f0f0f0;
  cursor: pointer;
}

.product-card-parfum:hover {
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  transform: translateY(-4px);
}

.card-image-container {
  position: relative;
  padding-top: 100%; /* 1:1 Aspect Ratio */
  background: #fff;
  overflow: hidden;
}

.product-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
  transition: transform 0.3s;
}

.product-card-parfum:hover .product-image {
  transform: scale(1.05);
}

.discount-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #FF4081;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  z-index: 2;
}

.hit-badge {
  position: absolute;
  top: 40px;
  left: 12px;
  background: #8BC34A;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  z-index: 2;
  text-transform: uppercase;
}

.card-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.product-vendor {
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  margin-bottom: 4px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

.product-name {
  font-size: 14px;
  color: #333;
  margin-bottom: 12px;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
}

.card-bottom {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: auto;
}

.price-container {
  display: flex;
  flex-direction: column;
}

.current-price {
  font-size: 18px;
  font-weight: 700;
  color: #333;
}

.old-price {
  font-size: 13px;
  color: #999;
  text-decoration: line-through;
  margin-top: 2px;
}

.add-to-cart-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #E91E63;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(233, 30, 99, 0.3);
}

.add-to-cart-btn:hover {
  background: #D81B60;
  transform: scale(1.1);
}

.add-to-cart-btn.added {
  background: #4CAF50;
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(76, 175, 80, 0.3);
}

.no-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f9f9f9;
  color: #ccc;
  font-size: 14px;
}
</style>
