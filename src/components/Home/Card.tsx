import { Box, Flex, Text } from "@chakra-ui/react";

interface CardProps {
  text: string;
  number: number;
}

export default function Card({ text, number }: CardProps) {
  return (
    <Box
      w="200px"
      h="200px"
      border="4px solid #fff"
      borderRadius="16px"
      p="3"
      mr="10"
      mb="10"
    >
      <Text color="#fff">{text}</Text>
      <Flex
        w="40px"
        h="40px"
        borderRadius="40px"
        bgColor="#fff"
        align="center"
        justify="center"
        position="relative"
        top="-175px"
        left="-35px"
      >
        <Text color="#00C31F" fontWeight="800" fontSize="28px">
          {number}
        </Text>
      </Flex>
    </Box>
  );
}
