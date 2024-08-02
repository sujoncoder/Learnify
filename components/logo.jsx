import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "/public/assets/Logo.png";
export const Logo = ({ className = "" }) => {
  return (
    <Image className={cn("max-w-[70px]", className)} src={logo} alt="logo" />
  );
};
