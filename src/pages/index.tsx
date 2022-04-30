import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";

import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Card from "../components/Home/Card";
import Content from "../components/Home/Content";

export default function Login() {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Box w="100%" h="100%">
        {isWideVersionLg ? <Header /> : <HeaderMobile />}
        <Content />

        <Image
          src="/images/waveHome.svg"
          w="100vw"
          mt={isWideVersionLg ? "-25.5%" : "-28.5%"}
        />
        <Box px="20" bgColor="#00C31F">
          <Heading
            fontWeight="800"
            fontSize={isWideVersionMd ? "42px" : "30px"}
            color="#fff"
            mb="10"
          >
            Como funciona?
          </Heading>
          <Flex justify="space-between" w="100%" flexWrap="wrap">
            <Card
              text="Realize o seu cadastro em nosso site. Só assim será possível recuperar pontos ao realizar o descarte nas lixeiras inteligentes."
              number={1}
            />
            <Card
              text="Realize o seu cadastro em nosso site. Só assim será possível recuperar pontos ao realizar o descarte nas lixeiras inteligentes."
              number={1}
            />
            <Card
              text="Realize o seu cadastro em nosso site. Só assim será possível recuperar pontos ao realizar o descarte nas lixeiras inteligentes."
              number={1}
            />
            <Card
              text="Realize o seu cadastro em nosso site. Só assim será possível recuperar pontos ao realizar o descarte nas lixeiras inteligentes."
              number={1}
            />
          </Flex>
        </Box>
      </Box>
    </>
  );
}
