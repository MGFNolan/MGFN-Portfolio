import { type MyWorkCard, type NavLink } from "./contentTypes";
import hbccImg from "../images/hbcc-placeholder-image.png";
import goTravelImg from "../images/GoTravel-image.png";
import mnPortfolioImg from "../images/MNPortfolio-Image.png";
import {
    HTML5,
    CSS,
    JavaScript,
    React,
    ReactRouter,
    TailwindCSS,
    Supabase,
    Canva,
    GitHub,
    Playwright,
    TypeScript,
} from "../components/Icons/tech-icons/index.tsx";

const NavLinksContent: NavLink[] = [
    {
        id: 1,
        href: "#my-work",
        text: "My Work",
    },
    {
        id: 2,
        href: "#my-experience",
        text: "My Experience",
    },
    {
        id: 3,
        href: "#case-studies",
        text: "Case Studies",
    },
    {
        id: 4,
        href: "#stats",
        text: "Stats",
    },
    {
        id: 5,
        href: "#contact",
        text: "Contact",
    },
];

const WorkCardContent: MyWorkCard[] = [
    {
        id: "1",
        img: hbccImg,
        alt: "placeholder image; shows the MVP of the Hebden Bridge Chess Club page",
        link: "https://hebdenbridgechessclub.netlify.app/",
        icons: [
            { name: "HTML", icon: HTML5, alt: "HTML icon" },
            { name: "CSS", icon: CSS, alt: "CSS icon" },
            {
                name: "JavaScript",
                icon: JavaScript,
                alt: "JavaScript icon",
            },
            { name: "React", icon: React, alt: "React icon" },
            { name: "Typescript", icon: TypeScript, alt: "TypeScript icon" },
            { name: "Tailwind", icon: TailwindCSS, alt: "Tailwind icon" },
            { name: "Canva", icon: Canva, alt: "Canva icon" },
            { name: "GitHub", icon: GitHub, alt: "GitHub icon" },
        ],
        title: "Hebden Bridge Chess Club",
        details:
            "A website for a local chess club, built with React, HTML, Tailwind and JavaScript.",
        extraLinks: [
            {
                href: "https://github.com/MGFN/hebden-bridge-chess-club",
                label: "GitHub",
            },
        ],
    },
    {
        id: "2",
        img: mnPortfolioImg,
        alt: "placeholder image; shows the first section of this website",
        link: "https://mgfnolan.github.io/MGFN-Portfolio/",
        icons: [
            { name: "HTML", icon: HTML5, alt: "HTML icon" },
            { name: "CSS", icon: CSS, alt: "CSS icon" },
            {
                name: "JavaScript",
                icon: JavaScript,
                alt: "JavaScript icon",
            },
            { name: "React", icon: React, alt: "React icon" },
            { name: "Typescript", icon: TypeScript, alt: "TypeScript icon" },
            { name: "Tailwind", icon: TailwindCSS, alt: "Tailwind icon" },
            { name: "Canva", icon: Canva, alt: "Canva icon" },
            { name: "GitHub", icon: GitHub, alt: "GitHub icon" },
            { name: "Playwright", icon: Playwright, alt: "Playwright icon" },
        ],
        title: "MGFNolan Portfolio",
        details: "My portfolio website, which is in progress, built in React.",
        extraLinks: [
            {
                href: "https://github.com/MGFNolan/MGFN-Portfolio",
                label: "GitHub",
            },
        ],
    },
    {
        id: "3",
        img: goTravelImg,
        alt: "placeholder image; shows the hero component of the GoTravel website",
        link: "https://google.com",
        icons: [
            { name: "HTML", icon: HTML5, alt: "HTML icon" },
            { name: "CSS", icon: CSS, alt: "CSS icon" },
            {
                name: "JavaScript",
                icon: JavaScript,
                alt: "JavaScript icon",
            },
            { name: "React", icon: React, alt: "React icon" },
            { name: "Typescript", icon: TypeScript, alt: "TypeScript icon" },
            { name: "Tailwind", icon: TailwindCSS, alt: "Tailwind icon" },
            { name: "Canva", icon: Canva, alt: "Canva icon" },
            { name: "GitHub", icon: GitHub, alt: "GitHub icon" },
            { name: "Playwright", icon: Playwright, alt: "Playwright icon" },
            { name: "Supabase", icon: Supabase, alt: "Supabase icon" },
            {
                name: "React Router",
                icon: ReactRouter,
                alt: "React Router icon",
            },
        ],
        title: "GoTravel",
        details:
            "A website for a fictional travel agents, following Chad Casey's tutorial.",
        extraLinks: [
            {
                href: "https://github.com/MGFNolan/GoTravelLandingPage",
                label: "GitHub",
            },
            {
                href: "https://youtu.be/Hyd4sT_tYTE?si=z8iSGcKnY7B10l2-",
                label: "Tutorial Video",
            },
        ],
    },
];

export { NavLinksContent, WorkCardContent };
