import React, { useState, useEffect } from 'react';
import NoteButton from '@components/noteButton/NoteButton';
import styles from './GridContainer.module.scss';

interface GridContainerProps {
  notes: { key: string; col: number; row: number; digit: string }[];
  playNote: (note: string) => void;
}

const GridContainer: React.FC<GridContainerProps> = ({ notes, playNote }) => {
  const [clickedNote, setClickedNote] = useState<any | null>(null);
  const [hoveredNote, setHoveredNote] = useState<string | null>(null);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();

    setClickedNote(notes.find((note) => note.digit === event.code));
  };

  useEffect(() => {
    if (clickedNote) {
      playNote(clickedNote.key);
      setHoveredNote(clickedNote.key);

      setTimeout(() => {
        setHoveredNote(null);
      }, 500);

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
    <div className={styles.gridContainer} onKeyDown={keyDownHandler}>
      {notes.map((note) => (
        <NoteButton
          key={note.key}
          note={note.key}
          style={{
            gridColumn: note.col + 1,
            gridRow: note.row + 1,
            backgroundColor:
              note.key === hoveredNote ? 'lightblue' : 'seagreen',
          }}
          onClick={() => playNote(note.key)}
        />
      ))}
    </div>
  );
};

export default GridContainer;
