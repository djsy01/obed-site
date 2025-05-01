import React, { useEffect, useRef, useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';  // 아이콘 임포트

const MusicPlayer = () => {
  const audioRef1 = useRef(null);  // 첫 번째 노래
  const audioRef2 = useRef(null);  // 두 번째 노래
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;

    // 첫 번째 곡이 끝나면 두 번째 곡을 재생
    const handleAudio1Ended = () => {
      audio2.play(); // 두 번째 곡 재생
    };

    // 두 번째 곡이 끝나면 첫 번째 곡으로 돌아가도록 설정
    const handleAudio2Ended = () => {
      audio1.play(); // 첫 번째 곡 재생
    };

    // 이벤트 리스너 추가
    audio1.addEventListener('ended', handleAudio1Ended);
    audio2.addEventListener('ended', handleAudio2Ended);

    // 페이지 로드시 첫 번째 곡을 자동으로 재생
    const playMusic = async () => {
      try {
        await audio1.play();
      } catch (error) {
        console.log("자동 재생이 차단되었습니다:", error);
      }
    };

    playMusic();

    // 컴포넌트 언마운트 시 클린업
    return () => {
      audio1.removeEventListener('ended', handleAudio1Ended); // 이벤트 리스너 제거
      audio2.removeEventListener('ended', handleAudio2Ended); // 이벤트 리스너 제거
      audio1.pause();
      audio1.currentTime = 0;
      audio2.pause();
      audio2.currentTime = 0;
    };
  }, []);

  const togglePlay = () => {
    const audio1 = audioRef1.current;
    const audio2 = audioRef2.current;
    if (audio1.paused || audio2.paused) {
      audio1.play();
      audio2.play();
      setIsPlaying(true);
    } else {
      audio1.pause();
      audio2.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="music-player">
      {/* 첫 번째 노래 */}
      <audio ref={audioRef1} src="/assets/music/CelebratetheLight(inst).mp3" />
      {/* 두 번째 노래 */}
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
          position: 'absolute',  // 절대 위치로 변경
          top: '10px',  // 상단에서 10px 떨어지도록 설정
          right: '10px',  // 우측에서 10px 떨어지도록 설정
        }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

export default MusicPlayer;
