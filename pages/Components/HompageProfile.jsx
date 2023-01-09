import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  CardFooter,
  Divider,
  Text,
  Heading,
  Stack,
  CardBody,
  Card,
  Avatar,
  WrapItem,
  AvatarBadge,
} from "@chakra-ui/react";

const HomepageProfile = () => {
  const [data, setData] = useState([]);
  //   console.log(data);
  const getData = async () => {
    let res = await fetch(`https://api.github.com/users/avneesh002`);

    let data = await res.json();
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const handleUser = () => {
    href = "https://api.github.com/users/Avneesh002";
  };
  const handleResume = () => {};
  return (
    <Card align={"center"} bg={"#324b6b"} maxW="80">
      <CardBody>
        <WrapItem>
          <Avatar size="2xl" name="Segun Adebayo" src={data.avatar_url}>
            {" "}
            <AvatarBadge boxSize="0.8em" bg="green.500" />
          </Avatar>
        </WrapItem>

        <Stack mt="6" spacing="3">
          <Heading color={"white"} fontWeight={"700"} size="md">
            {data.name}
          </Heading>
          <Text color={"gray.300"}>@{data.login}</Text>
        </Stack>
      </CardBody>
      <Stack>
        <Text align={"center"} color={"gray.300"}>
          {data.bio}
        </Text>
      </Stack>
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={handleResume} variant="solid" colorScheme="whatsapp">
            Resume
          </Button>
          <Button
            onClick={() => handleUser}
            variant="solid"
            colorScheme="telegram"
          >
            Follow
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export async function getStaticProps(context) {
  let res = await fetch(`https://api.github.com/users/avneesh002`);

  let data = await res.json();

  return {
    props: { data },
    //function not working thats why i used useEffect
  };
}

export default HomepageProfile;
