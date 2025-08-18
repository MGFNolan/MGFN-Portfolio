import { useMenuContext } from "../../context/MobileMenuContext";

export default function Close() {
    const { setMenuOpened } = useMenuContext();
    return (
        <div className="w-full">
            <button
                className="relative ml-auto flex size-6 cursor-pointer items-center focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
                onClick={() => setMenuOpened(false)}
                aria-label="Close mobile navigation menu"
            >
                <div className="absolute h-0.5 w-6 rotate-45 bg-[var(--secondary)]" />
                <div className="absolute h-0.5 w-6 -rotate-45 bg-[var(--secondary)]" />
            </button>
        </div>
    );
}
