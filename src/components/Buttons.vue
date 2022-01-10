<template>
  <div class="d-flex justify-content-end">
    <ResetButton />
    <SubmitButton />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ResetButton from "@/components/ResetButton.vue";
import SubmitButton from "@/components/SubmitButton.vue";

@Component({
  components: {
    ResetButton,
    SubmitButton,
  },
})
export default class Buttons extends Vue {}
</script>
