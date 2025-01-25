import React, { useState } from 'react';
import { ChatList } from '../components/messages/ChatList';
import { ChatWindow } from '../components/messages/ChatWindow';
import shaquib from '../assets/img/shaquib.svg';
import faiz from '../assets/img/Faiz.svg';
const MOCK_CHATS = [
  {
    id: '1',
    name: 'Shaquib',
    avatar: shaquib,
    lastMessage: 'i am chill guy',
    timestamp: '2:30 PM',
    messages: [
      {
        id: '1',
        content: 'Mai gao se hu bhai ',
        sender: 'Kamran',
        timestamp: '2:30 PM',
        isSelf: false
      },
      {
        id: '2',
        content: "to sb rahta hai gao se ",
        sender: 'You',
        timestamp: '2:31 PM',
        isSelf: true
      }
    ]
  },
  {
    id: '2',
    name: 'Faiz',
    avatar: faiz,
    lastMessage: 'bhai kl wo bandi Dekhi thi ',
    timestamp: '1:45 PM',
    messages: [
      {
        id: '1',
        content: 'Would you like to grab coffee sometime?',
        sender: 'Kamran',
        timestamp: '1:45 PM',
        isSelf: false
      }
    ]
  }
];

export function Messages() {
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState(MOCK_CHATS);
  
  const currentChat = chats.find(chat => chat.id === selectedChat);

  const handleSendMessage = (chatId, content) => {
    const now = new Date();
    const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    const newMessage = {
      id: Date.now().toString(),
      content,
      sender: 'You',
      timestamp,
      isSelf: true
    };

    setChats(prevChats => 
      prevChats.map(chat => {
        if (chat.id === chatId) {
          return {
            ...chat,
            messages: [...chat.messages, newMessage],
            lastMessage: content,
            timestamp
          };
        }
        return chat;
      })
    );
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-white rounded-xl shadow-lg overflow-hidden">
      {selectedChat && currentChat ? (
        <ChatWindow
          chat={currentChat}
          onBack={() => setSelectedChat(null)}
          onSendMessage={handleSendMessage}
        />
      ) : (
        <>
          <div className="p-4 border-b">
            <h2 className="text-xl font-bold">Messages</h2>
          </div>
          <ChatList
            chats={chats}
            onSelectChat={setSelectedChat}
          />
        </>
      )}
    </div>
  );
}