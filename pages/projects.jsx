import { Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Projects = ({ projectData }) => {
  console.log(projectData.items);
  return (
    <>
      <Heading color={"white"}>Projects</Heading>
      <SimpleGrid columns={{ base: "1", sm: "2" }}>
        {projectData.items.map((el) => (
          <Stack
            color={"white"}
            border={"1px dashed white"}
            p={"8px"}
            key={el.id}
          >
            <Text>{el.name}</Text>
            <Text>{el.full_name}</Text>
            <Stack direction={"row"} justify={"space-between"}>
              <Text>Stars:{el.stargazers_count}</Text>
              <Text>{el.language}</Text>
            </Stack>
          </Stack>
        ))}
      </SimpleGrid>
    </>
  );
};
// https://api.github.com/search/repositories?q=user:avneesh002+fork:true&sort=updated&per_page=10&type=Repositories

export default Projects;
