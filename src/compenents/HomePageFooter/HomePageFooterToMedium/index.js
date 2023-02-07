import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import DiscoverButton from "./DiscoverButton";
import FavoritiesButton from "./FavoritiesButton";
import LoginButton from "./LoginButton";

const HomePageFooterToLarge = () => {
  return (
    <Flex
      display={{ base: "flex", md: "none" }}
      position="fixed"
      bottom="0"
      h="65px"
      bgColor="#fff"
      w="100%"
      borderTop="1px solid rgb(225,225,225)"
      justify="center"
    >
      <Box flex="0.6" display="flex" justifyContent="space-around">
        <DiscoverButton />
        <FavoritiesButton />
        <LoginButton />
      </Box>
    </Flex>
  );
};

export default HomePageFooterToLarge;
