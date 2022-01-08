<template>
  <div class="m-3 encryption-boxes">
    <encrypt-box />
    <decrypt-box />
    <submit-button />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import EncryptBox from '@/components/EncryptBox.vue';
import DecryptBox from '@/components/DecryptBox.vue';
import SubmitButton from '@/components/SubmitButton.vue';

@Component({
  components: {
    EncryptBox,
    DecryptBox,
    SubmitButton,
  },
})
export default class EncryptionBoxes extends Vue {
  public inputString = '';
}
</script>

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
