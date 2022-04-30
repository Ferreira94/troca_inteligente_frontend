import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import { MdRecycling } from "react-icons/md";
import ListRecyclabes from "../components/recyclables/ListRecyclabes";
import {
  recyclablePlastic,
  recyclableMetals,
  rejectsOne,
  rejectsTwo,
} from "../utils";
import ListRejects from "../components/recyclables/ListRejects";

export default function Recyclables() {
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
        <title>Items recicláveis</title>
      </Head>

      {isWideVersionLg ? <Header /> : <HeaderMobile />}

      <Box
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        h="100vh"
        px={isWideVersionMd ? "20" : "7"}
        mt="10"
      >
        <Flex align="center">
          <Heading fontSize={isWideVersionMd ? "34px" : "24px"}>
            Resíduo Reciclável
          </Heading>
          <Icon as={MdRecycling} fontSize="30px" color="primary.100" ml="3" />
        </Flex>
        {isWideVersionMd ? (
          <>
            <Flex>
              <ListRecyclabes
                title="Plásticos Recicláveis"
                icon="/images/bottle.svg"
                items={recyclablePlastic}
              />
              <Center height="450px" mr="10" mt="10">
                <Divider orientation="vertical" fontWeight="700" />
              </Center>
              <ListRejects
                title="Rejeitos"
                icon="/images/smartphone.svg"
                items={rejectsOne}
              />
            </Flex>
            <Flex>
              <ListRecyclabes
                title="Metais Recicláveis"
                icon="/images/group.svg"
                items={recyclableMetals}
              />
              <Center height="420px" mr="10" mt="10">
                <Divider orientation="vertical" fontWeight="700" />
              </Center>
              <ListRejects
                title="Rejeitos"
                icon="/images/paint.svg"
                items={rejectsTwo}
              />
            </Flex>
          </>
        ) : (
          <Box>
            <ListRecyclabes
              title="Plásticos Recicláveis"
              icon="/images/bottle.svg"
              items={recyclablePlastic}
            />
            <ListRecyclabes
              title="Metais Recicláveis"
              icon="/images/group.svg"
              items={recyclableMetals}
            />
            <ListRejects
              title="Rejeitos"
              icon="/images/smartphone.svg"
              items={rejectsOne}
            />
            <ListRejects
              title="Rejeitos"
              icon="/images/paint.svg"
              items={rejectsTwo}
            />
          </Box>
        )}
      </Box>
    </>
  );
}
