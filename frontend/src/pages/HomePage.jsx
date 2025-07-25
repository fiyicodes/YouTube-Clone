import React from 'react';
import VideoCard from '../components/VideoCard';
import { mockVideos } from '../data/mockData';

const HomePage = ({ onVideoClick }) => {
  return (
    <div className="p-6">
      {/* Category Pills */}
      <div className="flex space-x-3 mb-6 overflow-x-auto scrollbar-hide">
        {[
          'All', 'Music', 'Gaming', 'News', 'Live', 'Sports', 'Learning', 
          'Comedy', 'Science', 'Technology', 'Food', 'Travel'
        ].map((category, index) => (
          <button
            key={index}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              index === 0 
                ? 'bg-white text-black' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Videos Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4">
        {mockVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
            onClick={onVideoClick}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;