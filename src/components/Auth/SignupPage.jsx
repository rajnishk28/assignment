import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useFormik } from "formik";
import * as Yup from "yup";
import backgroundImage from "../../assets/backgroun.png";
import leftLogo from "../../assets/Group.png";
import { AdminSignup } from "../../Api/Admin/authServices";
import toast,{Toaster} from "react-hot-toast";

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate()

    const validationSchema = Yup.object({
        fullName: Yup.string().required("FullName is required"),
        email: Yup.string().email("Invalid email address").required("Email is required"),
        phone: Yup.string()
            .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
            .required("Phone number is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Passwords must match")
            .required("Confirm Password is required"),
    });

    const formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema,
        onSubmit: async (values) => {
            setLoading(true);
            try {
                const response = await AdminSignup(values);
                if(response.status===200){
                    navigate("/")
                }
                console.log("API Response:", response);
            } catch (error) {
                toast.error(error?.response?.data?.message || "something went wrong")
                console.error("Error during API call:", error);
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div
            className="bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <Toaster/>
            <div className="w-full max-w-[1000px] h-[90vh] bg-[#A5A5A538] flex items-center justify-evenly rounded-lg relative shadow-lg p-4">
                <div className="flex-1 flex flex-col items-center justify-center p-8">
                    <img src={leftLogo} alt="Logo" className="h-24 w-auto mb-4" />
                </div>
                <div className="flex flex-col bg-white w-full md:w-1/2 p-8 rounded-lg">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">Create New Account</h2>
                    <p className="text-sm text-gray-500 mb-6">Welcome to Free Shops App Controller</p>
                    <form className="space-y-4" onSubmit={formik.handleSubmit}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Your Name</label>
                            <input
                                type="text"
                                name="fullName"
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="John Doe"
                            />
                            {formik.touched.fullName && formik.errors.fullName && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.fullName}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="john.doe@example.com"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formik.values.phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                placeholder="1234567890"
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.phone}</p>
                            )}
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword ? <AiFillEyeInvisible className="h-5 w-5 text-gray-500" /> : <AiFillEye className="h-5 w-5 text-gray-500" />}
                                </button>
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
                            )}
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formik.values.confirmPassword}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 pr-10"
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 top-1/2 transform -translate-y-1/2"
                                >
                                    {showConfirmPassword ? <AiFillEyeInvisible className="h-5 w-5 text-gray-500" /> : <AiFillEye className="h-5 w-5 text-gray-500" />}
                                </button>
                            </div>
                            {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.confirmPassword}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`bg-[#199FB1] text-white font-bold py-2 px-4 rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {loading ? "Loading..." : "Create Account"}
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
