<template>
  <div class="recognize-page">
    <div class="recognize-container container">
      <!-- 页面标题 -->
      <header class="page-header animate-fade-up">
        <h1 class="page-title text-gradient-gold">智能识图与检索</h1>
        <p class="page-subtitle">拍照或上传图片，即刻识别旗袍款式、工艺与年代</p>
      </header>

      <!-- 识图交互区 -->
      <div class="scanner-section glass animate-fade-up" style="animation-delay: 0.2s">
        <div class="scanner-box">
          <!-- 模拟扫描线 -->
          <div class="scan-line"></div>
          
          <div class="upload-area" @click="triggerUpload">
            <div class="upload-icon">📸</div>
            <h3>点击上传或拖拽图片</h3>
            <p>支持 JPG, PNG 格式，AI 将自动分析纹样特征</p>
          </div>
        </div>
        
        <!-- 功能亮点 -->
        <div class="features-grid">
          <div class="feature-item">
            <div class="feature-icon">✨</div>
            <h4>自动分类</h4>
            <p>识别旗袍流派与形制特征</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🔍</div>
            <h4>纹样解析</h4>
            <p>深度解码传统纹样的文化含义</p>
          </div>
          <div class="feature-item">
            <div class="feature-icon">🎨</div>
            <h4>色彩匹配</h4>
            <p>提取核心色值并匹配传统色谱</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const triggerUpload = () => {
  console.log('Upload triggered')
  // 这里可以添加文件选择逻辑
}
</script>

<style scoped>
.recognize-page {
  min-height: 100vh;
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-2xl);
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 100%);
}

.page-header {
  text-align: center;
  margin-bottom: var(--spacing-xl);
}

.page-title {
  font-size: var(--text-4xl);
  margin-bottom: var(--spacing-xs);
}

.page-subtitle {
  color: var(--color-text-secondary);
  font-family: var(--font-serif-cn);
}

.scanner-section {
  max-width: 900px;
  margin: 0 auto;
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.scanner-box {
  position: relative;
  height: 400px;
  background: rgba(0, 0, 0, 0.3);
  border: 2px dashed rgba(212, 175, 55, 0.2);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: var(--spacing-lg);
}

.scanner-box:hover {
  background: rgba(212, 175, 55, 0.05);
  border-color: var(--color-gold);
}

.scan-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--color-gold), transparent);
  box-shadow: 0 0 15px var(--color-gold);
  animation: scan 4s linear infinite;
  z-index: 10;
}

.upload-area {
  text-align: center;
  z-index: 1;
}

.upload-icon {
  font-size: 3.5rem;
  margin-bottom: var(--spacing-sm);
  filter: drop-shadow(0 0 10px rgba(212, 175, 55, 0.3));
}

.upload-area h3 {
  color: var(--color-gold);
  font-size: 1.25rem;
  margin-bottom: 8px;
}

.upload-area p {
  color: var(--color-text-muted);
  font-size: 0.9rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
}

.feature-item {
  text-align: center;
  padding: var(--spacing-md);
}

.feature-icon {
  font-size: 1.5rem;
  margin-bottom: 8px;
}

.feature-item h4 {
  color: var(--color-gold-light);
  font-size: 1rem;
  margin-bottom: 4px;
}

.feature-item p {
  font-size: 0.8rem;
  color: var(--color-text-muted);
}

@keyframes scan {
  0% { top: 0; }
  50% { top: 100%; }
  100% { top: 0; }
}

@media (max-width: 768px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
