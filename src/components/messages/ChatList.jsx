import React from 'react';

export function ChatList({ chats, onSelectChat }) {
  return (
    <div className="divide-y divide-gray-200">
      {chats.map((chat) => (
        <div
          key={chat.id}
          onClick={() => onSelectChat(chat.id)}
          className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
        >
          <img
            src={chat.avatar}
            alt={chat.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="ml-4 flex-1">
            <div className="flex justify-between">
              <h3 className="font-medium">{chat.name}</h3>
              <span className="text-sm text-gray-500">{chat.timestamp}</span>
            </div>
            <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}