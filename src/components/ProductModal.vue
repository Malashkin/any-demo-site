<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import type { Product } from '../types/Product'

const props = defineProps<{
  product: Product | null
  isOpen: boolean
}>()

const emit = defineEmits<{
  close: []
}>()

const quantity = ref(1)
const addedToCart = ref(false)
const addedToCompare = ref(false)
const addedToFavorites = ref(false)

function handleClose() {
  emit('close')
}

function handleBackdropClick(event: MouseEvent) {
  if (event.target === event.currentTarget) {
    handleClose()
  }
}

function handleEscape(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    handleClose()
  }
}

function addToCart() {
  addedToCart.value = true
  setTimeout(() => {
    addedToCart.value = false
  }, 2000)
}

function addToCompare() {
  addedToCompare.value = true
  setTimeout(() => {
    addedToCompare.value = false
  }, 2000)
}

function addToFavorites() {
  addedToFavorites.value = true
  setTimeout(() => {
    addedToFavorites.value = false
  }, 2000)
}

function incrementQuantity() {
  quantity.value++
}

function decrementQuantity() {
  if (quantity.value > 1) {
    quantity.value--
  }
}

function getDiscount(price: number, oldPrice?: number): number {
  if (!oldPrice || oldPrice <= price) return 0
  return Math.round(((oldPrice - price) / oldPrice) * 100)
}

// Lock/unlock body scroll when modal opens/closes
watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
  // Ensure scroll is restored when component unmounts
  document.body.style.overflow = ''
})
</script>

<template>
  <Transition name="modal">
    <div v-if="isOpen && product" class="modal-backdrop" @click="handleBackdropClick">
      <div class="modal-container">
        <button class="modal-close" @click="handleClose">×</button>
        
        <div class="modal-content">
          <!-- Left: Product Image -->
          <div class="modal-image-section">
            <div class="modal-image">
              <img v-if="product.image" :src="product.image" :alt="product.name" />
              <div v-else class="no-image">Нет изображения</div>
            </div>
          </div>
          
          <!-- Right: Product Details -->
          <div class="modal-details-section">
            <div class="modal-header">
              <h2>{{ product.name }}</h2>
              <p v-if="product.vendor" class="vendor">{{ product.vendor }}</p>
            </div>
            
            <div class="modal-price">
              <div class="price-row">
                <span class="current-price">{{ product.price }} ₽</span>
                <span v-if="product.oldPrice" class="old-price">{{ product.oldPrice }} ₽</span>
              </div>
              <div v-if="product.oldPrice" class="discount-badge">
                -{{ getDiscount(product.price, product.oldPrice) }}%
              </div>
            </div>

            <!-- Quantity Selector and Add to Cart -->
            <div class="actions-group-primary">
              <div class="quantity-selector">
                <div class="quantity-controls">
                  <button @click="decrementQuantity" class="quantity-btn">−</button>
                  <span class="quantity-value">{{ quantity }}</span>
                  <button @click="incrementQuantity" class="quantity-btn">+</button>
                </div>
              </div>
              
              <button 
                @click="addToCart" 
                class="action-btn primary"
                :class="{ added: addedToCart }"
              >
                <span v-if="!addedToCart">Добавить в корзину</span>
                <span v-else>✓ Добавлено</span>
              </button>
            </div>
            
            <!-- Secondary Actions -->
            <div class="actions-group-secondary">
              <button 
                @click="addToCompare" 
                class="action-btn secondary"
                :class="{ added: addedToCompare }"
              >
                <span v-if="!addedToCompare">Сравнить</span>
                <span v-else>✓ В сравнении</span>
              </button>
              
              <button 
                @click="addToFavorites" 
                class="action-btn secondary"
                :class="{ added: addedToFavorites }"
              >
                <span v-if="!addedToFavorites">В избранное</span>
                <span v-else>✓ В избранном</span>
              </button>
            </div>
            
            <div class="modal-description">
              <h3>Описание</h3>
              <p>{{ product.name }}</p>
            </div>
            
            <div v-if="product.params && product.params.length > 0" class="modal-params">
              <h3>Характеристики</h3>
              <ul class="params-list">
                <li v-for="(param, index) in product.params" :key="index" class="param-item">
                  <span class="param-name">{{ param.name }}:</span>
                  <span class="param-value">{{ param.value }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal-container {
  background: white;
  border-radius: 16px;
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 40px;
  height: 40px;
  border: none;
  background: #f5f5f5;
  border-radius: 50%;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}

.modal-close:hover {
  background: #e0e0e0;
  color: #000;
}

.modal-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 40px;
}

@media (max-width: 768px) {
  .modal-content {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 24px;
  }
}

.modal-image-section {
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-image {
  width: 100%;
  aspect-ratio: 1;
  background: #f5f5f5;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 20px;
}

.no-image {
  color: #999;
  font-size: 16px;
}

.modal-details-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal-header h2 {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 600;
  line-height: 1.3;
  color: #000;
}

.vendor {
  margin: 0;
  font-size: 16px;
  color: #666;
}

.modal-price {
  display: flex;
  align-items: center;
  gap: 12px;
}

.price-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.current-price {
  font-size: 32px;
  font-weight: 700;
  color: #000;
}

.old-price {
  font-size: 20px;
  color: #999;
  text-decoration: line-through;
}

.discount-badge {
  background: #5856D6;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 16px;
}

.modal-description h3 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

.modal-description p {
  margin: 0;
  font-size: 15px;
  line-height: 1.6;
  color: #666;
}

.modal-params h3 {
  margin: 0 0 12px 0;
  font-size: 18px;
  font-weight: 600;
  color: #000;
}

.params-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.param-item {
  display: flex;
  gap: 8px;
  padding: 8px 12px;
  background: #f5f5f5;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1.4;
}

.param-name {
  font-weight: 600;
  color: #333;
  min-width: 140px;
  flex-shrink: 0;
}

.param-value {
  color: #666;
}

.quantity-selector {
  display: flex;
  align-items: center;
  gap: 16px;
}

.quantity-label {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

.quantity-controls {
  display: flex;
  align-items: center;
  gap: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 4px;
}

.quantity-btn {
  width: 32px;
  height: 32px;
  border: none;
  background: #f5f5f5;
  border-radius: 6px;
  font-size: 20px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
}

.quantity-btn:hover {
  background: #e0e0e0;
}

.quantity-value {
  min-width: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
}

.modal-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: auto;
}

.action-btn {
  padding: 16px 24px;
  border: none;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.action-btn.primary {
  background: #5856D6;
  color: white;
}

.action-btn.primary:hover {
  background: #4745B8;
}

.action-btn.primary.added {
  background: #4CAF50;
  transform: scale(1.02);
}

.action-btn.secondary {
  background: white;
  color: #5856D6;
  border: 2px solid #5856D6;
}

.action-btn.secondary:hover {
  background: #f5f5ff;
}

.action-btn.secondary.added {
  background: #4CAF50;
  color: white;
  border-color: #4CAF50;
  transform: scale(1.02);
}

.actions-group-primary {
  display: flex;
  gap: 16px;
  margin-top: 20px;
}

.actions-group-primary .quantity-selector {
  flex-shrink: 0;
}

.actions-group-primary .action-btn {
  flex-grow: 1;
}

.actions-group-secondary {
  display: flex;
  gap: 16px;
  margin-top: 0px;
  margin-bottom: 16px;
}

.actions-group-secondary .action-btn {
  flex: 1;
  padding: 12px 16px;
  font-size: 14px;
}

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-container,
.modal-leave-active .modal-container {
  transition: transform 0.3s, opacity 0.3s;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(0.9);
  opacity: 0;
}
</style>
