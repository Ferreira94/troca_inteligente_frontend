import { Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      <Header />

      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        h="100vh"
      >
        <Text fontSize="24">Dashboard</Text>
      </Flex>

      <Footer />
    </>
  );
}
