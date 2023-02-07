import { Button, Flex, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import HomePageFooterModal from "./HomePageFooterModal";

const HomePageFooterRightSide = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex align="center">
      <Text fontWeight="600" fontSize="14px" color="#222222" mr="3">
        ₺ TRY
      </Text>

      <Button
        bgColor="transparent"
        _hover={{ bgColor: "transparent" }}
        onClick={onOpen}
        textAlign="center"
        mb="2px"
      >
        <Text
          fontWeight="600"
          fontSize="14px"
          _hover={{
            textDecoration: "underline",
          }}
          color="#222222"
          mr="3"
        >
          Destek ve Kaynaklar
        </Text>
        <IoIosArrowUp fontWeight="600" />
      </Button>
      <HomePageFooterModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
};

export default HomePageFooterRightSide;
