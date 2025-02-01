import React from 'react';
import { Check } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

interface Plan {
  name: string;
  price: number;
  interval: string;
  description: string;
  features: string[];
  popular?: boolean;
  current?: boolean;
}

const plans: Plan[] = [
  {
    name: 'Free',
    price: 0,
    interval: 'month',
    description: 'To discovery the tool',
    features: [
      '5 chats per day',
      '30 days history',
      'Limited interactions'
    ],
    current: true
  },
  {
    name: 'Learn',
    price: 19,
    interval: 'team/month',
    description: 'Enhanced AI functionalities',
    features: [
      'Unlimited chats',
      'Unlimited messages',
      'Increased interactions'
    ],
    popular: true
  },
  {
    name: 'Learn + Real Time',
    price: 49,
    interval: 'month',
    description: 'Player like a pro',
    features: [
      'Collaboration features',
      'Smart analytics',
      'Enterprise-level support'
    ]
  }
];

function Subscription() {
  const handleSubscribe = async (planName: string) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planName,
        }),
      });

      const session = await response.json();
      const stripe = await stripePromise;
      
      if (stripe) {
        const { error } = await stripe.redirectToCheckout({
          sessionId: session.id,
        });

        if (error) {
          console.error('Error:', error);
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Welcome to Dota 2 AI Sense</h1>
      <h2 className="text-2xl font-semibold mb-8">Our plans</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`bg-white rounded-xl p-6 shadow-sm relative ${
              plan.popular ? 'ring-2 ring-red-600' : ''
            }`}
          >
            {plan.popular && (
              <span className="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                Popular
              </span>
            )}
            
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <p className="text-gray-600 mb-4">{plan.description}</p>
            
            <div className="mb-6">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-gray-500">/{plan.interval}</span>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {plan.current ? (
              <button
                disabled
                className="w-full py-2 px-4 rounded-lg bg-gray-100 text-gray-400 cursor-not-allowed"
              >
                Your current plan
              </button>
            ) : (
              <button
                onClick={() => handleSubscribe(plan.name)}
                className={`w-full py-2 px-4 rounded-lg ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'border border-black hover:bg-gray-50'
                }`}
              >
                Upgrade
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subscription;