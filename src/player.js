import React, { useState, useRef } from 'react';
import video from './assets/video1.mp4';

const Player = () => {
const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    
const togglePlay = () => {
if (isPlaying) {
videoRef.current.pause();
}
else {
videoRef.current.play();
}
setIsPlaying(!isPlaying);
};
return (
<div className="temp-modal-player-video">
        <video
            ref={videoRef}
            controls
        >
            <source src = {video} type="video/mp4"/>
        </video>
            <button onClick={togglePlay}>
                {isPlaying ? "Pause" : "Play"}
            </button>
</div>
)
}

export default Player;