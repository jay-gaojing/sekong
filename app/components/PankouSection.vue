<template>
  <section id="pankou" class="pankou-section" aria-labelledby="pankou-title">
    <header class="pankou-hero">
      <p class="eyebrow">Pankou Aesthetic Archive</p>
      <h1 id="pankou-title">?????????????</h1>
      <p class="hero-copy">
        ????????????????????????????????????????????????
        ?????????????????????????????????????
      </p>
    </header>

    <div class="featured-sections">
      <article v-for="section in archiveSections" :key="section.id" class="archive-section">
        <header class="section-heading">
          <span class="section-number">{{ section.number }}</span>
          <div>
            <p class="section-kicker">{{ section.kicker }}</p>
            <h2>{{ section.title }}</h2>
            <p class="section-copy">{{ section.description }}</p>
          </div>
        </header>

        <div class="archive-grid">
          <button
            v-for="(image, index) in section.images"
            :key="image.src"
            type="button"
            class="archive-card"
            @click="openPreview(image.src, image.alt)"
          >
            <img :src="image.src" :alt="image.alt" loading="lazy" />
            <span>{{ String(index + 1).padStart(2, '0') }}</span>
          </button>
        </div>
      </article>
    </div>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="previewImage" class="lightbox-overlay" @click="closePreview">
          <button class="lightbox-close" type="button" aria-label="????" @click.stop="closePreview">
            <span aria-hidden="true">?</span>
          </button>
          <img :src="previewImage" :alt="previewAlt" class="lightbox-img" @click.stop />
        </div>
      </transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface GalleryImage {
  src: string
  alt: string
}

interface ArchiveSection {
  id: string
  number: string
  title: string
  kicker: string
  description: string
  images: GalleryImage[]
}

const archiveSections: ArchiveSection[] = [
  {
    id: 'types',
    number: '01',
    title: '????',
    kicker: 'Craft Types',
    description:
      '????????????????????????????????????????????????????????????????????????????????????????',
    images: Array.from({ length: 9 }, (_, index) => ({
      src: `/images/pankou-archive/types/type-${String(index + 1).padStart(2, '0')}.jpg`,
      alt: `????? ${index + 1}`,
    })),
  },
  {
    id: 'styles',
    number: '02',
    title: '????',
    kicker: 'Form Styles',
    description:
      '?????????????????????????????????????????????????????????????????????????????????????????',
    images: Array.from({ length: 9 }, (_, index) => ({
      src: `/images/pankou-archive/styles/style-${String(index + 1).padStart(2, '0')}.jpg`,
      alt: `????? ${index + 1}`,
    })),
  },
]

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
.pankou-section {
  min-height: 100vh;
  padding: 0 0 96px;
  background:
    radial-gradient(circle at 76% 8%, rgba(173, 32, 48, 0.18), transparent 28%),
    radial-gradient(circle at 8% 36%, rgba(214, 176, 107, 0.1), transparent 26%),
    #050505;
  color: #fff;
  overflow: hidden;
}

.pankou-hero {
  width: min(1080px, calc(100% - 260px));
  margin: 0 auto;
  padding: 92px 0 64px;
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

.pankou-hero h1 {
  margin: 18px auto 0;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(1.8rem, 3.5vw, 3.6rem);
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.2;
}

.hero-copy {
  max-width: 920px;
  margin: 28px auto 0;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-serif-cn);
  font-size: 1.04rem;
  line-height: 1.95;
}

.featured-sections {
  width: min(1180px, calc(100% - 300px));
  margin: 0 auto;
  transform: translateX(-34px);
}

.archive-section {
  padding: 76px 0 90px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
}

.section-heading {
  display: grid;
  justify-items: center;
  gap: 14px;
  margin-bottom: 32px;
  text-align: center;
}

.section-number {
  color: rgba(255, 255, 255, 0.2);
  font-family: var(--font-serif-en);
  font-size: clamp(2.8rem, 5vw, 5.2rem);
  line-height: 0.82;
}

.section-heading h2 {
  margin: 8px 0 0;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(2rem, 4vw, 4.2rem);
  font-weight: 600;
  letter-spacing: 0;
  line-height: 1.1;
}

.section-copy {
  width: min(820px, calc(100vw - 64px));
  margin: 16px auto 0;
  color: rgba(255, 255, 255, 0.74);
  font-family: var(--font-serif-cn);
  font-size: 1rem;
  line-height: 1.9;
}

.archive-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(190px, 1fr));
  gap: clamp(16px, 1.55vw, 24px);
}

.archive-card {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.045);
  cursor: zoom-in;
  box-shadow: 0 20px 46px rgba(0, 0, 0, 0.35);
}

.archive-card img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: center;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.archive-card:hover img {
  transform: scale(1.035);
  filter: saturate(1.06) contrast(1.03);
}

.archive-card span {
  position: absolute;
  left: 14px;
  top: 12px;
  color: rgba(255, 255, 255, 0.8);
  font-family: var(--font-serif-en);
  font-size: 0.86rem;
  letter-spacing: 0.08em;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.72);
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
  .pankou-hero,
  .featured-sections {
    width: min(760px, calc(100% - 32px));
    transform: none;
  }

  .archive-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .pankou-hero {
    padding: 56px 0 42px;
  }

  .section-heading {
    gap: 10px;
  }

  .archive-grid {
    grid-template-columns: 1fr;
  }
}
</style>
