import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const PersonCountCard = () => {
  const [personCounts, setPersonCounts] = useState({
    numberOfAdult: 0,
    numberOfChild: 0,
    numberOfBaby: 0,
    numberOfAnimal: 0,
  });

  const handleClick = (e, type) => {
    setPersonCounts({
      ...personCounts,
      [e.target.name]:
        type === "increment"
          ? personCounts[e.target.name] + 1
          : personCounts[e.target.name] - 1,
    });
  };

  return (
    <Flex flexDirection="column" w="100%" alignItems="flex-start">
      <Text fontSize="22px" fontWeight="600">
        Kimler Geliyor
      </Text>
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid rgb(225,225,225)"
        py="4"
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Text fontSize="16px" fontWeight="600">
            Yetişkinler
          </Text>
          <Text fontSize="14px" color="#717171">
            13 yaş ve üzeri
          </Text>
        </Box>
        <Box>
          <Button
            name="numberOfAdult"
            bgColor="white"
            border="1px solid rgb(176,176,176)"
            borderRadius="50%"
            onClick={(e) => handleClick(e, "decrement")}
            mr="3"
          >
            -
          </Button>
          {personCounts.numberOfAdult}
          <Button
            name="numberOfAdult"
            bgColor="white"
            border="1px solid rgb(176,176,176)"
            borderRadius="50%"
            onClick={(e) => handleClick(e, "increment")}
            ml="3"
          >
            +
          </Button>
        </Box>
      </Flex>
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid rgb(225,225,225)"
        py="4"
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Text fontSize="16px" fontWeight="600">
            Çocuklar
          </Text>
          <Text fontSize="14px" color="#717171">
            2-12 yaş
          </Text>
        </Box>
        <Box>
          <Button
            name="numberOfChild"
            bgColor="white"
            border="1px solid rgb(176,176,176)"
            borderRadius="50%"
            onClick={(e) => handleClick(e, "decrement")}
            mr="3"
          >
            -
          </Button>
          {personCounts.numberOfChild}
          <Button
            name="numberOfChild"
            bgColor="white"
            border="1px solid rgb(176,176,176)"
            borderRadius="50%"
            onClick={(e) => handleClick(e, "increment")}
            ml="3"
          >
            +
          </Button>
        </Box>
      </Flex>
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid rgb(225,225,225)"
        py="4"
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Text fontSize="16px" fontWeight="600">
            Bebekler
          </Text>
          <Text fontSize="14px" color="#717171">
            2 yaş ve altı
          </Text>
        </Box>
        <Box>
          <Button
            name="numberOfBaby"
            bgColor="white"
            border="1px solid rgb(176,176,176)"
            borderRadius="50%"
            onClick={(e) => handleClick(e, "decrement")}
            mr="3"
          >
            -
          </Button>
          {personCounts.numberOfBaby}
          <Button
            name="numberOfBaby"
            bgColor="white"
            border="1px solid rgb(176,176,176)"
            borderRadius="50%"
            onClick={(e) => handleClick(e, "increment")}
            ml="3"
          >
            +
          </Button>
        </Box>
      </Flex>
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid rgb(225,225,225)"
        py="4"
      >
        <Box display="flex" flexDirection="column" alignItems="flex-start">
          <Text fontSize="16px" fontWeight="600">
            Evcil Hayvanlar
          </Text>
        </Box>
        <Box>
          <Button
            name="numberOfAnimal"
            bgColor="white"
            border="1px solid rgb(176,176,176)"
            borderRadius="50%"
            onClick={(e) => handleClick(e, "decrement")}
            mr="3"
          >
            -
          </Button>
          {personCounts.numberOfAnimal}
          <Button
            name="numberOfAnimal"
            bgColor="white"
            border="1px solid rgb(176,176,176)"
            borderRadius="50%"
            onClick={(e) => handleClick(e, "increment")}
            ml="3"
          >
            +
          </Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PersonCountCard;
