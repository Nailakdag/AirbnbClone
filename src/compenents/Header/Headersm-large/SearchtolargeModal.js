import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import WhereToCard from "./WhereToCard";
import PersonCountCard from "./PersonCountCard";

const SearchToLargeModal = ({ isOpen, onClose }) => {
  const [place, setPlace] = useState(false);
  const [time, setTime] = useState(false);
  const [person, setPerson] = useState(false);

  const [place2, setPlace2] = useState(false);
  const [time2, setTime2] = useState(false);
  const [person2, setPerson2] = useState(false);

  const handleChangePlace2 = () => {
    setPlace2(true);
    setTime2(false);
    setPerson2(false);
  };

  const handleChangeTime2 = () => {
    setPlace2(false);
    setTime2(true);
    setPerson2(false);
  };

  const handleChangePerson2 = () => {
    setPlace2(false);
    setTime2(false);
    setPerson2(true);
  };

  const handleChangePlace = () => {
    setPlace(true);
    setTime(false);
    setPerson(false);
  };

  const handleChangeTime = () => {
    setPlace(false);
    setTime(true);
    setPerson(false);
  };

  const handleChangePerson = () => {
    setPlace(false);
    setTime(false);
    setPerson(true);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="full">
      <ModalOverlay />
      <ModalContent bgColor="rgb(240,240,240)">
        <ModalCloseButton
          left="3"
          p="3"
          borderRadius="50%"
          border="1px solid #717171"
          fontSize="9px"
        />
        <Tabs variant="line" align="center">
          <TabList p="3" mt="5">
            <Tab
              fontSize="16px"
              color="#717171"
              fontWeight="600"
              _selected={{ color: "#222", borderBottom: "2px solid #222" }}
            >
              Konaklama yerleri
            </Tab>
            <Tab
              fontSize="16px"
              color="#717171"
              fontWeight="600"
              _selected={{
                color: "#222",
                borderBottom: "2px solid #222",
              }}
            >
              Deneyimler
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Accordion>
                <AccordionItem
                  bgColor="white"
                  borderRadius="15px"
                  padding="3"
                  mb="3"
                >
                  <AccordionButton
                    onClick={handleChangePlace}
                    display={place ? "none" : "block"}
                  >
                    {!place && (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        flex="1"
                      >
                        <Text>Yer</Text>
                        <Text>Esnek Arama</Text>
                      </Box>
                    )}
                  </AccordionButton>

                  <AccordionPanel>
                    <WhereToCard />
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  bgColor="white"
                  borderRadius="15px"
                  padding="3"
                  mb="3"
                >
                  <AccordionButton onClick={handleChangeTime}>
                    {!time && (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        flex="1"
                      >
                        <Text>Tarih</Text>
                        <Text>Tarih Ekleyin</Text>
                      </Box>
                    )}
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <WhereToCard />
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem bgColor="white" borderRadius="15px" p="3">
                  <AccordionButton
                    onClick={handleChangePerson}
                    display={person ? "none" : "block"}
                  >
                    {!person && (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        flex="1"
                      >
                        <Text>Kişiler</Text>
                        <Text>Misafir Ekleyin</Text>
                      </Box>
                    )}
                  </AccordionButton>

                  <AccordionPanel>
                    <PersonCountCard />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
            <TabPanel>
              <Accordion>
                <AccordionItem
                  bgColor="white"
                  borderRadius="15px"
                  padding="3"
                  mb="3"
                >
                  <AccordionButton
                    onClick={handleChangePlace2}
                    display={place2 ? "none" : "block"}
                  >
                    {!place2 && (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        flex="1"
                      >
                        <Text>Yer</Text>
                        <Text>Esnek Arama</Text>
                      </Box>
                    )}
                  </AccordionButton>

                  <AccordionPanel>
                    <WhereToCard />
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem
                  bgColor="white"
                  borderRadius="15px"
                  padding="3"
                  mb="3"
                >
                  <AccordionButton onClick={handleChangeTime2}>
                    {!time2 && (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        flex="1"
                      >
                        <Text>Tarih</Text>
                        <Text>Tarih Ekleyin</Text>
                      </Box>
                    )}
                  </AccordionButton>

                  <AccordionPanel pb={4}>
                    <WhereToCard />
                  </AccordionPanel>
                </AccordionItem>
                <AccordionItem bgColor="white" borderRadius="15px" p="3">
                  <AccordionButton
                    onClick={handleChangePerson2}
                    display={person2 ? "none" : "block"}
                  >
                    {!person2 && (
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        flex="1"
                      >
                        <Text>Kişiler</Text>
                        <Text>Misafir Ekleyin</Text>
                      </Box>
                    )}
                  </AccordionButton>

                  <AccordionPanel>
                    <PersonCountCard />
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </TabPanel>
          </TabPanels>

          <ModalFooter
            display="flex"
            justifyContent="space-between"
            borderTop="1px solid rgb(230,230,230)"
          >
            <Button
              fontSize="16px"
              fontWeight="600"
              textDecoration="underline 2px"
            >
              Hepsini Temizle
            </Button>
            <Button
              fontSize="16px"
              fontWeight="600"
              colorScheme="pink"
              size="lg"
            >
              <Box flex="1" mr="4">
                <BiSearch fontSize="16px" color="white" mr="3" />
              </Box>
              Arama
            </Button>
          </ModalFooter>
        </Tabs>
      </ModalContent>
    </Modal>
  );
};

export default SearchToLargeModal;
