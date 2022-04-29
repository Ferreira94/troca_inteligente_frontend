import { useContext, useState } from "react";
import {
  Button,
  Flex,
  Stack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";
import { AuthContext } from "../contexts/AuthContext";

type LoginData = {
  email: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
  password: yup.string().required("Senha obrigatória!"),
});

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [messageError, setMessageError] = useState("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleLogin: SubmitHandler<LoginData> = async (values) => {
    try {
      await signIn(values);
    } catch (error) {
      onOpen();
      setMessageError(error.response.data.error);
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
            <Button
              type="submit"
              mt="6"
              colorScheme="green"
              size="lg"
              isLoading={formState.isSubmitting}
            >
              Entrar
            </Button>
          </Stack>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent w="60">
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>{messageError}</ModalBody>

              <ModalFooter></ModalFooter>
            </ModalContent>
          </Modal>

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
