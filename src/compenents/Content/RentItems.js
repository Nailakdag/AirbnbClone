import { Grid } from "@chakra-ui/react";
import React from "react";

import ListOfRentItem from "./ListofRentItem";
import RentItem from "./RentItem";

const RentItems = () => {
  return (
    <Grid
      templateColumns={{
        base: "repeat(1,1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3,1fr)",
        xl: "repeat(4,1fr)",
        "2xl": "repeat(6,1fr)",
      }}
      w="100%"
      px={{ base: "0", md: "5", lg: "12" }}
    >
      {ListOfRentItem.map((data, index) => {
        return (
          <RentItem
            key={index}
            pic={data.photo}
            city={data.address.city}
            country={data.address.country}
            checkin={data.checkin}
            checkout={data.checkout}
            price={data.price}
            distance={data.distance}
          />
        );
      })}
    </Grid>
  );
};

export default RentItems;
