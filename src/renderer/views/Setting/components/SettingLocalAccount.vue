<template>
  <div class="setting-local-account">
    <div class="section-title">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
        <circle cx="12" cy="7" r="4"></circle>
      </svg>
      <span>本地账号</span>
    </div>

    <div class="account-card">
      <div class="avatar-section">
        <div class="avatar-wrapper">
          <div class="avatar" :style="{ background: avatarGradient }">
            <span>{{ userName.charAt(0) }}</span>
          </div>
          <input
            type="file"
            class="avatar-upload"
            accept="image/*"
            @change="uploadAvatar"
          />
          <label class="upload-btn" for="avatar-upload">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
          </label>
        </div>
        <input
          v-model="userName"
          type="text"
          class="username-input"
          placeholder="输入用户名"
          @change="saveAccount"
        />
      </div>

      <div class="account-info">
        <div class="info-item">
          <span class="info-label">账号 ID</span>
          <span class="info-value">{{ accountId }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">创建时间</span>
          <span class="info-value">{{ createTime }}</span>
        </div>
        <div class="info-item">
          <span class="info-label">最后登录</span>
          <span class="info-value">{{ lastLoginTime }}</span>
        </div>
      </div>

      <div class="account-actions">
        <button class="action-btn primary" @click="saveAccount">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2z"></path>
          </svg>
          保存设置
        </button>
        <button class="action-btn secondary" @click="resetAccount">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 0 0 1 1h3m10-11l2 2m-2-2v10a1 1 0 0 1-1 1h-3m-6 0a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1m-6 0h6"></path>
          </svg>
          重置账号
        </button>
      </div>
    </div>

    <div class="account-features">
      <div class="section-subtitle">账号功能</div>
      <div class="feature-grid">
        <div class="feature-card">
          <div class="feature-icon user-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="feature-title">个人资料</div>
          <div class="feature-desc">自定义头像和用户名</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon lock-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
          </div>
          <div class="feature-title">隐私保护</div>
          <div class="feature-desc">本地数据安全存储</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon sync-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="23 4 23 10 17 16"></polyline>
              <polyline points="1 20 1 14 7 8"></polyline>
              <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
            </svg>
          </div>
          <div class="feature-title">数据同步</div>
          <div class="feature-desc">本地数据备份与恢复</div>
        </div>
        <div class="feature-card">
          <div class="feature-icon settings-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 20V10"></path>
              <path d="M18 20V4"></path>
              <path d="M6 20v-6"></path>
            </svg>
          </div>
          <div class="feature-title">个性化设置</div>
          <div class="feature-desc">保存您的偏好设置</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { appSettingStore } from '@/store/appSetting'

interface LocalAccount {
  id: string
  name: string
  avatar: string
  createTime: string
  lastLoginTime: string
}

const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
]

const userName = ref('用户')
const accountId = ref('')
const createTime = ref('')
const lastLoginTime = ref('')

const avatarGradient = computed(() => {
  const index = userName.value.charCodeAt(0) % gradients.length
  return gradients[index]
})

const loadAccount = () => {
  const account = appSettingStore.data.localAccount
  if (account) {
    userName.value = account.name || '用户'
    accountId.value = account.id || generateId()
    createTime.value = account.createTime || formatDate(new Date())
    lastLoginTime.value = account.lastLoginTime || formatDate(new Date())
  } else {
    initAccount()
  }
}

const initAccount = () => {
  accountId.value = generateId()
  createTime.value = formatDate(new Date())
  lastLoginTime.value = createTime.value
  saveAccount()
}

const generateId = () => {
  return 'USER_' + Date.now().toString(36).toUpperCase() + Math.random().toString(36).substr(2, 5).toUpperCase()
}

const formatDate = (date: Date) => {
  return date.toLocaleString('zh-CN', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit'
  })
}

const saveAccount = () => {
  lastLoginTime.value = formatDate(new Date())
  appSettingStore.set('localAccount', {
    id: accountId.value,
    name: userName.value,
    avatar: '',
    createTime: createTime.value,
    lastLoginTime: lastLoginTime.value
  })
}

const resetAccount = () => {
  userName.value = '用户'
  accountId.value = generateId()
  createTime.value = formatDate(new Date())
  lastLoginTime.value = createTime.value
  saveAccount()
}

const uploadAvatar = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      appSettingStore.set('localAccount', {
        id: accountId.value,
        name: userName.value,
        avatar: result,
        createTime: createTime.value,
        lastLoginTime: lastLoginTime.value
      })
    }
    reader.readAsDataURL(file)
  }
}

onMounted(() => {
  loadAccount()
})
</script>

<style scoped>
.setting-local-account {
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

.account-card {
  background: var(--bg-secondary);
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
}

.avatar-section {
  text-align: center;
  margin-bottom: 24px;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 16px;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.avatar-upload {
  display: none;
}

.upload-btn {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
  transition: transform 0.2s;
}

.upload-btn:hover {
  transform: scale(1.1);
}

.upload-btn svg {
  width: 16px;
  height: 16px;
}

.username-input {
  width: 200px;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background: var(--bg-elevated);
  color: var(--text-primary);
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  outline: none;
  transition: border-color 0.2s;
}

.username-input:focus {
  border-color: #667eea;
}

.account-info {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 24px;
  padding: 16px;
  background: var(--bg-elevated);
  border-radius: 12px;
}

.info-item {
  text-align: center;
}

.info-label {
  display: block;
  font-size: 12px;
  color: var(--text-secondary);
  margin-bottom: 4px;
}

.info-value {
  font-size: 14px;
  color: var(--text-primary);
  font-weight: 500;
}

.account-actions {
  display: flex;
  justify-content: center;
  gap: 16px;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
}

.action-btn svg {
  width: 16px;
  height: 16px;
}

.action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.action-btn.secondary {
  background: var(--bg-elevated);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.action-btn.secondary:hover {
  background: var(--bg-hover);
}

.account-features {
  margin-top: 8px;
}

.section-subtitle {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

.feature-card {
  padding: 20px;
  background: var(--bg-secondary);
  border-radius: 12px;
  text-align: center;
  transition: transform 0.2s;
}

.feature-card:hover {
  transform: translateY(-4px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  color: white;
}

.feature-icon svg {
  width: 22px;
  height: 22px;
}

.user-icon {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.lock-icon {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.sync-icon {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.settings-icon {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.feature-title {
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.feature-desc {
  font-size: 13px;
  color: var(--text-secondary);
}
</style>