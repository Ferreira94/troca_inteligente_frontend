import {
  Box,
  Flex,
  Image,
  List,
  ListItem,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface ItemProps {
  text: string;
}

interface ListRecyclabesProps {
  title: string;
  icon: string;
  items: ItemProps[];
}

export default function ListRecyclabes({
  title,
  icon,
  items,
}: ListRecyclabesProps) {
  const isWideVersionLg = useBreakpointValue({
    base: false,
    lg: true,
  });

  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Box mt="10" w={isWideVersionMd ? "550px" : "330px"}>
      <Flex align="center">
        <Flex
          w="40px"
          h="40px"
          bgColor="primary.100"
          borderRadius="3"
          justify="center"
          align="center"
        >
          <Image src={icon} w="17px" />
        </Flex>

        <Text ml="2" fontSize="20px" fontWeight="bold">
          {title}
        </Text>
      </Flex>

      <List mt="2">
        {items.map((item) => (
          <ListItem>{item.text}</ListItem>
        ))}
      </List>
    </Box>
  );
}
