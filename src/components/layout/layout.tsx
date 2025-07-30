import React from 'react';
import { useTranslation } from 'react-i18next'; // Updated import
import styles from './layout.module.scss';
import LanguageDropdown from '../languageDropdown/languageButtonsbug'
// import KeyHelper from '@components/SectionOne/keyHelper/KeyHelper';
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const { t } = useTranslation();
  return (
    <div className={styles.layoutwrapp}>
      <nav className={styles.title}>
        <h1 className={styles.welcomeText}>{t('welcome')}</h1>
        {/* <KeyHelper /> */}
        <LanguageDropdown />
      </nav>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
