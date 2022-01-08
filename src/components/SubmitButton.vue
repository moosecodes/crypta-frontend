<template>
  <div class="submit-button">
    <b-button @click="submit()" variant="success"> Encrypt </b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class SubmitButton extends Vue {
  public plainText = "";
  public encryptedData = "";

  public submit() {
    if (this.$store.state.cipher && this.input) {
      this.encryptString();
    }
  }

  private get input() {
    if (this.$store.state.input) {
      this.plainText = this.$store.state.input;
    }

    return this.plainText;
  }

  private encryptString(): void {
    axios
      .get(
        `http://${process.env.VUE_APP_DOMAIN}/api/encryption/encrypt?text=${this.plainText}&cipher=${this.$store.state.cipher}`
      )
      .then((response) => {
        this.encryptedData = JSON.stringify(response.data, null, 2);
        this.$store.dispatch("setResponse", this.encryptedData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private decryptString(data: string): void {
    axios
      .post(`http://${process.env.VUE_APP_DOMAIN}/api/encryption/decrypt`, {
        data,
      })
      .then((response) => {
        this.plainText = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
</script>

<style scoped lang="scss"></style>
