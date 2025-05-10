import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

const MusicPlayer = () => {
  const audioRef1 = useRef(null); // 첫 번째 곡
  const audioRef2 = useRef(null); // 두 번째 곡
  const [isPlaying, setIsPlaying] = useState(false); // 처음엔 재생 안됨
  const [currentTrack, setCurrentTrack] = useState(1); // 1: 첫 번째, 2: 두 번째

  useEffect(() => {
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;

    // 순환 재생 이벤트 핸들링
    const handleAudio1Ended = () => {
      setCurrentTrack(2);
      audio2.play();
    };

    const handleAudio2Ended = () => {
      setCurrentTrack(1);
      audio1.play();
    };

    audio1.addEventListener('ended', handleAudio1Ended);
    audio2.addEventListener('ended', handleAudio2Ended);

    // 자동 재생 시도 (브라우저 제한 존재)
    const tryAutoPlay = async () => {
      try {
        await audio1.play();
        setIsPlaying(true);
        setCurrentTrack(1);
      } catch (error) {
        console.log("자동 재생 차단됨. 사용자 조작 필요:", error);
      }
    };

    tryAutoPlay();

    return () => {
      audio1.removeEventListener('ended', handleAudio1Ended);
      audio2.removeEventListener('ended', handleAudio2Ended);
      audio1.pause();
      audio2.pause();
      audio1.currentTime = 0;
      audio2.currentTime = 0;
    };
  }, []);

  const togglePlay = () => {
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;

    if (isPlaying) {
      audio1.pause();
      audio2.pause();
      setIsPlaying(false);
    } else {
      if (currentTrack === 1) {
        audio1.play();
      } else {
        audio2.play();
      }
      setIsPlaying(true);
    }
  };

  return (
    <div className="music-player">
      <audio ref={audioRef1} src="/assets/music/CelebratetheLight(inst).mp3" />
      <audio ref={audioRef2} src="/assets/music/빛의사자들이여(inst).mp3" />

      <button
        onClick={togglePlay}
        style={{
          fontSize: '20px',
          color: '#fff',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0',
          margin: '0',
          lineHeight: '1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
