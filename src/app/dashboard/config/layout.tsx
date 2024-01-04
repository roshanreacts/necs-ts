"use client"
import ConfigContainer from "@/containers/ConfigContainer/ConfigContainer";
import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

export default function ConfigLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <div>
        <Link href={"/dashboard/config"}>Back</Link>
        <ConfigContainer />
      </div>
      <div>
        {children}
      </div>
    </Layout>
  )
}

const Layout = styled.div(props => ({
  display: "grid",
  gridTemplateColumns: "25% 75%"
}))