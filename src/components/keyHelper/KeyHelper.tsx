// KeyHelper.tsx
import React, { useState } from 'react';
import styles from './KeyHelper.module.scss';
import GuideLayout from '@components/guideLayout/GuideLayout';
import steps from '@utils/guideSteps';
import { useTranslation } from 'react-i18next';
interface KeyHelperProps { }

const KeyHelper: React.FC<KeyHelperProps> = ({ }) => {
  const [showGuide, setShowGuide] = useState(false);
  const { t } = useTranslation();
  const toggleKeyboard = () => {
    setShowGuide((prevShowGuide) => !prevShowGuide);
  };

  return (
    <div className={styles.helper}>
      <div>
        <button className={styles.helperBtn} onClick={toggleKeyboard}>
          {t('help')}
        </button>
      </div>
      {showGuide && <GuideLayout steps={steps} />}
    </div>
  );
};

export default KeyHelper;
