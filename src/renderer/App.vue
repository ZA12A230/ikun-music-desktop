<template>
  <div id="container" class="view-container">
    <div v-if="dynamicBackground" id="dynamic-bg" :class="$style.dynamicBg" :style="dynamicBgStyle"></div>
    <layout-aside id="left" />
    <div id="right">
      <layout-toolbar id="toolbar" />
      <layout-view id="view" />
      <layout-play-bar id="player" />
    </div>
    <layout-icons />
    <layout-change-log-modal />
    <layout-update-modal />
    <layout-pact-modal />
    <layout-sync-mode-modal />
    <layout-sync-auth-code-modal />
    <layout-play-detail />
    <AIAssistant :visible="showAIAssistant" @close="closeAIAssistant" />
    <button v-if="aiAssistantEnabled" class="ai-float-btn" @click="toggleAIAssistant">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2"></path>
        <circle cx="12" cy="14" r="4"></circle>
        <path d="M20 14v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4"></path>
      </svg>
    </button>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from '@common/utils/vue-tools'
// import BubbleCursor from '@common/utils/effects/cursor-effects/bubbleCursor'
// import '@common/utils/effects/snow.min'
import useApp from '@renderer/core/useApp'
import { musicInfo } from '@renderer/store/player/state'
import { appSetting } from '@renderer/store/setting'
import AIAssistant from '@/components/common/AIAssistant.vue'

useApp()

const dynamicBackground = computed(() => appSetting['theme.dynamicBackground'])

const showAIAssistant = ref(false)
const aiAssistantEnabled = computed(() => appSetting['app.aiAssistantEnabled'] ?? false)

const toggleAIAssistant = () => {
  showAIAssistant.value = !showAIAssistant.value
}

const closeAIAssistant = () => {
  showAIAssistant.value = false
}

const dynamicBgStyle = computed(() => {
  if (musicInfo.pic && appSetting['theme.dynamicBackground']) {
    return {
      backgroundImage: `url(${musicInfo.pic})`,
    }
  }
  return {}
})

onMounted(() => {
  document.getElementById('root').style.display = 'block'

  // const styles = getComputedStyle(document.documentElement)
  // window.lxData.bubbleCursor = new BubbleCursor({
  //   fillStyle: styles.getPropertyValue('--color-primary-alpha-900'),
  //   strokeStyle: styles.getPropertyValue('--color-primary-alpha-700'),
  // })
})

// onBeforeUnmount(() => {
//   window.lxData.bubbleCursor?.destroy()
// })
</script>

<style lang="less" module>
.dynamicBg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  filter: blur(50px) saturate(1.5);
  transform: scale(1.2);
  z-index: -2;
  transition: background-image 0.5s ease;
}
</style>

<style lang="less">
@import './assets/styles/index.less';
@import './assets/styles/layout.less';

html {
  height: 100vh;
}
html,
body {
  // overflow: hidden;
  box-sizing: border-box;
}

body {
  user-select: none;
  height: 100%;
}
#root {
  height: 100%;
  position: relative;
  overflow: hidden;
  color: var(--color-font);
  background: var(--background-image) var(--background-image-position) no-repeat;
  background-size: var(--background-image-size);
  transition: background-color @transition-normal;
  background-color: var(--color-content-background);
  box-sizing: border-box;
}

.disableAnimation * {
  transition: none !important;
  animation: none !important;
}

.transparent {
  background: transparent;
  padding: @shadow-app;
  // #waiting-mask {
  //   border-radius: @radius-border;
  //   left: @shadow-app;
  //   right: @shadow-app;
  //   top: @shadow-app;
  //   bottom: @shadow-app;
  // }
  #body {
    border-radius: @radius-border;
  }
  #root {
    box-shadow: 0 0 @shadow-app rgba(0, 0, 0, 0.5);
    border-radius: @radius-border;
  }
  // #container {
  // border-radius: @radius-border;
  // background-color: transparent;
  // }
}
.disableTransparent {
  background-color: var(--color-content-background);

  #body {
    border: 1px solid var(--color-primary-light-500);
  }

  #right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  // #view { // 偏移5px距离解决非透明模式下右侧滚动条无法拖动的问题
  //   margin-right: 5Px;
  // }
}
.fullscreen {
  background-color: var(--color-content-background);

  #right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
}

#container {
  position: relative;
  display: flex;
  height: 100%;
  background-color: transparent;
}

#left {
  flex: none;
  width: @width-app-left;
  backdrop-filter: blur(20px) saturate(1.2);
  background-color: rgba(255, 255, 255, 0.2);
}
#right {
  flex: auto;
  display: flex;
  flex-flow: column nowrap;
  transition: background-color @transition-normal;
  backdrop-filter: blur(20px) saturate(1.2);
  background-color: rgba(255, 255, 255, 0.15);

  border-top-left-radius: @radius-border;
  border-bottom-left-radius: @radius-border;
  overflow: hidden;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
}
#toolbar,
#player {
  flex: none;
}
#view {
  position: relative;
  flex: auto;
  // display: flex;
  min-height: 0;
}

.view-container {
  transition: opacity @transition-normal;
}
#root.show-modal > .view-container {
  opacity: 0.9;
}
#view.show-modal > .view-container {
  opacity: 0.2;
}
.ai-float-btn {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  z-index: 999;
}
.ai-float-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 30px rgba(102, 126, 234, 0.6);
}
.ai-float-btn svg {
  width: 24px;
  height: 24px;
}
</style>
