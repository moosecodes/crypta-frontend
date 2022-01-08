<template>
  <div class="d-flex flex-column mb-3 encrypt-box">
    <h5 class="align-self-start">Input</h5>
    <b-form-textarea
      id="plainText"
      v-model="plainText"
      placeholder="Enter text to encrypt here"
      rows="4"
      maxlength="700"
      @keyup="updateStore()"
    />
    <div class="align-self-end">{{ plainText.length }} / 700</div>
  </div>
</template>

<script lang="ts">
import { Prop, Component, Vue } from 'vue-property-decorator';

@Component
export default class EncryptBox extends Vue {
  @Prop({ type: String, default: '' }) inputString!: string;
  @Prop({ type: Boolean }) encryptMode!: boolean;
  public plainText = this.inputString;

  public updateStore() {
    this.$store.commit('SET_INPUT', this.plainText);
    console.log(this.$store.state.input);
  }
}
</script>

<style scoped lang="scss"></style>
