import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import Router from "next/router";
import Head from "next/head";
import { useContext, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import HeaderMobile from "../components/HeaderMobile";

export default function Dashboard() {
  const { isAuthorized, user, reload } = useContext(AuthContext);
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    if (isAuthorized !== "true") {
      if (isAuthorized !== "wait") {
        Router.push("/");
      }
    }
  }, []);
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>

      {isWideVersionLg ? <Header /> : <HeaderMobile />}

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
