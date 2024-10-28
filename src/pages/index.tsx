import type { NextPage } from 'next';
import Experience from '@components/SectionOne/experience/ToneExperience';
import ThreeEx from '@components/SectionTwo/threeEx/ThreeEx';
import RootLayout from '@components/layout/layout';

const Home: NextPage = () => {
  return (
    <>
      <RootLayout>
        <Experience />
        <ThreeEx />
      </RootLayout>
    </>
  );
};

export default Home;
