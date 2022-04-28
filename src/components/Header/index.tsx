import { useContext } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const { signOut } = useContext(AuthContext);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px="10"
      py="3"
      position="absolute"
      width="100%"
      borderBottom="1px solid green"
    >
      <Text color="pGray.900">Dashboard</Text>
      <Icon
        as={FiLogOut}
        color="pGray.900"
        fontSize="xl"
        cursor="pointer"
        onClick={signOut}
      />
    </Flex>
  );
}
