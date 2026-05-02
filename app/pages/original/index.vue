<template>
  <main class="original-page">
    <section class="original-hero">
      <p class="eyebrow">Sekong Original</p>
      <h1>衣脉相承·非遗旗袍数字图鉴</h1>
      <p class="hero-copy">以下点开后的图片和文字参考后面附录都有详细说明。</p>
    </section>

    <nav class="category-nav" aria-label="色控原创类目导航">
      <a v-for="item in categories" :key="item.id" :href="`#${item.id}`">
        <span>{{ item.title }}</span>{{ item.subtitle }}
      </a>
    </nav>

    <section
      v-for="(category, categoryIndex) in categories"
      :id="category.id"
      :key="category.id"
      class="category-section"
    >
      <header class="category-header">
        <span class="section-number">{{ String(categoryIndex + 1).padStart(2, '0') }}</span>
        <p class="section-kicker">Original Series</p>
        <h2>{{ category.title }}：{{ category.subtitle }}</h2>
        <p class="category-copy">{{ category.description }}</p>
      </header>

      <div class="image-grid">
        <button
          v-for="(image, index) in category.images"
          :key="image"
          type="button"
          class="image-card"
          @click="previewImage = image"
        >
          <img :src="image" :alt="`${category.title}${category.subtitle}图片 ${index + 1}`" loading="lazy" />
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
        </button>
      </div>
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
  description: string
  count: number
  images: string[]
}

const categories = rawCategories as OriginalCategory[]
const previewImage = ref('')

const scrollToHash = () => {
  if (!window.location.hash) return
  window.requestAnimationFrame(() => {
    document.querySelector(window.location.hash)?.scrollIntoView({ block: 'start' })
  })
}

onMounted(scrollToHash)

useHead({
  title: '色控原创 - 色控旗袍数据库',
})
</script>

<style scoped>
.original-page {
  min-height: 100vh;
  padding-bottom: 96px;
  background:
    radial-gradient(circle at 78% 8%, rgba(169, 38, 51, 0.18), transparent 28%),
    radial-gradient(circle at 10% 38%, rgba(214, 176, 107, 0.1), transparent 26%),
    #050505;
  color: #fff;
  overflow: hidden;
}

.original-hero,
.category-nav {
  width: min(1080px, calc(100% - 260px));
  margin-inline: auto;
}

.original-hero {
  padding: 92px 0 42px;
  text-align: center;
}

.eyebrow,
.section-kicker {
  margin: 0;
  color: #d9b36c;
  font-family: var(--font-serif-en);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0;
  color: rgba(255, 248, 232, 0.94);
  font-family: var(--font-serif-cn);
  font-weight: 700;
  letter-spacing: 0;
}

h1 {
  margin: 18px auto 0;
  font-size: clamp(3rem, 6vw, 6.4rem);
  font-weight: 600;
  line-height: 1.12;
}

.hero-copy {
  max-width: 920px;
  margin: 28px auto 0;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-serif-cn);
  font-size: 1.04rem;
  line-height: 1.95;
}

.category-nav {
  position: sticky;
  top: var(--header-height);
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  padding: 14px 0 22px;
  background: rgba(5, 5, 5, 0.86);
  backdrop-filter: blur(10px);
}

.category-nav a {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  border: 1px solid rgba(214, 176, 107, 0.45);
  border-radius: 999px;
  color: rgba(255, 248, 232, 0.78);
  font-family: var(--font-serif-cn);
  font-size: 0.95rem;
  text-decoration: none;
}

.category-nav span {
  color: var(--color-gold);
  font-weight: 700;
}

.category-section {
  width: min(1180px, calc(100% - 300px));
  margin: 0 auto;
  padding: 76px 0 90px;
  scroll-margin-top: calc(var(--header-height) + 64px);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  transform: translateX(-34px);
}

.category-header {
  display: grid;
  justify-items: center;
  gap: 14px;
  max-width: 980px;
  margin: 0 auto 34px;
  text-align: center;
}

.section-number {
  color: rgba(255, 255, 255, 0.2);
  font-family: var(--font-serif-en);
  font-size: clamp(2.8rem, 5vw, 5.2rem);
  line-height: 0.82;
}

.category-header h2 {
  margin: 8px 0 0;
  color: #fff;
  font-size: clamp(2rem, 4vw, 4.2rem);
  font-weight: 600;
  line-height: 1.1;
}

.category-copy {
  max-width: 980px;
  margin: 0;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-serif-cn);
  font-size: 1rem;
  line-height: 1.95;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(190px, 1fr));
  gap: clamp(16px, 1.55vw, 24px);
}

.image-card {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(214, 176, 107, 0.2);
  border-radius: 8px;
  background: rgba(255, 248, 232, 0.045);
  cursor: zoom-in;
  box-shadow: 0 20px 46px rgba(0, 0, 0, 0.35);
}

.image-card img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.image-card:hover img {
  transform: scale(1.035);
  filter: saturate(1.06) contrast(1.03);
}

.image-card span {
  position: absolute;
  left: 14px;
  top: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--font-serif-en);
  font-size: 0.86rem;
  letter-spacing: 0.08em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.72);
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

@media (max-width: 900px) {
  .original-hero,
  .category-nav,
  .category-section {
    width: min(760px, calc(100% - 32px));
    transform: none;
  }

  .image-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 620px) {
  .original-hero {
    padding: 56px 0 42px;
  }

  .category-nav {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
  }

  .category-nav a {
    flex: 0 0 auto;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>
