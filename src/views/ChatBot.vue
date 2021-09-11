<template>
  <div class="chatbot-feature">
    <chat-area />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ChatArea from '@/components/ChatArea.vue';

@Component({
  components: {
    ChatArea,
  },
})
export default class ChatBot extends Vue {}
</script>
