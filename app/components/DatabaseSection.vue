<template>
  <section id="database" class="database-section">
    <div class="container relative">
      <!-- Background Decoration -->
      <div class="bg-decoration-text">QIPAO DATABASE</div>

      <div class="magazine-grid">
        <!-- Left: Text Content -->
        <div class="content-col">
          <header class="section-header animate-fade-up">
            <span class="subtitle">Introduction to Heritage</span>
            <h2 class="section-title">
              色控旗袍数据库 <span class="text-author">颜 Q</span>
            </h2>
            <div class="pankou-heart-wrapper">
              <span class="pankou-icon">🔘</span>
              <span class="pankou-label">盘扣心</span>
            </div>
            <div class="divider-line"></div>
          </header>

          <article class="article-body animate-fade-up" style="animation-delay: 0.2s">
            <div class="intro-title font-serif-cn">
              简介 (起源)
            </div>
            <div class="intro-quote">
              <span class="quote-mark">“</span>
              百年衣冠，<br>是一部穿在身上的历史。
            </div>

            <p class="paragraph first-letter">
              旗袍，作为中国传统服饰的瑰宝，承载着深厚的文化底蕴和精湛的工艺技术。
              自清代旗人之袍演变而来，历经民国的黄金时代，旗袍以其优雅的线条、
              精致的工艺和独特的东方韵味，成为了中华文化的重要象征。
            </p>

            <p class="paragraph">
              本数据库致力于系统收集、整理和展示旗袍的各类信息，包括款式演变、
              制作工艺、面料材质、刺绣纹样、色彩运用等多个维度。通过数字化手段
              保护和传承这一珍贵的非物质文化遗产。
            </p>

            <button class="explore-btn group">
              <span class="btn-text">探索档案</span>
              <span class="btn-line"></span>
              <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </article>
        </div>

        <!-- Right: Visual Card -->
        <div class="visual-col animate-fade-up" style="animation-delay: 0.4s">
          <div class="visual-card-wrapper">
            <div class="visual-card glass-card">
              <div class="card-inner">
                <div class="card-pattern"></div>
                <div class="card-content">
                  <div class="vertical-text text-primary">传统</div>
                  <div class="vertical-divider"></div>
                  <div class="vertical-text text-gold">创新</div>
                  <div class="vertical-divider"></div>
                  <div class="vertical-text text-primary">传承</div>
                </div>
                <div class="card-shine"></div>
              </div>
            </div>
            <!-- Decorative circle behind -->
            <div class="circle-deco"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed for this presentational component
</script>

<style scoped>
.database-section {
  padding-top: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  min-height: auto;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  /* 背景图片设置 */
  background-image: url('/images/米汤骄（大背景）.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.bg-decoration-text {
  position: absolute;
  top: -5%;
  left: -5%;
  font-family: var(--font-serif-en);
  font-size: 12rem;
  color: rgba(212, 175, 55, 0.03);
  font-weight: 700;
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
}

.magazine-grid {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: var(--spacing-2xl);
  align-items: center;
  position: relative;
  z-index: 1;
}

/* Header Styles */
.section-header {
  margin-bottom: var(--spacing-lg);
}

.subtitle {
  font-family: var(--font-serif-en);
  font-style: italic;
  color: var(--color-gold);
  font-size: 1.1rem;
  letter-spacing: 0.1em;
  display: block;
  margin-bottom: var(--spacing-xs);
}

.section-title {
  font-size: var(--text-display);
  line-height: 1.1;
  margin-bottom: var(--spacing-md);
}

.text-gold {
  color: var(--color-gold);
}

.text-author {
  font-size: 2.5rem;
  color: var(--color-text-secondary);
  font-weight: 500;
}

.pankou-heart-wrapper {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: var(--spacing-sm);
  color: var(--color-primary-red);
}

.pankou-icon {
  font-size: 1.5rem;
  animation: pulse 2s infinite;
}

.pankou-label {
  font-family: var(--font-serif-cn);
  font-weight: 600;
  letter-spacing: 0.1em;
}

.divider-line {
  width: 80px;
  height: 4px;
  background: var(--color-primary-red);
  margin-top: var(--spacing-sm);
}

/* Article Styles */
.article-body {
  padding-left: var(--spacing-md);
  border-left: 1px solid rgba(0, 0, 0, 0.05);
}

.intro-title {
  font-size: 1.25rem;
  color: var(--color-gold-dim);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.intro-quote {
  font-family: var(--font-serif-cn);
  font-size: 1.5rem;
  color: var(--color-primary-red);
  margin-bottom: var(--spacing-md);
  line-height: 1.4;
  position: relative;
}

.quote-mark {
  position: absolute;
  top: -20px;
  left: -20px;
  font-size: 4rem;
  color: rgba(212, 175, 55, 0.2);
  font-family: serif;
}

.paragraph {
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
  text-align: justify;
}

.first-letter::first-letter {
  font-size: 3rem;
  float: left;
  line-height: 1;
  padding-right: 12px;
  font-family: var(--font-serif-en);
  color: var(--color-gold);
}

/* Button */
.explore-btn {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  margin-top: var(--spacing-lg);
  padding: 0;
}

.btn-text {
  font-family: var(--font-serif-cn);
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-text-primary);
}

.btn-line {
  width: 40px;
  height: 1px;
  background: var(--color-text-primary);
  transition: width var(--transition-normal);
}

.arrow-icon {
  width: 20px;
  height: 20px;
  transition: transform var(--transition-normal);
}

.explore-btn:hover .btn-line {
  width: 60px;
  background: var(--color-primary-red);
}

.explore-btn:hover .arrow-icon {
  transform: translateX(5px);
  stroke: var(--color-primary-red);
}

.explore-btn:hover .btn-text {
  color: var(--color-primary-red);
}

/* Visual Card - The "Wow" Factor */
.visual-card-wrapper {
  perspective: 1000px;
  position: relative;
  padding: 40px;
}

.visual-card {
  width: 100%;
  aspect-ratio: 3/4;
  background: white;
  border-radius: var(--border-radius-lg);
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s var(--ease-out-cubic);
  box-shadow: var(--shadow-float);
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.visual-card:hover {
  transform: rotateY(-5deg) rotateX(5deg) translateY(-10px);
}

.card-inner {
  position: absolute;
  inset: 10px;
  border: 2px solid var(--color-gold);
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle at center, #fffcf5 0%, #f7f3e8 100%);
  overflow: hidden;
}

.card-pattern {
  position: absolute;
  inset: 0;
  opacity: 0.1;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l30 30-30 30L0 30z' fill='%23d4af37' fill-rule='evenodd'/%3E%3C/svg%3E");
}

.card-content {
  position: relative;
  z-index: 2;
  display: flex;
  gap: var(--spacing-lg);
}

.vertical-text {
  writing-mode: vertical-rl;
  font-family: var(--font-serif-cn);
  font-size: 2rem;
  letter-spacing: 0.5em;
  font-weight: 600;
}

.vertical-divider {
  width: 1px;
  height: 200px;
  background: var(--color-gold);
  opacity: 0.5;
}

.text-primary {
  color: var(--color-primary-red);
}

.card-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right,
      transparent 0%,
      rgba(255, 255, 255, 0.4) 50%,
      transparent 100%);
  transform: skewX(-25deg);
  transition: left 0.8s;
}

.visual-card:hover .card-shine {
  left: 200%;
}

.circle-deco {
  position: absolute;
  top: -20px;
  right: -20px;
  width: 200px;
  height: 200px;
  border: 2px solid var(--color-gold);
  border-radius: 50%;
  opacity: 0.2;
  z-index: -1;
  animation: spin 30s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

/* Responsive */
@media (max-width: 1024px) {
  .magazine-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-xl);
  }

  .visual-card-wrapper {
    max-width: 500px;
    margin: 0 auto;
  }

  .bg-decoration-text {
    font-size: 8rem;
  }
}

@media (max-width: 768px) {
  .bg-decoration-text {
    display: none;
  }

  .section-title {
    font-size: 2.5rem;
  }
}
</style>
