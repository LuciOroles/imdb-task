import { Heading } from "@chakra-ui/react";
import * as React from "react";
import { useLocation } from "react-router-dom";
import { MovieList } from "./MovieList";
import { Page } from "./Page";
import { MovieResult } from "./types";
import urls from "./urls";
import { useQueryResults } from "./useQueryResults";

export interface ISearchProps {}

function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export function SearchPage(props: ISearchProps) {
  const query = useQuery();
  const title = query.get("title"); // expect encoded in here... re-encode

  const { isValidating, error, result } = useQueryResults<MovieResult[]>(
    `${urls.titleSearch}/${title}`,
    (e) => e.results
  );

  return (
    <Page>
      <React.Fragment>
        <Heading size="lg">Search results:</Heading>
        <MovieList isValidating={isValidating} error={error} result={result} />
      </React.Fragment>
    </Page>
  );
}
