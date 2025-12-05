import {  useRef } from "react"
import useFadeInAnimatio from "../Hooks/useFadeInAnimation"

export default function Welcome(){

    const ref = useRef(null)

    useFadeInAnimatio(ref, 5000)


    return (
        <h1 ref={ref} className="welcome">Welcome</h1>
    )

}