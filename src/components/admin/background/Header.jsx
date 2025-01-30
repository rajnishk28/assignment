import React from "react";
import { FiSearch, FiBell } from "react-icons/fi";
import ProfileImage from "../../../assets/userProfile.png"

const Header = () => {
  return (
    <>
      <header className="p-4 flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex items-center rounded-lg overflow-hidden w-1/3">
          <input
            type="text"
            placeholder="Search..."
            className="p-2 text-white outline-none w-full bg-[#A5A5A538]"
          />
          <button className="bg-blue-500 p-2 text-white">
            <FiSearch className="w-5 h-5" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          {/* Notification Icon */}
          <button className="relative text-white">
            <FiBell className="w-6 h-6" />
          </button>

          {/* Profile Image */}
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white"
          />
        </div>
      </header>
      <div className="w-full h-[1px] bg-white mb-4"></div>
    </>

  );
};

export default Header;
