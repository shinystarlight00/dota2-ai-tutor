import React from "react";
import { NavLink } from "react-router-dom";
import {
  Home,
  MessageSquare,
  Bookmark,
  HelpCircle,
  User,
  Settings,
  LogOut,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="w-64 bg-white min-h-screen border-r border-gray-200 flex flex-col">
      <div className="p-4">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center">
            <MessageSquare className="w-4 h-4 text-white" />
          </div>
          <h1 className="text-xl font-bold">Dota 2 - AI Sense</h1>
        </div>

        <nav className="space-y-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg ${
                isActive
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <Home size={20} />
            <span>Home</span>
          </NavLink>

          <div className="pt-4">
            <p className="px-2 text-xs font-semibold text-gray-400 uppercase">
              Sense Learn
            </p>
            <div className="mt-2 space-y-1">
              <NavLink
                to="/how-it-works"
                className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <HelpCircle size={20} />
                <span>How it works</span>
              </NavLink>
              <NavLink
                to="/questions"
                className={({ isActive }) =>
                  `flex items-center gap-2 p-2 rounded-lg ${
                    isActive
                      ? "bg-red-50 text-red-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`
                }
              >
                <MessageSquare size={20} />
                <span>Questions and Answers</span>
              </NavLink>
              <NavLink
                to="/saved"
                className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <Bookmark size={20} />
                <span>Saved</span>
              </NavLink>
            </div>
          </div>
        </nav>
      </div>

      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="flex items-center gap-3 p-2">
          <img
            src="https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg"
            alt="Profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium">Nick Steam</p>
            <p className="text-sm text-gray-500">Free Plan</p>
          </div>
        </div>

        <div className="mt-4 space-y-1">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 p-2 rounded-lg ${
                isActive
                  ? "bg-red-50 text-red-600"
                  : "text-gray-700 hover:bg-gray-50"
              }`
            }
          >
            <User size={20} />
            <span>Profile</span>
          </NavLink>
          <NavLink
            to="/settings"
            className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg"
          >
            <Settings size={20} />
            <span>Support & FAQ</span>
          </NavLink>
          <button className="flex items-center gap-2 p-2 text-gray-700 hover:bg-gray-50 rounded-lg w-full">
            <LogOut size={20} />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
