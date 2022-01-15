<template>
  <div v-if="cipher" class="px-4">
    <h5>Algorithm</h5>
    <div class="d-flex flex-wrap justify-content-start">
      <div v-for="(mode, index) in modes" :key="index">
        <b-button
          v-if="mode.method[0].includes(cipher)"
          class="m-1"
          :class="{
            'requires-passphrase': !mode.passphrase,
          }"
          :variant="variant(activeButton, index, mode, cipher)"
          :disabled="disabled(mode, cipher)"
          @click="setAlgorithm(mode, index)"
        >
          <b>{{ mode.method[0].toUpperCase() }}</b>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Watch, Component, Vue } from 'vue-property-decorator';

@Component
export default class Algorithms extends Vue {
  public activeButton = -1;

  public setAlgorithm(algorithm: string, index: number): void {
    this.activeButton = index;
    this.$store.dispatch('setAlgorithm', algorithm);
  }

  public variant(
    activeButton: number,
    index: number,
    mode: string,
    cipher: string
  ): string {
    let variant = 'warning';
    if (this.disabled(mode, cipher)) {
      return '';
    } else if (activeButton === index) {
      return variant;
    }
    return 'outline-secondary';
  }

  public disabled(mode: string, cipher: string): boolean {
    return !mode.method[0].split('-')[0].includes(cipher);
  }

  public get cipher(): string {
    return this.$store.state.cipher;
  }

  public get modes(): string[] {
    return this.$store.state.list;
  }

  public get storeAlgorithmValue(): string {
    return this.$store.state.algorithm;
  }

  @Watch('storeAlgorithmValue')
  onAlgorithmReset(value: string): void {
    if (value.length === 0) {
      this.activeButton = -1;
    }
  }
}
</script>

<style lang="scss" scoped>
.requires-passphrase {
  border: 1px solid red;
}
</style>
