<script setup lang="ts">
import { computed, ref } from 'vue'

definePageMeta({
  layout: 'default',
})

useHead({
  title: '旗袍面料页面',
})

interface PosterItem {
  id: string
  title: string
  image: string
}

const posters: PosterItem[] = [
  { id: 'lace-black', title: '黑色花卉纹蕾丝旗袍', image: '/images/materials/poster-01.jpg' },
  { id: 'cinnabar-brocade', title: '大红地花卉枇杷纹印花提花缎旗袍', image: '/images/materials/poster-02.jpg' },
  { id: 'orchid-georgette', title: '蓝白地提花剪花乔其纱旗袍', image: '/images/materials/poster-03.jpg' },
  { id: 'wheat-lace', title: '鹅黄色炫彩亮丝麦穗纹蕾丝旗袍套装', image: '/images/materials/poster-04.jpg' },
  { id: 'rose-velvet', title: '白地浅紫色玫瑰纹提花印花绒旗袍套装', image: '/images/materials/poster-05.jpg' },
  { id: 'striped-woven', title: '条纹色织布旗袍', image: '/images/materials/poster-06.jpg' },
  { id: 'tulip-georgette', title: '红色地郁金香纹印花乔其纱旗袍', image: '/images/materials/poster-07.jpg' },
  { id: 'burnout-velvet', title: '棕色地蓝色花叶纹烂花绒旗袍', image: '/images/materials/poster-08.jpg' },
  { id: 'chrysanthemum-velvet', title: '灰褐色菊花纹拷花绒旗袍', image: '/images/materials/poster-09.jpg' },
  { id: 'material-note-a', title: '材质专题图文一', image: '/images/materials/poster-10.jpg' },
  { id: 'material-note-b', title: '材质专题图文二', image: '/images/materials/poster-11.jpg' },
]

const activePosterId = ref<string | null>(null)

const activePoster = computed(() => posters.find((item) => item.id === activePosterId.value) ?? null)

const openPoster = (id: string) => {
  activePosterId.value = id
}

const closePoster = () => {
  activePosterId.value = null
}
</script>

<template>
  <div class="materials-page">
    <section class="hero-section">
      <div class="hero-copy">
        <span class="eyebrow">Textile Archive</span>
        <h1>旗袍的面料密码</h1>
        <p>
          这一页集中展示新增面料专题海报，保留原始展陈图文版式，梳理旗袍在提花缎、乔其纱、蕾丝、色织布与烂花绒等材质上的审美层次。
        </p>
      </div>
    </section>

    <section class="intro-section">
      <div class="section-head">
        <span class="section-en">Material Reading</span>
        <h2>面料专题展陈</h2>
      </div>
      <p class="section-intro">
        下方海报延续原文件中的版心、图文与说明结构，点击任意海报可放大查看细节。页面不再拆成二级跳转，直接在同一页完成浏览。
      </p>
    </section>

    <section class="poster-grid">
      <button
        v-for="poster in posters"
        :key="poster.id"
        type="button"
        class="poster-card"
        @click="openPoster(poster.id)"
      >
        <div class="poster-frame">
          <img :src="poster.image" :alt="poster.title" loading="lazy" />
        </div>
        <div class="poster-meta">
          <h3>{{ poster.title }}</h3>
          <span>点击查看大图</span>
        </div>
      </button>
    </section>

    <transition name="fade">
      <div v-if="activePoster" class="lightbox" @click.self="closePoster">
        <button type="button" class="lightbox-close" @click="closePoster">×</button>
        <div class="lightbox-panel">
          <img :src="activePoster.image" :alt="activePoster.title" />
          <div class="lightbox-caption">
            <h3>{{ activePoster.title }}</h3>
            <p>保留原始版式的海报大图预览，可用于后续继续对照补文案或微调页面结构。</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.materials-page {
  min-height: 100vh;
  padding: calc(var(--header-height) + 32px) 48px 64px;
  background:
    radial-gradient(circle at top, rgba(126, 32, 43, 0.22), transparent 32%),
    linear-gradient(180deg, #141212 0%, #1a1514 36%, #efe6d7 36%, #f5efe4 100%);
}

.hero-section {
  max-width: 980px;
  margin: 0 auto 56px;
  display: flex;
  justify-content: center;
}

.hero-copy {
  color: #f6eee5;
  text-align: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 14px;
  color: rgba(226, 193, 132, 0.82);
  font-size: 0.78rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.hero-copy h1 {
  margin: 0 0 18px;
  font-family: var(--font-serif-cn);
  font-size: clamp(2.4rem, 3vw, 3.8rem);
  color: #f0cf87;
}

.hero-copy p {
  margin: 0;
  max-width: 42rem;
  color: rgba(246, 238, 229, 0.8);
  font-size: 1rem;
  line-height: 1.9;
}

.intro-section {
  max-width: 1360px;
  margin: 0 auto 28px;
  padding: 0 8px;
}

.section-head {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 12px;
}

.section-en {
  color: rgba(95, 69, 41, 0.65);
  font-size: 0.82rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.section-head h2 {
  margin: 0;
  color: #4e241b;
  font-family: var(--font-serif-cn);
  font-size: clamp(1.8rem, 2.2vw, 2.6rem);
}

.section-intro {
  margin: 0;
  max-width: 52rem;
  color: #6d5749;
  line-height: 1.9;
}

.poster-grid {
  max-width: 1360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 28px;
}

.poster-card {
  padding: 18px;
  border: 1px solid rgba(136, 97, 54, 0.18);
  background: rgba(255, 251, 245, 0.96);
  box-shadow: 0 18px 36px rgba(56, 34, 17, 0.08);
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  text-align: left;
}

.poster-card:hover {
  transform: translateY(-4px);
  border-color: rgba(143, 42, 42, 0.34);
  box-shadow: 0 22px 40px rgba(56, 34, 17, 0.14);
}

.poster-frame {
  background: #efe2ce;
  padding: 12px;
}

.poster-frame img {
  display: block;
  width: 100%;
  height: auto;
}

.poster-meta {
  padding-top: 14px;
}

.poster-meta h3 {
  margin: 0 0 8px;
  color: #4f291f;
  font-size: 1rem;
  line-height: 1.6;
}

.poster-meta span {
  color: #9b7350;
  font-size: 0.84rem;
}

.lightbox {
  position: fixed;
  inset: 0;
  z-index: 2200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background: rgba(11, 8, 7, 0.84);
  backdrop-filter: blur(8px);
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 24px;
  width: 44px;
  height: 44px;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
  font-size: 1.9rem;
  cursor: pointer;
}

.lightbox-panel {
  width: min(100%, 1100px);
  max-height: calc(100vh - 72px);
  overflow: auto;
  background: #f8f2ea;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
}

.lightbox-panel img {
  display: block;
  width: 100%;
  height: auto;
}

.lightbox-caption {
  padding: 20px 24px 26px;
  color: #533126;
}

.lightbox-caption h3 {
  margin: 0 0 10px;
  font-size: 1.15rem;
}

.lightbox-caption p {
  margin: 0;
  line-height: 1.8;
  color: #73584c;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1100px) {
  .materials-page {
    padding-inline: 24px;
  }

  .poster-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .materials-page {
    padding: calc(var(--header-height) + 20px) 16px 40px;
  }

  .poster-card {
    padding: 12px;
  }

  .poster-frame {
    padding: 8px;
  }

  .lightbox {
    padding: 16px;
  }

  .lightbox-close {
    top: 10px;
    right: 10px;
  }
}
</style>
