import { Flex, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { FiLogOut } from "react-icons/fi";

export default function Header() {
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
      <Link href="/">
        <Icon as={FiLogOut} color="pGray.900" fontSize="xl" cursor="pointer" />
      </Link>
    </Flex>
  );
}
