// import { useEffect, useRef } from "react"

export default function Welcome(){

    // const ref = useRef(null)

    // useEffect(()=>{
    //     const duration = 1000;
    //     const node = ref.current;

    //     let startTime = performance.now();


    //     function onFrame(now){
    //         const timePassed = now - startTime;
    //         const progress = Math.min(timePassed / duration, 1)
    //         onProgress(progress)
    //         if(progress < 1){
    //             requestAnimationFrame(onFrame)
    //         }
    //     }

    //     function onProgress(progress){
    //         node.style.opacity = progress
    //     }

    //     function start(){
    //         onProgress(0)
    //         startTime = performance.now();
    //         requestAnimationFrame(onFrame)
    //     }

    //     start()

    //     // cleanup 
    //     return () => stop()
    // },[])


    return (
        <h1  className="welcome">Welcome</h1>
    )

}