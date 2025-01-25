import React from 'react';
import { Camera, MapPin, Cake, Book } from 'lucide-react';

export function UserProfile({ user }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={user.photos[0]}
          alt={user.name}
          className="w-full h-64 object-cover"
        />
        <button className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg">
          <Camera className="h-6 w-6 text-gray-600" />
        </button>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold">{user.name}</h1>
          <div className="flex items-center text-gray-600">
            <Cake className="h-5 w-5 mr-1" />
            <span>{user.age}</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-5 w-5 mr-2" />
          <span>{user.location}</span>
        </div>

        <div className="mb-6">
          <div className="flex items-center mb-2">
            <Book className="h-5 w-5 mr-2 text-gray-600" />
            <h2 className="font-semibold">About Me</h2>
          </div>
          <p className="text-gray-600">{user.bio}</p>
        </div>

        <div>
          <h2 className="font-semibold mb-2">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {user.interests.map((interest, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}