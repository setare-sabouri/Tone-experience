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
  const pianoNotes = [
    "C4",
    "D4",
    "E4",
    "F4",
    "G4",
    "A4",
    "B4",
    "C5",
    "D5",
    "E5",
    "F5",
    "G5",
    "A5",
  ];

  const keys = [
    { key: "C4,", col: 1, row: 0 },
    { key: "D4", col: 2, row: 0 },
    { key: "E4", col: 2, row: 0 },
    { key: "F4", col: 2, row: 0 },
    { key: "G4", col: 2, row: 0 },
    { key: "A4", col: 2, row: 0 },
    { key: "B4", col: 2, row: 0 },

    { key: "C5", col: 2, row: 0 },
    { key: "D5", col: 2, row: 0 },
    { key: "E5", col: 2, row: 0 },
    { key: "F5", col: 2, row: 0 },
    { key: "G5", col: 2, row: 0 },
    { key: "A5", col: 2, row: 0 },
  ];

  const keymap = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  return (
    <div className={styles.experienceContainer}>
      <div className={styles.experienceContainer__noteButtonContainer}>
        {pianoNotes.map((note) => (
          <NoteButton key={note} note={note} onClick={() => playNote(note)} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
