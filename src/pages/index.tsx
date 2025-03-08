import type { NextPage } from 'next';
import Experience from '@components/SectionOne/experience/ToneExperience';
import RootLayout from '@components/layout/layout';

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
