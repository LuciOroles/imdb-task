import * as React from "react";

import { useViewedTitles } from "./useViewedTitles";
import { WatchListTable } from "./WatchListTable";
export interface IRecommendationsProps {}

export function Recommendations(props: IRecommendationsProps) {
  const { recSelector } = useViewedTitles();

  return <WatchListTable watchListItems={recSelector()} />;
}
