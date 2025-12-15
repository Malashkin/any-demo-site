<script setup lang="ts">
import AppLogo from './AppLogo.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <div class="logo-icon">
          <div class="logo-bg">
            <AppLogo />
          </div>
        </div>
        <span class="logo-text">anyDemo</span>
      </a>
      <a href="https://t.me/+yyzYW1JzNNtjMmU6" class="telegram-link" target="_blank">
        <span class="tg-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.665 3.333L3.333 10.665L9.333 13.333L18.665 6.665L11.333 14.665L16.665 18.665L20.665 3.333Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
        Узнать больше в Telegram
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 72px;
  display: flex;
  align-items: center;
  background-color: #000000;
  border-bottom: 1px solid #333;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon {
  display: flex;
  align-items: center;
}

.logo-bg {
  background-color: #fff;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.telegram-link {
  color: #fff;
  text-decoration: none;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #748AF6;
  padding: 8px 16px;
  border-radius: 20px;
}

.telegram-link:hover {
  opacity: 0.9;
  background-color: #5b73e8;
  color: #fff;
}

.tg-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.logo-text {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #fff;
  letter-spacing: -0.02em;
}

.nav ul {
  display: flex;
  gap: 40px;
}

.nav-item a {
  font-weight: 600;
  font-size: 12px;
  color: var(--color-text-white);
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.2s;
}

.nav-item a:hover {
  color: rgba(255, 255, 255, 0.8);
}

.dropdown-arrow {
  font-size: 10px;
}

.contact-block {
  display: flex;
  align-items: center;
  gap: 24px;
}

.phone-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.phone-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.phone-icon {
  color: var(--color-primary-orange);
  font-size: 14px;
}

.phone-number {
  font-weight: 600;
  font-size: 12px;
  color: var(--color-text-white);
}

.phone-subtext {
  font-size: 12px;
  color: #A1A1A1;
  margin-top: 2px;
}

.cta-button {
  background-color: var(--color-primary-orange);
  color: var(--color-text-white);
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 16px;
  transition: opacity 0.2s;
}

.cta-button:hover {
  opacity: 0.9;
}
</style>
