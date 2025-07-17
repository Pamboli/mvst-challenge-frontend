import { inter } from "@/fonts";
import "./globals.css";
import { Toaster } from "sonner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVST Coffee",
  description: "MVST Coffee challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-dark`}>
        {children}
        <Toaster className="lg:hidden" position="top-center" />
        <Toaster className="hidden lg:block" position="top-right" />
      </body>
    </html>
  );
}
