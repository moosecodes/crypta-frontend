<template>
  <div class="encryption-boxes">
    <div>
    </div>
    <div class="d-flex flex-column px-5">
      <b-form-textarea
        id="inputString"
        v-model="inputString"
        placeholder="Enter string to encrypt..."
        rows="5"
      />

      <b-form-textarea
        id="encryptedData"
        v-model="encryptedData"
        placeholder="Decrypted string will show here"
        rows="15"
        :disabled="true"
      />
    </div>
    <b-button @click="submit('encrypt')">Submit</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class EncryptionBoxes extends Vue {
  private inputString = '';
  private encryptedData = '';

  private encryptString(text: string, cipher: string): void {
    axios
      .get(`http://192.168.86.67/api/encryption/encrypt?text=${text}&cipher=${cipher}`)
      .then((response) => {
        this.encryptedData = JSON.stringify(response.data, null, 2 );
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private decryptString(text: string, cipher: string): void {
    axios
      .get(`http://192.168.86.67/api/encryption/decrypt?text=${text}&cipher=${cipher}`)
      .then((response) => {
        console.log(response.data);
        this.inputString = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private submit(mode: string) {
    if(mode === 'encrypt' && this.inputString && this.$store.state.cipher){
      this.encryptString(this.inputString, this.$store.state.cipher);
    }
  }

  private cipher() {
    return this.$store.state.cipher;
  }

  private created(): void {
    console.log(this.cipher());
    // let text = 'thisisthetext';
    // let cipher = 'aes-128-cbc';
    // this.encryptString(text, cipher);  
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
