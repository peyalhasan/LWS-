import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying , ref }) {
    // const ref = useRef(null);

    useEffect(() => {
        if (isPlaying) {
            console.log('Calling video.play()');
            ref.current.play();
        } else {
            console.log('Calling video.pause()');
            ref.current.pause();
        }
    }, [isPlaying, ref]);

    return <> 
    <video style={{ width: '200px', height: '100px' }} ref={ref} src={src} loop playsInline />;
    <h1></h1>
     </>
}

export default function Effect() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [text, setText] = useState('');
    const ref = useRef(null)
    return (
        <>
            <input value={text} onChange={e => setText(e.target.value)} />
            <button onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer 
            ref={ref}
                isPlaying={isPlaying}
                src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />

        </>
    );
}
