import { Box, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { GiShoppingCart } from "react-icons/gi";

interface CardProps {
  image: string;
  name: string;
  discount: string;
  points: string;
}

export default function Card({ image, name, discount, points }: CardProps) {
  return (
    <Box w="250px" bgColor="#fff" boxShadow="md" rounded="md">
      <Image src={image} w="100%" />
      <Box p="3">
        <Text fontWeight="700">{name}</Text>
        <Text>{discount}</Text>
        <Flex align="flex-end" justify="space-between">
          <Text color="primary.300" fontWeight="700">
            {points} pontos
          </Text>
          <Flex
            align="center"
            justify="center"
            w="32px"
            h="32px"
            bgColor="primary.100"
            borderRadius="2"
          >
            <Icon fontSize="28px" as={GiShoppingCart} cursor="pointer" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}
