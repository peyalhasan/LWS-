import React, { useState } from 'react';

const Pointer = () => {

    const [position, setPosition] = useState({
        x: 0,
        y: 0,
    })

    const handlePointerMove = (e) =>{
        setPosition({
            x: e.clientX,
            y: e.clientY,
        })
    }

    return (
        <div 
        
            style={{
                position: 'relative',
                width: '100vw',
                height: '40vh',
            }}
            onPointerMove={handlePointerMove}
       >
            <div
            
            style={{
                position: "absolute",
                backgroundColor: 'red',
                borderRadius: '50%',
                left: -10,
                top: -10,
                width: 20,
                height: 20,
                transform: ` translate(${position.x}px, ${position.y}px)`,
            }}

            >
            </div>
            
        </div>
    );
};

export default Pointer;