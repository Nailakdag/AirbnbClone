import React from "react";
import FilterNavbarItems from "./FilterNavbarItems";
import FilterButton from "./FilterButton";
import { Flex } from "@chakra-ui/react";

const FilterNavbar = () => {
  return (
    <>
      <Flex paddingY="4" paddingX="20" mt="3" align="center">
        <FilterNavbarItems />
        <FilterButton />
      </Flex>
    </>
  );
};

export default FilterNavbar;
