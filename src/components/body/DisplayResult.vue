<script setup lang="ts">
import DisplayResultContent from "./DisplayResultContent.vue";

defineProps<{
  synonyms: string[];
  antonyms: string[];
}>();

const emit = defineEmits<{
  wordClicked: [word: string];
}>();

function onWordClick(word: string) {
  emit("wordClicked", word);
}
</script>

<template>
  <div
    class="row q-ma-md q-gutter-md justify-center items-start full-width"
    style="max-width: 1200px"
  >
    <DisplayResultContent :data="$props.synonyms" title="Synonyms" @word-clicked="onWordClick" />
    <DisplayResultContent
      :data="$props.antonyms"
      title="Antonyms"
      title-class="bg-negative text-white"
      @word-clicked="onWordClick"
    />
  </div>
</template>
