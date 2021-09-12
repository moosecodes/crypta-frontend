<template>
  <div class="chat-area">
    <h1>ChatArea</h1>
    <h5>Press enter to send message</h5>
    <textarea
      v-model="message"
      name="message"
      id="main-message"
      cols="70"
      rows="2"
      @keyup.enter="sendMessage"
    ></textarea>
    <h3>{{ reply }}</h3>
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
    let response = axios
      .post('http://localhost/api/chatbot', {
        message: this.message,
      })
      .then((response) => {
        this.reply = response.data;
      })
      .catch(function (error: string) {
        console.log(error);
      })
      .finally(() => {
        this.message = '';
      });
    return response;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
