import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hon. Amb. Isaac Ali Kigbu | House of Representatives 2027 | Lafi/Obi",
  description:
    "Official campaign website of Hon. Amb. Isaac Ali Kigbu — APC candidate for the Nigerian House of Representatives, Lafi/Obi Federal Constituency, 2027 General Elections.",
  keywords: [
    "Isaac Ali Kigbu",
    "Lafi Obi Federal Constituency",
    "APC 2027",
    "House of Representatives",
    "Kogi State",
    "Nigeria elections 2027",
  ],
  openGraph: {
    title: "Hon. Amb. Isaac Ali Kigbu | Lafi/Obi 2027",
    description: "A Voice for Lafi/Obi. A Force for Nigeria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
