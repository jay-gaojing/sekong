<template>
  <div class="styles-page">
    <StylesSection />
  </div>
</template>

<script setup lang="ts">
// 样式页逻辑
</script>

<style scoped>
.styles-page {
  min-height: 100vh;
  /* 确保有足够的背景色，以防组件本身没有覆盖全屏 */
  background-color: var(--color-bg-main); 
}
</style>