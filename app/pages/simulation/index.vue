<template>
  <div class="page-container flex-center">
    <div class="coming-soon">
      <h1 class="font-serif-cn text-gold text-4xl mb-4">旗袍3D仿真</h1>
      <p class="text-secondary">功能开发中，敬请期待...</p>
      <div class="cube-loader mt-8"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 3D仿真页面
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  padding-top: var(--header-height);
  background-color: var(--color-bg-dark);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.text-gold { color: var(--color-gold); }
.text-secondary { color: var(--color-text-muted); }

.cube-loader {
  width: 40px;
  height: 40px;
  background: var(--color-primary-red);
  margin: 0 auto;
  animation: rotate 2s infinite ease-in-out;
}

@keyframes rotate {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>