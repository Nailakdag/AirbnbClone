import {
  Box,
  Button,
  Checkbox,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Stack,
  Text,
  chakra,
  Flex,
} from "@chakra-ui/react";
import React from "react";

const FilterModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent overflow="scroll">
        <ModalHeader position="fixed">
          <Text as="h1">Filtreler</Text>
          <ModalCloseButton left="0" />
        </ModalHeader>

        <ModalBody>
          <Flex flexDirection="column">
            <Text as="h2">Fiyat Aralığı</Text>
            <Text as="p">Ortalama gecelik fiyat şudur. 7836 ₺</Text>
            <Image src="https://picsum.photos/200"></Image>
            <RangeSlider ariaLabel={["min", "max"]} defaultValue={[30, 80]}>
              <RangeSliderTrack bg="red.100">
                <RangeSliderFilledTrack bg="tomato" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0}>
                <Box color="tomato" />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={6} index={1}>
                <Box color="tomato" />
              </RangeSliderThumb>
            </RangeSlider>
            <Box>
              <Text mb="8px">Min</Text>
              <Input size="sm" />
            </Box>
            <Box>
              <Text mb="8px">Max</Text>
              <Input size="sm" />
            </Box>
            <Text as="h2">Yerin Türü</Text>
            <Stack spacing={[1, 5]} direction={["column", "row"]}>
              <Checkbox value="naruto">
                <chakra.span>Yerin tamamı</chakra.span>
                <br />
                <chakra.span>Tamamen size ait bir yer</chakra.span>
              </Checkbox>
              <Checkbox value="naruto">
                <chakra.span>Özel oda</chakra.span>
                <br />
                <chakra.span>
                  Bir evde ve ya otelde kendi odanızın yanı sıra bazı ortak
                  alanlar
                </chakra.span>
              </Checkbox>
              <Checkbox value="naruto">
                <chakra.span>Müşterek oda</chakra.span>
                <br />
                <chakra.span>
                  Başkalarıyla paylaşılabilecek bir uyku alanı ve ortak alanlar
                </chakra.span>
              </Checkbox>
            </Stack>

            <Box>
              <Text as="h2">Odalar ve yataklar</Text>
              <Text>Yatak Odaları</Text>
              <Stack direction="row" spacing={4} align="center">
                <Button colorScheme="teal" variant="solid">
                  Tümü
                </Button>
                <Button colorScheme="teal" variant="outline">
                  1
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  2
                </Button>
                <Button colorScheme="teal" variant="link">
                  3
                </Button>
                <Button colorScheme="teal" variant="link">
                  4
                </Button>
                <Button colorScheme="teal" variant="link">
                  5
                </Button>
                <Button colorScheme="teal" variant="link">
                  6
                </Button>
                <Button colorScheme="teal" variant="link">
                  7
                </Button>
                <Button colorScheme="teal" variant="link">
                  8+
                </Button>
              </Stack>
              <Text>Yataklar</Text>
              <Stack direction="row" spacing={4} align="center">
                <Button colorScheme="teal" variant="solid">
                  Tümü
                </Button>
                <Button colorScheme="teal" variant="outline">
                  1
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  2
                </Button>
                <Button colorScheme="teal" variant="link">
                  3
                </Button>
                <Button colorScheme="teal" variant="link">
                  4
                </Button>
                <Button colorScheme="teal" variant="link">
                  5
                </Button>
                <Button colorScheme="teal" variant="link">
                  6
                </Button>
                <Button colorScheme="teal" variant="link">
                  7
                </Button>
                <Button colorScheme="teal" variant="link">
                  8+
                </Button>
              </Stack>
              <Text>Banyolar</Text>
              <Stack direction="row" spacing={4} align="center">
                <Button colorScheme="teal" variant="solid">
                  Tümü
                </Button>
                <Button colorScheme="teal" variant="outline">
                  1
                </Button>
                <Button colorScheme="teal" variant="ghost">
                  2
                </Button>
                <Button colorScheme="teal" variant="link">
                  3
                </Button>
                <Button colorScheme="teal" variant="link">
                  4
                </Button>
                <Button colorScheme="teal" variant="link">
                  5
                </Button>
                <Button colorScheme="teal" variant="link">
                  6
                </Button>
                <Button colorScheme="teal" variant="link">
                  7
                </Button>
                <Button colorScheme="teal" variant="link">
                  8+
                </Button>
              </Stack>
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3}>
            Tümünü temizle
          </Button>
          <Button variant="ghost">... evi göster.</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FilterModal;
