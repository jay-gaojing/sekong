<template>
  <main class="disclaimer-page">
    <article class="content-panel">
      <p class="eyebrow">Copyright & Disclaimer</p>
      <h1>中国非遗旗袍数字博物馆免责声明</h1>

      <section>
        <p>尊敬的访客：</p>
        <p>
          欢迎访问中国非遗旗袍数字博物馆！本网站致力于推广和传承中国传统旗袍技艺与文化，所有内容均以文化传播、教育研究为目的，非商业用途。
        </p>
      </section>

      <section>
        <h2>原创内容声明</h2>
        <p>
          本网站展示的旗袍作品、历史资料及相关图文，部分为团队原创拍摄、制作或授权使用。如需转载、引用或使用本网站的原创内容，请事先联系我方，并注明来源。未经许可，不得擅自用于商业用途。
        </p>
      </section>

      <section>
        <h2>网络素材使用声明</h2>
        <p>
          为丰富展示内容，本网站部分图片及资料来源于网络公开资源（如博物馆、学术文献、公共文化平台、历史档案等），我们尽可能标注来源或作者信息。若您认为某些内容涉及版权问题，请及时与我们联系，我们将第一时间核实并妥善处理（如补充署名或下架相关素材）。
        </p>
      </section>

      <section>
        <h2>非商用声明</h2>
        <p>
          本网站所有内容（包括原创及网络素材）仅用于旗袍文化宣传、教育及研究，不涉及任何商业盈利行为。如因特殊需求需使用本网站素材，请遵循合法、合理原则，并尊重原创者权益。
        </p>
      </section>

      <section>
        <h2>免责条款</h2>
        <p>
          本网站对转载内容的准确性、完整性不做绝对保证，访问者应自行判断其适用性。若因使用本网站内容而产生的任何纠纷或法律责任，本平台不承担相关责任。
        </p>
      </section>

      <section>
        <p>
          我们始终尊重知识产权，并积极推动非遗文化的保护与传承。如您有任何建议或版权相关问题，欢迎通过以下方式联系我们：
        </p>
        <p class="contact-line">
          邮箱：<a href="mailto:123410932@qq.com">123410932@qq.com</a>
        </p>
        <p>感谢您的理解与支持！</p>
      </section>
    </article>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: '免责声明 - 中国非遗旗袍数字博物馆',
})
</script>

<style scoped>
.disclaimer-page {
  min-height: 100vh;
  padding: calc(var(--header-height) + 56px) 24px 72px;
  background:
    radial-gradient(circle at 18% 14%, rgba(212, 175, 55, 0.14), transparent 32%),
    linear-gradient(180deg, rgba(16, 13, 12, 0.98), var(--color-bg-dark) 48%);
  color: var(--color-text-light);
}

.content-panel {
  width: min(980px, 100%);
  margin: 0 auto;
  padding: clamp(28px, 4vw, 54px);
  border: 1px solid rgba(214, 176, 107, 0.22);
  border-radius: 8px;
  background: rgba(255, 248, 232, 0.055);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.24);
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--color-gold);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

h1,
h2 {
  margin: 0;
  font-family: var(--font-serif-cn);
  letter-spacing: 0;
}

h1 {
  margin-bottom: 34px;
  color: var(--color-gold);
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.25;
}

section {
  margin-top: 26px;
}

h2 {
  margin-bottom: 10px;
  color: rgba(255, 245, 218, 0.94);
  font-size: clamp(1.15rem, 1.7vw, 1.45rem);
}

p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-size: clamp(1rem, 1.25vw, 1.12rem);
  line-height: 1.95;
}

section p + p {
  margin-top: 10px;
}

.contact-line {
  margin-top: 12px;
}

a {
  color: var(--color-gold);
  text-decoration: none;
}

a:hover {
  color: #fff;
}

@media (max-width: 768px) {
  .disclaimer-page {
    padding: calc(var(--header-height) + 32px) 16px 48px;
  }
}
</style>
