<template>
  <section class="styles-section" id="styles" aria-label="旗袍派系展示">
    <div class="container">
      <div class="style-block chuan-block">
        <div class="big-circle-wrapper">
          <div class="big-circle">
            <span class="circle-text font-serif-cn">传</span>
          </div>
          <span class="circle-label">（四大派系）</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.styles-section {
  padding: var(--spacing-2xl) 0;
  background-color: var(--color-bg-main);
  overflow: hidden;
  scroll-margin-top: var(--header-height);
}

.style-block {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 320px;
}

.big-circle-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.big-circle {
  position: relative;
  width: 230px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #fbf8f0;
  box-shadow: var(--shadow-float);
  overflow: hidden;
  isolation: isolate;
}

.big-circle::before {
  content: '';
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  background: url('https://myvmail.us.ci/images/旗袍样式（传，现）二字的边框.jpg') no-repeat center 57%;
  background-size: 215% auto;
  filter: saturate(1.08);
  z-index: 1;
  pointer-events: none;
}

.circle-text {
  position: relative;
  z-index: 2;
  color: var(--color-primary-red);
  font-size: 5rem;
  font-weight: 700;
}

.circle-label {
  color: rgba(255, 255, 255, 0.78);
  font-family: var(--font-serif-cn);
  font-size: 1rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .style-block {
    min-height: 260px;
  }

  .big-circle {
    width: 190px;
    height: 190px;
  }

  .circle-text {
    font-size: 4.2rem;
  }
}
</style>
