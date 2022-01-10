<template>
  <b-button
    squared
    size="lg"
    class="mx-3 reset-button"
    :variant="disabled ? 'outline-secondary' : 'danger'"
    :disabled="disabled"
    @click="reset()"
  >
    <b>RESET</b>
  </b-button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ResetButton extends Vue {
  public get disabled() {
    const disabled = !this.$store.state.input || !this.$store.state.algorithm;
    return disabled;
  }

  public reset() {
    this.$store.dispatch("resetStore", true);
  }
}
</script>
