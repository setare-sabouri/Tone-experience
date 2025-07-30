import React, { useState, useRef, useEffect } from 'react';
import styles from './KeyHelper.module.scss';
import GuideLayout from '../GuideLayout/GuideLayout'
import steps from '@utils/guideSteps';
import { useTranslation } from 'react-i18next';

interface KeyHelperProps { }

const KeyHelper: React.FC<KeyHelperProps> = () => {
  const [showGuide, setShowGuide] = useState(false);
  const { t } = useTranslation();
  const guideRef = useRef<HTMLDivElement>(null);

  const toggleKeyboard = () => {
    setShowGuide((prevShowGuide) => !prevShowGuide);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (guideRef.current && !guideRef.current.contains(event.target as Node)) {
      setShowGuide(false);
    }
  };

  useEffect(() => {
    if (showGuide) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showGuide]);

  return (
    <div className={styles.helper}>
      <div>
        <button className={styles.helperBtn} onClick={toggleKeyboard}>
          {t('help')}
        </button>
      </div>
      {showGuide && (
        <div ref={guideRef}>
          <GuideLayout steps={steps} onClose={() => setShowGuide(false)} />
        </div>
      )}
    </div>
  );
};

export default KeyHelper;
