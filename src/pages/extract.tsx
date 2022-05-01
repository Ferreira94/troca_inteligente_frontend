import {
  Box,
  Flex,
  Heading,
  Icon,
  Select,
  Text,
  useBreakpointValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
} from "@chakra-ui/react";
import Head from "next/head";
import Router from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiFillFileText } from "react-icons/ai";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import { AuthContext } from "../contexts/AuthContext";
import { api } from "../services/api";
import { selectDate } from "../utils";

interface ExtractProps {
  name: string;
  pointsEarned: number;
  date: Date;
  quantity: number;
}

interface ExtractsProps {
  dump: {
    name: string;
  };
  name: string;
  pointsEarned: number;
  date: string;
  quantity: number;
}

export default function Extract() {
  const { user, isAuthorized } = useContext(AuthContext);
  const [extracts, setExtracts] = useState<ExtractsProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });
  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  useEffect(() => {
    if (isAuthorized !== "true") {
      if (isAuthorized !== "wait") {
        Router.push("/");
      }
    }
  }, []);

  useEffect(() => {
    handleCompanies();
  }, []);

  async function handleCompanies() {
    if (isAuthorized !== "true") {
      return;
    }

    const response = await api.get("extract", {
      headers: { "auth-token": user.token },
    });

    setExtracts(response.data);
    console.log(response);
    setIsLoading(false);
  }
  return (
    <>
      <Head>
        <title>Extrato</title>
      </Head>

      {isWideVersionLg ? <Header /> : <HeaderMobile />}

      <Flex
        px={isWideVersionMd ? "20" : "7"}
        mt="10"
        justifyContent={isWideVersionMd ? "space-between" : "center"}
        alignItems="center"
        flexDirection={isWideVersionMd ? "row" : "column"}
      >
        {!isLoading ? (
          <Box w="100%">
            <Flex align="center">
              <Heading fontSize={isWideVersionMd ? "34px" : "24px"}>
                Extrato
              </Heading>
              <Icon
                as={AiFillFileText}
                fontSize="30px"
                color="primary.100"
                ml="3"
              />
            </Flex>
            <Text my="5">
              Confira seu extrato atualizado e pontuações. Selecione abaixo o
              período que deseja consultar.
            </Text>
            <Select w="180px" my="5" borderColor="primary.100">
              {selectDate.map((item) => (
                <option value={item.date}>{item.date}</option>
              ))}
            </Select>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Descrição</Th>
                    <Th>Material</Th>
                    <Th>Quantidade (kg)</Th>
                    <Th>Pontuação</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {extracts.map((item) => (
                    <Tr>
                      <>
                        <Td>
                          <Text>
                            {new Date(item.date).toLocaleDateString("pt-BR", {
                              month: "long",
                              year: "numeric",
                            })}
                          </Text>
                          <Text color="primary.100" fontWeight="700">
                            {item.dump.name}
                          </Text>
                        </Td>
                        <Td>{item.name}</Td>
                        <Td>{item.quantity} Gr</Td>
                        <Td>+ {item.pointsEarned} pontos</Td>
                      </>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        ) : (
          <Flex justify="center" align="center" w="100%" h="80vh">
            <Spinner color="primary.100" />
          </Flex>
        )}
      </Flex>
    </>
  );
}
