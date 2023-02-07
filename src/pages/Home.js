import React from "react";
import Content from "../compenents/Content";
import FilterNavbar from "../compenents/FilterNavbar/index";
import Header from "../compenents/Header/index";
import HomePageFooter from "../compenents/HomePageFooter/index";
import TopInformationModal from "../compenents/TopInformationModal/index";

const Home = () => {
  return (
    <>
      <TopInformationModal />
      <Header />
      <FilterNavbar />
      <Content />
      <HomePageFooter />
    </>
  );
};

export default Home;
