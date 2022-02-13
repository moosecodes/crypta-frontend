<template>
  <div class="d-flex flex-column flex-wrap">
    <h5>Cipher</h5>
    <b-button
      v-for="(type, index) in ciphers"
      class="my-1"
      :key="index"
      :variant="cipher == type ? 'success' : 'outline-secondary'"
      @click="setCipher(type)"
    >
      <b>{{ type.toUpperCase() }}</b>
    </b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ciphers extends Vue {
  public get ciphers(): string[] {
    let ciphers: string[] = [];

    if (this.$store.state.list) {
      let algos: { method: string[]; passphrase: boolean }[] = [];
      algos = this.$store.state.list;

      algos.forEach((algo) => {
        const prefix = algo.method[0].split('-')[0];
        if (!ciphers.includes(prefix)) {
          ciphers.push(prefix);
        }
      });
    }

    return ciphers;
  }

  public get cipher(): string {
    return this.$store.state.cipher;
  }

  public setCipher(type: string): void {
    this.$store.dispatch('setCipher', type);
  }

  public created(): void {
    this.$store.dispatch('fetchAlgorithms').then(() => {
      this.$store.dispatch('setCipher', 'aes');
    });
  }
}
</script>
