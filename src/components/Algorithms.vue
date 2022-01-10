<template>
  <div v-if="cipher">
    <h5>Select Algorithm</h5>
    <div class="card">
      <div class="d-flex flex-wrap card-body">
        <div v-for="(mode, index) in modes" :key="index">
          <b-button
            v-if="mode.includes(cipher)"
            class="m-1"
            :variant="activeButton === index ? 'success' : 'outline-secondary'"
            @click="setAlgorithm(mode, index)"
          >
            <b>{{ mode }}</b>
          </b-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Watch, Component, Vue } from "vue-property-decorator";

@Component
export default class Algorithms extends Vue {
  public activeButton = -1;

  public setAlgorithm(algorithm: string, index: number) {
    this.activeButton = index;
    this.$store.dispatch("setAlgorithm", algorithm);
  }

  public get cipher() {
    return this.$store.state.cipher;
  }

  public get modes() {
    return this.$store.state.list;
  }

  public get storeAlgorithmValue() {
    return this.$store.state.algorithm;
  }

  @Watch("storeAlgorithmValue")
  onAlgorithmReset(value: string) {
    if (value.length === 0) {
      this.activeButton = -1;
    }
  }
}
</script>
