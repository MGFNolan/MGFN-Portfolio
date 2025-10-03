import React, { useEffect } from "react";
import type { MyWorkCard as MyWorkCardType } from "../utils/contentTypes";
import Close from "./Icons/Close";

interface MyWorkModalProps {
    myWorkCard: MyWorkCardType;
    onClose: () => void;
}

function MyWorkModal({ myWorkCard, onClose }: MyWorkModalProps) {
    // This effect runs when the modal is mounted and cleans up when it's unmounted.
    useEffect(() => {
        // This prevents the user from scrolling the page content behind the modal.
        document.body.style.overflow = "hidden";

        // This allows the user to close the modal by pressing the Escape key.
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        // The cleanup function is returned from the effect.
        // It runs when the component unmounts.
        return () => {
            // Re-enable scrolling when the modal is closed.
            document.body.style.overflow = "auto";
            // Remove the event listener to prevent memory leaks.
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]); // The effect depends on `onClose` to ensure it has the latest function.

    return (
        <div
            className="my-work-modal"
            // The dialog role is important for accessibility, indicating a separate window.
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            // Clicking the overlay will close the modal.
            // An empty onKeyDown is added to satisfy the linter rule for accessibility,
            // as the Escape key is handled globally in the useEffect hook.
            onClick={onClose}
            onKeyDown={() => {}}
        >
            <div
                className="my-work-modal__content"
                // We stop propagation to prevent the modal from closing when clicking inside it.
                onClick={(e) => e.stopPropagation()}
                role="presentation"
            >
                <Close
                    onClick={onClose}
                    aria-label="Close modal"
                    colour="bg-[var(--primary)]"
                    buttonClassName="my-work-modal__close-button"
                />
                <img
                    aria-hidden="true"
                    src={myWorkCard.img}
                    alt={myWorkCard.alt}
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    className="my-work-modal__image"
                />
                <h3 id="modal-title" className="my-work-modal__title">
                    {myWorkCard.title}
                </h3>
                <p className="my-work-modal__details">{myWorkCard.details}</p>
                <div className="my-work-modal__icons">
                    {myWorkCard.icons.map((icon) => {
                        const IconComponent = icon.icon;
                        return (
                            <IconComponent
                                key={icon.name}
                                aria-label={icon.alt}
                            />
                        );
                    })}
                </div>
                <div className="my-work-modal__links">
                    {myWorkCard.extraLinks.map((link, index) => (
                        <React.Fragment key={link.label}>
                            <a
                                href={link.href}
                                className="my-work-modal__link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {link.label}
                            </a>
                            {index < myWorkCard.extraLinks.length - 1 && (
                                <span className="separator"> ◆ </span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyWorkModal;
