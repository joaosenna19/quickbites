import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Footer from "@/components/footer";
import NavBar from "@/components/nav-bar";
import EditModal from "@/components/edit-modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Bites",
  description: "Your favorite restaurant.",
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <EditModal />
      </body>
    </html>
  );
}
