import { Button } from "@/components/ui/moving-border";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FollowerPointerCard } from "@/components/ui/following-pointer";

const Sosial = ({ link, icon, titleLink }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="relative group/card  h-auto rounded-xl p-1">
        <CardItem translateZ="50">
          <Button
            as="div"
            borderRadius="10rem"
            containerClassName="h-fit w-fit"
            className="bg-slate-900 border-slate-800 p-3 text-slate-100"
          >
            {icon}
          </Button>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default Sosial;
