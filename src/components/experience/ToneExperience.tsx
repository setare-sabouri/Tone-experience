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

  const keysnotes = [
    { key: "C4,", col: 1, row: 0 },
    { key: "D4", col: 2, row: 0 },

    { key: "E4", col: 0, row: 1 },
    { key: "F4", col: 2, row: 1 },
    { key: "G4", col: 4, row: 1 },

    { key: "A4", col: 0, row: 2 },
    { key: "B4", col: 2, row: 2 },
    { key: "C5", col: 3, row: 2 },

    { key: "D5", col: 0, row: 3 },
    { key: "E5", col: 2, row: 3 },
    { key: "F5", col: 4, row: 3 },

    { key: "G5", col: 2, row: 4 },
    { key: "A5", col: 2, row: 5 },
  ];

  // to save record notes
  const keymap = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  return (
    <div className={styles.experienceContainer}>
      <div
        className={styles.experienceContainer__noteButtonContainer}
        onClick={() => {}}
      >
        {keysnotes.map((note) => (
          <NoteButton
            key={note.key}
            note={note.key}
            onClick={() => playNote(note.key)}
            style={{
              gridColumn: note.col + 1,
              gridRow: note.row + 1,
              background: "seagreen",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
