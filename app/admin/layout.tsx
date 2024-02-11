"use client";

import { useContext, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { redirect } from "next/navigation";
import { AuthContext } from "@/lib/context/auth.context";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header admin={true} />
      <main className="grow">{children}</main>
      <Footer admin={true} />
    </>
  );
}
