<template>
  <main class="heritage-ip-page">
    <section class="hero">
      <p class="eyebrow">Heritage IP Cases</p>
      <h1>非遗 IP 合作案例</h1>
      <p class="intro">
        汇集夏布、湘绣、缂丝等非遗技艺在当代产品、空间陈设与品牌联名中的合作实践。
      </p>
    </section>

    <section class="case-shell" aria-label="非遗 IP 合作案例内容">
      <aside class="case-nav">
        <button
          v-for="item in cases"
          :key="item.id"
          type="button"
          class="case-nav-item"
          :class="{ active: activeId === item.id }"
          @click="activeId = item.id"
        >
          <span>{{ item.title }}</span>
          <small>{{ item.summary }}</small>
        </button>
      </aside>

      <article v-if="activeCase" class="case-detail">
        <div class="case-copy">
          <span class="detail-label">Case Study</span>
          <h2>{{ activeCase.title }}</h2>
          <p
            v-for="(paragraph, index) in detailParagraphs"
            :key="`${activeCase.id}-${index}`"
            :class="{ lead: index === 0 }"
          >
            {{ paragraph }}
          </p>
        </div>

        <div v-if="activeCase.images.length" class="image-panel">
          <button
            type="button"
            class="hero-image"
            @click="previewImage = activeCase.images[0]"
          >
            <img :src="activeCase.images[0]" :alt="`${activeCase.title}主图`" loading="eager" />
          </button>

          <div v-if="activeCase.images.length > 1" class="image-grid">
            <button
              v-for="(image, index) in activeCase.images.slice(1)"
              :key="image"
              type="button"
              class="image-thumb"
              @click="previewImage = image"
            >
              <img :src="image" :alt="`${activeCase.title}图片 ${index + 2}`" loading="lazy" />
            </button>
          </div>
        </div>
      </article>
    </section>

    <Teleport to="body">
      <div v-if="previewImage" class="preview-backdrop" @click="previewImage = ''">
        <button type="button" class="preview-close" aria-label="关闭预览" @click.stop="previewImage = ''">
          ×
        </button>
        <img :src="previewImage" alt="案例图片预览" @click.stop />
      </div>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import rawCases from '../../../public/heritage-ip/cases.json'

interface HeritageCase {
  id: string
  title: string
  sourceFile: string
  summary: string
  paragraphs: string[]
  images: string[]
}

const cases = rawCases as HeritageCase[]
const activeId = ref(cases[0]?.id ?? '')
const previewImage = ref('')

const activeCase = computed(() => cases.find((item) => item.id === activeId.value))
const detailParagraphs = computed(() => {
  if (!activeCase.value) {
    return []
  }

  return activeCase.value.paragraphs.filter((paragraph) => paragraph !== activeCase.value?.title)
})

useHead({
  title: '非遗 IP 合作案例 - 色控旗袍数据库',
})
</script>

<style scoped>
.heritage-ip-page {
  min-height: 100vh;
  padding: calc(var(--header-height) + 48px) clamp(18px, 4vw, 56px) 72px;
  background:
    linear-gradient(135deg, rgba(88, 24, 36, 0.28), transparent 32%),
    linear-gradient(180deg, rgba(16, 13, 12, 0.98), var(--color-bg-dark) 44%);
  color: var(--color-text-light);
}

.hero,
.case-shell {
  width: min(1180px, 100%);
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
  font-size: clamp(2rem, 4vw, 4rem);
  line-height: 1.08;
}

.intro {
  max-width: 760px;
  margin: 16px 0 0;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.case-shell {
  display: grid;
  grid-template-columns: minmax(240px, 330px) 1fr;
  gap: 24px;
  align-items: start;
}

.case-nav {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  display: grid;
  gap: 12px;
}

.case-nav-item {
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

.case-nav-item:hover,
.case-nav-item.active {
  border-color: rgba(214, 176, 107, 0.72);
  background: rgba(214, 176, 107, 0.12);
  transform: translateY(-2px);
}

.case-nav-item span {
  display: block;
  margin-bottom: 8px;
  color: var(--color-gold);
  font-family: var(--font-serif-cn);
  font-size: 1.05rem;
  font-weight: 700;
}

.case-nav-item small {
  display: -webkit-box;
  overflow: hidden;
  color: var(--color-text-muted);
  font-size: 0.84rem;
  line-height: 1.65;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}

.case-detail {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, 38%);
  gap: clamp(20px, 3vw, 36px);
  padding: clamp(22px, 3vw, 34px);
  border: 1px solid rgba(214, 176, 107, 0.22);
  border-radius: 8px;
  background: rgba(255, 248, 232, 0.055);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
}

.detail-label {
  display: block;
  margin-bottom: 10px;
  color: var(--color-text-muted);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.case-copy h2 {
  margin-bottom: 20px;
  font-size: clamp(1.5rem, 3vw, 2.35rem);
}

.case-copy p {
  margin: 0 0 16px;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1rem;
  line-height: 1.9;
}

.case-copy .lead {
  color: rgba(255, 245, 218, 0.92);
  font-size: 1.04rem;
}

.image-panel {
  display: grid;
  gap: 12px;
  align-content: start;
}

.hero-image,
.image-thumb {
  display: block;
  width: 100%;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(214, 176, 107, 0.22);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.3);
  cursor: zoom-in;
}

.hero-image {
  aspect-ratio: 4 / 3;
}

.hero-image img,
.image-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.25s ease;
}

.hero-image:hover img,
.image-thumb:hover img {
  transform: scale(1.04);
}

.image-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.image-thumb {
  aspect-ratio: 1 / 1;
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
  .case-shell,
  .case-detail {
    grid-template-columns: 1fr;
  }

  .case-nav {
    position: static;
  }

  .case-detail {
    padding: 22px;
  }

  .image-panel {
    grid-row: 1;
  }
}

@media (max-width: 640px) {
  .heritage-ip-page {
    padding-inline: 16px;
    padding-bottom: 48px;
  }

  .image-grid {
    grid-template-columns: 1fr;
  }
}
</style>
