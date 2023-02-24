import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Flex,
  Box,
  ModalHeader,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const ModalBoxXl = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        display={{ base: "none", xl: "block" }}
        onClick={onOpen}
        textDecoration="underline"
        fontSize="16px"
        fontWeight="600"
        color="rgb(34,34,34)"
        bgColor="transparent"
        _hover={{
          bgColor: "transparent",
        }}
      >
        Daha fazla bilgi edinin
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="6xl">
        <ModalOverlay />
        <ModalContent
          paddingTop="5"
          paddingLeft="3"
          bgColor="rgb(242,242,242)"
          borderRadius="20px"
        >
          <ModalHeader>
            <ModalCloseButton left="4" mt="2" />
          </ModalHeader>
          <ModalBody>
            <Flex>
              <Box
                flex="1"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  src="https://a0.muscache.com/im/pictures/995cd7da-9315-4529-b1c8-ebe2b1a05d6b.jpg?im_q=highq&im_w=1200"
                  mt="32"
                  h="23px"
                  w="60%"
                  mb="12"
                ></Image>
                <Text
                  as="h1"
                  fontSize="60px"
                  fontWeight="700"
                  lineHeight="1"
                  textAlign="center"
                  mb="4"
                >
                  Toplam fiyatı önceden görün
                </Text>
                <Text textAlign="center" fontSize="19px">
                  Artık tüm ücretler dahil,vergiler hariç toplam fiyatı önceden
                  görebilirsiniz
                </Text>
                <Button
                  bgColor="blackAlpha.800"
                  color="white"
                  size="lg"
                  p="7"
                  mt="7"
                  fontSize="16px"
                  _hover={{
                    bgColor: "blackAlpha.800",
                    color: "white",
                  }}
                >
                  Şimdi Deneyin
                </Button>
                <Button
                  onClick={onClose}
                  fontSize="16px"
                  textDecoration="underline 2px"
                  mt="3"
                >
                  Belki Daha Sonra
                </Button>
              </Box>

              <Box flex="1">
                <Image
                  src="https://a0.muscache.com/im/pictures/752d2d89-d04b-44b8-af31-d078d8c5dbbe.jpg?im_q=highq&im_w=2560"
                  boxSize="600px"
                ></Image>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBoxXl;
