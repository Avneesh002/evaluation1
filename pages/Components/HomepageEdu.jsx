import React from "react";
import { Avatar, Stack, Text } from "@chakra-ui/react";

const HomepageEdu = () => {
  return (
    <Stack bg={"#324b6b"} p={"20px"}>
      <Stack p={"5px"} border={"1px dashed"} color={"white"} direction={"row"}>
        <Stack textAlign={"center"}>
          <Text>🔵</Text>
        </Stack>
        <Stack>
          <Text fontSize={"17px"} fontWeight={"500"}>
            Full Stack Web Development
          </Text>
          <Text fontSize={"15px"} fontWeight={"500"}>
            Masai School, Bengaluru
          </Text>
          <Text fontSize={"15px"}>June, 2021 - Present </Text>
        </Stack>
      </Stack>
      <Stack p={"5px"} border={"1px dashed"} color={"white"} direction={"row"}>
        <Stack textAlign={"center"}>
          <Text>🔵</Text>
        </Stack>
        <Stack>
          <Text fontSize={"17px"} fontWeight={"500"}>
            B.A
          </Text>
          <Text fontSize={"15px"} fontWeight={"500"}>
            IGNOU, Shimla
          </Text>
          <Text fontSize={"15px"}>January, 2021 - Present</Text>
        </Stack>
      </Stack>
      <Stack p={"5px"} border={"1px dashed"} color={"white"} direction={"row"}>
        <Stack textAlign={"center"}>
          <Text>🔵</Text>
        </Stack>
        <Stack>
          <Text fontSize={"17px"} fontWeight={"500"}>
            Higher Education
          </Text>
          <Text fontSize={"15px"} fontWeight={"500"}>
            GSSS, Shimla
          </Text>
          <Text fontSize={"15px"}>March, 2018 - March, 2019</Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default HomepageEdu;
