<template>
  <main class="simulation-page">
    <section class="hero">
      <div class="hero-copy">
        <p class="eyebrow">3D Qipao Simulation</p>
        <h1>3D仿真旗袍</h1>
        <p class="intro">
          数字技术为非遗旗袍的保护、研究与传播提供了全新可能。本目录收录高精度3D仿真旗袍作品，以数字化手段还原旗袍的材质质感、版型结构与工艺细节。
        </p>
      </div>

      <div class="video-stage">
        <video :src="assets.video" controls playsinline preload="metadata" />
      </div>
    </section>

    <section class="section-heading">
      <p class="eyebrow">Gallery</p>
      <h2>3D旗袍图片</h2>
      <p>静态图像呈现不同角度下的廓形、纹样与面料光影，适合用于线上展厅、教学演示与作品归档。</p>
    </section>

    <section class="image-grid" aria-label="3D旗袍图片">
      <article
        v-for="(image, index) in simulationImages"
        :key="image.src"
        class="image-card"
        :class="{ square: image.width === image.height }"
      >
        <button type="button" class="preview-trigger" @click="openPreview(index)">
          <img :src="image.src" :alt="image.title" loading="lazy" />
          <span class="preview-text">预览</span>
        </button>
        <div class="caption">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <strong>{{ image.title }}</strong>
        </div>
      </article>
    </section>

    <Teleport to="body">
      <div
        v-if="previewImage"
        class="preview-modal"
        role="dialog"
        aria-modal="true"
        :aria-label="previewImage.title"
        @click.self="closePreview"
      >
        <button type="button" class="modal-close" aria-label="关闭预览" @click="closePreview">×</button>
        <button type="button" class="modal-nav prev" aria-label="上一张" @click="showPrev">‹</button>
        <figure class="modal-figure">
          <img :src="previewImage.src" :alt="previewImage.title" />
          <figcaption>
            <span>{{ String(activeIndex + 1).padStart(2, '0') }}</span>
            {{ previewImage.title }}
          </figcaption>
        </figure>
        <button type="button" class="modal-nav next" aria-label="下一张" @click="showNext">›</button>
      </div>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import rawAssets from '../../../public/simulation/simulation-assets.json'

interface SimulationImage {
  title: string
  src: string
  width: number
  height: number
}

interface SimulationAssets {
  video: string
  images: SimulationImage[]
}

const assets = rawAssets as SimulationAssets
const simulationImages = assets.images
const activeIndex = ref(-1)
const previewImage = computed(() => activeIndex.value >= 0 ? simulationImages[activeIndex.value] : null)

const openPreview = (index: number) => {
  activeIndex.value = index
}

const closePreview = () => {
  activeIndex.value = -1
}

const showPrev = () => {
  activeIndex.value = (activeIndex.value - 1 + simulationImages.length) % simulationImages.length
}

const showNext = () => {
  activeIndex.value = (activeIndex.value + 1) % simulationImages.length
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!previewImage.value) return
  if (event.key === 'Escape') closePreview()
  if (event.key === 'ArrowLeft') showPrev()
  if (event.key === 'ArrowRight') showNext()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeydown)
})

useHead({
  title: '3D仿真旗袍 - 色控旗袍数据库'
})
</script>

<style scoped>
.simulation-page {
  min-height: 100vh;
  padding: calc(var(--header-height) + 48px) clamp(20px, 4vw, 56px) 72px;
  background:
    radial-gradient(circle at 18% 0%, rgba(183, 139, 79, 0.18), transparent 34%),
    linear-gradient(180deg, rgba(21, 17, 14, 0.97), var(--color-bg-dark) 44%);
  color: var(--color-text-light);
}

.hero,
.section-heading,
.image-grid {
  width: min(1180px, 100%);
  margin-inline: auto;
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 0.82fr) minmax(420px, 1fr);
  gap: clamp(24px, 5vw, 54px);
  align-items: center;
  margin-bottom: 44px;
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
  line-height: 1.08;
  letter-spacing: 0;
  font-weight: 400;
}

h1 {
  font-size: clamp(2rem, 4vw, 4.1rem);
}

h2 {
  font-size: clamp(1.7rem, 3vw, 2.7rem);
}

.intro,
.section-heading p {
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.85;
}

.intro {
  max-width: 620px;
  margin: 16px 0 0;
}

.video-stage {
  border: 1px solid rgba(214, 176, 107, 0.28);
  background: rgba(255, 248, 232, 0.05);
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.28);
}

.video-stage video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
  background: #050505;
}

.section-heading {
  margin-bottom: 22px;
  padding-top: 18px;
  border-top: 1px solid rgba(214, 176, 107, 0.22);
}

.section-heading p {
  max-width: 760px;
  margin: 12px 0 0;
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 20px;
}

.image-card {
  overflow: hidden;
  border: 1px solid rgba(214, 176, 107, 0.24);
  border-radius: 8px;
  background: rgba(255, 248, 232, 0.045);
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.22);
}

.preview-trigger {
  position: relative;
  display: block;
  width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
}

.preview-trigger img {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  object-fit: cover;
  object-position: top center;
  background: rgba(255, 255, 255, 0.04);
  transition: transform 0.35s ease, filter 0.35s ease;
}

.image-card.square .preview-trigger img {
  aspect-ratio: 1 / 1;
}

.preview-trigger:hover img {
  transform: scale(1.035);
  filter: brightness(0.82);
}

.preview-text {
  position: absolute;
  right: 12px;
  bottom: 12px;
  padding: 6px 10px;
  border: 1px solid rgba(214, 176, 107, 0.48);
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.58);
  color: var(--color-gold);
  font-size: 0.78rem;
  font-weight: 700;
  opacity: 0;
  transform: translateY(6px);
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.preview-trigger:hover .preview-text,
.preview-trigger:focus-visible .preview-text {
  opacity: 1;
  transform: translateY(0);
}

.caption {
  min-height: 58px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--color-text-light);
}

.caption span {
  color: var(--color-gold);
  font-size: 0.78rem;
  font-weight: 700;
}

.caption strong {
  font-size: 0.98rem;
  font-weight: 600;
}

.preview-modal {
  position: fixed;
  inset: 0;
  z-index: 3000;
  display: grid;
  grid-template-columns: 72px minmax(0, 1fr) 72px;
  align-items: center;
  gap: 12px;
  padding: 28px;
  background: rgba(0, 0, 0, 0.86);
  backdrop-filter: blur(10px);
}

.modal-figure {
  min-width: 0;
  max-width: min(1120px, 100%);
  margin: 0 auto;
  text-align: center;
}

.modal-figure img {
  display: block;
  max-width: 100%;
  max-height: calc(100vh - 118px);
  margin: 0 auto;
  border-radius: 8px;
  object-fit: contain;
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.42);
}

.modal-figure figcaption {
  margin-top: 14px;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.95rem;
}

.modal-figure figcaption span {
  margin-right: 10px;
  color: var(--color-gold);
  font-weight: 700;
}

.modal-close,
.modal-nav {
  border: 1px solid rgba(214, 176, 107, 0.34);
  background: rgba(22, 15, 12, 0.82);
  color: var(--color-gold);
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.modal-close:hover,
.modal-nav:hover {
  background: rgba(214, 176, 107, 0.16);
  transform: translateY(-1px);
}

.modal-close {
  position: fixed;
  top: 22px;
  right: 24px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  font-size: 1.8rem;
  line-height: 1;
}

.modal-nav {
  width: 52px;
  height: 72px;
  border-radius: 8px;
  font-size: 3rem;
  line-height: 1;
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .simulation-page {
    padding-inline: 16px;
    padding-bottom: 48px;
  }

  .image-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .preview-modal {
    grid-template-columns: 44px minmax(0, 1fr) 44px;
    gap: 6px;
    padding: 18px 10px;
  }

  .modal-close {
    top: 14px;
    right: 14px;
  }

  .modal-nav {
    width: 42px;
    height: 58px;
    font-size: 2.3rem;
  }
}
</style>
