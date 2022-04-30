import { Box, Flex, Text } from "@chakra-ui/react";

interface CardProps {
  text: string;
  number: number;
}

export default function Card({ text, number }: CardProps) {
  return (
    <Box
      minW="200px"
      minH="210px"
      maxW="200px"
      maxH="210px"
      border="4px solid #fff"
      borderRadius="16px"
      p="3"
      mr="10"
      mb="10"
    >
      <Flex
        w="40px"
        h="40px"
        borderRadius="40px"
        bgColor="#fff"
        align="center"
        justify="center"
        position="relative"
        top="-30px"
        left="-30px"
      >
        <Text color="#00C31F" fontWeight="800" fontSize="28px">
          {number}
        </Text>
      </Flex>
      <Text fontWeight="500" fontSize="14px" mt="-30px" color="#fff">
        {text}
      </Text>
    </Box>
  );
}
