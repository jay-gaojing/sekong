<template>
  <div class="page-container">
    <!-- 八卦导航盘 (色控原创页面的核心内容) -->
    <BaguaNav />
  </div>
</template>

<script setup lang="ts">
// 色控原创页面
</script>

<style scoped>
.page-container {
  min-height: 100vh;
  padding-top: var(--header-height);
  background-color: var(--color-bg-paper); /* 配合八卦盘背景 */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>