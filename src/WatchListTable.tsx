import {
  Button,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { Movie } from "./types";

export interface IWatchListTableProps {
  watchListItems: Movie[];
  removeFromWatchList?: (m: Movie) => void;
}

export function WatchListTable({
  watchListItems,
  removeFromWatchList,
}: IWatchListTableProps) {
  return (
    <TableContainer style={{ maxHeight: "300px", overflow: "scroll" }}>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>Pos</Th>
            <Th>Title</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {(watchListItems || []).map((movie, idx) => {
            return (
              <Tr key={movie.id}>
                <Td>{idx + 1}</Td>
                <Td
                  style={{
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    maxWidth: "15em",
                    textOverflow: "ellipsis",
                  }}
                >
                  {movie.title}
                </Td>
                <Td>
                  {removeFromWatchList && (
                    <Button
                      type="button"
                      onClick={removeFromWatchList(movie) as any}
                    >
                      &times;
                    </Button>
                  )}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
