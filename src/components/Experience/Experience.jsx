import PianoKeyboard from "../Piano/PianoKeyboard"
import styles from "./Experience.module.scss";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const Experience = () => {
  return (
    <div className={styles.experienceContainer}>
      <Canvas camera={{ position: [0, 3, 10], fov: 50 }} shadows>
        <color args={["#1e703b"]} attach={"background"}/>
        <Environment preset="dawn" />
        <PianoKeyboard />
      </Canvas>
    </div>
  );
};

export default Experience;
