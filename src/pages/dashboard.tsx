import { Flex, Text } from "@chakra-ui/react";
import Router from "next/router";
import Head from "next/head";
import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
  }, []);
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
