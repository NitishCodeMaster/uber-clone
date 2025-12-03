import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export const useGSAP = (callback, deps = []) => {
    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            callback();
        });

        return () => ctx.revert();
    }, deps);
};
