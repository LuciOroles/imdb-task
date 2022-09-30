import { atom } from "recoil";
import { Movie } from "../../types";

export const watchListAtom = atom<Movie[]>({
  key: "watchlist",
  default: [],
});
