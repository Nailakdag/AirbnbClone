import React from "react";
import FilterNavbarItem from "./FilterNavbarItem";
import FilterList from "./FilterList";
import { Box, Flex } from "@chakra-ui/react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const FilterNavbarItems = () => {
  return (
    <Flex
      overflowX="scroll"
      paddingY="4"
      sx={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Box>
        <AiOutlineLeft />
      </Box>

      {FilterList.map((data) => {
        return <FilterNavbarItem img={data.img} title={data.title} />;
      })}
      <Box>
        <AiOutlineRight />
      </Box>
    </Flex>
  );
};

export default FilterNavbarItems;
