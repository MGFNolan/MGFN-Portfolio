import { useState } from "react";

interface ImageWithFallbackProps {
    src: string;
    alt: string;
    "data-testid": string;
    className: string;
}

export default function ImageWithFallback({
    src,
    alt,
    ...props
}: ImageWithFallbackProps) {
    const [hasError, setHasError] = useState(false);

    if (hasError) {
        return null;
    }

    return (
        <img src={src} alt={alt} {...props} onError={() => setHasError(true)} />
    );
}
