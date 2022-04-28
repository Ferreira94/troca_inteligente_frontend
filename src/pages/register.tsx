import { useContext } from "react";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { AuthContext } from "../contexts/AuthContext";
import { Input } from "../components/Form/Input";
import { api } from "../services/api";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

type LoginData = {
  email: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório!")
    .min(6, "O nome deve conter no mínimo 6 caracteres!"),
  email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(8, "A senha deve conter no mínimo 6 caracteres!"),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais!"),
});

export default function Register() {
  const { signIn } = useContext(AuthContext);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    const userSign = { email: values.email, password: values.password };
    await api.post("register", {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.passwordConfirmation,
    });
    signIn(userSign);
  };

  return (
    <>
      <Head>
        <title>Cadastro</title>
      </Head>

      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        h="100vh"
      >
        <Text fontSize="24">Cadastro</Text>

        <Flex
          as="form"
          width="100%"
          maxWidth={360}
          p="8"
          borderRadius={8}
          flexDirection="column"
          align="center"
          border="1px solid green"
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Stack spacing="6">
            <Input
              name="name"
              label="Nome Completo"
              error={errors.name}
              {...register("name")}
            />
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
            <Input
              name="passwordConfirmation"
              type="password"
              label="Confirmar Senha"
              error={errors.passwordConfirmation}
              {...register("passwordConfirmation")}
            />
            <Button
              type="submit"
              mt="6"
              colorScheme="green"
              size="lg"
              isLoading={formState.isSubmitting}
            >
              Cadastrar
            </Button>
          </Stack>
        </Flex>

        <Link href="/">
          <Button colorScheme="red" mt="3">
            Voltar
          </Button>
        </Link>
      </Flex>
    </>
  );
}
