import React from 'react';
import { useTranslation } from 'react-i18next'; // Updated import
import styles from './layout.module.scss';
import LanguageDropdown from '@components/languageDropdown/languageButtons';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  return (
    <>
      <nav className={styles.title}>
        <p>{t('welcome')}</p>
        <LanguageDropdown />
      </nav>
      <main>{children}</main>
      {/* rest of the page  */}
    </>
  );
}
