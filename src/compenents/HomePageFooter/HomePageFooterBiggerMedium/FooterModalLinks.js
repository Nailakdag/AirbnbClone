import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const FooterModalLinks = ({ content }) => {
  return (
    <Link to="/">
      <Text _hover={{ textDecoration: "underline" }} color="#222" mb="15px">
        {content}
      </Text>
    </Link>
  );
};

export default FooterModalLinks;
