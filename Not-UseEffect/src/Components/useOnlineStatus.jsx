import { useSyncExternalStore } from "react";


function subscribe(callback){
    // subscribe
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);

    // cleanup

    return ()=> {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline',  callback);
    }

}

export function useOnliseSatus(){
    return useSyncExternalStore(
        subscribe,
        ()=> navigator.onLine, // client
        ()=> true // default true
    )
}