import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";

const LoginButton = () => {
  return (
    <Box
      flex="1"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <CgProfile fontSize="25px" />
      <Text fontSize="10px" color="#222" mt="1">
        Giriş Yap
      </Text>
    </Box>
  );
};

export default LoginButton;
