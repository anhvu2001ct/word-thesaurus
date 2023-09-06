<script setup lang="ts">
import { computed, ref, watch } from "vue";
import WordInput from "./WordInput.vue";
import DisplayResult from "./DisplayResult.vue";
import { type InputStatus } from "@/types";
import { fetchData } from "@/helper";

const synonyms = ref<string[]>([]);
const antonyms = ref<string[]>([]);
const state = ref<InputStatus>("ok");
const word = ref("");
const search = ref("");

const finalSynoyms = computed(() =>
  search.value ? synonyms.value.filter((w) => w.includes(search.value)) : synonyms.value
);
const finalAtonyms = computed(() =>
  search.value ? antonyms.value.filter((w) => w.includes(search.value)) : antonyms.value
);

watch(word, async (_1, _2, onCleanup) => {
  if (!word.value) {
    synonyms.value = antonyms.value = [];
    state.value = "ok";
    return;
  }

  let cleaned = false;
  const ac = new AbortController();
  onCleanup(() => {
    cleaned = true;
    ac.abort();
  });

  state.value = "loading";
  try {
    const data = await fetchData(word.value, ac.signal);
    if (cleaned) return;
    synonyms.value = [...new Set(data.synonyms)];
    antonyms.value = [...new Set(data.antonyms)];
    state.value = "ok";
  } catch (error) {
    if (cleaned) return;
    state.value = "error";
    console.error(`Error while getting data. Message = ${error}`);
  }
});

function wordClicked(newWord: string) {
  word.value = newWord;
}
</script>

<template>
  <QPage padding class="column flex-center">
    <WordInput v-model:word="word" v-model:search="search" :state="state" />
    <DisplayResult :synonyms="finalSynoyms" :antonyms="finalAtonyms" @word-clicked="wordClicked" />
  </QPage>
</template>
