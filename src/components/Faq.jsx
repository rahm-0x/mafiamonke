import React, { useState } from 'react';

const faqData = [
  {
    question: 'What is MMC NFT Collection?',
    answer:
      'A unique collection of monkey-themed NFTs that provide various benefits and unlock exclusive community features within the MafiaMonkes ecosystem.',
  },
  {
    question: 'How can I mint MMC NFT?',
    answer:
      'You can mint directly through our dApp once the whitelist is open. Stay tuned for our official announcement!',
  },
  {
    question: 'What are the benefits of holding MMC NFT?',
    answer:
      'Holders gain exclusive access to community events, rewards, governance participation, and innovative utilities that drive our ecosystem forward.',
  },
  {
    question: 'When will the MMC token launch?',
    answer:
      'The MMC token is estimated to launch in Q3 2025 after thorough testing and community feedback, integrating a financial layer into the ecosystem.',
  },
  {
    question: 'Is there a whitelist for the NFT mint?',
    answer:
      'Yes, you can apply via the "Apply for NFT Mint Whitelist" button on our website to secure early access and exclusive perks.',
  },
  {
    question: 'What makes MMC different from other projects?',
    answer:
      'Our community-driven approach, innovative tokenomics, and tangible real-world utility set MafiaMonkes apart in the competitive NFT space.',
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="bg-black text-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:space-x-8">
        {/* Left Column */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Frequently</h2>
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Asked</h2>
          <h2 className="text-3xl md:text-6xl font-bold mb-4">Questions</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            Discover everything about the MafiaMonkes ecosystem. From NFT benefits to token utilities, find answers to all your questions and join our growing community.
          </p>
        </div>

        {/* Right Column - FAQ Accordion */}
        <div className="md:w-1/2">
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-700 pb-3 cursor-pointer"
              >
                <div
                  className="flex justify-between items-center py-2"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="font-semibold">{item.question}</h3>
                  <span className="text-xl">{activeIndex === index ? '-' : '+'}</span>
                </div>
                {activeIndex === index && (
                  <p className="mt-2 text-gray-400">{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
