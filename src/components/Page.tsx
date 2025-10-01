import { type ReactElement } from "react";

interface PageProps {
    children: ReactElement[];
}

function Page(props: PageProps) {
    return (
        <div id="page-content" data-testid="page">
            <a
                href="#main-content"
                data-testid="skip-to-main"
                className="screen-reader-text"
            >
                Skip to main content
            </a>
            {props.children}
        </div>
    );
}

export default Page;
