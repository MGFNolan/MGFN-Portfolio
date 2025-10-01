import type { ComponentType, SVGProps } from "react";

interface NavLink {
    id: number;
    href: string;
    text: string;
}

interface WorkCardTechnologyIcon {
    name: string;
    icon: ComponentType<SVGProps<SVGSVGElement>>;
    alt: string;
}

interface WorkCardExtraLinks {
    href: string;
    label: string;
}

interface MyWorkCard {
    id: string;
    img: string;
    alt: string;
    link: string;
    icons: WorkCardTechnologyIcon[];
    title: string;
    details: string;
    extraLinks: WorkCardExtraLinks[];
}

export type { NavLink, MyWorkCard };
