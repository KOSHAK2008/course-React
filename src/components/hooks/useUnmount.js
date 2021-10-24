import { useRef, useEffect } from "react";

export const useUnmount = (fn) => {
    const fnRef = useRef(fn);
    useEffect(() => () => fnRef.current(), []);
    // useEffect(() => () => fn(), [fn]);

};
