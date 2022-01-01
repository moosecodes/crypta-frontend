<template>
  <div class="ciphers">
    <!-- <div>
      <p>{{ error ? error : currentType }}</p>
    </div> -->
    <div class="card bg-light m-3">
      <div class="card-header">
        <h5>Select Cipher</h5>
        <div class="mb-2">
          <button
            v-for="(type, index) in encryptionTypes"
            :key="index"
            type="button"
            class="mx-1"
            :class="
              currentType == type
                ? 'btn btn-success'
                : 'btn btn-outline-secondary'
            "
            @click="displayCategory(type)"
          >
            {{ type }}
          </button>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">
          <span v-if="currentType">Select variation of</span>
          {{ currentType ? currentType.toUpperCase() : "---" }}
        </h5>
        <div class="card-text">
          <div v-if="currentType" class="d-flex flex-wrap px-5">
            <div v-for="(cipher, index) in ciphers" :key="index">
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
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Ciphers extends Vue {
  private ciphers: string[] = [];
  private selectedCipher = "";
  private error = null;
  private activeButton = -1;
  private encryptionTypes: string[] = [];
  private currentType = "";

  private selectCipher(cipher: string, index: number) {
    this.activeButton = index;
    this.selectedCipher = cipher;
    this.$store.commit("setCipher", this.selectedCipher);
  }

  private displayCategory(type: string) {
    this.currentType = type;
  }

  private created(): Promise<void> {
    let err: null | string = null;

    let response = axios
      .get("http://192.168.86.106/api/encryption/list")
      .then((response) => {
        console.log(response);
        for (let i = 0; i < response.data.length; i++) {
          let currentType = response.data[i].split("-")[0];
          if (!this.encryptionTypes.includes(currentType)) {
            this.encryptionTypes.push(currentType);
          }
        }
        this.ciphers = response.data;
      })
      .catch(function (error: string) {
        err = error;
      });

    if (err) this.error = err;

    return response;
  }
}
</script>

<style scoped lang="scss">
.card-text {
  min-height: 250px;
}
</style>
