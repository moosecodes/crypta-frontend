<template>
  <b-button squared size="lg" class="mx-3" variant="danger" @click="reset()">
    <b>RESET</b>
  </b-button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class ResetButton extends Vue {
  public reset(): void {
    this.$store.dispatch('resetStore', true);
  }
}
</script>
