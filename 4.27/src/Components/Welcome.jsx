import { useEffect, useRef } from "react"

export default function Welcome(){

    const ref = useRef(null)

    useEffect(()=>{
        const duration = 1000;
        const node = ref.current;
        let frameId = null;

        let startTime = performance.now();


        function onFrame(now){
            const timePassed = now - startTime;
            const progress = Math.min(timePassed / duration, 1)
            onProgress(progress)
            if(progress < 1){
               frameId = requestAnimationFrame(onFrame)
            }
        }

        function onProgress(progress){
            node.style.opacity = progress
        }

        function start(){
            onProgress(0)
            startTime = performance.now();
           frameId=  requestAnimationFrame(onFrame)
        }

        start()

        function stop(){
            cancelAnimationFrame(frameId)
            startTime = null;
            frameId = null
        }

        // cleanup 
        return () => stop()
    },[])


    return (
        <h1 ref={ref} className="welcome">Welcome</h1>
    )

}