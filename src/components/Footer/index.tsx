import { Flex, Text } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      py="3"
      position="absolute"
      w="100%"
      bottom="0"
      borderTop="1px solid green"
    >
      <Text color="pGray.900">Footer</Text>
    </Flex>
  );
}
