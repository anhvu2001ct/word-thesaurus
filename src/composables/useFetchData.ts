import { fetchData } from "@/helper";
import type { APIResult } from "@/types";
import { computed, ref, watch } from "vue";
import useInputStore from "./stores/useInputStore";

export default function useFetchData() {
  const store = useInputStore();
  const fetchResult = ref<APIResult>();

  const synonyms = computed(() => {
    return !fetchResult.value
      ? []
      : !store.searchInput
      ? fetchResult.value.synonyms
      : fetchResult.value.synonyms.filter((w) =>
          w.toLowerCase().includes(store.searchInput.toLowerCase())
        );
  });

  const antonyms = computed(() =>
    !fetchResult.value
      ? []
      : !store.searchInput
      ? fetchResult.value.antonyms
      : fetchResult.value.antonyms.filter((w) =>
          w.toLowerCase().includes(store.searchInput.toLowerCase())
        )
  );

  watch(
    () => store.wordInput,
    async (word, _2, onCleanup) => {
      if (!word) {
        store.fetchStatus = "ok";
        fetchResult.value = undefined;
        return;
      }

      let cleaned = false;
      const ac = new AbortController();
      onCleanup(() => {
        cleaned = true;
        ac.abort();
      });

      store.fetchStatus = "loading";

      try {
        const data = await fetchData(word, ac.signal);
        if (cleaned) return;
        fetchResult.value = data;
        store.fetchStatus = "ok";
      } catch (error) {
        if (cleaned) return;
        store.fetchStatus = "error";
        console.error(`Error while getting data. Message = ${error}`);
      }
    }
  );

  return { synonyms, antonyms };
}
