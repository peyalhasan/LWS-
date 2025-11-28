// import { useEffect, useRef } from "react"

// export default function VideoPlayer({src, isPlaying}){
//     const ref = useRef(null);
//     useEffect(()=>{

//         if(isPlaying){
//             ref.current.play()
//         }else{
//             ref.current.pause()
//         }
//     })
//     return <video style={{width: '200px', height: '300px'}} src={src} ref={ref} />
// }