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
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const ModalToXl = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        display={{ base: "block", xl: "none" }}
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
      <Modal isOpen={isOpen} onClose={onClose} size="3xl" isCentered>
        <ModalOverlay />
        <ModalContent
          bgColor="white"
          borderRadius="20px"
          h="90%"
          w="100%"
          overflow="scroll"
        >
          <ModalBody>
            <Flex flexDirection="column" w="100%" alignItems="center">
              <Box
                display="flex"
                justifyContent="center"
                flex="1"
                height="100%"
                bgColor="rgb(245,245,245)"
                mb="10"
              >
                <ModalCloseButton left="4" mt="2" />
                <Image
                  w="70%"
                  src="https://a0.muscache.com/im/pictures/50b7ebd1-5da0-429a-8f01-fce69b5b6143.jpg?im_q=highq&im_w=720"
                ></Image>
              </Box>
              <Box
                flex="1"
                display="flex"
                flexDirection="column"
                alignItems="center"
              >
                <Image
                  mb="3"
                  w="40%"
                  src="https://a0.muscache.com/im/pictures/995cd7da-9315-4529-b1c8-ebe2b1a05d6b.jpg?im_q=highq&im_w=1200"
                ></Image>
                <Text
                  w="50%"
                  as="h1"
                  fontSize="40px"
                  fontWeight="700"
                  lineHeight="1"
                  textAlign="center"
                  mb="4"
                >
                  Toplam fiyat?? ??nceden g??r??n
                </Text>
                <Text textAlign="center" fontSize="16px" w="50%">
                  Art??k t??m ??cretler dahil,vergiler hari?? toplam fiyat?? ??nceden
                  g??rebilirsiniz
                </Text>
                <Button
                  mt="8"
                  mb="4"
                  bgColor="blackAlpha.800"
                  color="white"
                  fontSize="17px"
                  w="50%"
                  _hover={{
                    bgColor: "blackAlpha.800",
                    color: "white",
                  }}
                  size="lg"
                >
                  ??imdi Deneyin
                </Button>
                <Button
                  onClick={onClose}
                  fontSize="14px"
                  textDecoration="underline 2px"
                  bgColor="white"
                >
                  Belki Daha Sonra
                </Button>
              </Box>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalToXl;
