import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieDetailsResponse } from "./types";
import urls from "./urls";

import {
  Spinner,
  Flex,
  Heading,
  Box,
  Image,
  Divider,
  Tag,
} from "@chakra-ui/react";
import { useQueryResults } from "./useQueryResults";

import { useViewedTitles } from "./useViewedTitles";
import { MovieList } from "./MovieList";
import { AddToListButton } from "./AddToListButton";

export interface IMovieDetailsProps {}
const rowStyle = { display: "flex", gap: "1em" };
export function TitleDetails(props: IMovieDetailsProps) {
  const { id } = useParams();
  const { viewedTitles, createViewedTitle, updateViewedTitle } =
    useViewedTitles();

  const { isValidating, error, result } = useQueryResults<MovieDetailsResponse>(
    id ? `${urls.idSearch}/${id}` : null,
    (e: MovieDetailsResponse | null) => {
      if (e?.similars) {
        createViewedTitle(e);
      }
      return e || null;
    }
  );

  useEffect(() => {
    if (id && viewedTitles.has(id)) {
      updateViewedTitle(id);
    }
  }, [id, updateViewedTitle, viewedTitles]);

  if (isValidating) {
    return (
      <Flex justifyContent="center">
        <Spinner color="green.500" size="lg" />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex>
        <Heading color="red.300"> Error getting data </Heading>
      </Flex>
    );
  }
  return (
    <React.Fragment>
      <Box style={rowStyle}>
        <Box width="5em">
          <Image src={result.image} />
        </Box>
        <Box flex={1}>
          <Heading size="lg"> {result.fullTitle} </Heading>

          <p>{result.plot}</p>
        </Box>
        <Box
          style={{
            display: "flex",
            textAlign: "right",
            width: "10em",
            flexDirection: "column",
            fontStyle: "italic",
          }}
        >
          <div> {result.releaseDate} </div>
          <div> {result.imDbRating} </div>
          <div> {result.runtimeStr} </div>
          <div style={{ width: "100%", justifyContent: "right" }}>
            <AddToListButton
              movie={{
                id: result.id,
                title: result.title,
              }}
            />
          </div>
        </Box>
      </Box>

      <Divider />
      <Box style={rowStyle}>
        <Heading size="md">Cast:</Heading>
        <div
          style={{
            display: "flex",
            gap: "0.5em",
            flexDirection: "row",
            flexWrap: "wrap",
          }}
        >
          {result.actorList?.map((actor) => {
            return <Tag key={actor.id}>{actor.name}</Tag>;
          })}
        </div>
      </Box>
      <Box>
        <Heading size="md">Similar movies:</Heading>
        <MovieList
          isValidating={false}
          error={null}
          result={result.similars || []}
        />
      </Box>
    </React.Fragment>
  );
}
