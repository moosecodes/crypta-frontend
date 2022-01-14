<template>
  <b-button
    squared
    size="lg"
    class="mx-3"
    variant="outline-secondary"
    @click="changeAppMode()"
  >
    <b>Change Mode</b>
  </b-button>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ModeButton extends Vue {
  public changeAppMode(): void {
    this.$store.dispatch("changeAppMode");
  }
}
</script>
