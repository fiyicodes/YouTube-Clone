import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, Share, Download, MoreHorizontal, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const VideoDetails = ({ video }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!video) return null;

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  const formatNumber = (num) => {
    if (typeof num === 'string') {
      if (num.includes('K')) return num;
      if (num.includes('M')) return num;
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="space-y-4">
      {/* Video Title */}
      <h1 className="text-white text-xl font-semibold leading-tight">
        {video.title}
      </h1>

      {/* Video Stats and Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4 text-gray-400 text-sm">
          <span>{video.views} views</span>
          <span>•</span>
          <span>{video.uploadTime}</span>
        </div>

        <div className="flex items-center space-x-2">
          {/* Like/Dislike */}
          <div className="flex bg-gray-800 rounded-full">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className={`rounded-l-full px-4 py-2 h-9 ${
                isLiked ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <ThumbsUp className="h-4 w-4 mr-2" />
              {formatNumber(video.likes + (isLiked ? 1 : 0))}
            </Button>
            <Separator orientation="vertical" className="bg-gray-600 h-6 my-1.5" />
            <Button
              variant="ghost"
              size="sm"
              onClick={handleDislike}
              className={`rounded-r-full px-4 py-2 h-9 ${
                isDisliked ? 'bg-gray-700 text-white' : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>

          {/* Share */}
          <Button
            variant="ghost"
            size="sm"
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full px-4 py-2 h-9"
          >
            <Share className="h-4 w-4 mr-2" />
            Share
          </Button>

          {/* Download */}
          <Button
            variant="ghost"
            size="sm"
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full px-4 py-2 h-9"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>

          {/* More */}
          <Button
            variant="ghost"
            size="sm"
            className="bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-full p-2 h-9 w-9"
          >
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Channel Info */}
      <div className="flex items-start justify-between bg-gray-900/50 rounded-lg p-4">
        <div className="flex items-start space-x-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={video.channel.avatar} />
            <AvatarFallback className="bg-gray-700 text-white">
              {video.channel.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="text-white font-medium">{video.channel.name}</h3>
              {video.channel.verified && (
                <CheckCircle className="h-4 w-4 text-gray-400" />
              )}
            </div>
            <p className="text-gray-400 text-sm mb-3">
              {video.channel.subscribers} subscribers
            </p>
            
            {/* Description Preview */}
            <div className="text-gray-300 text-sm">
              <p className={`${showFullDescription ? '' : 'line-clamp-2'}`}>
                {video.description}
              </p>
              {video.description.length > 100 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-gray-400 hover:text-white mt-2 text-sm font-medium"
                >
                  {showFullDescription ? 'Show less' : 'Show more'}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Subscribe Button */}
        <Button
          onClick={() => setIsSubscribed(!isSubscribed)}
          className={`ml-4 rounded-full px-6 py-2 font-medium transition-all duration-200 ${
            isSubscribed
              ? 'bg-gray-700 text-white hover:bg-gray-600'
              : 'bg-white text-black hover:bg-gray-200'
          }`}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </Button>
      </div>

      {/* Tags */}
      {video.tags && video.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {video.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-blue-600/30 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoDetails;