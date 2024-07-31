import { Toaster } from "@/components/ui/sonner";
import connectDB from "@/config/DB";
import { cn } from "@/lib/utils";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Learnify - Best Student Choice LMS Platform",
  description: "Explore || Learn || Build || Share",
};

export default async function RootLayout({ children }) {
  await connectDB();
  return (
    <html lang="en">
      <body className={cn(inter.className, poppins.className)}>
        {children}
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
