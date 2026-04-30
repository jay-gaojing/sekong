<template>
  <section id="bagua-nav" class="bagua-section">
    <div class="container relative z-10">
      <header class="section-header text-center mb-16">
        <h2 class="section-title">探索旗袍之美</h2>
        <p class="section-subtitle">点击罗盘，开启东方美学之旅</p>
      </header>

      <div class="nav-compass-container" :class="{ 'is-open': isOpen }">
        <div class="constellation-bg">
          <svg viewBox="0 0 600 600" class="constellation-svg">
            <defs>
              <filter id="glow-line" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <g class="lines-group" v-if="isOpen">
              <line
                v-for="(item, i) in innerCategories"
                :key="`l-in-${i}`"
                x1="300"
                y1="300"
                :x2="300 + Math.cos((item.angle - 90) * Math.PI / 180) * 140"
                :y2="300 + Math.sin((item.angle - 90) * Math.PI / 180) * 140"
                class="constellation-line inner-line"
                :style="{ '--delay': i * 0.1 + 's' }"
              />
              <line
                v-for="(item, i) in outerCategories"
                :key="`l-out-${i}`"
                x1="300"
                y1="300"
                :x2="300 + Math.cos((item.angle - 90) * Math.PI / 180) * 240"
                :y2="300 + Math.sin((item.angle - 90) * Math.PI / 180) * 240"
                class="constellation-line outer-line"
                :style="{ '--delay': (i * 0.1 + 0.3) + 's' }"
              />
            </g>

            <circle cx="300" cy="300" r="140" class="orbit-ring inner-orbit" />
            <circle cx="300" cy="300" r="240" class="orbit-ring outer-orbit" />
          </svg>
        </div>

        <div class="ring-layer outer-layer">
          <div
            v-for="(item, index) in outerCategories"
            :key="item.id"
            class="nav-item outer-item"
            :style="{
              '--angle': item.angle + 'deg',
              '--delay': (index * 0.05 + 0.2) + 's',
              '--distance': '240px'
            }"
            @click="openCategory(item)"
          >
            <div class="item-content glass">
              <span class="item-icon">{{ item.icon }}</span>
              <span class="item-label">{{ item.label }}</span>
            </div>
            <div class="item-dot"></div>
          </div>
        </div>

        <div class="ring-layer inner-layer">
          <div
            v-for="(item, index) in innerCategories"
            :key="item.id"
            class="nav-item inner-item"
            :style="{
              '--angle': item.angle + 'deg',
              '--delay': index * 0.05 + 's',
              '--distance': '140px'
            }"
            @click="openCategory(item)"
          >
            <div class="item-content glass">
              <span class="item-icon">{{ item.icon }}</span>
              <span class="item-label">{{ item.label }}</span>
            </div>
            <div class="item-dot"></div>
          </div>
        </div>

        <div class="center-control" @click="toggleOpen">
          <div class="center-lid glass-dark">
            <div class="lid-content">
              <span class="logo-text font-serif-cn">旗</span>
              <span class="lid-hint">{{ isOpen ? '收起' : '开启' }}</span>
            </div>
            <div class="lid-decoration"></div>
          </div>
          <div class="center-glow"></div>
        </div>
      </div>
    </div>

    <div class="bg-texture"></div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Category {
  id: string
  label: string
  icon: string
  angle: number
}

const innerCategories: Category[] = [
  { id: 'wedding', label: '婚庆', icon: '囍', angle: 0 },
  { id: 'original', label: '原创', icon: '匠', angle: 120 },
  { id: 'new-chinese', label: '新中式', icon: '潮', angle: 240 },
]

const outerCategories: Category[] = [
  { id: 'fashion', label: '时装', icon: '裳', angle: 45 },
  { id: 'accessories', label: '服饰', icon: '饰', angle: 135 },
  { id: 'youth', label: '少年', icon: '竹', angle: 225 },
  { id: 'maiden', label: '少女', icon: '兰', angle: 315 },
]

const routeMap: Record<string, string> = {
  wedding: '/original?category=xi',
  original: '/original?category=jiang',
  'new-chinese': '/original?category=chao',
  fashion: '/original?category=shang',
  accessories: '/original?category=shi',
  youth: '/original?category=zhu',
  maiden: '/original?category=lan',
}

const isOpen = ref(false)
const router = useRouter()

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const openCategory = (item: Category) => {
  if (!isOpen.value) return
  router.push(routeMap[item.id] ?? '/original')
}
</script>

<style scoped>
.bagua-section {
  position: relative;
  padding: var(--spacing-2xl) 0 96px;
  min-height: 980px;
  background: radial-gradient(circle at center, #1a1a1a 0%, #050505 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
}

.section-title {
  font-size: var(--text-4xl);
  background: linear-gradient(135deg, var(--color-primary-red) 0%, var(--color-gold) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-xs);
}

.section-subtitle {
  font-family: var(--font-serif-cn);
  color: var(--color-text-muted);
  font-size: 1.1rem;
  letter-spacing: 0.1em;
}

.nav-compass-container {
  position: relative;
  width: 600px;
  height: 600px;
  transform: scale(1.18);
  transform-origin: center;
  margin: 0 auto 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.8s var(--ease-out-cubic);
}

.constellation-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  opacity: 0;
  transition: opacity 1s ease;
}

.nav-compass-container.is-open .constellation-bg {
  opacity: 1;
}

.constellation-svg {
  width: 100%;
  height: 100%;
}

.orbit-ring {
  fill: none;
  stroke: var(--color-gold);
  stroke-width: 1;
  stroke-opacity: 0.1;
  stroke-dasharray: 4 4;
  transform-origin: center;
  animation: spin-slow 60s linear infinite;
}

.outer-orbit {
  animation-duration: 80s;
  animation-direction: reverse;
}

.constellation-line {
  stroke: var(--color-gold);
  stroke-width: 1;
  stroke-opacity: 0.3;
  stroke-dasharray: 300;
  stroke-dashoffset: 300;
  animation: drawLine 0.8s var(--ease-out-cubic) forwards;
  animation-delay: var(--delay);
}

@keyframes drawLine {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.ring-layer {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 5;
}

.nav-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 80px;
  height: 80px;
  margin-left: -40px;
  margin-top: -40px;
  pointer-events: auto;
  cursor: pointer;
  transform: rotate(var(--angle)) translateX(0) rotate(calc(-1 * var(--angle)));
  opacity: 0;
  transition: all 0.6s var(--ease-out-cubic);
  transition-delay: var(--delay);
}

.nav-compass-container.is-open .nav-item {
  transform: rotate(var(--angle)) translateY(calc(-1 * var(--distance))) rotate(calc(-1 * var(--angle)));
  opacity: 1;
}

.item-content {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(212, 175, 55, 0.4);
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  background: url('/images/其余八个字的边框.jpg') no-repeat center center;
  background-size: cover;
  position: relative;
  overflow: hidden;
}

.item-content::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(20, 20, 20, 0.85);
  z-index: 0;
  transition: opacity 0.3s;
}

.item-content > * {
  position: relative;
  z-index: 1;
}

.nav-item:hover .item-content {
  border-color: var(--color-gold);
  transform: scale(1.15);
  box-shadow: var(--shadow-glow);
}

.nav-item:hover .item-content::before {
  background: rgba(20, 20, 20, 0.95);
}

.item-icon {
  font-size: 1.5rem;
  margin-bottom: 2px;
  color: var(--color-text-primary);
  transition: color 0.3s;
}

.item-label {
  font-size: 0.75rem;
  font-family: var(--font-serif-cn);
  color: var(--color-text-secondary);
  font-weight: 600;
  transition: color 0.3s;
}

.nav-item:hover .item-icon,
.nav-item:hover .item-label {
  color: var(--color-gold);
}

.center-control {
  position: absolute;
  z-index: 20;
  width: 100px;
  height: 100px;
  cursor: pointer;
}

.center-lid {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, var(--color-primary-red) 0%, #5a101d 100%);
  box-shadow: 0 10px 30px rgba(139, 26, 47, 0.4);
  border: 2px solid rgba(212, 175, 55, 0.3);
  transition: all 0.6s var(--ease-out-cubic);
  position: relative;
  overflow: hidden;
}

.nav-compass-container.is-open .center-lid {
  transform: rotate(180deg);
  box-shadow: 0 0 40px rgba(212, 175, 55, 0.3);
  border-color: var(--color-gold);
}

.lid-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--color-gold);
  transition: transform 0.6s var(--ease-out-cubic);
}

.nav-compass-container.is-open .lid-content {
  transform: rotate(-180deg);
}

.logo-text {
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1;
}

.lid-hint {
  font-size: 0.7rem;
  opacity: 0.8;
  margin-top: 4px;
}

.center-glow {
  position: absolute;
  inset: -10px;
  border-radius: 50%;
  border: 1px solid var(--color-gold);
  opacity: 0;
  transform: scale(0.8);
  transition: all 0.6s ease;
  pointer-events: none;
}

.center-control:hover .center-glow {
  opacity: 0.5;
  transform: scale(1.1);
}

.nav-compass-container.is-open .center-glow {
  animation: pulse-ring 3s infinite;
  opacity: 0.3;
}

@keyframes pulse-ring {
  0% {
    transform: scale(1);
    opacity: 0.3;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
}

@media (max-width: 768px) {
  .nav-compass-container {
    width: 340px;
    height: 340px;
    transform: none;
  }

  .nav-item {
    width: 60px;
    height: 60px;
    margin-left: -30px;
    margin-top: -30px;
  }

  .item-icon {
    font-size: 1.2rem;
  }

  .item-label {
    font-size: 0.65rem;
  }

  .nav-compass-container.is-open .inner-item {
    transform: rotate(var(--angle)) translateY(-90px) rotate(calc(-1 * var(--angle)));
  }

  .nav-compass-container.is-open .outer-item {
    transform: rotate(var(--angle)) translateY(-150px) rotate(calc(-1 * var(--angle)));
  }

  .constellation-bg {
    display: none;
  }
}
</style>
