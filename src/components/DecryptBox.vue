<template>
  <div v-if="$store.state.appMode === 'decrypt'" class="d-flex flex-column">
    <h5 class="align-self-start">Output</h5>
    <b-form-textarea
      class="border"
      v-model="response"
      placeholder="Encrypted data will display here"
      rows="10"
      disabled
    />
    <div class="align-self-end">{{ response.length }} characters</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class DecryptBox extends Vue {
  public data!: any; // TODO: fix type

  public get response(): string {
    if (this.$store.state.response) {
      return this.$store.state.response;
    }
    return '';
  }
}
</script>
