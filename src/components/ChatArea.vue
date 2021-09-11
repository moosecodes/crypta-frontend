<template>
  <div class="chat-area">
    <h1>ChatArea</h1>
    <textarea
      v-model="message"
      name="message"
      id="main-message"
      cols="70"
      rows="2"
    ></textarea>
    <textarea
      v-model="reply"
      name="reply"
      id="chat-reply"
      cols="70"
      rows="2"
    />
    <button @click="sendMessage">SEND</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class ChatArea extends Vue {
  @Prop() private msg!: string;
  private message = '';
  private reply = '';

  protected sendMessage(): Promise<void> {
    console.log(this.message);
    let response = axios
      .post('http://localhost/api/chatbot', {
        message: 'Fred',
      })
      .then((response) => {
        this.reply = response.data;
      })
      .catch(function (error: string) {
        console.log(error);
      });
    return response;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
