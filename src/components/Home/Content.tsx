import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";

export default function Content() {
  return (
    <Flex width="100%" px="20" mt="20" justify="space-between">
      <Box w="40%">
        <Text fontWeight="700" fontSize="3xl">
          Lorem Ipsum
        </Text>
        <Text my="5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          ullamcorper pretium massa, sit amet sagittis libero blandit a. Mauris
          at nunc a dolor rutrum venenatis. Proin sed est eu odio vestibulum
          mattis. In quis eros tortor. Vivamus et neque vel eros convallis
          pretium vel vitae purus.{" "}
        </Text>
        <Button
          h="36px"
          bgGradient="linear(to-r, teal.500, green.500)"
          _hover={{
            bgGradient: "linear(to-r, green.500, teal.500)",
          }}
        >
          Faça seu cadastro
        </Button>
      </Box>
      <Box w="530px">
        <Image src="/images/home.jpg" alt="Recicláveis" />
      </Box>
    </Flex>
  );
}
