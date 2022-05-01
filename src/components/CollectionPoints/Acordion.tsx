import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";

interface ItemProps {
  title: string;
  address: string;
  time: string;
}

interface AcordionProps {
  title: string;
  items: ItemProps[];
}

export default function Acordion({ title, items }: AcordionProps) {
  const isWideVersionMd = useBreakpointValue({
    base: false,
    md: true,
  });

  return (
    <Accordion allowToggle w={isWideVersionMd ? "500px" : "100%"}>
      <AccordionItem>
        <h2>
          <AccordionButton fontWeight="800">
            <Box textAlign="left" w="100%">
              {title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          {items.map((item) => (
            <Box key={item.title}>
              <Text fontWeight="800">{item.title}</Text>
              <Text>{item.address}</Text>
              <Text mb="3" zIndex="50">
                {item.time}
              </Text>
            </Box>
          ))}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
