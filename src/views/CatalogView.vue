```vue
<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { categories } from '../config/categories'
import { computed, ref, onMounted } from 'vue'
import { parseXMLFeed, loadProductsFromXml } from '../utils/xmlParser'
import type { Product } from '../types/Product'
import ProductCardPets from '../components/ProductCards/ProductCardPets.vue'
import ProductCardDefault from '../components/ProductCards/ProductCardDefault.vue'
import ProductCardParfum from '../components/ProductCards/ProductCardParfum.vue'
import ProductModal from '../components/ProductModal.vue'

const route = useRoute()
const router = useRouter()
const categoryId = computed(() => route.params.category as string)
const categoryConfig = computed(() => categories.find(c => c.id === categoryId.value))

const products = ref<Product[]>([])
const loading = ref(false)
const error = ref<string | null>(null)

// Modal state
const selectedProduct = ref<Product | null>(null)
const isModalOpen = ref(false)

function openProductModal(product: Product) {
  selectedProduct.value = product
  isModalOpen.value = true
}

function closeProductModal() {
  isModalOpen.value = false
  setTimeout(() => {
    selectedProduct.value = null
  }, 300)
}

// Pagination
const currentPage = ref(1)
const itemsPerPage = 40

const totalPages = computed(() => Math.ceil(products.value.length / itemsPerPage))
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return products.value.slice(start, end)
})

function goToPage(page: number) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Get card component based on category
const cardComponent = computed(() => {
  switch (categoryId.value) {
    case 'pets':
      return ProductCardPets
    case 'parfum':
      return ProductCardParfum
    default:
      return ProductCardDefault
  }
})

async function loadProducts() {
  if (!categoryId.value) return
  
  loading.value = true
  error.value = null
  products.value = [] // Clear previous products
  
  try {
    let feedUrl = ''
    if (categoryId.value === 'pets') {
      feedUrl = '/feeds/pets.xml'
    } else if (categoryId.value === 'parfum') {
      feedUrl = '/feeds/parfum.xml'
    } else {
      // For other categories, we might not have a feed yet
      feedUrl = '/feeds/pets.xml' 
    }
    
    products.value = await parseXMLFeed(feedUrl)
    currentPage.value = 1 // Reset to first page
  } catch (err) {
    error.value = 'Не удалось загрузить товары'
    console.error(err)
  } finally {
    loading.value = false
  }
}

// Watch for category changes
import { watch } from 'vue'
watch(() => route.params.category, () => {
  loadProducts()
})

onMounted(() => {
  loadProducts()
})
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
      
      
      <div v-if="categoryId === 'pets' || categoryId === 'parfum'">
        <div v-if="loading" class="loading">Загрузка товаров...</div>
        <div v-else-if="error" class="error">{{ error }}</div>
        <div v-else-if="products.length > 0">
          <div class="product-list" :class="`product-list-${categoryId}`">
            <component 
              :is="cardComponent"
              v-for="product in paginatedProducts" 
              :key="product.id"
              :product="product"
              @open-modal="openProductModal"
            />
          </div>
          
          <!-- Pagination Controls -->
          <div v-if="totalPages > 1" class="pagination">
            <button 
              @click="goToPage(currentPage - 1)" 
              :disabled="currentPage === 1"
              class="pagination-btn"
            >
              ← Предыдущая
            </button>
            
            <div class="pagination-pages">
              <button
                v-for="page in totalPages"
                :key="page"
                @click="goToPage(page)"
                :class="['pagination-page', { active: page === currentPage }]"
                v-show="Math.abs(page - currentPage) <= 2 || page === 1 || page === totalPages"
              >
                {{ page }}
              </button>
            </div>
            
            <button 
              @click="goToPage(currentPage + 1)" 
              :disabled="currentPage === totalPages"
              class="pagination-btn"
            >
              Следующая →
            </button>
          </div>
        </div>
        <div v-else class="no-products">Товары не найдены</div>
      </div>

      <div v-else class="product-list-mock">
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
    
    <!-- Product Modal -->
    <ProductModal 
      :product="selectedProduct" 
      :is-open="isModalOpen" 
      @close="closeProductModal" 
    />
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

.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

/* Pets category - 4 columns grid */
.product-list-pets {
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

@media (max-width: 1200px) {
  .product-list-pets {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .product-list-pets {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .product-list-pets {
    grid-template-columns: 1fr;
  }
}

.loading,
.error,
.no-products {
  text-align: center;
  padding: 40px;
  font-size: 18px;
  color: #666;
}

.error {
  color: #d32f2f;
}

/* Pagination */
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-top: 40px;
  padding: 20px 0;
}

.pagination-btn {
  padding: 10px 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
  background: #f5f5f5;
  border-color: #5856D6;
  color: #5856D6;
}

.pagination-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.pagination-pages {
  display: flex;
  gap: 8px;
}

.pagination-page {
  min-width: 40px;
  height: 40px;
  padding: 0 12px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  transition: all 0.2s;
}

.pagination-page:hover {
  background: #f5f5f5;
  border-color: #5856D6;
  color: #5856D6;
}

.pagination-page.active {
  background: #5856D6;
  border-color: #5856D6;
  color: white;
}

.product-card {
  border: 1px solid #eee;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
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
