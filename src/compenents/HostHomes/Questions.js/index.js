import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Questions = () => {
  return (
    <Box
      w="100%"
      display="flex"
      justifyContent="center"
      bgColor="rgb(245,245,245)"
    >
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        w={{ base: "90%", "2xl": "70%" }}
      >
        <Text
          fontSize={{ base: "26px", md: "36px", xl: "40px" }}
          fontWeight={{ base: "500", md: "600" }}
          flex="1"
          py="12"
          w={{ base: "50%", md: "27%" }}
        >
          Sorularınız Yanıtlandı
        </Text>
        <Box flex="1">
          <Accordion allowToggle>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "16px", md: "22px" }}
                    py="5"
                  >
                    Yerim Airbnb için uygun mu?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="#717171">
                Airbnb misafirleri her türlü yerle ilgilenir. Küçük evler,
                kulübeler, ağaç evler ve daha fazla türde kayıtlarımız var. Boş
                bir oda bile konaklamak için harika bir yer olabilir.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "16px", md: "22px" }}
                    py="5"
                  >
                    Her zaman ev sahipliği yapmak zorunda mıyım?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="#717171">
                Kesinlikle değilsiniz. Takviminizi siz kontrol edersiniz. Yılda
                bir kez, ayda birkaç gece veya daha sık ev sahipliği
                yapabilirsiniz.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "16px", md: "22px" }}
                    py="5"
                  >
                    Misafirlerle ne kadar etkileşim kurmalıyım?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="#717171">
                Bu size bağlıdır. Bazı ev sahipleri, misafirlere yalnızca önemli
                anlarda, örneğin giriş yaptıklarında mesaj göndermeyi tercih
                ederken bazıları da misafirleriyle yüz yüze görüşmekten keyif
                alır. Size ve misafirlerinize uyan bir tarz bulacağınıza eminiz.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "16px", md: "22px" }}
                    py="5"
                  >
                    Mükemmel bir Airbnb ev sahibi olmayla ilgili ipuçları var
                    mı?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="#717171">
                Temel ilkeleri uygulayarak oldukça ilerleme kaydedersiniz.
                Yerinizi temiz tutun, misafirlere hızlıca yanıt verin ve temiz
                havlu gibi gerekli olanakları sağlayın. Bazı ev sahipleri taze
                çiçekler koymak veya keşfedilecek yerel yerlerin bir listesini
                paylaşmak gibi kişisel bir dokunuş eklemek ister ancak bu
                elbette zorunlu değildir.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    textAlign="left"
                    fontSize={{ base: "16px", md: "22px" }}
                    py="5"
                  >
                    Airbnb'nin ücretleri nedir?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} color="#717171">
                Airbnb, ödemenizi aldığınızda rezervasyon ara toplamının
                genellikle %3'ü oranında bir sabit hizmet bedeli tahsil eder.
                Ayrıca rezervasyon sırasında misafirlerden de bir ücret alırız.
                Airbnb, birçok bölgede otomatik olarak sizin adınıza satış ve
                turizm vergileri tahsil edip öder.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default Questions;
