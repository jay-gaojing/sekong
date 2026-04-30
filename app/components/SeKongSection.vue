<template>
  <section id="sekong" class="sekong-section" aria-labelledby="color-title">
    <header class="color-hero">
      <p class="eyebrow">Qipao Color Archive</p>
      <h1 id="color-title">色彩</h1>
    </header>

    <article
      v-for="(series, seriesIndex) in colorSeries"
      :key="series.id"
      class="series-stage"
      :class="`series-${series.id}`"
    >
      <div class="series-copy">
        <span class="series-number">{{ String(seriesIndex + 1).padStart(2, '0') }}</span>
        <p class="series-kicker">{{ series.title }}</p>
        <h2>{{ series.subtitle }}</h2>
        <p class="series-description">{{ series.description }}</p>
      </div>

      <div class="color-grid" :class="{ compact: series.images.length <= 6 }">
        <button
          v-for="(src, index) in series.images"
          :key="src"
          type="button"
          class="color-card"
          @click="openPreview(src, `${series.title}色彩素材 ${index + 1}`)"
        >
          <img :src="src" :alt="`${series.title}色彩素材 ${index + 1}`" loading="lazy" />
        </button>
      </div>
    </article>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="previewImage" class="lightbox-overlay" @click="closePreview">
          <button class="lightbox-close" type="button" aria-label="关闭预览" @click.stop="closePreview">
            <span aria-hidden="true">×</span>
          </button>
          <img :src="previewImage" :alt="previewAlt" class="lightbox-img" @click.stop />
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import rawSeries from '../../public/images/color-series/color-series.json'

interface ColorSeries {
  id: string
  title: string
  subtitle: string
  description: string
  images: string[]
}

const colorSeries = rawSeries as ColorSeries[]
const previewImage = ref('')
const previewAlt = ref('')

const openPreview = (src: string, alt: string) => {
  previewImage.value = src
  previewAlt.value = alt

  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closePreview = () => {
  previewImage.value = ''
  previewAlt.value = ''

  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.sekong-section {
  min-height: 100vh;
  padding: 0 0 96px;
  background:
    radial-gradient(circle at 82% 8%, rgba(194, 50, 70, 0.16), transparent 26%),
    radial-gradient(circle at 8% 32%, rgba(202, 158, 76, 0.1), transparent 24%),
    linear-gradient(180deg, rgba(167, 27, 45, 0.08), transparent 360px),
    #050505;
  color: #fff;
  overflow: hidden;
}

.color-hero {
  min-height: 48vh;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 18px;
  width: min(1040px, calc(100% - 250px));
  margin: 0 auto;
  padding: 72px 0 56px;
  text-align: center;
}

.eyebrow {
  margin: 0;
  color: #d7ad65;
  font-family: var(--font-serif-en);
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.color-hero h1 {
  margin: 0;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(3rem, 8vw, 6.8rem);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1;
}

.series-stage {
  min-height: 100vh;
  width: min(1180px, calc(100% - 300px));
  margin: 0 auto;
  transform: translateX(-34px);
  padding: 84px 0 104px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.series-copy {
  position: relative;
  max-width: 980px;
  margin: 0 auto 44px;
  padding: 0 20px;
  text-align: center;
  z-index: 1;
}

.series-copy::before {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -22px;
  width: 96px;
  height: 2px;
  transform: translateX(-50%);
  background: linear-gradient(90deg, rgba(217, 179, 108, 0), #d9b36c, rgba(217, 179, 108, 0));
}

.series-number {
  display: inline-block;
  margin-bottom: 16px;
  color: rgba(255, 255, 255, 0.22);
  font-family: var(--font-serif-en);
  font-size: clamp(2.5rem, 5vw, 5rem);
  line-height: 0.8;
}

.series-kicker {
  margin: 0 0 12px;
  color: #d9b36c;
  font-size: 0.95rem;
  font-weight: 700;
}

.series-copy h2 {
  margin: 0;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(2.2rem, 4.6vw, 5rem);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.12;
}

.series-description {
  max-width: 920px;
  margin: 24px auto 0;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-serif-cn);
  font-size: 1.04rem;
  line-height: 1.95;
}

.color-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(190px, 1fr));
  gap: clamp(14px, 1.35vw, 22px);
  z-index: 1;
}

.color-grid.compact {
  width: min(900px, 100%);
  margin: 0 auto;
}

.color-card {
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 22px 42px rgba(0, 0, 0, 0.34);
  cursor: zoom-in;
}

.color-card img {
  display: block;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  object-position: center;
  transition: transform 0.28s ease, filter 0.28s ease;
}

.color-card:hover img {
  transform: scale(1.04);
  filter: saturate(1.08) contrast(1.03);
}

.series-traditional .series-copy::before {
  background: linear-gradient(180deg, #e1d6bc, rgba(225, 214, 188, 0));
}

.series-dunhuang .series-copy::before {
  background: linear-gradient(180deg, #b94d31, rgba(185, 77, 49, 0));
}

.series-gugong .series-copy::before {
  background: linear-gradient(180deg, #d2a141, rgba(210, 161, 65, 0));
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  background: rgba(0, 0, 0, 0.9);
  cursor: zoom-out;
}

.lightbox-close {
  position: fixed;
  top: 20px;
  right: 22px;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 50%;
  background: rgba(18, 18, 18, 0.76);
  color: #fff;
  cursor: pointer;
  font-size: 1.9rem;
  line-height: 1;
}

.lightbox-img {
  max-width: min(1120px, 94vw);
  max-height: 90vh;
  object-fit: contain;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.22s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 980px) {
  .series-stage {
    min-height: auto;
    width: min(760px, calc(100% - 32px));
    transform: none;
    padding: 58px 0;
  }

  .series-description {
    max-width: none;
  }
}

@media (max-width: 560px) {
  .color-hero {
    width: min(100% - 28px, 720px);
    padding: 46px 0 34px;
  }

  .color-grid {
    grid-template-columns: 1fr;
  }

  .color-card img {
    aspect-ratio: 4 / 3;
  }
}
</style>
