import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import { useEffect } from "react";
import { RiExchangeLine, RiSearchLine } from "react-icons/ri";
import Card from "../components/ExchangePoints/Card";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import { api } from "../services/api";

export default function ExchangePoints() {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  useEffect(() => {
    handleCompanies();
  }, []);

  async function handleCompanies() {
    const companies = await api.get("coupons");

    console.log(companies);
  }

  return (
    <>
      <Head>
        <title>Troque seus pontos</title>
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
              Troque seus pontos
            </Heading>
            <Icon
              as={RiExchangeLine}
              fontSize="30px"
              color="primary.100"
              ml="3"
            />
          </Flex>
          <Text my="5">
            Confira nossos parceiros, selecione, efetue a troca de <br /> pontos
            e obtenha o desconto desejado.
          </Text>
          <InputGroup w="330px">
            <Input placeholder="Busque pelo nome do parceiro" />
            <InputRightElement children={<Icon as={RiSearchLine} />} />
          </InputGroup>
          <Flex
            flexWrap="wrap"
            justify={isWideVersionMd ? "space-between" : "center"}
            mt="10"
            gap="5"
          >
            <Card
              image="/images/ifood.svg"
              name="iFood"
              discount="R$ 10,00 de desconto"
              points="10"
            />
            <Card
              image="/images/ifood.svg"
              name="iFood"
              discount="R$ 10,00 de desconto"
              points="10"
            />
            <Card
              image="/images/ifood.svg"
              name="iFood"
              discount="R$ 10,00 de desconto"
              points="10"
            />
            <Card
              image="/images/ifood.svg"
              name="iFood"
              discount="R$ 10,00 de desconto"
              points="10"
            />
            <Card
              image="/images/ifood.svg"
              name="iFood"
              discount="R$ 10,00 de desconto"
              points="10"
            />
            <Card
              image="/images/ifood.svg"
              name="iFood"
              discount="R$ 10,00 de desconto"
              points="10"
            />
            <Card
              image="/images/ifood.svg"
              name="iFood"
              discount="R$ 10,00 de desconto"
              points="10"
            />
            <Card
              image="/images/ifood.svg"
              name="iFood"
              discount="R$ 10,00 de desconto"
              points="10"
            />
          </Flex>
        </Box>
      </Flex>
      <Image src="/images/footerImg.svg" w="100%" />
    </>
  );
}
