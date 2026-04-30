<template>
  <main class="lineage-page">
    <section class="hero">
      <p class="eyebrow">Pedigree of Inheritance</p>
      <h1>传承谱系</h1>
      <p class="intro">
        以龙凤旗袍、海派旗袍、湘派旗袍等代表性传承人为线索，梳理旗袍手工制作技艺的代际传承与地域脉络。
      </p>
    </section>

    <section class="lineage-layout" aria-label="传承谱系内容">
      <aside class="lineage-tabs">
        <button
          v-for="item in lineage"
          :key="item.id"
          type="button"
          class="lineage-tab"
          :class="{ active: activeId === item.id }"
          @click="activeId = item.id"
        >
          <span>{{ item.name }}</span>
          <small>{{ item.title }}</small>
        </button>
      </aside>

      <article v-if="activeItem" class="lineage-detail">
        <div class="portrait-panel">
          <img :src="activeItem.image" :alt="activeItem.name" />
        </div>

        <div class="copy-panel">
          <span class="detail-label">Inheritance Lineage</span>
          <h2>{{ activeItem.name }}</h2>
          <h3>{{ activeItem.title }}</h3>
          <p>{{ activeItem.description }}</p>
        </div>
      </article>
    </section>
  </main>
</template>

<script setup lang="ts">
import lineageData from '../../../public/lineage/lineage.json'

interface LineageItem {
  id: string
  name: string
  title: string
  description: string
  image: string
}

const lineage = lineageData as LineageItem[]
const activeId = ref(lineage[0]?.id ?? '')
const activeItem = computed(() => lineage.find((item) => item.id === activeId.value))

useHead({
  title: '传承谱系 - 色控旗袍数据库',
})
</script>

<style scoped>
.lineage-page {
  min-height: 100vh;
  padding: calc(var(--header-height) + 48px) clamp(18px, 4vw, 56px) 72px;
  background:
    radial-gradient(circle at 18% 14%, rgba(212, 175, 55, 0.16), transparent 30%),
    linear-gradient(180deg, rgba(16, 13, 12, 0.98), var(--color-bg-dark) 48%);
  color: var(--color-text-light);
}

.hero,
.lineage-layout {
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
h2,
h3 {
  margin: 0;
  font-family: var(--font-serif-cn);
  letter-spacing: 0;
}

h1 {
  color: var(--color-gold);
  font-size: clamp(2.2rem, 4.2vw, 4.2rem);
  line-height: 1.08;
}

.intro {
  max-width: 760px;
  margin: 16px 0 0;
  color: var(--color-text-muted);
  font-size: 1rem;
  line-height: 1.8;
}

.lineage-layout {
  display: grid;
  grid-template-columns: minmax(230px, 320px) 1fr;
  gap: 24px;
  align-items: start;
}

.lineage-tabs {
  position: sticky;
  top: calc(var(--header-height) + 24px);
  display: grid;
  gap: 10px;
  max-height: calc(100vh - var(--header-height) - 48px);
  overflow: auto;
  padding-right: 4px;
}

.lineage-tab {
  width: 100%;
  padding: 16px;
  border: 1px solid rgba(214, 176, 107, 0.2);
  border-radius: 8px;
  background: rgba(255, 248, 232, 0.045);
  color: var(--color-text-light);
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.lineage-tab:hover,
.lineage-tab.active {
  border-color: rgba(214, 176, 107, 0.72);
  background: rgba(214, 176, 107, 0.12);
  transform: translateY(-2px);
}

.lineage-tab span {
  display: block;
  margin-bottom: 7px;
  color: var(--color-gold);
  font-family: var(--font-serif-cn);
  font-size: 1.05rem;
  font-weight: 700;
}

.lineage-tab small {
  display: -webkit-box;
  overflow: hidden;
  color: var(--color-text-muted);
  font-size: 0.82rem;
  line-height: 1.55;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.lineage-detail {
  display: grid;
  grid-template-columns: minmax(240px, 36%) 1fr;
  gap: clamp(20px, 3vw, 38px);
  padding: clamp(22px, 3vw, 34px);
  border: 1px solid rgba(214, 176, 107, 0.22);
  border-radius: 8px;
  background: rgba(255, 248, 232, 0.055);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
}

.portrait-panel {
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid rgba(214, 176, 107, 0.28);
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.35);
}

.portrait-panel img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center top;
}

.copy-panel {
  align-self: center;
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

.copy-panel h2 {
  margin-bottom: 12px;
  color: var(--color-gold);
  font-size: clamp(1.8rem, 3vw, 2.8rem);
}

.copy-panel h3 {
  margin-bottom: 22px;
  color: rgba(255, 245, 218, 0.9);
  font-size: clamp(1rem, 1.6vw, 1.35rem);
  line-height: 1.6;
}

.copy-panel p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: 1rem;
  line-height: 1.95;
}

@media (max-width: 980px) {
  .lineage-layout,
  .lineage-detail {
    grid-template-columns: 1fr;
  }

  .lineage-tabs {
    position: static;
    max-height: none;
  }
}
</style>
