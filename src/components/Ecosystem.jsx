import React from 'react';

// Example import paths (adjust these to match your actual folder structure)
import ImgInstagram from '/Users/phoenix/Desktop/mmcnew/src/imgs/MM X INSTAGRAM.png';
import ImgMagicEden from '/Users/phoenix/Desktop/mmcnew/src/imgs/MM X ME.png';
import ImgTwitter from '/Users/phoenix/Desktop/mmcnew/src/imgs/MM X TWITTER.png';

// For cards without an image, you can use a placeholder or omit the imgSrc field
const Ecosystem = () => {
  // Card data for easier mapping
  const cards = [
    {
      title: "MMC NFT Collection",
      description: "Discover your symbol of luxury in our MMC NFT collection.",
      linkText: "Become a Collector",
      linkHref: "#",
      // Provide an image for this card
      imgSrc: ImgMagicEden,
    },
    {
      title: "MMC Token",
      description: "Explore our contract address, tokenomics, usage area, and more.",
      linkText: "Buy $MMC Token",
      linkHref: "#",
      // Maybe no image, or a placeholder if you want
      imgSrc: ImgTwitter, 
    },
    {
      title: "Telegram Hub",
      description: "Join our Telegram Hub to stay connected with our community.",
      linkText: "Join Telegram Hub",
      linkHref: "#",
      imgSrc: ImgInstagram,
    },
    {
      title: "MMC on X",
      description: "Stay instantly informed about our movement on X.",
      linkText: "Stay Updated on X",
      linkHref: "#",
      imgSrc: ImgTwitter,
    },
    {
      title: "MMC Instagram Community",
      description: "Experience the highlife on Instagram.",
      linkText: "Follow on Instagram",
      linkHref: "#",
      imgSrc: ImgInstagram,
    },
    {
      title: "MMC Telegram Channel",
      description: "Receive real-time updates and join the conversation on Telegram.",
      linkText: "Join Telegram Channel",
      linkHref: "#",
      // Could reuse ImgMagicEden or another image
      imgSrc: ImgMagicEden,
    },  
  ];

  return (
    <section id="ecosystem" className="py-16 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Paragraph at 30px with top/bottom padding */}
        <p className="text-left text-gray-300 text-[30px] leading-[36px] py-4 mb-10 w-full">
          MMC Tokens/NFTs represent the start of a groundbreaking ecosystem for those who
          value lasting innovation and real-world utility. This is more than just a
          project—it’s a movement driven by a committed community, designed to adapt and
          grow through limitless potential. Join us in shaping a future where every step
          advances the world of decentralized luxury.
        </p>

        {/* Heading at 60px */}
        <h2 className="text-left font-bold text-[60px] leading-[72px] mb-6">
          Ecosystem
        </h2>

        {/* Card Grid (6 boxes) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="
                bg-[#111]
                rounded-lg
                shadow
                hover:shadow-lg
                transition-shadow
                overflow-hidden
                flex
                flex-col
              "
              style={{ width: '384px', height: '400px' }}
            >
              {/* Top portion with image, title, description */}
              <div className="p-8 flex-grow flex flex-col">
                {/* Image (if provided) */}
                {card.imgSrc && (
                  <img
                    src={card.imgSrc}
                    alt={card.title}
                    className="w-20 h-20 object-contain mx-auto mb-4"
                  />
                )}
                <h3 className="text-[24px] font-semibold text-white mb-2 text-center">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-[20px] leading-[30px] mb-4 text-center">
                  {card.description}
                </p>
              </div>
              {/* Bottom link (no gradient box) */}
              <div className="px-8 pb-6">
                <a
                  href={card.linkHref}
                  className="text-[16px] text-cyan-400 hover:underline font-medium"
                >
                  {card.linkText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
