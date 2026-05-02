<template>
  <div class="qipao-app">
    <TopNav />
    <SideNav />

    <main class="main-content">
      <NuxtPage />

      <footer class="site-footer">
        <div class="footer-container">
          <NuxtLink to="/disclaimer" class="footer-title-link">
            <h2 class="footer-title">关于我们</h2>
          </NuxtLink>
          <div class="footer-divider"></div>
          <NuxtLink to="/disclaimer" class="disclaimer-link">版权与免责声明</NuxtLink>

          <div class="footer-grid">
            <p class="footer-item">湖南科技职业学院绒花X旗袍：非遗智创工坊项目成果</p>
            <p class="footer-item">湖南省教育厅教学教改基金2026年资助项目</p>
          </div>

          <p class="footer-note">解释权：长沙市色控服装有限公司/湖南科技职业学院色控LAB团队</p>

          <a href="mailto:sekongqipao2026@163.com" class="footer-mail">
            E-MAIL：sekongqipao2026@163.com
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
  background: #1a1a1a;
  color: #fff;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.footer-container {
  width: min(1400px, calc(100% - 80px));
  margin: 0 auto;
  padding: 32px 0 36px;
  text-align: center;
}

.footer-title-link {
  display: inline-block;
  color: inherit;
  text-decoration: none;
}

.footer-title {
  margin: 0 0 14px;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(1.8rem, 2.8vw, 2.6rem);
  font-weight: 700;
  letter-spacing: 0.15em;
  line-height: 1.2;
  transition: color var(--transition-fast);
}

.footer-title-link:hover .footer-title {
  color: var(--color-gold);
}

.footer-divider {
  width: min(520px, 55vw);
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 auto 14px;
}

.disclaimer-link {
  display: inline-block;
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-serif-cn);
  font-size: clamp(1.2rem, 1.6vw, 1.6rem);
  text-decoration: none;
  letter-spacing: 0.35em;
  line-height: 1.2;
}

.disclaimer-link:hover {
  color: #fff;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px 48px;
  align-items: center;
  margin: 36px auto 24px;
}

.footer-item {
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-serif-cn);
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  line-height: 1.5;
}

.footer-note {
  margin: 0 0 20px;
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-serif-cn);
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  line-height: 1.5;
}

.footer-mail {
  color: rgba(255, 255, 255, 0.9);
  font-family: var(--font-serif-cn);
  font-size: clamp(1.2rem, 1.5vw, 1.5rem);
  text-decoration: none;
  letter-spacing: 0;
}

.footer-mail:hover {
  color: #fff;
}

@media (max-width: 1200px) {
  .main-content {
    padding-right: 0;
  }
}

@media (max-width: 900px) {
  .footer-container {
    width: min(100%, calc(100% - 32px));
    padding: 28px 0 32px;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    gap: 14px;
    margin: 28px auto 20px;
  }

  .footer-divider {
    width: min(100%, 380px);
  }
}
</style>
