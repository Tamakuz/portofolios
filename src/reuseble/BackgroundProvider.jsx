"use client"
import React, { useState, useEffect } from 'react';
import ProfilePicture from "@/atomic/home/ProfilePicture";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Boxes } from "@/components/ui/background-boxes";
import { Meteors } from "@/components/ui/meteors";
import { cn } from "@/lib/utils";


const BackgroundProvider = ({children}) => {
   const [mathRandom, setMathRandom] = useState(1);
  let BackgroundComponent;

  useEffect(() => {
    const interval = setInterval(() => {
      setMathRandom(prevRandom => (prevRandom % 3) + 1);
    }, 50000);

    return () => clearInterval(interval);
  }, [mathRandom]);

  switch (mathRandom) {
    case 1:
      BackgroundComponent = <Boxes />;
      break;
    case 2:
      BackgroundComponent = <BackgroundBeams />;
      break;
    case 3:
      BackgroundComponent = <Meteors number={50} />;
      break;
    default:
      break;
  }

  return (
    <div className="h-fit relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center py-10">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      {children}
      {BackgroundComponent}
    </div>
  );
}

export default BackgroundProvider