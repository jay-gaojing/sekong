<template>
  <main class="ip-page">
    <section class="ip-hero">
      <p class="eyebrow">Intellectual Property Archive</p>
      <h1>色控旗袍知识产权</h1>
      <p class="hero-copy">
        创新是非遗活态传承的生命力。本目录系统收录与旗袍相关的发明专利、外观专利、版权作品及软件著作权，构建“非遗+知识产权”的数字化保护与利用体系。
      </p>
    </section>

    <section class="stats-band" aria-label="知识产权统计">
      <div v-for="category in categories" :key="category.id" class="stat-item">
        <strong>{{ category.count }}</strong>
        <span>{{ category.label }}</span>
      </div>
    </section>

    <section class="ip-shell" aria-label="知识产权内容">
      <aside class="category-nav">
        <button
          v-for="category in categories"
          :key="category.id"
          class="category-button"
          :class="{ active: category.id === activeId }"
          type="button"
          @click="activeId = category.id"
        >
          <span>{{ category.label }}</span>
          <small>{{ category.count }} 项</small>
        </button>
      </aside>

      <article v-if="activeCategory" class="category-panel">
        <div class="panel-copy">
          <span class="panel-label">Protection Type</span>
          <h2>{{ activeCategory.label }}</h2>
          <p>{{ activeCategory.description }}</p>
        </div>

        <div class="asset-grid">
          <button
            v-for="(item, index) in activeCategory.items"
            :key="item.image"
            class="asset-card"
            type="button"
            @click="previewItem = item"
          >
            <span class="asset-index">{{ String(index + 1).padStart(2, '0') }}</span>
            <img :src="item.image" :alt="item.title" loading="lazy" />
            <span class="asset-title">{{ item.title }}</span>
          </button>
        </div>
      </article>
    </section>

    <button
      v-if="previewItem"
      class="image-preview"
      type="button"
      aria-label="关闭预览"
      @click="previewItem = null"
    >
      <img :src="previewItem.image" :alt="previewItem.title" @click.stop />
      <span>{{ previewItem.title }}</span>
    </button>
  </main>
</template>

<script setup lang="ts">
import rawCategories from '../../../public/ip/ip-assets.json'

interface IpAsset {
  title: string
  image: string
}

interface IpCategory {
  id: string
  label: string
  description: string
  count: number
  items: IpAsset[]
}

const categories = rawCategories as IpCategory[]
const activeId = ref(categories[0]?.id ?? '')
const previewItem = ref<IpAsset | null>(null)

const activeCategory = computed(() => categories.find((category) => category.id === activeId.value))

useHead({
  title: '知识产权 - 色控旗袍数据库'
})
</script>

<style scoped>
.ip-page {
  min-height: 100vh;
  padding: calc(var(--header-height) + 42px) clamp(20px, 5vw, 72px) 72px;
  background:
    radial-gradient(circle at 16% 12%, rgba(161, 28, 46, 0.18), transparent 30%),
    linear-gradient(145deg, rgba(8, 24, 28, 0.92), rgba(20, 18, 18, 0.94) 55%, rgba(45, 29, 22, 0.92));
}

.ip-hero {
  max-width: 1120px;
  margin: 0 auto 32px;
}

.eyebrow,
.panel-label {
  color: var(--color-gold);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.ip-hero h1 {
  margin: 12px 0 16px;
  color: #f7ead1;
  font-family: var(--font-serif-cn);
  font-size: clamp(2.1rem, 5vw, 4.5rem);
  font-weight: 400;
}

.hero-copy {
  max-width: 860px;
  color: rgba(255, 248, 235, 0.78);
  font-size: 1.08rem;
  line-height: 1.9;
}

.stats-band {
  max-width: 1120px;
  margin: 0 auto 28px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  border-top: 1px solid rgba(212, 175, 55, 0.24);
  border-bottom: 1px solid rgba(212, 175, 55, 0.24);
}

.stat-item {
  padding: 20px 24px;
  border-right: 1px solid rgba(212, 175, 55, 0.18);
}

.stat-item:last-child {
  border-right: 0;
}

.stat-item strong {
  display: block;
  color: #f4d58a;
  font-size: 2.2rem;
  font-weight: 500;
}

.stat-item span {
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.95rem;
}

.ip-shell {
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr);
  gap: 28px;
}

.category-nav {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  align-self: start;
  display: grid;
  gap: 10px;
}

.category-button {
  width: 100%;
  padding: 16px 18px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  background: rgba(255, 255, 255, 0.045);
  color: rgba(255, 255, 255, 0.72);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.category-button:hover,
.category-button.active {
  transform: translateX(4px);
  border-color: rgba(212, 175, 55, 0.72);
  background: rgba(212, 175, 55, 0.12);
  color: #fff3d8;
}

.category-button span,
.category-button small {
  display: block;
}

.category-button span {
  font-size: 1rem;
}

.category-button small {
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.48);
}

.category-panel {
  min-width: 0;
}

.panel-copy {
  margin-bottom: 24px;
  padding-bottom: 22px;
  border-bottom: 1px solid rgba(212, 175, 55, 0.18);
}

.panel-copy h2 {
  margin: 10px 0;
  color: #f7ead1;
  font-family: var(--font-serif-cn);
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  font-weight: 400;
}

.panel-copy p {
  max-width: 760px;
  color: rgba(255, 248, 235, 0.72);
  line-height: 1.85;
}

.asset-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 18px;
}

.asset-card {
  position: relative;
  display: grid;
  grid-template-rows: 240px auto;
  gap: 12px;
  padding: 12px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  background: rgba(255, 255, 255, 0.055);
  color: #f5ead6;
  text-align: left;
  cursor: pointer;
  overflow: hidden;
  transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
}

.asset-card:hover {
  transform: translateY(-4px);
  border-color: rgba(212, 175, 55, 0.68);
  background: rgba(255, 255, 255, 0.08);
}

.asset-card img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  object-position: top center;
  background: rgba(255, 255, 255, 0.08);
}

.asset-index {
  position: absolute;
  top: 18px;
  left: 18px;
  padding: 4px 8px;
  background: rgba(15, 19, 18, 0.76);
  color: #f5d58a;
  font-size: 0.76rem;
  letter-spacing: 0.08em;
}

.asset-title {
  min-height: 44px;
  color: rgba(255, 248, 235, 0.84);
  font-size: 0.92rem;
  line-height: 1.55;
  word-break: break-word;
}

.image-preview {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: grid;
  place-items: center;
  gap: 14px;
  padding: 32px;
  border: 0;
  background: rgba(0, 0, 0, 0.82);
  cursor: zoom-out;
}

.image-preview img {
  max-width: min(92vw, 1100px);
  max-height: 84vh;
  object-fit: contain;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.45);
}

.image-preview span {
  max-width: min(92vw, 900px);
  color: rgba(255, 255, 255, 0.82);
  text-align: center;
  line-height: 1.6;
}

@media (max-width: 860px) {
  .stats-band,
  .ip-shell {
    grid-template-columns: 1fr;
  }

  .stats-band {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .stat-item:nth-child(2) {
    border-right: 0;
  }

  .category-nav {
    position: static;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .category-button:hover,
  .category-button.active {
    transform: translateY(-2px);
  }
}

@media (max-width: 560px) {
  .ip-page {
    padding-inline: 16px;
  }

  .stats-band,
  .category-nav {
    grid-template-columns: 1fr;
  }

  .stat-item {
    border-right: 0;
    border-bottom: 1px solid rgba(212, 175, 55, 0.18);
  }

  .stat-item:last-child {
    border-bottom: 0;
  }

  .asset-grid {
    grid-template-columns: 1fr;
  }
}
</style>
