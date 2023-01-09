import Head from "next/head";
import { Inter } from "@next/font/google";
import { Stack } from "@chakra-ui/react";
import Homepage from "./homepage";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ projectData }) {
  return (
    <>
      <Head>
        <title>Avneesh-portfolio</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/avneesh.jpg" />
      </Head>
      <Stack bg={"#253447"}>
        <Homepage projectData={projectData} />
      </Stack>
    </>
  );
}
export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.github.com/search/repositories?q=user:avneesh002+fork:true&sort=updated&per_page=10&type=Repositories`
  );
  console.log(context);
  const projectData = await res.json();
  return {
    props: { projectData },
  };
}
