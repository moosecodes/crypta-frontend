<template>
  <div class="ciphers">
    <div class="mt-5 mb-5">
      <h3 v-if="selectedCipher.length == 0">Select a Cipher</h3>
      <h3 v-else>
        {{ this.$store.state.cipher }}
      </h3>
    </div>
    <!-- <div>
      <p>{{ error ? error : 'Errors: none' }}</p>
    </div> -->
    <div class="d-flex flex-wrap">
      <b-button
        pill
        class="m-1"
        v-for="(cipher, index) in ciphers"
        :key="index"
        :variant="(activeButton === index) ? 'success' : 'outline-secondary'"
        @click="selectCipher(cipher, index)"
      >
        {{ cipher }}
      </b-button>
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

  private selectCipher(cipher: string, index: any) {
    this.activeButton = index;
    this.selectedCipher = cipher;
    this.$store.commit('setCipher', this.selectedCipher);
  }

  private async created(): Promise<AxiosPromise> {
    let err: null | string = null;

    let response: any = axios
      .get('http://192.168.86.67/api/encryption/list')
      .then((response) => {
        // handle success
        this.ciphers = response.data;
      })
      .catch(function (error: string) {
        // handle error
        err = error;
      });
    if (err) this.error = err;
    return response;
  }
}
</script>
