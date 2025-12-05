import { useEffect } from "react";
import { useRef } from "react"

export default function Welcome2(){
    const ref = useRef(null);

    useEffect(()=>{
        const duration = 1000;
        const node = ref.current;
        let startTime = performance.now()
        let frameId = null


    
        // RequestAnimationFrame callback funciton 
        function onFrame(now){
            const timePassed = now- startTime;

            const progress = Math.min(timePassed / duration, 1)

            // Pass progress value onProgress function 
            onProgress(progress)
            if(progress< 1){
                frameId = requestAnimationFrame(onFrame)
            }
        }
    
        // Track Progress
        function onProgress(progress){
            // Here progress is updated value
            node.style.opacity = progress
        }


        // Start Function 
        function start(){

            // Progracess store
            onProgress(0);
            startTime = performance.now()
            frameId = requestAnimationFrame(onFrame)

        }
    
    
        // Start Animation
        start()
    
        // Stop function 

        function stop(){
            cancelAnimationFrame(frameId);
            startTime = null
            frameId = null
        }

        // CleanUp 
       return () => stop()

    },[])



    return (
        <h1 ref={ref}  className="welcome" >Welcome 2</h1>
    )
}