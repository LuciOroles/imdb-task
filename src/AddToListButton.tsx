import React from "react";
import { Button } from "@chakra-ui/react";
import { useWatchlist } from "./useWatchlist";
import { Movie } from "./types";
export interface IAddToListButtonProps {
  movie: Movie;
}

export function AddToListButton({ movie }: IAddToListButtonProps) {
  const { addToWatchList, watchListKeysItems } = useWatchlist();

  return (
    <Button
      size="sm"
      onClick={addToWatchList(movie)}
      disabled={watchListKeysItems.has(movie.id)}
      bgColor="green.200"
      marginTop="1em"
    >
      +
    </Button>
  );
}
