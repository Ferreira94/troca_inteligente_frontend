import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

export default function Content() {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      width="100%"
      px="20"
      mt="10"
      flexDirection={isWideVersionMd ? "row" : "column-reverse"}
      justify={isWideVersionMd ? "space-between" : "flex-start"}
      align={isWideVersionLg ? "flex-start" : "flex-start"}
    >
      <Box
        w={isWideVersionMd ? "40%" : "100%"}
        mt={isWideVersionMd ? "0" : "10"}
      >
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
          bgGradient="linear(to-t, primary.200, primary.100)"
          _hover={{
            bgGradient: "linear(to-r, primary.100, primary.200)",
          }}
        >
          Faça seu cadastro
        </Button>
      </Box>
      <Box w={isWideVersionMd ? "50%" : "100%"}>
        <Image src="/images/home.jpg" alt="Recicláveis" />
      </Box>
    </Flex>
  );
}
