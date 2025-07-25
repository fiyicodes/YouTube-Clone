import React, { useState, useRef } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Settings, 
  SkipForward, 
  SkipBack,
  RotateCcw,
  Repeat
} from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';

const VideoPlayer = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(100);
  const [volume, setVolume] = useState(70);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // In a real app, you'd control actual video playback here
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (value) => {
    setVolume(value[0]);
    setIsMuted(value[0] === 0);
  };

  const handleProgressChange = (value) => {
    setCurrentTime(value[0]);
    // In a real app, you'd seek the video here
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Simulate video progress
  React.useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, duration]);

  return (
    <div 
      ref={containerRef}
      className="relative bg-black rounded-lg overflow-hidden group aspect-video"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video thumbnail/placeholder */}
      <img
        src={video?.thumbnail}
        alt={video?.title}
        className="w-full h-full object-cover"
      />
      
      {/* Play button overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <Button
          onClick={togglePlay}
          size="lg"
          className={`bg-black/70 hover:bg-black/80 text-white rounded-full p-4 transition-all duration-300 ${
            isPlaying ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
          }`}
        >
          <Play className="h-12 w-12 ml-1" />
        </Button>
      </div>

      {/* Video Controls */}
      <div 
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
          showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Progress Bar */}
        <div className="px-4 pb-2">
          <Slider
            value={[currentTime]}
            onValueChange={handleProgressChange}
            max={duration}
            step={1}
            className="w-full cursor-pointer"
          />
          <div className="flex justify-between text-white text-sm mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between px-4 pb-4">
          <div className="flex items-center space-x-2">
            {/* Play/Pause */}
            <Button
              variant="ghost"
              size="sm"
              onClick={togglePlay}
              className="text-white hover:bg-white/20 p-2"
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
            </Button>

            {/* Skip Back */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-2"
              onClick={() => setCurrentTime(Math.max(0, currentTime - 10))}
            >
              <SkipBack className="h-5 w-5" />
            </Button>

            {/* Skip Forward */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-2"
              onClick={() => setCurrentTime(Math.min(duration, currentTime + 10))}
            >
              <SkipForward className="h-5 w-5" />
            </Button>

            {/* Volume */}
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleMute}
                className="text-white hover:bg-white/20 p-2"
              >
                {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
              </Button>
              <div className="w-20">
                <Slider
                  value={[isMuted ? 0 : volume]}
                  onValueChange={handleVolumeChange}
                  max={100}
                  step={1}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {/* Settings */}
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-2"
            >
              <Settings className="h-5 w-5" />
            </Button>

            {/* Fullscreen */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleFullscreen}
              className="text-white hover:bg-white/20 p-2"
            >
              <Maximize className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Loading indicator when playing */}
      {isPlaying && (
        <div className="absolute top-4 right-4">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;