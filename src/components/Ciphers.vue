<template>
  <div class="ciphers">
    <h5>Select a Cipher</h5>
    <div>{{ chosenCipher }}</div>
    <div class="d-flex flex-column card bg-light m-3">
      <div class="d-flex flex-wrap card-header mb-2">
        <button
          v-for="(algo, index) in algorithms"
          :key="index"
          type="button"
          class="align-self-start m-2"
          :class="
            chosenCipher == algo
              ? 'btn btn-success'
              : 'btn btn-outline-secondary'
          "
          @click="chosenCipher = algo"
        >
          <b>{{ algo }}</b>
        </button>
      </div>
      <div class="card-body">
        <h5 v-if="chosenCipher" class="mb-3 card-title">
          Select key size and/or mode of
          <b> {{ chosenCipher ? chosenCipher.toUpperCase() : '---' }}</b>
        </h5>
        <div class="card-text">
          <div v-if="chosenCipher" class="d-flex flex-wrap">
            <div
              v-for="(mode, index) in modes"
              :key="index"
              class="align-self-start"
            >
              <b-button
                v-if="mode.includes(chosenCipher)"
                pill
                class="m-1"
                :variant="
                  activeButton === index ? 'success' : 'outline-secondary'
                "
                @click="selectCipher(mode, index)"
              >
                {{ mode }}
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Ciphers extends Vue {
  public modes: string[] = [];
  public chosenCipher = '';
  public activeButton = -1;
  public types: string[] = [];
  public chosenType = '';

  public selectCipher(cipher: string, index: number) {
    this.activeButton = index;
    this.chosenCipher = cipher;
    this.$store.dispatch('setCipher', cipher);
  }

  public get algorithms() {
    if (this.$store.state.list) {
      this.modes = this.$store.state.list;
      this.getModes();
    }

    return this.types;
  }

  private getModes() {
    if (this.modes) {
      for (let i = 0; i < this.modes.length; i++) {
        let currentType = this.modes[i].split('-')[0];
        if (!this.types.includes(currentType)) {
          this.types.push(currentType);
        }
      }
    }
  }

  public created() {
    this.$store.dispatch('fetchList');
  }
}
</script>

<style scoped lang="scss">
.card-text {
  min-height: 250px;
}
</style>
