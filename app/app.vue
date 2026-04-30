<template>
  <div class="qipao-app">
    <TopNav />
    <SideNav />

    <main class="main-content">
      <NuxtPage />

      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-heading">
            <h2 class="footer-title">????</h2>
            <NuxtLink to="/disclaimer" class="disclaimer-link">???????</NuxtLink>
            <div class="footer-divider"></div>
          </div>

          <div class="footer-grid">
            <p class="footer-item">??????????X?????????????</p>
            <p class="footer-item">????????????2026?????</p>
          </div>

          <p class="footer-note">???????????????/??????????LAB??</p>

          <a href="mailto:sekongqipao2026@163.com" class="footer-mail">
            E-MAIL?sekongqipao2026@163.com
          </a>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
import '~/assets/styles/main.css'
</script>

<style scoped>
.qipao-app {
  min-height: 100vh;
  background: var(--color-bg-main);
  position: relative;
}

.main-content {
  padding-top: var(--header-height);
  padding-right: 0;
  min-height: 100vh;
  transition: padding var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.site-footer {
  margin-top: auto;
  background: #151515;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.footer-container {
  width: min(1400px, calc(100% - 80px));
  margin: 0 auto;
  padding: 38px 0 44px;
  text-align: center;
}

.footer-heading {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.footer-title {
  margin: 0;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(2.5rem, 4vw, 4rem);
  font-weight: 700;
  letter-spacing: 0;
  line-height: 1.1;
}

.disclaimer-link {
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(1.6rem, 2vw, 2.3rem);
  text-decoration: none;
  line-height: 1.2;
}

.disclaimer-link:hover {
  opacity: 0.82;
}

.footer-divider {
  width: min(700px, 70vw);
  height: 2px;
  background: rgba(255, 255, 255, 0.78);
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px 64px;
  align-items: center;
  margin: 54px auto 38px;
}

.footer-item {
  margin: 0;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(1.5rem, 2vw, 2rem);
  line-height: 1.55;
}

.footer-note {
  margin: 0 0 30px;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(1.45rem, 1.95vw, 1.95rem);
  line-height: 1.55;
}

.footer-mail {
  color: #fff;
  font-size: clamp(1.45rem, 1.95vw, 1.9rem);
  text-decoration: none;
  letter-spacing: 0;
}

.footer-mail:hover {
  opacity: 0.82;
}

@media (max-width: 1200px) {
  .main-content {
    padding-right: 0;
  }
}

@media (max-width: 900px) {
  .footer-container {
    width: min(100%, calc(100% - 32px));
    padding: 32px 0 36px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 18px;
    margin: 38px auto 28px;
  }

  .footer-divider {
    width: min(100%, 520px);
  }
}
</style>
