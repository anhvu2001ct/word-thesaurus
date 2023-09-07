export type APIResult = {
  synonyms: string[];
  antonyms: string[];
};

export type FetchStatus = "ok" | "loading" | "error";
