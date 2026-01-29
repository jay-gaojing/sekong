<template>
    <section id="sekong" class="sekong-section">
        <div class="container">
            <div class="sekong-grid">
                <!-- 左侧：视觉展示 -->
                <div class="sekong-visual">
                    <div class="template-showcase">
                        <img src="/images/色控原创的模板.jpg" alt="色控原创设计" class="template-img">
                        <!-- 装饰性光效 -->
                        <div class="template-shine"></div>
                    </div>
                </div>

                <!-- 右侧：文字内容 -->
                <div class="sekong-content">
                    <header class="section-header">
                        <span class="section-tag">色彩美学</span>
                        <h2 class="section-title">
                            <span class="text-gradient">色控</span>展览
                        </h2>
                        <div class="title-line"></div>
                    </header>

                    <div class="sekong-intro">
                        <p class="intro-text">
                            旗袍的色彩是中华传统美学的精髓体现。从大红大紫的喜庆，
                            到素雅青黛的含蓄，每一种色彩都承载着独特的文化寓意与情感表达。
                        </p>

                        <div class="color-categories">
                            <div class="category-item">
                                <div class="category-icon" style="--cat-color: #C8102E;">红</div>
                                <div class="category-info">
                                    <h4>红韵</h4>
                                    <p>喜庆吉祥，热情奔放</p>
                                </div>
                            </div>
                            <div class="category-item">
                                <div class="category-icon" style="--cat-color: #1E3A5F;">蓝</div>
                                <div class="category-info">
                                    <h4>青黛</h4>
                                    <p>典雅沉静，知性内敛</p>
                                </div>
                            </div>
                            <div class="category-item">
                                <div class="category-icon" style="--cat-color: #D4AF37;">金</div>
                                <div class="category-info">
                                    <h4>金华</h4>
                                    <p>尊贵华丽，雍容大气</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="explore-btn group">
                        <span>进入色控展览</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- 背景装饰 -->
        <div class="bg-decoration">
            <div class="bg-gradient"></div>
        </div>
    </section>
</template>

<script setup lang="ts">
interface ColorInfo {
    name: string
    hex: string
}

const colorPalette: ColorInfo[] = [
    { name: '胭脂红', hex: '#C8102E' },
    { name: '松柏绿', hex: '#2E5D4B' },
    { name: '宝石蓝', hex: '#1E3A5F' },
    { name: '藤黄', hex: '#D4AF37' },
    { name: '黛紫', hex: '#6B3A6B' },
    { name: '月白', hex: '#E8E4D9' }
]
</script>

<style scoped>
.sekong-section {
    padding: var(--spacing-2xl) 0;
    background: var(--color-bg-main);
    position: relative;
    overflow: hidden;
}

.sekong-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
    align-items: center;
}

/* 左侧视觉 */
.sekong-visual {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.template-showcase {
    position: relative;
    width: 100%;
    max-width: 400px;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-xl);
    border: 4px solid white;
    transform: rotate(-3deg);
    transition: transform var(--transition-normal);
}

.template-showcase:hover {
    transform: rotate(0deg) scale(1.02);
}

.template-img {
    width: 100%;
    height: auto;
    display: block;
}

.template-shine {
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255,255,255,0.3), transparent);
    transform: skewX(-25deg);
    animation: shine 6s infinite;
}

@keyframes shine {
    0%, 50% { left: -100%; }
    100% { left: 200%; }
}

/* Remove old color wheel styles */

/* 右侧内容 */
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

.text-gradient {
    background: linear-gradient(135deg, var(--color-primary-red) 0%, var(--color-gold) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.title-line {
    width: 60px;
    height: 3px;
    background: var(--color-gold);
    margin-top: var(--spacing-sm);
}

.intro-text {
    font-size: 1.1rem;
    color: var(--color-text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-lg);
}

/* 颜色分类 */
.color-categories {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.category-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.category-icon {
    width: 50px;
    height: 50px;
    background: var(--cat-color);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-serif-cn);
    font-size: 1.2rem;
    font-weight: 700;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.category-info h4 {
    font-family: var(--font-serif-cn);
    font-size: 1rem;
    color: var(--color-text-primary);
    margin-bottom: 2px;
}

.category-info p {
    font-size: 0.85rem;
    color: var(--color-text-muted);
}

/* 按钮 */
.explore-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 14px 28px;
    background: linear-gradient(135deg, var(--color-gold) 0%, #c9a227 100%);
    color: white;
    border: none;
    border-radius: var(--border-radius-sm);
    font-family: var(--font-serif-cn);
    font-size: 1rem;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.explore-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(212, 175, 55, 0.4);
}

.explore-btn svg {
    width: 18px;
    height: 18px;
    transition: transform var(--transition-fast);
}

.explore-btn:hover svg {
    transform: translateX(4px);
}

/* 背景装饰 */
.bg-decoration {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 0;
}

.bg-gradient {
    position: absolute;
    width: 500px;
    height: 500px;
    left: -100px;
    top: 50%;
    transform: translateY(-50%);
    background: radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: scale(0.8);
    }

    to {
        opacity: 0.85;
        transform: scale(1);
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .sekong-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-xl);
    }

    .sekong-visual {
        order: 2;
    }

    .sekong-content {
        order: 1;
    }
}

@media (max-width: 768px) {
    .color-wheel {
        width: 250px;
        height: 250px;
    }

    .wheel-center {
        width: 60px;
        height: 60px;
    }

    .center-text {
        font-size: 1.5rem;
    }
}
</style>
