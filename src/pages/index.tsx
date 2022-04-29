import { Box } from "@chakra-ui/react";
import Head from "next/head";

import Header from "../components/Header";
import Content from "../components/Home/Content";

export default function Login() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Box w="100%" h="100%">
        <Header />
        <Content />
      </Box>
    </>
  );
}
