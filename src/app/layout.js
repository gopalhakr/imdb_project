import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header"
import Providers from "./Providers";
import Navbar from "@/Components/Navbar";
import SearchBox from "@/Components/SearchBox";
import SuspenseWrapper from '@/components/SuspenseWrapper';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDB",
  description: "movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
        <Header/>
        <SuspenseWrapper>
        <Navbar/>
        </SuspenseWrapper>
        <SearchBox/>
        {children}
        </Providers>
        </body>
    </html>
  );
}
