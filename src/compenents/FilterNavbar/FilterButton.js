import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import FilterModal from "./FilterModal";
import { CgOptions } from "react-icons/cg";

const FilterButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box display={{ base: "none", md: "block" }}>
      <Button
        onClick={onOpen}
        bgColor="transparent"
        paddingX="4"
        paddingY="5"
        border="1px solid rgb(225,225,225)"
        borderRadius="10px"
        _hover={{
          bgColor: "transparent",
        }}
      >
        <CgOptions style={{ marginRight: "4px" }} />
        <Text fontWeight={500} fontSize="12px">
          Filtreler
        </Text>
      </Button>
      <FilterModal onOpen={onOpen} isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default FilterButton;
