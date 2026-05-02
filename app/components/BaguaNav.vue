<template>
  <section id="bagua-nav" class="bagua-section">
    <div class="bagua-inner">
      <header class="section-header">
        <h2>探索旗袍之美</h2>
        <p>Exploring the Beauty of the Qipao</p>
      </header>

      <div class="nav-compass-container" :class="{ 'is-open': isOpen }">
        <svg class="constellation-svg" viewBox="0 0 600 600" aria-hidden="true">
          <g v-if="isOpen">
            <line
              v-for="(item, index) in categories"
              :key="`line-${item.id}`"
              x1="300"
              y1="300"
              :x2="300 + Math.cos((item.angle - 90) * Math.PI / 180) * item.distance"
              :y2="300 + Math.sin((item.angle - 90) * Math.PI / 180) * item.distance"
              class="constellation-line"
              :style="{ '--delay': index * 0.06 + 's' }"
            />
          </g>
          <circle cx="300" cy="300" r="140" class="orbit-ring" />
          <circle cx="300" cy="300" r="240" class="orbit-ring orbit-ring-outer" />
        </svg>

        <button
          v-for="(item, index) in categories"
          :key="item.id"
          type="button"
          class="nav-item"
          :class="item.distance === 140 ? 'inner-item' : 'outer-item'"
          :style="{
            '--angle': item.angle + 'deg',
            '--distance': item.distance + 'px',
            '--delay': index * 0.05 + 's',
          }"
          @click="openCategory(item)"
        >
          <span class="item-icon">{{ item.icon }}</span>
          <span class="item-label">{{ item.label }}</span>
        </button>

        <button type="button" class="center-control" @click="toggleOpen">
          <span class="logo-text">旗</span>
          <span class="lid-hint">{{ isOpen ? '收起' : '开启' }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Category {
  id: string
  label: string
  icon: string
  angle: number
  distance: 140 | 240
  route: string
}

const categories: Category[] = [
  { id: 'wedding', label: '婚庆', icon: '囍', angle: 0, distance: 140, route: '/original#xi' },
  { id: 'fashion', label: '时装', icon: '裳', angle: 45, distance: 240, route: '/original#shang' },
  { id: 'accessories', label: '服饰', icon: '饰', angle: 135, distance: 240, route: '/original#shi' },
  { id: 'original', label: '原创', icon: '匠', angle: 120, distance: 140, route: '/original#jiang' },
  { id: 'youth', label: '少年', icon: '竹', angle: 225, distance: 240, route: '/original#zhu' },
  { id: 'new-chinese', label: '新中式', icon: '潮', angle: 240, distance: 140, route: '/original#chao' },
  { id: 'maiden', label: '少女', icon: '兰', angle: 315, distance: 240, route: '/original#lan' },
]

const isOpen = ref(false)
const router = useRouter()

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}

const openCategory = (item: Category) => {
  if (!isOpen.value) return
  router.push(item.route)
}
</script>

<style scoped>
.bagua-section {
  position: relative;
  min-height: 900px;
  padding: 86px 0 116px;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 56%, rgba(214, 176, 107, 0.1), transparent 17%),
    radial-gradient(circle at center, #171717 0%, #050505 74%);
  color: #fff;
}

.bagua-inner {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}

.section-header {
  margin-bottom: 42px;
  text-align: center;
}

.section-header h2 {
  margin: 0 0 14px;
  font-family: var(--font-serif-cn);
  font-size: clamp(2.4rem, 5vw, 4.2rem);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: 0;
  color: var(--color-gold);
}

.section-header p {
  margin: 0;
  color: var(--color-text-muted);
  font-family: var(--font-serif-en);
  font-size: clamp(0.92rem, 1.4vw, 1.1rem);
  letter-spacing: 0.12em;
}

.nav-compass-container {
  position: relative;
  width: min(720px, 82vw);
  height: min(720px, 82vw);
  margin: 0 auto;
}

.constellation-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.orbit-ring {
  fill: none;
  stroke: var(--color-gold);
  stroke-width: 1;
  stroke-dasharray: 7 9;
  stroke-opacity: 0.12;
  transform-origin: center;
  animation: compass-spin 70s linear infinite;
}

.orbit-ring-outer {
  animation-duration: 96s;
  animation-direction: reverse;
}

.constellation-line {
  stroke: rgba(214, 176, 107, 0.34);
  stroke-width: 1;
  stroke-dasharray: 320;
  stroke-dashoffset: 320;
  animation: line-draw 0.75s ease forwards;
  animation-delay: var(--delay);
}

.nav-item {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 92px;
  height: 92px;
  margin: -46px 0 0 -46px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(228, 211, 163, 0.78);
  border-radius: 50%;
  background:
    radial-gradient(circle at 50% 42%, rgba(255, 255, 255, 0.1), transparent 36%),
    rgba(54, 54, 54, 0.92);
  box-shadow: 0 18px 34px rgba(0, 0, 0, 0.28);
  color: #f7f3eb;
  cursor: pointer;
  opacity: 0;
  transform: rotate(var(--angle)) translateY(0) rotate(calc(-1 * var(--angle)));
  transition:
    opacity 0.55s ease,
    transform 0.7s cubic-bezier(0.19, 1, 0.22, 1),
    border-color 0.25s ease,
    box-shadow 0.25s ease;
  transition-delay: var(--delay);
}

.nav-compass-container.is-open .nav-item {
  opacity: 1;
  transform: rotate(var(--angle)) translateY(calc(-1 * var(--distance))) rotate(calc(-1 * var(--angle)));
}

.nav-item:hover {
  border-color: var(--color-gold);
  box-shadow: 0 0 28px rgba(214, 176, 107, 0.26), 0 18px 34px rgba(0, 0, 0, 0.28);
}

.item-icon {
  color: #fff;
  font-family: var(--font-serif-cn);
  font-size: 2rem;
  line-height: 1;
}

.item-label {
  margin-top: 6px;
  color: rgba(255, 255, 255, 0.72);
  font-family: var(--font-serif-cn);
  font-size: 1rem;
  font-weight: 700;
}

.center-control {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  width: 116px;
  height: 116px;
  margin: -58px 0 0 -58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 3px solid rgba(214, 176, 107, 0.72);
  border-radius: 50%;
  background: #7e1829;
  color: var(--color-gold);
  box-shadow: 0 0 0 22px rgba(214, 176, 107, 0.05), 0 22px 60px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
}

.center-control:hover {
  transform: scale(1.05);
  box-shadow: 0 0 0 28px rgba(214, 176, 107, 0.08), 0 22px 60px rgba(0, 0, 0, 0.5);
}

.logo-text {
  font-family: var(--font-serif-cn);
  font-size: 3.1rem;
  font-weight: 700;
  line-height: 1;
}

.lid-hint {
  margin-top: 6px;
  font-family: var(--font-serif-cn);
  font-size: 0.9rem;
}

@keyframes line-draw {
  to {
    stroke-dashoffset: 0;
  }
}

@keyframes compass-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .bagua-section {
    min-height: 710px;
    padding-block: 64px 84px;
  }

  .bagua-inner {
    width: min(100% - 32px, 1120px);
  }

  .section-header {
    text-align: center;
  }

  .nav-compass-container {
    width: 340px;
    height: 340px;
  }

  .nav-item {
    width: 62px;
    height: 62px;
    margin: -31px 0 0 -31px;
  }

  .nav-compass-container.is-open .inner-item {
    transform: rotate(var(--angle)) translateY(-92px) rotate(calc(-1 * var(--angle)));
  }

  .nav-compass-container.is-open .outer-item {
    transform: rotate(var(--angle)) translateY(-150px) rotate(calc(-1 * var(--angle)));
  }

  .item-icon {
    font-size: 1.3rem;
  }

  .item-label {
    margin-top: 3px;
    font-size: 0.74rem;
  }

  .center-control {
    width: 86px;
    height: 86px;
    margin: -43px 0 0 -43px;
  }

  .logo-text {
    font-size: 2.35rem;
  }
}
</style>
