import { Flex } from "@chakra-ui/react";
import React from "react";

import HomePageFooterLeftSide from "./HomePageFooterLeftSide";
import HomePageFooterRightSide from "./HomePageFooterRightSide";

const HomePageFooterBiggerMedium = () => {
  return (
    <>
      <Flex
        position="fixed"
        bottom="0"
        w="100%"
        bgColor={{
          base: "white",
          xl: "rgb(247,247,247)",
        }}
        alignItems="center"
        justifyContent="space-between"
        py={{ base: "14px", lg: "2" }}
        px="20"
        borderTop="1px solid rgb(205,205,205)"
        display={{ base: "none", md: "flex" }}
      >
        <HomePageFooterLeftSide />
        <HomePageFooterRightSide />
      </Flex>
    </>
  );
};

export default HomePageFooterBiggerMedium;
