import { Heading } from "@chakra-ui/react";
import React from "react";
import { MovieList } from "./MovieList";
import { Page } from "./Page";
import { MovieResult } from "./types";
import urls from "./urls";
import { useQueryResults } from "./useQueryResults";

export interface IMainProps {}
export function MainPage(props: IMainProps) {
  const { isValidating, error, result } = useQueryResults<MovieResult[]>(
    `${urls.comingSoon}`,
    (e) => e.items
  );
  return (
    <Page>
      <React.Fragment>
        <Heading size="lg">Coming soon:</Heading>
        <MovieList isValidating={isValidating} error={error} result={result} />
      </React.Fragment>
    </Page>
  );
}
