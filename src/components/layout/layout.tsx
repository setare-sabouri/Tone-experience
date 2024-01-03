import React from 'react';
import { useTranslation } from 'react-i18next'; // Updated import
import styles from './layout.module.scss';

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
      </nav>
      <main>{children}</main>
      {/* rest of the page  */}
    </>
  );
}
