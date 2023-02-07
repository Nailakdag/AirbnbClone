import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { FaAirbnb } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <Flex h="100%" alignItems="center" flex="1">
      <Link to="/" style={{ display: "flex" }}>
        <FaAirbnb color="red" fontSize="30px" />
        <Text
          color="rgb(226, 47, 86)"
          fontWeight="700"
          fontSize="20px"
          display={{ base: "none", xl: "inline-block" }}
        >
          airbnb
        </Text>
      </Link>
    </Flex>
  );
};

export default HeaderLogo;
