import { Box, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";

import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import Content from "../components/Home/Content";

export default function Login() {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Box w="100%" h="100%">
        {isWideVersionLg ? <Header /> : <HeaderMobile />}
        <Content />
      </Box>
    </>
  );
}
