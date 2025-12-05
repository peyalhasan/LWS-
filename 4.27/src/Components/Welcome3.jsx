import {  useRef } from "react"
import { FadeInAnimation } from "../Hooks/animation"
import useFadeIn from "../Hooks/useFadeIn"

export default function Welcome3() {
    const ref = useRef(null)
    const duration = 1000

    useFadeIn(ref, duration)

    return (
        <h1 ref={ref} className="welcome" >Welcome 3</h1>
    )
}