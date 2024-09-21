
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Oxygen } from "next/font/google";
import { Chivo } from "next/font/google";
import "./globals.css";
import { SearchContextProvider } from "@/contexts/Algo/SearchContext";
import { RouteContextProvider } from "@/contexts/Algo/RouteContext";
import { CategoriesContext, CategoriesContextProvider } from "@/contexts/Algo/CategoriesContext";

const chivo = Chivo({
  subsets: ['latin'],
  display: 'swap',
  weight: "400",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Algo",
  description: "Search engine built by developers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${chivo.className} ${chivo.className} antialiased`}
      >
        <CategoriesContextProvider>
        <RouteContextProvider>
        <SearchContextProvider>
          {children}
        </SearchContextProvider>
        </RouteContextProvider>
        </CategoriesContextProvider>
      </body>
    </html>
  );
}
