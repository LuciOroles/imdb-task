import { useRecoilState } from "recoil";
import { MovieDetailsResponse, Priority, TitleSimilar, Movie } from "./types";
import { viewedKeysAtom } from "./store/atoms/viewedKeys";

export const useViewedTitles = () => {
  const [viewedTitles, setViewedTitles] = useRecoilState(viewedKeysAtom);
  const createViewedTitle = (e: MovieDetailsResponse) => {
    setViewedTitles((viewKeys: Map<string, TitleSimilar>) => {
      if (!viewKeys.has(e.id)) {
        viewKeys.set(e.id, {
          similars: e.similars,
          priority: 1,
        });
      }

      return viewKeys;
    });
  };

  const updateViewedTitle = (id: string) => {
    setViewedTitles((viewKeys: Map<string, TitleSimilar>) => {
      const _t: TitleSimilar | undefined = viewKeys.get(id);
      if (_t) {
        viewKeys.set(id, {
          similars: _t.similars,
          priority: Math.min(3, _t.priority + 1) as Priority,
        });
      }
      return viewKeys;
    });
  };

  const recSelector = () => {
    let recommendations: Movie[] = [];
    const visitedTitlesArray: TitleSimilar[] = [];

    viewedTitles.forEach((titleValue, titleId) => {
      visitedTitlesArray.push(titleValue);
    });

    visitedTitlesArray.sort((a, b) => {
      return a.priority - b.priority;
    });

    let visitedIndex = 0;
    if (visitedTitlesArray.length === 0) {
      return [];
    }

    while (
      recommendations.length < 10 &&
      visitedIndex < visitedTitlesArray.length
    ) {
      const maxItems = Math.min(
        visitedTitlesArray[visitedIndex]?.priority || 0,
        10 - recommendations.length
      );
      recommendations = recommendations.concat(
        visitedTitlesArray[visitedIndex].similars.slice(0, maxItems)
      );
      visitedIndex++;
    }

    return recommendations;
  };

  return {
    viewedTitles,
    createViewedTitle,
    updateViewedTitle,
    recSelector,
  };
};
