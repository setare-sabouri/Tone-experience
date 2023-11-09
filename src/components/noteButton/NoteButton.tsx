import React from "react";
import styles from "./NoteButto.module.scss";
interface NoteButtonProps {
  note: string;
  onClick: () => void;
}

const NoteButton: React.FC<NoteButtonProps> = ({ note, onClick }) => {
  return (
    <button onClick={onClick} className={styles.noteButton}>
      {note}
    </button>
  );
};

export default NoteButton;
