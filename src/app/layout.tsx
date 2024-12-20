import Link from "next/link";
import "./globals.css";
export const metadata = {
  title: {
    default: 'default title',
    template: '%s | Mahar App',
    absolute: '',
  },
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
          <p className="text-red-400">Header</p>
        </header>
        
        {children}
        
        <footer style={{ background: "lightblue", padding: "1rem" }}>
          <p>Footer</p>
        </footer>
      </body>
    </html>
  );
}
