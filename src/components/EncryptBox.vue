<template>
  <div v-if="$store.state.appMode === 'encrypt'" class="d-flex flex-column">
    <h5 class="align-self-start">Enter Text</h5>
    <b-form-textarea
      id="plainText"
      v-model="plainText"
      rows="10"
      no-resize
      :maxlength="limit"
      :placeholder="placeholder"
      @keyup="updateStore()"
    />
    <div class="align-self-end">{{ charLimit }}</div>
    <!-- <b-input-group prepend="Enter Passphrase" class="mt-3">
      <b-form-input :disabled="true"></b-form-input>
    </b-input-group> -->
  </div>
</template>

<script lang="ts">
import { Watch, Component, Vue } from 'vue-property-decorator';

@Component
export default class EncryptBox extends Vue {
  public limit = 700;
  public plainText = '';

  public updateStore(): void {
    this.$store.commit('SET_INPUT', this.plainText);
  }

  public get placeholder(): string {
    return `${this.limit} character limit`;
  }

  public get charLimit(): string {
    return `${this.plainText.length} / ${this.limit}`;
  }

  public get storeInputValue(): void {
    return this.$store.state.input;
  }

  @Watch('storeInputValue')
  onInputReset(value: string): void {
    if (value.length === 0) {
      this.plainText = '';
    }
  }
}
</script>
