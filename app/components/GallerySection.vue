<template>
    <section id="gallery" class="gallery-section">
        <div class="container">
            <header class="section-header text-center">
                <span class="section-tag">典藏赏析</span>
                <h2 class="section-title">旗袍图鉴</h2>
                <p class="section-subtitle">穿越时光的东方优雅</p>
            </header>

            <!-- 分类筛选 -->
            <div class="filter-bar">
                <button v-for="tab in filterTabs" :key="tab.id" class="filter-btn"
                    :class="{ active: activeFilter === tab.id }" @click="activeFilter = tab.id">
                    {{ tab.label }}
                </button>
            </div>

            <!-- 图片网格 -->
            <div class="gallery-grid">
                <div v-for="(item, index) in galleryItems" :key="index" class="gallery-item"
                    :class="[`item-${(index % 6) + 1}`]" @click="openPreview(item)">
                    <div class="item-inner">
                        <div class="item-placeholder" :style="{ background: item.color }">
                            <span class="placeholder-icon">{{ item.icon }}</span>
                        </div>
                        <div class="item-overlay">
                            <h3 class="item-title">{{ item.title }}</h3>
                            <span class="item-category">{{ item.category }}</span>
                        </div>
                        <div class="item-hover-effect"></div>
                    </div>
                </div>
            </div>

            <!-- 加载更多 -->
            <div class="load-more">
                <button class="load-btn">
                    <span>探索更多</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface FilterTab {
    id: string
    label: string
}

interface GalleryItem {
    title: string
    category: string
    icon: string
    color: string
}

const filterTabs: FilterTab[] = [
    { id: 'all', label: '全部' },
    { id: 'classic', label: '经典款式' },
    { id: 'embroidery', label: '刺绣纹样' },
    { id: 'modern', label: '现代创新' },
    { id: 'vintage', label: '民国风韵' }
]

const activeFilter = ref('all')

const galleryItems: GalleryItem[] = [
    { title: '红缎绣花旗袍', category: '经典款式', icon: '👗', color: 'linear-gradient(135deg, #c8102e 0%, #8b1a2f 100%)' },
    { title: '青花瓷纹样', category: '刺绣纹样', icon: '🏺', color: 'linear-gradient(135deg, #1e3a5f 0%, #2a4f7a 100%)' },
    { title: '金丝牡丹绣', category: '刺绣纹样', icon: '🌸', color: 'linear-gradient(135deg, #d4af37 0%, #c9a227 100%)' },
    { title: '月白素雅款', category: '经典款式', icon: '🌙', color: 'linear-gradient(135deg, #e8e4d9 0%, #d4d0c4 100%)' },
    { title: '墨绿锦缎', category: '现代创新', icon: '🌿', color: 'linear-gradient(135deg, #2e5d4b 0%, #1f4035 100%)' },
    { title: '民国海派风', category: '民国风韵', icon: '🎭', color: 'linear-gradient(135deg, #6b3a6b 0%, #4a2848 100%)' },
    { title: '蝴蝶盘扣款', category: '经典款式', icon: '🦋', color: 'linear-gradient(135deg, #c8102e 0%, #d4af37 100%)' },
    { title: '苏绣荷花', category: '刺绣纹样', icon: '🪷', color: 'linear-gradient(135deg, #f8b4b4 0%, #e88a8a 100%)' }
]

const openPreview = (item: GalleryItem) => {
    console.log('Preview:', item.title)
    // TODO: 实现图片预览功能
}
</script>

<style scoped>
.gallery-section {
    padding: var(--spacing-2xl) 0;
    background: var(--color-bg-paper);
    position: relative;
}

.section-header {
    margin-bottom: var(--spacing-xl);
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
    color: var(--color-primary-red);
    margin-bottom: var(--spacing-xs);
}

.section-subtitle {
    font-family: var(--font-serif-cn);
    color: var(--color-text-muted);
    font-size: 1.1rem;
}

/* 筛选栏 */
.filter-bar {
    display: flex;
    justify-content: center;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-xl);
    flex-wrap: wrap;
}

.filter-btn {
    padding: 10px 24px;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: var(--border-radius-full);
    font-family: var(--font-serif-cn);
    font-size: 0.9rem;
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.filter-btn:hover {
    border-color: var(--color-gold);
    color: var(--color-gold);
}

.filter-btn.active {
    background: var(--color-primary-red);
    border-color: var(--color-primary-red);
    color: white;
}

/* 图片网格 */
.gallery-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 200px;
    gap: var(--spacing-md);
}

/* 不规则布局 */
.gallery-item.item-1 {
    grid-row: span 2;
}

.gallery-item.item-3 {
    grid-column: span 2;
}

.gallery-item.item-5 {
    grid-row: span 2;
}

.gallery-item {
    position: relative;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    cursor: pointer;
}

.item-inner {
    width: 100%;
    height: 100%;
    position: relative;
}

.item-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform var(--transition-slow);
}

.placeholder-icon {
    font-size: 4rem;
    opacity: 0.8;
}

.gallery-item:hover .item-placeholder {
    transform: scale(1.1);
}

.item-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: var(--spacing-md);
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
    color: white;
    transform: translateY(100%);
    transition: transform var(--transition-normal);
}

.gallery-item:hover .item-overlay {
    transform: translateY(0);
}

.item-title {
    font-family: var(--font-serif-cn);
    font-size: 1.1rem;
    margin-bottom: 4px;
    color: white;
}

.item-category {
    font-size: 0.8rem;
    color: var(--color-gold);
}

.item-hover-effect {
    position: absolute;
    inset: 0;
    background: rgba(200, 16, 46, 0);
    transition: background var(--transition-fast);
}

.gallery-item:hover .item-hover-effect {
    background: rgba(200, 16, 46, 0.1);
}

/* 加载更多 */
.load-more {
    text-align: center;
    margin-top: var(--spacing-xl);
}

.load-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 14px 32px;
    background: transparent;
    border: 2px solid var(--color-gold);
    border-radius: var(--border-radius-full);
    font-family: var(--font-serif-cn);
    font-size: 1rem;
    color: var(--color-gold);
    cursor: pointer;
    transition: all var(--transition-fast);
}

.load-btn:hover {
    background: var(--color-gold);
    color: white;
    transform: translateY(-2px);
}

.load-btn svg {
    width: 18px;
    height: 18px;
    animation: bounce 2s infinite;
}

@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(4px);
    }
}

/* Responsive */
@media (max-width: 1024px) {
    .gallery-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (max-width: 768px) {
    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 150px;
    }

    .gallery-item.item-1,
    .gallery-item.item-3,
    .gallery-item.item-5 {
        grid-row: span 1;
        grid-column: span 1;
    }

    .placeholder-icon {
        font-size: 2.5rem;
    }
}
</style>
