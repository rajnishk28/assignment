import React from 'react';
import AdminSideBar from '../widgets/AdminSideBar';
import BackgroundPage from "../background/BackgroundPage";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-[#EAEAEB]">
      {/* Background */}
      <BackgroundPage />
      
     
      <div className="relative z-10 flex">
        <AdminSideBar />
        
      </div>
    </div>
  );
};

export default Home;
