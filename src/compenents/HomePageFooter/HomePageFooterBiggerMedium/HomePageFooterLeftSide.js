import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomePageFooterLeftSide = () => {
  return (
    <Box display="flex">
      <Text fontWeight="500" fontSize="14px">
        © 2023 Airbnb,Inc
      </Text>
      <Link
        to="/"
        style={{
          marginRight: "10px",
          marginLeft: "10px",
        }}
      >
        <Text
          fontWeight="500"
          fontSize="14px"
          _hover={{
            textDecoration: "underline",
          }}
          color="#222"
        >
          • Gizlilik
        </Text>
      </Link>
      <Link to="/" style={{ marginRight: "10px" }}>
        <Text
          fontWeight="500"
          fontSize="14px"
          _hover={{
            textDecoration: "underline",
          }}
          color="#222222"
        >
          • Şartlar
        </Text>
      </Link>
      <Link to="/">
        <Text
          fontWeight="500"
          fontSize="14px"
          _hover={{
            textDecoration: "underline",
          }}
          color="#222"
        >
          • Site Haritası
        </Text>
      </Link>
    </Box>
  );
};

export default HomePageFooterLeftSide;
