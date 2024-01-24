import React, { useState, useRef } from 'react';
import styles from './KeyHelper.module.scss';
import KeyHelperLayout from '@components/keyHelperLayout/keyHelperLayout';

interface keyHelperProps {}

const KeyHelper: React.FC<keyHelperProps> = (props) => {
  const [showKeyboard, setShowKeyboard] = useState(false);

  const toggleKeyboard = () => {
    setShowKeyboard((prevShowKeyboard) => !prevShowKeyboard);
  };

  return (
    <>
      <div>
        <button className={styles.helperBtn} onClick={toggleKeyboard}>
          Show Keys Map
        </button>
      </div>
      {showKeyboard && <KeyHelperLayout />}
    </>
  );
};

export default KeyHelper;
