import { type ReactElement, useEffect, useRef } from "react";

interface PageProps {
    children: ReactElement[];
}

function Page(props: PageProps) {
    const shownRef = useRef(false);

    useEffect(() => {
        if (!shownRef.current) {
            window.alert(
                "Hello! My portfolio is very much IN PROGRESS so please be aware that things can and will change. Check out https://github.com/MGFNolan/MGFN-Portfolio for more information."
            );
            shownRef.current = true;
        }
    }, []);
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
