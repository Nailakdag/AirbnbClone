import React from "react";
import FilterNavbarItem from "./FilterNavbarItem";
import FilterList from "./FilterList";
import { Flex } from "@chakra-ui/react";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const FilterNavbarItems = () => {
  return (
    <Flex
      overflowX="scroll"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
      align="center"
      flex="1"
      mr="5"
    >
      {/* <Box position="fixed" display={{ base: "none", md: "block" }}>
        <AiOutlineLeft />
      </Box> */}

      {FilterList.map((data) => {
        return (
          <FilterNavbarItem key={data.id} img={data.img} title={data.title} />
        );
      })}
      {/* <Box display={{ base: "none", md: "block" }}>
        <AiOutlineRight />
      </Box> */}
    </Flex>
  );
};

export default FilterNavbarItems;
