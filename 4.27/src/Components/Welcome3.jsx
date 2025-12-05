import { useEffect } from "react"
import { useRef } from "react"

export default function Welcome3() {
    const ref = useRef(null)

    useEffect(() => {
        const duration = 1000;
        const node = ref.current ;
        let startTime = performance.now()
        let frameId = null;


        // Request Animation Frame take a callback function 
        function onFrame(now){
            // This callbacke give current time as parameter 
            const passedTime = now - startTime;
            const progress = Math.min(passedTime / duration, 1);
            onProgress(progress)
            if(progress < 1){
                frameId = requestAnimationFrame(onFrame)
            }
        }

        // Update Progress 
        function onProgress(progress){
            node.style.opacity = progress;
        }
        // Start Function 
        function start() {
            // Track current Progress and update progress 
            onProgress(0);
            startTime = performance.now();
            frameId = requestAnimationFrame(onFrame)
        }


        // Start Aanimation 
        start()


        // Stop function 

        function stop(){
            cancelAnimationFrame(frameId);
            startTime = null;
            frameId = null
        }
        // Cleanup
        return () => stop()

    }, [])

    return (
        <h1 ref={ref} className="welcome" >Welcome 3</h1>
    )
}