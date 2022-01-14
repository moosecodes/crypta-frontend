<template>
  <div class="d-flex mt-4">
    <Ciphers />
    <Algorithms />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Algorithms from '@/components/Algorithms.vue';
import Ciphers from '@/components/Ciphers.vue';

@Component({
  components: {
    Ciphers,
    Algorithms,
  },
})
export default class EncryptionSchemeSelector extends Vue {}
</script>
