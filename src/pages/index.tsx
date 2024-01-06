import type { NextPage } from 'next';
import Experience from '@components/experience/ToneExperience';
import RootLayout from '@components/layout/layout';
import Audiokeys from '@components/audiokeys/Audiokeys';
import Cube from '@components/cubeModel/cube';

const modelUrl = '/models/nike.glb';

const Home: NextPage = () => {
  return (
    <>
      <RootLayout>
        <Experience />
        <Cube modelUrl={modelUrl} />
      </RootLayout>
    </>
  );
};

export default Home;
