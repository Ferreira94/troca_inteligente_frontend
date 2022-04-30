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
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FiLogOut, FiMenu } from "react-icons/fi";
import Login from "./Login";
import Signup from "./Signup";

export default function HeaderMobile() {
  const { isAuthorized, signOut } = useContext(AuthContext);
  const [userOptions, setUserOptions] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex
      width="100%"
      py="5"
      px="20"
      borderBottom="1px solid #E7E8FC"
      align="center"
      justify="space-between"
      zIndex="5"
    >
      <Text fontWeight="700" cursor="pointer">
        <Image src="/images/logo.svg" alt="Logo" />
      </Text>
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
            <Text fontWeight="700" cursor="pointer">
              Recicláveis
            </Text>
            <Text fontWeight="700" cursor="pointer">
              Pontos de Coleta
            </Text>

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
