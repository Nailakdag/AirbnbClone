import { Box } from "@chakra-ui/react";
import React from "react";
import AirbnbStartButtonToMedium from "../compenents/HostHomes/AirbnbStartButton/AirbnbStartButtonToMedium";
import Aircover from "../compenents/HostHomes/Aircover";
import EstimatedEarnings from "../compenents/HostHomes/EstimatedEarnings/";
import Footer from "../compenents/HostHomes/Footer";
import Header from "../compenents/HostHomes/Header/index";
import Information from "../compenents/HostHomes/Information";
import Questions from "../compenents/HostHomes/Questions.js";
const HostHomes = () => {
  return (
    <Box w="100%" display="flex" flexDirection="column" alignItems="center">
      <Header />
      <EstimatedEarnings />
      <Information />
      <Aircover />
      <Questions />
      <Footer />
      <AirbnbStartButtonToMedium />
    </Box>
  );
};

export default HostHomes;
