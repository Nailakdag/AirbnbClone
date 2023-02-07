import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

const DiscoverButton = () => {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <BiSearch fontSize="25px" />
      <Text fontSize="10px" color="#222" mt="1">
        Keşfedin
      </Text>
    </Box>
  );
};

export default DiscoverButton;
