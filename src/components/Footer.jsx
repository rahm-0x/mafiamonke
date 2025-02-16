import React from "react";

const Footer = () => {
  return (
    <footer class="bg-black text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} MMC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
