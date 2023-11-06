import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>nav</nav>
      <main>{children}</main>
      <footer>footer</footer>
    </>
  );
}
