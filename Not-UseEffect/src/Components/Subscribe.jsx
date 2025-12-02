import { useOnliseSatus } from "./useOnlineStatus";


export default function Example9 (){
    const isOnline = useOnliseSatus();
    return(
        <>
        <div>I am {isOnline ? "Online": "Offline" } </div>
        </>
    )
}