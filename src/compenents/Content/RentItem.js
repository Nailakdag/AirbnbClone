import { Box, GridItem, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const RentItem = ({
  pic,
  city,
  country,
  checkin,
  checkout,
  price,
  distance,
}) => {
  return (
    <GridItem w="100%">
      <Link to="/">
        <Box
          w="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          p="6"
        >
          <Box w="100%" display="flex" justifyContent="center" mb="3">
            <Image src={pic} borderRadius="20px" w="100%" objectFit="contain" />
          </Box>

          <Box w="100%">
            <Text fontWeight={600} size={{ base: "sm" }}>
              {city}-{country}
            </Text>
            <Text>{distance} km uzakta</Text>
            <Text mb="2">
              {checkin}-{checkout}
            </Text>
            <Text fontSize="15px">
              <b>{price}</b> gece
            </Text>
          </Box>
        </Box>
      </Link>
    </GridItem>
  );
};

export default RentItem;
