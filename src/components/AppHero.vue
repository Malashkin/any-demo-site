<script setup lang="ts">
// No logic needed for now
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="line-1">Блог any.</span>
          <br />
          <span class="line-2">Истории наших партнеров</span>
        </h1>
        <p class="hero-description">
          Рассказываем, как платформа any
          <br />
          повлияла на бизнес наших партнеров
        </p>
      </div>
      
      <a href="#" class="telegram-btn">
        <span class="tg-icon">
             <!-- Simple Telegram Plane Icon -->
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.665 3.333L3.333 10.665L9.333 12.665L18.665 5.333L11.333 14.665L17.333 16.665L20.665 3.333Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        Узнать больше в телеграм-канале
      </a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  padding-top: 72px;
  padding-bottom: 40px;
  background-color: var(--color-bg-body);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.hero-title {
  font-family: 'Manrope', sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 1.1;
  color: var(--color-primary-blue);
  margin-bottom: 24px;
}

.hero-description {
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.4;
  color: var(--color-text-dark);
}

.telegram-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--color-primary-blue);
  color: var(--color-text-white);
  padding: 10px 20px;
  border-radius: 20px;
  font-weight: 500;
  font-size: 16px;
  height: 40px;
  text-decoration: none;
  transition: opacity 0.2s;
  margin-top: 10px; /* Align slightly with the top of the title or as per visual */
}

.telegram-btn:hover {
  opacity: 0.9;
}

.tg-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
}

.tg-icon svg {
    width: 14px;
    height: 14px;
}
</style>
