import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./Components/nav/NavBar";
import {Source_Sans_3} from 'next/font/google'
const source_sans_3= Source_Sans_3 ({weight:['300','500','200'], subsets: ["latin"]})
export const metadata: Metadata = {
  title: "EduTunnel",
  description: "This is a learning website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${source_sans_3.className} dark antilalised`}>
      
        {children}
      </body>

    </html>
  );
}
