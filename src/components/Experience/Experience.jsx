import PianoKeyboard from "../Piano/PianoKeyboard"
import styles from "./Experience.module.scss";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <Canvas  >
        {/* <Perf/> */}
        <color args={["#1e703b"]} attach={"background"}/>
        <Environment preset="city" />
        <PianoKeyboard />
      </Canvas>
    </div>
  );
};

export default Experience;
