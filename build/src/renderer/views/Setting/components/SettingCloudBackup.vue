<template lang="pug">
dt#cloud-backup 网盘备份与恢复
dd
  h3#cloud-backup-config 网盘配置
  div
    .p.gap-top
      base-checkbox(id="cloud-backup-enable" :model-value="appSetting['cloudBackup.enable']" label="启用网盘备份" @update:model-value="updateSetting({'cloudBackup.enable': $event})")
    .p.gap-top(v-if="appSetting['cloudBackup.enable']")
      base-selection.gap-left(:list="providerList" :model-value="appSetting['cloudBackup.provider']" item-key="id" item-name="name" placeholder="选择网盘" @update:model-value="updateSetting({'cloudBackup.provider': $event})")
    .p.gap-top(v-if="appSetting['cloudBackup.enable'] && appSetting['cloudBackup.provider']")
      base-btn.btn(min @click="handleLogin") 登录
      base-btn.btn.gap-left(min @click="handleLogout" :disabled="!isLoggedIn") 退出登录
    .p.gap-top(v-if="appSetting['cloudBackup.enable'] && isLoggedIn")
      label 备份路径:
      base-input(v-model="appSetting['cloudBackup.backupPath']" placeholder="/lx_music_backup" @change="updateSetting({'cloudBackup.backupPath': $event.target.value})")
    .p.gap-top(v-if="appSetting['cloudBackup.enable'] && isLoggedIn")
      base-checkbox(id="cloud-backup-auto" :model-value="appSetting['cloudBackup.autoBackup']" label="自动备份" @update:model-value="updateSetting({'cloudBackup.autoBackup': $event})")
      template(v-if="appSetting['cloudBackup.autoBackup']")
        span.gap-left 间隔时间(小时):
        base-input(type="number" :model-value="appSetting['cloudBackup.autoBackupInterval']" style="width: 80px; display: inline-block" @change="updateSetting({'cloudBackup.autoBackupInterval': parseInt($event.target.value)})")
    .p.gap-top(v-if="appSetting['cloudBackup.enable'] && isLoggedIn")
      base-checkbox(id="cloud-backup-sync-setting" :model-value="appSetting['cloudBackup.syncSetting']" label="同步设置" @update:model-value="updateSetting({'cloudBackup.syncSetting': $event})")
    .p.gap-top(v-if="appSetting['cloudBackup.enable'] && isLoggedIn")
      base-checkbox(id="cloud-backup-sync-list" :model-value="appSetting['cloudBackup.syncList']" label="同步收藏夹/歌单" @update:model-value="updateSetting({'cloudBackup.syncList': $event})")

  h3#cloud-backup-operation 备份与恢复操作
  div
    .p.gap-top
      base-btn.btn(min @click="handleBackup" :disabled="!isLoggedIn || isLoading") {{ isLoading ? '备份中...' : '立即备份' }}
      base-btn.btn.gap-left(min @click="handleRestore" :disabled="!isLoggedIn || isLoading") {{ isLoading ? '恢复中...' : '从网盘恢复' }}
    .p.gap-top
      base-btn.btn(min @click="handleCheckBackup" :disabled="!isLoggedIn") 检查备份
    .p.gap-top(v-if="backupInfo")
      div 最后备份时间: {{ backupInfo.lastBackupTime || '无' }}
      div 备份文件大小: {{ backupInfo.fileSize || '未知' }}
</template>

<script>
import { ref, computed } from '@common/utils/vueTools'
import { appSetting, updateSetting } from '@renderer/store/setting'
import { dialog } from '@renderer/plugins/Dialog'

const providerList = [
  { id: '123pan', name: '123云盘' },
  { id: 'xunlei', name: '迅雷网盘' },
  { id: 'baidu', name: '百度网盘' },
  { id: 'quark', name: '夸克网盘' },
  { id: 'xiaomi', name: '小米云盘' },
  { id: '115', name: '115网盘' },
  { id: 'feiniu', name: '飞牛NAS' },
  { id: 'aliyun', name: '阿里云盘' },
  { id: 'weiyun', name: '腾讯微云' },
  { id: 'mobile', name: '中国移动云盘' },
  { id: 'tianyi', name: '天翼云盘' },
  { id: 'icloud', name: 'iCloud' },
  { id: 'onedrive', name: 'OneDrive' },
  { id: 'nutstore', name: '坚果云' },
]

export default {
  name: 'SettingCloudBackup',
  setup() {
    const isLoggedIn = ref(false)
    const isLoading = ref(false)
    const backupInfo = ref(null)

    const handleLogin = async () => {
      try {
        isLoading.value = true
        await dialog.alert({
          message: '网盘登录功能需要根据具体网盘API实现开发，当前为演示版本。\n请联系开发者接入相应网盘的OAuth认证。',
          confirmButtonText: '确定',
        })
        isLoggedIn.value = true
      } finally {
        isLoading.value = false
      }
    }

    const handleLogout = () => {
      isLoggedIn.value = false
      backupInfo.value = null
    }

    const handleBackup = async () => {
      try {
        isLoading.value = true
        await dialog.alert({
          message: '网盘备份功能正在开发中，当前为演示版本。\n备份功能需要与各网盘API对接后才能使用。',
          confirmButtonText: '确定',
        })
        backupInfo.value = {
          lastBackupTime: new Date().toLocaleString(),
          fileSize: '约 1.2 MB',
        }
      } finally {
        isLoading.value = false
      }
    }

    const handleRestore = async () => {
      try {
        isLoading.value = true
        const confirm = await dialog.confirm({
          message: '确定要从网盘恢复数据吗？\n这将覆盖当前的设置和歌单。',
          cancelButtonText: '取消',
          confirmButtonText: '确定',
        })
        if (!confirm) return

        await dialog.alert({
          message: '网盘恢复功能正在开发中，当前为演示版本。\n恢复功能需要与各网盘API对接后才能使用。',
          confirmButtonText: '确定',
        })
      } finally {
        isLoading.value = false
      }
    }

    const handleCheckBackup = async () => {
      await dialog.alert({
        message: '检查备份功能正在开发中，当前为演示版本。',
        confirmButtonText: '确定',
      })
    }

    return {
      appSetting,
      updateSetting,
      providerList,
      isLoggedIn,
      isLoading,
      backupInfo,
      handleLogin,
      handleLogout,
      handleBackup,
      handleRestore,
      handleCheckBackup,
    }
  },
}
</script>
