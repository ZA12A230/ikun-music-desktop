<template>
  <div class="setting-ai-assistant">
    <div class="section-title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2"></path>
        <circle cx="12" cy="14" r="4"></circle>
        <path d="M20 14v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4"></path>
      </svg>
      <span>AI 智能助手</span>
    </div>

    <div class="setting-item">
      <div class="setting-label">
        <span>启用 AI 助手</span>
        <span class="setting-desc">开启后可以使用 AI 智能助手功能</span>
      </div>
      <div class="setting-control">
        <button
          class="toggle"
          :class="{ active: settings.aiAssistantEnabled }"
          @click="toggleAIEnabled"
        >
          <span class="toggle-thumb"></span>
        </button>
      </div>
    </div>

    <div class="setting-item">
      <div class="setting-label">
        <span>默认模型</span>
        <span class="setting-desc">选择默认使用的 AI 模型</span>
      </div>
      <div class="setting-control">
        <select
          v-model="settings.aiModel"
          class="select-input"
          @change="saveSettings"
        >
          <option value="gpt-4">GPT-4</option>
          <option value="gpt-3.5">GPT-3.5</option>
          <option value="claude">Claude</option>
          <option value="gemini">Gemini</option>
        </select>
      </div>
    </div>

    <div class="setting-item">
      <div class="setting-label">
        <span>API 密钥</span>
        <span class="setting-desc">输入您的 AI 服务 API 密钥</span>
      </div>
      <div class="setting-control">
        <input
          v-model="settings.aiApiKey"
          type="password"
          class="text-input"
          placeholder="请输入 API 密钥"
          @change="saveSettings"
        />
      </div>
    </div>

    <div class="setting-item">
      <div class="setting-label">
        <span>自动回复延迟</span>
        <span class="setting-desc">AI 回复前的延迟时间（毫秒）</span>
      </div>
      <div class="setting-control">
        <input
          v-model.number="settings.aiResponseDelay"
          type="range"
          class="range-input"
          min="0"
          max="3000"
          step="100"
          @change="saveSettings"
        />
        <span class="range-value">{{ settings.aiResponseDelay }}ms</span>
      </div>
    </div>

    <div class="setting-item">
      <div class="setting-label">
        <span>启动时自动打开</span>
        <span class="setting-desc">启动应用时自动打开 AI 助手</span>
      </div>
      <div class="setting-control">
        <button
          class="toggle"
          :class="{ active: settings.aiAutoOpen }"
          @click="toggleAutoOpen"
        >
          <span class="toggle-thumb"></span>
        </button>
      </div>
    </div>

    <div class="ai-features">
      <div class="section-subtitle">AI 助手功能</div>
      <div class="feature-list">
        <div class="feature-item">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div class="feature-content">
            <div class="feature-title">智能对话</div>
            <div class="feature-desc">与 AI 助手进行自然语言对话</div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M9 19v-6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path>
              <path d="M19 19v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></path>
              <path d="M9 9h6"></path>
              <path d="M9 13h6"></path>
            </svg>
          </div>
          <div class="feature-content">
            <div class="feature-title">音乐推荐</div>
            <div class="feature-desc">基于您的喜好推荐音乐</div>
          </div>
        </div>
        <div class="feature-item">
          <div class="feature-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
          </div>
          <div class="feature-content">
            <div class="feature-title">问题解答</div>
            <div class="feature-desc">解答您关于音乐的任何问题</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { appSettingStore } from '@/store/appSetting'

interface AISettings {
  aiAssistantEnabled: boolean
  aiModel: string
  aiApiKey: string
  aiResponseDelay: number
  aiAutoOpen: boolean
}

const settings = reactive<AISettings>({
  aiAssistantEnabled: appSettingStore.data.aiAssistant?.enabled ?? false,
  aiModel: appSettingStore.data.aiAssistant?.model ?? 'gpt-3.5',
  aiApiKey: appSettingStore.data.aiAssistant?.apiKey ?? '',
  aiResponseDelay: appSettingStore.data.aiAssistant?.responseDelay ?? 1000,
  aiAutoOpen: appSettingStore.data.aiAssistant?.autoOpen ?? false
})

const toggleAIEnabled = () => {
  settings.aiAssistantEnabled = !settings.aiAssistantEnabled
  saveSettings()
}

const toggleAutoOpen = () => {
  settings.aiAutoOpen = !settings.aiAutoOpen
  saveSettings()
}

const saveSettings = () => {
  appSettingStore.set('aiAssistant', {
    enabled: settings.aiAssistantEnabled,
    model: settings.aiModel,
    apiKey: settings.aiApiKey,
    responseDelay: settings.aiResponseDelay,
    autoOpen: settings.aiAutoOpen
  })
}
</script>

<style scoped>
.setting-ai-assistant {
  padding: 20px;
}

.section-title {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--border-color);
}

.section-title svg {
  width: 22px;
  height: 22px;
  color: #667eea;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid var(--border-color);
}

.setting-label {
  flex: 1;
}

.setting-label > span:first-child {
  display: block;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.setting-desc {
  font-size: 13px;
  color: var(--text-secondary);
}

.setting-control {
  display: flex;
  align-items: center;
  gap: 12px;
}

.toggle {
  width: 48px;
  height: 26px;
  border-radius: 13px;
  background: var(--bg-secondary);
  border: none;
  cursor: pointer;
  position: relative;
  transition: background 0.3s;
}

.toggle.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.toggle-thumb {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  transition: transform 0.3s;
}

.toggle.active .toggle-thumb {
  transform: translateX(22px);
}

.text-input {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 14px;
  outline: none;
  min-width: 200px;
  transition: border-color 0.2s;
}

.text-input:focus {
  border-color: #667eea;
}

.text-input::placeholder {
  color: var(--text-secondary);
}

.select-input {
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 14px;
  outline: none;
  min-width: 150px;
  cursor: pointer;
  transition: border-color 0.2s;
}

.select-input:focus {
  border-color: #667eea;
}

.range-input {
  width: 150px;
  height: 6px;
  accent-color: #667eea;
  cursor: pointer;
}

.range-value {
  font-size: 14px;
  color: var(--text-secondary);
  min-width: 60px;
}

.ai-features {
  margin-top: 24px;
}

.section-subtitle {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.feature-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.feature-item {
  display: flex;
  gap: 12px;
  padding: 16px;
  background: var(--bg-secondary);
  border-radius: 12px;
  transition: transform 0.2s;
}

.feature-item:hover {
  transform: translateY(-2px);
}

.feature-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.feature-icon svg {
  width: 20px;
  height: 20px;
}

.feature-content {
  flex: 1;
}

.feature-title {
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.feature-desc {
  font-size: 13px;
  color: var(--text-secondary);
}
</style>