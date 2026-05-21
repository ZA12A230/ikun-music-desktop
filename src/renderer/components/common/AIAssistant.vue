<template>
  <div class="ai-assistant" :class="{ 'show': visible }">
    <div class="ai-header">
      <div class="ai-avatar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2"></path>
          <circle cx="12" cy="14" r="4"></circle>
          <path d="M20 14v4a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-4"></path>
        </svg>
      </div>
      <span class="ai-title">AI 智能助手</span>
      <button class="close-btn" @click="close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
    <div class="ai-messages" ref="messagesContainer">
      <div
        v-for="(msg, index) in messages"
        :key="index"
        class="message"
        :class="{ 'is-ai': msg.isAI }"
      >
        <div class="message-avatar">
          <svg v-if="msg.isAI" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h2"></path>
            <circle cx="12" cy="14" r="4"></circle>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="message-content">
          <p>{{ msg.content }}</p>
          <span class="message-time">{{ msg.time }}</span>
        </div>
      </div>
    </div>
    <div class="ai-input-area">
      <input
        v-model="inputMessage"
        type="text"
        placeholder="输入您的问题..."
        class="ai-input"
        @keyup.enter="sendMessage"
      />
      <button class="send-btn" @click="sendMessage" :disabled="!inputMessage.trim()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue'

interface Message {
  content: string
  isAI: boolean
  time: string
}

const props = defineProps<{
  visible: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const messages = ref<Message[]>([
  {
    content: '你好！我是你的AI助手，请问有什么可以帮助你的？',
    isAI: true,
    time: new Date().toLocaleTimeString()
  }
])

const inputMessage = ref('')
const messagesContainer = ref<HTMLElement | null>(null)

const formatTime = () => {
  return new Date().toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

const sendMessage = () => {
  if (!inputMessage.value.trim()) return

  const userMessage: Message = {
    content: inputMessage.value,
    isAI: false,
    time: formatTime()
  }
  messages.value.push(userMessage)
  inputMessage.value = ''

  scrollToBottom()

  setTimeout(() => {
    const replyMessages = [
      '好的，我明白你的需求了！',
      '这个想法很棒！让我来帮你分析一下。',
      '你说得对，这确实是一个值得思考的问题。',
      '我理解你的想法，让我提供一些建议。',
      '这个功能很有趣，我来帮你实现它！'
    ]
    const randomReply = replyMessages[Math.floor(Math.random() * replyMessages.length)]
    const aiMessage: Message = {
      content: randomReply,
      isAI: true,
      time: formatTime()
    }
    messages.value.push(aiMessage)
    scrollToBottom()
  }, 1000)
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const close = () => {
  emit('close')
}

watch(() => props.visible, (newVal) => {
  if (newVal) {
    scrollToBottom()
  }
})
</script>

<style scoped>
.ai-assistant {
  position: fixed;
  bottom: 100px;
  right: 30px;
  width: 400px;
  max-height: 500px;
  background: var(--bg-elevated);
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
  z-index: 1000;
}

.ai-assistant.show {
  opacity: 1;
  transform: translateY(0);
}

.ai-header {
  display: flex;
  align-items: center;
  padding: 16px;
  border-bottom: 1px solid var(--border-color);
}

.ai-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 12px;
}

.ai-avatar svg {
  width: 18px;
  height: 18px;
}

.ai-title {
  flex: 1;
  font-weight: 600;
  color: var(--text-primary);
}

.close-btn {
  background: transparent;
  border: none;
  color: var(--text-secondary);
  cursor: pointer;
  padding: 4px;
  border-radius: 8px;
  transition: background 0.2s;
}

.close-btn:hover {
  background: var(--bg-hover);
}

.close-btn svg {
  width: 18px;
  height: 18px;
}

.ai-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  max-height: 350px;
}

.message {
  display: flex;
  margin-bottom: 16px;
}

.message.is-ai {
  flex-direction: row;
}

.message:not(.is-ai) {
  flex-direction: row-reverse;
}

.message-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.message.is-ai .message-avatar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin-right: 12px;
}

.message:not(.is-ai) .message-avatar {
  background: var(--bg-secondary);
  color: var(--text-secondary);
  margin-left: 12px;
}

.message-avatar svg {
  width: 16px;
  height: 16px;
}

.message-content {
  max-width: 70%;
}

.message.is-ai .message-content {
  background: var(--bg-secondary);
  border-radius: 0 12px 12px 12px;
}

.message:not(.is-ai) .message-content {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px 0 12px 12px;
}

.message-content p {
  padding: 10px 14px;
  margin: 0;
  font-size: 14px;
  line-height: 1.5;
}

.message.is-ai .message-content p {
  color: var(--text-primary);
}

.message:not(.is-ai) .message-content p {
  color: white;
}

.message-time {
  font-size: 11px;
  opacity: 0.6;
  margin-left: 14px;
}

.message.is-ai .message-time {
  color: var(--text-secondary);
}

.message:not(.is-ai) .message-time {
  color: rgba(255, 255, 255, 0.6);
  margin-left: 0;
  margin-right: 14px;
  float: right;
}

.ai-input-area {
  display: flex;
  padding: 12px;
  border-top: 1px solid var(--border-color);
  gap: 10px;
}

.ai-input {
  flex: 1;
  padding: 10px 14px;
  border: 1px solid var(--border-color);
  border-radius: 20px;
  background: var(--bg-secondary);
  color: var(--text-primary);
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s;
}

.ai-input:focus {
  border-color: #667eea;
}

.ai-input::placeholder {
  color: var(--text-secondary);
}

.send-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, opacity 0.2s;
}

.send-btn:hover:not(:disabled) {
  transform: scale(1.05);
}

.send-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.send-btn svg {
  width: 18px;
  height: 18px;
}
</style>