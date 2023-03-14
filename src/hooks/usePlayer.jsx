import { useRef, useState } from 'react';

const usePlayer = () => {
    const [songName, setSongName] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
        audioRef.current.play();
    };

    const handlePause = () => {
        setIsPlaying(false);
        audioRef.current.pause();
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setCurrentTime(0);
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleTimeUpdate = () => {
        setCurrentTime(audioRef.current.currentTime);
    };

    const handleSliderChange = (event, value) => {
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    // const handleFileInputChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.readAsDataURL(file);
    //         reader.onloadend = () => {
    //             audioRef.current.src = reader.result;
    //             setSongName(file.name);
    //             setIsPlaying(true);
    //         };
    //     }
    // };

    return {
        songName,
        duration,
        isPlaying,
        currentTime,
        audioRef,
        handlePlay,
        handlePause,
        handleEnded,
        handleLoadedMetadata,
        handleTimeUpdate,
        handleSliderChange,
    };
};

export default usePlayer;
