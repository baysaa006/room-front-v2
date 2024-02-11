import Link from "next/link";
import Logo from "./logo";
import MobileMenu from "./mobile-menu";
import { AuthContext } from "@/lib/context/auth.context";
import React, { useContext } from "react";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

interface Props {
  admin: boolean;
}
export default function Header(props: Props) {
  const { admin } = props;
  const { signOut } = useContext(AuthContext);

  const router = useRouter();

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex flex-row">
            <Logo />
            <MobileMenu />
          </div>
          {admin && (
            <div className="flex justify-start">
              <nav className="hidden md:flex md:grow">
                {/* Desktop menu links */}
                <ul className="flex grow justify-center flex-wrap items-center">
                  <li>
                    <button
                      className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                      onClick={() => router.push("/admin/new")}
                    >
                      <h3 className="h4">Шинэ</h3>
                    </button>
                  </li>
                  <li>
                    <button
                      className="font-medium text-sm text-slate-300 hover:text-white mx-4 lg:mx-5 transition duration-150 ease-in-out"
                      onClick={() => router.push("/admin/upload")}
                    >
                      <h3 className="h4">Өөрчлөлтүүд</h3>
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
          )}
          {admin ? (
            <button
              className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out  group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
              onClick={signOut}
            >
              <span className="relative inline-flex items-center">
                Гарах{" "}
                <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </span>
            </button>
          ) : (
            <ul className="flex-1 flex justify-end items-center">
              <li>
                <Link
                  className="font-medium text-sm text-slate-300 hover:text-white whitespace-nowrap transition duration-150 ease-in-out"
                  href="/signin"
                >
                  Нэвтрэх
                </Link>
              </li>
              <li className="ml-6">
                <Link
                  className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                  href="/signup"
                >
                  <span className="relative inline-flex items-center">
                    Бүртгүүлэх{" "}
                    <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}
