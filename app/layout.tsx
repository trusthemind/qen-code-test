"use client";
import type { Metadata } from "next";
import "./globals.scss";
import { Layout } from "@/components/Layout";

const metadata: Metadata = {
  title: "QenCode",
  description: "This is a test form task for QenCode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Layout>
        <body>{children}</body>
      </Layout>
    </html>
  );
}
