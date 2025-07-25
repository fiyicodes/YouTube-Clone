import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MoreVertical, Pin } from 'lucide-react';
import { mockComments } from '../data/mockData';

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState(mockComments.filter(c => c.videoId === videoId));
  const [newComment, setNewComment] = useState('');
  const [showReplies, setShowReplies] = useState({});
  const [likedComments, setLikedComments] = useState({});

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: Date.now().toString(),
        videoId: videoId,
        user: {
          name: 'You',
          avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face'
        },
        text: newComment,
        timestamp: 'just now',
        likes: 0,
        replies: 0
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  const toggleLike = (commentId) => {
    setLikedComments(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  const toggleReplies = (commentId) => {
    setShowReplies(prev => ({
      ...prev,
      [commentId]: !prev[commentId]
    }));
  };

  return (
    <div className="space-y-6">
      {/* Comments Header */}
      <div className="flex items-center space-x-8">
        <h3 className="text-white text-xl font-semibold">
          {comments.length} Comments
        </h3>
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-sm">Sort by</span>
          <button className="text-gray-400 hover:text-white text-sm">
            Top comments
          </button>
        </div>
      </div>

      {/* Add Comment */}
      <div className="flex space-x-3">
        <img
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
          alt="Your avatar"
          className="h-10 w-10 rounded-full flex-shrink-0"
        />
        
        <div className="flex-1">
          <form onSubmit={handleCommentSubmit} className="space-y-3">
            <textarea
              placeholder="Add a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-2 text-white placeholder-gray-400 focus:border-white resize-none min-h-[40px] focus:outline-none"
              rows="1"
            />
            <div className="flex justify-end space-x-2">
              <button
                type="button"
                onClick={() => setNewComment('')}
                className="text-gray-400 hover:text-white px-4 py-2 rounded transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed px-4 py-2 rounded transition-colors"
              >
                Comment
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex space-x-3">
            <img
              src={comment.user.avatar}
              alt={comment.user.name}
              className="h-10 w-10 rounded-full flex-shrink-0"
            />

            <div className="flex-1 space-y-2">
              {/* Comment Header */}
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium text-sm">
                  {comment.user.name}
                </span>
                <span className="text-gray-400 text-sm">
                  {comment.timestamp}
                </span>
                {comment.pinned && (
                  <div className="flex items-center space-x-1">
                    <Pin className="h-3 w-3 text-gray-400" />
                    <span className="text-gray-400 text-xs">Pinned</span>
                  </div>
                )}
              </div>

              {/* Comment Text */}
              <p className="text-white text-sm leading-relaxed">
                {comment.text}
              </p>

              {/* Comment Actions */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleLike(comment.id)}
                  className={`p-2 h-8 text-gray-400 hover:text-white transition-colors flex items-center space-x-1 ${
                    likedComments[comment.id] ? 'text-white' : ''
                  }`}
                >
                  <ThumbsUp className="h-4 w-4" />
                  <span className="text-xs">
                    {comment.likes + (likedComments[comment.id] ? 1 : 0)}
                  </span>
                </button>

                <button className="p-2 h-8 text-gray-400 hover:text-white transition-colors">
                  <ThumbsDown className="h-4 w-4" />
                </button>

                <button className="text-gray-400 hover:text-white text-xs px-2 py-1 h-8">
                  Reply
                </button>

                <button className="p-2 h-8 text-gray-400 hover:text-white transition-colors">
                  <MoreVertical className="h-4 w-4" />
                </button>
              </div>

              {/* Replies */}
              {comment.replies > 0 && (
                <div className="mt-3">
                  <button
                    onClick={() => toggleReplies(comment.id)}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                  >
                    {showReplies[comment.id] ? 'Hide' : 'Show'} {comment.replies} replies
                  </button>

                  {showReplies[comment.id] && (
                    <div className="mt-4 space-y-4 pl-6 border-l border-gray-700">
                      <div className="flex space-x-3">
                        <img
                          src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=32&h=32&fit=crop&crop=face"
                          alt="Reply user"
                          className="h-8 w-8 rounded-full flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-white font-medium text-sm">ReplyUser</span>
                            <span className="text-gray-400 text-sm">1 hour ago</span>
                          </div>
                          <p className="text-white text-sm">
                            This is a sample reply to demonstrate the nested comment structure.
                          </p>
                          <div className="flex items-center space-x-2 mt-2">
                            <button className="p-1 h-6 text-gray-400 hover:text-white flex items-center space-x-1">
                              <ThumbsUp className="h-3 w-3" />
                              <span className="text-xs">5</span>
                            </button>
                            <button className="p-1 h-6 text-gray-400 hover:text-white">
                              <ThumbsDown className="h-3 w-3" />
                            </button>
                            <button className="text-gray-400 hover:text-white text-xs px-1 py-0 h-6">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Load More Comments */}
      <div className="flex justify-center">
        <button className="border border-gray-600 text-gray-400 hover:text-white hover:border-gray-400 bg-transparent px-6 py-2 rounded transition-colors">
          Show more comments
        </button>
      </div>
    </div>
  );
};

export default Comments;