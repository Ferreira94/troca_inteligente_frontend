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
import { CaretRight } from "phosphor-react";

type CreateUserFormData = {
  name: string;
  cpf: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().required("Nome obrigatório!"),
  email: yup.string().required("E-mail obrigatório!").email("E-mail inválido!"),
  cpf: yup.string().required("CPF obrigatório!"),
  password: yup
    .string()
    .required("Senha obrigatória!")
    .min(8, "A senha deve conter no mínimo 8 caracteres!"),
  passwordConfirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "As senhas precisam ser iguais!"),
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
      setMessageError("");
      const userSign = { email: values.email, password: values.password };
      await api.post("auth/register", {
        name: values.name,
        cpf: values.cpf,
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
        bgColor="blue.500"
        _hover={{
          opacity: 0.7,
        }}
        onClick={onOpen}
        h="1.825rem"
        w="11.825"
        ml="5"
      >
        Quero me cadastrar
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="18.75rem" p="2">
          <ModalHeader>
            <Text color="pgray.200" fontWeight="700">
              Preencha os dados abaixo para realizar seu cadastro
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex
              as="form"
              width="100%"
              flexDirection="column"
              onSubmit={handleSubmit(handleCreateUser)}
            >
              <Input
                h="1.825rem"
                name="name"
                label="Nome Completo"
                error={errors.name}
                {...register("name")}
              />
              <Input
                h="1.825rem"
                name="cpf"
                label="CPF"
                error={errors.cpf}
                {...register("cpf")}
              />
              <Input
                h="1.825rem"
                name="email"
                type="email"
                label="E-mail"
                error={errors.email}
                {...register("email")}
              />
              <Input
                h="1.825rem"
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                h="1.825rem"
                name="passwordConfirmation"
                type="password"
                label="Confirmar Senha"
                error={errors.passwordConfirmation}
                {...register("passwordConfirmation")}
              />
              <Button
                type="submit"
                mt="2"
                bgColor="green.500"
                _hover={{
                  bgColor: "green.300",
                }}
                w="100%"
                h="1.825rem"
                isLoading={formState.isSubmitting}
                justifyContent="space-between"
              >
                Cadastrar
                <CaretRight />
              </Button>
            </Flex>
            {messageError && (
              <Text color="red" m="0 auto">
                {messageError}!
              </Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
