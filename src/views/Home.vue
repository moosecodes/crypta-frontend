<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <ChatArea msg="ChatArea" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import ChatArea from '@/components/ChatArea.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
    ChatArea,
  },
})
export default class Home extends Vue {}
</script>
