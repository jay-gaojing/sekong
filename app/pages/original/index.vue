<template>
  <main class="original-page">
    <section class="hero">
      <p class="eyebrow">Sekong Original</p>
      <h1>色控原创</h1>
      <p class="intro">
        收录色控原创旗袍、新中式女装、男装、婚庆礼服与配饰系列，呈现非遗工艺在当代服饰中的设计转译。
      </p>
    </section>

    <section class="original-layout" aria-label="色控原创分类图库">
      <aside class="category-tabs">
        <button
          v-for="item in categories"
          :key="item.id"
          type="button"
          class="category-tab"
          :class="{ active: activeId === item.id }"
          @click="setActiveId(item.id)"
        >
          <span>{{ item.title }}</span>
          <small>{{ item.subtitle }} · {{ item.count }} 张</small>
        </button>
      </aside>

      <article v-if="activeCategory" class="gallery-panel">
        <header class="gallery-header">
          <span class="detail-label">Original Series</span>
          <h2>{{ activeCategory.title }}：{{ activeCategory.subtitle }}</h2>
        </header>

        <div class="image-grid">
          <button
            v-for="image in activeCategory.images"
            :key="image"
            type="button"
            class="image-card"
            @click="previewImage = image"
          >
            <img :src="image" :alt="activeCategory.subtitle" loading="lazy" />
          </button>
        </div>
      </article>
    </section>

    <Teleport to="body">
      <div v-if="previewImage" class="preview-backdrop" @click="previewImage = ''">
        <button type="button" class="preview-close" aria-label="关闭预览" @click.stop="previewImage = ''">
          ×
        </button>
        <img :src="previewImage" alt="色控原创图片预览" @click.stop />
      </div>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import rawCategories from '../../../public/original/original-assets.json'

interface OriginalCategory {
  id: string
  title: string
  subtitle: string
  count: number
  images: string[]
}

const categories = rawCategories as OriginalCategory[]
const route = useRoute()
const router = useRouter()
const defaultId = categories[0]?.id ?? ''
const categoryIds = new Set(categories.map((item) => item.id))

const resolveCategoryId = (value: unknown) => {
  const id = typeof value === 'string' ? value : ''
  return categoryIds.has(id) ? id : defaultId
}

const activeId = ref(resolveCategoryId(route.query.category))
const previewImage = ref('')
const activeCategory = computed(() => categories.find((item) => item.id === activeId.value))

const setActiveId = (id: string) => {
  activeId.value = resolveCategoryId(id)
  router.replace({ query: { ...route.query, category: activeId.value } })
}

watch(
  () => route.query.category,
  (value) => {
    activeId.value = resolveCategoryId(value)
  },
  { immediate: true }
)

useHead({
  title: '色控原创 - 色控旗袍数据库',
})
</script>

<style scoped>
.original-page {
  min-height: 100vh;
  padding: calc(var(--header-height) + 48px) clamp(18px, 4vw, 56px) 72px;
  background:
    radial-gradient(circle at 16% 12%, rgba(212, 175, 55, 0.14), transparent 30%),
    linear-gradient(180deg, rgba(16, 13, 12, 0.98), var(--color-bg-dark) 48%);
  color: var(--color-text-light);
}

.hero,
.original-layout {
  width: min(1220px, 100%);
  margin-inline: auto;
}

.hero {
  margin-bottom: 34px;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--color-gold);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0;
  color: var(--color-gold);
  font-family: var(--font-serif-cn);
  letter-spacing: 0;
}

h1 {
  font-size: clamp(2.2rem, 4.2vw, 4.2rem);
  line-height: 1.08;
}

.intro {
  max-width: 780px;
  margin: 16px 0 0;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.original-layout {
  display: grid;
  grid-template-columns: minmax(220px, 300px) 1fr;
  gap: 24px;
  align-items: start;
}

.category-tabs {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  display: grid;
  gap: 12px;
}

.category-tab {
  width: 100%;
  padding: 18px;
  border: 1px solid rgba(214, 176, 107, 0.2);
  border-radius: 8px;
  background: rgba(255, 248, 232, 0.045);
  color: var(--color-text-light);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.category-tab:hover,
.category-tab.active {
  border-color: rgba(214, 176, 107, 0.72);
  background: rgba(214, 176, 107, 0.12);
  transform: translateY(-2px);
}

.category-tab span {
  display: block;
  margin-bottom: 8px;
  color: var(--color-gold);
  font-family: var(--font-serif-cn);
  font-size: 1.12rem;
  font-weight: 700;
}

.category-tab small {
  color: var(--color-text-muted);
  font-size: 0.84rem;
}

.gallery-panel {
  padding: clamp(20px, 3vw, 32px);
  border: 1px solid rgba(214, 176, 107, 0.2);
  border-radius: 8px;
  background: rgba(255, 248, 232, 0.052);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.22);
}

.gallery-header {
  margin-bottom: 22px;
}

.detail-label {
  display: block;
  margin-bottom: 8px;
  color: var(--color-text-muted);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.gallery-header h2 {
  font-size: clamp(1.5rem, 2.6vw, 2.4rem);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 14px;
}

.image-card {
  display: block;
  width: 100%;
  padding: 0;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid rgba(214, 176, 107, 0.22);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  cursor: zoom-in;
}

.image-card img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.25s ease;
}

.image-card:hover img {
  transform: scale(1.04);
}

.preview-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(0, 0, 0, 0.84);
  cursor: zoom-out;
}

.preview-backdrop img {
  max-width: min(1080px, 94vw);
  max-height: 88vh;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 0 22px 72px rgba(0, 0, 0, 0.46);
}

.preview-close {
  position: fixed;
  top: 20px;
  right: 22px;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.26);
  border-radius: 999px;
  background: rgba(18, 16, 14, 0.82);
  color: #fff;
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
}

@media (max-width: 980px) {
  .original-layout {
    grid-template-columns: 1fr;
  }

  .category-tabs {
    position: static;
  }
}
</style>
