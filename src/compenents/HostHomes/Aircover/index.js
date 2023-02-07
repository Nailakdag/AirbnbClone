import { Box, Flex, Image, Text, chakra } from "@chakra-ui/react";
import React from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

const Aircover = () => {
  return (
    <Flex
      flexDirection="column"
      mt="60px"
      mb="60px"
      w={{ base: "90%", "2xl": "70%" }}
    >
      <Box
        h="60px"
        w="100%"
        mb={{ base: "5", xl: "10" }}
        display="flex"
        justifyContent={{ base: "flex-start", xl: "center" }}
      >
        <Image
          w="160px"
          src="https://a0.muscache.com/im/pictures/b59dd85e-3b84-4d64-8c11-3bf5f9268e4f.jpg?im_w=480&im_q=highq"
        ></Image>
      </Box>
      <Text
        fontWeight={{ base: "500", md: "600" }}
        fontSize={{ base: "26px", md: "36px", xl: "48px" }}
        mb={{ base: "7", xl: "14" }}
        lineHeight="1"
        textAlign={{ base: "flex-start", xl: "center" }}
      >
        Tepeden tırnağa koruma ile evinizi Airbnb'ye taşıyın
      </Text>

      <Text
        textAlign="right"
        borderBottom="2px solid rgb(225, 225, 225)"
        fontSize={{ base: "14px", md: "22px" }}
        paddingBottom="5"
      >
        <chakra.span px={{ base: "4", md: "8" }}>Airbnb</chakra.span>
        <chakra.span px={{ base: "4", md: "8" }}>Rakipler</chakra.span>
      </Text>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            Misafirlerin Kimliğini Doğrulama
          </Text>
          <Box
            display="flex"
            justifyContent="space-between"
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
          </Box>
        </Box>
        <Text fontSize={{ base: "14px", md: "16px" }} color="#717171">
          Kapsamlı doğrulama sistemimiz, Airbnb'de rezervasyon yapan
          misafirlerin kimliğini doğrulamak için ad, adres, resmî kimlik vb.
          ayrıntıları kontrol eder.
        </Text>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            Rezervasyon taraması
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineClose fontSize="24px" color="red" fontWeight="600" />
          </Box>
        </Box>
        <Text fontSize={{ base: "14px", md: "16px" }} color="#717171">
          Tescilli teknolojimiz her rezervasyonda yüzlerce faktörü analiz eder
          ve çevreye rahatsızlık veren partiler ve mülk hasarı açısından yüksek
          riskli olarak görülen belirli rezervasyonları engeller.
        </Text>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            3 milyon USD değerinde hasar koruması
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineClose fontSize="24px" color="red" fontWeight="600" />
          </Box>
        </Box>
        <Text fontSize={{ base: "14px", md: "16px" }} color="#717171">
          Airbnb, misafirlerin evinize ve eşyalarınıza verdiği hasarı tazmin
          eder ve şu özel korumaları sunar:
        </Text>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            Sanat eserleri ve değerli eşyalar
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineClose fontSize="24px" color="red" fontWeight="600" />
          </Box>
        </Box>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            Arabalar ve tekneler
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineClose fontSize="24px" color="red" fontWeight="600" />
          </Box>
        </Box>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            Evcil hayvan hasarı
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineClose fontSize="24px" color="red" fontWeight="600" />
          </Box>
        </Box>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            Gelir kaybı
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineClose fontSize="24px" color="red" fontWeight="600" />
          </Box>
        </Box>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            Derinlemesine temizlik
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineClose fontSize="24px" color="red" fontWeight="600" />
          </Box>
        </Box>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            1 milyon USD değerinde sorumluluk sigortası
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
          </Box>
        </Box>
        <Text fontSize={{ base: "14px", md: "16px" }} color="#717171">
          Bir misafirin yaralanması veya eşyalarının hasar görmesi ya da
          çalınması gibi nadir görülen durumlara karşı korunursunuz.
        </Text>
      </Box>
      <Box py="7" borderBottom="2px solid rgb(225, 225, 225)">
        <Box
          display="flex"
          w="100%"
          justifyContent="space-between"
          alignItems="center"
          mb="3"
        >
          <Text
            fontSize={{ base: "16px", sm: "18px", md: "22px" }}
            fontWeight="600"
            flex="1"
          >
            24 saat Güvenlik Destek Hattı
          </Text>
          <Box
            paddingX={{ base: "8", md: "50px" }}
            gap={{ base: "50px", md: "110px" }}
            display="flex"
            justifyContent="space-between"
          >
            <AiOutlineCheck fontSize="24px" color="green" fontWeight="600" />
            <AiOutlineClose fontSize="24px" color="red" fontWeight="600" />
          </Box>
        </Box>
        <Text fontSize={{ base: "14px", md: "16px" }} color="#717171">
          Kendinizi güvende hissetmezseniz uygulamamız özel olarak eğitilmiş
          güvenlik destek ekibine gece gündüz tek dokunuşla erişmenizi sağlar.
        </Text>
      </Box>
    </Flex>
  );
};

export default Aircover;
