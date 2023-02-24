import {
  Box,
  Button,
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
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { IoReorderThreeOutline } from "react-icons/io5";

const FilterModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState({ min: 190, max: 4100 });
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={{ base: "3xl", xl: "3xl" }}
    >
      <ModalOverlay />
      <ModalContent overflowY="scroll">
        <ModalHeader>
          <Text textAlign="center" mb="2">
            Filtreler
          </Text>
          <ModalCloseButton left="0" />
          <hr />
        </ModalHeader>

        <ModalBody>
          <Text fontSize="22px" color="#222" mb="2">
            Fiyat Aralığı
          </Text>
          <Text color="#717171" mb="2">
            Ortalama gecelik fiyat şudur. 7836 ₺
          </Text>
          <RangeSlider
            onChangeEnd={(val) => setValue({ min: val[0], max: val[1] })}
            defaultValue={[190, 4100]}
            min={190}
            max={4100}
          >
            <RangeSliderTrack bg="GrayText">
              <RangeSliderFilledTrack bg="GrayText" />
            </RangeSliderTrack>
            <RangeSliderThumb boxSize={7} index={0}>
              <IoReorderThreeOutline />
            </RangeSliderThumb>
            <RangeSliderThumb boxSize={7} index={1}>
              <IoReorderThreeOutline />
            </RangeSliderThumb>
          </RangeSlider>
          <Flex
            justifyContent="center"
            alignItems="center"
            pX="10"
            mt="3"
            mb="3"
          >
            <Box border="1px solid #717171" p="3" borderRadius="20px" mr="2">
              <Text fontSize="11px" color="#717171">
                Minimum Fiyat
              </Text>
              <Input
                border="none"
                variant="unstyled"
                value={value.min}
                textAlign="center"
              />
            </Box>
            -{" "}
            <Box border="1px solid #717171" p="3" borderRadius="20px" ml="2">
              <Text fontSize="11px" color="#717171">
                Maximum Fiyat
              </Text>
              <Input
                border="none"
                variant="unstyled"
                value={value.max}
                textAlign="center"
              />
            </Box>
          </Flex>
          <hr />
          <Box>
            <Text fontWeight={600} fontSize="18px" my="4">
              Odalar ve yataklar
            </Text>
            <Text fontWeight={600} fontSize="16px" my="3">
              Yatak Odaları
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="blackAlpha" variant="solid">
                Tümü
              </Button>
              <Button colorScheme="blackAlpha" variant="outline">
                1
              </Button>
              <Button colorScheme="blackAlpha" variant="ghost">
                2
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                3
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                4
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                5
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                6
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                7
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                8+
              </Button>
            </Stack>
            <Text fontWeight={600} fontSize="16px" my="3">
              Yataklar
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="blackAlpha" variant="solid">
                Tümü
              </Button>
              <Button colorScheme="blackAlpha" variant="outline">
                1
              </Button>
              <Button colorScheme="blackAlpha" variant="ghost">
                2
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                3
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                4
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                5
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                6
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                7
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                8+
              </Button>
            </Stack>
            <Text fontWeight={600} fontSize="16px" my="3">
              Banyolar
            </Text>
            <Stack direction="row" spacing={4} align="center">
              <Button colorScheme="blackAlpha" variant="solid">
                Tümü
              </Button>
              <Button colorScheme="blackAlpha" variant="outline">
                1
              </Button>
              <Button colorScheme="blackAlpha" variant="ghost">
                2
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                3
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                4
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                5
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                6
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                7
              </Button>
              <Button colorScheme="blackAlpha" variant="link">
                8+
              </Button>
            </Stack>
          </Box>
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
