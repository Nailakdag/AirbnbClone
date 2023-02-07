import { Flex } from "@chakra-ui/react";
import React from "react";
import AirbnbStartButton from "../AirbnbStartButton/AirbnbStartButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <Flex
      h={{ base: "64px", md: "80px" }}
      alignItems="center"
      justifyContent="space-between"
      position="sticky"
      top="0"
      bgColor="white"
      w={{ base: "90%", "2xl": "70%" }}
    >
      <Logo />
      <AirbnbStartButton />
    </Flex>
  );
};

export default Header;
