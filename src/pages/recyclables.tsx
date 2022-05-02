import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import { MdRecycling } from "react-icons/md";
import ListRecyclabes from "../components/recyclables/ListRecyclabes";
import {
  recyclablePlastic,
  recyclableMetal,
  recyclableGlass,
  recyclablePaper,
  rejectGlass,
  rejectMetal,
  rejectPaper,
  rejectPlastic,
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
        <Text mt="5">
          Você tem dúvida do que é reciclável e o que é rejeito? Confira abaixo
          e descarte da forma correte.
        </Text>
        {isWideVersionMd ? (
          <>
            <Text fontSize="28px" fontWeight="700" color="#AAAAAA" mt="5">
              Plásticos
            </Text>
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
                items={rejectPlastic}
              />
            </Flex>
            <Text fontSize="28px" fontWeight="700" color="#AAAAAA" mt="5">
              Metais
            </Text>
            <Flex>
              <ListRecyclabes
                title="Metais Recicláveis"
                icon="/images/group.svg"
                items={recyclableMetal}
              />
              <Center height="420px" mr="10" mt="10">
                <Divider orientation="vertical" fontWeight="700" />
              </Center>
              <ListRejects
                title="Rejeitos"
                icon="/images/paint.svg"
                items={rejectMetal}
              />
            </Flex>
            <Text fontSize="28px" fontWeight="700" color="#AAAAAA" mt="5">
              Papéis
            </Text>
            <Flex>
              <ListRecyclabes
                title="Metais Recicláveis"
                icon="/images/group.svg"
                items={recyclablePaper}
              />
              <Center height="420px" mr="10" mt="10">
                <Divider orientation="vertical" fontWeight="700" />
              </Center>
              <ListRejects
                title="Rejeitos"
                icon="/images/paint.svg"
                items={rejectPaper}
              />
            </Flex>
            <Text fontSize="28px" fontWeight="700" color="#AAAAAA" mt="5">
              Vidros
            </Text>
            <Flex>
              <ListRecyclabes
                title="Metais Recicláveis"
                icon="/images/group.svg"
                items={recyclableGlass}
              />
              <Center height="420px" mr="10" mt="10">
                <Divider orientation="vertical" fontWeight="700" />
              </Center>
              <ListRejects
                title="Rejeitos"
                icon="/images/paint.svg"
                items={rejectGlass}
              />
            </Flex>
          </>
        ) : (
          <Box>
            <Text fontSize="28px" fontWeight="700" color="#AAAAAA" mt="5">
              Plásticos
            </Text>
            <ListRecyclabes
              title="Plásticos Recicláveis"
              icon="/images/bottle.svg"
              items={recyclablePlastic}
            />
            <ListRejects
              title="Rejeitos"
              icon="/images/smartphone.svg"
              items={rejectPlastic}
            />
            <Text fontSize="28px" fontWeight="700" color="#AAAAAA" mt="5">
              Metais
            </Text>
            <ListRecyclabes
              title="Metais Recicláveis"
              icon="/images/group.svg"
              items={recyclableMetal}
            />
            <ListRejects
              title="Rejeitos"
              icon="/images/paint.svg"
              items={rejectMetal}
            />
            <Text fontSize="28px" fontWeight="700" color="#AAAAAA" mt="5">
              Papéis
            </Text>
            <ListRecyclabes
              title="Plásticos Recicláveis"
              icon="/images/bottle.svg"
              items={recyclablePaper}
            />
            <ListRejects
              title="Rejeitos"
              icon="/images/smartphone.svg"
              items={rejectPaper}
            />
            <Text fontSize="28px" fontWeight="700" color="#AAAAAA" mt="5">
              Vidors
            </Text>
            <ListRecyclabes
              title="Plásticos Recicláveis"
              icon="/images/bottle.svg"
              items={recyclableGlass}
            />
            <ListRejects
              title="Rejeitos"
              icon="/images/smartphone.svg"
              items={rejectGlass}
            />
          </Box>
        )}
      </Box>
    </>
  );
}
