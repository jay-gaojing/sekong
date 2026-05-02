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
                <div v-for="(item, index) in getFilteredItems()" :key="index" class="gallery-item"
                    :class="[`item-${(index % 6) + 1}`]" @click="openPreview(item)">
                    <div class="item-inner">
                        <img :src="item.image" :alt="item.title" class="item-image" loading="lazy">
                        <div class="item-overlay">
                            <h3 class="item-title">{{ item.title }}</h3>
                            <span class="item-category">{{ getCategoryLabel(item.category) }}</span>
                        </div>
                        <div class="item-hover-effect"></div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 图片预览 Lightbox -->
        <transition name="fade">
            <div v-if="previewImage" class="lightbox-overlay" @click="closePreview">
                <button class="lightbox-close" aria-label="关闭预览" @click.stop="closePreview">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 6L6 18M6 6l12 12"></path>
                    </svg>
                </button>
                <img :src="previewImage" alt="预览图" class="lightbox-img" @click.stop />
            </div>
        </transition>
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
    image: string
    description?: string
}

const filterTabs: FilterTab[] = [
    { id: 'all', label: '全部' },
    { id: 'classic', label: '传统经典系列' },
    { id: 'ai', label: '女士旗袍AI' },
    { id: 'modern', label: '现代改良系列' }
]

const activeFilter = ref('all')

const classicImages = [
    { title: '暗花绒袖', image: 'https://myvmail.us.ci/images/colors/暗花绒袖.jpg' },
    { title: '白络', image: 'https://myvmail.us.ci/images/colors/白络.jpg' },
    { title: '碧涧蝶', image: 'https://myvmail.us.ci/images/colors/碧涧蝶.jpg' },
    { title: '藏蓝锦年', image: 'https://myvmail.us.ci/images/colors/藏蓝锦年.jpg' },
    { title: '茶烟褐', image: 'https://myvmail.us.ci/images/colors/茶烟褐.jpg' }
]

const aiImages = [
    { title: 'AI旗袍-1', image: 'https://myvmail.us.ci/images/colors/ai-1.jpg' },
    { title: 'AI旗袍-2', image: 'https://myvmail.us.ci/images/colors/ai-2.jpg' },
    { title: 'AI旗袍-3', image: 'https://myvmail.us.ci/images/colors/ai-3.jpg' },
    { title: 'AI旗袍-4', image: 'https://myvmail.us.ci/images/colors/ai-4.jpg' },
    { title: 'AI旗袍-5', image: 'https://myvmail.us.ci/images/colors/ai-5.jpg' }
]

const modernImages = [
    { title: '夜航星', image: 'https://myvmail.us.ci/images/colors/夜航星.jpg' },
    { title: '碧纹凝领', image: 'https://myvmail.us.ci/images/colors/碧纹凝领.jpg' },
    { title: '藏枝', image: 'https://myvmail.us.ci/images/colors/藏枝.jpg' },
    { title: '茶绿缠枝', image: 'https://myvmail.us.ci/images/colors/茶绿缠枝.jpg' },
    { title: '赤绫流苏', image: 'https://myvmail.us.ci/images/colors/赤绫流苏.jpg' }
]

const galleryItems = ref<GalleryItem[]>([
    ...classicImages.map(item => ({ ...item, category: 'classic' })),
    ...aiImages.map(item => ({ ...item, category: 'ai' })),
    ...modernImages.map(item => ({ ...item, category: 'modern' }))
])

const getFilteredItems = () => {
    if (activeFilter.value === 'all') {
        return galleryItems.value
    }
    return galleryItems.value.filter(item => item.category === activeFilter.value)
}

const previewImage = ref<string | null>(null)

const openPreview = (item: GalleryItem) => {
    previewImage.value = item.image
    if (typeof document !== 'undefined') {
        document.body.style.overflow = 'hidden'
    }
}

const closePreview = () => {
    previewImage.value = null
    if (typeof document !== 'undefined') {
        document.body.style.overflow = ''
    }
}

const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
        classic: '传统经典系列',
        ai: '女士旗袍AI',
        modern: '现代改良系列'
    }
    return labels[category] || category
}
</script>

<style scoped>
.gallery-section {
    padding: var(--spacing-2xl) 0;
    background: var(--color-bg-dark);
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
    background: rgba(255, 255, 255, 0.05);
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

.item-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-slow);
}

.gallery-item:hover .item-image {
    transform: scale(1.1);
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

/* Lightbox 样式 */
.lightbox-overlay {
    position: fixed;
    inset: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(5px);
}

.lightbox-close {
    position: absolute;
    top: 24px;
    right: 24px;
    background: transparent;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 10000;
    padding: 8px;
    opacity: 0.7;
    transition: opacity 0.3s;
}

.lightbox-close:hover {
    opacity: 1;
}

.lightbox-img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    border-radius: var(--border-radius-md);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    animation: lightboxZoomIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes lightboxZoomIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
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
