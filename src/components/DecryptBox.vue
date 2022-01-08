<template>
  <div class="d-flex flex-column decrypt-box">
    <h5 class="align-self-start">Output</h5>
    <b-form-textarea
      id="encryptedData"
      class="mb-3 border border-success"
      v-model="encryptedDataFromServer"
      placeholder="Encrypted data will display here"
      rows="15"
      disabled
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DecryptBox extends Vue {
  public encryptedData!: any;

  public get encryptedDataFromServer() {
    if (this.$store.state.response) {
      this.encryptedData = this.$store.state.response;
    }
    return this.encryptedData;
  }
}
</script>

<style scoped lang="scss"></style>
