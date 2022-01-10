<template>
  <div v-if="$store.state.appMode === 'encrypt'" class="d-flex flex-column">
    <h5 class="align-self-start">Enter Text</h5>
    <b-form-textarea
      id="plainText"
      v-model="plainText"
      rows="15"
      :maxlength="limit"
      :placeholder="placeholder"
      @keyup="updateStore()"
      :disabled="$store.state.appMode === 'decrypt'"
    />
    <div class="align-self-end">{{ charLimit }}</div>
  </div>
</template>

<script lang="ts">
import { Watch, Component, Vue } from "vue-property-decorator";

@Component
export default class EncryptBox extends Vue {
  public limit = 700;
  public plainText = "";

  public updateStore() {
    this.$store.commit("SET_INPUT", this.plainText);
  }

  public get placeholder() {
    return `${this.limit} character limit`;
  }

  public get charLimit() {
    return `${this.plainText.length} / ${this.limit}`;
  }

  public get storeInputValue() {
    return this.$store.state.input;
  }

  @Watch("storeInputValue")
  onInputReset(value: string) {
    if (value.length === 0) {
      this.plainText = "";
    }
  }
}
</script>
