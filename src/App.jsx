import React, { useState } from 'react';
import { Home } from './pages/Home';
import { LoginForm } from './components/auth/LoginForm';
import { Toaster } from 'react-hot-toast';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-50">
      <Toaster position="top-center" />
      {!isLoggedIn ? (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Sharda Dating 
            </h1>
            <LoginForm onLogin={handleLogin} />
          </div>
        </div>
      ) : (
        <Home />
      )}
    </div>
  );
}

export default App;
