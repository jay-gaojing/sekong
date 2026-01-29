<template>
  <section class="styles-section" id="styles">
    <div class="container">
      <!-- 板块一：“传”（四大派系） -->
      <div class="style-block chuan-block">
        <div class="big-circle-wrapper left">
          <div class="big-circle">
            <span class="circle-text font-serif-cn">传</span>
            <div class="circle-decoration"></div>
          </div>
        </div>
        
        <div class="hex-grid right">
          <!-- 连接线 (SVG) -->
          <svg class="connection-lines" viewBox="0 0 400 400">
            <!-- To Source (Left) -->
            <line x1="0" y1="200" x2="150" y2="108" class="line" />
            <line x1="0" y1="200" x2="150" y2="288" class="line" />
            <!-- Inter-hex connections -->
            <line x1="150" y1="108" x2="270" y2="108" class="line" />
            <line x1="150" y1="288" x2="270" y2="288" class="line" />
            <line x1="150" y1="108" x2="150" y2="288" class="line" />
            <line x1="270" y1="108" x2="270" y2="288" class="line" />
          </svg>

          <div class="hex-item" v-for="(item, index) in chuanItems" :key="index" 
               :class="`hex-${index}`" @click="handleHexClick(item)">
            <div class="hex-content">
              <span class="hex-text font-serif-cn">{{ item.name }}</span>
            </div>
            <!-- Pop-up Menu -->
            <div class="hex-popup" :class="{ active: activeHex === item.id }">
              <div class="popup-item" @click.stop="navigateToDetail(item.id, 'style')">样式</div>
              <div class="popup-item" @click.stop="navigateToDetail(item.id, 'fabric')">面料</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 板块二：“现”（现代改良） -->
      <div class="style-block xian-block">
        <div class="hex-grid left">
           <!-- 连接线 (SVG) -->
           <svg class="connection-lines" viewBox="0 0 400 400">
            <!-- To Source (Right) -->
            <line x1="400" y1="200" x2="350" y2="108" class="line" />
            <line x1="400" y1="200" x2="350" y2="288" class="line" />
            <!-- Inter-hex connections -->
            <line x1="350" y1="108" x2="230" y2="108" class="line" />
            <line x1="350" y1="288" x2="230" y2="288" class="line" />
            <line x1="350" y1="108" x2="350" y2="288" class="line" />
            <line x1="230" y1="108" x2="230" y2="288" class="line" />
          </svg>

          <div class="hex-item" v-for="(item, index) in xianItems" :key="index"
               :class="`hex-${index}`" @click="handleHexClick(item)">
            <div class="hex-content">
              <span class="hex-text font-serif-cn">{{ item.name }}</span>
            </div>
             <!-- Pop-up Menu -->
             <div class="hex-popup" :class="{ active: activeHex === item.id }">
              <div class="popup-item" @click.stop="navigateToDetail(item.id, 'style')">样式</div>
              <div class="popup-item" @click.stop="navigateToDetail(item.id, 'fabric')">面料</div>
            </div>
          </div>
        </div>

        <div class="big-circle-wrapper right">
          <div class="big-circle">
            <span class="circle-text font-serif-cn">现</span>
            <div class="circle-decoration"></div>
          </div>
        </div>
      </div>

      <!-- 板块三：详情展示区（以海派为例） -->
      <div class="detail-section glass" v-if="activeDetail">
        <div class="detail-header">
          <h2 class="detail-title font-serif-cn">四大派系之一 — <span class="highlight">海派</span></h2>
          <p class="detail-desc font-serif-cn">
            上世纪三十年代盛行上海。特点：时尚自由，中西合璧。
            海派旗袍是传统与现代的完美融合，体现了当时上海女性追求解放、崇尚个性的精神风貌。
          </p>
        </div>
        
        <div class="image-grid-hand-drawn">
          <div class="grid-item item-1">
            <div class="placeholder-img">样式展示 A</div>
          </div>
          <div class="grid-item item-2">
            <div class="placeholder-img">样式展示 B</div>
          </div>
          <div class="grid-item item-3">
            <div class="placeholder-img">样式展示 C</div>
          </div>
        </div>
      </div>

      <!-- 板块四：材质展示 -->
      <div class="materials-section">
        <h3 class="section-title font-serif-cn">材质工艺</h3>
        <div class="materials-table glass">
          <div class="table-header">
            <div class="th">类别</div>
            <div class="th">特点</div>
            <div class="th">适用场景</div>
          </div>
          <div class="table-row" v-for="(mat, idx) in materials" :key="idx">
            <div class="td name font-serif-cn">{{ mat.name }}</div>
            <div class="td feature">{{ mat.feature }}</div>
            <div class="td usage">{{ mat.usage }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeHex = ref<string | null>(null)
const activeDetail = ref(true) // Default show for demo

const chuanItems = [
  { id: 'hai', name: '海' },
  { id: 'jing', name: '京' },
  { id: 'su', name: '苏' },
  { id: 'gang', name: '港' }
]

const xianItems = [
  { id: 'new', name: '新中式' },
  { id: 'region', name: '地域' },
  { id: 'guochao', name: '国潮' },
  { id: 'select', name: '服选' }
]

const materials = [
  { name: '棉 / 布', feature: '透气舒适，朴素自然', usage: '日常穿着，夏季' },
  { name: '呢 / 绒', feature: '保暖挺括，质感厚重', usage: '秋冬季节，正式场合' },
  { name: '丝 / 绸', feature: '光泽柔和，垂坠感好', usage: '宴会，礼仪，高端定制' },
  { name: '针 / 织', feature: '弹性贴身，现代感强', usage: '休闲改良，日常通勤' }
]

const handleHexClick = (item: any) => {
  if (activeHex.value === item.id) {
    activeHex.value = null
  } else {
    activeHex.value = item.id
  }
}

const navigateToDetail = (id: string, type: string) => {
  console.log(`Navigate to ${id} - ${type}`)
  // In a real app, this might scroll to detail or change route
  activeDetail.value = true
}
</script>

<style scoped>
.styles-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-bg-main);
  overflow: hidden;
}

.style-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-2xl);
  position: relative;
  min-height: 400px;
}

/* Big Circle */
.big-circle-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.big-circle {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: url('/images/旗袍样式（传，现）二字的边框.jpg') no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  box-shadow: var(--shadow-float);
  /* Remove old border and bg color */
}

.circle-text {
  font-size: 5rem;
  color: var(--color-primary-red); /* Adjusted for likely light background inside border */
  z-index: 2;
  font-weight: bold;
}

.circle-decoration {
  /* Hide CSS decoration as image has it */
  display: none;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Hex Grid */
.hex-grid {
  flex: 1.5;
  position: relative;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.connection-lines {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 0;
}

.line {
  stroke: var(--color-gold);
  stroke-width: 1;
  stroke-dasharray: 5, 5;
  opacity: 0.6;
}

.hex-item {
  width: 100px;
  height: 115px; /* Hexagon ratio */
  background: var(--color-bg-paper);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  cursor: pointer;
  transition: all var(--transition-normal);
  z-index: 1;
  border: 2px solid transparent; /* For hover effect */
}

.hex-item:hover {
  background: var(--color-primary-red);
  transform: scale(1.1);
}

.hex-item:hover .hex-text {
  color: var(--color-gold);
}

.hex-content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--color-bg-paper); /* Inner bg to create border effect if needed */
  clip-path: polygon(50% 2%, 98% 26%, 98% 74%, 50% 98%, 2% 74%, 2% 26%);
}

.hex-item:hover .hex-content {
  background: var(--color-primary-red);
}

.hex-text {
  font-size: 1.5rem;
  color: var(--color-primary-red);
  font-weight: bold;
}

/* Positioning Hexagons - Manual layout for "molecular" feel */
/* Right Grid (Chuan) */
.right .hex-0 { top: 50px; left: 100px; } /* Hai */
.right .hex-1 { top: 50px; left: 220px; } /* Jing */
.right .hex-2 { top: 230px; left: 100px; } /* Su */
.right .hex-3 { top: 230px; left: 220px; } /* Gang */

/* Left Grid (Xian) */
.left .hex-0 { top: 50px; right: 100px; } /* New */
.left .hex-1 { top: 50px; right: 220px; } /* Region */
.left .hex-2 { top: 230px; right: 100px; } /* Guochao */
.left .hex-3 { top: 230px; right: 220px; } /* Select */

/* Pop-up Menu */
.hex-popup {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(10px);
  background: var(--color-bg-dark);
  padding: 0.5rem;
  border-radius: var(--border-radius-md);
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-fast);
  min-width: 80px;
  z-index: 10;
  box-shadow: var(--shadow-lg);
}

.hex-popup.active {
  opacity: 1;
  visibility: visible;
  transform: translateX(-50%) translateY(0);
}

.popup-item {
  padding: 0.5rem;
  color: var(--color-gold);
  text-align: center;
  font-size: 0.875rem;
  cursor: pointer;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.popup-item:last-child {
  border-bottom: none;
}

.popup-item:hover {
  background: rgba(255,255,255,0.1);
  color: #fff;
}

/* Detail Section */
.detail-section {
  margin: var(--spacing-2xl) auto;
  padding: var(--spacing-xl);
  max-width: 1000px;
  border-radius: var(--border-radius-lg);
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.detail-title {
  font-size: 2rem;
  margin-bottom: var(--spacing-md);
  text-align: center;
}

.detail-title .highlight {
  color: var(--color-primary-red);
  border-bottom: 3px solid var(--color-gold);
}

.detail-desc {
  text-align: center;
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  color: var(--color-text-secondary);
  font-size: 1.1rem;
}

.image-grid-hand-drawn {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.grid-item {
  height: 300px;
  background: #fff;
  padding: 10px;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal);
}

/* Hand-drawn effect: slight rotation and offset */
.item-1 { transform: rotate(-2deg); }
.item-2 { transform: rotate(1deg) translateY(-10px); }
.item-3 { transform: rotate(2deg); }

.grid-item:hover {
  transform: scale(1.05) rotate(0);
  z-index: 2;
}

.placeholder-img {
  width: 100%;
  height: 100%;
  background: var(--color-bg-paper);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-text-muted);
  border: 1px dashed var(--color-text-muted);
}

/* Materials Section */
.materials-section {
  margin-top: var(--spacing-2xl);
}

.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: var(--spacing-lg);
  color: var(--color-primary-red);
}

.materials-table {
  max-width: 800px;
  margin: 0 auto;
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  background: var(--color-primary-red);
  color: var(--color-gold);
  padding: var(--spacing-md);
  font-weight: bold;
}

.table-row {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
  padding: var(--spacing-md);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  transition: background var(--transition-fast);
}

.table-row:hover {
  background: rgba(212, 175, 55, 0.1);
}

.table-row .name {
  font-weight: bold;
  color: var(--color-primary-red);
}

/* Responsive */
@media (max-width: 768px) {
  .style-block {
    flex-direction: column;
    min-height: auto;
  }
  
  .xian-block {
    flex-direction: column-reverse;
  }

  .hex-grid {
    height: 300px;
    width: 100%;
  }

  .image-grid-hand-drawn {
    grid-template-columns: 1fr;
  }
  
  .grid-item {
    transform: none !important;
    margin-bottom: var(--spacing-md);
  }
}
</style>
