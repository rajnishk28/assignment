import React from 'react';
import BackgroundImage from "../../../assets/bakgroundImage.png";

const BackgroundPage = () => {
  return (
    <div className="fixed inset-0 z-0">
      <img
        src={BackgroundImage}
        alt="Background"
        className="w-full h-[379px] object-cover"
      />
    </div>
  );
};

export default BackgroundPage;
