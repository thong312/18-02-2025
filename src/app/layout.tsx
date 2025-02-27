import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-cover bg-center`}
        // style={{ backgroundImage: "url('https://i.pinimg.com/originals/aa/c4/79/aac47997d1f700b9dbd0af658368120e.jpg')" }}
      >
        {/* <div className="navbar">
          <Header />
        </div> */}
        <div> 
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
