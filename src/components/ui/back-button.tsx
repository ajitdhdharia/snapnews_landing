import React from "react";
import Link from "next/link";
import { cn } from "@/utils/cn";
import { IconArrowLeft } from "@tabler/icons-react";

const BackButton = ({ className }: { className?: string }) => {
  return (
    <Link
      href="/"
      className={cn(
        " h-8 w-8 flex justify-center items-center rounded-full shadow-[0_4px_14px_0_rgb(0,0,0,10%)] hover:shadow-[0_6px_20px_rgba(93,93,93,23%)] bg-[#fff] text-[#696969] font-light transition duration-200 ease-linear",
        className
      )}
    >
      <IconArrowLeft className="" />
    </Link>
  );
};

export default BackButton;
