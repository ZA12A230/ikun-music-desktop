<template lang="pug">
dt#sync
  | {{ $t('setting__sync') }}
  button(class="help-btn" :aria-label="$t('setting__sync_tip')" @click="openUrl('https://ikunshare.github.io/lx-music-doc/desktop/faq/sync')")
    svg-icon(name="help-circle-outline")
dd
  base-checkbox(id="setting_sync_enable" :model-value="appSetting['sync.enable']" :label="$t('setting__sync_enable')" @update:model-value="updateSetting({ 'sync.enable': $event })")

dd
  h3#sync_mode {{ $t('setting__sync_mode') }}
  div
    base-checkbox.gap-left(id="setting_sync_mode_server" :disabled="sync.enable || appSetting['sync.thirdParty.enable']" :model-value="appSetting['sync.mode']" need value="server" :label="$t('setting__sync_mode_server')" @update:model-value="updateSetting({ 'sync.mode': $event })")
    base-checkbox.gap-left(id="setting_sync_mode_client" :disabled="sync.enable || appSetting['sync.thirdParty.enable']" :model-value="appSetting['sync.mode']" need value="client" :label="$t('setting__sync_mode_client')" @update:model-value="updateSetting({ 'sync.mode': $event })")

dd
  h3 第三方同步服务器
  div
    base-checkbox(id="setting_sync_third_party_enable" :model-value="appSetting['sync.thirdParty.enable']" label="使用第三方同步服务器" @update:model-value="handleThirdPartyEnableChange")
    .p.gap-top(v-if="appSetting['sync.thirdParty.enable']")
      .p.small 同步服务器地址
      div
        base-input.gap-left(:model-value="appSetting['sync.thirdParty.serverUrl']" placeholder="服务器地址" :disabled="sync.enable" @update:model-value="updateSetting({ 'sync.thirdParty.serverUrl': $event })")
        base-btn.btn.gap-left(min @click="copyServerUrl") 复制地址
      .p.gap-top
        .p.small 连接码
        div
          base-input.gap-left(:model-value="appSetting['sync.thirdParty.connectCode']" placeholder="连接码" :disabled="sync.enable" @update:model-value="updateSetting({ 'sync.thirdParty.connectCode': $event })")
          base-btn.btn.gap-left(min @click="copyConnectCode") 复制连接码
          base-btn.btn.gap-left(min @click="openDemoPage") 获取连接码


SyncClient(v-if="sync.mode == 'client' && !appSetting['sync.thirdParty.enable']")
SyncServer(v-else-if="!appSetting['sync.thirdParty.enable']")
dd(v-if="appSetting['sync.thirdParty.enable']")
  h3 连接状态
  div
    .p.small 使用第三方服务器同步时，请确保已填写正确的连接码

</template>

<script>
import { ref } from '@common/utils/vueTools'
import { sync } from '@renderer/store'
import { openUrl } from '@common/utils/electron'
import { appSetting, updateSetting } from '@renderer/store/setting'
import SyncServer from './SyncServer.vue'
import SyncClient from './SyncClient.vue'
import { clipboardWriteText } from '@common/utils/electron'
import { dialog } from '@renderer/plugins/Dialog'

export default {
  name: 'SettingSync',
  components: {
    SyncServer,
    SyncClient,
  },
  setup() {
    const handleThirdPartyEnableChange = (enabled) => {
      if (enabled && sync.enable) {
        void dialog.alert({
          message: '请先关闭同步功能，再启用第三方同步服务器',
          confirmButtonText: '确定',
        })
        return
      }
      updateSetting({ 'sync.thirdParty.enable': enabled })
      if (enabled) {
        updateSetting({ 'sync.client.host': appSetting['sync.thirdParty.serverUrl'] })
      }
    }

    const copyServerUrl = () => {
      clipboardWriteText(appSetting['sync.thirdParty.serverUrl'])
      void dialog.alert({
        message: '服务器地址已复制到剪贴板',
        confirmButtonText: '确定',
      })
    }

    const copyConnectCode = () => {
      clipboardWriteText(appSetting['sync.thirdParty.connectCode'])
      void dialog.alert({
        message: '连接码已复制到剪贴板',
        confirmButtonText: '确定',
      })
    }

    const openDemoPage = () => {
      openUrl('https://lxsync.5had0w.com/demo/')
    }

    return {
      appSetting,
      updateSetting,
      sync,
      openUrl,
      handleThirdPartyEnableChange,
      copyServerUrl,
      copyConnectCode,
      openDemoPage,
    }
  },
}
</script>
