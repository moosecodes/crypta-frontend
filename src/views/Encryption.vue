<template>
  <div>
    <SubmitButton />
    <EncryptBox />
    <Ciphers />
    <Algorithms />
    <DecryptBox />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Algorithms from "../components/Algorithms.vue";
import Ciphers from "../components/Ciphers.vue";
import EncryptBox from "@/components/EncryptBox.vue";
import DecryptBox from "@/components/DecryptBox.vue";
import SubmitButton from "@/components/SubmitButton.vue";

@Component({
  components: {
    Algorithms,
    Ciphers,
    EncryptBox,
    DecryptBox,
    SubmitButton,
  },
})
export default class Encryption extends Vue {}
</script>
