import React from 'react';
import VideoPlayer from '../components/VideoPlayer';
import VideoDetails from '../components/VideoDetails';
import VideoCard from '../components/VideoCard';
import Comments from '../components/Comments';
import { getVideoById, getRelatedVideos } from '../data/mockData';

const WatchPage = ({ videoId, onVideoClick }) => {
  const video = getVideoById(videoId);
  const relatedVideos = getRelatedVideos(videoId);

  if (!video) {
    return (
      <div className="p-6 text-white text-center">
        <h1 className="text-2xl font-bold mb-4">Video not found</h1>
        <p>The video you're looking for doesn't exist or has been removed.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Video Player */}
          <VideoPlayer video={video} />
          
          {/* Video Details */}
          <VideoDetails video={video} />
          
          {/* Comments */}
          <Comments videoId={videoId} />
        </div>

        {/* Sidebar - Related Videos */}
        <div className="lg:col-span-1">
          <div className="space-y-3">
            <h3 className="text-white text-lg font-semibold mb-4">Up next</h3>
            
            {/* Autoplay Toggle */}
            <div className="flex items-center justify-between mb-6 p-3 bg-gray-900 rounded-lg">
              <span className="text-white text-sm font-medium">Autoplay</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            {/* Related Videos */}
            {relatedVideos.map((relatedVideo) => (
              <VideoCard
                key={relatedVideo.id}
                video={relatedVideo}
                onClick={onVideoClick}
                size="small"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchPage;