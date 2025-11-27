// import { forwardRef } from "react";

import { useImperativeHandle, useRef } from "react";



const MyInput = ({ ref }) => {
    const realInputRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus() {
            realInputRef.current.focus()
        }
    }))
    return <input ref={realInputRef} />

};

// const ForwordedMyInput = forwardRef(MyInput)

// export default ForwordedMyInput;
export default MyInput