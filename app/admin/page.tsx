"use client";
import Card from "components/card";
import { useQuery, useSubscription } from "@apollo/client";
import { ON_UPDATED_UPLOAD } from "lib/graphql/subscriptions/upload";
import React, { useContext } from "react";
import { GET_UPLOADS } from "lib/graphql/query/upload";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AuthContext } from "@/lib/context/auth.context";
import {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IntegrationsCarousel from "@/components/integrations-carousel";

const Index = () => {
  const { payload } = useContext(AuthContext);

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

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-24">
      <div>
        <IntegrationsCarousel />
      </div>
    </section>
  );
};

export default Index;
