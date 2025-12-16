<script setup lang="ts">
import AppLogo from './AppLogo.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="logo-section">
          <div class="logo-icon">
            <div class="logo-bg">
              <AppLogo />
            </div>
          </div>
          <span class="logo-text">any</span>
        </div>
        
        <div class="legal-info">
          <p>
            <span style="font-weight: 600;">Юридический адрес:</span> 121205, город Москва, тер Инновационного Центра Сколково, Большой б-р, д. 42 стр. 1<br>
            <span style="font-weight: 600;">Фактический адрес: </span>улица Грузинский Вал, 7. Башня 2
          </p>
          <p>© ООО «Д Технолоджи», 2014-2025</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #000000;
  padding: 20px 0;
  color: #fff;
  margin-top: auto;
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo-section {
  display: flex;
  align-items: center;
  gap: 12px;
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

.logo-text {
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 22px;
  color: #fff;
  letter-spacing: -0.02em;
}

.legal-info {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  color: #999;
  line-height: 1.6;
  text-align: right;
}

.legal-info p {
  margin: 4px 0;
}
</style>
