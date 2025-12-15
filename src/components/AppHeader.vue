<script setup lang="ts">
import AppLogo from './AppLogo.vue'
</script>

<template>
  <header class="header">
    <div class="container">
      <a href="/" class="logo">
        <div class="logo-icon">
          <AppLogo />
        </div>
        <span class="logo-text">anyDemo</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: var(--color-bg-header);
  height: 80px;
  display: flex;
  align-items: center;
  color: var(--color-text-white);
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
}

.logo-text {
  font-weight: 700;
  font-size: 20px;
  color: var(--color-text-white);
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
