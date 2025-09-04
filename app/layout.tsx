import type { Metadata } from "next";
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";


export const metadata: Metadata = {
  title: "Travel app",
  description: "Travel UI/Ux app for camping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-70DDZ32WPQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-70DDZ32WPQ');
          `}
        </Script>
      </head>
      <body>
        <Navbar/>
        <main className="relative overflow-hidden">
            {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
