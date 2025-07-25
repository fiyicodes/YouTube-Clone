import React, { useState } from 'react';
import { Search, Menu, Bell, Video, User } from 'lucide-react';

const Header = ({ onMenuClick, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800 h-14">
      <div className="flex items-center justify-between px-4 h-full">
        {/* Left section - Menu and Logo */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-800 text-white rounded-lg transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
          
          <div className="flex items-center space-x-1 cursor-pointer">
            <div className="bg-red-600 p-1.5 rounded">
              <Video className="h-6 w-6 text-white" />
            </div>
            <span className="text-white text-xl font-semibold">YouTube</span>
          </div>
        </div>

        {/* Center section - Search */}
        <div className="flex-1 max-w-2xl mx-4">
          <form onSubmit={handleSearch} className="flex">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-l-full rounded-r-none px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none h-10"
              />
            </div>
            <button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 border-l-0 rounded-r-full px-6 h-10 transition-colors"
            >
              <Search className="h-5 w-5 text-gray-300" />
            </button>
          </form>
        </div>

        {/* Right section - User actions */}
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 text-white rounded-lg transition-colors">
            <Video className="h-5 w-5" />
          </button>
          
          <button className="p-2 hover:bg-gray-800 text-white relative rounded-lg transition-colors">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full h-2 w-2"></span>
          </button>

          <div className="relative group">
            <button className="p-1 hover:bg-gray-800 rounded-lg transition-colors">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
                alt="User"
                className="h-8 w-8 rounded-full"
              />
            </button>
            {/* Dropdown menu would go here */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;