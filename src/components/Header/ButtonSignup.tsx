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
import { api } from "../../services/api";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserFormSchema = yup.object().shape({
  email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
  password: yup.string().required("Senha obrigatória!"),
});

export default function ButtonSignup() {
  const { signIn } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [messageError, setMessageError] = useState("");

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    try {
      const userSign = { email: values.email, password: values.password };
      await api.post("register", {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.passwordConfirmation,
      });
      signIn(userSign);
    } catch (error) {
      onOpen();
      setMessageError(error.response.data.error);
    }
  };

  return (
    <>
      <Button
        colorScheme="white"
        bgGradient="linear(to-r, teal.500, green.500)"
        _hover={{
          bgGradient: "linear(to-r, green.500, teal.500)",
        }}
        onClick={onOpen}
        h="36px"
        ml="5"
      >
        Quero me cadastrar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="300px" p="5">
          <ModalHeader>
            <Text fontSize="16px" color="pgray.200">
              Preencha os dados abaixo para realizar seu cadastro
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex
              as="form"
              width="100%"
              flexDirection="column"
              align="flex-start"
              onSubmit={handleSubmit(handleCreateUser)}
            >
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
                mt="2"
                colorScheme="green"
                h="36px"
                fontSize="16px"
                isLoading={formState.isSubmitting}
              >
                Cadastrar
              </Button>
            </Flex>
          </ModalBody>
          <ModalFooter>
            {messageError && (
              <Text color="red" m="0 auto">
                {messageError}!
              </Text>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}