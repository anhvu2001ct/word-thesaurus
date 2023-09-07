import { computed, ref, watch } from "vue";
import useInputStore from "./stores/useInputStore";
import { storeToRefs } from "pinia";
import type { APIResult } from "@/types";
import { fetchData } from "@/helper";

export default function useFetchData() {
  const store = useInputStore();
  const { wordInput, searchInput } = storeToRefs(store);
  const fetchResult = ref<APIResult>();

  const synonyms = computed(() =>
    !fetchResult.value
      ? []
      : !searchInput.value
      ? fetchResult.value.synonyms
      : fetchResult.value.synonyms.filter((w) =>
          w.toLowerCase().includes(searchInput.value.toLowerCase())
        )
  );

  const antonyms = computed(() =>
    !fetchResult.value
      ? []
      : !searchInput.value
      ? fetchResult.value.antonyms
      : fetchResult.value.antonyms.filter((w) =>
          w.toLowerCase().includes(searchInput.value.toLowerCase())
        )
  );

  watch(wordInput, async (_1, _2, onCleanup) => {
    const word = wordInput.value;
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
  });

  return { synonyms, antonyms };
}
