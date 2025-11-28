import { useEffect, useRef } from "react";

export default function Dialodgue(){
    const dialogRef = useRef(null)

    useEffect(()=>{
        const dalog = dialogRef.current;
        console.log('Dialog.....')
        dalog.showModal();
        return ()=> dalog.close()
    })

    return <dialog ref={dialogRef} >This is an open window</dialog>
}