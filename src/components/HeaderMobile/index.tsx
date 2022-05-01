import {
  Flex,
  Icon,
  Text,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FiLogOut, FiMenu } from "react-icons/fi";
import Login from "./Login";
import Signup from "./Signup";
import Link from "next/link";

export default function HeaderMobile() {
  const { isAuthorized, signOut } = useContext(AuthContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Flex
      width="100%"
      py="5"
      px={isWideVersionMd ? "20" : "7"}
      borderBottom="1px solid #E7E8FC"
      align="center"
      justify="space-between"
      zIndex="5"
    >
      <Link href="/">
        <Image src="/images/logo.svg" alt="Logo" cursor="pointer" />
      </Link>
      <Icon
        onClick={onOpen}
        as={FiMenu}
        cursor="pointer"
        fontSize="24px"
        color="primary.100"
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bgColor="primary.400" maxW="250">
          <DrawerHeader bgColor="primary.300" textAlign="right"></DrawerHeader>

          <DrawerBody pt="40">
            {!isAuthorized && <Login />}
            <Link href="/recyclables">
              <Text fontWeight="700" cursor="pointer">
                Recicláveis
              </Text>
            </Link>
            <Link href="/collection_points">
              <Text fontWeight="700" cursor="pointer">
                Pontos de Coleta
              </Text>
            </Link>

            <Text fontWeight="700" cursor="pointer">
              Troque seus pontos
            </Text>
            {!isAuthorized && <Signup />}
          </DrawerBody>

          <DrawerFooter bgColor="primary.300" justifyContent="flex-start">
            {isAuthorized && (
              <Flex align="center" cursor="pointer" onClick={signOut}>
                <Icon as={FiLogOut} color="red" />
                <Text ml="2">Sair</Text>
              </Flex>
            )}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}
