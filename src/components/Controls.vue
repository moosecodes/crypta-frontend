<template>
  <div class="d-flex justify-content-end">
    <!-- <ModeButton /> -->
    <ResetButton />
    <SubmitButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
// import ModeButton from "@/components/ModeButton.vue";
import ResetButton from "@/components/ResetButton.vue";
import SubmitButton from "@/components/SubmitButton.vue";

@Component({
  components: {
    // ModeButton,
    ResetButton,
    SubmitButton,
  },
})
export default class Controls extends Vue {}
</script>
