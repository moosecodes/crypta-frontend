<template>
  <div class="ciphers">
    <div class="mx-5">
      <div v-if="this.$store.state.cipher.length == 0">Select a Cipher</div>
      <div v-else>
        {{ this.$store.state.cipher }}
      </div>
    </div>
    <div class="btn-group" role="group" aria-label="Cipher Categories">
      <button
        v-for="(type, index) in types"
        :key="index"
        type="button"
        class="btn btn-secondary"
        @click="displayCategory(type)"
      >
        {{ type }}
      </button>
    </div>
    <div v-if="currentType" class="d-flex flex-wrap px-5">
      <div v-for="(cipher, index) in ciphers" :key="index">
        <b-button
          v-if="cipher.includes(currentType)"
          pill
          class="m-1"
          :variant="activeButton === index ? 'success' : 'outline-secondary'"
          @click="selectCipher(cipher, index)"
        >
          {{ cipher }}
        </b-button>
      </div>
    </div>
    <div>
      <p>{{ error ? error : 'Errors: none' }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios, { AxiosPromise } from 'axios';

@Component
export default class Ciphers extends Vue {
  private ciphers: string[] = [];
  private selectedCipher = '';
  private error = null;
  private activeButton = -1;
  private types: string[] = [];
  private currentType = '';

  private selectCipher(cipher: string, index: any) {
    this.activeButton = index;
    this.selectedCipher = cipher;
    this.$store.commit('setCipher', this.selectedCipher);
  }

  private displayCategory(type: string) {
    this.currentType = type;
  }

  private created(): Promise<AxiosPromise> {
    let err: null | string = null;

    let response: any = axios
      .get('http://192.168.86.67/api/encryption/list')
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          let currentType = response.data[i].split('-')[0];
          if (!this.types.includes(currentType)) {
            this.types.push(currentType);
          }
        }
        this.ciphers = response.data;
      })
      .catch(function (error: string) { err = error; });
    
    if (err) this.error = err;
    
    return response;
  }
}
</script>
