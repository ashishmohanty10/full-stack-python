import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar/Navbar";
import { LoginModal } from "@/components/modals/LoginModal";
import { SignupModal } from "@/components/modals/SignupModal";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.className} antialiased`}>
        <Navbar />
        <main className="pt-32">{children}</main>

        <LoginModal />
        <SignupModal />
      </body>
    </html>
  );
}
