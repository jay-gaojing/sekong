<template>
  <section id="database" class="database-section">
    <div class="container relative">
      <!-- Background Decoration -->
      <div class="bg-decoration-text">QIPAO DATABASE</div>

      <div class="magazine-grid">
        <!-- Text Content -->
        <div class="content-col centered-content">
          <header class="section-header animate-fade-up">
            <span class="subtitle">Introduction to Heritage</span>
            <h2 class="section-title">
              中国非物质文化遗产旗袍基因数据库
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
              精致的工艺 and 独特的东方韵味，成为了中华文化的重要象征。
            </p>

            <p class="paragraph">
              本数据库致力于系统收集、整理和展示旗袍的各类信息，包括款式演变、
              制作工艺、面料材质、刺绣纹样、色彩运用等多个维度。通过数字化手段
              保护和传承这一珍贵的非物质文化遗产。
            </p>

            <div class="explore-bar-wrapper">
              <button class="explore-bar group">
                <span class="bar-line"></span>
                <span class="bar-text">点击查看包含数据量</span>
                <svg class="arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <div class="bar-en-text">CHINA INTANGIBLE CULTURAL HERITAGE QIPAO GENE DATABASE</div>
            </div>
          </article>
        </div>

        <div class="hero-feature-image" aria-hidden="true">
          <img src="/images/home-phoenix-embroidery.jpg" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No logic needed for this presentational component
</script>

<style scoped>
.database-section .container {
  width: 100%;
  max-width: none;
  margin: 0;
  padding: 0;
}

.database-section {
  padding-top: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  min-height: auto;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 2;
  /* 黑色背景渐变遮罩 + 背景图 */
  background-image: 
    linear-gradient(to right, rgba(15, 15, 15, 0.95) 0%, rgba(20, 20, 20, 0.7) 40%, rgba(25, 25, 25, 0.1) 100%),
    url('/首页/背景模板.jpg');
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
  color: rgba(212, 175, 55, 0.06);
  font-weight: 700;
  pointer-events: none;
  z-index: 0;
  white-space: nowrap;
}

.magazine-grid {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 1;
  min-height: clamp(560px, calc(100vh - var(--header-height)), 760px);
  padding-left: clamp(24px, 3vw, 52px);
  padding-right: clamp(260px, 34vw, 480px);
}

.content-col {
  max-width: 760px;
  width: 100%;
  position: relative;
  z-index: 2;
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
  color: #f0f0f0;
  text-align: left;
}

.text-gold {
  color: var(--color-gold);
}

.text-author {
  font-size: 2.5rem;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 500;
}

.pankou-heart-wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: var(--spacing-sm);
  color: var(--color-gold);
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
  background: var(--color-gold);
  margin: var(--spacing-sm) 0 0;
}

/* Article Styles */
.article-body {
  padding: 0;
  border-left: none;
  text-align: left;
}

.intro-title {
  font-size: 1.25rem;
  color: var(--color-gold);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
}

.intro-quote {
  font-family: var(--font-serif-cn);
  font-size: 1.5rem;
  color: var(--color-gold-light);
  margin-bottom: var(--spacing-md);
  line-height: 1.4;
  position: relative;
}

.quote-mark {
  position: absolute;
  top: -20px;
  left: -44px;
  font-size: 4rem;
  color: rgba(212, 175, 55, 0.3);
  font-family: serif;
}

.paragraph {
  font-size: 1.05rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
  text-align: left;
}

.hero-feature-image {
  position: absolute;
  top: 23%;
  right: clamp(72px, 9vw, 150px);
  width: clamp(280px, 31vw, 430px);
  aspect-ratio: 1;
  overflow: hidden;
  border: 2px solid rgba(214, 176, 107, 0.56);
  border-radius: 50%;
  box-shadow:
    0 0 0 12px rgba(8, 8, 8, 0.18),
    0 26px 80px rgba(0, 0, 0, 0.42);
  opacity: 0.9;
}

.hero-feature-image::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 38% 28%, rgba(255, 226, 152, 0.18), transparent 36%),
    linear-gradient(90deg, rgba(0, 0, 0, 0.32), transparent 45%);
  pointer-events: none;
}

.hero-feature-image img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: 48% 44%;
}
/* Explore Bar */
.explore-bar-wrapper {
  margin-top: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.explore-bar {
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  cursor: pointer;
  padding: 0;
  width: 100%;
}

.bar-text {
  font-family: var(--font-sans);
  font-size: 0.9rem;
  color: var(--color-text-primary);
  white-space: nowrap;
}

.bar-line {
  flex: 1;
  height: 2px;
  background: var(--color-primary-red);
  transition: background var(--transition-normal);
}
.arrow-icon {
  width: 18px;
  height: 18px;
  transition: transform var(--transition-normal);
}

.explore-bar:hover .bar-line {
  transform: translateX(5px);
  stroke: var(--color-gold);
}

.explore-bar:hover .bar-text {
  color: var(--color-gold);
}

.bar-en-text {
  font-family: var(--font-serif-en);
  font-size: 0.7rem;
  color: var(--color-text-muted);
  letter-spacing: 0.25em;
  text-transform: uppercase;
  margin-top: 4px;
}

/* Responsive */
@media (max-width: 1024px) {
  .bg-decoration-text {
    font-size: 8rem;
  }

  .magazine-grid {
    padding-left: clamp(18px, 4vw, 44px);
    padding-right: clamp(220px, 32vw, 340px);
  }

  .hero-feature-image {
    right: 28px;
    width: clamp(230px, 30vw, 320px);
  }
}

@media (max-width: 768px) {
  .bg-decoration-text {
    display: none;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .magazine-grid {
    display: grid;
    min-height: auto;
    padding: 28px 18px 42px;
    gap: 24px;
  }

  .hero-feature-image {
    position: relative;
    top: auto;
    right: auto;
    width: min(320px, 78vw);
    margin: 0 auto;
    grid-row: 1;
  }

  .section-title,
  .article-body,
  .paragraph {
    text-align: center;
  }

  .pankou-heart-wrapper {
    justify-content: center;
  }

  .divider-line {
    margin-inline: auto;
  }

  .quote-mark {
    left: 0;
  }
}
</style>
