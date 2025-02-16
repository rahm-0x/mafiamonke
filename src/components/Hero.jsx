import React from 'react';
import CountdownTimer from './CountdownTimer';

const Hero = () => {
  return (
    <section id="home" className="relative bg-black text-white py-24 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading with wave effect at 90px */}
        <h1 className="text-[90px] font-bold mb-8">
          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-white
              via-gray-800
              to-white
              bg-[length:200%_200%]
              animate-shadow-wave
            "
          >
            Mafia Monkes. Join the Highlife.
          </span>
        </h1>

        {/* Paragraph at 20px */}
        <p className="text-[20px] leading-[24px] mb-12 text-gray-300">
          With real-life utility, MMC is set to transform the NFT space. Now live on Solana and Magic Eden, MMC invites you to join our exclusive NFT mint whitelist!
        </p>

        {/* “Apply for NFT Mint Whitelist” link with gradient text at 20px */}
        <a href="#apply" className="inline-block font-semibold mb-16">
          <span
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-cyan-500
              to-pink-500
              bg-[length:200%_200%]
              hover:opacity-80
              transition-opacity
              text-[20px]
            "
          >
            Apply for NFT Mint Whitelist ▶
          </span>
        </a>

        {/* Countdown */}
        <div className="mb-12">
          <CountdownTimer />
        </div>

        {/* “Scroll to learn more” further down with wave gradient at 20px */}
        <div className="mt-60">
          <a
            href="#ecosystem"
            className="
              text-transparent
              bg-clip-text
              bg-gradient-to-r
              from-white
              via-gray-800
              to-white
              bg-[length:200%_200%]
              animate-shadow-wave
              hover:opacity-80
              transition-opacity
              text-[20px]
              font-semibold
            "
          >
            Scroll to learn more ⇓
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
