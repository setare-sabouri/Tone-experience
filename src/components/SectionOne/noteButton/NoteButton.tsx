import React, { useRef } from 'react';
import { gsap } from 'gsap';
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
  onClick = () => { },
  style = {},
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleHoverEnter = () => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: 'rgb(4, 85, 39)',
      color: 'white',
      opacity: 1,
      rotation: 360,
      ease: 'power2.inOut',
      duration: 0.1,
    });
  };

  const handleHoverLeave = () => {
    gsap.to(buttonRef.current, {
      scale: 1,
      backgroundColor: 'seagreen',
      opacity: 0.9,
      color: 'black',
      rotation: 0,
      ease: 'power2.inOut',
      duration: 0.5,
    });
  };

  return (
    <button
      ref={buttonRef}
      className={styles.noteButton}
      style={style}
      onMouseEnter={handleHoverEnter}
      onMouseLeave={handleHoverLeave}
      onClick={onClick}
    >
      <div>{note}</div>
      <div className={styles.helper}>{btn}</div>
    </button>
  );
};

export default NoteButton;
