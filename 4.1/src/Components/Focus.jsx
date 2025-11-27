import { useRef } from 'react';
import MyInput from './MyInput';

export default function Focus() {
  const inputRef = useRef(null);

    function handleFocusInput(){
        inputRef.current.focus()
    }
 
  return (
    <>
    <MyInput  ref={inputRef} />
    <button onClick={handleFocusInput}>Focus the input</button>

    </>
  );
}
