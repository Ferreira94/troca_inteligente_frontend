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
  Avatar,
  Box,
  Spinner,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { FiLogOut, FiMenu, FiChevronDown } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import Login from "./Login";
import Signup from "./Signup";
import Link from "next/link";

export default function HeaderMobile() {
  const { isAuthorized, signOut, user } = useContext(AuthContext);

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
          {isAuthorized === "true" && (
            <Box textAlign="center">
              <Avatar w="35px" h="35px" bgColor="primary.300" mb="1" />
              <Box mx="2">
                {user ? (
                  <Text fontSize="14px" fontWeight="700" lineHeight="1">
                    {user.name}
                  </Text>
                ) : (
                  <Spinner />
                )}
                {user && (
                  <Text mb="1" fontSize="14px" fontWeight="700" lineHeight="1">
                    {user.score} pontos
                  </Text>
                )}
              </Box>

              <Icon
                fontSize="24px"
                as={GiShoppingCart}
                cursor="pointer"
                color="primary.300"
              />
            </Box>
          )}
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
