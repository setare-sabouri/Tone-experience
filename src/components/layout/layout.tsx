import styles from "./layout.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.title}>Tone.js Experience</nav>
      <main>{children}</main>
      {/* <footer>footer</footer> */}
    </>
  );
}
