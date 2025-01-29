import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://mamun-reza-freeshops-backend.vercel.app/api/v1',
});

export default axiosInstance;
