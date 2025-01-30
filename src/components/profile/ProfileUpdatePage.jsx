import React, { useState } from "react";
import backgroundImage from "../../assets/backgroun.png";
import profilePlaceholder from "../../assets/Ellipse.png";
import cameraIcon from "../../assets/Vector.png";
import { AdminUpdateProfile } from "../../Api/Admin/authServices";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const ProfileUpdatePage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [profilePicture, setProfilePicture] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phone":
                setPhone(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
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
        formData.append("fullName", name);
        formData.append("email", email);
        formData.append("phone", phone);
        if (password) {
            formData.append("password", password);
        }
        if (profilePicture) {
            formData.append("profile_picture", profilePicture);
        }

        try {
            const token = localStorage.getItem("token");
            const response = await AdminUpdateProfile(token, formData);
            if (response.status === 200) {
                toast.success(response.data.message);

                setName("");
                setEmail("");
                setPhone("");
                setPassword("");
                setProfilePicture(null);
                navigate("/dashboard")
            }
            console.log("Profile updated successfully:", response);
        } catch (error) {
            console.error("Error updating profile:", error);

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
            <Toaster position="top-right" />
            <div className="w-[1000px] h-[90vh] bg-[#A5A5A538] flex items-center justify-center rounded-lg relative shadow-lg">
                <div className="w-[60%] h-[90%] bg-white rounded-lg p-8 shadow-lg relative">
                    <button
                        onClick={() => navigate("/dashboard")}
                        className="absolute top-4 right-4 text-[#7F7F7F] hover:underline font-medium"
                    >
                        Skip
                    </button>

                    <label htmlFor="profilePicture" className="cursor-pointer mb-6 flex flex-col items-center">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden">
                            <img
                                src={
                                    profilePicture
                                        ? URL.createObjectURL(profilePicture)
                                        : profilePlaceholder
                                }
                                alt="Profile"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gray-400 bg-opacity-40 flex items-center justify-center">
                                <img src={cameraIcon} alt="Upload" />
                            </div>
                        </div>
                        <span className="mt-2 text-gray-500 text-sm">Upload Profile Picture</span>
                        <input
                            type="file"
                            id="profilePicture"
                            className="hidden"
                            onChange={handleProfilePictureChange}
                        />
                    </label>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700 font-medium">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-700 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-gray-700 font-medium">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700 font-medium">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {errors.general && (
                            <p className="text-red-500 text-sm">{errors.general}</p>
                        )}

                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${isLoading ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                        >
                            {isLoading ? "Saving..." : "Save"}
                        </button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProfileUpdatePage;
