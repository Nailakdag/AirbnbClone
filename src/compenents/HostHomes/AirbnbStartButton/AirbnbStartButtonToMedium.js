import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import LoginOrSignUpModal from "../Header/LoginOrSignUpModal";
import { AiOutlineHome } from "react-icons/ai";

const AirbnbStartButtonToMedium = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      display={{ base: "flex", md: "none" }}
      flexDirection="column"
      bgColor="white"
      position="sticky"
      bottom="0"
      height="100px"
      w="100%"
      paddingTop="3px"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="16px" fontWeight="600" textAlign="center" mb="3">
        Evinizi Airbnb'ye taşıyın!
      </Text>
      <Button
        width="90%"
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

export default AirbnbStartButtonToMedium;
