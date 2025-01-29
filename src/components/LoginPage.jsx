import React, { useState } from "react";
import backgroundImage from "../assets/backgroun.png";
import leftLogo from "../assets/Group.png";
import { Link } from "react-router-dom";
import { AdminLogin } from "../Api/Admin/authServices";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError("Both fields are required.");
            return;
        }

        setError("");

        const data = {
            username,
            password,
        };

        try {
            const response = await AdminLogin(data);
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
                {/* Left Side */}
                <div className="flex-1 bg-gray-100 flex flex-col items-center justify-center p-8">
                    <img src={leftLogo} alt="Logo" className="h-24 w-auto mb-4" />
                </div>

                {/* Right Side */}
                <div className="flex-1 p-10 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>
                    <p className="text-center text-gray-500 mb-6">
                        Welcome to Free Shops App Controller
                    </p>

                    {error && <p className="text-red-500 text-center mb-4">{error}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                User Name
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Enter your username"
                            />
                        </div>

                        <div className="mb-6 relative">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-2"
                            >
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline pr-10" // Added pr-10
                                placeholder="Enter your password"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center h-full" // Added h-full
                            >
                                {showPassword ? <AiFillEyeInvisible className="h-5 w-5" /> : <AiFillEye className="h-5 w-5" />} {/* Added h-5 w-5 */}
                            </button>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Log In
                            </button>
                            <a
                                href="#"
                                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <Link
                            to={"/signup"}
                            className="text-sm text-gray-500 hover:text-gray-700"
                        >
                            Create New Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
