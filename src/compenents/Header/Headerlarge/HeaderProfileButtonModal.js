import {
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoReorderThreeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const HeaderProfileButtonModal = () => {
  return (
    <Menu>
      <MenuButton>
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
      </MenuButton>
      <MenuList p="3" lineHeight="35px">
        <MenuItem fontWeight="600">Kaydolun</MenuItem>
        <MenuItem>Oturum Açın</MenuItem>
        <MenuDivider />
        <MenuItem>
          <Link to="/host/homes">Evinizi AirBnb'ye Taşıyın.</Link>
        </MenuItem>
        <MenuItem>Bir Deneyime Ev Sahipliği Yapın</MenuItem>
        <MenuItem>Yardım</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default HeaderProfileButtonModal;
