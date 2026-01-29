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
            <!-- 总量统计（绿色下划线）- 交互式弹出 -->
            <div class="total-stats-wrapper">
              <button class="stats-trigger-btn" @click="showStatsModal = true">
                <span class="stats-text">色控旗袍总量 3559</span>
              </button>
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
          <NuxtLink to="/crafts" class="nav-link">
            <span class="link-text">传承谱系</span>
          </NuxtLink>
          <NuxtLink to="#about" class="nav-link">
            <span class="link-text">关于我们</span>
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
             <h3 class="modal-title">色控旗袍数据库统计</h3>
             <div class="stats-grid">
               <div class="stat-item">
                 <span class="stat-value">3559</span>
                 <span class="stat-label">总收录量</span>
               </div>
               <div class="stat-item">
                 <span class="stat-value">128</span>
                 <span class="stat-label">新增收录</span>
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
  margin-left: 4px; /* Adjust alignment */
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
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  backdrop-filter: blur(4px);
}

.stats-modal {
  width: 90%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.95);
  padding: 24px;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0,0,0,0.15);
  position: relative;
  border: 1px solid rgba(212, 175, 55, 0.2);
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #999;
}

.modal-title {
  font-family: var(--font-serif-cn);
  color: var(--color-primary-red);
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
  background: rgba(212, 175, 55, 0.05);
  border-radius: 8px;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-gold);
}

.stat-label {
  font-size: 0.8rem;
  color: #666;
  margin-top: 4px;
}

.modal-desc {
  text-align: center;
  font-size: 0.9rem;
  color: #666;
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
