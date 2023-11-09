import type { NextPage } from "next";
import Experience from "@components/experience/ToneExperience";
import RootLayout from "@components/layout/layout";
import Audiokeys from "@components/audiokeys/Audiokeys";
const Home: NextPage = () => {
  return (
    <>
      <RootLayout>
        <Experience />
      </RootLayout>
    </>
  );
};

export default Home;
