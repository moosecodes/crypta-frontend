<template>
  <div>
    <Buttons />
    <EncryptBox />
    <Ciphers />
    <Algorithms />
    <DecryptBox />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Algorithms from "@/components/Algorithms.vue";
import Ciphers from "@/components/Ciphers.vue";
import EncryptBox from "@/components/EncryptBox.vue";
import DecryptBox from "@/components/DecryptBox.vue";
import Buttons from "@/components/Buttons.vue";

@Component({
  components: {
    Buttons,
    Algorithms,
    Ciphers,
    EncryptBox,
    DecryptBox,
  },
})
export default class Encryption extends Vue {}
</script>
