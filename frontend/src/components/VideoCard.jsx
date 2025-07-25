import React from 'react';
import { CheckCircle, MoreVertical } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

const VideoCard = ({ video, onClick, size = 'normal' }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(video);
    }
  };

  const formatViews = (views) => {
    if (views.includes('M')) return views;
    if (views.includes('K')) return views;
    return views;
  };

  const cardClass = size === 'small' 
    ? 'flex space-x-3 hover:bg-gray-900/50 p-2 rounded-lg transition-all duration-200 cursor-pointer group'
    : 'cursor-pointer group';

  const thumbnailClass = size === 'small'
    ? 'w-40 h-24 rounded-lg object-cover flex-shrink-0'
    : 'w-full aspect-video rounded-lg object-cover';

  if (size === 'small') {
    return (
      <div className={cardClass} onClick={handleClick}>
        <div className="relative">
          <img
            src={video.thumbnail}
            alt={video.title}
            className={thumbnailClass}
          />
          <span className="absolute bottom-1 right-1 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded text-[10px] font-medium">
            {video.duration}
          </span>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white text-sm font-medium line-clamp-2 leading-tight mb-1 group-hover:text-blue-400 transition-colors">
            {video.title}
          </h3>
          <p className="text-gray-400 text-xs mb-1 hover:text-white transition-colors cursor-pointer">
            {video.channel.name}
            {video.channel.verified && (
              <CheckCircle className="inline ml-1 h-3 w-3 text-gray-400" />
            )}
          </p>
          <div className="text-gray-400 text-xs">
            {formatViews(video.views)} views • {video.uploadTime}
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
              Add to queue
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
              Save to Watch later
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
              Save to playlist
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return (
    <div className={cardClass} onClick={handleClick}>
      <div className="relative mb-3">
        <img
          src={video.thumbnail}
          alt={video.title}
          className={`${thumbnailClass} group-hover:scale-105 transition-transform duration-300`}
        />
        <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-2 py-1 rounded font-medium">
          {video.duration}
        </span>
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
      </div>
      
      <div className="flex space-x-3">
        <img
          src={video.channel.avatar}
          alt={video.channel.name}
          className="w-9 h-9 rounded-full flex-shrink-0 cursor-pointer hover:ring-2 hover:ring-white transition-all duration-200"
        />
        
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-medium mb-1 line-clamp-2 leading-tight group-hover:text-blue-400 transition-colors duration-200">
            {video.title}
          </h3>
          <p className="text-gray-400 text-sm mb-1 hover:text-white transition-colors cursor-pointer">
            {video.channel.name}
            {video.channel.verified && (
              <CheckCircle className="inline ml-1 h-3 w-3 text-gray-400" />
            )}
          </p>
          <div className="text-gray-400 text-sm">
            {formatViews(video.views)} views • {video.uploadTime}
          </div>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="opacity-0 group-hover:opacity-100 transition-all duration-200 p-2 h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={(e) => e.stopPropagation()}
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-gray-900 border-gray-700">
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
              Add to queue
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
              Save to Watch later
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
              Save to playlist
            </DropdownMenuItem>
            <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
              Not interested
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default VideoCard;