/* eslint-disable */

import type { Metadata } from "next";
import "./globals.css";
import { Toaster} from 'sonner'
import { StoreProvider } from "easy-peasy";
import { CookiesProvider } from 'next-client-cookies/server';
export const metadata: Metadata = {
  title: "Library system",
  description: "Modern system",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Toaster position="bottom-left" richColors />
        <CookiesProvider>
          {children}
          </CookiesProvider>
      </body>
    </html>
  );
}

//TODO: Toaster