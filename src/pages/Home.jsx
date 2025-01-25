import React, { useState } from 'react';
import { ProfileCard } from '../components/profile/ProfileCard';
import { UserProfile } from '../components/profile/UserProfile';
import { Messages } from './Messages';
import { Settings, MessageCircle } from 'lucide-react';
import  Kamran  from '../assets/img/kamran.svg';
import Uday from '../assets/img/Uday.svg';
import faiz from '../assets/img/Faiz.svg';
import shaquib from '../assets/img/shaquib.svg';
const MOCK_PROFILES = [
  {
    name: "Ubst",
    age: 21,
    image: Uday,
    bio: "Sharda University,   Adventurer and Rum Lover. Loves To fight ",
    location: "Sharda University"
  },
  {
    name: "Kamran",
    age: 20,
    image: Kamran,
    bio: "Photographer and nature lover. Always looking for the perfect shot.",
    location: "Kendya vihar"
  }
];

const CURRENT_USER = {
  name: "Shaquib",
  age: 24,
  location: "Gao Se Hu",
  bio: "Tech enthusiast and foodie. Looking for someone to share adventures and good conversations with.",
  interests: ["Travel", "Photography", "Cooking", "Hiking", "Music"],
  photos: shaquib
};

export function Home() {
  const [currentProfile, setCurrentProfile] = useState(0);
  const [showProfile, setShowProfile] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  const handleLike = () => {
    if (currentProfile < MOCK_PROFILES.length - 1) {
      setCurrentProfile(prev => prev + 1);
    }
  };

  const handleSuperLike = () => {
    console.log('Super liked:', MOCK_PROFILES[currentProfile].name);
    if (currentProfile < MOCK_PROFILES.length - 1) {
      setCurrentProfile(prev => prev + 1);
    }
  };

  const handlePass = () => {
    if (currentProfile < MOCK_PROFILES.length - 1) {
      setCurrentProfile(prev => prev + 1);
    }
  };

  const handleMessage = () => {
    setShowMessages(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Dating Sharda
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => setShowMessages(!showMessages)}
              className="p-2 rounded-full hover:bg-white/50 transition-colors"
            >
              <MessageCircle className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => setShowProfile(!showProfile)}
              className="p-2 rounded-full hover:bg-white/50 transition-colors"
            >
              <Settings className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </header>

        <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
          {showMessages ? (
            <Messages />
          ) : showProfile ? (
            <UserProfile user={CURRENT_USER} />
          ) : currentProfile < MOCK_PROFILES.length ? (
            <ProfileCard
              profile={MOCK_PROFILES[currentProfile]}
              onLike={handleLike}
              onPass={handlePass}
              onMessage={handleMessage}
              onSuperLike={handleSuperLike}
            />
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-700">No more profiles to show!</h2>
              <p className="text-gray-600 mt-2">Check back later for more matches.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}