<script setup lang="ts">
const categories = [
  'All', 'Ремонт', 'Алкоголь', 'Продукты питания', 'Ювелирные товары',
  'Электроника и бытовая техника', 'Косметика и гигиена',
  'Одежда и обувь', 'Детские товары, материнство',
  'Аптеки', 'Книги и канцтовары', 'Маркетплейсы',
  'Подарки', 'Автоиндустрия', 'Секс-шопы',
  'Товары для животных', 'Туризм'
]

const activeCategory = 'All'
</script>

<template>
  <section class="categories">
    <div class="container">
      <ul class="category-list">
        <li v-for="cat in categories" :key="cat">
          <a href="#" class="category-link" :class="{ active: cat === activeCategory }">
            {{ cat }}
          </a>
        </li>
      </ul>
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
