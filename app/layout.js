import "./globals.css";

export const metadata = {
  title: "Urban Kickstart — Feel at home in Amsterdam",
  description:
    "Small, warm meetups that help internationals genuinely connect with Amsterdam. Pay-what-you-feel. Join a mini meetup.",
  openGraph: {
    title: "Urban Kickstart — Feel at home in Amsterdam",
    description:
      "Small, warm meetups that help internationals genuinely connect with Amsterdam. Pay-what-you-feel.",
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
