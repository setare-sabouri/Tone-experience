import React, { useState, useEffect } from 'react';
import NoteButton from '@components/SectionOne/noteButton/NoteButton';
import styles from './GridContainer.module.scss';
import { not } from 'three/examples/jsm/nodes/Nodes.js';

interface GridContainerProps {
  notes: {
    key: string;
    col: number;
    row: number;
    btn: string;
    digit: string;
    numPad: string;
  }[];
  playNote: (note: string) => void;
}

const GridContainer: React.FC<GridContainerProps> = ({ notes, playNote }) => {
  const [clickedNote, setClickedNote] = useState<any | null>(null);
  const [hoveredNote, setHoveredNote] = useState<string | null>(null);

  const keyDownHandler = (event: KeyboardEvent) => {
    event.stopPropagation();
    setClickedNote(
      notes.find(
        (note) => note.digit === event.code || note.numPad === event.code
      )
    );
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
    window.addEventListener('keydown', keyDownHandler);
    return () => {
      window.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  return (
    <div className={styles.gridContainer} tabIndex={0}>
      {notes.map((note) => (
        <NoteButton
          key={note.key}
          btn={note.btn}
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
