import { type ReactElement } from "react";

interface MainProps {
    children?: ReactElement[];
}

export default function Main(props: MainProps) {
    return (
        <main id="main" data-testid="main">
            {props.children}
        </main>
    );
}
