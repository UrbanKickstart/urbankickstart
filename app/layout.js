import "./globals.css";

export const metadata = {
  title: "Urban Kickstart — Get to know the real Amsterdam",
  description:
    "Small meetups for international professionals and their partners moving to Amsterdam. Connect with the city and each other, guided by a local. Pay-what-you-feel.",
  openGraph: {
    title: "Urban Kickstart — Get to know the real Amsterdam",
    description:
      "Small meetups for international professionals and their partners moving to Amsterdam. Connect with the city and each other, guided by a local. Pay-what-you-feel.",
    url: "https://www.urbankickstart.com",
    siteName: "Urban Kickstart",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
