import { Flex } from "@chakra-ui/react";
import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderRightSide from "./HeaderRightSide";
import HeaderSearch from "./HeaderSearch";

const HeaderLarge = () => {
  return (
    <Flex
      px={{ md: "4", lg: "20" }}
      w="100%"
      paddingY="4"
      borderBottom="1px solid rgb(225,225,225)"
      display={{ base: "none", md: "flex" }}
      alignItems="center"
      h="80px"
    >
      <HeaderLogo />
      <HeaderSearch />
      <HeaderRightSide />
    </Flex>
  );
};

export default HeaderLarge;
