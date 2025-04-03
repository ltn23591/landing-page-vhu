import { useEffect, useRef } from "react";

const useIntersectionObserver = (callback, options = {}) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        callback(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.5,
                ...options,
            },
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [callback, options]);

    return elementRef;
};

export default useIntersectionObserver;
