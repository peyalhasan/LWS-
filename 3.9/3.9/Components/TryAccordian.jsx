import React, { useState } from 'react';
import TryPanel from './TryPanel';

const TryAccordian = () => {
    const[activeIndex, setActiveIndex] = useState(0);
    return (
        <div>
            
            <TryPanel title={"Paid Course"}
            isActive={activeIndex===0 && true}
            onActive={()=>setActiveIndex(0)}
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro vero similique, velit molestiae autem fuga eius adipisci repudiandae excepturi alias harum facere laboriosam asperiores temporibus ipsa assumenda sapiente deleniti?
            </TryPanel>
            <TryPanel title={"Free Course"}
             isActive={activeIndex === 1 && true}
             onActive={()=>setActiveIndex(1)}
             >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit porro vero similique, velit molestiae autem fuga eius adipisci repudiandae excepturi alias harum facere laboriosam asperiores temporibus ipsa assumenda sapiente deleniti?
            </TryPanel>

        </div>
    );
};

export default TryAccordian;