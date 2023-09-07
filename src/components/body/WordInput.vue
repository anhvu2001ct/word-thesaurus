<script setup lang="ts">
import useInputStore from "@/composables/stores/useInputStore";

const store = useInputStore();
</script>

<template>
  <div class="row flex-center full-width" style="max-width: 1000px">
    <QInput
      v-model="store.wordInput"
      class="col-10 col-sm-4"
      :debounce="250"
      :loading="store.fetchStatus === 'loading'"
      :error="store.fetchStatus === 'error'"
      error-message="Cannot retrieve data"
      label="Enter a word"
      placeholder="nice"
      filled
      clearable
    >
      <template #prepend>
        <QIcon name="o_send" />
      </template>
    </QInput>

    <QInput
      v-model="store.searchInput"
      class="col-10 col-sm-4"
      :debounce="100"
      :error="false"
      label="Search..."
      outlined
      clearable
    >
      <template #append>
        <QIcon name="o_search" />
      </template>
    </QInput>
  </div>
</template>
