<template>
  <div class="home-page">
    <!-- 数据库展示区域 (颜) -->
    <div id="yan">
      <DatabaseSection />
    </div>

    <!-- 色控展览/原创区域 (色控原创) -->
    <div id="original">
      <SeKongSection />
    </div>

    <!-- 旗袍传承视频区域 (传承谱系 / 工艺) -->
    <div id="heritage">
      <!-- 同时也作为工艺的锚点 -->
      <div id="crafts">
        <HeritageVideo />
      </div>
    </div>

    <!-- 八卦导航盘 -->
    <BaguaNav />

    <!-- 盘扣入口区域 (旗袍盘扣) -->
    <div id="pankou">
      <PankouSection />
    </div>

    <!-- 图片展示区域 (旗袍色彩 / 3D) -->
    <div id="colors">
      <div id="3d-sim">
        <GallerySection />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 首页逻辑
</script>

<style scoped>
.home-page {
  /* 页面级样式 */
}
</style>