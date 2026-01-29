<template>
    <section id="pankou" class="pankou-section">
        <div class="container">
            <div class="pankou-grid">
                <!-- 左侧：文字介绍 -->
                <div class="pankou-content">
                    <header class="section-header">
                        <span class="section-tag">传统工艺</span>
                        <h2 class="section-title">
                            盘<span class="text-gold">扣</span>艺术
                        </h2>
                        <div class="title-line"></div>
                    </header>

                    <div class="pankou-intro">
                        <p class="intro-text">
                            盘扣是中国传统服饰的点睛之笔，亦名盘花，是旗袍的重要组成部分。
                            一针一线间，承载着东方美学的精髓与匠人的心血。
                        </p>

                        <ul class="pankou-features">
                            <li>
                                <span class="feature-icon">🔘</span>
                                <div class="feature-info">
                                    <h4>百余种式样</h4>
                                    <p>琵琶扣、蝴蝶扣、梅花扣等经典款式</p>
                                </div>
                            </li>
                            <li>
                                <span class="feature-icon">✨</span>
                                <div class="feature-info">
                                    <h4>精湛工艺</h4>
                                    <p>手工盘制，呈现立体层次之美</p>
                                </div>
                            </li>
                            <li>
                                <span class="feature-icon">🎨</span>
                                <div class="feature-info">
                                    <h4>丰富配色</h4>
                                    <p>与旗袍面料和谐搭配的色彩选择</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <button class="explore-btn group">
                        <span>探索盘扣世界</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                <!-- 右侧：视觉展示 -->
                <div class="pankou-visual">
                    <div class="visual-grid">
                        <div class="pankou-card card-main">
                            <img src="/images/花卉扣卡背.jpg" alt="蝴蝶扣" class="card-bg-img">
                            <div class="card-inner">
                                <span class="card-label">蝴蝶扣</span>
                            </div>
                            <div class="card-glow"></div>
                        </div>
                        <div class="pankou-card card-sm">
                            <img src="/images/吉祥扣卡背.jpg" alt="琵琶扣" class="card-bg-img">
                            <div class="card-inner">
                                <span class="card-label">琵琶扣</span>
                            </div>
                        </div>
                        <div class="pankou-card card-sm">
                            <img src="/images/昆虫类的卡背.jpg" alt="梅花扣" class="card-bg-img">
                            <div class="card-inner">
                                <span class="card-label">梅花扣</span>
                            </div>
                        </div>
                        <div class="pankou-card card-md">
                            <img src="/images/其他扣卡背.jpg" alt="一字扣" class="card-bg-img">
                            <div class="card-inner">
                                <span class="card-label">一字扣</span>
                            </div>
                        </div>
                    </div>
                    <div class="visual-decoration">
                        <div class="deco-ring"></div>
                        <div class="deco-dots"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
// 无特殊逻辑
</script>

<style scoped>
.pankou-section {
    padding: var(--spacing-2xl) 0;
    background: linear-gradient(180deg, var(--color-bg-paper) 0%, var(--color-bg-main) 100%);
    position: relative;
    overflow: hidden;
}

.pankou-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
    align-items: center;
}

/* 左侧内容 */
.section-header {
    margin-bottom: var(--spacing-lg);
}

.section-tag {
    display: inline-block;
    font-family: var(--font-serif-cn);
    font-size: 0.85rem;
    color: var(--color-gold);
    background: rgba(212, 175, 55, 0.1);
    padding: 4px 12px;
    border-radius: var(--border-radius-full);
    margin-bottom: var(--spacing-sm);
}

.section-title {
    font-size: var(--text-4xl);
    line-height: 1.2;
}

.text-gold {
    color: var(--color-gold);
}

.title-line {
    width: 60px;
    height: 3px;
    background: var(--color-primary-red);
    margin-top: var(--spacing-sm);
}

.intro-text {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
}

/* 特性列表 */
.pankou-features {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.pankou-features li {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
}

.feature-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
}

.feature-info h4 {
    font-family: var(--font-serif-cn);
    font-size: 1rem;
    color: var(--color-text-primary);
    margin-bottom: 4px;
}

.feature-info p {
    font-size: 0.9rem;
    color: var(--color-text-muted);
}

/* 按钮 */
.explore-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: var(--color-primary-red);
    color: white;
    border: none;
    border-radius: var(--border-radius-sm);
    font-family: var(--font-serif-cn);
    font-size: 1rem;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.explore-btn:hover {
    background: var(--color-primary-red-dark);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(139, 26, 47, 0.3);
}

.explore-btn svg {
    width: 18px;
    height: 18px;
    transition: transform var(--transition-fast);
}

.explore-btn:hover svg {
    transform: translateX(4px);
}

/* 右侧视觉 */
.pankou-visual {
    position: relative;
    height: 500px;
}

.visual-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: var(--spacing-md);
    height: 100%;
    position: relative;
    z-index: 2;
}

.pankou-card {
    background: white;
    border-radius: var(--border-radius-lg);
    display: flex;
    align-items: flex-end; /* Align label to bottom */
    justify-content: center;
    position: relative;
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-normal);
    cursor: pointer;
}

.card-bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}

.pankou-card:hover .card-bg-img {
    transform: scale(1.1);
}

.pankou-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-float);
}

.card-main {
    grid-column: 1;
    grid-row: 1 / 3;
}

.card-inner {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 10px;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    display: flex;
    justify-content: center;
}

/* Remove old emoji styles */
.pankou-emoji { display: none; }

.card-label {
    font-family: var(--font-serif-cn);
    font-size: 1rem;
    color: white; /* Text needs to be white on image */
    font-weight: 600;
    text-shadow: 0 2px 4px rgba(0,0,0,0.5);
}

.card-glow {
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at center, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity var(--transition-fast);
}

.pankou-card:hover .card-glow {
    opacity: 1;
}

/* 装饰 */
.visual-decoration {
    position: absolute;
    inset: -20px;
    z-index: 1;
}

.deco-ring {
    position: absolute;
    width: 300px;
    height: 300px;
    border: 2px dashed rgba(212, 175, 55, 0.2);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: spin 30s linear infinite;
}

@keyframes spin {
    from {
        transform: translate(-50%, -50%) rotate(0deg);
    }

    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .pankou-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
    }

    .pankou-visual {
        height: 400px;
    }
}

@media (max-width: 768px) {
    .pankou-visual {
        height: 300px;
    }

    .pankou-emoji {
        font-size: 3rem;
    }

    .card-sm .pankou-emoji {
        font-size: 2rem;
    }
}
</style>
