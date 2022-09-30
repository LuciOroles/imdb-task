import { selector } from "recoil";
import { Movie, TitleSimilar } from "../../types";
import { viewedKeysAtom } from "../atoms/viewedKeys";

export const recommendationListSelector = selector({
  key: "recommendationList",
  get: ({ get }) => {
    const viewedTitles = get(viewedKeysAtom);
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
      recommendations.length < 10 ||
      visitedIndex < visitedTitlesArray.length
    ) {
      const maxItems = Math.min(
        visitedTitlesArray[visitedIndex].priority,
        10 - recommendations.length
      );
      recommendations = recommendations.concat(
        visitedTitlesArray[visitedIndex].similars.slice(0, maxItems)
      );
      visitedIndex++;
    }

    return recommendations;
  },
});
