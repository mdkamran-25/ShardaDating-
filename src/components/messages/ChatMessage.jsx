import React from 'react';

export function ChatMessage({ message }) {
  return (
    <div className={`flex ${message.isSelf ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[70%] rounded-2xl px-4 py-2 ${
          message.isSelf
            ? 'bg-gradient-to-r from-pink-500 to-purple-500 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        <p>{message.content}</p>
        <span className={`text-xs ${message.isSelf ? 'text-white/70' : 'text-gray-500'}`}>
          {message.timestamp}
        </span>
      </div>
    </div>
  );
}