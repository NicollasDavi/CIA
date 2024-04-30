import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../../app/globals.css";
import AsideBar from "@/components/AsideBar";
import Header from "@/components/Header";
import { AlertProvider } from "../context/AlertContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CIA",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AlertProvider>  <html lang="pt-br">
        <body className={inter.className}>
            <div><AsideBar />
            <Header/>{children}
            </div>
        </body>
    </html></AlertProvider>
  
  );
}
