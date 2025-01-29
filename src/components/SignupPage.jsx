import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import backgroundImage from "../assets/backgroun.png";
import leftLogo from "../assets/Group.png";
import { AdminSignup } from "../Api/Admin/authServices"

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        try {
            const response = await AdminSignup(formData)
            console.log("API Response:", response);
        } catch (error) {
            console.error("Error during API call:", error);
        }
    };

    return (
        <div
            className="bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="bg-white shadow-lg rounded-lg flex w-11/12 max-w-4xl overflow-hidden">
                {/* Left Section */}
                <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-8">
                    <img src={leftLogo} alt="Logo" className="h-24 w-auto mb-4" />
                </div>

                {/* Right Section */}
                <div className="flex flex-col w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Create New Account</h2>
                    <p className="text-sm text-gray-500 mb-6">Welcome to Free shops App controller</p>

                    <form className="space-y-4 backdrop-blur-md" onSubmit={handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="John Doe"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="john.doe@example.com"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="123-456-7890"
                            />
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="••••••••"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600"
                        >
                            Create Account
                        </button>
                    </form>

                    <p className="text-sm text-gray-500 text-center mt-4">
                        Already have an account? <Link to="/" className="text-blue-500 hover:underline">Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
