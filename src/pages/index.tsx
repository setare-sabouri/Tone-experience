import type { NextPage } from "next";
import Experience from "@components/experience/ToneExperience";
import RootLayout from "@components/layout/layout";
const Home: NextPage = () => {
  return (
    <>
      <RootLayout>
        <Experience></Experience>
      </RootLayout>
    </>
  );
};

export default Home;
