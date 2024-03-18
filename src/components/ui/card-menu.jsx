import { cn } from "@/lib/utils";
import React from "react";
import { CardItem } from "./3d-card";
import Link from "next/link";

const CardMenu = ({ className, title, desc, icon, linkDir }) => {
  return (
    <CardItem translateZ={30}>
      <div
        className={cn(
          "p-4 rounded-2xl h-full w-full overflow-hidden border border-white/[0.2] group-hover:border-slate-700 relative z-20 cursor-pointer",
          className
        )}
      >
        <Link href={linkDir} className="relative z-50">
          <div className="p-4">
            <div className="w-10 h-10 text-slate-300 flex justify-center items-center">
              {icon}
            </div>
            <h4
              className={cn(
                "text-zinc-100 font-bold tracking-wide mt-4",
                className
              )}
            >
              {title}
            </h4>
            <p
              className={cn(
                "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
                className
              )}
            >
              {desc}
            </p>
          </div>
        </Link>
      </div>
    </CardItem>
  );
};

export default CardMenu;
6;
