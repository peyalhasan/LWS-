import React from 'react';

const ListItem = ({ name, title, image, style }) => {
    return (
        <div className='App' style={style} >
            <div className='list'>
                <div>
                    <img src={image} alt={name} />
                </div>
                <div>
                    <h1>{name}</h1>
                    <p>{title}</p>
                </div>
            </div>
        </div>
    );
};

export default ListItem;