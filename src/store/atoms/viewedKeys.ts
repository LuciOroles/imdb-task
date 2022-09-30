import { atom } from "recoil";
import { TitleSimilar } from "../../types";

export const viewedKeysAtom = atom<Map<string, TitleSimilar>>({
  key: "viewedKeys",
  default: new Map<string, TitleSimilar>(),
});
