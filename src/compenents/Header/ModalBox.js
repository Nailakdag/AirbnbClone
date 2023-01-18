import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Badge,
  Text,
  Flex,
} from "@chakra-ui/react";

const ModalBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      {" "}
      <Button
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bgColor="white">
          <ModalCloseButton left="0" />
          <Flex minWidth="440px" textAlign="center">
            {" "}
            <ModalHeader>
              <Badge bgColor="transparent" border="1px solid" w="100px">
                <Text>ERKEN ERİŞİM</Text>
              </Badge>
            </ModalHeader>
          </Flex>

          <ModalBody></ModalBody>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalBox;
