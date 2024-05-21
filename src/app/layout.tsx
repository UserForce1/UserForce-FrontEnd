
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import { Metadata } from 'next';
import zipy from 'zipyai';




const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Userforce",
  description: "Userforce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  zipy.init('d9bca32d');
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="bottom-center" />
        {children}
      </body>
    </html>
  );
}
