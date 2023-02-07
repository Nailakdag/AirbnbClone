import React from "react";
import { Button, Text, Image, Flex, Box } from "@chakra-ui/react";

const FilterNavbarItem = ({ img, title }) => {
  return (
    <Box flex="1">
      <Button
        p={{ base: "0", md: "2" }}
        h="100%"
        bgColor="transparent"
        borderRadius="0px"
        _hover={{ borderBottom: "2px solid rgb(225,225,225)" }}
        _focus={{ borderBottom: "2px solid black" }}
        mr={{ base: "4", md: "6" }}
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Image
              src={img}
              w={{ base: "20px", md: "24px" }}
              h={{ base: "20px", md: "24px" }}
              mb="2"
            />
          </Box>
          <Text fontWeight="400" color="black" fontSize="12px">
            {title}
          </Text>
        </Flex>
      </Button>
    </Box>
  );
};

export default FilterNavbarItem;
