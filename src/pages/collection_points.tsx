import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { MdLocationPin } from "react-icons/md";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Acordion from "../components/CollectionPoints/Acordion";

import {
  centerPoints,
  eastPoints,
  northPoints,
  southPoints,
  westPoints,
} from "../utils";

export default function CollectionPoints() {
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
        <title>Pontos de Coleta</title>
      </Head>

      {isWideVersionLg ? <Header /> : <HeaderMobile />}

      <Flex
        px={isWideVersionMd ? "20" : "7"}
        mt="10"
        justifyContent={isWideVersionMd ? "space-between" : "center"}
        alignItems="center"
        flexDirection={isWideVersionMd ? "row" : "column"}
      >
        <Box>
          <Flex align="center">
            <Heading fontSize={isWideVersionMd ? "34px" : "24px"}>
              Pontos de Coleta
            </Heading>
            <Icon as={MdLocationPin} fontSize="30px" color="green.300" ml="3" />
          </Flex>
          <Text my="5">
            Atualmente, temos pontos de coleta instalados apenas na
            <Text as="span" fontWeight="700">
              {" "}
              Grande São Paulo.
            </Text>{" "}
            <br />
            Selecione abaixo a sua região e confira as lixeiras mais próximas.
          </Text>
          <Acordion title="Centro" items={centerPoints} />
          <Acordion title="Sul" items={southPoints} />
          <Acordion title="Oeste" items={westPoints} />
          <Acordion title="Norte" items={northPoints} />
          <Acordion title="Leste" items={eastPoints} />
        </Box>
        <Image src="/images/terminal.svg" w="300px" mt="70px" />
      </Flex>
      <Image src="/images/footerImg.svg" w="100%" />
    </>
  );
}
