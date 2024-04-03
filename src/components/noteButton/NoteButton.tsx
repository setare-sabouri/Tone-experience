import React from 'react';
import styles from './NoteButton.module.scss';
interface NoteButtonProps {
  note: string;
  btn: string;
  onClick: () => void;
  style: React.CSSProperties;
}

const NoteButton: React.FC<NoteButtonProps> = ({
  note = '',
  btn = '',
  onClick = () => {},
  style = {},
}) => {
  return (
    <button onClick={onClick} className={styles.noteButton} style={style}>
      <div>{note}</div>
      <div className={styles.helper}>{btn}</div>
    </button>
  );
};

export default NoteButton;
