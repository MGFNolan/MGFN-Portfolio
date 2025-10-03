import type { MyWorkCard } from "../utils/contentTypes";
import React from "react";
import { useState } from "react";
import MyWorkModal from "./MyWorkModal";

interface MyWorkCardProps {
    myWorkCard: MyWorkCard;
}

export default function MyWorkCard({ myWorkCard }: MyWorkCardProps) {
    // State to manage the visibility of the modal.
    // Each card will have its own state to control its corresponding modal.
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Functions to open and close the modal.
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        // The main div is now clickable to open the modal.
        <div className="my-work-card" data-testid="my-work-card">
            {/* This button wraps the main content and handles opening the modal. */}
            <button
                className="my-work-card__modal-button"
                onClick={openModal}
                aria-label={`View details for ${myWorkCard.title}`}
            >
                <img
                    aria-hidden="true"
                    src={myWorkCard.img}
                    alt="decorative image" // Alt text is decorative since the button has a label.
                    onError={(e) => (e.currentTarget.style.display = "none")}
                    data-testid="work-card-image"
                    className="my-work-card__image"
                />
                <div
                    className="my-work-card__card-icons"
                    data-testid="work-card-icons"
                >
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
                <h3
                    className="my-work-card__title"
                    data-testid="work-card-title"
                >
                    {myWorkCard.title}
                </h3>
                <p
                    className="my-work-card__details"
                    data-testid="work-card-details"
                >
                    {myWorkCard.details}
                </p>
            </button>
            <div
                className="my-work-card__extra-links-container"
                data-testid="work-card-extra-links"
            >
                {myWorkCard.extraLinks.map((link, index) => (
                    <React.Fragment key={link.label}>
                        <a
                            href={link.href}
                            className="my-work-card__extra-links"
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
            {/* The modal is rendered conditionally based on the isModalOpen state. */}
            {/* We pass the card data and the closeModal function as props. */}
            {isModalOpen && (
                <MyWorkModal myWorkCard={myWorkCard} onClose={closeModal} />
            )}
        </div>
    );
}
