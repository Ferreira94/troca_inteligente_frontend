import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import Head from "next/head";
import { GiShoppingCart } from "react-icons/gi";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import Header from "../components/Header";
import HeaderMobile from "../components/HeaderMobile";
import { useState } from "react";
import Link from "next/link";

export default function Cart() {
  const [number, setNumber] = useState(1);
  const [isConfirmRescue, setIsConfirmRescue] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <>
      <Head>
        <title>Carrinho</title>
      </Head>

      {isWideVersionLg ? <Header /> : <HeaderMobile />}

      <Flex
        px={isWideVersionMd ? "20" : "7"}
        mt="10"
        justifyContent={isWideVersionMd ? "space-between" : "center"}
        alignItems="center"
        flexDirection={isWideVersionMd ? "row" : "column"}
      >
        <Box w="100%">
          <Flex align="center">
            <Heading fontSize={isWideVersionMd ? "34px" : "24px"}>
              Carrinho
            </Heading>
            <Icon
              as={GiShoppingCart}
              fontSize="30px"
              color="green.300"
              ml="3"
            />
          </Flex>
          {!isConfirmRescue ? (
            <Box
              w="100%"
              bgColor="#fff"
              mt="10"
              boxShadow="md"
              rounded="md"
              p={isWideVersionMd ? "10" : "3"}
              mb="10"
            >
              <Text textTransform="uppercase" fontSize="20" fontWeight="700">
                VOUCHERS
              </Text>
              <Flex>
                <Flex
                  mt="5"
                  align="center"
                  justify="space-between"
                  w="100%"
                  flexWrap="wrap"
                  gap="3"
                >
                  <Flex>
                    <Image src="/images/ifood.svg" w="100px" />
                    <Box ml={isWideVersionMd ? "10" : "3"}>
                      <Text fontWeight="700">iFood</Text>
                      <Text>R$ 10,00 de desconto</Text>
                      <Text color="blue.500" fontWeight="700">
                        10 pontos
                      </Text>
                    </Box>
                  </Flex>
                  <Flex align="center">
                    <Icon
                      fontSize="20px"
                      cursor="pointer"
                      as={FiMinusCircle}
                      onClick={() => {
                        setNumber(number - 1);
                      }}
                    />
                    <Text fontSize="20px" mx="3">
                      {number}
                    </Text>
                    <Icon
                      fontSize="20px"
                      as={FiPlusCircle}
                      cursor="pointer"
                      onClick={() => {
                        setNumber(number + 1);
                      }}
                    />
                    <Text ml="3" cursor="pointer" fontWeight="700">
                      Remover
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Divider my="3" />
              <Flex
                justify="space-between"
                w="100%"
                align="center"
                flexWrap="wrap"
                gap="3"
              >
                <Box>
                  <Text fontWeight="700">Total de Resgate</Text>
                  <Text>10 pontos</Text>
                </Box>
                <Flex align="center">
                  <Text fontWeight="700" cursor="pointer">
                    Continuar escolhendo
                  </Text>
                  <Button
                    colorScheme="green"
                    size="xs"
                    px="5"
                    ml="5"
                    onClick={() => {
                      setIsConfirmRescue(true);
                    }}
                  >
                    Fechar pedido
                  </Button>
                </Flex>
              </Flex>
            </Box>
          ) : (
            <Flex w="100%" justify="space-between">
              <Box
                bgColor="#fff"
                mt="10"
                boxShadow="md"
                rounded="md"
                p={isWideVersionMd ? "10" : "3"}
                mb="10"
              >
                <Text textTransform="uppercase" fontSize="20" fontWeight="700">
                  VOUCHERS
                </Text>
                <Flex align="center" mt="5">
                  <Image src="/images/ifood.svg" w="100px" />
                  <Box ml={isWideVersionMd ? "10" : "3"}>
                    <Text fontWeight="700">iFood</Text>
                    <Text>R$ 10,00 de desconto</Text>
                    <Text color="blue.500" fontWeight="700">
                      10 pontos
                    </Text>
                  </Box>
                  <Text ml="20">1 item</Text>
                </Flex>
              </Box>
              <Box
                bgColor="#fff"
                mt="10"
                boxShadow="md"
                rounded="md"
                p={isWideVersionMd ? "10" : "3"}
                mb="10"
              >
                <Text textTransform="uppercase" fontSize="20" fontWeight="700">
                  RESGATE
                </Text>
                <Flex align="flex-end">
                  <Box>
                    <Text>Ifood | R$ 10,00 de desconto</Text>
                    <Text>1 x 10 pontos</Text>
                  </Box>
                  <Text ml="20">10 pontos</Text>
                </Flex>
                <Divider my="2" />
                <Flex justify="space-between">
                  <Text fontWeight="700">Resgate</Text>
                  <Text fontWeight="700">10 pontos</Text>
                </Flex>
                <Button w="100%" mt="3" onClick={onOpen}>
                  Gerar voucher
                </Button>
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  closeOnOverlayClick={false}
                >
                  <ModalOverlay />
                  <ModalContent w="240px" textAlign="right">
                    <ModalHeader>
                      <Text fontWeight="700" fontSize="20">
                        Resgate concluído!
                      </Text>
                    </ModalHeader>

                    <ModalBody>
                      <Text>Aproveite seu desconto</Text>
                    </ModalBody>

                    <ModalFooter>
                      <Link href="/extract">
                        <Button onClick={onClose} colorScheme="green">
                          Obrigado!
                        </Button>
                      </Link>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Box>
            </Flex>
          )}
        </Box>
      </Flex>
    </>
  );
}
