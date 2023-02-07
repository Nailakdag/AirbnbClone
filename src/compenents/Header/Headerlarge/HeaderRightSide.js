import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import HeaderProfileButtonModal from "./HeaderProfileButtonModal";
import { Link } from "react-router-dom";

const HeaderRightSide = () => {
  return (
    <Flex h="100%" alignItems="center" justify="flex-end" flex="1">
      <Link to="host/homes">
        <Button
          bgColor="transparent"
          fontWeight="600"
          color="rgba(10,10,10,0.7)"
          borderRadius="22px"
          height="42px"
          mr="2"
          _hover={{
            bgColor: "gray.100",
          }}
        >
          Evinizi Airbnb'ye taşıyın
        </Button>
      </Link>
      <HeaderProfileButtonModal />
    </Flex>
  );
};

export default HeaderRightSide;
