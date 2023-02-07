import React from "react";
import FilterNavbarItems from "./FilterNavbarItems";
import FilterButton from "./FilterButton";
import { Flex } from "@chakra-ui/react";

const FilterNavbar = () => {
  return (
    <>
      <Flex
        paddingTop={{ base: "0", md: "4" }}
        paddingX={{ base: "4", md: "10", lg: "20" }}
        mt="3"
        align="center"
        paddingBottom="3"
        borderBottom={{ base: "2px solid rgb(225,225,225)", md: "none" }}
      >
        <FilterNavbarItems />
        <FilterButton />
      </Flex>
    </>
  );
};

export default FilterNavbar;
