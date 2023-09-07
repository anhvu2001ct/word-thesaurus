<script setup lang="ts">
import useFetchData from "@/composables/useFetchData";
import DisplayResultContent from "./DisplayResultContent.vue";

const { synonyms, antonyms } = useFetchData();
</script>

<template>
  <div
    class="card-container row q-ma-md justify-center items-start full-width"
    style="max-width: 1200px"
  >
    <DisplayResultContent :data="synonyms" title="Synonyms" />
    <DisplayResultContent :data="antonyms" title="Antonyms" title-class="bg-negative text-white" />
  </div>
</template>

<style scoped>
.card-container {
  gap: 1.25rem;
}
</style>
