interface CloseButtonProps {
    onClick: () => void;
    "aria-label": string;
    buttonClassName?: string;
    colour?: string;
}

export default function Close({
    onClick,
    "aria-label": ariaLabel,
    buttonClassName = "",
    colour = "bg-[var(--secondary)]",
}: CloseButtonProps) {
    return (
        <button
            className={`relative flex size-6 cursor-pointer items-center focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 ${buttonClassName}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <div className={`absolute h-0.5 w-6 rotate-45 ${colour}`} />
            <div className={`absolute h-0.5 w-6 -rotate-45 ${colour}`} />
        </button>
    );
}
