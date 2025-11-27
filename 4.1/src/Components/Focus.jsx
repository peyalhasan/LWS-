import { useRef } from 'react';

export default function Focus() {
  const inputRef = useRef(null);

    function handleFocusInput(){
        inputRef.current.focus()
    }

  return (
    <>
    <input ref={inputRef} type="text" name="" id="" />
    <button onClick={handleFocusInput}>Focus the input</button>

    </>
  );
}
