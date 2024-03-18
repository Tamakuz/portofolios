import React from "react";
import Image from "next/image";
import FloatingNav from "@/components/ui/floating-navbar";
import { Home } from "lucide-react";

const Myskill = () => {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home />,
    },
    {
      name: "About Me",
      link: "/aboutme",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
    <div className="bg-slate-800 h-fit py-10 relative">
      <FloatingNav
        navItems={navItems}
        className="py-5 gap-5 backdrop-blur-sm border border-slate-900"
      />
      <div className="text-center py-10 px-60 space-y-5">
        <h1 className="text-sky-500 font-bold text-6xl">WHAT I DO</h1>
        <p className="text-slate-200 text-xl font-thin">
          I m from Indonesia and currently live in Ngawi, East Java. I am a
          student at a university in Indonesia. The skills I have learned are
          below
        </p>
      </div>
      <div className="flex px-10 items-center justify-center">
        <div className="w-20">
          <div className="-rotate-90 w-fit">
            <p className="text-slate-50 text-2xl font-semibold">Skills</p>
            <div className="w-full h-1 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500" />
          </div>
        </div>
        <div className="grow grid grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-5">
          {Array.from({ length: 10 }).map((skill, index) => (
            <div
              key={index}
              className="bg-slate-700 rounded-xl shadow-md flex gap-5 p-3 flex-col justify-center items-center"
            >
              <Image
                src="https://www.svgrepo.com/show/452228/html-5.svg"
                width={150}
                height={150}
                alt="xssdc"
              />
              <p className="text-slate-200 font-semibold text-xl">HTML</p>
            </div>
          ))}
        </div>
        <div className="w-20 space-y-5 flex flex-col items-center">
          <div className="w-1 h-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  " />
          <div className="w-1 h-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  " />
          <div className="w-1 h-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  " />
          <div className="w-1 h-20 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500  " />
        </div>
      </div>
    </div>
  );
};

export default Myskill;
