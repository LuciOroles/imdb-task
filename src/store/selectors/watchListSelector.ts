import { selector } from "recoil";
import { watchListAtom } from "../atoms/watchListAtom";

export const watchListSelector = selector({
  key: "watchlistCount",
  get: ({ get }) => {
    const e = get(watchListAtom);
    return e.length;
  },
});
