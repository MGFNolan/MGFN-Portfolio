import { useMenuContext } from "../../context/MobileMenuContext";

export default function Hamburger() {
    const { setMenuOpened, menuOpened } = useMenuContext();
    return (
        <button
            aria-label="Open mobile navigation menu"
            aria-expanded={menuOpened}
            aria-controls="mobile-nav"
            className="hamburger-menu"
            onClick={() => setMenuOpened(true)}
        >
            <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-[var(--secondary)] max-sm:h-[0.125rem] max-sm:w-6" />
            <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-[var(--secondary)] max-sm:h-[0.125rem] max-sm:w-6" />
            <div className="h-[0.15rem] w-7 shrink-0 grow-0 rounded-3xl bg-[var(--secondary)] max-sm:h-[0.125rem] max-sm:w-6" />
        </button>
    );
}
