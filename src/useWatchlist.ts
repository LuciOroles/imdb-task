import { useRecoilState } from "recoil";
import { watchListAtom } from "./store/atoms/watchListAtom";
import { watchListKeys } from "./store/atoms/watchListKeys";
import { Movie, MovieResult } from "./types";

export const useWatchlist = () => {
  const [watchListKeysItems, setWatchListKeys] = useRecoilState(watchListKeys);
  const [watchListItems, setWatchList] = useRecoilState(watchListAtom);

  const removeFromWatchList = (movie: Movie) => () => {
    if (watchListKeysItems.has(movie.id)) {
      setWatchListKeys((existingKeys: Set<String>) => {
        existingKeys.delete(movie.id);
        return existingKeys;
      });

      setWatchList((existingMovies) => {
        return existingMovies.filter((_movie) => _movie.id !== movie.id);
      });
    }
  };

  const addToWatchList = (movie: MovieResult | Movie) => () => {
    if (!watchListKeysItems.has(movie.id)) {
      setWatchListKeys((existingKeys: Set<String>) => {
        return existingKeys.add(movie.id);
      });

      setWatchList((existingMovies) => {
        return [...existingMovies, { id: movie.id, title: movie.title }];
      });
    }
  };

  return {
    addToWatchList,
    removeFromWatchList,
    watchListItems,
    watchListKeysItems,
  };
};
