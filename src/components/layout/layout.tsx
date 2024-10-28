import React from 'react';
import { useTranslation } from 'react-i18next'; // Updated import
import styles from './layout.module.scss';
import LanguageDropdown from '@components/languageDropdown/languageButtons';
export default function RootLayout({ children }: { children: React.ReactNode; }) {
  const { t } = useTranslation();
  return (
    <div className={styles.layoutwrapp}>
      <nav className={styles.title}>
        <h1>{t('welcome')}</h1>
        <LanguageDropdown />
      </nav>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
