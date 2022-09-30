import React, { useMemo, useState } from "react";
import { Switch, Box, Flex, Spacer, Heading } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import { watchListSelector } from "./store/selectors/watchListSelector";
import { WatchListContent } from "./WatchListContent";

export interface IWatchListProps {}

type UIStyle = {
  display: string;
  displayCount: string;
  size: string;
};

export function WatchList(props: IWatchListProps) {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const onSwitchClick = () => {
    setCollapsed(!collapsed);
  };

  const showContent: UIStyle = useMemo(() => {
    return {
      display: collapsed ? "none" : "block",
      displayCount: collapsed ? "block" : "none",
      size: collapsed ? "7em" : "28em",
    };
  }, [collapsed]);

  const watchListCount = useRecoilValue(watchListSelector);

  return (
    <Box
      style={{
        position: "fixed",
        bottom: "3em",
        right: "1em",
        width: showContent.size,
        marginRight: "1em",
      }}
      boxShadow="xs"
      p="6"
      rounded="md"
      bg="gray.200"
    >
      <Flex>
        <Switch size="md" onChange={onSwitchClick} />
        <Spacer />
        <Heading size="md" style={{ display: showContent.displayCount }}>
          {watchListCount}
        </Heading>
      </Flex>
      <Box style={{ display: showContent.display }}>
        <WatchListContent />
      </Box>
    </Box>
  );
}
