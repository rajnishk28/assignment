import React, { useState } from "react";
import backgroundImage from "../../assets/backgroun.png";
import leftLogo from "../../assets/Group.png";
import { Link, useNavigate } from "react-router-dom";
import { AdminLogin } from "../../Api/Admin/authServices";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const LoginPage = () => {
    const [username, setUsername] = useState("admin512@gmail.com");
    const [password, setPassword] = useState("admin@12345");
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [serverError, setServerError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};
        if (!username) newErrors.username = "Username is required.";
        if (!password) newErrors.password = "Password is required.";
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        setServerError("");

        const data = { email: username, password };
        setLoading(true);
        try {
            const response = await AdminLogin(data);
            if (response.status === 201) {
                localStorage.setItem("token", response.data.accessToken);
                navigate("/welcome");
            } else {
                setServerError("Unexpected error. Please try again.");
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setServerError(error.response.data.message);
            } else {
                setServerError("Something went wrong. Please try again.");
            }
            console.error("Error during API call:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="w-full max-w-[1000px] h-[90vh] bg-[#A5A5A538] flex items-center justify-evenly rounded-lg relative shadow-lg p-4">
                {/* Left Side */}
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <img src={leftLogo} alt="Logo" className="h-32 w-auto mb-6" />
                </div>

                {/* Right Side */}
                <div className="flex-1 p-10 bg-white flex flex-col justify-center rounded-lg shadow-xl">
                    <h2 className="text-3xl font-bold mb-4 text-center text-gray-800">Log In</h2>
                    <p className="text-center text-gray-500 mb-6">
                        Welcome to Free Shops App Controller
                    </p>

                    {serverError && (
                        <p className="text-red-500 text-center mb-4">{serverError}</p>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="relative">
                            <label
                                htmlFor="username"
                                className="block text-gray-700 font-bold mb-1"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className={`shadow appearance-none border ${errors.username ? "border-red-500" : "border-gray-300"} rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400`}
                                placeholder="Enter your username"
                            />
                            {errors.username && (
                                <p className="text-red-500 text-sm mt-1">{errors.username}</p>
                            )}
                        </div>

                        <div className="relative">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 font-bold mb-1"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`shadow appearance-none border ${errors.password ? "border-red-500" : "border-gray-300"} rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-400 pr-10`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute top-1/2 right-3 transform -translate-y-1/2"
                                >
                                    {showPassword ? (
                                        <AiFillEyeInvisible className="h-5 w-5 text-gray-500" />
                                    ) : (
                                        <AiFillEye className="h-5 w-5 text-gray-500" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                            )}
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <button
                                type="submit"
                                disabled={loading}
                                className={`bg-[#199FB1]  text-white font-bold py-3 px-6 rounded-lg  ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                            >
                                {loading ? "Loading..." : "Log In"}
                            </button>
                            <a href="#" className="text-sm font-bold text-blue-500 hover:text-blue-700">
                                Forgot Password?
                            </a>
                        </div>
                    </form>

                    <div className="mt-6 text-center">
                        <Link to={"/signup"} className="text-sm text-gray-500 hover:text-gray-700">
                            Create New Account
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default LoginPage;
