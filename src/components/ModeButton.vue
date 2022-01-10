<template>
  <b-button
    squared
    size="lg"
    class="mx-3 reset-button"
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
  public changeAppMode() {
    this.$store.dispatch("changeAppMode");
  }
}
</script>
