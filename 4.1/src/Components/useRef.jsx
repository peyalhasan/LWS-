import { useRef } from "react";

const UseRef = () => {
    const myRef = useRef(null)

    function handleScroll(){
        myRef.current.textContent = "Hello React"
    }

    return (
        <div>
            <div ref={myRef} > Hello </div>
            <button onClick={handleScroll} >Scroll to Div</button>
        </div>
    );
};

export default UseRef;