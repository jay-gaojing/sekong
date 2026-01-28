<template>
  <nav class="top-nav glass">
    <div class="nav-container">
      <!-- Logo Area -->
      <div class="nav-left group">
        <div class="logo-wrapper">
          <div class="site-branding">
            <h1 class="site-title">
              <span class="logo-mark">🏷️</span> <!-- 临时使用 emoji 模拟紫色圈+“商标” -->
              <span class="text-highlight">色控</span>
              <span class="text-cn">旗袍数据库</span>
              <span class="text-author font-serif-cn">颜 Q</span>
            </h1>
            <!-- 总量统计（绿色下划线） -->
            <div class="total-stats-wrapper">
              <div class="click-arrow">⤵</div>
              <a href="#total-stats" class="total-stats-link">
                点击 <span class="stats-highlight">色控旗袍总量 3559</span>
              </a>
              <!-- 盘扣心图标 (作为引导点) -->
              <div class="pankou-heart-nav">
                <span class="pankou-icon-small">@</span> <!-- 临时模拟盘扣心图标 -->
                <span class="pankou-label-small">盘扣心</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Center Navigation (Removed Search Box) -->
      <div class="nav-center">
        <!-- Center space is now empty or used for spacing -->
      </div>

      <!-- Right Actions Area -->
      <div class="nav-right">
        <!-- Lang Switch -->
        <button class="lang-switch" @click="toggleLanguage">
          <span class="lang-text" :class="{ active: currentLang === 'zh' }">中</span>
          <span class="lang-divider">/</span>
          <span class="lang-text" :class="{ active: currentLang === 'en' }">英</span>
        </button>

        <div class="nav-divider"></div>

        <!-- Links: 传承谱系 | 关于我们 -->
        <div class="nav-links">
          <a href="#heritage" class="nav-link">
            <span class="link-text">传承谱系</span>
          </a>
          <a href="#about" class="nav-link">
            <span class="link-text">关于我们</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentLang = ref<'zh' | 'en'>('zh')
// Removed searchQuery, isSearchFocused, activeNav, goToPankou, goToSeKong as they are no longer in TopNav

const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh'
}
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--header-height);
  z-index: 1000;
  transition: all var(--transition-normal);
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  background: rgba(252, 252, 250, 0.9); /* Slightly more opaque */
  backdrop-filter: blur(10px);
}

.nav-container {
  max-width: var(--container-width);
  margin: 0 auto;
  height: 100%;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ==================== Logo & Stats ==================== */
.nav-left {
  flex: 1; /* Allow left side to expand */
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

.logo-mark {
  font-size: 1.2rem;
  /* Adjust color/style to match purple circle later if needed */
}

.text-highlight {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-gold);
  letter-spacing: 0.05em;
}

.text-cn {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary-red);
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
  margin-left: 4px; /* Adjust alignment */
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
  border-bottom: 2px solid var(--color-jade); /* Green underline */
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
  color: #8b5cf6; /* Purple color from sketch */
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
  /* Empty for now, or spacer */
  flex: 0.2;
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
  background: rgba(0, 0, 0, 0.2);
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
  color: var(--color-text-primary); /* Keep it simple black/dark */
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
  font-size: 1rem;
  font-weight: 600;
  font-family: var(--font-serif-cn); /* Handwritten feel */
  position: relative;
  transition: color var(--transition-fast);
}

.nav-link:hover {
  color: var(--color-primary-red);
}

/* Responsive */
@media (max-width: 1024px) {
  .total-stats-wrapper {
    display: none; /* Hide complex stats on smaller screens */
  }
}

</style>
