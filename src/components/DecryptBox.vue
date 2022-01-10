<template>
  <div v-if="$store.state.appMode === 'decrypt'" class="d-flex flex-column">
    <h5 class="align-self-start">Output</h5>
    <b-form-textarea
      class="border border-success"
      v-model="response"
      placeholder="Encrypted data will display here"
      rows="15"
      :disabled="$store.state.appMode === 'encrypt'"
    />
    <div class="align-self-end">{{ response.length }} characters</div>
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
