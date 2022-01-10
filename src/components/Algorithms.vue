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
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Algorithms extends Vue {
  public activeButton = -1;

  public setAlgorithm(algorithm: string, index: number) {
    this.activeButton = index;
    this.$store.dispatch("setAlgorithm", algorithm);
  }

  public get cipher() {
    let cipher = "";
    if (this.$store.state.cipher) {
      cipher = this.$store.state.cipher;
    }
    return cipher;
  }

  public get modes() {
    let modes = [];
    if (this.$store.state.list) {
      modes = this.$store.state.list;
    }
    return modes;
  }
}
</script>
