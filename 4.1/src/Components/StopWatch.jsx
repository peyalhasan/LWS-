import React, { useRef, useState } from 'react';

const StopWatch = () => {
    const [start, setStart] = useState(null);
    const [now , setNow] = useState(null);
    let intervalReferance = useRef(null);
    
    function handleStart(){
        setStart(Date.now());
        setNow(Date.now());
        
        intervalReferance.current = setInterval(()=>{
            setStart(Date.now())
        }, 10)
    }
    function handleStop(){
        clearInterval(intervalReferance.current)
    }
    let counted = 0;
    if(start != null & now != null){
        counted= (start - now) / 1000;
    }
    return (
        <div>
            <h1>Time passed: {counted.toFixed(3)} </h1>
            <button onClick={handleStart} > Start </button>
            <button onClick={handleStop}>Stop</button>
        </div>
    );
};

export default StopWatch;