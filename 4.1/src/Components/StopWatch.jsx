import React, { useState } from 'react';

const StopWatch = () => {
 const [startTime, setStartTime] = useState(null)
 const [now, setNow] = useState(null)
    
    function handleStart(){
        setStartTime(Date.now());
        setNow(Date.now())
    }
    setInterval(()=>{
        setNow(Date.now())
    }, 10)
    let secondsPassed = 0;
    if(startTime != null && now != null){
        secondsPassed = (now - startTime) / 1000;
    }
    return (
        <div>
            <h1>Time passed: {secondsPassed.toFixed(3)} </h1>
            <button onClick={handleStart}>Start</button>
        </div>
    );
};

export default StopWatch;