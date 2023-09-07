<script setup lang="ts">
import useInputStore from "@/composables/stores/useInputStore";

withDefaults(
  defineProps<{
    titleClass?: string;
    title: string;
    data: string[];
  }>(),
  {
    titleClass: "bg-primary text-white"
  }
);

const store = useInputStore();

function wordClicked(word: string) {
  store.wordInput = word;
}
</script>

<template>
  <QCard class="col-10 col-sm-5 shadow-6 shadow-4" bordered>
    <QCardSection :class="`${$props.titleClass} text-center`">
      <span class="text-h6">{{ $props.title }}</span>
    </QCardSection>

    <QSeparator />
    <QScrollArea style="height: 32vh">
      <QList v-auto-animate="{ duration: 200 }" class="row">
        <QItem
          v-for="word in $props.data"
          :key="word"
          v-ripple
          class="col-6 col-md-4 flex flex-center"
          clickable
          @click="wordClicked(word)"
        >
          {{ word }}
          <QTooltip :delay="200" class="bg-secondary">Try this word</QTooltip>
        </QItem>
      </QList>
    </QScrollArea>
  </QCard>
</template>
