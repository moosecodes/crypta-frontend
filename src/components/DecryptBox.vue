<template>
  <div class="d-flex flex-column decrypt-box">
    <h5 class="align-self-start">Output</h5>
    <b-form-textarea
      id="encryptedData"
      class="mb-3 border border-success"
      v-model="encryptedData"
      placeholder="Encrypted data will display here"
      rows="15"
      disabled
    />
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class DecryptBox extends Vue {
  @Prop({ type: String }) encryptedData!: string;
}
</script>

<style scoped lang="scss"></style>
