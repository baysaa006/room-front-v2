"use client";
import { useQuery, useSubscription } from "@apollo/client";
import { ON_UPDATED_UPLOAD } from "lib/graphql/subscriptions/upload";
import React, { useContext } from "react";
import { GET_UPLOADS } from "lib/graphql/query/upload";
import { AuthContext } from "@/lib/context/auth.context";
import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
const Index = () => {
  const { payload, isAuthenticated } = useContext(AuthContext);

  const { data, loading } = useQuery(GET_UPLOADS, {
    fetchPolicy: "network-only",
  });

  useSubscription(ON_UPDATED_UPLOAD, {
    variables: { iss: payload.iss },
    onData({ client, data: { data } }) {
      console.log(data);
    },
  });

  const downloadImage = (image: any) => {
    fetch(image)
      .then((response) => response.blob())
      .then((blob) => {
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      })
      .catch((error) => console.error("Error downloading image:", error));
  };

  if (!isAuthenticated) redirect("/");

  if (loading) return;
  else
    return (
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-24">
        <h4 className="font-semibold h4 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0 mb-8">
          Таны өөрлөлт хийсэн зурагууд
        </h4>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
          {data &&
            data?.getPredictions?.map((data: any, index: number) => (
              <div
                key={index}
                className="swiper-slide h-auto bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative"
              >
                <div className="flex flex-col p-5 h-full">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="relative">
                      <Image
                        src={data.before}
                        width={40}
                        height={40}
                        alt="Icon 01"
                      />
                    </div>
                    <Link
                      className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0"
                      href="/integrations/single-post"
                    >
                      Retool
                    </Link>
                  </div>
                  <div className="grow mb-4">
                    <div className="text-sm text-slate-400">
                      Stellar makes it easy to build extensions by providing an
                      authentication provider that handles the OAuth flow.
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex -space-x-3 -ml-0.5"></div>
                    <button className="flex items-center space-x-2 font-medium text-sm text-slate-300 hover:text-white transition-colors">
                      <span className="sr-only">Like</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                      >
                        <path
                          className="fill-slate-500"
                          d="M11.86 15.154 8 13.125l-3.86 2.03c-.726.386-1.591-.236-1.45-1.055l.737-4.299L.303 6.757a1 1 0 0 1 .555-1.706l4.316-.627L7.104.512c.337-.683 1.458-.683 1.794 0l1.93 3.911 4.317.627a1.001 1.001 0 0 1 .555 1.706l-3.124 3.045.737 4.3c.14.822-.726 1.435-1.452 1.053ZM8.468 11.11l2.532 1.331-.483-2.82a1 1 0 0 1 .287-.885l2.049-1.998-2.831-.41a.996.996 0 0 1-.753-.548L8 3.214 6.734 5.78a1 1 0 0 1-.753.547l-2.831.411 2.049 1.998a1 1 0 0 1 .287.885l-.483 2.82 2.532-1.33a.998.998 0 0 1 .932 0Z"
                        />
                      </svg>
                      <span>2.3K</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section>
    );
};

export default Index;
