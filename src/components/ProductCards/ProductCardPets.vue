<script setup lang="ts">
import type { Product } from '../../types/Product'

defineProps<{
  product: Product
}>()

// Extract weight/size variants from description
function getVariants(description?: string): string[] {
  if (!description) return []
  const match = description.match(/Характеристика:\s*([^,]+)/i)
  if (match) {
    return [match[1].trim()]
  }
  return []
}

// Calculate discount percentage
function getDiscount(price: number, oldPrice?: number): number {
  if (!oldPrice || oldPrice <= price) return 0
  return Math.round(((oldPrice - price) / oldPrice) * 100)
}
</script>

<template>
  <div class="product-card-pets">
    <div class="product-image">
      <img v-if="product.image" :src="product.image" :alt="product.name" />
      <div v-if="product.oldPrice" class="discount-badge">
        -{{ getDiscount(product.price, product.oldPrice) }}%
      </div>
      <div class="age-badge">1+</div>
    </div>
    
    <div class="product-content">
      <div class="product-price">
        <span class="current-price">{{ product.price }} ₽</span>
        <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} ₽</span>
      </div>
      
      <h4 class="product-name">{{ product.name }}</h4>
      
      <div v-if="getVariants(product.description).length > 0" class="product-variants">
        <button 
          v-for="(variant, index) in getVariants(product.description)" 
          :key="index"
          class="variant-chip"
        >
          {{ variant }}
        </button>
      </div>
      
      <div v-if="product.oldPrice" class="damaged-info">
        {{ getVariants(product.description)[0] }} (поврежденa упаковка, уценка {{ getDiscount(product.price, product.oldPrice) }}%)
      </div>
      
      <button class="add-to-cart">В КОРЗИНУ</button>
    </div>
  </div>
</template>

<style scoped>
.product-card-pets {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
}

.product-card-pets:hover {
  transform: translateY(-4px);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
}

.product-image {
  position: relative;
  height: 280px;
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
  padding: 16px;
}

.discount-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #5856D6;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 14px;
}

.age-badge {
  position: absolute;
  top: 12px;
  right: 12px;
  background: white;
  color: #5856D6;
  border: 2px solid #5856D6;
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 14px;
}

.product-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.product-price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
}

.current-price {
  font-size: 24px;
  font-weight: 700;
  color: #000;
}

.old-price {
  font-size: 16px;
  color: #999;
  text-decoration: line-through;
}

.product-name {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
  color: #000;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: 63px;
}

.product-variants {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 8px;
}

.variant-chip {
  background: #F5F5F5;
  border: 1px solid #E0E0E0;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Inter', sans-serif;
}

.variant-chip:hover {
  background: #E8E8E8;
  border-color: #5856D6;
}

.damaged-info {
  font-size: 12px;
  color: #666;
  margin-bottom: 12px;
  line-height: 1.4;
}

.add-to-cart {
  width: 100%;
  background: #5856D6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 14px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: auto;
  font-family: 'Inter', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.add-to-cart:hover {
  background: #4745B8;
}

.add-to-cart:active {
  transform: scale(0.98);
}
</style>
