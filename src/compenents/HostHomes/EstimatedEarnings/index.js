import { Flex } from "@chakra-ui/react";
import React from "react";
import GoogleMaps from "../Map/GoogleMap";
import EstimatedEarningInformationModal from "./EstimatedEarningInformationModal";
import EstimatedEarningsSlider from "./EstimatedEarningsSlider";
import EstimatedEarningsText from "./EstimatedEarningsText";

const EstimatedEarnings = () => {
  return (
    <Flex w={{ base: "90%", "2xl": "70%" }} flexDirection="column">
      <EstimatedEarningsText />
      <EstimatedEarningsSlider />
      <EstimatedEarningInformationModal />
      <GoogleMaps />
    </Flex>
  );
};

export default EstimatedEarnings;
