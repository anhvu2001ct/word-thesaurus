<script setup lang="ts">
withDefaults(
  defineProps<{
    titleClass: string;
    title: string;
    data: string[];
  }>(),
  {
    titleClass: "bg-primary text-white"
  }
);

defineEmits<{
  wordClicked: [word: string];
}>();
</script>

<template>
  <QCard class="col-10 col-sm-5 shadow-6 shadow-4" bordered>
    <QCardSection :class="`${$props.titleClass} text-center`">
      <span class="text-h6">{{ $props.title }}</span>
    </QCardSection>

    <QSeparator />

    <QScrollArea style="height: 32vh">
      <QList class="row">
        <TransitionGroup
          name="list"
          enter-active-class="animate__animated animate__fadeInLeft"
          leave-active-class="animate__animated animate__fadeOutRight"
        >
          <QItem
            v-for="word in $props.data"
            :key="word"
            v-ripple
            class="col-6 col-md-4 flex flex-center"
            clickable
            @click="$emit('wordClicked', word)"
          >
            {{ word }}
            <QTooltip :delay="200" class="bg-secondary">Try this word</QTooltip>
          </QItem>
        </TransitionGroup>
      </QList>
    </QScrollArea>
  </QCard>
</template>
