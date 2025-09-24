import { type MyWorkCard, type NavLink } from "./contentTypes";
import hbccImg from "../images/hbcc-placeholder-image.png";
import htmlIcon from "../icons/html.tsx";
import cssIcon from "../icons/css.tsx";
import javascriptIcon from "../icons/javascript.tsx";

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
            { name: "HTML", icon: htmlIcon, alt: "HTML icon" },
            { name: "CSS", icon: cssIcon, alt: "CSS icon" },
            {
                name: "JavaScript",
                icon: javascriptIcon,
                alt: "JavaScript icon",
            },
        ],
        title: "Hebden Bridge Chess Club",
        details:
            "A website for a local chess club, built with vanilla HTML, CSS and JavaScript.",
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
            { name: "HTML", icon: htmlIcon, alt: "HTML icon" },
            { name: "CSS", icon: cssIcon, alt: "CSS icon" },
        ],
        title: "Hebden Bridge Chess Club",
        details:
            "A website for a local chess club, built with vanilla HTML, CSS and JavaScript.",
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
            { name: "HTML", icon: htmlIcon, alt: "HTML icon" },
            { name: "CSS", icon: cssIcon, alt: "CSS icon" },
            {
                name: "JavaScript",
                icon: javascriptIcon,
                alt: "JavaScript icon",
            },
        ],
        title: "Hebden Bridge Chess Club",
        details:
            "A website for a local chess club, built with vanilla HTML, CSS and JavaScript.",
        extraLinks: [
            {
                href: "https://github.com/MGFN/hebden-bridge-chess-club",
                label: "GitHub",
            },
        ],
    },
];

export { NavLinksContent, WorkCardContent };
