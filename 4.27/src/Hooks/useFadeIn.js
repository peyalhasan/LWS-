import { useEffect } from "react";
import { FadeInAnimation } from "./animation";

export default function useFadeIn(ref, duration) {
    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(duration)

        // cleanup 

        return () => {
            animation.stop()
        }
    }, [ref, duration])

}