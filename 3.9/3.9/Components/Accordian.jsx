import React, { useState } from 'react';
import Panel from './Panel';

const Accordian = () => {
    const[activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <h2>Learn With Sumit</h2>
            <Panel title={'Paid Course'} 
            isActive={activeIndex === 0 && true}
            onActive={ ()=> setActiveIndex(0)} >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit adipisci error eligendi quis eum aut officia aspernatur aperiam laboriosam! Molestiae soluta laborum libero et minus ratione amet natus adipisci eaque. 
            </Panel>
            <Panel title={'Free Course'} 
            isActive={activeIndex === 1 && true}
            onActive={()=>setActiveIndex(1)} >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit adipisci error eligendi quis eum aut officia aspernatur aperiam laboriosam! Molestiae soluta laborum libero et minus ratione amet natus adipisci eaque. 
            </Panel>
        </div>
    );
};

export default Accordian;