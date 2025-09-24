import type { MyWorkCard } from "../utils/contentTypes";

interface MyWorkCardProps {
    myWorkCard: MyWorkCard;
}

export default function MyWorkCard({ myWorkCard }: MyWorkCardProps) {
    return (
        <div className="my-work-card" data-testid="my-work-card">
            <img
                src={myWorkCard.img}
                alt={myWorkCard.alt}
                onError={(e) => (e.currentTarget.style.display = "none")}
                data-testid="work-card-image"
                className="my-work-card__image"
            />
            <a
                href={myWorkCard.link}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="work-card-link"
                className="my-work-card__link"
            >
                VIEW PROJECT
            </a>
            <div
                className="my-work-card__card-icons"
                data-testid="work-card-icons"
            >
                {myWorkCard.icons.map((icon) => {
                    const IconComponent = icon.icon;
                    return (
                        <IconComponent key={icon.name} aria-label={icon.alt} />
                    );
                })}
            </div>
            <h3 className="my-work-card__title" data-testid="work-card-title">
                {myWorkCard.title}
            </h3>
            <p
                className="my-work-card__details"
                data-testid="work-card-details"
            >
                {myWorkCard.details}
            </p>
            {myWorkCard.extraLinks.map((link) => {
                return (
                    <a
                        key={link.label}
                        href={link.href}
                        className="my-work-card__extra-links"
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="work-card-extra-links"
                    >
                        {link.label}
                    </a>
                );
            })}
        </div>
    );
}
