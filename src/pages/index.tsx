import type { NextPage } from 'next';
import Experience from '@components/experience/ToneExperience';
import RootLayout from '@components/layout/layout';
import Audiokeys from '@components/audiokeys/Audiokeys';
import Gcanvas from '@components/GlobalCanvas/Gcanvas';
const Home: NextPage = () => {
  return (
    <>
      <RootLayout>
        <Experience />
        <Gcanvas />
      </RootLayout>
    </>
  );
};

export default Home;
