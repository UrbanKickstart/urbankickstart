import "./globals.css";

export const metadata = {
  title: "Urban Kickstart",
  description: "Urban Kickstart — coming soon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="nl">
      <body>{children}</body>
    </html>
  );
}
