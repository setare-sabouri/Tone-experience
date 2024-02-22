import React, { useEffect, useRef } from 'react';
import styles from './keyHelperLayout.module.scss';
import keysnotes from '@utils/notes';
import NoteButton from '@components/noteButton/NoteButton';
interface keyHelperLayoutProps {}

const KeyHelperLayout: React.FC<keyHelperLayoutProps> = (props) => {
  return (
    <div className={styles.KeyHelperLayout}>
      {keysnotes.map((elm) => (
        <NoteButton
          note={elm.btn}
          key={elm.btn}
          onClick={() => {}}
          style={{}}
        />
      ))}
    </div>
  );
};

export default KeyHelperLayout;
