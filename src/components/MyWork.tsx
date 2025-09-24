import { WorkCardContent } from "../utils/content";
import MyWorkCard from "./MyWorkCard";

export default function MyWork() {
    return (
        <section id="my-work" data-testid="my-work">
            <h2>My Work</h2>
            <div className="my-work">
                {WorkCardContent.map((card) => (
                    <MyWorkCard key={card.id} myWorkCard={card} />
                ))}
            </div>
            <button>More...</button>
        </section>
    );
}
