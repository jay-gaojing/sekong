<template>
  <aside class="side-nav">
    <nav class="nav-list">
      <div
        v-for="item in navItems"
        :key="item.id"
        class="nav-item"
        :class="{ active: activeItem === item.id }"
        @click="handleNavClick(item.id)"
      >
        <span class="nav-dot"></span>
        <span class="nav-label">{{ item.label }}</span>
      </div>
    </nav>
  </aside>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

interface NavItem {
  id: string
  label: string
}

const router = useRouter()
const route = useRoute()

const navItems: NavItem[] = [
  { id: 'yan', label: '首页' },
  { id: 'original', label: '旗袍原创' },
  { id: 'styles', label: '四大派系' },
  { id: 'materials', label: '旗袍面料' },
  { id: 'crafts', label: '旗袍工艺' },
  { id: 'pankou', label: '旗袍盘扣' },
  { id: 'colors', label: '旗袍色彩' },
  { id: '3d-sim', label: '3D仿真' },
  { id: 'cases', label: '传承谱系' },
  { id: 'ip', label: '知识产权' },
]

const routeMap: Record<string, string> = {
  yan: '/',
  original: '/original',
  styles: '/styles',
  materials: '/materials',
  crafts: '/crafts',
  pankou: '/pankou',
  colors: '/colors',
  '3d-sim': '/simulation',
  cases: '/cases',
  ip: '/ip',
}

const activeItem = ref('yan')

const getActiveFromRoute = (path: string): string => {
  if (path === '/' || path === '') return 'yan'
  if (path.startsWith('/original')) return 'original'
  if (path.startsWith('/styles')) return 'styles'
  if (path.startsWith('/materials')) return 'materials'
  if (path.startsWith('/crafts')) return 'crafts'
  if (path.startsWith('/pankou')) return 'pankou'
  if (path.startsWith('/colors')) return 'colors'
  if (path.startsWith('/simulation')) return '3d-sim'
  if (path.startsWith('/heritage-ip')) return 'cases'
  if (path.startsWith('/cases')) return 'cases'
  if (path.startsWith('/ip')) return 'ip'
  return 'yan'
}

const handleNavClick = async (id: string) => {
  activeItem.value = id
  const targetPath = routeMap[id]

  if (targetPath) {
    await router.push(targetPath)
  }
}

watch(
  () => route.path,
  (newPath) => {
    activeItem.value = getActiveFromRoute(newPath)
  },
  { immediate: true },
)
</script>

<style scoped>
.side-nav {
  position: fixed;
  right: 2rem;
  top: 50%;
  z-index: 900;
  display: flex;
  align-items: center;
  transform: translateY(-50%);
}

.nav-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.nav-item {
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 12px;
  padding: 8px 16px 8px 12px;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.nav-item:hover {
  background: rgba(255, 255, 255, 0.06);
}

.nav-dot {
  width: 8px;
  height: 8px;
  flex-shrink: 0;
  border: 1.5px solid var(--color-gold);
  border-radius: 50%;
  background: transparent;
  transition: all var(--transition-fast);
}

.nav-item:hover .nav-dot {
  background: var(--color-gold);
  box-shadow: 0 0 6px rgba(212, 175, 55, 0.4);
}

.nav-item.active .nav-dot {
  width: 10px;
  height: 10px;
  border-color: var(--color-gold);
  background: var(--color-primary-red);
  box-shadow: 0 0 10px rgba(200, 16, 46, 0.5);
}

.nav-label {
  color: rgba(255, 255, 255, 0.5);
  font-family: var(--font-serif-cn);
  font-size: 0.85rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  white-space: nowrap;
  transition: all var(--transition-fast);
}

.nav-item:hover .nav-label {
  color: var(--color-gold);
}

.nav-item.active .nav-label {
  color: var(--color-gold);
  font-size: 0.9rem;
  font-weight: 700;
}

@media (max-width: 1200px) {
  .side-nav {
    display: none;
  }
}
</style>
