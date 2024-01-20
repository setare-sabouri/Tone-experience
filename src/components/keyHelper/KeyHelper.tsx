import React, { useEffect, useRef } from 'react';
import styles from './';
interface keyHelperProps {}

const KeyHelper: React.FC<keyHelperProps> = (props) => {
  return (
    <div className={styles.keyHelper}>
      <button>Show Keys Map </button>
    </div>
  );
};

export default KeyHelper;
