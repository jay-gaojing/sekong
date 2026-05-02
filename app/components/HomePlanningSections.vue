<template>
  <section class="planning-section">
    <div class="section-inner">
      <header class="section-header">
        <p class="eyebrow">Longfeng Qipao Handmade Craftsmanship</p>
        <h2>旗袍历史演变</h2>
        <p>The Historical Evolution of the Qipao</p>
      </header>

      <div class="history-strip">
        <button
          v-for="(image, index) in assets.history"
          :key="image"
          type="button"
          class="history-card"
          @click="previewImage = image"
        >
          <img :src="image" :alt="`旗袍历史演变图片 ${index + 1}`" loading="lazy" />
        </button>
      </div>

      <!-- 面料板块 -->
      <header class="section-header fabric-header">
        <p class="eyebrow">Qipao Commonly Used Fabrics</p>
        <h2>旗袍常用面料</h2>
        <p>The commonly used fabrics for the cheongsam</p>
      </header>

      <div class="fabric-gallery">
        <button
          v-for="(image, index) in fabricImages"
          :key="image"
          type="button"
          :class="['fabric-image-card', { 'fabric-image-card-cover': index === 0 }]"
          @click="previewImage = image"
        >
          <img :src="image" :alt="`旗袍常用面料图片 ${index + 1}`" loading="lazy" />
        </button>
      </div>

      <header class="section-header embroidery-header">
        <p class="eyebrow">Longfeng Qipao Handmade Craftsmanship</p>
        <h2>旗袍传统刺绣纹样</h2>
        <p>Traditional Embroidery Patterns of the Qipao</p>
      </header>

      <div class="embroidery-grid">
        <button
          v-for="(image, index) in assets.embroidery"
          :key="image"
          type="button"
          class="embroidery-card"
          @click="previewImage = image"
        >
          <img :src="image" :alt="`旗袍传统刺绣纹样 ${index + 1}`" loading="lazy" />
        </button>
      </div>

    </div>

    <Teleport to="body">
      <div v-if="previewImage" class="preview-backdrop" @click="previewImage = ''">
        <button type="button" class="preview-close" aria-label="关闭预览" @click.stop="previewImage = ''">
          ×
        </button>
        <img :src="previewImage" alt="首页图片预览" @click.stop />
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import rawAssets from '../../public/home-planning/home-assets.json'

interface FabricItem {
  title: string
  subtitle: string
  event?: string
  eventDate?: string
  description?: string
  image?: string
}

interface HomeAssets {
  history: string[]
  embroidery: string[]
  fabric: FabricItem[]
}

const assets = rawAssets as HomeAssets
const fabricImages = [
  'https://myvmail.us.ci/images/materials/cover.jpg',
  'https://myvmail.us.ci/images/materials/poster-01.jpg',
  'https://myvmail.us.ci/images/materials/poster-02.jpg',
  'https://myvmail.us.ci/images/materials/poster-03.jpg',
  'https://myvmail.us.ci/images/materials/poster-04.jpg',
  'https://myvmail.us.ci/images/materials/poster-05.jpg',
  'https://myvmail.us.ci/images/materials/poster-06.jpg',
  'https://myvmail.us.ci/images/materials/poster-07.jpg',
  'https://myvmail.us.ci/images/materials/poster-08.jpg',
  'https://myvmail.us.ci/images/materials/poster-09.jpg',
  'https://myvmail.us.ci/images/materials/poster-10.jpg',
  'https://myvmail.us.ci/images/materials/poster-11.jpg',
]
const previewImage = ref('')
</script>

<style scoped>
.planning-section {
  position: relative;
  padding: var(--spacing-2xl) 0;
  background: #111;
  color: var(--color-text-primary);
}

.section-inner {
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
}

.section-header {
  margin-bottom: 28px;
  text-align: center;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--color-gold);
  font-family: var(--font-serif-en);
  font-size: 0.88rem;
  font-style: italic;
  letter-spacing: 0.08em;
}

h2 {
  margin: 0;
  color: var(--color-gold);
  font-family: var(--font-serif-cn);
  font-size: clamp(2rem, 4vw, 3.5rem);
  letter-spacing: 0;
}

.section-header p:last-child {
  margin: 8px 0 0;
  color: var(--color-text-muted);
  font-family: var(--font-serif-en);
  letter-spacing: 0.12em;
}

.history-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.history-card,
.embroidery-card {
  display: block;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(214, 176, 107, 0.22);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.35);
  cursor: zoom-in;
}

.history-card {
  aspect-ratio: 3 / 4;
}

/* ==================== Fabric Section ==================== */
.fabric-header {
  margin-top: var(--spacing-2xl);
}

.fabric-gallery {
  display: flex;
  gap: 20px;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 4px 10px 16px;
  gap: 20px;
  margin-bottom: var(--spacing-2xl);
  scroll-snap-type: x proximity;
  scrollbar-width: thin;
  scrollbar-color: rgba(214, 176, 107, 0.55) rgba(255, 255, 255, 0.08);
}

.fabric-gallery::-webkit-scrollbar {
  height: 10px;
}

.fabric-gallery::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.08);
}

.fabric-gallery::-webkit-scrollbar-thumb {
  background: rgba(214, 176, 107, 0.55);
  border-radius: 999px;
}

.fabric-image-card {
  display: block;
  flex: 0 0 248px;
  padding: 0;
  overflow: hidden;
  border: none;
  background: #181615;
  cursor: zoom-in;
  scroll-snap-align: start;
}

.fabric-image-card-cover {
  flex-basis: 280px;
}

.fabric-image-card img {
  display: block;
  width: 100%;
  height: 360px;
  object-fit: cover;
  object-position: center;
  transition: transform 0.25s ease;
}

.fabric-image-card-cover img {
  object-position: 18% center;
}

.fabric-image-card:hover img {
  transform: scale(1.035);
}

/* ==================== Embroidery Section ==================== */
.embroidery-header {
  margin-top: var(--spacing-2xl);
}

.embroidery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 14px;
}

.embroidery-card {
  aspect-ratio: auto;
  background: rgba(24, 22, 21, 0.92);
}

.history-card img,
.feature-panel img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 0.25s ease;
}

.embroidery-card img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
  transition: transform 0.25s ease;
}

.history-card:hover img,
.embroidery-card:hover img {
  transform: scale(1.04);
}

/* ==================== Preview Modal ==================== */
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
  .fabric-gallery {
    gap: 16px;
    padding-inline: 4px;
  }

  .fabric-image-card {
    flex-basis: 220px;
  }

  .fabric-image-card-cover {
    flex-basis: 248px;
  }
}

@media (max-width: 640px) {
  .section-inner {
    width: min(100% - 32px, 1180px);
  }

  .history-strip {
    grid-auto-columns: minmax(160px, 72vw);
  }

  .embroidery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .fabric-gallery {
    gap: 14px;
  }

  .fabric-image-card img {
    height: auto;
  }

  .fabric-image-card {
    flex-basis: min(72vw, 240px);
  }

  .fabric-image-card-cover {
    flex-basis: min(78vw, 268px);
  }
}
</style>
