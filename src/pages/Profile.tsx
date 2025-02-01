import React, { useState } from "react";
import { User, Mail, Calendar, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface UserProfile {
  steamNickname: string;
  email: string;
  memberSince: string;
  plan: "free" | "learn" | "learn_plus";
  avatarUrl: string;
}

function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"profile" | "plan">("profile");
  const [profile] = useState<UserProfile>({
    steamNickname: "Barriga de verme",
    email: "emily@gmail.com",
    memberSince: "8 january 2025",
    plan: "free",
    avatarUrl:
      "https://avatars.steamstatic.com/fef49e7fa7e1997310d705b2a6158ff8dc1cdfeb_full.jpg",
  });

  const handleUpgrade = () => {
    navigate("/subscription");
  };

  const handleCancelPlan = async () => {
    // TODO: Implement cancel plan logic
    console.log("Canceling plan...");
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="bg-red-600 h-32 relative">
          <div className="absolute top-4 left-4 flex gap-4">
            <button
              onClick={() => setActiveTab("profile")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "profile"
                  ? "bg-white text-red-600"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveTab("plan")}
              className={`px-4 py-2 rounded-lg ${
                activeTab === "plan"
                  ? "bg-white text-red-600"
                  : "text-white hover:bg-white/10"
              }`}
            >
              Plan information
            </button>
          </div>
        </div>

        <div className="px-8 pb-8">
          <div className="container-xd">
            <div className="col-6">
              <div className="">
                <div className="">
                  <img
                    src={profile.avatarUrl}
                    alt="Profile"
                    className="w-32 h-32 rounded-lg border-4 border-white"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              {activeTab === "profile" ? (
                <div className="mt-20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <User className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Steam nick name</p>
                        <p className="font-medium">{profile.steamNickname}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Mail className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium">{profile.email}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">
                          DotaSense member since
                        </p>
                        <p className="font-medium">{profile.memberSince}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="mt-20">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <Calendar className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">
                          DotaSense member since
                        </p>
                        <p className="font-medium">{profile.memberSince}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <CreditCard className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Billing</p>
                        <p className="font-medium">
                          {profile.plan === "free" ? "FREE" : "$19/month"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <User className="w-5 h-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Plan</p>
                        <p className="font-medium">
                          {profile.plan === "learn_plus"
                            ? "Learn + Real Time"
                            : "Learn"}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      {profile.plan === "free" ? (
                        <button
                          onClick={handleUpgrade}
                          className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                        >
                          Upgrade my account
                        </button>
                      ) : (
                        <div className="flex gap-4">
                          <button
                            onClick={handleCancelPlan}
                            className="border border-black px-6 py-2 rounded-lg hover:bg-gray-50"
                          >
                            Cancel my plan
                          </button>
                          <button
                            onClick={handleUpgrade}
                            className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800"
                          >
                            Upgrade plan
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
