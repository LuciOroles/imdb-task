import React from "react";
import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import { Spinner, Image } from "@chakra-ui/react";
import { MovieResult, SimilarMovie } from "./types";

import { useNavigate } from "react-router-dom";
import { AddToListButton } from "./AddToListButton";

interface IFilmList<T> {
  isValidating: boolean;
  error: any;
  result: T[];
}

export function MovieList({
  isValidating,
  error,
  result,
}: IFilmList<MovieResult | SimilarMovie>) {
  const navigate = useNavigate();

  const onMovieClick = (id: string) => () => {
    navigate(`/movie/${id}`);
  };

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
    <Box boxShadow="xs" p="6" rounded="md" bg="white">
      {result.map((movie: MovieResult | SimilarMovie, i) => (
        <Flex
          flex={1}
          key={movie.id}
          style={{
            marginBottom: "1em",
          }}
        >
          <Box flex={1}>
            <Heading
              size="md"
              onClick={onMovieClick(movie.id)}
              style={{
                cursor: "pointer",
              }}
            >
              {movie.title}
            </Heading>
            <div style={{ marginBottom: "0.5em" }}>
              <Image
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "5em",
                  borderRadius: "0.25em",
                }}
              />
            </div>
            <Divider />
          </Box>
          <AddToListButton movie={movie as MovieResult} />
        </Flex>
      ))}
    </Box>
  );
}
