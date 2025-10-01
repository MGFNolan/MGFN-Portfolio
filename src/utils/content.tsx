import { type MyWorkCard, type NavLink } from "./contentTypes";
import hbccImg from "../images/hbcc-placeholder-image.png";
import {
    HTML5,
    CSS,
    JavaScript,
} from "../components/Icons//tech-icons/index.tsx";

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
        img: hbccImg,
        alt: "placeholder image; shows the MVP of the Hebden Bridge Chess Club page",
        link: "https://hebdenbridgechessclub.netlify.app/",
        icons: [
            { name: "HTML", icon: HTML5, alt: "HTML icon" },
            { name: "CSS", icon: CSS, alt: "CSS icon" },
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
        id: "3",
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
];

export { NavLinksContent, WorkCardContent };
