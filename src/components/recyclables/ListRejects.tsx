import { Box, Flex, Image, List, ListItem, Text } from "@chakra-ui/react";

interface ItemsProps {
  title?: string;
  text: string;
}

interface ListRecyclabesProps {
  title: string;
  icon: string;
  items: ItemsProps[];
}

export default function ListRejects({
  title,
  icon,
  items,
}: ListRecyclabesProps) {
  return (
    <Box mt="10">
      <Flex align="center">
        <Flex
          w="40px"
          h="40px"
          bgColor="red"
          borderRadius="3"
          justify="center"
          align="center"
        >
          <Image src={icon} w="25px" />
        </Flex>

        <Text ml="2" fontSize="20px" fontWeight="bold">
          {title}
        </Text>
      </Flex>

      <List mt="2">
        {items.map((item) => (
          <>
            {item.title && <ListItem color="red">{item.title}</ListItem>}
            <ListItem>{item.text}</ListItem>
          </>
        ))}
      </List>
    </Box>
  );
}
