import type { FetchStatus } from "@/types";
import { defineStore } from "pinia";
import { ref } from "vue";

export default defineStore("input", () => {
  const wordInput = ref("");
  const searchInput = ref("");
  const fetchStatus = ref<FetchStatus>("ok");
  return { wordInput, searchInput, fetchStatus };
});
