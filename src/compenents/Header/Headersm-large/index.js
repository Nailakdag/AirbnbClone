import { Box, Button, Flex, useDisclosure, chakra } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";
import { CgOptions } from "react-icons/cg";
import SearchToLargeModal from "./SearchtolargeModal";

const SearchToLarge = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        justify="center"
        p="3"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Button
          onClick={onOpen}
          flex="0.9"
          p="3"
          bgColor="white"
          _hover={{ bgColor: "white" }}
          border="1px solid rgb(225,225,225)"
          borderRadius="50px"
          height="100%"
          boxShadow="base"
        >
          <Flex align="center" w="100%">
            <Box
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
              height="100%"
              px="3"
            >
              <BiSearch fontSize="19px" color="222" />
            </Box>

            <Box
              flex="1"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <chakra.span fontWeight="500" fontSize="14px" mb="1" color="#222">
                Herhangi bir yer
              </chakra.span>
              <chakra.span fontWeight="500" fontSize="12px" color="#717171">
                Herhangi hafta. Misafir Ekleyin
              </chakra.span>
            </Box>
            <Box
              display="flex"
              border="1px solid rgb(225,225,225)"
              borderRadius="50%"
              justifyContent="flex-end"
              alignItems="center"
              p="2"
            >
              <CgOptions fontSize="19px" color="222" />
            </Box>
          </Flex>
        </Button>
        <SearchToLargeModal isOpen={isOpen} onClose={onClose} />
      </Flex>
    </>
  );
};
export default SearchToLarge;
