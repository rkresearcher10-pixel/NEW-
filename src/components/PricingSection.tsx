import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield } from 'lucide-react';
import { PricingPlan } from '../types';

export const PricingSection: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans: PricingPlan[] = [
    {
      id: 'starter',
      name: 'Starter',
      priceMonthly: 0,
      priceYearly: 0,
      credits: '50 Free Model Gens / mo',
      features: [
        'Standard Gen-2.0 Engine',
        'GLTF & OBJ Export Formats',
        'Up to 30,000 Polygons',
        'Standard Community License',
        'Web 3D Viewer Access',
      ],
      cta: 'Get Started Free',
    },
    {
      id: 'pro',
      name: 'Pro Creator',
      priceMonthly: 29,
      priceYearly: 22,
      popular: true,
      credits: '1,200 Model Gens / mo',
      features: [
        'Gen-2.5 Ultra High-Speed Engine',
        'Image-to-3D + Multi-view Depth',
        'Full 4K PBR Texture Baking',
        'GLTF, OBJ, FBX, USDZ Exports',
        'Quad Mesh Topology Optimization',
        'Commercial Royalty-Free License',
        'Priority GPU Rendering Pipeline',
      ],
      cta: 'Start 7-Day Free Trial',
    },
    {
      id: 'studio',
      name: 'Enterprise Studio',
      priceMonthly: 99,
      priceYearly: 79,
      credits: 'Unlimited Model Gens',
      features: [
        'Custom Fine-Tuned AI Engine',
        'REST & GraphQL API Keys',
        'Batch Async Rendering Pipeline',
        'Dedicated Cloud TPU Instances',
        'Auto-Rigging & Skeletal Anims',
        '24/7 Priority Support & SLA',
      ],
      cta: 'Contact Sales',
    },
  ];

  return (
    <div id="pricing" className="w-full py-16">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono font-semibold text-purple-400 uppercase tracking-widest px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20">
          Flexible Plans
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 tracking-tight">
          Simple Pricing for Creators & Game Studios
        </h2>
        <p className="text-neutral-400 text-sm mt-2">
          Start with 50 free credits every month. Upgrade as your 3D workflow scales.
        </p>

        {/* Monthly / Yearly Toggle */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <span className={`text-xs sm:text-sm font-medium ${!isYearly ? 'text-white' : 'text-neutral-400'}`}>
            Monthly
          </span>
          <button
            id="pricing-billing-toggle"
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full bg-neutral-800 p-1 border border-white/10 transition-colors cursor-pointer"
          >
            <div
              className={`w-5 h-5 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 transition-transform ${
                isYearly ? 'translate-x-7' : 'translate-x-0'
              }`}
            />
          </button>
          <span className={`text-xs sm:text-sm font-medium flex items-center gap-1.5 ${isYearly ? 'text-white' : 'text-neutral-400'}`}>
            Yearly
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
              Save 25%
            </span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map((plan) => {
          const price = isYearly ? plan.priceYearly : plan.priceMonthly;
          return (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-neutral-900 border-2 border-pink-500 shadow-2xl shadow-pink-500/20 scale-[1.02]'
                  : 'bg-neutral-900/60 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold tracking-wider uppercase shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                <p className="text-xs text-pink-400 font-mono mt-1 font-medium">{plan.credits}</p>

                <div className="my-6">
                  <span className="text-4xl font-extrabold text-white">${price}</span>
                  <span className="text-xs text-neutral-400 ml-1">/ month</span>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10">
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button
                id={`plan-cta-${plan.id}`}
                className={`w-full py-3 px-4 rounded-2xl mt-8 font-semibold text-xs sm:text-sm transition-all cursor-pointer ${
                  plan.popular
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-pink-500/30'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
