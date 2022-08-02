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
  MenuItem,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";
import { Input } from "../Form/Input";

type LoginData = {
  credential: string;
  password: string;
};

const createUserFormSchema = yup.object().shape({
  credential: yup.string().required("E-mail ou CPF obrigatório!"),
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
      setMessageError("");
      await signIn(values);
    } catch (error) {
      setMessageError(error.response.data.error);
    }
  };

  return (
    <>
      <MenuItem onClick={onOpen}>Login</MenuItem>

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
                name="credential"
                label="E-mail ou CPF"
                error={errors.credential}
                {...register("credential")}
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
                bgGradient="linear(to-t, blue.300, green.300)"
                _hover={{
                  bgGradient: "linear(to-r, green.300, blue.300)",
                }}
                h="36px"
                fontSize="16px"
                isLoading={formState.isSubmitting}
              >
                Entrar
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
