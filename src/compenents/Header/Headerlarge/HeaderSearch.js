import { Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import React from "react";
import { BiSearch } from "react-icons/bi";

const HeaderSearch = () => {
  return (
    <Flex h="100%" alignItems="center" justify="center" flex="1">
      <ButtonGroup
        border="1px solid rgb(225,225,225)"
        borderRadius="30px"
        h="48px"
        display="flex"
        justifyContent="space-around"
        alignItems="center"
        px="2"
        transition="box-shadow 500ms ease"
        boxShadow="base"
        _hover={{
          boxShadow: "2xl",
        }}
      >
        <Button
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          borderRight="1px solid rgb(225,225,225)"
          borderRadius="0px"
          fontWeight="600"
          color="rgba(10,10,10,0.7)"
          flex="1"
        >
          Herhangi bir yer
        </Button>
        <Button
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          borderRight="1px solid rgb(225,225,225)"
          borderRadius="0px"
          fontWeight="600"
          color="rgba(10,10,10,0.7)"
          flex="1"
        >
          Herhangi hafta
        </Button>
        <Button
          bgColor="transparent"
          _hover={{ bgColor: "transparent" }}
          color="rgb(130,130,130)"
          fontWeight="400"
          flex="1"
        >
          Misafir ekleyin
        </Button>
        <Box
          w="32px"
          h="32px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="1px solid rgb(226, 47, 86)"
          borderRadius="50%"
          bgColor="rgb(226, 47, 86)"
        >
          <BiSearch fontSize="16px" color="white" />
        </Box>
      </ButtonGroup>
    </Flex>
  );
};

export default HeaderSearch;
