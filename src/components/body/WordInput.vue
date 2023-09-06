<script setup lang="ts">
import type { InputStatus } from "@/types";
import { ref, watchEffect } from "vue";

withDefaults(
  defineProps<{
    state?: InputStatus;
    word: string;
    search: string;
  }>(),
  {
    state: "ok"
  }
);

defineEmits<{
  "update:word": [newWord: string];
  "update:search": [newSearch: string];
}>();
</script>

<template>
  <div class="row flex-center full-width" style="max-width: 1000px">
    <QInput
      class="col-10 col-sm-4"
      :model-value="$props.word"
      :debounce="250"
      :loading="$props.state === 'loading'"
      :error="$props.state === 'error'"
      error-message="Cannot retrieve data"
      label="Enter a word"
      placeholder="nice"
      filled
      clearable
      @update:model-value="(word) => $emit('update:word', word ?? '')"
    >
      <template #prepend>
        <QIcon name="o_send" />
      </template>
    </QInput>

    <QInput
      class="col-10 col-sm-4"
      :model-value="$props.search"
      :debounce="100"
      :error="false"
      label="Search..."
      outlined
      clearable
      @update:model-value="(search) => $emit('update:search', search ?? '')"
    >
      <template #append>
        <QIcon name="o_search" />
      </template>
    </QInput>
  </div>
</template>
