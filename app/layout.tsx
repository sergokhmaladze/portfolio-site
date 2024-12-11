'use client';
import Link from "next/link";
import './reset.css';
import Footer from "./components/footer";
// import ButtonForSidebar from "./components/sidebarBu/button";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        {/* <ButtonForSidebar></ButtonForSidebar> */}
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}