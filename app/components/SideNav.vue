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

      <!-- The Silk Path (Background Line) - 北斗七星样式 -->
      <path class="nav-path-bg" d="M 60 30 
           Q 130 80, 100 140
           Q 70 200, 120 260
           Q 170 320, 110 380
           Q 50 440, 100 500
           Q 150 560, 90 620
           Q 30 660, 60 680" stroke="url(#silkGradient)" stroke-width="4" fill="none" stroke-linecap="round" />

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
          <circle class="gem-outer-ring" r="12" />
          <circle class="gem-stone" r="6" />
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
import { ref, computed } from 'vue'

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

// 北斗七星曲线坐标 - 扩展为 7 个点
const positions = [
  { x: 180, y: 50 },   // 颜
  { x: 140, y: 130 },  // 色控原创
  { x: 190, y: 220 },  // 旗袍样式
  { x: 130, y: 320 },  // 旗袍工艺
  { x: 160, y: 440 },  // 旗袍盘扣
  { x: 100, y: 540 },  // 旗袍色彩
  { x: 150, y: 640 }   // 旗袍3D仿真
]

const navItemsWithPositions = computed<NavItemWithPosition[]>(() => {
  return navItems.map((item, index) => ({
    ...item,
    ...positions[index]
  }))
})

const activeItem = ref<string>('styles')
const hoveredItem = ref<string | null>(null)

const handleNavClick = (id: string) => {
  activeItem.value = id
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
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
