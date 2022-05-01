import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  Icon,
  Image,
  Menu,
  MenuButton,
  MenuList,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ButtonLogin from "./ButtonLogin";
import ButtonSignup from "./ButtonSignup";
import { FiLogOut, FiChevronDown } from "react-icons/fi";
import { GiShoppingCart } from "react-icons/gi";
import Link from "next/link";

export default function Header() {
  const { isAuthorized, signOut, user } = useContext(AuthContext);

  return (
    <Flex
      width="100%"
      py="5"
      px="20"
      borderBottom="1px solid #E7E8FC"
      align="center"
      justify="space-between"
      zIndex="5"
      bgColor="#fff"
    >
      <Flex align="center">
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" cursor="pointer" />
        </Link>
        <Flex ml="20">
          <Link href="/recyclables">
            <Text fontWeight="700" cursor="pointer">
              Recicláveis
            </Text>
          </Link>
          <Center height="20px" mx="2">
            <Divider orientation="vertical" fontWeight="700" />
          </Center>
          <Link href="/collection_points">
            <Text fontWeight="700" cursor="pointer">
              Pontos de Coleta
            </Text>
          </Link>
          <Center height="20px" mx="2">
            <Divider orientation="vertical" fontWeight="700" />
          </Center>
          <Link href="/exchange_points">
            <Text fontWeight="700" cursor="pointer">
              Troque seus pontos
            </Text>
          </Link>
        </Flex>
      </Flex>
      <Box>
        {isAuthorized !== "true" ? (
          <>
            <ButtonLogin />
            <ButtonSignup />
          </>
        ) : (
          <Flex align="center">
            <Avatar w="35px" h="35px" bgColor="primary.300" />
            <Box mx="2">
              {user ? (
                <Text fontSize="14px" fontWeight="700" lineHeight="1">
                  {user.name}
                </Text>
              ) : (
                <Spinner />
              )}
              {user && (
                <Text fontSize="14px" fontWeight="700" lineHeight="1">
                  {user.score} pontos
                </Text>
              )}
            </Box>
            <Menu>
              <MenuButton as="button">
                <Icon fontSize="24px" as={FiChevronDown} />
              </MenuButton>
              <MenuList zIndex="99">
                <Flex align="center" pl="3" cursor="pointer" onClick={signOut}>
                  <Icon as={FiLogOut} color="red" />
                  <Text ml="2">Sair</Text>
                </Flex>
              </MenuList>
            </Menu>
            <Icon
              fontSize="24px"
              as={GiShoppingCart}
              cursor="pointer"
              color="primary.300"
            />
          </Flex>
        )}
      </Box>
    </Flex>
  );
}
