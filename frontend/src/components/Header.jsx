import React, { useState } from 'react';
import { Search, Menu, Bell, User, Video, Grid3X3, Settings } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

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
          <Button
            variant="ghost"
            size="sm"
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-800 text-white"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
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
              <Input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border border-gray-600 rounded-l-full rounded-r-none px-4 py-2 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none h-10"
              />
            </div>
            <Button
              type="submit"
              className="bg-gray-800 hover:bg-gray-700 border border-gray-600 border-l-0 rounded-r-full px-6 h-10"
            >
              <Search className="h-5 w-5 text-gray-300" />
            </Button>
          </form>
        </div>

        {/* Right section - User actions */}
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-800 text-white"
          >
            <Video className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-gray-800 text-white relative"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 bg-red-600 text-white text-xs rounded-full h-2 w-2"></span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="p-1 hover:bg-gray-800">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" />
                  <AvatarFallback className="bg-gray-700 text-white">U</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-gray-900 border-gray-700">
              <DropdownMenuLabel className="text-white">Your Channel</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
                <User className="mr-2 h-4 w-4" />
                <span>Your Channel</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
                <Video className="mr-2 h-4 w-4" />
                <span>Your Videos</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-gray-700" />
              <DropdownMenuItem className="text-gray-300 hover:bg-gray-800">
                <span>Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;