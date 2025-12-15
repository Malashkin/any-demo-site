<script setup lang="ts">
// No logic needed for now
</script>

<template>
  <section class="hero">
    <div class="container">
      <div class="hero-content">
        <h1 class="hero-title">
          <span class="line-2"><br />Демонстраниция возможностей<br /> anyPlatform</span>
        </h1>
      </div>
      
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
