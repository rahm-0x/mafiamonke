import React from 'react';

const Roadmap = () => {
  const cards = [
    {
      title: "🌱 The Rise of MMC",
      date: "August 2024",
      description:
        "Mafia Monkes officially burst onto the scene on the Telegram Mini-App ecosystem, captivating over 7 million users with innovative mini-games and interactive experiences. This launch marked the beginning of a revolution in the NFT space, paving the way for MMC’s dynamic community.",
    },
    {
      title: "🚀 Expanding Horizons",
      date: "November 2024",
      description:
        "MMC Labs embarked on creating an exclusive, monkey-themed NFT collection, leveraging the creative prowess of our in-house designers and developers. Focused on innovation and authenticity, this collection set new standards for artistic value and real-world utility.",
    },
    {
      title: "🎨 MMC NFT Collection Launch",
      date: "February 2025",
      description:
        "The MMC NFT Collection is set to launch, serving as gateways to the Mafia Monkes ecosystem. These NFTs will grant holders exclusive perks, early access to future drops, special events, and collaborative opportunities, solidifying MMC's trailblazing position.",
    },
    {
      title: "💰 MMC Token Release",
      date: "March 2025",
      description:
        "The MMC Token will be introduced as a financial layer within the Mafia Monkes ecosystem, enabling seamless transactions and exclusive rewards. Token holders will enjoy early access and priority benefits as we expand our ecosystem.",
    },
    {
      title: "🎁 MMC Token Airdrop",
      date: "April 2025",
      description:
        "Shortly after the token release, a fair airdrop will reward loyal community members holding MMC NFTs or tokens. This recurring reward mechanism is designed to foster sustained engagement and long-term loyalty.",
    },
    {
      title: "🌍 MMC Labs: Continuity and Beyond",
      date: "From Now, Forever",
      description:
        "MMC Labs will evolve as a hub for innovation, product development, and strategic collaborations. Our continuous drive for new utilities, real-world partnerships, and community-driven growth will shape the future of MMC in the Web3 space.",
    },
  ];

  return (
    <section id="roadmap" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-6xl font-bold mb-8">Roadmap</h2>
        <div className="space-y-8">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-[#111] rounded-3xl shadow hover:shadow-lg transition-shadow overflow-hidden flex flex-col min-w-[1095px] min-h-[292px] p-6"
            >
              {/* Dynamic Pill Badge with Emoji and Title */}
              <div
                className="inline-block bg-[#2D2D2D] rounded-full py-2 px-4 mb-2 w-fit"
              >
                <p className="text-white text-[20px] font-medium">
                  {card.title}
                </p>
              </div>
              {/* Date */}
              <p className="text-[20px] text-cyan-400 uppercase mb-4">
                {card.date}
              </p>
              {/* Description */}
              <p className="text-gray-400 text-[20px] leading-snug">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
