import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import LoginOrSignUpModal from "../Header/LoginOrSignUpModal";
import { AiOutlineHome } from "react-icons/ai";

const AirbnbStartButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display={{ base: "none", md: "flex" }}
      height="100%"
      alignItems="center"
    >
      <Text fontSize="16px" fontWeight="600" mr="7">
        Evinizi Airbnb'ye taşıyın!
      </Text>
      <Button
        onClick={onOpen}
        color="white"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="48px"
        bgGradient="linear(to-r, rgb(255, 56, 92), rgb(189, 30, 89))"
        px="7"
        borderRadius="10px"
      >
        <AiOutlineHome
          fontSize="24px"
          color="white"
          style={{ marginRight: "3px", marginBottom: "5px" }}
        />
        <Text fontSize="18px" fontWeight="500">
          Airbnb Start
        </Text>
      </Button>
      <LoginOrSignUpModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default AirbnbStartButton;
