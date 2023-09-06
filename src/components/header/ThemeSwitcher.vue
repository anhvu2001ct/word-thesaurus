<script setup lang="ts">
import { setTheme } from "@/helper";
import { useQuasar } from "quasar";

const q = useQuasar();

function toggleThemeMode() {
  q.dark.toggle();
  setTheme(q.dark.isActive ? "dark" : "light");
}
</script>

<template>
  <QBtn class="theme-switcher flex flex-center" flat round @click="toggleThemeMode">
    <div class="theme-content column">
      <QIcon name="o_dark_mode" class="col" />
      <QIcon name="o_light_mode" class="col" />
    </div>
  </QBtn>
</template>

<style scoped>
.theme-switcher {
  overflow: hidden;
  height: 40px;
}

.theme-content {
  height: 200%;
  transition: 300ms ease-in-out;
}

.body--light .theme-content {
  transform: translateY(-50%);
}
</style>
