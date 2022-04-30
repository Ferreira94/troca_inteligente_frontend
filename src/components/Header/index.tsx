import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import ButtonLogin from "./ButtonLogin";
import ButtonSignup from "./ButtonSignup";
import { FiLogOut, FiChevronDown } from "react-icons/fi";

export default function Header() {
  const { user, signOut } = useContext(AuthContext);
  const [userOptions, setUserOptions] = useState(false);

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
      <Flex align="center">
        <Text fontWeight="700" cursor="pointer">
          <Image src="/images/logo.svg" alt="Logo" />
        </Text>
        <Flex ml="20">
          <Text fontWeight="700" cursor="pointer">
            Recicláveis
          </Text>
          <Center height="20px" mx="2">
            <Divider orientation="vertical" fontWeight="700" />
          </Center>
          <Text fontWeight="700" cursor="pointer">
            Pontos de Coleta
          </Text>
          <Center height="20px" mx="2">
            <Divider orientation="vertical" fontWeight="700" />
          </Center>
          <Text fontWeight="700" cursor="pointer">
            Troque seus pontos
          </Text>
        </Flex>
      </Flex>
      <Box>
        {!user ? (
          <>
            <ButtonLogin />
            <ButtonSignup />
          </>
        ) : (
          <Flex align="center">
            <Avatar w="35px" h="35px" bgColor="green" />
            <Box mx="2">
              <Text fontSize="14px" fontWeight="700" lineHeight="1">
                Luiz Carvalho
              </Text>
              <Text fontSize="14px" fontWeight="700" lineHeight="1">
                374 pontos
              </Text>
            </Box>
            <Icon
              as={FiChevronDown}
              cursor="pointer"
              color="green"
              onClick={() => {
                setUserOptions(!userOptions);
              }}
            />
          </Flex>
        )}
        {userOptions && (
          <Box
            w="200px"
            position="absolute"
            rounded="dark-lg"
            top="60px"
            boxShadow="xl"
            p="5"
          >
            <Flex align="center" cursor="pointer" onClick={signOut}>
              <Icon as={FiLogOut} color="red" />
              <Text ml="2">Sair</Text>
            </Flex>
          </Box>
        )}
      </Box>
    </Flex>
  );
}
