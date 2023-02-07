import {
  Box,
  Flex,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const WhereToCard = () => {
  const [place, setPlace] = useState();
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <Text fontWeight="600" fontSize="22px" float="left" mb="3">
        Nereye?
      </Text>

      <InputGroup mb="5">
        <InputLeftElement children={<BiSearch fontSize="19px" color="222" />} />
        <Input
          placeholder="Gidilecek yerleri arayın"
          border="1px solid rgb(176,176,176)"
          borderRadius="12px"
          color="rgb(34,34,34)"
          height="60px"
          value={place}
          onChange={(e) => {
            setPlace(e.target.value);
          }}
        ></Input>
      </InputGroup>
      <Flex gap="5" overflow="scroll" w="100%">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/pictures/f9ec8a23-ed44-420b-83e5-10ff1f071a13.jpg"></Image>
          </Box>
          <Text>Esnek Arama</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/im/pictures/7b5cf816-6c16-49f8-99e5-cbc4adfd97e2.jpg?im_w=320"></Image>
          </Box>
          <Text>Avrupa</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/im/pictures/ea5598d7-2b07-4ed7-84da-d1eabd9f2714.jpg?im_w=320"></Image>
          </Box>
          <Text>İtalya</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/im/pictures/4e762891-75a3-4fe1-b73a-cd7e673ba915.jpg?im_w=320"></Image>
          </Box>
          <Text>ABD</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/im/pictures/f0ece7c0-d9b2-49d5-bb83-64173d29cbe3.jpg?im_w=320"></Image>
          </Box>
          <Text>Fransa</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/im/pictures/d77de9f5-5318-4571-88c7-e97d2355d20a.jpg?im_w=320"></Image>
          </Box>
          <Text>Güneydoğu Asya</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/im/pictures/1c34ad8e-395a-4b08-bbc0-d7aa1dd0bd69.jpg?im_w=320"></Image>
          </Box>
          <Text>Almanya</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/im/pictures/7e9673a5-4164-4708-a047-8d281b5980e7.jpg?im_w=320"></Image>
          </Box>
          <Text>Afrika</Text>
        </Flex>

        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
        >
          <Box mb="2" boxSize="120px">
            <Image src="https://a0.muscache.com/im/pictures/dbb2b5ef-2efe-4099-81ac-c7b957f384ed.jpg?im_w=320"></Image>
          </Box>
          <Text>Birleşik Krallık</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default WhereToCard;
