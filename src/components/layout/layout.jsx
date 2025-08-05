import styles from './layout.module.scss';

export default function RootLayout({ children }) {

  return (
    <div className={styles.layoutwrapp}>
      <nav className={styles.title}>
        <h1 className={styles.welcomeText}>Tone.js Experience</h1>
      </nav>
      <main className={styles.content}>
        {children}
      </main>
    </div>
  );
}
