import React from 'react';

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Top Section: The New Era (Left) + Single Box (Right) */}
        <div className="flex flex-col md:flex-row md:space-x-8 mb-16">
          {/* Left Column */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-3xl md:text-6xl font-bold mb-4">
              The New Era
            </h1>
            <p className="text-gray-300 leading-relaxed mb-6">
              OWLS, powered by the strength of its community, offers an exhilarating
              experience in usage area of utility token on NFT collections.
            </p>
            <a
              href="#"
              className="inline-block text-lg font-semibold bg-gradient-to-r from-cyan-500 to-pink-500 text-transparent bg-clip-text hover:opacity-80 transition-opacity"
            >
              Buy MMC on Magic Eden &rarr;
            </a>
          </div>

          {/* Right Column: Single Box with Stats */}
          <div className="md:w-1/2 bg-[#111] p-6 rounded-md shadow hover:shadow-lg transition-shadow">
            {/* Top Row: WLS label + NFT Details */}
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                {/* If you have an owl icon, place it here */}
                <span className="text-xl font-bold">WLS</span>
              </div>
              <span className="text-sm text-gray-400">NFT Details</span>
            </div>

            {/* Thin divider */}
            <hr className="border-t border-gray-700 mb-4" />

            {/* Stats in one row */}
            <div className="flex items-center justify-between text-center">
              {/* Floor Price */}
              <div className="flex-1">
                <span className="block text-xs text-gray-400 uppercase mb-1 flex items-center justify-center gap-1">
                  Floor Price <span>🎉</span>
                </span>
                <p className="text-xl font-semibold">1 SOL</p>
              </div>

              {/* Vertical Divider */}
              <div className="border-l border-gray-700 h-8 mx-4" />

              {/* Owners */}
              <div className="flex-1">
                <span className="block text-xs text-gray-400 uppercase mb-1 flex items-center justify-center gap-1">
                  Owners <span>🥳</span>
                </span>
                <p className="text-xl font-semibold">🥳</p>
              </div>

              {/* Vertical Divider */}
              <div className="border-l border-gray-700 h-8 mx-4" />

              {/* Listed */}
              <div className="flex-1">
                <span className="block text-xs text-gray-400 uppercase mb-1 flex items-center justify-center gap-1">
                  Listed <span>✨</span>
                </span>
                <p className="text-xl font-semibold">✨</p>
              </div>

              {/* Vertical Divider */}
              <div className="border-l border-gray-700 h-8 mx-4" />

              {/* Supply */}
              <div className="flex-1">
                <span className="block text-xs text-gray-400 uppercase mb-1 flex items-center justify-center gap-1">
                  Supply <span>⚡</span>
                </span>
                <p className="text-xl font-semibold">8,888</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tokenomics - Single Bar with Two Colors */}
        <div className="mt-10">
          <h1 className="text-6xl font-semibold mb-4">Tokenomics</h1>

          {/* Legend row */}
          <div className="flex items-center gap-6 mb-4">
            {/* Community */}
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-cyan-500"></span>
              <span className="text-sm">Community - 85%</span>
            </div>
            {/* Treasury */}
            <div className="flex items-center gap-2">
              <span className="inline-block w-3 h-3 rounded-full bg-pink-500"></span>
              <span className="text-sm">Treasury - 15%</span>
            </div>
          </div>

          {/* Single bar */}
          <div className="relative w-full bg-gray-800 h-3 rounded">
            {/* Community portion */}
            <div
              className="absolute left-0 top-0 h-3 bg-cyan-500 rounded-l"
              style={{ width: '85%' }}
            ></div>
            {/* Treasury portion */}
            <div
              className="absolute right-0 top-0 h-3 bg-pink-500 rounded-r"
              style={{ width: '15%' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
