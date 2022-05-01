import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { MdPlayArrow } from "react-icons/md";

import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Card from "../components/Home/Card";
import Content from "../components/Home/Content";

import { questions } from "../utils";

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
        <Flex
          flexDirection="column"
          align={isWideVersionMd ? "flex-start" : "center"}
          px={isWideVersionMd ? "20" : "7"}
          bgColor="#00C31F"
          id="help"
        >
          <Heading
            fontWeight="800"
            fontSize={isWideVersionMd ? "42px" : "30px"}
            color="#fff"
            mb="10"
          >
            Como funciona?
          </Heading>
          <Flex
            justify={isWideVersionMd ? "space-between" : "center"}
            w="100%"
            flexWrap="wrap"
          >
            <Card
              text="Realize o seu cadastro em nosso site. Só assim será possível recuperar pontos ao realizar o descarte nas lixeiras inteligentes."
              number={1}
            />
            <Card
              text="Separe os materiais recicláveis (aceitamos plásticos e alumínio).
              Em seguida dirija-se até um dos pontos de coleta para efetuar o descarte."
              number={2}
            />
            <Card
              text="Localize a lixeira.
              No tablet insira seu CPF. Em seguida, coloque os recicláveis na lixeira. Aguarde o processo de identificação feito pela lixeira e emissão do cupom de desconto.."
              number={3}
            />
            <Card
              text="Com o cupom emitido, você pode utilizar nas lojas participantes do estabelecimento, ou trocar os pontos por cupons de descontos aqui em nosso site.."
              number={4}
            />
          </Flex>
        </Flex>
        <Box px={isWideVersionMd ? "20" : "7"} pt="10">
          <Heading fontWeight="800">
            Nós somos a{" "}
            <Heading as="span" color="#00C31F" fontWeight="800">
              Troca Inteligente
            </Heading>
            , uma circulartech que gerencia os resíduos pós consumo e garante
            benefícios para que você descarte os resíduos corretamente.
          </Heading>
          <Text my="5">
            Atualmente temos 10 pontos de coleta espalhados na Grande São Paulo.
            <br />
            Confira os pontos de coleta clicando no botão abaixo.
          </Text>
          <Link href="/collection_points">
            <Button
              h="36px"
              bgGradient="linear(to-t, primary.200, primary.100)"
              _hover={{
                bgGradient: "linear(to-r, primary.100, primary.200)",
              }}
            >
              Pontos de coleta
            </Button>
          </Link>
        </Box>
        <Box
          px={isWideVersionMd ? "20" : "7"}
          mt="10"
          py="10"
          bgColor="#0099C5"
        >
          <Heading color="#fff" fontSize="24px" fontWeight="800">
            Dúvidas frequentes
          </Heading>
          {questions.map((item) => (
            <Box color="#fff" mt="5">
              <Flex align={isWideVersionMd ? "center" : "flex-start"}>
                <Icon as={MdPlayArrow} />
                <Text>{item.title}</Text>
              </Flex>
              <Text>{item.text}</Text>
            </Box>
          ))}
        </Box>
      </Box>
    </>
  );
}
