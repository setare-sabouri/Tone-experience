import React, { useEffect, useRef } from "react";
import * as Tone from "tone";
import styles from "./Experience.module.scss";
import NoteButton from "@components/noteButton/NoteButton";

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

  // Notes for a simple piano
  const pianoNotes = ["C4", "D4", "E4", "F4", "G4", "A4", "B4"];

  return (
    <div className={styles.experienceContainer}>
      <div>
        {pianoNotes.map((note) => (
          <NoteButton key={note} note={note} onClick={() => playNote(note)} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
