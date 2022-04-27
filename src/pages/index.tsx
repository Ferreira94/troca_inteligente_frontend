import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";
import { useRouter } from "next/router";
import { api } from "../services/api";

type LoginData = {
  email: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
  password: yup.string().required("Senha obrigatória!"),
});

export default function Login() {
  const router = useRouter();

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleLogin: SubmitHandler<LoginData> = async (values) => {
    try {
      await api.post("login", {
        email: values.email,
        password: values.password,
      });

      router.push("/dashboard");
    } catch (error) {
      alert("E-mail ou senha inválidos!");
    }
  };

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
          p="8"
          borderRadius={8}
          flexDirection="column"
          align="center"
          border="1px solid green"
          onSubmit={handleSubmit(handleLogin)}
        >
          <Stack spacing="6">
            <Input
              name="email"
              type="email"
              label="E-mail"
              error={errors.email}
              {...register("email")}
            />
            <Input
              name="password"
              type="password"
              label="Senha"
              error={errors.password}
              {...register("password")}
            />
            <Button type="submit" mt="6" colorScheme="green" size="lg">
              Entrar
            </Button>
          </Stack>

          <Link href="/register">
            <Text textDecoration="underline" cursor="pointer" mt="3">
              Cadastro
            </Text>
          </Link>
        </Flex>
      </Flex>
    </>
  );
}
