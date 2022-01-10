<template>
  <div class="d-flex flex-column decrypt-box">
    <h5 class="align-self-start">Output</h5>
    <b-form-textarea
      class="border border-success"
      v-model="response"
      placeholder="Encrypted data will display here"
      rows="7"
      disabled
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class DecryptBox extends Vue {
  public data!: any;

  public get response() {
    if (this.$store.state.response) {
      return this.$store.state.response;
    }
    return "";
  }
}
</script>
