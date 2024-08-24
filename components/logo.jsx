import { cn } from "@/lib/utils";
import logo from "@/public/logo.png";
import Image from "next/image";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[50px]", className)} src={logo} alt="logo" />
  );
};
