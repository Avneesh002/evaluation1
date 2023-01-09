import { Stack } from "@chakra-ui/react";
import HomepageSkills from "./Components/HomepageSkills";
import HomepageProfile from "./Components/HompageProfile";
import HomepageEdu from "./Components/HomepageEdu";
import Projects from "./projects";
function Homepage({ projectData }) {
  return (
    <>
      <Stack direction={"row"}>
        <Stack direction={"column"}>
          <HomepageProfile />
          <br />
          <HomepageSkills />
          <br />
          <HomepageEdu />
        </Stack>
        <Stack align={"center"} bg={"#324b6b"} p={"20px"}>
          <Projects projectData={projectData} />
        </Stack>
      </Stack>
    </>
  );
}

export default Homepage;
