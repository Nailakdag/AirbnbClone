import {
  Box,
  Flex,
  Grid,
  GridItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import React from "react";

const HomePageFooterModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        position="fixed"
        minW="100%"
        py="12"
        bottom="-58px"
        borderRadius="15px"
      >
        <ModalBody>
          <ModalCloseButton p="4" borderRadius="50%" left="5" paddingY="6" />
          <Box w="100%" display="flex" justifyContent="center">
            <Flex
              flexDirection={{ base: "column", xl: "row" }}
              w={{ base: "90%", "2xl": "70%" }}
            >
              <Box
                flex="1"
                borderBottom={{ base: "1px solid rgb(225,225,225)", xl: "0" }}
                py="6"
              >
                <Text fontSize="14px" fontWeight="600" py="2">
                  Destek
                </Text>
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(3,1fr)",
                    xl: "repeat(1,1fr)",
                  }}
                >
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Yardım Merkezi
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    AirCover
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Engelli kişilere destek
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    İptal seçenekleri
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    COVID-19 önlemlerimiz
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Semtinizdeki sorunu bildirin
                  </GridItem>
                </Grid>
              </Box>
              <Box
                flex="1"
                borderBottom={{ base: "1px solid rgb(225,225,225)", xl: "0" }}
                py="6"
              >
                <Text fontSize="14px" py="2" fontWeight="600">
                  Topluluk
                </Text>
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(3,1fr)",
                    xl: "repeat(1,1fr)",
                  }}
                >
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Airbnb.org:afet yardımı
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Ayrımcılıkla mücadele
                  </GridItem>
                </Grid>
              </Box>
              <Box
                borderBottom={{ base: "1px solid rgb(225,225,225)", xl: "0" }}
                py="6"
                flex="1"
              >
                <Text fontSize="14px" py="2" fontWeight="600">
                  Ev sahipliği
                </Text>
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(3,1fr)",
                    xl: "repeat(1,1fr)",
                  }}
                >
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Evinizi Airbnb'ye taşıyın
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Ev sahipleri için AirCover
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Ev sahibi kaynaklarını keşfedin
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Topluluk forumunu ziyaret edin
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Sorumlu ev sahipliği
                  </GridItem>
                </Grid>
              </Box>
              <Box flex="1" py="6">
                <Text fontSize="14px" py="2" fontWeight="600">
                  Airbnb
                </Text>
                <Grid
                  templateColumns={{
                    base: "repeat(1,1fr)",
                    md: "repeat(3,1fr)",
                    xl: "repeat(1,1fr)",
                  }}
                >
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Basın odası
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Yeni özellikler hakkında bilgi
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Kurucularımızdan bir mektup
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Kariyer
                  </GridItem>
                  <GridItem
                    w="100%"
                    fontSize="14px"
                    py={{ base: "1", xl: "2" }}
                  >
                    Yatırımcılar
                  </GridItem>
                </Grid>
              </Box>
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HomePageFooterModal;
