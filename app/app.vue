<template>
  <div class="qipao-app">
    <!-- 顶部导航栏 -->
    <TopNav />

    <!-- 右侧垂直导航（北斗七星） -->
    <SideNav />

    <!-- 主内容区 -->
    <main class="main-content">
      <!-- 数据库展示区域 -->
      <DatabaseSection />

      <!-- 旗袍传承视频区域 -->
      <HeritageVideo />

      <!-- 八卦导航盘 -->
      <BaguaNav />

      <!-- 盘扣入口区域 -->
      <PankouSection />

      <!-- 色控展览入口区域 -->
      <SeKongSection />

      <!-- 旗袍样式与派系区域 -->
      <StylesSection />

      <!-- 图片展示区域 -->
      <GallerySection />

      <!-- 页脚 -->
      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-grid">
            <div class="footer-col animate-fade-up">
              <h3 class="footer-title">关于我们</h3>
              <p class="footer-text">
                致力于保护和传承旗袍这一珍贵的非物质文化遗产。
                通过数字化手段，让东方美学在现代绽放新的光彩。
              </p>
            </div>

            <div class="footer-col animate-fade-up" style="animation-delay: 0.1s">
              <h3 class="footer-title">联系方式</h3>
              <div class="contact-item">
                <span class="label">邮箱</span>
                <a href="mailto:heritage@qipao-db.cn" class="value">heritage@qipao-db.cn</a>
              </div>
              <div class="contact-item">
                <span class="label">电话</span>
                <span class="value">+86 021 1234 5678</span>
              </div>
            </div>

            <div class="footer-col animate-fade-up" style="animation-delay: 0.2s">
              <h3 class="footer-title">关注我们</h3>
              <div class="social-links">
                <a href="#" class="social-link group">
                  <span class="social-name">微博</span>
                  <span class="social-line"></span>
                </a>
                <a href="#" class="social-link group">
                  <span class="social-name">微信</span>
                  <span class="social-line"></span>
                </a>
                <a href="#" class="social-link group">
                  <span class="social-name">抖音</span>
                  <span class="social-line"></span>
                </a>
              </div>
            </div>
          </div>

          <div class="footer-bottom">
            <p class="copyright">
              © 2026 色控旗袍数据库 Qipao Database | 非物质文化遗产数字化保护项目
            </p>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
// 导入样式
import '~/assets/styles/main.css'
</script>

<style scoped>
.qipao-app {
  min-height: 100vh;
  background: var(--color-bg-main);
  position: relative;
}

/* ==================== 主内容区域 ==================== */
.main-content {
  padding-top: var(--header-height);
  /* 为顶部导航留出空间 */
  padding-right: 240px;
  /* 为侧边导航留出空间 */
  min-height: 100vh;
  transition: padding var(--transition-normal);
}

/* ==================== 页脚样式 ==================== */
.site-footer {
  background: var(--color-bg-dark);
  color: var(--color-cream-dim);
  padding: var(--spacing-2xl) 0 var(--spacing-lg);
  position: relative;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}

.footer-container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 0 var(--spacing-lg);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.footer-title {
  font-family: var(--font-serif-cn);
  font-size: 1.25rem;
  color: var(--color-gold);
  margin-bottom: var(--spacing-md);
  letter-spacing: 0.1em;
}

.footer-text {
  font-size: 0.95rem;
  line-height: 1.8;
  color: var(--color-text-muted);
  max-width: 300px;
}

.contact-item {
  display: flex;
  align-items: baseline;
  margin-bottom: var(--spacing-sm);
  font-size: 0.95rem;
}

.contact-item .label {
  color: var(--color-text-muted);
  width: 60px;
}

.contact-item .value {
  color: var(--color-cream);
  text-decoration: none;
  transition: color var(--transition-fast);
}

.contact-item .value:hover {
  color: var(--color-gold);
}

/* Social Links */
.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.social-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  color: var(--color-cream);
  width: fit-content;
}

.social-name {
  font-size: 0.95rem;
  transition: transform var(--transition-fast);
}

.social-line {
  width: 0;
  height: 1px;
  background: var(--color-gold);
  transition: width var(--transition-normal);
}

.social-link:hover .social-name {
  transform: translateX(5px);
  color: var(--color-gold);
}

.social-link:hover .social-line {
  width: 30px;
}

/* Bottom */
.footer-bottom {
  padding-top: var(--spacing-lg);
  text-align: center;
}

.copyright {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: var(--color-text-muted);
  letter-spacing: 0.05em;
  opacity: 0.6;
}

/* ==================== 响应式 ==================== */
@media (max-width: 1200px) {
  .main-content {
    padding-right: 0;
    /* 侧边导航在小屏隐藏，取消右侧留白 */
  }
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .footer-text {
    max-width: 100%;
  }
}
</style>
