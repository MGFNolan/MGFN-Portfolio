import { WorkCardContent } from "../utils/content";
import MyWorkCard from "./MyWorkCard";

export default function MyWork() {
    return (
        <section
            id="my-work"
            data-testid="my-work"
            className="container my-work"
        >
            <h2>My Work</h2>
            <div className="my-work__card-container">
                {WorkCardContent.map((card) => (
                    <MyWorkCard key={card.id} myWorkCard={card} />
                ))}
            </div>
            <button className="btn-primary my-work__btn">More...</button>
        </section>
    );
}
