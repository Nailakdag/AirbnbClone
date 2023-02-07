import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const Information = () => {
  return (
    <Flex
      w={{ base: "100%", "2xl": "70%" }}
      flexDirection="column"
      mt="24"
      alignItems="center"
    >
      <Text
        fontSize={{ base: "26px", md: "36px", xl: "48px" }}
        fontWeight="600"
        textAlign={{ base: "flex-start", xl: "center" }}
        mb="8"
        color="#222"
        lineHeight="1.2"
        w={{ base: "90%", "2xl": "70%" }}
      >
        Airbnb Start ile evinizi kolayca Airbnb'ye taşıyın
      </Text>
      <Box w={{ base: "100%", "2xl": "70%" }} mb="10">
        <Image
          w="100%"
          display={{ base: "block", md: "none" }}
          src="https://a0.muscache.com/im/pictures/d888a8ef-ef5a-4da3-b608-06284bba4793.jpg?im_w=720&im_q=highq"
        ></Image>
        <Image
          display={{ base: "none", md: "block" }}
          src="https://a0.muscache.com/im/pictures/626d4ea7-0749-48a4-9f91-5c4e9d6af755.jpg?im_w=2560&im_q=highq"
        ></Image>
      </Box>
      <Box
        display="flex"
        flexDirection={{ base: "column", xl: "row" }}
        gap="10"
        w={{ base: "90%", "2xl": "70%" }}
      >
        <Box flex="1">
          <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="600" mb="3">
            Süper Ev Sahibinden bire bir rehberlik
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} color="#717171">
            Sizi bölgenizdeki bir Süper Ev Sahibi ile eşleştireceğiz. Bu kişi,
            ilk sorunuzdan ilk misafirinize kadar telefonla, görüntülü arama
            veya sohbet yoluyla size rehberlik edecek.
          </Text>
        </Box>
        <Box flex="1">
          <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="600" mb="3">
            İlk rezervasyonunuz için deneyimli bir misafir
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} color="#717171">
            İlk rezervasyonunuz için Airbnb'de en az üç konaklaması ve iyi bir
            geçmişi olan deneyimli bir misafiri ağırlamayı seçebilirsiniz.
          </Text>
        </Box>
        <Box flex="1">
          <Text fontSize={{ base: "16px", md: "18px" }} fontWeight="600" mb="3">
            Airbnb'den özel destek
          </Text>
          <Text fontSize={{ base: "14px", md: "16px" }} color="#717171">
            Yeni ev sahipleri, hesapla ilgili sorunlardan faturalandırma
            desteğine kadar her konuda size yardımcı olabilecek, özel olarak
            eğitilmiş Topluluk Desteği temsilcilerine tek dokunuşla erişebilir.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default Information;
