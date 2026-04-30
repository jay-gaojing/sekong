<template>
  <div class="map-page">
    <div class="map-container container">
      <!-- 页面标题 -->
      <header class="page-header animate-fade-up">
        <h1 class="page-title">旗袍文化分布地图</h1>
        <p class="page-subtitle">探索遍布全国的旗袍文化遗产与工艺流派</p>
      </header>

      <!-- 地图展示区 (占位) -->
      <div class="map-visual-wrapper glass animate-fade-up" style="animation-delay: 0.2s">
        <div class="map-overlay">
          <div class="placeholder-content">
            <div class="map-icon">🗺️</div>
            <h2>数字地图正在加载...</h2>
            <p>正在整合海派、京派、苏派等各地旗袍数字化数据</p>
            
            <!-- 模拟坐标点 -->
            <div class="map-nodes">
              <div class="node shanghai" title="海派旗袍"></div>
              <div class="node beijing" title="京派旗袍"></div>
              <div class="node suzhou" title="苏派旗袍"></div>
            </div>
          </div>
        </div>
        
        <!-- 背景装饰 -->
        <div class="map-grid"></div>
      </div>

      <!-- 数据概览 -->
      <div class="map-stats-grid animate-fade-up" style="animation-delay: 0.4s">
        <div class="stat-card glass-dark">
          <span class="stat-num">12</span>
          <span class="stat-label">核心流派</span>
        </div>
        <div class="stat-card glass-dark">
          <span class="stat-num">85</span>
          <span class="stat-label">非遗传承点</span>
        </div>
        <div class="stat-card glass-dark">
          <span class="stat-num">3,559</span>
          <span class="stat-label">库藏总计</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 页面逻辑待后续扩展
</script>

<style scoped>
.map-page {
  min-height: 100vh;
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
  background: radial-gradient(circle at center, #1a1a1a 0%, #0a0a0a 100%);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.page-title {
  font-size: var(--text-4xl);
  margin-bottom: var(--spacing-xs);
  background: var(--color-gold-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.page-subtitle {
  color: var(--color-text-secondary);
  font-family: var(--font-serif-cn);
  letter-spacing: 0.1em;
}

.map-visual-wrapper {
  position: relative;
  height: 600px;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
}

.map-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(212, 175, 55, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212, 175, 55, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  z-index: 1;
}

.map-overlay {
  position: relative;
  z-index: 2;
  text-align: center;
}

.placeholder-content h2 {
  font-size: 1.5rem;
  margin: var(--spacing-sm) 0;
  color: var(--color-gold);
}

.placeholder-content p {
  color: var(--color-text-muted);
}

.map-icon {
  font-size: 4rem;
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.4));
  animation: pulse 2s infinite;
}

.map-nodes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
}

.node {
  position: absolute;
  width: 12px;
  height: 12px;
  background: var(--color-primary-red);
  border: 2px solid var(--color-gold);
  border-radius: 50%;
  box-shadow: 0 0 10px var(--color-gold);
}

.node.shanghai { top: 60%; left: 80%; }
.node.beijing { top: 30%; left: 70%; }
.node.suzhou { top: 58%; left: 78%; }

.map-stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.stat-card {
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  text-align: center;
  transition: transform var(--transition-fast);
}

.stat-card:hover {
  transform: translateY(-5px);
  border-color: var(--color-gold);
}

.stat-num {
  display: block;
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--color-gold);
  margin-bottom: 4px;
}

.stat-label {
  color: var(--color-text-secondary);
  font-family: var(--font-serif-cn);
  font-size: 0.9rem;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

@media (max-width: 768px) {
  .map-stats-grid {
    grid-template-columns: 1fr;
  }
}
</style>
