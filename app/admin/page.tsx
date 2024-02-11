"use client";

import { GET_USER } from "@/lib/graphql/query/user";
import { useQuery } from "@apollo/client";
import React from "react";

function Admin() {
  const { data, loading, error } = useQuery(GET_USER);

  console.log(data);

  if (loading) return <div>Loading</div>;

  return <div>admin</div>;
}

export default Admin;
