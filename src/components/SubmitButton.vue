<template>
  <b-button
    squared
    size="lg"
    class="d-flex justify-content-end"
    :variant="disabled ? 'outline-secondary' : 'success'"
    :disabled="disabled"
    @click="submit()"
  >
    <b>ENCRYPT</b>
  </b-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class SubmitButton extends Vue {
  public plainText = '';
  public cipherText = '';
  public encryptedData = '';

  public submit(): void {
    if (this.$store.state.appMode === 'encrypt') {
      if (this.$store.state.cipher && this.input) {
        this.encryptString();
      }
    }
    // else {
    //   if (this.$store.state.output) {
    //     this.decryptString();
    //   }
    // }
  }

  public get disabled(): boolean {
    return this.$store.state.appMode === 'encrypt'
      ? !this.$store.state.input || !this.$store.state.algorithm
      : !!this.$store.state.output;
  }

  public get cipher(): string {
    if (this.$store.state.input) {
      this.cipherText = this.$store.state.input;
    }
    return this.cipherText;
  }

  private get input(): string {
    if (this.$store.state.input) {
      this.plainText = this.$store.state.input;
    }
    return this.plainText;
  }

  private encryptString(): void {
    this.$store.dispatch('sendInput');
  }

  // private decryptString(): void {
  //   this.$store.dispatch("decryptInput");
  // }
}
</script>
