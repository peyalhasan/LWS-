import React, { useState } from 'react';

const Form = () => {

    const[inputs, setInputs] = useState([{
        id: 1,
        label: "input",
    }])

    const handleClick = () =>{
        const nextId = inputs[inputs.length - 1].id + 1;
        setInputs([
            ...inputs,
            {
                id: nextId,
                label: "input"
            }
        ])
    }

    return (
        <div>
            {
                inputs.map((input)=>(
                    <div
                    style={{
                        marginTop: 10
                    }}
                    key={input.id}
                    >
                        <input type='text' label={input.label} />
                    </div>
                ))
            }
            <button onClick={handleClick} style={{
                marginTop: 20,
            }} >Add Input</button>
        </div>
    );
};

export default Form;