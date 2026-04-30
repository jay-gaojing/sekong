<template>
  <div class="crafts-page">
    <section class="crafts-hero" aria-labelledby="crafts-title">
      <p class="eyebrow">Qipao Craft Archive</p>
      <h1 id="crafts-title">旗袍的筋骨与诗意</h1>
      <p class="hero-copy">
        本页面系统梳理旗袍非遗工艺中核心的常用绲边类型，从基础到高阶，从素雅到繁复，助您鉴赏、定制或设计旗袍时，一眼看懂细节里的高低。
      </p>
    </section>

    <section class="craft-section technique-section" aria-labelledby="technique-title">
      <header class="section-heading">
        <span class="section-number">01</span>
        <div>
          <p class="section-kicker">Technique Study</p>
          <h2 id="technique-title">旗袍工艺</h2>
        </div>
      </header>

      <div class="section-copy">
        <p>
          盘一件旗袍的精髓，三分看面料与版型，三分看绲边。绲边（Gǔn Biān），是旗袍最忠实的“描边师”。它不仅包裹领口、袖口、大襟等边缘，防止布料毛边，更以线条的宽窄、色彩的对撞、层次的叠加，定义一件旗袍的呼吸感与气质。
        </p>
        <p>
          一道极细的“线香绲”如工笔画勾线般清秀；一道明艳的“宽绲”则如油画边框般提气。读懂绲边，才算真正看懂旗袍的工艺美学。
        </p>
      </div>

      <div class="technique-grid">
        <button
          v-for="(image, index) in techniqueImages"
          :key="image.src"
          type="button"
          class="image-card"
          @click="openPreview(image)"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
        </button>
      </div>
    </section>

    <section class="craft-section beauty-section" aria-labelledby="beauty-title">
      <header class="section-heading centered-heading">
        <span class="section-number">02</span>
        <div>
          <p class="section-kicker">Craft Beauty</p>
          <h2 id="beauty-title">工艺之美</h2>
        </div>
      </header>

      <p class="beauty-copy">
        在 0.1 毫米的丝理间修行。东方高定美学从不困于形制，在机械复制的时代，真正的奢侈是让针脚学会思考。
      </p>

      <div class="beauty-grid">
        <button
          v-for="(image, index) in beautyImages"
          :key="image.src"
          type="button"
          class="image-card beauty-card"
          @click="openPreview(image)"
        >
          <img :src="image.src" :alt="image.alt" loading="lazy" />
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
        </button>
      </div>
    </section>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="previewImage" class="lightbox-overlay" @click="closePreview">
          <button class="lightbox-close" type="button" aria-label="关闭预览" @click.stop="closePreview">
            <span aria-hidden="true">×</span>
          </button>
          <img :src="previewImage.src" :alt="previewImage.alt" class="lightbox-img" @click.stop />
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
interface CraftImage {
  src: string
  alt: string
}

useHead({
  title: '旗袍工艺 - 色控旗袍数据库',
})

const techniqueImages: CraftImage[] = Array.from({ length: 15 }, (_, index) => ({
  src: `/images/crafts-archive/techniques/technique-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `旗袍工艺图片 ${index + 1}`,
}))

const beautyImages: CraftImage[] = Array.from({ length: 6 }, (_, index) => ({
  src: `/images/crafts-archive/beauty/beauty-${String(index + 1).padStart(2, '0')}.jpg`,
  alt: `工艺之美图片 ${index + 1}`,
}))

const previewImage = ref<CraftImage | null>(null)

const openPreview = (image: CraftImage) => {
  previewImage.value = image

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
</script>

<style scoped>
.crafts-page {
  min-height: 100vh;
  padding-bottom: 96px;
  background:
    radial-gradient(circle at 78% 8%, rgba(169, 38, 51, 0.18), transparent 28%),
    radial-gradient(circle at 10% 38%, rgba(214, 176, 107, 0.1), transparent 26%),
    #050505;
  color: #fff;
  overflow: hidden;
}

.crafts-hero {
  width: min(1080px, calc(100% - 260px));
  margin: 0 auto;
  padding: 92px 0 66px;
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

.crafts-hero h1 {
  margin: 18px auto 0;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(3rem, 6vw, 6.4rem);
  font-weight: 600;
  letter-spacing: 0;
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

.craft-section {
  width: min(1180px, calc(100% - 300px));
  margin: 0 auto;
  padding: 76px 0 90px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  transform: translateX(-34px);
}

.section-heading {
  display: grid;
  justify-items: center;
  gap: 14px;
  margin-bottom: 28px;
  text-align: center;
}

.centered-heading {
  max-width: 760px;
  margin: 0 auto 28px;
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
  max-width: 980px;
  margin: 0 auto 34px;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-serif-cn);
  font-size: 1rem;
  line-height: 1.95;
  text-align: center;
}

.section-copy p + p {
  margin-top: 14px;
}

.beauty-copy {
  max-width: 720px;
  margin: 0 auto 36px;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-serif-cn);
  font-size: 1.04rem;
  line-height: 1.95;
  text-align: center;
}

.technique-grid,
.beauty-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(190px, 1fr));
  gap: clamp(16px, 1.55vw, 24px);
}

.beauty-grid {
  width: min(980px, 100%);
  margin: 0 auto;
}

.image-card {
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
  .crafts-hero,
  .craft-section {
    width: min(760px, calc(100% - 32px));
    transform: none;
  }

  .technique-grid,
  .beauty-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 560px) {
  .crafts-hero {
    padding: 56px 0 42px;
  }

  .section-heading {
    gap: 10px;
  }

  .technique-grid,
  .beauty-grid {
    grid-template-columns: 1fr;
  }
}
</style>
