import "./globals.css";

export const metadata = {
  title: "Urban Kickstart — Get to know the real Amsterdam",
  description:
    "Small meetups where internationals connect with Amsterdam and each other, guided by a local. Pay-what-you-feel. Join a mini meetup.",
  openGraph: {
    title: "Urban Kickstart — Get to know the real Amsterdam",
    description:
      "Small meetups where internationals connect with Amsterdam and each other, guided by a local. Pay-what-you-feel.",
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
