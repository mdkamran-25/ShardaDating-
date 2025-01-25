import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import toast from 'react-hot-toast';

export function VerificationStep({ email, onVerified, onBack }) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return;

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      prevInput?.focus();
    }
  };

  const handleVerify = () => {
    const enteredCode = code.join('');
    // In a real app, you would verify this code with your backend
    if (enteredCode === '123456') {
      toast.success('Email verified successfully!');
      onVerified();
    } else {
      toast.error('Invalid verification code');
    }
  };

  const handleResend = () => {
    setTimeLeft(300);
    toast.success('New verification code sent!');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <button
          onClick={onBack}
          className="p-2 hover:bg-gray-100 rounded-full mr-2"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-semibold">Verify Your Email</h2>
      </div>

      <p className="text-gray-600">
        We've sent a verification code to <span className="font-medium">{email}</span>
      </p>

      <div className="flex justify-between gap-2">
        {code.map((digit, index) => (
          <input
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength={1}
            value={digit}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="w-12 h-12 text-center text-xl font-semibold border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
          />
        ))}
      </div>

      <button
        onClick={handleVerify}
        disabled={code.some((digit) => !digit)}
        className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-2 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        Verify Email
      </button>

      <div className="text-center">
        <p className="text-gray-600 mb-2">
          Time remaining: <span className="font-medium">{formatTime(timeLeft)}</span>
        </p>
        <button
          onClick={handleResend}
          disabled={timeLeft > 0}
          className="text-pink-500 hover:text-pink-600 disabled:text-gray-400"
        >
          Resend Code
        </button>
      </div>
    </div>
  );
}
