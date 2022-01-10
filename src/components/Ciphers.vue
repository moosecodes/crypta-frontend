<template>
  <div>
    <h5>Cipher</h5>
    <div class="d-flex flex-column">
      <b-button
        v-for="(type, index) in ciphers"
        class="my-1"
        :key="index"
        :variant="cipher == type ? 'warning' : 'outline-secondary'"
        @click="setCipher(type)"
      >
        <b>{{ type.toUpperCase() }}</b>
      </b-button>
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
