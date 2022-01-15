<template>
  <section>
    <Controls />
    <EncryptBox />
    <DecryptBox />
    <EncryptionSchemeSelector />
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import EncryptBox from '@/components/EncryptBox.vue';
import DecryptBox from '@/components/DecryptBox.vue';
import Controls from '@/components/Controls.vue';
import EncryptionSchemeSelector from '@/components/EncryptionSchemeSelector.vue';

@Component({
  components: {
    Controls,
    EncryptBox,
    DecryptBox,
    EncryptionSchemeSelector,
  },
})
export default class Encryption extends Vue {}
</script>
