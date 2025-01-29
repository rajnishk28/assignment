import { ENDPOINTS } from "../endpoint";
import axiosInstance from "../axiosInstance";


export const AdminLogin = async (data) => {
    const response = await axiosInstance.post(ENDPOINTS.ADMINLOGIN, data);
    return response
}


export const AdminSignup = async (data) => {
    const response = await axiosInstance.post(ENDPOINTS.ADMINSIGNUP, data);
    return response
}
export const AdminUpdateProfile = async (token, data) => {
    const response = await axiosInstance.put(ENDPOINTS.ADMINUPDATEPROFILE, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response
}
