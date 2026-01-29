<template>
  <aside class="curve-nav">
    <svg class="nav-svg" viewBox="0 0 240 700" xmlns="http://www.w3.org/2000/svg">
      <!-- Gradient Definitions -->
      <defs>
        <linearGradient id="silkGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:var(--color-gold); stop-opacity:0.2" />
          <stop offset="50%" style="stop-color:var(--color-primary-red); stop-opacity:0.5" />
          <stop offset="100%" style="stop-color:var(--color-gold); stop-opacity:0.2" />
        </linearGradient>

        <radialGradient id="rubyGem" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
          <stop offset="0%" style="stop-color:#ff6b6b" />
          <stop offset="100%" style="stop-color:var(--color-primary-red)" />
        </radialGradient>

        <filter id="glow-gold">
          <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <!-- The Silk Path (Background Line) - 北斗七星样式 (折线连接) -->
      <path class="nav-path-bg" :d="constellationPath" stroke="url(#silkGradient)" stroke-width="2" fill="none"
        stroke-linecap="round" stroke-linejoin="round" />

      <!-- Navigation Nodes -->
      <g v-for="(item, index) in navItemsWithPositions" :key="item.id" class="nav-node" :class="{
        'active': activeItem === item.id,
        'has-sub': item.hasSub
      }" :transform="`translate(${item.x}, ${item.y})`" @click="handleNavClick(item.id)"
        @mouseenter="hoveredItem = item.id" @mouseleave="hoveredItem = null">
        <!-- Connector Line (Invisible hit area) -->
        <circle class="hit-area" r="24" fill="transparent" />

        <!-- Label Group (Left side) -->
        <g class="label-group" transform="translate(-30, 0)">
          <rect class="label-bg" x="-80" y="-14" width="90" height="28" rx="4" />
          <text class="nav-label" x="0" y="5" text-anchor="end">{{ item.label }}</text>
        </g>

        <!-- The Gem Node -->
        <g class="gem-wrapper">
          <!-- Active State: Custom Icon Image -->
          <image 
            v-if="activeItem === item.id"
            href="/images/nav-icon.png"
            x="-25"
            y="-25"
            width="50"
            height="50"
            class="nav-icon-active"
          />
          
          <!-- Inactive State: Default Gem Circles -->
          <g v-else>
            <circle class="gem-outer-ring" r="12" />
            <circle class="gem-stone" r="6" />
          </g>
        </g>

        <!-- Sub-item Indicator -->
        <g v-if="item.hasSub" class="sub-indicator" transform="translate(18, -18)">
          <circle r="4" fill="var(--color-gold)" />
        </g>
      </g>
    </svg>
  </aside>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

interface NavItem {
  id: string
  label: string
  hasSub?: boolean
}

interface NavItemWithPosition extends NavItem {
  x: number
  y: number
}

// 根据设计图更新导航项
const navItems: NavItem[] = [
  { id: 'yan', label: '颜' },
  { id: 'original', label: '色控原创', hasSub: true },
  { id: 'styles', label: '旗袍样式', hasSub: true },
  { id: 'crafts', label: '旗袍工艺', hasSub: true },
  { id: 'pankou', label: '旗袍盘扣', hasSub: true },
  { id: 'colors', label: '旗袍色彩', hasSub: true },
  { id: '3d-sim', label: '旗袍3D仿真' }
]

// 北斗七星坐标 (模拟真实的勺子形状 + 连线)
const positions = [
  // 斗勺部分 (Alpha, Beta, Gamma, Delta)
  { x: 160, y: 100 }, // 1. 天枢 (Dubhe) - 颜
  { x: 190, y: 160 }, // 2. 天璇 (Merak) - 色控原创
  { x: 160, y: 240 }, // 3. 天玑 (Phecda) - 旗袍样式
  { x: 120, y: 220 }, // 4. 天权 (Megrez) - 旗袍工艺 (勺柄连接处)

  // 斗柄部分 (Epsilon, Zeta, Eta)
  { x: 90, y: 300 },  // 5. 玉衡 (Alioth) - 旗袍盘扣
  { x: 70, y: 380 },  // 6. 开阳 (Mizar) - 旗袍色彩
  { x: 40, y: 480 }   // 7. 摇光 (Alkaid) - 旗袍3D仿真
]

const navItemsWithPositions = computed<NavItemWithPosition[]>(() => {
  return navItems.map((item, index) => ({
    ...item,
    ...positions[index]
  }))
})

// 生成折线路径
const constellationPath = computed(() => {
  if (positions.length === 0) return ''
  const start = positions[0]
  let path = `M ${start.x} ${start.y}`
  for (let i = 1; i < positions.length; i++) {
    path += ` L ${positions[i].x} ${positions[i].y}`
  }
  return path
})

const activeItem = ref<string>('yan') // Default to 'yan'
const hoveredItem = ref<string | null>(null)

// 导航点击处理逻辑
const handleNavClick = async (id: string) => {
  activeItem.value = id
  
  if (id === 'styles') {
    // 前往样式页
    await router.push('/styles')
  } else {
    // 目标是首页的某个板块
    if (route.path !== '/') {
      // 当前不在首页，直接跳转到首页对应锚点（利用 hash）
      // 使用 hash 跳转可以避免手动 setTimeout 滚动，体验更像页面跳转
      await router.push({ path: '/', hash: `#${id}` })
    } else {
      // 已经在首页，进行平滑滚动定位
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }
}

// 滚动监听逻辑 (IntersectionObserver)
let observer: IntersectionObserver | null = null

const setupObserver = () => {
  // 只在首页启用滚动监听
  if (route.path !== '/') return

  observer = new IntersectionObserver((entries) => {
    // 找出当前可见度最高的元素
    let maxRatio = 0
    let maxId = ''
    
    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
        maxRatio = entry.intersectionRatio
        maxId = entry.target.id
      }
    })

    if (maxId) {
      activeItem.value = maxId
    }
  }, {
    threshold: [0.2, 0.5, 0.8], // 多级阈值确保灵敏度
    rootMargin: '-20% 0px -20% 0px' // 缩小判定区域，聚焦屏幕中部
  })

  // 观察所有导航项对应的 DOM 元素
  navItems.forEach(item => {
    if (item.id === 'styles') return // 样式页不在首页观察范围内
    const el = document.getElementById(item.id)
    if (el) observer?.observe(el)
  })
}

// 监听路由变化来更新 activeItem 和 Observer
watch(() => route.path, (newPath) => {
  if (newPath === '/styles') {
    activeItem.value = 'styles'
    observer?.disconnect() // 离开首页时断开观察
  } else {
    // 回到首页，稍作延迟等待 DOM 渲染后重新观察
    setTimeout(setupObserver, 100)
  }
}, { immediate: true })

onMounted(() => {
  if (route.path === '/') {
    setupObserver()
  } else if (route.path === '/styles') {
    activeItem.value = 'styles'
  }
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style scoped>
.curve-nav {
  position: fixed;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  height: 600px;
  width: 240px;
  z-index: 900;
  pointer-events: none;
}

.nav-svg {
  width: 100%;
  height: 100%;
  pointer-events: auto;
  overflow: visible;
}

.nav-node {
  cursor: pointer;
  transition: all var(--transition-normal);
}

/* Nav Icon Animation */
.nav-icon-active {
  animation: icon-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  transform-origin: center;
}

@keyframes icon-pop {
  0% { opacity: 0; transform: scale(0.5); }
  100% { opacity: 1; transform: scale(1); }
}

/* Gem Styles */
.gem-outer-ring {
  fill: transparent;
  stroke: var(--color-gold);
  stroke-width: 1.5;
  transition: all var(--transition-normal);
  opacity: 0.6;
}

.gem-stone {
  fill: var(--color-bg-paper);
  stroke: var(--color-gold);
  stroke-width: 2;
  transition: all var(--transition-normal);
}

/* Label Styles */
.label-group {
  opacity: 0;
  transform: translateX(10px) translate(-30px, 0);
  transition: all var(--transition-normal);
  pointer-events: none;
}

.label-bg {
  fill: var(--color-primary-red);
  opacity: 0;
  transition: all var(--transition-fast);
}

.nav-label {
  font-family: var(--font-serif-cn);
  font-size: 0.9rem;
  fill: var(--color-gold);
  font-weight: 600;
}

/* Hover State */
.nav-node:hover .gem-outer-ring {
  r: 16;
  opacity: 1;
  stroke: var(--color-primary-red);
}

.nav-node:hover .gem-stone {
  fill: url(#rubyGem);
  stroke: none;
  r: 8;
  filter: drop-shadow(0 0 4px rgba(200, 16, 46, 0.4));
}

.nav-node:hover .label-group {
  opacity: 1;
  transform: translateX(0) translate(-30px, 0);
}

/* Active State */
.nav-node.active .gem-outer-ring {
  r: 20;
  stroke: var(--color-gold);
  stroke-width: 2;
  opacity: 1;
  stroke-dasharray: 4 4;
  animation: spin 10s linear infinite;
}

.nav-node.active .gem-stone {
  fill: url(#rubyGem);
  stroke: none;
  r: 10;
  filter: drop-shadow(0 0 8px rgba(200, 16, 46, 0.6));
}

.nav-node.active .label-group {
  opacity: 1;
}

.nav-node.active .nav-label {
  font-size: 1rem;
  fill: var(--color-primary-red);
  font-weight: 700;
}

/* Sub Indicator */
.sub-indicator circle {
  animation: pulse 2s infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 0.6;
    transform: scale(0.8);
  }
}

/* Responsive */
@media (max-width: 1200px) {
  .curve-nav {
    display: none;
  }
}
</style>
