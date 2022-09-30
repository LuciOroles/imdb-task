import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { Recommendations } from "./Recommendations";
import { useWatchlist } from "./useWatchlist";
import { WatchListTable } from "./WatchListTable";

export interface IWatchListContentProps {}

export function WatchListContent(props: IWatchListContentProps) {
  const { watchListItems, removeFromWatchList } = useWatchlist();
  return (
    <Tabs>
      <TabList>
        <Tab key="watchlist">Watchlist</Tab>
        <Tab key="recommend">Recommendations</Tab>
      </TabList>
      <TabPanels>
        <TabPanel key="watchlist">
          <WatchListTable
            watchListItems={watchListItems}
            removeFromWatchList={removeFromWatchList}
          />
        </TabPanel>
        <TabPanel key="recommend">
          <Recommendations />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
