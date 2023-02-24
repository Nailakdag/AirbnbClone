import React from "react";
import { Box, Text } from "@chakra-ui/react";
import ModalBoxXl from "./ModalBoxXl";
import ModalToXl from "./ModalToXl";

const ModalButton = () => {
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
        <ModalBoxXl />
        <ModalToXl />
      </Box>
    </>
  );
};

export default ModalButton;
