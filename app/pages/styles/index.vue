<template>
  <div class="schools-page">
    <section class="schools-hero" aria-labelledby="schools-title">
      <p class="hero-kicker">Qipao Schools</p>
      <h1 id="schools-title">旗袍四大派系·一方水土一衣风</h1>
      <p class="hero-en">Four Regions, Four Aesthetics</p>
      <p class="hero-copy">
        旗袍之美，非止一端。自清末民初以来，受地域文化、气候环境、社会风尚与匠人传承的影响，旗袍逐渐形成了四大典型派系：苏派、京派、海派、粤派。她们或温婉、或端庄、或摩登、或兼容，共同构成了中国旗袍的多元谱系。
      </p>
    </section>

    <section class="layout-gallery" aria-label="旗袍四大派系图文介绍">
      <article
        v-for="item in layoutImages"
        :id="item.id"
        :key="item.id"
        class="layout-card"
        :class="{ 'is-overview': item.id === 'overview' }"
      >
        <h2 class="layout-title">{{ item.title }}</h2>
        <div class="layout-text-box">
          <p>{{ item.description }}</p>
        </div>

        <button type="button" class="layout-image-button" @click="openPreview(item.mainImage, item.alt)">
          <img :src="item.mainImage" :alt="item.alt" loading="lazy" />
        </button>

        <div v-if="item.detailImages.length" class="detail-strip">
          <button
            v-for="image in item.detailImages"
            :key="image"
            type="button"
            class="detail-image-card"
            @click="openPreview(image, item.alt)"
          >
            <img :src="image" :alt="item.alt" loading="lazy" />
          </button>
        </div>
      </article>
    </section>

    <Teleport to="body">
      <transition name="fade">
        <div v-if="previewImage" class="lightbox-overlay" @click="closePreview">
          <button class="lightbox-close" type="button" aria-label="关闭预览" @click.stop="closePreview">
            <span aria-hidden="true">×</span>
          </button>
          <img :src="previewImage.src" :alt="previewImage.alt" class="lightbox-img" @click.stop />
        </div>
      </transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
interface LayoutImage {
  id: string
  title: string
  alt: string
  description: string
  mainImage: string
  detailImages: string[]
}

interface PreviewImage {
  src: string
  alt: string
}

useHead({
  title: '旗袍四大派系 - 色控旗袍数据库',
})

const layoutImages: LayoutImage[] = [
  {
    id: 'overview',
    title: '旗袍四大派系·一方水土一衣风',
    alt: '旗袍四大派系总览图',
    description:
      '旗袍之美，非止一端。自清末民初以来，受地域文化、气候环境、社会风尚与匠人传承的影响，旗袍逐渐形成了四大典型派系：苏派、京派、海派、粤派。她们或温婉、或端庄、或摩登、或兼容，共同构成了中国旗袍的多元谱系。',
    mainImage: 'https://myvmail.us.ci/images/style-schools/layouts/overview.jpg',
    detailImages: [],
  },
  {
    id: 'su',
    title: '苏派·吴风婉月',
    alt: '苏派旗袍版式图',
    description:
      '以苏州为核心，苏绣为魂，工艺细腻清雅。形制上多采用传统平裁，曲线含蓄内敛，不刻意贴身。偏爱浅粉、月白、藕荷等低饱和度色系，搭配杭罗、苏缎等天然丝绸。整体气质温婉知性，如江南闺秀、书卷佳人，是文人旗袍的典型代表。',
    mainImage: 'https://myvmail.us.ci/images/style-schools/layouts/su.jpg',
    detailImages: [
      'https://myvmail.us.ci/images/style-schools/su/01.jpg',
      'https://myvmail.us.ci/images/style-schools/su/02.jpg',
      'https://myvmail.us.ci/images/style-schools/su/03.jpg',
    ],
  },
  {
    id: 'jing',
    title: '京派·宫廷气象',
    alt: '京派旗袍版式图',
    description:
      '承袭清宫服饰传统，工艺讲究重工重料，善用盘金绣、打籽绣等宫廷技法。版型端庄大气，廓形方正宽松，不强调腰身。色彩以正红、明黄、宝蓝等高饱和度正色为主，面料偏爱织锦缎、云锦等厚重材质。气质威严华贵，是礼仪与身份的外化。',
    mainImage: 'https://myvmail.us.ci/images/style-schools/layouts/jing.jpg',
    detailImages: [
      'https://myvmail.us.ci/images/style-schools/jing/01.jpg',
      'https://myvmail.us.ci/images/style-schools/jing/02.jpg',
      'https://myvmail.us.ci/images/style-schools/jing/03.jpg',
    ],
  },
  {
    id: 'hai',
    title: '海派·摩登风华',
    alt: '海派旗袍版式图',
    description:
      '以上海为中心，率先引入西式立体剪裁与胸省工艺，版型修身显瘦，曲线毕露。面料选择多元，除丝绸外，还使用蕾丝、印花布、进口呢绒等新材料，色彩时髦多变。气质摩登风情，与老上海月份牌、百乐门舞厅文化紧密相连，是民国都市女性的时尚图腾。',
    mainImage: 'https://myvmail.us.ci/images/style-schools/layouts/hai.jpg',
    detailImages: [
      'https://myvmail.us.ci/images/style-schools/hai/01.jpg',
      'https://myvmail.us.ci/images/style-schools/hai/02.jpg',
      'https://myvmail.us.ci/images/style-schools/hai/03.jpg',
    ],
  },
  {
    id: 'yue',
    title: '粤派·南洋华彩',
    alt: '粤派旗袍版式图',
    description:
      '粤派旗袍融合岭南文化与南洋审美，整体更强调轻盈、通透与生活气息。常见修身流畅的线条、灵活利落的裁剪，以及蕾丝、珠绣、纱料等装饰性元素。色彩更明快开放，既保留传统旗袍的雅致，也带有海滨城市与华侨文化交汇后的时尚表达。',
    mainImage: 'https://myvmail.us.ci/images/style-schools/layouts/yue.jpg',
    detailImages: [
      'https://myvmail.us.ci/images/style-schools/yue/01.jpg',
      'https://myvmail.us.ci/images/style-schools/yue/02.jpg',
      'https://myvmail.us.ci/images/style-schools/yue/03.jpg',
    ],
  },
]

const previewImage = ref<PreviewImage | null>(null)

const openPreview = (src: string, alt: string) => {
  previewImage.value = { src, alt }

  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

const closePreview = () => {
  previewImage.value = null

  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}
</script>

<style scoped>
.schools-page {
  min-height: 100vh;
  padding-bottom: 96px;
  background:
    radial-gradient(circle at 50% 0%, rgba(122, 43, 25, 0.16), transparent 30%),
    linear-gradient(180deg, #141414 0%, #0a0a0a 100%);
  color: #f5f5f5;
}

.schools-hero,
.layout-gallery {
  width: min(980px, calc(100% - 300px));
  margin: 0 auto;
  transform: translateX(-34px);
}

.schools-hero {
  padding: 78px 0 42px;
  text-align: center;
}

.hero-kicker {
  margin: 0 0 10px;
  color: #d9b36c;
  font-family: var(--font-serif-en);
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}

.schools-hero h1 {
  margin: 0;
  color: #ffffff;
  font-family: var(--font-serif-cn);
  font-size: clamp(2.2rem, 4vw, 4.2rem);
  font-weight: 600;
  line-height: 1.16;
}

.hero-en {
  margin: 16px 0 0;
  color: #d9b36c;
  font-family: var(--font-serif-en);
  font-size: 1rem;
  font-weight: 700;
}

.hero-copy {
  max-width: 860px;
  margin: 14px auto 0;
  color: rgba(255, 255, 255, 0.78);
  font-family: var(--font-serif-cn);
  font-size: clamp(1rem, 1.1vw, 1.15rem);
  line-height: 1.92;
}

.layout-gallery {
  display: grid;
  gap: 56px;
}

.layout-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding: 34px 24px 0;
  border-top: 1px solid rgba(212, 175, 55, 0.16);
  scroll-margin-top: calc(var(--header-height) + 24px);
}

.layout-card:first-child {
  padding-top: 0;
  border-top: 0;
}

.layout-title {
  margin: 0;
  color: #f5f0e8;
  font-family: var(--font-serif-cn);
  font-size: clamp(1.7rem, 2.2vw, 2.5rem);
  line-height: 1.22;
  text-align: center;
}

.layout-text-box {
  width: min(860px, 100%);
  padding: 14px 18px;
  border: 2px solid rgba(212, 175, 55, 0.55);
  background: rgba(20, 20, 20, 0.8);
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
}

.layout-text-box p {
  margin: 0;
  color: rgba(255, 255, 255, 0.85);
  font-family: var(--font-serif-cn);
  font-size: 1rem;
  line-height: 1.88;
}

.layout-image-button {
  display: block;
  width: min(560px, 100%);
  padding: 0;
  border: 0;
  background: transparent;
  cursor: zoom-in;
  box-shadow: 0 12px 34px rgba(44, 30, 20, 0.12);
}

.layout-image-button img {
  display: block;
  width: 100%;
  height: auto;
}

.detail-strip {
  width: min(760px, 100%);
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  padding: 16px;
  border: 2px solid rgba(212, 175, 55, 0.2);
  background: rgba(30, 30, 30, 0.6);
}

.detail-image-card {
  display: block;
  width: 100%;
  aspect-ratio: 3 / 4;
  padding: 0;
  overflow: hidden;
  border: 1px solid rgba(73, 120, 171, 0.75);
  background: #7da8d4;
  cursor: zoom-in;
}

.detail-image-card img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.is-overview .layout-image-button {
  width: min(760px, 100%);
}

.lightbox-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 28px;
  background: rgba(0, 0, 0, 0.92);
  cursor: zoom-out;
}

.lightbox-close {
  position: fixed;
  top: 20px;
  right: 22px;
  width: 42px;
  height: 42px;
  border: 1px solid rgba(255, 255, 255, 0.32);
  border-radius: 50%;
  background: rgba(18, 18, 18, 0.76);
  color: #fff;
  cursor: pointer;
  font-size: 1.9rem;
  line-height: 1;
}

.lightbox-img {
  max-width: min(1120px, 94vw);
  max-height: 90vh;
  object-fit: contain;
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.5);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.22s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 980px) {
  .schools-hero,
  .layout-gallery {
    width: min(760px, calc(100% - 32px));
    transform: none;
  }
}

@media (max-width: 640px) {
  .schools-hero {
    padding: 56px 0 34px;
  }

  .layout-card {
    gap: 14px;
    padding-inline: 0;
  }

  .layout-text-box {
    padding: 12px 14px;
  }

  .detail-strip {
    grid-template-columns: 1fr;
  }
}
</style>
