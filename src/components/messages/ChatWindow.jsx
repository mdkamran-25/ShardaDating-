import React, { useState } from 'react';
import { Send, ArrowLeft } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

export function ChatWindow({ chat, onBack, onSendMessage }) {
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    onSendMessage(chat.id, message.trim());
    setMessage('');
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center p-4 border-b">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <img
          src={chat.avatar}
          alt={chat.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <h3 className="ml-3 font-medium">{chat.name}</h3>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chat.messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
      </div>

      <form onSubmit={handleSend} className="p-4 border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 rounded-full border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
          <button
            type="submit"
            className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white hover:opacity-90 transition-opacity disabled:opacity-50"
            disabled={!message.trim()}
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </form>
    </div>
  );
}