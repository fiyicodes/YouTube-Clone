import React from 'react';
import { Home, Compass, PlaySquare, Clock, ThumbsUp, Download, User, Settings, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';

const Sidebar = ({ isOpen, className = '' }) => {
  const menuItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Compass, label: 'Explore' },
    { icon: PlaySquare, label: 'Subscriptions' },
  ];

  const libraryItems = [
    { icon: Clock, label: 'History' },
    { icon: PlaySquare, label: 'Your videos' },
    { icon: Clock, label: 'Watch later' },
    { icon: ThumbsUp, label: 'Liked videos' },
    { icon: Download, label: 'Downloads' },
  ];

  const subscriptions = [
    { name: 'TechMaster Pro', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=24&h=24&fit=crop&crop=face', online: true },
    { name: 'Wild Earth', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=24&h=24&fit=crop&crop=face', online: false },
    { name: 'Kitchen Masters', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=24&h=24&fit=crop&crop=face', online: true },
    { name: 'Cosmic Explorer', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=24&h=24&fit=crop&crop=face', online: false },
  ];

  if (!isOpen) {
    return (
      <aside className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-20 bg-black border-r border-gray-800 z-40 ${className}`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                className={`flex flex-col items-center justify-center p-3 rounded-lg h-16 w-16 ${
                  item.active 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                } transition-all duration-200`}
              >
                <IconComponent className="h-6 w-6 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Button>
            );
          })}
        </div>
      </aside>
    );
  }

  return (
    <aside className={`fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-60 bg-black border-r border-gray-800 z-40 overflow-y-auto ${className}`}>
      <div className="py-4">
        {/* Main Menu */}
        <nav className="px-3 mb-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className={`w-full justify-start mb-1 h-10 px-3 rounded-lg ${
                  item.active 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white'
                } transition-all duration-200`}
              >
                <IconComponent className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        <div className="border-t border-gray-800 my-4"></div>

        {/* Library */}
        <nav className="px-3 mb-4">
          <h3 className="text-gray-400 text-sm font-semibold mb-3 px-3">Library</h3>
          {libraryItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start mb-1 h-10 px-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                <IconComponent className="h-5 w-5 mr-3" />
                {item.label}
              </Button>
            );
          })}
        </nav>

        <div className="border-t border-gray-800 my-4"></div>

        {/* Subscriptions */}
        <nav className="px-3">
          <h3 className="text-gray-400 text-sm font-semibold mb-3 px-3">Subscriptions</h3>
          {subscriptions.map((subscription, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start mb-1 h-10 px-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              <div className="relative mr-3">
                <img 
                  src={subscription.avatar} 
                  alt={subscription.name}
                  className="h-6 w-6 rounded-full"
                />
                {subscription.online && (
                  <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full h-3 w-3 border-2 border-black"></div>
                )}
              </div>
              <span className="truncate">{subscription.name}</span>
            </Button>
          ))}
        </nav>

        <div className="border-t border-gray-800 my-4"></div>

        {/* Settings */}
        <nav className="px-3">
          <Button
            variant="ghost"
            className="w-full justify-start mb-1 h-10 px-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200"
          >
            <Settings className="h-5 w-5 mr-3" />
            Settings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start mb-1 h-10 px-3 rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition-all duration-200"
          >
            <HelpCircle className="h-5 w-5 mr-3" />
            Help
          </Button>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;