import React from "react";
import {
  Grid,
  GridItem,
  Text,
  Flex,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/fa";
import { IoReorderThreeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Grid
      px="20"
      w="full"
      paddingY="4"
      paddingX="20"
      templateColumns="repeat(3, 1fr)"
      borderBottom="1px solid rgb(225,225,225)"
    >
      <GridItem h="100%">
        <Flex h="100%" alignItems="center">
          <Link to="/" style={{ display: "flex" }}>
            <FaAirbnb color="red" fontSize="30px" />
            <Text color="rgb(226, 47, 86)" fontWeight="700" fontSize="20px">
              airbnb
            </Text>
          </Link>
        </Flex>
      </GridItem>
      <GridItem h="100%">
        <Flex h="100%" alignItems="center" justify="center">
          <ButtonGroup
            border="1px solid rgb(225,225,225)"
            borderRadius="30px"
            w="440px"
            h="48px"
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            px="2"
            transition="box-shadow 500ms ease"
            boxShadow="base"
            _hover={{
              boxShadow: "2xl",
            }}
          >
            <Button
              bgColor="transparent"
              _hover={{ bgColor: "transparent" }}
              borderRight="1px solid rgb(225,225,225)"
              borderRadius="0px"
              fontWeight="600"
              color="rgba(10,10,10,0.7)"
            >
              Herhangi bir yer
            </Button>
            <Button
              bgColor="transparent"
              _hover={{ bgColor: "transparent" }}
              borderRight="1px solid rgb(225,225,225)"
              borderRadius="0px"
              fontWeight="600"
              color="rgba(10,10,10,0.7)"
            >
              Herhangi hafta
            </Button>
            <Button
              bgColor="transparent"
              _hover={{ bgColor: "transparent" }}
              color="rgb(130,130,130)"
              fontWeight="400"
            >
              Misafir ekleyin
            </Button>
            <Flex
              w="32px"
              h="32px"
              alignItems="center"
              justifyContent="center"
              border="1px solid rgb(226, 47, 86)"
              borderRadius="50%"
              bgColor="rgb(226, 47, 86)"
            >
              <BiSearch fontSize="16px" color="white" />
            </Flex>
          </ButtonGroup>
        </Flex>
      </GridItem>
      <GridItem h="100%">
        <Flex h="100%" alignItems="center" justify="flex-end">
          <Button
            bgColor="transparent"
            fontWeight="600"
            color="rgba(10,10,10,0.7)"
            borderRadius="22px"
            height="42px"
            width="180px"
            mr="2"
            _hover={{
              bgColor: "gray.100",
            }}
          >
            Evinizi Airbnb'ye taşıyın
          </Button>
          <Button
            w="77px"
            h="42px"
            p="5px 5px 5px 10px"
            border="1px solid rgb(225,225,225)"
            borderRadius="30px"
            bgColor="transparent"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            _hover={{
              bgColor: "transparent",
            }}
          >
            <IoReorderThreeOutline fontSize="25px" color="rgba(10,10,10,0.8)" />
            <CgProfile fontSize="25px" color="rgba(10,10,10,0.8)" />
          </Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Header;
