import React from "react";
import { Badge, SimpleGrid, Stack } from "@chakra-ui/react";

const HomepageSkills = () => {
  return (
    <SimpleGrid
      columns={{ base: "2", sm: "3" }}
      p={"20px"}
      spacing={"10px"}
      bg={"#324b6b"}
      textAlign={"center"}
    >
      <Badge colorScheme="purple">Javascript</Badge>
      <Badge colorScheme="purple">HTML</Badge>
      <Badge colorScheme="purple">CSS</Badge>
      <Badge colorScheme="purple">Node JS</Badge>
      <Badge colorScheme="purple">Typescript</Badge>
      <Badge colorScheme="purple">React JS</Badge>
      <Badge colorScheme="purple">Chakra-UI</Badge>
      <Badge colorScheme="purple">MongoDB</Badge>
      <Badge colorScheme="purple">Bootstrap</Badge>
    </SimpleGrid>
  );
};

export default HomepageSkills;
