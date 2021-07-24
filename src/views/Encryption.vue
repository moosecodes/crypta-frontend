<template>
  <div class="encryption-feature">
    <encryption-boxes />
    <ciphers />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EncryptionBoxes from '@/components/EncryptionBoxes.vue';
import Ciphers from '@/components/Ciphers.vue';

@Component({
  components: {
    EncryptionBoxes,
    Ciphers,
  },
})
export default class Encryption extends Vue {}
</script>
