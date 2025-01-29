import React, { useState } from 'react';
import backgroundImage from "../../assets/backgroun.png";
import profilePlaceholder from "../../assets/Ellipse.png";
import cameraIcon from "../../assets/Vector.png";
import { AdminUpdateProfile } from "../../Api/Admin/authServices"
import { useNavigate } from 'react-router-dom';

const ProfileUpdatePage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate=useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name': setName(value); break;
            case 'email': setEmail(value); break;
            case 'phone': setPhone(value); break;
            case 'password': setPassword(value); break;
            default: break;
        }
    };

    const handleProfilePictureChange = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setErrors({}); 

        const newErrors = {};
        if (!name) newErrors.name = "Name is required";
        if (!email) newErrors.email = "Email is required";
        if (!phone) newErrors.phone = "Phone is required";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsLoading(false);
            return;
        }


        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('phone', phone);
        if (password) {
            formData.append('password', password);
        }
        if (profilePicture) {
            formData.append('profile_picture', profilePicture);
        }

        try {
            const token = localStorage.getItem("token");
            const response = await AdminUpdateProfile(token, formData)
            console.log('Profile updated successfully:', response.data);

        } catch (error) {
            console.error('Error updating profile:', error);

            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                setErrors({ general: "An error occurred while updating the profile." });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div
            className="bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="w-full h-full flex items-center justify-center">
                <div className='w-[500px] bg-[#A5A5A538] p-8 rounded-lg'> 
                    <button onClick={()=>navigate("/dashboard")}>skip</button>
                    <h2 className="text-2xl font-bold mb-4 text-center">Upload Profile</h2> 

                    <div className="flex justify-center mb-4">
                        <label htmlFor="profilePicture">
                            <div className="relative w-32 h-32 rounded-full overflow-hidden cursor-pointer">
                                <img src={profilePicture ? URL.createObjectURL(profilePicture) : profilePlaceholder} alt="Profile" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                    <img src={cameraIcon} alt="logo" />
                                </div>
                            </div>
                            <input type="file" id="profilePicture" className="hidden" onChange={handleProfilePictureChange} />
                        </label>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Your Name</label>
                            <input type="text" id="name" name="name" value={name} onChange={handleChange} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                            <input type="email" id="email" name="email" value={email} onChange={handleChange} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" value={phone} onChange={handleChange} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                            <input type="password" id="password" name="password" value={password} onChange={handleChange} className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>

                        {errors.general && <p className="text-red-500 text-sm mb-2">{errors.general}</p>} 

                        <button type="submit" disabled={isLoading} className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>
                            {isLoading ? 'Saving...' : 'Save'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ProfileUpdatePage;