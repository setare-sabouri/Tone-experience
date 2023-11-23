import React, { useEffect, useRef } from "react";
import * as Tone from "tone";
import styles from "./Experience.module.scss";
import audioKeys from "audiokeys";
import GridContainer from "@components/gridContainer/GridContainer";
import keysnotes from "@utils/notes";
interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
  const synthRef = useRef<Tone.Synth | null>(null);

  useEffect(() => {
    synthRef.current = new Tone.Synth().toDestination();

    return () => {
      if (synthRef.current) {
        synthRef.current.dispose();
      }
    };
  }, []);

  const playNote = (note: string) => {
    if (synthRef.current) {
      synthRef.current.triggerAttackRelease(note, "8n");
    }
  };

  return (
    <div className={styles.experienceContainer}>
      <GridContainer notes={keysnotes} playNote={playNote} />
    </div>
  );
};

export default Experience;
