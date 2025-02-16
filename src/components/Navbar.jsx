import React, { useState } from "react";

const Navbar = () => {
  // Track which nav link is currently active (default to #home)
  const [activeLink, setActiveLink] = useState("#home");

  // Handle click to set active link
  const handleLinkClick = (hash) => {
    setActiveLink(hash);
  };

  // Helper: returns gradient classes if active, otherwise base styling
  const linkClasses = (hash) => {
    const base = "transition-colors hover:text-gray-300 text-[16px]";
    const activeGradient =
      "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 text-[16px]";
    return activeLink === hash ? activeGradient : base;
  };

  return (
    <nav className="w-full bg-black text-white sticky top-0 z-50 border-b border-white/10">
      {/* Outer container to center the 1680px bar */}
      <div className="mx-auto w-[1680px] h-[81px] flex items-center px-4">
        {/* Brand (Left) */}
        <div className="text-xl font-bold tracking-wider">
          MafiaMonkes
        </div>

        {/* Nav Links (Center) */}
        <div className="flex-1 flex items-center justify-center space-x-6">
          <a
            href="#home"
            onClick={() => handleLinkClick("#home")}
            className={linkClasses("#home")}
          >
            Home
          </a>
          <a
            href="#ecosystem"
            onClick={() => handleLinkClick("#ecosystem")}
            className={linkClasses("#ecosystem")}
          >
            Ecosystem
          </a>
          <a
            href="#tokenomics"
            onClick={() => handleLinkClick("#tokenomics")}
            className={linkClasses("#tokenomics")}
          >
            Tokenomics
          </a>
          <a
            href="#roadmap"
            onClick={() => handleLinkClick("#roadmap")}
            className={linkClasses("#roadmap")}
          >
            Roadmap
          </a>
          <a
            href="#faq"
            onClick={() => handleLinkClick("#faq")}
            className={linkClasses("#faq")}
          >
            FAQ
          </a>
        </div>

        {/* Apply Link (Right) */}
        <div className="ml-auto">
          <a
            href="#apply"
            onClick={() => handleLinkClick("#apply")}
            className={
              activeLink === "#apply"
                ? "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 hover:opacity-80 transition-opacity text-[16px]"
                : "font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500 opacity-70 hover:opacity-100 transition-opacity text-[16px]"
            }
          >
            Apply for NFT Mint Whitelist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
