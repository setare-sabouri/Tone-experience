// GridContainer.tsx
import React from 'react';
import NoteButton from '@components/noteButton/NoteButton';
import styles from './GridContainer.module.scss';
import { useState, useEffect } from 'react';
interface GridContainerProps {
  notes: { key: string; col: number; row: number; digit: string }[];
  playNote: (note: string) => void;
}

const GridContainer: React.FC<GridContainerProps> = ({ notes, playNote }) => {
  const [clickedNote, setClickedNote] = useState<any | null>(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    setClickedNote(notes.find((note) => note.digit === event.code));
  };

  useEffect(() => {
    if (clickedNote) {
      console.log('clicked note key is ' + clickedNote.key);
      playNote(clickedNote.key);
      setClickedNote(null);
    }
  }, [clickedNote]);

  useEffect(() => {
    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div
      className={styles.gridContainer}
      onKeyDown={keyDownHandler}
      tabIndex={0}
    >
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
