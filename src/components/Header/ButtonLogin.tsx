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
import { CaretRight } from "phosphor-react";

type LoginData = {
  credential: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  credential: yup.string().required("E-mail ou CPF obrigatório!"),
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
      setMessageError("");
      await signIn(values);
    } catch (error) {
      setMessageError(error.response.data.error);
    }
  };

  return (
    <>
      <Button
        _hover={{
          bgColor: "green.300",
        }}
        onClick={onOpen}
        h="1.825rem"
        w="8.125rem"
      >
        Login
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="18.75rem" p="2">
          <ModalHeader>
            <Text fontSize="1rem" color="pgray.200" fontWeight="700">
              Entre com seu login e senha para conferir as ofertas
            </Text>
          </ModalHeader>
          <ModalBody>
            <Flex
              as="form"
              width="100%"
              flexDirection="column"
              onSubmit={handleSubmit(handleLogin)}
            >
              <Input
                h="1.825rem"
                fontSize="1rem"
                name="credential"
                label="E-mail ou CPF"
                error={errors.credential}
                {...register("credential")}
              />
              <Input
                h="1.825rem"
                fontSize="1rem"
                name="password"
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Text
                fontSize="0.8125rem"
                cursor="pointer"
                textAlign="right"
                w="100%"
                _hover={{
                  opacity: 0.7,
                  textDecoration: "underline",
                }}
              >
                Esqueci minha senha
              </Text>
              <Button
                type="submit"
                mt="2"
                bgColor="green.500"
                _hover={{
                  bgColor: "green.300",
                }}
                w="100%"
                h="1.825rem"
                fontSize="1rem"
                isLoading={formState.isSubmitting}
                justifyContent="space-between"
              >
                Entrar
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
