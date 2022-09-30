import * as React from "react";
import { TitleDetails } from "./TitleDetails";
import { Page } from "./Page";

export interface IMovieProps {}

export function Movie(props: IMovieProps) {
  return (
    <Page>
      <TitleDetails />
    </Page>
  );
}
