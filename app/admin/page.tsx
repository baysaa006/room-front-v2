"use client";
import { useQuery, useSubscription } from "@apollo/client";
import { ON_UPDATED_UPLOAD } from "lib/graphql/subscriptions/upload";
import React, { useContext } from "react";
import { GET_UPLOADS } from "lib/graphql/query/upload";
import { AuthContext } from "@/lib/context/auth.context";
import IntegrationsCarousel from "@/components/integrations-carousel";
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

  if (!isAuthenticated) redirect("/");

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-24">
      <div>
        <IntegrationsCarousel />
      </div>
    </section>
  );
};

export default Index;
