<template>
  <div class="encryption-boxes">
    <div class="d-flex flex-column px-5">
      <b-form-textarea
        id="inputString"
        v-model="inputString"
        placeholder="Enter text to encrypt here"
        rows="5"
      />
      <b-form-textarea
        id="encryptedData"
        v-model="encryptedData"
        placeholder="Decrypted data will display here"
        rows="15"
        :disabled="true"
      />
      <b-button @click="submit('encrypt')" :disabled="!cipher">
        <span v-if="!cipher">
          Select a cipher
        </span>
        <span v-else>
          Encrypt using <b>{{cipher}}</b>
        </span>
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class EncryptionBoxes extends Vue {
  private inputString = '';
  private encryptedData = '';

  private get cipher() {
    return this.$store.state.cipher;
  }

  private encryptString(text: string, cipher: string): void {
    axios
      .get(
        `http://192.168.86.67/api/encryption/encrypt?text=${text}&cipher=${cipher}`
      )
      .then((response) => {
        this.encryptedData = JSON.stringify(response.data, null, 2);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private decryptString(text: string, cipher: string): void {
    axios
      .get(
        `http://192.168.86.67/api/encryption/decrypt?text=${text}&cipher=${cipher}`
      )
      .then((response) => {
        console.log(response.data);
        this.inputString = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private submit(mode: string) {
    if (mode === 'encrypt' && this.inputString && this.$store.state.cipher) {
      this.encryptString(this.inputString, this.$store.state.cipher);
    }
  }

  private created(): void {
    console.log(this.cipher);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
