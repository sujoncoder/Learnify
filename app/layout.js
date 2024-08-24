import { Toaster } from "@/components/ui/sonner";
import connectDB from "@/config/database";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
const poppins = Inter({ subsets: ["latin"], variable: "--font-poppins" });

export const metadata = {
  title: "Learnify - Your Friendly Learning Hub",
  description: "Join us to Explore, Learn, Build, and Share in a supportive community!",
};


export default async function RootLayout({ children }) {
  await connectDB();
  return (
    <html lang="en">
      <body
        className={cn(inter.className, poppins.className)}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
