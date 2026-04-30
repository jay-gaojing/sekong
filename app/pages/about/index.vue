<template>
  <div class="about-page">
    <div class="page-header">
      <h1 class="page-title animate-fade-up">团队介绍</h1>
      <p class="page-subtitle animate-fade-up" style="animation-delay: 0.1s">
        色控研究院核心团队成员
      </p>
    </div>

    <section class="team-photo-section glass-container animate-fade-up">
      <img src="/about/team/team-group.jpeg" alt="色控研究院团队大合照" class="team-photo" />
    </section>

    <section class="section-block">
      <h2 class="section-title animate-fade-up">核心团队</h2>
      <div class="team-container glass-container">
        <div 
          v-for="(member, index) in members" 
          :key="index" 
          class="member-card animate-fade-up"
          :style="{ animationDelay: `${0.1 * (index % 5)}s` }"
        >
          <div class="member-image-wrapper">
            <img v-if="member.image" :src="member.image" :alt="member.name" class="member-img" />
            <div v-else class="member-img-placeholder">
              <span>{{ member.name.charAt(0) }}</span>
            </div>
          </div>
          <div class="member-info">
            <h2 class="member-name">{{ member.name }}</h2>
            <div class="member-desc-box">
              <p v-if="member.description" class="member-desc">{{ member.description }}</p>
              <p v-else class="member-desc empty-desc">暂无详细简介</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-block advisors-section">
      <h2 class="section-title animate-fade-up">专家顾问</h2>
      <div class="team-container glass-container">
      <div 
        v-for="(advisor, index) in advisors" 
        :key="advisor.name" 
        class="member-card animate-fade-up"
        :style="{ animationDelay: `${0.1 * (index % 5)}s` }"
      >
        <div class="member-image-wrapper">
          <img v-if="advisor.image" :src="advisor.image" :alt="advisor.name" class="member-img" />
          <div v-else class="member-img-placeholder">
            <span>{{ advisor.name.charAt(0) }}</span>
          </div>
        </div>
        <div class="member-info">
          <h2 class="member-name">{{ advisor.name }}</h2>
          <p class="advisor-role">{{ advisor.role }}</p>
          <div class="member-desc-box">
            <p v-if="advisor.description" class="member-desc">{{ advisor.description }}</p>
            <p v-else class="member-desc empty-desc">暂无详细简介</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
// @ts-ignore
import membersData from '../../../public/about/members.json'
// @ts-ignore
import advisorsData from '../../../public/about/advisors.json'

const members = membersData || []
const advisors = advisorsData || []

useHead({
  title: '团队介绍 - 色控旗袍数据库'
})
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  padding-top: calc(var(--header-height) + 40px);
  padding-bottom: 60px;
  background-color: var(--color-bg-main);
  background-image: radial-gradient(circle at top right, rgba(212, 175, 55, 0.05), transparent 40%);
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-title {
  font-family: var(--font-serif-cn);
  font-size: 2.8rem;
  color: var(--color-gold);
  margin-bottom: 0.5rem;
  letter-spacing: 0.1em;
}

.page-subtitle {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.2em;
}

.team-photo-section {
  max-width: var(--container-width);
  margin: 0 auto 4rem;
  padding: 18px;
  overflow: hidden;
}

.team-photo {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  border-radius: 8px;
}

.section-block {
  margin-bottom: 4rem;
}

.section-title {
  font-family: var(--font-serif-cn);
  font-size: 2.1rem;
  color: var(--color-gold);
  text-align: center;
  margin-bottom: 1.8rem;
  letter-spacing: 0.12em;
}

.team-container {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
}

.member-card {
  background: rgba(25, 25, 25, 0.6);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.member-card:hover {
  transform: translateY(-8px);
  border-color: rgba(212, 175, 55, 0.3);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4), 0 0 20px rgba(212, 175, 55, 0.1);
}

.member-image-wrapper {
  width: 100%;
  height: 380px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  position: relative;
}

.member-image-wrapper::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  background: linear-gradient(to top, rgba(20, 20, 20, 0.9), transparent);
  pointer-events: none;
}

.member-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.member-card:hover .member-img {
  transform: scale(1.05);
}

.member-img-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
  font-size: 6rem;
  color: rgba(255, 255, 255, 0.1);
  font-family: var(--font-serif-cn);
}

.member-info {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  margin-top: -40px;
}

.member-name {
  font-family: var(--font-serif-cn);
  font-size: 1.8rem;
  color: var(--color-gold);
  margin-bottom: 12px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5);
  font-weight: bold;
  letter-spacing: 4px;
}

.advisor-role {
  min-height: 2.8em;
  margin: 0 0 16px;
  color: rgba(255, 255, 255, 0.72);
  font-size: 0.9rem;
  line-height: 1.55;
  text-align: center;
}

.member-desc-box {
  flex: 1;
  padding: 16px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  border-left: 2px solid var(--color-gold);
  overflow-y: auto;
  max-height: 200px;
}

/* 自定义滚动条 */
.member-desc-box::-webkit-scrollbar {
  width: 4px;
}

.member-desc-box::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
}

.member-desc-box::-webkit-scrollbar-thumb {
  background: var(--color-gold);
  border-radius: 4px;
}

.member-desc {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.8;
  white-space: pre-wrap;
}

.empty-desc {
  color: rgba(255, 255, 255, 0.3);
  text-align: center;
  font-style: italic;
  padding: 20px 0;
}

/* 响应式调整 */
@media (max-width: 768px) {
  .team-photo-section {
    margin: 0 20px 3rem;
    padding: 12px;
  }

  .section-title {
    font-size: 1.8rem;
  }

  .team-container {
    padding: 20px;
    grid-template-columns: 1fr;
  }
}
</style>
