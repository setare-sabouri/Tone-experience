// GridContainer.tsx
import React from "react";
import NoteButton from "@components/noteButton/NoteButton";
import styles from "./GridContainer.module.scss";
import { useState, useEffect } from "react";
interface GridContainerProps {
  notes: { key: string; col: number; row: number; digit: string }[];
  playNote: (note: string) => void;
}

const GridContainer: React.FC<GridContainerProps> = ({ notes, playNote }) => {
  const [clickedDigit, setClickedDigit] = useState<String | null>(null);
  const [clickedNote, setClickedNote] = useState<any | null>(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log("clicked");
    setClickedDigit(event.code);
    console.log(notes.find((note) => note.digit === clickedDigit));
    setClickedNote(notes.find((note) => note.digit === clickedDigit));
  };

  useEffect(() => {
    console.log("clickedDigit is " + clickedDigit);
  }, [clickedDigit]);

  useEffect(() => {
    console.log("clickedDigit is " + clickedNote);
    if (clickedNote) {
      console.log(clickedNote.key);
      playNote(clickedNote.key);
    }
  }, [clickedNote]);
  return (
    <div className={styles.gridContainer} onKeyDown={keyDownHandler}>
      {notes.map((note) => (
        <NoteButton
          style={{
            gridColumn: note.col + 1,
            gridRow: note.row + 1,
          }}
          key={note.key}
          note={note.key}
          onClick={() => playNote(note.key)}
        />
      ))}
    </div>
  );
};

export default GridContainer;
