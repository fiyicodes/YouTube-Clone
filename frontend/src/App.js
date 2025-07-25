import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import WatchPage from "./pages/WatchPage";

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentVideoId, setCurrentVideoId] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleVideoClick = (video) => {
    setCurrentVideoId(video.id);
    setCurrentPage('watch');
  };

  const handleSearch = (query) => {
    console.log('Search query:', query);
    // In a real app, this would filter videos or navigate to search results
  };

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleLogoClick = () => {
    setCurrentPage('home');
    setCurrentVideoId(null);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <Header 
        onMenuClick={handleMenuClick}
        onSearch={handleSearch}
        onLogoClick={handleLogoClick}
      />
      
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} />
      
      {/* Main Content */}
      <main 
        className={`pt-14 transition-all duration-300 ${
          sidebarOpen ? 'ml-60' : 'ml-20'
        }`}
        style={{ minHeight: 'calc(100vh - 3.5rem)' }}
      >
        {currentPage === 'home' && (
          <HomePage onVideoClick={handleVideoClick} />
        )}
        
        {currentPage === 'watch' && currentVideoId && (
          <WatchPage 
            videoId={currentVideoId} 
            onVideoClick={handleVideoClick}
          />
        )}
      </main>
    </div>
  );
}

export default App;