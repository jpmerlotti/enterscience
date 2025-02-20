import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarLayout } from "@/components/sidebar-layout";
import { CustomSidebar } from '@/components/custom-sidebar';
import { Sidebar } from '@/components/sidebar';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ABA",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <head>
      </head>
      <body>
        <SidebarLayout
          sidebar={<Sidebar>{<CustomSidebar />}</Sidebar>}
        >
        {children}
        </SidebarLayout> 
      </body>
    </html>
  );
}
