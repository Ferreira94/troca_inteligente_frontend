import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";

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
      px={isWideVersionMd ? "20" : "7"}
      mt="10"
      flexDirection={isWideVersionLg ? "row" : "column"}
      justify={isWideVersionMd ? "space-between" : "flex-start"}
      align={isWideVersionLg ? "flex-start" : "center"}
    >
      <Box
        w={isWideVersionMd ? "450px" : "330px"}
        mb={isWideVersionMd ? "0" : "10"}
        zIndex="5"
      >
        <Text fontWeight="800" fontSize={isWideVersionMd ? "42px" : "30px"}>
          Você ajuda o meio <br />
          ambiente, a gente te <br />
          <Text
            fontWeight="800"
            fontSize={isWideVersionMd ? "42px" : "30px"}
            color="green.300"
            as="span"
          >
            recompensa{" "}
          </Text>
          por isso!
        </Text>
        <Text
          my="5"
          fontWeight="500"
          fontSize={isWideVersionMd ? "20px" : "18px"}
        >
          Aqui sua reciclagem, valem pontos! Esses pontos você pode trocar por
          descontos ou produtos de nossas lojas conveniadas...
        </Text>
        <Link href="#help">
          <Button
            h="36px"
            mb={isWideVersionLg ? "0" : "5"}
            bgGradient="linear(to-t, blue.300, green.300)"
            _hover={{
              bgGradient: "linear(to-r, green.300, blue.300)",
            }}
          >
            Confira como funciona
          </Button>
        </Link>
      </Box>
      <Box w={isWideVersionLg ? "50%" : "70%"}>
        <Image mt="-8" src="/images/imgHome.svg" alt="Imagem da Home" />
      </Box>
    </Flex>
  );
}
