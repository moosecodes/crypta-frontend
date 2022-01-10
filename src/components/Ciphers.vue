<template>
  <div>
    <h5>Select Cipher</h5>
    <div class="d-flex flex-wrap card">
      <div class="card-body">
        <b-button
          v-for="(type, index) in ciphers"
          class="m-1"
          :key="index"
          :variant="cipher == type ? 'success' : 'outline-secondary'"
          @click="setCipher(type)"
        >
          <b>{{ type.toUpperCase() }}</b>
        </b-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Ciphers extends Vue {
  public get ciphers() {
    let ciphers: string[] = [];

    if (this.$store.state.list) {
      let algos: string[] = [];
      algos = this.$store.state.list;
      algos.forEach((algo) => {
        const prefix = algo.split("-")[0];
        if (!ciphers.includes(prefix)) {
          ciphers.push(prefix);
        }
      });
    }

    return ciphers;
  }

  public get cipher() {
    return this.$store.state.cipher;
  }

  public setCipher(type: string) {
    this.$store.dispatch("setCipher", type);
  }

  public created() {
    this.$store.dispatch("fetchAlgorithms");
  }
}
</script>
