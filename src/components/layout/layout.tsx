export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>Tone.js Experience</nav>
      <main>{children}</main>
      {/* <footer>footer</footer> */}
    </>
  );
}
