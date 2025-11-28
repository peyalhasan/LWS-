import { useEffect, useState } from "react"
import VideoPlayer from "./VideoPlayer"

export default function MyComponent() {
    const [isPlaying, setIsPlaying] = useState(false)
    useEffect(() => {
        console.log('')
    })
    return (
        <div>
            <button onClick={()=> setIsPlaying(!isPlaying)} > {isPlaying? 'Pause': 'Play'} </button>
            <VideoPlayer
             src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
              isPlaying={isPlaying} />
        </div>
    )
}