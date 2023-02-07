import {
  Box,
  chakra,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EstimatedEarningsSlider = () => {
  const avarage = 1091;
  const [day, setDay] = useState(7);
  const [totalList, setTotalList] = useState([7, 6, 3, 7]);

  useEffect(() => {
    const total = avarage * day;
    setTotalList(
      String(total)
        .split("")
        .map((num) => {
          return Number(num);
        })
    );
  }, [day]);
  return (
    <Box>
      <Text>
        {totalList.map((num, index) => {
          return (
            <chakra.span key={index}>
              <motion.div
                initial={{ x: 0, y: 10 }}
                animate={{
                  x: 0,
                  y: 0,
                }}
                transition={{ ease: "easeOut", duration: 0.3 }}
                style={{ float: "left" }}
              >
                {num}
              </motion.div>
            </chakra.span>
          );
        })}{" "}
        ₺
      </Text>

      <Text>
        {day} gece
        <chakra.span>(tahmini olarak gecelik 1.091 ₺ üzerinden)</chakra.span>
      </Text>
      <Slider
        aria-label="slider-ex-2"
        colorScheme="pink"
        defaultValue={7}
        value={day}
        onChange={(val) => setDay(val)}
        min={1}
        max={30}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
  );
};

export default EstimatedEarningsSlider;
