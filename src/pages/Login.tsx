import React from 'react';
import { MessageSquare } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-center">Dota 2 AISense</h1>
            <p className="text-gray-500 text-center mt-2">
              To continue, kindly log in with your account
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={onLogin}
              className="w-full bg-[#2a475e] text-white py-3 rounded-lg hover:bg-[#1b2838] transition-colors flex items-center justify-center gap-2"
            >
              <img 
                src="https://community.cloudflare.steamstatic.com/public/shared/images/header/logo_steam.svg?t=962016"
                alt="Steam"
                className="h-6"
              />
              Continue with Steam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login