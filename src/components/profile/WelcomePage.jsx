import React from 'react';
import backgroundImage from "../../assets/backgroun.png";
import leftLogo from "../../assets/Group.png";
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate=useNavigate();
    return (
        <div
        className="bg-cover bg-center min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
    >
        <div className="w-full h-full flex items-center justify-center"> 
            <div className='w-[1000px] h-[600px] bg-[#A5A5A538] flex items-center justify-center rounded-lg'> 
                <div className="bg-white shadow-lg rounded-lg p-8 w-11/12 max-w-96">
                    <div className="flex flex-col items-center">
                        <img src={leftLogo} alt="Logo" className="h-24 w-auto mb-4" />
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome</h1>
                            <p className=" text-[#FF8553] text-xl mb-6">
                                to the Free Shops App Admin Panel
                            </p>
                            <p className="text-sm text-gray-500">
                                Manage and monitor all aspects of your app seamlessly from one place.
                                Use the tools below to get started.
                            </p>
                            <button 
                            onClick={()=>navigate("/profile-update")}
                            className="bg-[#199FB1] hover:bg-[#199FB1] text-white font-bold py-2 px-4 rounded mt-6">
                                Get Start
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default WelcomePage;