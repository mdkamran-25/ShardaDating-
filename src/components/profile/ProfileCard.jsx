import React, { useState } from 'react';
import { Heart, X, MessageCircle } from 'lucide-react';
import { useSwipe } from '../../hooks/useSwipe';
import { LikeOptions } from './LikeOptions';

export function ProfileCard({ profile, onLike, onPass, onMessage, onSuperLike }) {
  const [showLikeOptions, setShowLikeOptions] = useState(false);

  const swipeHandlers = useSwipe({
    onSwipeLeft: onPass,
    onSwipeRight: onLike,
  });

  const handleSuperLike = () => {
    if (onSuperLike) {
      onSuperLike();
    } else {
      onLike();
    }
  };

  return (
    <div
      {...swipeHandlers}
      className="relative w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden touch-pan-y"
    >
      <img
        src={profile.image}
        alt={profile.name}
        className="w-full h-96 object-cover"
      />
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">{profile.name}, {profile.age}</h2>
          <span className="text-gray-500">{profile.location}</span>
        </div>
        <p className="mt-2 text-gray-600">{profile.bio}</p>
        <div className="mt-4 flex justify-center gap-4">
          <button
            onClick={onPass}
            className="p-4 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="h-6 w-6 text-gray-600" />
          </button>
          <button
            onClick={() => setShowLikeOptions(true)}
            className="p-4 rounded-full bg-pink-100 hover:bg-pink-200 transition-colors"
          >
            <Heart className="h-6 w-6 text-pink-500" />
          </button>
          <button
            onClick={onMessage}
            className="p-4 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors"
          >
            <MessageCircle className="h-6 w-6 text-purple-500" />
          </button>
        </div>
      </div>

      {showLikeOptions && (
        <LikeOptions
          onRegularLike={onLike}
          onSuperLike={handleSuperLike}
          onClose={() => setShowLikeOptions(false)}
        />
      )}
    </div>
  );
}