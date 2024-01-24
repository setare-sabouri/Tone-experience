import React, { useEffect, useRef } from 'react';
import * as Tone from 'tone';
import styles from './Experience.module.scss';
import GridContainer from '@components/gridContainer/GridContainer';
import keysnotes from '@utils/notes';
import KeyHelper from '@components/keyHelper/KeyHelper';
import keyHelperLayout from '@components/keyHelperLayout/keyHelperLayout';
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
      synthRef.current.triggerAttackRelease(note, '8n');
    }
  };

  return (
    <div className={styles.experienceContainer}>
      <GridContainer notes={keysnotes} playNote={playNote} />
      <div className={styles.helpersCnt}>
        <KeyHelper />
      </div>
    </div>
  );
};

export default Experience;
