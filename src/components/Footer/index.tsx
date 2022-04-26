import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      py="3"
      bgColor="green.900"
      position="absolute"
      w="100%"
      bottom="0"
    >
      <Text color="pGray.050">Footer</Text>
    </Flex>
  );
}
