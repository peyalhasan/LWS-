import { useRef } from "react"
import useFadeInAnimatio from "../Hooks/useFadeInAnimation";

export default function Welcome2(){
    const ref = useRef(null);

   useFadeInAnimatio(ref, 3000)


    return (
        <h1 ref={ref}  className="welcome" >Welcome 2</h1>
    )
}