import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './languageButtons.module.scss';

const LanguageDropdown: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className={styles.wrapper}>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="sv">Swedish</option>
        <option value="ir">فارسی</option>

      </select>
    </div>
  );
};

export default LanguageDropdown;
