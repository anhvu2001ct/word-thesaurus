<script setup lang="ts">
import AppHeader from "./components/header/AppHeader.vue"
import AppBody from "./components/body/AppBody.vue"
</script>

<template>
  <QLayout view="hHh lpr fff">
    <AppHeader />
    <QPageContainer>
      <AppBody />
    </QPageContainer>
  </QLayout>
</template>
