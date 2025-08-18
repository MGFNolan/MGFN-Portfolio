export default function Hero() {
    return (
        <section
            id="hero"
            aria-label="Hero section: introduction to Matthew Nolan's Portfolio"
            data-testid="hero"
        >
            <div
                className="container hero__content"
                data-testid="hero-container"
            >
                <h1 data-testid="hero-title">Matthew Nolan</h1>
                <p data-testid="hero-subtitle">Software Developer</p>
            </div>
        </section>
    );
}
