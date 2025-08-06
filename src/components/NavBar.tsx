import { NavLinksContent } from "../utils/content";
import Hamburger from "./Icons/Hamburger.tsx";

export default function NavBar() {
    return (
        <nav className="nav" aria-label="Main navigation">
            <div className="nav__group">
                <ul className="nav__links">
                    {NavLinksContent.map((link) => (
                        <li key={link.id} className="nav__link-individual">
                            <a
                                href={link.href}
                                aria-current={
                                    location.pathname === link.href
                                        ? "page"
                                        : undefined
                                }
                                role="button"
                                aria-label={link.text}
                            >
                                {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
                <Hamburger />
            </div>
        </nav>
    );
}
