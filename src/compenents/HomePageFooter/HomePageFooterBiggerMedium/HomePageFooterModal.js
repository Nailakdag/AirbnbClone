import {
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
import FooterModalLinks from "./FooterModalLinks";

const HomePageFooterModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        position="fixed"
        minW="100%"
        py="12"
        textAlign="center"
        bottom="-58px"
        borderRadius="15px"
      >
        <ModalBody>
          <ModalCloseButton p="4" borderRadius="50%" left="5" paddingY="6" />
          <Grid
            templateColumns={{ base: "repeat(1,fr)", xl: "repeat(4,1fr)" }}
            px={{ base: "0px", xl: "50px", "2xl": "150px" }}
          >
            <GridItem
              w="100%"
              borderBottom={{
                base: "1px solid #DDD",
                xl: "0",
              }}
              p="3"
            >
              <Flex flexDirection="column" alignItems="flex-start" flex="1">
                <Text as="h3" fontSize="14px" fontWeight="600" mb="15">
                  Destek
                </Text>
                <Flex
                  flexDirection={{ base: "row", xl: "column" }}
                  alignItems="flex-start"
                  flex="1"
                >
                  <FooterModalLinks content="Yardım Merkezi" />
                  <FooterModalLinks content="AirCover" />
                  <FooterModalLinks content="Engelli Kişilere Destek" />
                  <FooterModalLinks content="İptal seçenekleri" />
                  <FooterModalLinks content="COVİD-19 önlemlerimiz" />
                  <FooterModalLinks content="Semtinizdeki sorunu bildirin" />
                </Flex>
              </Flex>
            </GridItem>

            <GridItem
              w="100%"
              borderBottom={{
                base: "1px solid #DDD",
                xl: "0",
              }}
              p="3"
            >
              <Flex flexDirection="column" alignItems="flex-start" flex="1">
                <Text as="h3" fontSize="14px" fontWeight="600" mb="15">
                  Topluluk
                </Text>
                <Flex
                  flexDirection={{ base: "row", xl: "column" }}
                  alignItems="flex-start"
                  flex="1"
                >
                  <FooterModalLinks content=" Airbnb.org: afet yardımı" />
                  <FooterModalLinks content="Ayrımcılıkla mücadele" />
                </Flex>
              </Flex>
            </GridItem>

            <GridItem
              w="100%"
              borderBottom={{
                base: "1px solid #DDD",
                xl: "0",
              }}
              p="3"
            >
              <Flex flexDirection="column" alignItems="flex-start" flex="1">
                <Text as="h3" fontSize="14px" fontWeight="600" mb="15">
                  Ev sahipliği
                </Text>
                <Flex
                  flexDirection={{ base: "row", xl: "column" }}
                  alignItems="flex-start"
                  flex="1"
                >
                  <FooterModalLinks content="Evinizi Airbnb'ye taşıyın" />
                  <FooterModalLinks content="Ev sahipleri için AirCover" />
                  <FooterModalLinks content="Sorumlu ev sahipliği" />
                  <FooterModalLinks content="Ev sahibi kaynaklarını keşfedin" />
                  <FooterModalLinks content="Topluluk forumunu ziyaret edin" />
                  <FooterModalLinks content="Sorumlu ev sahipliği" />
                </Flex>
              </Flex>
            </GridItem>

            <GridItem
              w="100%"
              borderBottom={{
                base: "1px solid #DDD",
                xl: "0",
              }}
              p="3"
            >
              <Flex flexDirection="column" alignItems="flex-start" flex="1">
                <Text as="h3" fontSize="14px" fontWeight="600" mb="15px">
                  Airbnb
                </Text>
                <Flex
                  flexDirection={{ base: "row", xl: "column" }}
                  alignItems="flex-start"
                  flex="1"
                >
                  <FooterModalLinks content="Basın odası" />
                  <FooterModalLinks content="Yeni özellikler hakkında bilgi" />
                  <FooterModalLinks content="Kurucularımızdan bir mektup" />
                  <FooterModalLinks content="Kariyer" />
                  <FooterModalLinks content="Yatırımcılar" />
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default HomePageFooterModal;
