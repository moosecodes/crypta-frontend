<template>
  <div class="encryption-boxes">
    <div class="d-flex flex-column m-3">
      <h4 class="align-self-start">Input:</h4>
      <b-form-textarea
        id="inputString"
        v-model="inputString"
        placeholder="Enter text to encrypt here"
        rows="4"
        maxlength="1000"
        :disabled="!encryptMode"
      />
      <div class="align-self-end">{{ inputString.length }} / 1000</div>
      <h4 class="align-self-start">Output:</h4>
      <b-form-textarea
        id="encryptedData"
        class="mb-3"
        v-model="encryptedData"
        placeholder="Encrypted data will display here"
        rows="15"
        :disabled="encryptMode"
      />
      <b-button
        :disabled="!cipher || !inputString.length"
        @click="submit('encrypt')"
        variant="success"
      >
        <span v-if="!cipher"> Select a cipher </span>
        <span v-else-if="!inputString.length"> Enter input string </span>
        <span v-else>
          Encrypt using <b>{{ cipher }}</b>
        </span>
      </b-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class EncryptionBoxes extends Vue {
  private inputString = "";
  private encryptedData = "";
  private encryptMode = true;

  private get cipher() {
    return this.$store.state.cipher;
  }

  private encryptString(): void {
    axios
      .get(
        `http://192.168.86.106/api/encryption/encrypt?text=${this.inputString}&cipher=${this.$store.state.cipher}`
      )
      .then((response) => {
        this.encryptedData = JSON.stringify(response.data, null, 2);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private decryptString(data: string): void {
    axios
      .post(`http://192.168.86.106/api/encryption/decrypt`, {
        data,
      })
      .then((response) => {
        this.inputString = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  private submit() {
    if (this.$store.state.cipher) {
      if (this.encryptMode) {
        console.log("encryptString");
        this.encryptString();
      } else {
        console.log("decryptString");
        this.decryptString(this.encryptedData);
      }
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
