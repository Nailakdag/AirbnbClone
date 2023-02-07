import { Box, Text } from "@chakra-ui/react";
import React from "react";

const EstimatedEarningsText = () => {
  return (
    <Box mt="6" alignItems="center" display="flex" flexDirection="column">
      <Text fontSize="28px" color="#FF385C" fontWeight="600" textAlign="center">
        Evinizi Airbnb'ye taşıyın.
      </Text>
      <Text fontSize="28px" color="#222" fontWeight="600" textAlign="center">
        Tahmini kazancınız
      </Text>
    </Box>
  );
};

export default EstimatedEarningsText;
