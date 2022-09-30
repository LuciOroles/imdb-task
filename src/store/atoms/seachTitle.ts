import { atom } from "recoil";

export const searchTitleAtom = atom<string>({
  key: "searchTitle",
  default: "",
});
