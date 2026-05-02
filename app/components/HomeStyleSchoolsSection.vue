<template>
  <section class="home-style-schools" aria-labelledby="home-style-title">
    <div class="schools-inner">
      <div class="image-orbit">
        <div class="orbit-line"></div>
        <div class="image-disc">
          <img :src="activeSchool.image" :alt="`${activeSchool.name}旗袍`" loading="lazy" />
        </div>
        <span class="orbit-dot"></span>
      </div>

      <div class="schools-content">
        <p class="eyebrow">Longfeng Qipao Handmade Craftsmanship</p>
        <h2 id="home-style-title">旗袍四大派系</h2>
        <div class="title-rule"></div>

        <div class="school-buttons" aria-label="旗袍四大派系">
          <NuxtLink
            v-for="school in schools"
            :key="school.id"
            class="school-button"
            :class="{ active: activeId === school.id }"
            :to="school.href"
            @mouseenter="activeId = school.id"
            @focus="activeId = school.id"
          >
            <span class="school-code">{{ school.code }}</span>
            <span class="school-name">{{ school.name }}旗袍</span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface School {
  id: string
  code: string
  name: string
  image: string
  href: string
}

const schools: School[] = [
  { id: 'su', code: 'SU', name: '苏派', image: 'https://myvmail.us.ci/images/style-schools/su/01.jpg', href: '/styles#su' },
  { id: 'jing', code: 'JING', name: '京派', image: 'https://myvmail.us.ci/images/style-schools/jing/01.jpg', href: '/styles#jing' },
  { id: 'hai', code: 'HAI', name: '海派', image: 'https://myvmail.us.ci/images/style-schools/hai/01.jpg', href: '/styles#hai' },
  { id: 'yue', code: 'YUE', name: '粤派', image: 'https://myvmail.us.ci/images/style-schools/yue/01.jpg', href: '/styles#yue' },
]

const activeId = ref('su')
const activeSchool = computed(() => schools.find((school) => school.id === activeId.value) ?? schools[0])
</script>

<style scoped>
.home-style-schools {
  position: relative;
  min-height: clamp(560px, 72vh, 760px);
  padding: clamp(72px, 9vw, 120px) 0;
  background:
    linear-gradient(180deg, rgba(17, 17, 17, 0.98), rgba(12, 12, 12, 0.98)),
    #111;
  color: #fff;
  overflow: hidden;
}

.home-style-schools::after {
  content: "";
  position: absolute;
  left: 12%;
  right: 10%;
  bottom: 24px;
  height: 1px;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.16);
}

.schools-inner {
  width: min(1120px, calc(100% - 300px));
  margin: 0 auto;
  display: grid;
  grid-template-columns: minmax(280px, 470px) minmax(360px, 1fr);
  align-items: center;
  gap: clamp(48px, 8vw, 120px);
  transform: translateX(-34px);
}

.image-orbit {
  position: relative;
  display: grid;
  place-items: center;
  min-height: 440px;
}

.orbit-line {
  position: absolute;
  width: min(440px, 100%);
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-radius: 50%;
  transform: rotate(-20deg);
}

.image-disc {
  position: relative;
  width: min(360px, 82vw);
  aspect-ratio: 1;
  overflow: hidden;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.04);
  box-shadow: 0 32px 90px rgba(0, 0, 0, 0.48);
  z-index: 1;
}

.image-disc img {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  object-position: center;
}

.orbit-dot {
  position: absolute;
  left: 74%;
  bottom: 10%;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.62);
  z-index: 2;
}

.schools-content {
  min-width: 0;
}

.eyebrow {
  margin: 0 0 18px;
  color: #d9b36c;
  font-family: var(--font-serif-en);
  font-size: 0.82rem;
  letter-spacing: 0.1em;
}

.schools-content h2 {
  margin: 0;
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: clamp(2rem, 3.5vw, 3.6rem);
  font-weight: 600;
  letter-spacing: 0;
}

.title-rule {
  width: min(520px, 100%);
  height: 1px;
  margin: 22px 0 58px;
  background: linear-gradient(90deg, rgba(255, 255, 255, 0.46), rgba(255, 255, 255, 0.12), transparent);
}

.school-buttons {
  display: grid;
  grid-template-columns: repeat(2, minmax(190px, 1fr));
  gap: 36px clamp(36px, 5vw, 72px);
}

.school-button {
  min-height: 58px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 0 28px 0 16px;
  border: 1px solid rgba(255, 255, 255, 0.28);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.02);
  color: #fff;
  font-family: var(--font-serif-cn);
  text-decoration: none;
  transition: border-color 0.22s ease, background 0.22s ease, transform 0.22s ease;
}

.school-button:hover,
.school-button.active {
  transform: translateY(-2px);
  border-color: rgba(217, 179, 108, 0.82);
  background: rgba(217, 179, 108, 0.08);
}

.school-code {
  width: 46px;
  height: 46px;
  display: grid;
  place-items: center;
  flex: 0 0 auto;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.18);
  color: #fff;
  font-family: var(--font-sans);
  font-size: 0.94rem;
  font-weight: 700;
}

.school-name {
  font-size: clamp(1.2rem, 1.8vw, 1.85rem);
  white-space: nowrap;
}

@media (max-width: 1200px) {
  .schools-inner {
    width: min(100% - 48px, 1120px);
    transform: none;
  }
}

@media (max-width: 820px) {
  .schools-inner {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .image-orbit {
    min-height: 330px;
  }

  .school-buttons {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}
</style>
