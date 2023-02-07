import React from "react";
import { Box, Button, Text, useDisclosure } from "@chakra-ui/react";
import ModalBoxXl from "./ModalBoxXl";
import ModalToXl from "./ModalToXl";

const ModalButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        display={{ base: "none", md: "flex" }}
        bgColor="rgb(247,247,247)"
        w="full"
        p="4"
        justifyContent="center"
        alignItems="center"
        fontSize="16px"
        fontWeight="600"
        color="rgb(34,34,34)"
        boxShadow="inset 0 -1px 0 rgb(0 0 0 / 6%)"
      >
        <Text>Toplam fiyatı önceden göster.</Text>
        <Button
          onClick={onOpen}
          textDecoration="underline"
          fontSize="16px"
          fontWeight="600"
          color="rgb(34,34,34)"
          bgColor="transparent"
          _hover={{
            bgColor: "transparent",
          }}
        >
          Daha fazla bilgi edinin
        </Button>
        <ModalBoxXl isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
        <ModalToXl isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      </Box>
    </>
  );
};

export default ModalButton;
