// GridContainer.tsx
import React from 'react';
import NoteButton from '@components/noteButton/NoteButton';
import styles from './GridContainer.module.scss';

interface GridContainerProps {
  notes: { key: string; col: number; row: number }[];
  playNote: (note: string) => void;
}

const GridContainer: React.FC<GridContainerProps> = ({ notes, playNote }) => {
  return (
    <div className={styles.gridContainer}>
      {notes.map((note) => (
        <NoteButton
          key={note.key}
          note={note.key}
          onClick={() => playNote(note.key)}
          style={{
            gridColumn: note.col + 1,
            gridRow: note.row + 1,
          }}
        />
      ))}
    </div>
  );
};

export default GridContainer;
