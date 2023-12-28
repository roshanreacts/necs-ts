import type { Metadata } from "next";
// import { Inter } from 'next/font/google'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Mercury Platform",
  description: "Welcome to mercury platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = getKindeServerSession();

  if (!(await isAuthenticated())) {
    redirect("/");
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
