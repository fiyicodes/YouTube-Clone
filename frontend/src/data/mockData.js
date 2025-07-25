// Mock data for YouTube-like website

export const mockVideos = [
  {
    id: '1',
    title: 'Building a React App from Scratch - Complete Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop',
    duration: '23:45',
    views: '2.1M',
    uploadTime: '2 days ago',
    channel: {
      id: 'tech-channel-1',
      name: 'TechMaster Pro',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      verified: true,
      subscribers: '1.2M'
    },
    description: 'Learn how to build a complete React application from scratch. This tutorial covers everything from setup to deployment.',
    tags: ['React', 'JavaScript', 'Web Development', 'Tutorial'],
    likes: 45000,
    dislikes: 1200,
    comments: 3400
  },
  {
    id: '2',
    title: 'Amazing Nature Documentary - Wildlife in 4K',
    thumbnail: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=225&fit=crop',
    duration: '45:12',
    views: '5.8M',
    uploadTime: '1 week ago',
    channel: {
      id: 'nature-channel',
      name: 'Wild Earth',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      verified: true,
      subscribers: '3.5M'
    },
    description: 'Experience the beauty of wildlife in stunning 4K resolution. Journey through forests, oceans, and mountains.',
    tags: ['Nature', 'Documentary', '4K', 'Wildlife'],
    likes: 125000,
    dislikes: 2100,
    comments: 8900
  },
  {
    id: '3',
    title: 'Cooking the Perfect Italian Pasta - Chef\'s Secret Recipe',
    thumbnail: 'https://images.unsplash.com/photo-1551892374-ecf8e803d4e6?w=400&h=225&fit=crop',
    duration: '15:30',
    views: '890K',
    uploadTime: '3 days ago',
    channel: {
      id: 'cooking-channel',
      name: 'Kitchen Masters',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: false,
      subscribers: '450K'
    },
    description: 'Learn the authentic way to make Italian pasta with traditional techniques passed down through generations.',
    tags: ['Cooking', 'Italian', 'Recipe', 'Food'],
    likes: 28000,
    dislikes: 450,
    comments: 1800
  },
  {
    id: '4',
    title: 'Space Exploration - Journey to Mars Mission 2024',
    thumbnail: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=225&fit=crop',
    duration: '32:18',
    views: '3.2M',
    uploadTime: '5 days ago',
    channel: {
      id: 'space-channel',
      name: 'Cosmic Explorer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      verified: true,
      subscribers: '2.1M'
    },
    description: 'Follow the latest developments in the Mars mission 2024. Exclusive footage and expert interviews.',
    tags: ['Space', 'Mars', 'Science', 'Exploration'],
    likes: 89000,
    dislikes: 1800,
    comments: 5600
  },
  {
    id: '5',
    title: 'Fitness Transformation - 30 Day Challenge Results',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=225&fit=crop',
    duration: '18:44',
    views: '1.5M',
    uploadTime: '1 day ago',
    channel: {
      id: 'fitness-channel',
      name: 'FitLife Academy',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=40&h=40&fit=crop&crop=face',
      verified: false,
      subscribers: '800K'
    },
    description: 'Incredible transformation results from our 30-day fitness challenge. See the amazing before and after!',
    tags: ['Fitness', 'Workout', 'Health', 'Transformation'],
    likes: 52000,
    dislikes: 890,
    comments: 2300
  },
  {
    id: '6',
    title: 'Music Production Tutorial - Creating Beats in Logic Pro',
    thumbnail: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=225&fit=crop',
    duration: '28:15',
    views: '720K',
    uploadTime: '6 days ago',
    channel: {
      id: 'music-channel',
      name: 'Beat Factory',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=face',
      verified: false,
      subscribers: '350K'
    },
    description: 'Step-by-step guide to creating professional beats using Logic Pro X. Perfect for beginners and intermediate producers.',
    tags: ['Music', 'Production', 'Logic Pro', 'Beats'],
    likes: 31000,
    dislikes: 650,
    comments: 1500
  }
];

export const mockComments = [
  {
    id: '1',
    videoId: '1',
    user: {
      name: 'CodeNewbie2024',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face'
    },
    text: 'This tutorial is amazing! Finally understood React hooks properly. Thank you so much! 🔥',
    timestamp: '2 hours ago',
    likes: 234,
    replies: 12,
    pinned: true
  },
  {
    id: '2',
    videoId: '1',
    user: {
      name: 'WebDevMaster',
      avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=face'
    },
    text: 'Great explanation of component lifecycle! Could you do a video on Redux next?',
    timestamp: '4 hours ago',
    likes: 89,
    replies: 5
  },
  {
    id: '3',
    videoId: '1',
    user: {
      name: 'ReactFan123',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=32&h=32&fit=crop&crop=face'
    },
    text: 'The part about state management at 15:30 was exactly what I needed. Subscribed!',
    timestamp: '6 hours ago',
    likes: 156,
    replies: 8
  },
  {
    id: '4',
    videoId: '1',
    user: {
      name: 'JSLearner',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face'
    },
    text: 'Quick question: Do you have any resources for TypeScript with React?',
    timestamp: '8 hours ago',
    likes: 45,
    replies: 3
  }
];

export const mockChannels = [
  {
    id: 'tech-channel-1',
    name: 'TechMaster Pro',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    banner: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=300&fit=crop',
    subscribers: '1.2M',
    verified: true,
    description: 'Teaching web development and programming concepts through practical tutorials.',
    videos: 156,
    joined: 'May 2019'
  }
];

export const getVideoById = (id) => {
  return mockVideos.find(video => video.id === id);
};

export const getRelatedVideos = (currentVideoId) => {
  return mockVideos.filter(video => video.id !== currentVideoId).slice(0, 10);
};

export const getCommentsByVideoId = (videoId) => {
  return mockComments.filter(comment => comment.videoId === videoId);
};