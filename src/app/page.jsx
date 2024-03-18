import React from "react";
import ProfilePicture from "@/atomic/home/ProfilePicture";
import BackgroundProvider from "@/reuseble/BackgroundProvider";
import { cn } from "@/lib/utils";
import Sosial from "@/reuseble/Sosial";
import { Instagram, Linkedin, Github } from "lucide-react";
import MenusProfile from "@/atomic/home/MenusProfile";

const sosialDatas = [
  {
    link: "",
    icon: <Instagram />,
    titleLink: "@jovantama_",
  },
  {
    link: "",
    icon: <Linkedin />,
    titleLink: "jovan panji pratama",
  },
  {
    link: "",
    icon: <Github />,
    titleLink: "tamakuz",
  },
];

export default function Home() {
  return (
    <BackgroundProvider>
      <div className={cn("relative z-20 flex flex-col items-center")}>
        <ProfilePicture />
        <div className="my-3 flex justify-center">
          {sosialDatas.map((sosial, index) => (
            <Sosial
              key={index}
              link={sosial.link}
              icon={sosial.icon}
              titleLink={sosial.titleLink}
            />
          ))}
        </div>
        <div className="relative flex justify-center text-slate-100 font-bold text-3xl md:text-5xl p-1">
          <h1>JOVAN PANJI PRATAMA</h1>
          <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute  bottom-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        </div>
        <MenusProfile />
        <p className="text-slate-500">indonesia, east java</p>
      </div>
    </BackgroundProvider>
  );
}
