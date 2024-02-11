"use client";
import { ApolloWrapper } from "@/lib/context/wrapper";
import "./css/style.css";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { useContext } from "react";
import AuthProvider, { AuthContext } from "@/lib/context/auth.context";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} font-inter antialiased bg-slate-900 text-slate-100 tracking-tight`}
      >
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
          <ApolloWrapper>
            <AuthProvider>{children}</AuthProvider>
          </ApolloWrapper>
          <Toaster />
        </div>
      </body>
    </html>
  );
}
