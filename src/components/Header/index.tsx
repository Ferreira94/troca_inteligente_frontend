import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineLogout } from "react-icons/ai";

export default function Header() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      px="10"
      py="3"
      bgColor="green.900"
      position="absolute"
      width="100%"
    >
      <Text color="pGray.050">Dashboard</Text>
      <Link href="/">
        <Icon
          as={AiOutlineLogout}
          color="pGray.050"
          fontSize="xl"
          cursor="pointer"
        />
      </Link>
    </Flex>
  );
}
