"use client";
import AuthLogo from "../auth-logo";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  return (
    <>
      {/* Page header */}
      <div className="max-w-3xl mx-auto text-center pb-12">
        {/* Logo */}
        <AuthLogo />
        {/* Page title */}
        <h1 className="h1 bg-clip-text text-transparent h-60 bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
          Тун удахгүй ...
        </h1>
        <button
          onClick={() => router.push("/")}
          className="btn text-sm text-white w-1/4 bg-purple-500 hover:bg-purple-600 shadow-sm group"
        >
          Буцах{" "}
          {/* <span className="tracking-normal text-purple-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1 ">
            -&gt;
          </span> */}
        </button>
      </div>
    </>
  );
}
