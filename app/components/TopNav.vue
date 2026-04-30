<template>
  <nav class="top-nav glass">
    <div class="nav-container">
      <!-- Logo Area -->
      <div class="nav-left group">
        <div class="logo-wrapper">
          <div class="site-branding">
            <h1 class="site-title">
              <img src="/首页/logo.png" alt="Logo" class="site-logo-img" />
              <div class="site-text-info">
                <span class="text-highlight">旗袍数据库</span>
                <span class="text-en">SEKONG LAB</span>
              </div>
            </h1>
            <!-- 总量统计（绿色下划线）：交互式弹出 -->
            <div class="total-stats-wrapper">
              <button class="stats-trigger-btn" @click="showStatsModal = true">
                <span class="stats-text">旗袍库总量 3559</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Navigation (Search Box & Keywords) -->
      <div class="nav-center">
        <div class="search-container">
          <div class="search-wrapper">
            <input type="text" class="search-input" placeholder="搜索旗袍、颜色、款式..." />
            <button class="search-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
          <div class="search-keywords">
            <span class="keyword-label">推荐：</span>
            <a href="#" class="keyword-item">新中式旗袍</a>
            <a href="#" class="keyword-item">改良旗袍</a>
            <a href="#" class="keyword-item">小个子旗袍</a>
            <a href="#" class="keyword-item">日常旗袍</a>
            <a href="#" class="keyword-item">铜扣旗袍</a>
            <a href="#" class="keyword-item"> Vintage 旗袍</a>
            <a href="#" class="keyword-item">织锦旗袍</a>
            <a href="#" class="keyword-item">刺绣旗袍</a>
          </div>
        </div>
      </div>

      <!-- Right Actions Area -->
      <div class="nav-right">
        <!-- Lang Switch -->
        <button class="lang-switch" @click="toggleLanguage">
          <span class="lang-text" :class="{ active: currentLang === 'zh' }">中</span>
          <span class="lang-divider">/</span>
          <span class="lang-text" :class="{ active: currentLang === 'en' }">EN</span>
        </button>

        <div class="nav-divider"></div>

        <!-- Links with English translation below -->
        <div class="nav-links">
          <NuxtLink to="/map" class="nav-link">
            <span class="link-text-cn">地图</span>
            <span class="link-text-en">MAP</span>
          </NuxtLink>
          <NuxtLink to="/colors" class="nav-link">
            <span class="link-text-cn">色彩</span>
            <span class="link-text-en">COLOR</span>
          </NuxtLink>
          <NuxtLink to="/styles" class="nav-link">
            <span class="link-text-cn">样式</span>
            <span class="link-text-en">STYLE</span>
          </NuxtLink>
          <NuxtLink to="/materials" class="nav-link">
            <span class="link-text-cn">面料</span>
            <span class="link-text-en">TEXTILE</span>
          </NuxtLink>
          <NuxtLink to="/cases" class="nav-link">
            <span class="link-text-cn">传承谱系</span>
            <span class="link-text-en">LINEAGE</span>
          </NuxtLink>
          <NuxtLink to="/about" class="nav-link">
            <span class="link-text-cn">关于我们</span>
            <span class="link-text-en">ABOUT US</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Stats Modal Popup -->
    <transition name="fade">
      <div v-if="showStatsModal" class="stats-modal-overlay" @click.self="showStatsModal = false">
        <div class="stats-modal glass">
          <button class="close-btn" @click="showStatsModal = false">×</button>
          <div class="modal-content">
            <h3 class="modal-title">旗袍数据库统计</h3>
            <div class="stats-grid">
              <div class="stat-item">
                <span class="stat-value">3559</span>
                <span class="stat-label">总收藏量</span>
              </div>
              <div class="stat-item">
                <span class="stat-value">128</span>
                <span class="stat-label">新增记录</span>
              </div>
            </div>
            <p class="modal-desc">实时更新全球旗袍藏品数据，连接传统与现代。</p>
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentLang = ref<'zh' | 'en'>('zh')
const showStatsModal = ref(false)

const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh'
}
</script>

<style scoped>
/* ... existing styles ... */

/* Total Stats Line - Interactive */
.total-stats-wrapper {
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  margin-left: 4px;
  /* Adjust alignment */
  margin-top: 4px;
}

.stats-trigger-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-family: var(--font-sans);
  font-weight: 600;
  color: var(--color-jade);
  border-bottom: 2px solid var(--color-jade);
  transition: all 0.2s;
  position: relative;
}

.stats-trigger-btn:hover {
  opacity: 0.8;
  transform: translateY(-1px);
}

/* Stats Modal */
.stats-modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
}

.stats-modal {
  width: 90%;
  max-width: 400px;
  background: rgba(20, 20, 20, 0.95);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  position: relative;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.5);
}

.modal-title {
  font-family: var(--font-serif-cn);
  color: var(--color-gold);
  font-size: 1.25rem;
  margin-bottom: 20px;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background: rgba(212, 175, 55, 0.1);
  border-radius: 8px;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-gold);
}

.stat-label {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 4px;
}

.modal-desc {
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 1000;
  transition: all var(--transition-normal);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(13, 13, 13, 0.92);
  backdrop-filter: blur(16px);
}

.nav-container {
  width: 100%;
  max-width: none;
  margin: 0;
  height: 100%;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ==================== Logo & Stats ==================== */
.nav-left {
  flex: 1;
  /* Allow left side to expand */
}

.logo-wrapper {
  position: relative;
}

.site-branding {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.site-title {
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
}

.site-logo-img {
  height: 40px;
  width: auto;
  margin-right: 8px;
  object-fit: contain;
}

.site-text-info {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.text-highlight {
  font-size: 1.25rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 0.1em;
}

.text-en {
  font-size: 0.75rem;
  font-family: var(--font-serif-en);
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 0.1em;
}

.text-author {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  font-weight: 500;
  margin-left: 4px;
}

/* Total Stats Line */
.total-stats-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.9rem;
  margin-left: 4px;
  /* Adjust alignment */
  position: relative;
}

.click-arrow {
  color: var(--color-jade);
  font-weight: bold;
  transform: rotate(-10deg);
}

.total-stats-link {
  text-decoration: none;
  color: var(--color-text-primary);
  border-bottom: 2px solid var(--color-jade);
  /* Green underline */
  padding-bottom: 1px;
  font-weight: 600;
  transition: opacity 0.2s;
}

.total-stats-link:hover {
  opacity: 0.8;
}

.stats-highlight {
  color: var(--color-jade);
}

/* Pankou Heart Nav - Visual only for TopNav */
.pankou-heart-nav {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 12px;
  color: #8b5cf6;
  /* Purple color from sketch */
}

.pankou-icon-small {
  font-size: 1.1rem;
  border: 1px solid #8b5cf6;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pankou-label-small {
  font-size: 0.75rem;
  font-weight: 500;
}

/* ==================== Center ==================== */
.nav-center {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 var(--spacing-md);
}

.search-container {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  max-width: 400px;
  padding-top: 14px; /* 向下偏移 */
}

.search-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  height: 36px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 0 16px;
  transition: all 0.3s;
}

.search-wrapper:focus-within {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--color-gold);
  box-shadow: 0 0 0 2px rgba(212, 175, 55, 0.1);
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  height: 100%;
  font-size: 0.95rem;
  color: var(--color-text-primary);
  outline: none;
}

.search-input::placeholder {
  color: var(--color-text-muted);
}

.search-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-btn svg {
  width: 16px;
  height: 16px;
}

.search-keywords {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.75rem;
}

.keyword-label {
  color: var(--color-text-muted);
}

.keyword-item {
  color: var(--color-text-secondary);
  text-decoration: none;
  transition: color 0.2s;
}

.keyword-item:hover {
  color: var(--color-primary-red);
}

/* ==================== Right Actions ==================== */
.nav-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  justify-content: flex-end;
}

.nav-divider {
  width: 1px;
  height: 18px;
  background: rgba(255, 255, 255, 0.15);
  margin: 0 4px;
}

/* Language Switch */
.lang-switch {
  background: transparent;
  border: none;
  font-family: var(--font-serif-cn);
  font-size: 1rem;
  cursor: pointer;
  color: var(--color-text-primary);
  display: flex;
  gap: 2px;
  font-weight: 600;
}

.lang-text.active {
  color: var(--color-text-primary);
  /* Keep it simple black/dark */
}

/* Nav Links */
.nav-links {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  transition: color var(--transition-fast);
}

.link-text-cn {
  font-size: 0.95rem;
  font-weight: 600;
  font-family: var(--font-serif-cn);
}

.link-text-en {
  font-size: 0.65rem;
  font-family: var(--font-serif-en);
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: color var(--transition-fast);
}

.nav-link:hover, .nav-link:hover .link-text-en {
  color: var(--color-gold);
}

/* Responsive */
@media (max-width: 1024px) {
  .total-stats-wrapper {
    display: none;
    /* Hide complex stats on smaller screens */
  }
}
</style>
