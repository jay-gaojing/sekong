<template>
  <section id="heritage-video" class="heritage-section">
    <!-- Smooth Transition Divider (Multi-layer) -->
    <div class="section-divider-top">
      <svg class="wave-svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style="stop-color:var(--color-bg-main); stop-opacity:0" />
            <stop offset="100%" style="stop-color:var(--color-bg-main); stop-opacity:1" />
          </linearGradient>
        </defs>
        <!-- Layer 1: Gold Tint (Decorative) -->
        <path fill="rgba(212, 175, 55, 0.1)"
          d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
        <!-- Layer 2: Main Background -->
        <path fill="var(--color-bg-main)"
          d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,261.3C960,256,1056,224,1152,197.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
        </path>
      </svg>
    </div>

    <!-- Background Texture -->
    <div class="bg-pattern"></div>

    <div class="container relative z-10">
      <header class="section-header text-center">
        <h2 class="section-title text-gradient-gold">
          龙凤旗袍手工制作技艺
        </h2>
        <div class="title-sub">Longfeng Qipao Handmade Craftsmanship</div>
      </header>

      <div class="cinema-container">
        <!-- Main Video Frame -->
        <div class="video-frame-wrapper group">
          <div class="video-frame-border"></div>
          <div class="video-placeholder">
            <!-- 视频播放器 -->
            <video
              v-if="isPlaying"
              ref="videoRef"
              class="video-player"
              :src="videoSrc"
              controls
              preload="metadata"
              playsinline
              webkit-playsinline
              @ended="onVideoEnded"
            ></video>
            <!-- 未播放时的封面 -->
            <div v-else class="video-overlay" @click="playVideo">
              <button class="play-btn">
                <span class="btn-ring"></span>
                <span class="btn-fill"></span>
                <svg class="play-icon" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div class="video-meta">
                <span class="meta-tag">纪录片</span>
                <h3 class="video-title">龙凤旗袍手工制作技艺</h3>
                <span class="meta-duration">非遗影像</span>
              </div>
            </div>
            <!-- Faux scanlines -->
            <div class="scanlines"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isPlaying = ref(false)
const videoRef = ref<HTMLVideoElement | null>(null)
const videoSrc = '/videos/heritage/longfeng-qipao-craft.mp4'

const playVideo = async () => {
  isPlaying.value = true

  await nextTick()

  try {
    await videoRef.value?.play()
  } catch (error) {
    console.warn('Video playback was blocked or failed:', error)
  }
}

const onVideoEnded = () => {
  isPlaying.value = false
}
</script>

<style scoped>
.heritage-section {
  padding-top: 0;
  padding-bottom: var(--spacing-2xl);
  background-color: var(--color-bg-main);
  color: var(--color-text-primary);
  position: relative;
  overflow: hidden;
  margin-top: -150px;
  /* Negative margin to pull section up into the previous one */
  padding-top: 150px;
  /* Padding to compensate for the content */
  z-index: 1;
  /* Below DatabaseSection content but visible */
}

/* Smooth Transition Divider */
.section-divider-top {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  transform: translateY(-99%);
  /* Move it completely above the section */
  z-index: 2;
}

.wave-svg {
  position: relative;
  display: block;
  width: calc(100% + 1.3px);
  height: 150px;
  /* Tall wave for smooth transition */
}

@media (min-width: 1024px) {
  .wave-svg {
    height: 250px;
    /* Even taller on desktop */
  }
}

.bg-pattern {
  position: absolute;
  inset: 0;
  background-image: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.5;
}

.section-header {
  margin-bottom: var(--spacing-xl);
}

.section-title {
  font-size: var(--text-4xl);
  margin-bottom: var(--spacing-xs);
}

.title-sub {
  font-family: var(--font-serif-en);
  font-size: 1.2rem;
  color: var(--color-text-muted);
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

/* Video Frame */
.video-frame-wrapper {
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto var(--spacing-2xl);
  aspect-ratio: 16/9;
}

.video-frame-border {
  position: absolute;
  inset: -10px;
  border: 1px solid var(--color-gold);
  opacity: 0.3;
  z-index: 0;
  transition: all var(--transition-slow);
}

.video-frame-wrapper:hover .video-frame-border {
  inset: -20px;
  opacity: 0.6;
}

.video-placeholder {
  position: relative;
  width: 100%;
  height: 100%;
  background: #000;
  overflow: hidden;
  box-shadow: var(--shadow-float);
  z-index: 1;
}

.video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background var(--transition-normal);
  cursor: pointer;
}

.video-player {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-frame-wrapper:hover .video-overlay {
  background: rgba(0, 0, 0, 0.2);
}

.scanlines {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1));
  background-size: 100% 4px;
  pointer-events: none;
}

/* Play Button */
.play-btn {
  width: 100px; /* Increased size for pattern visibility */
  height: 100px;
  border-radius: 50%;
  background: url('/images/旗袍工艺部分上的圆圈上面的纹样.jpg') no-repeat center center;
  background-size: cover;
  border: 2px solid rgba(255,255,255,0.5);
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: var(--spacing-md);
  box-shadow: 0 10px 30px rgba(0,0,0,0.3);
  transition: transform var(--transition-normal);
}

.play-btn:hover {
  transform: scale(1.1);
  border-color: var(--color-gold);
}

/* Hide original simple styles */
.btn-ring { display: none; }
.btn-fill { display: none; }

.play-icon {
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 2;
  margin-left: 4px;
}

.play-btn:hover .btn-fill {
  transform: scale(1.1);
  background: var(--color-primary-red);
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.9);
    opacity: 1;
  }

  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.video-meta {
  text-align: center;
  transform: translateY(20px);
  opacity: 0;
  transition: all var(--transition-normal);
}

.video-frame-wrapper:hover .video-meta {
  transform: translateY(0);
  opacity: 1;
}

.meta-tag {
  background: var(--color-primary-red);
  color: white;
  padding: 2px 8px;
  font-size: 0.75rem;
  border-radius: 2px;
  margin-bottom: 8px;
  display: inline-block;
}

.video-title {
  font-family: var(--font-serif-cn);
  font-size: 1.5rem;
  color: white;
  margin-bottom: 4px;
}

.meta-duration {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

/* Film Strip */
.film-strip-container {
  background: rgba(255, 255, 255, 0.03);
  padding: 20px 0;
  position: relative;
  overflow-x: auto;
  border-top: 2px dashed rgba(255, 255, 255, 0.1);
  border-bottom: 2px dashed rgba(255, 255, 255, 0.1);
}

.film-holes {
  position: absolute;
  left: 0;
  right: 0;
  height: 12px;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.08) 50%, transparent 50%);
  background-size: 20px 100%;
}

.film-holes.top {
  top: 4px;
}

.film-holes.bottom {
  bottom: 4px;
}

.film-content {
  display: flex;
  gap: 2px;
  padding: 0 20px;
}

.film-frame {
  flex: 0 0 250px;
  background: var(--color-bg-main);
  padding: var(--spacing-md);
  border-left: 1px solid rgba(255, 255, 255, 0.06);
  border-right: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;
  transition: background var(--transition-normal);
}

.film-frame:hover {
  background: rgba(255, 255, 255, 0.06);
}

.frame-icon {
  font-size: 2rem;
  margin-bottom: var(--spacing-sm);
}

.frame-title {
  color: var(--color-gold);
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.frame-desc {
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.5;
}

.frame-number {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-family: var(--font-serif-en);
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.04);
  line-height: 1;
}

/* Footer */
.section-footer {
  text-align: center;
  margin-top: var(--spacing-lg);
}

.text-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--color-gold);
  text-decoration: none;
  font-family: var(--font-serif-cn);
  font-size: 1.1rem;
}

.link-arrow {
  width: 18px;
  height: 18px;
  transition: transform var(--transition-normal);
}

.text-link:hover .link-arrow {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 768px) {
  .section-title {
    font-size: 2.5rem;
  }

  .film-frame {
    flex: 0 0 200px;
  }
}
</style>
