<template>
  <div class="submit-button d-flex justify-content-end">
    <b-button
      squared
      size="lg"
      :variant="disabled ? 'outline-secondary' : 'success'"
      :disabled="disabled"
      @click="submit()"
    >
      <b>ENCRYPT</b>
    </b-button>
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

  public get disabled() {
    const disabled = !this.$store.state.input || !this.$store.state.algorithm;
    console.log(disabled);

    return disabled;
  }

  private get input() {
    if (this.$store.state.input) {
      this.plainText = this.$store.state.input;
    }

    return this.plainText;
  }

  private encryptString(): void {
    this.$store.dispatch("sendInput");
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
