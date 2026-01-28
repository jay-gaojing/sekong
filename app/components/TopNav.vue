<template>
  <nav class="top-nav glass">
    <div class="nav-container">
      <!-- Logo Area -->
      <div class="nav-left group">
        <div class="logo-wrapper">
          <h1 class="site-title">
            <span class="text-highlight">色控</span>
            <span class="text-cn">旗袍数据库</span>
            <span class="text-author font-serif-cn">颜 Q</span>
          </h1>
        </div>
      </div>

      <!-- Center Navigation -->
      <div class="nav-center">
        <a href="#home" class="nav-link" :class="{ active: activeNav === 'home' }" @click="activeNav = 'home'">
          <span class="link-text">首页</span>
        </a>

        <!-- Search -->
        <div class="search-box-wrapper">
          <div class="search-box" :class="{ 'focused': isSearchFocused }">
            <div class="search-icon-wrapper">
              <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
              </svg>
            </div>
            <input type="text" class="search-input" placeholder="探索旗袍之美..." v-model="searchQuery"
              @focus="isSearchFocused = true" @blur="isSearchFocused = false" />
          </div>
          <div class="search-hint">
            <span class="hint-label">旗袍总量</span>
            <span class="hint-value">3559</span>
          </div>
        </div>
      </div>

      <!-- Right Actions Area -->
      <div class="nav-right">
        <!-- 盘扣入口 -->
        <button class="feature-btn pankou-btn" @click="goToPankou">
          <span class="btn-icon">🔘</span>
          <span class="btn-label">盘扣</span>
        </button>

        <!-- 色控展览 -->
        <button class="feature-btn sekong-btn" @click="goToSeKong">
          <span class="btn-icon">🎨</span>
          <span class="btn-label">色控展览</span>
        </button>

        <div class="nav-divider"></div>

        <!-- Lang Switch -->
        <button class="lang-switch" @click="toggleLanguage">
          <span class="lang-text" :class="{ active: currentLang === 'zh' }">中</span>
          <span class="lang-divider">/</span>
          <span class="lang-text" :class="{ active: currentLang === 'en' }">EN</span>
        </button>

        <!-- Additional Nav Links -->
        <div class="nav-links">
          <a href="#favorites" class="nav-link icon-link" title="收藏">
            <svg class="link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path
                d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z">
              </path>
            </svg>
          </a>
          <a href="#about" class="nav-link">
            <span class="link-text">关于我们</span>
          </a>
          <a href="#contact" class="nav-link">
            <span class="link-text">联系我们</span>
          </a>
          <a href="#login" class="nav-link login-btn">
            <span class="link-text">登录</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const currentLang = ref<'zh' | 'en'>('zh')
const searchQuery = ref('')
const isSearchFocused = ref(false)
const activeNav = ref('home')

const toggleLanguage = () => {
  currentLang.value = currentLang.value === 'zh' ? 'en' : 'zh'
}

const goToPankou = () => {
  const element = document.getElementById('pankou')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const goToSeKong = () => {
  const element = document.getElementById('sekong')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
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
}

.nav-container {
  max-width: var(--container-width);
  margin: 0 auto;
  height: 100%;
  padding: 0 var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
}

/* ==================== Logo ==================== */
.nav-left {
  display: flex;
  align-items: center;
}

.logo-wrapper {
  position: relative;
  cursor: pointer;
}

.site-title {
  display: flex;
  align-items: baseline;
  gap: 4px;
  line-height: 1;
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
  margin-left: 8px;
  font-weight: 500;
}

/* ==================== Center Navigation ==================== */
.nav-center {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex: 1;
  justify-content: center;
}

.search-box-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  max-width: 500px;
  width: 100%;
}

.search-box {
  position: relative;
  flex: 1;
  height: 42px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: var(--border-radius-full);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-md);
  transition: all var(--transition-normal);
  border: 1px solid transparent;
}

.search-hint {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  min-width: 80px;
}

.hint-label {
  font-size: 0.7rem;
  color: var(--color-text-muted);
}

.hint-value {
  font-family: var(--font-serif-en);
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--color-jade);
}

.search-box:hover {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: var(--shadow-sm);
}

.search-box.focused {
  background: white;
  max-width: 400px;
  box-shadow: var(--shadow-glow);
  border-color: var(--color-gold-light);
}

.search-icon {
  width: 18px;
  height: 18px;
  color: var(--color-text-muted);
  transition: color var(--transition-fast);
}

.search-box.focused .search-icon {
  color: var(--color-primary-red);
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-text-primary);
  margin-left: var(--spacing-sm);
}

.search-input::placeholder {
  color: var(--color-text-muted);
}

/* ==================== Right Actions ==================== */
.nav-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.nav-divider {
  width: 1px;
  height: 24px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0 var(--spacing-xs);
}

/* Feature Buttons */
.feature-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--color-gold);
  background: transparent;
  cursor: pointer;
  transition: all var(--transition-fast);
  font-family: var(--font-serif-cn);
  font-size: 0.9rem;
}

.feature-btn:hover {
  background: var(--color-gold);
  color: white;
  transform: translateY(-2px);
  box-shadow: var(--shadow-glow);
}

.btn-icon {
  font-size: 1rem;
}

.btn-label {
  color: var(--color-text-primary);
  font-weight: 500;
}

.feature-btn:hover .btn-label {
  color: white;
}

.pankou-btn {
  border-color: var(--color-primary-red);
}

.pankou-btn:hover {
  background: var(--color-primary-red);
  border-color: var(--color-primary-red);
}

.sekong-btn {
  border-color: var(--color-gold);
}

.sekong-btn:hover {
  background: var(--color-gold);
}

/* Language Switch */
.lang-switch {
  background: transparent;
  border: none;
  font-family: var(--font-serif-en);
  font-size: 0.85rem;
  cursor: pointer;
  color: var(--color-text-secondary);
  display: flex;
  gap: 3px;
  transition: all var(--transition-fast);
}

.lang-text {
  opacity: 0.5;
  transition: opacity var(--transition-fast);
}

.lang-text.active {
  opacity: 1;
  color: var(--color-primary-red);
  font-weight: 600;
}

/* Nav Links */
.nav-links {
  display: flex;
  gap: var(--spacing-sm);
  align-items: center;
}

.nav-link {
  text-decoration: none;
  color: var(--color-text-primary);
  font-size: 0.9rem;
  font-weight: 500;
  position: relative;
  padding: 6px 12px;
  transition: all var(--transition-fast);
  white-space: nowrap;
}

.nav-link:hover {
  color: var(--color-primary-red);
}

.nav-link.active {
  color: var(--color-primary-red);
}

.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 2px;
  background: var(--color-primary-red);
}

.icon-link {
  padding: 6px;
}

.link-icon {
  width: 20px;
  height: 20px;
  transition: all var(--transition-fast);
}

.icon-link:hover .link-icon {
  stroke: var(--color-primary-red);
  fill: rgba(200, 16, 46, 0.1);
}

.login-btn {
  padding: 8px 20px;
  border: 1px solid var(--color-primary-red);
  border-radius: var(--border-radius-sm);
  color: var(--color-primary-red);
  transition: all var(--transition-normal);
}

.login-btn:hover {
  background: var(--color-primary-red);
  color: white;
  box-shadow: var(--shadow-sm);
}

/* ==================== Responsive ==================== */
@media (max-width: 1200px) {
  .feature-btn .btn-label {
    display: none;
  }

  .feature-btn {
    padding: 8px;
  }
}

@media (max-width: 1024px) {
  .nav-container {
    padding: 0 var(--spacing-md);
  }

  .nav-link .link-text {
    display: none;
  }

  .nav-link.login-btn .link-text {
    display: inline;
  }
}

@media (max-width: 768px) {
  .search-box {
    display: none;
  }

  .nav-divider {
    display: none;
  }

  .lang-switch {
    display: none;
  }
}
</style>
