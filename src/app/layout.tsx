export const metadata = {
  title: 'Next.js',
  description: 'code example',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header style={{ background: "lightblue", padding: "1rem" }}>
          <p>Header</p>
        </header>
        {children}
        <footer style={{ background: "lightblue", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
