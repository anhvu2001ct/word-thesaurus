import type { APIResult } from "./types";

export const KEY_THEME = "theme";

export type Theme = "auto" | "light" | "dark";

export function getTheme(): Theme {
  return (localStorage.getItem(KEY_THEME) ?? "auto") as Theme;
}

export function setTheme(theme: Theme) {
  localStorage.setItem(KEY_THEME, theme);
}

export async function fetchData(word: string, signal: AbortSignal) {
  const resp = await fetch(`https://api.api-ninjas.com/v1/thesaurus?word=${word}`, {
    signal,
    headers: {
      "X-Api-Key": "M2qrHMAinOWcIepM5DMBag==iD4RkVU7qh3GBgaK"
    }
  });
  if (!resp.ok) {
    throw new Error(`Network error, Status=${resp.status}`);
  }

  let res = (await resp.json()) as APIResult;
  res = {
    synonyms: [...new Set(res.synonyms)],
    antonyms: [...new Set(res.synonyms)]
  };

  return res;
}
