import { useContext, useState } from "react";
import {
  Button,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";
import { Input } from "../Form/Input";

type LoginData = {
  email: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
  password: yup.string().required("Senha obrigatória!"),
});

export default function ButtonLogin() {
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
      setMessageError(error.response.data.error);
    }
  };

  return (
    <>
      <Button
        colorScheme="white"
        color="pGray.800"
        border="1px solid green"
        onClick={onOpen}
        h="36px"
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="300px" p="5">
          <ModalHeader>
            <Text fontSize="16px" color="pgray.200">
              Entre com seu login e senha para conferir as ofertas
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex
              as="form"
              width="100%"
              flexDirection="column"
              align="flex-start"
              onSubmit={handleSubmit(handleLogin)}
            >
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
              <Text fontSize="13px" cursor="pointer" textAlign="right" w="100%">
                Esqueci minha senha
              </Text>
              <Button
                type="submit"
                mt="2"
                colorScheme="green"
                h="36px"
                fontSize="16px"
                isLoading={formState.isSubmitting}
              >
                Entrar
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {messageError && <Text color="red">{messageError}!</Text>}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
