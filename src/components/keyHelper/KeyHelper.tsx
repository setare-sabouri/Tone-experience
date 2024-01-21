import React, { useEffect, useRef } from 'react';
import styles from './KeyHelper.module.scss';
interface keyHelperProps {}

const KeyHelper: React.FC<keyHelperProps> = (props) => {
  return (
    <div>
      <button className={styles.helperBtn}>Show Keys Map </button>
    </div>
  );
};

export default KeyHelper;
