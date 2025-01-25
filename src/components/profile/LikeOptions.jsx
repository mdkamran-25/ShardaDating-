import React from 'react';
import { Heart, Star } from 'lucide-react';

export function LikeOptions({ onRegularLike, onSuperLike, onClose }) {
  return (
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-sm">
        <h3 className="text-xl font-bold text-center mb-4">Choose Like Type</h3>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              onRegularLike();
              onClose();
            }}
            className="flex flex-col items-center p-4 rounded-xl bg-pink-100 hover:bg-pink-200 transition-colors"
          >
            <Heart className="h-8 w-8 text-pink-500 mb-2" />
            <span className="text-sm font-medium">Like</span>
          </button>
          <button
            onClick={() => {
              onSuperLike();
              onClose();
            }}
            className="flex flex-col items-center p-4 rounded-xl bg-blue-100 hover:bg-blue-200 transition-colors"
          >
            <Star className="h-8 w-8 text-blue-500 mb-2" />
            <span className="text-sm font-medium">Super Like</span>
          </button>
        </div>
      </div>
    </div>
  );
}