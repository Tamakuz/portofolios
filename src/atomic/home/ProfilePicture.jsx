import { Button } from "@/components/ui/moving-border";
import React from "react";

const ProfilePicture = () => {
  return (
    <Button
      as="div"
      borderRadius="10rem"
      containerClassName="h-[200px] w-[200px]"
      className="bg-slate-900 text-white border-slate-800 p-1"
    >
      <img
        className="object-cover w-full h-full rounded-full"
        src="https://i.ibb.co/wKjg36t/IMG-20231130-WA0012.jpg"
        alt=""
      />
    </Button>
  );
};

export default ProfilePicture;
