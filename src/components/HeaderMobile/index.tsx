import {
  Flex,
  Icon,
  Text,
  Image,
  useBreakpointValue,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FiLogOut, FiMenu } from "react-icons/fi";
import Login from "./Login";
import Signup from "./Signup";
import Link from "next/link";

export default function HeaderMobile() {
  const { isAuthorized, signOut } = useContext(AuthContext);

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
        <Image src="/images/logo.png" alt="Logo" cursor="pointer" />
      </Link>
      <Menu>
        <MenuButton as="button">
          <Icon as={FiMenu} />
        </MenuButton>
        <MenuList zIndex="99">
          {isAuthorized !== "true" && <Login />}
          <Link href="/recyclables">
            <MenuItem>Recicláveis</MenuItem>
          </Link>
          <Link href="/collection_points">
            <MenuItem>Pontos de Coleta</MenuItem>
          </Link>
          <Link href="/exchange_points">
            <MenuItem>Troque seus pontos</MenuItem>
          </Link>
          {isAuthorized !== "true" && <Signup />}
          {isAuthorized === "true" && (
            <MenuItem>
              <Flex align="center" onClick={signOut}>
                <Icon as={FiLogOut} color="red" />
                <Text ml="2">Sair</Text>
              </Flex>
            </MenuItem>
          )}
        </MenuList>
      </Menu>
    </Flex>
  );
}
