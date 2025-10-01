import { FaChevronCircleDown } from "react-icons/fa";

export default function Hero() {
    return (
        <section
            id="hero"
            aria-label="Hero section: introduction to Matthew Nolan's Portfolio"
            data-testid="hero"
            className="hero container"
        >
            <div className="hero__content" data-testid="hero-container">
                <h1 data-testid="hero-title" className="hero__content__title">
                    Matthew Nolan
                </h1>
                <p
                    data-testid="hero-subtitle"
                    className="hero__content__subtitle"
                >
                    Software Developer
                </p>
            </div>

            <div data-testid="hero-more" className="hero__more">
                <p>My work, experience, and more</p>
                <FaChevronCircleDown />
            </div>
        </section>
    );
}
