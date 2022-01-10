<template>
  <div class="d-flex flex-column encrypt-box">
    <h5 class="align-self-start">Input</h5>
    <b-form-textarea
      id="plainText"
      v-model="plainText"
      rows="12"
      :maxlength="limit"
      :placeholder="placeholder"
      @keyup="updateStore()"
    />
    <div class="align-self-end">{{ plainText.length }} / {{ limit }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class EncryptBox extends Vue {
  public limit = 700;
  public plainText = "";

  public updateStore() {
    this.$store.commit("SET_INPUT", this.plainText);
  }

  public get placeholder() {
    return `Enter text to encrypt here (${this.limit} character limit)`;
  }
}
</script>
