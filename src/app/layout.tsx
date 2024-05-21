"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
// import { Metadata } from 'next';
import zipy from 'zipyai';
import { useEffect } from "react";
import Hotjar from '@hotjar/browser';



const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Userforce",
//   description: "Userforce",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const siteId = 4990524;
const hotjarVersion = 6;


  useEffect(()=>{
    Hotjar.init(siteId, hotjarVersion);
    //zipy.init('d9bca32d');
  },[])
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
