import React from "react";
import styles from "./NoteButton.module.scss";
interface NoteButtonProps {
  note: string;
  onClick: () => void;
  style: React.CSSProperties;
}

const NoteButton: React.FC<NoteButtonProps> = ({ note, onClick, style }) => {
  return (
    <button onClick={onClick} className={styles.noteButton} style={style}>
      {note}
    </button>
  );
};

export default NoteButton;
