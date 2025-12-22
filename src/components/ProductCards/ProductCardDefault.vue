<script setup lang="ts">
import type { Product } from '../../types/Product'

defineProps<{
  product: Product
}>()
</script>

<template>
  <router-link :to="`/product/${product.id}`" class="product-card-default">
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
    </div>
  </router-link>
</template>

<style scoped>
.product-card-default {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
  display: block;
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
</style>
