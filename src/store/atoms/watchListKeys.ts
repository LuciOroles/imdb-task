import { atom } from "recoil";

export const watchListKeys = atom<Set<String>>({
  key: "watchListKeys",
  default: new Set(),
});
