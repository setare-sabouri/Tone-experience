import PianoKeyboard from "../Piano/PianoKeyboard"
import styles from "./Experience.module.scss";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useEffect } from "react";

const Experience = () => {

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    setVh();
    window.addEventListener("resize", setVh);
    return () => window.removeEventListener("resize", setVh);
  }, []);

  return (
    <div className={styles.experienceContainer}>
      <Canvas className={styles.CanvasCls} >
        {/* <Perf/> */}
        <color args={["#1e703b"]} attach={"background"} />
        <Environment preset="city" />
        <PianoKeyboard />
      </Canvas>
    </div>
  );
};

export default Experience;
