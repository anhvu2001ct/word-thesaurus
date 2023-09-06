<script setup lang="ts">
import ThemeSwitcher from "./ThemeSwitcher.vue";
</script>

<template>
  <QHeader elevated height-hint="60" color="asdf">
    <QToolbar>
      <QToolbarTitle>
        <QBtn flat no-caps size="lg" icon="o_spellcheck" label="Word Thesaurus">
          <QTooltip
            class="bg-secondary"
            transition-show="flip-right"
            transition-hide="flip-left"
            :delay="100"
          >
            <span class="text-overline">My small project for English word thesaurus</span>
          </QTooltip>
        </QBtn>
      </QToolbarTitle>

      <ThemeSwitcher />
    </QToolbar>
  </QHeader>
</template>
