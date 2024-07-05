import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigationcomponent from "@/components/navigations/navigation-components";
import StoreProvider from "@/redux/store/storeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tic Tac Toe",
  description: "Submission by Xavier Joseph to Umbra Digital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigationcomponent />

        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
