import React, { useState } from 'react';
import { Mail, Lock, AlertCircle } from 'lucide-react';
import { VerificationStep } from './VerificationStep';
import toast from 'react-hot-toast';

export function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showVerification, setShowVerification] = useState(false);

  const validateEmail = (email) => {
    return email.toLowerCase().endsWith('@ug.sharda.ac.in');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setError('Please use your Sharda University email (@ug.sharda.ac.in)');
      return;
    }

    setError('');
    // In a real app, you would send the verification code to the user's email here
    toast.success('Verification code sent to your email!');
    setShowVerification(true);
  };

  const handleVerified = () => {
    onLogin();
  };

  if (showVerification) {
    return (
      <VerificationStep
        email={email}
        onVerified={handleVerified}
        onBack={() => setShowVerification(false)}
      />
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError('');
            }}
            className={`pl-10 w-full rounded-lg border ${
              error ? 'border-red-300 focus:ring-red-500' : 'border-gray-300 focus:ring-pink-500'
            } p-2 focus:ring-2`}
            placeholder="university@ug.sharda.ac.in"
          />
        </div>
        {error && (
          <div className="mt-2 flex items-center text-sm text-red-600">
            <AlertCircle className="h-4 w-4 mr-1" />
            {error}
          </div>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <div className="mt-1 relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <Lock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 w-full rounded-lg border border-gray-300 p-2 focus:ring-2 focus:ring-pink-500"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity"
      >
        Continue
      </button>
      <p className="text-sm text-center text-gray-600">
        Please use your Sharda University email address to login
      </p>
    </form>
  );
}
