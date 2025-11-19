import React from 'react';

const TryPanel = ({title,children,isActive,onActive}) => {
    return (
            <section className='panel ' >
            <h3> {title} </h3>
            {isActive ?   <p> {children} </p> :
            <button onClick={onActive} >Show </button> }
            </section>
    );
};

export default TryPanel;