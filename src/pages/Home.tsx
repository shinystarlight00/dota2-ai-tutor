import React from 'react';
import { MessageSquare } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Welcome to Dota 2 AI Sense</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Questions</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium">How do I counter Phantom Assassin?</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <p className="font-medium">Best support heroes for beginners?</p>
                <p className="text-sm text-gray-500">5 hours ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">Questions Asked</p>
              <p className="text-2xl font-bold">24</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="text-sm text-gray-500">Saved Answers</p>
              <p className="text-2xl font-bold">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 text-white">
        <h2 className="text-2xl font-bold mb-2">Upgrade to Pro</h2>
        <p className="mb-4 opacity-90">Get unlimited questions and advanced features</p>
        <button className="bg-white text-red-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default Home;