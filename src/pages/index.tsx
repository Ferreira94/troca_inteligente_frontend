import { Button, Flex, Input, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <Flex w="100vw" h="100vh" align="center" justify="center">
        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          bg="green.900"
          p="8"
          borderRadius={8}
          flexDirection="column"
          onSubmit={() => {}}
        >
          <Stack spacing="6">
            <Input name="email" type="email" placeholder="E-mail" />
            <Input name="password" type="password" placeholder="Senha" />
          </Stack>

          <Link href="/dashboard" passHref>
            <Button type="submit" mt="6" colorScheme="green" size="lg">
              Entrar
            </Button>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
