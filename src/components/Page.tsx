import { type ReactElement } from "react";

interface PageProps {
    children: ReactElement[];
}

function Page(props: PageProps) {
    return (
        <>
            <a
                href="#main-content"
                data-testid="skip-to-main"
                className="screen-reader-text"
            >
                Skip to main content
            </a>
            <div id="page-content" data-testid="page">
                {props.children}
            </div>
        </>
    );
}

export default Page;
