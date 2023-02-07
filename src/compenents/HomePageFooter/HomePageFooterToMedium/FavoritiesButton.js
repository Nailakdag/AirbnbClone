import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { BiHeart } from "react-icons/bi";

const FavoritiesButton = () => {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <BiHeart fontSize="25px" />
      <Text fontSize="10px" color="#222" mt="1">
        Favoriler
      </Text>
    </Box>
  );
};

export default FavoritiesButton;
