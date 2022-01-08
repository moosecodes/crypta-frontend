<template>
  <div class="ciphers">
    <h5>Select Cipher</h5>
    <div class="d-flex flex-column card bg-light m-3">
      <div class="d-flex flex-wrap card-header mb-2">
        <button
          v-for="(type, index) in encryptionTypes"
          :key="index"
          type="button"
          class="align-self-start m-2"
          :class="
            currentType == type
              ? 'btn btn-success'
              : 'btn btn-outline-secondary'
          "
          @click="currentType = type"
        >
          <b>{{ type }}</b>
        </button>
      </div>
      <div class="card-body">
        <h5 v-if="currentType" class="mb-3 card-title">
          Select variation of
          <b> {{ currentType ? currentType.toUpperCase() : '---' }}</b>
        </h5>
        <div class="card-text">
          <div v-if="currentType" class="d-flex flex-wrap">
            <div
              v-for="(cipher, index) in ciphers"
              :key="index"
              class="align-self-start"
            >
              <b-button
                v-if="cipher.includes(currentType)"
                pill
                class="m-1"
                :variant="
                  activeButton === index ? 'success' : 'outline-secondary'
                "
                @click="selectCipher(cipher, index)"
              >
                {{ cipher }}
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
  public ciphers: string[] = [];
  public selectedCipher = '';
  public activeButton = -1;
  public encryptionTypes: string[] = [];
  public currentType = '';

  public selectCipher(cipher: string, index: number) {
    this.activeButton = index;
    this.selectedCipher = cipher;
    this.$store.dispatch('setCipher', cipher);
  }

  public setTypes() {
    const list = this.$store.state.list;

    for (let i = 0; i < list.length; i++) {
      let currentType = list[i].split('-')[0];
      if (!this.encryptionTypes.includes(currentType)) {
        this.encryptionTypes.push(currentType);
      }
    }

    return this.encryptionTypes;
  }

  public created() {
    this.$store.dispatch('fetchList').then((response) => {
      this.setTypes();
    });
  }
}
</script>

<style scoped lang="scss">
.card-text {
  min-height: 250px;
}
</style>
