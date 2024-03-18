import { HoverEffect } from "@/components/ui/card-hover-effect";
import CardMenu from "@/components/ui/card-menu";
import React from "react";
import {
  Code,
  UserRound,
  LayoutPanelTop,
  Rss,
  Image,
  Mail,
} from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const MenusProfile = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 py-10 justify-items-stretch">
      {projects.map((item, index) => (
        <CardContainer key={index}>
          <CardBody>
            <HoverEffect indexItem={index}>
              <CardMenu
                className="bg-slate-800"
                title={item.title}
                desc={item.description}
                icon={item.icon}
                linkDir={item.linkDir}
              />
            </HoverEffect>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
};

export default MenusProfile;

const projects = [
  {
    title: "My Skill",
    description:
      "Teknologi yang sudah saya pelajari dan yang sedang saya pelajari.",
    icon: <Code />,
    linkDir: "/myskills",
  },
  {
    title: "About Me",
    description:
      "Sebuah cerita tentang diri saya, minat, dan pengalaman hidup.",
    icon: <UserRound />,
    linkDir: "/aboutme",
  },
  {
    title: "Portfolios",
    description: "Kumpulan proyek-proyek yang pernah saya kerjakan.",
    icon: <LayoutPanelTop />,
    linkDir: "/portofolios",
  },
  {
    title: "Blog",
    description:
      "Blogs pribadi saya tentang berbagai topik yang menarik perhatian saya.",
    icon: <Rss />,
    linkDir: "/blog",
  },
  {
    title: "Gallery",
    description:
      "Koleksi foto-foto dan karya seni yang saya sukai dan hasil karyanya.",
    icon: <Image />,
    linkDir: "/gallery",
  },
  {
    title: "Contact",
    description:
      "Informasi kontak saya jika Anda ingin berkomunikasi atau berkolaborasi.",
    icon: <Mail />,
    linkDir: "/contact",
  },
];
