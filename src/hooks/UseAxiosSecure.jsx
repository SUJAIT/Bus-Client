import { AuthContext } from '@/Components/Authentication/ContextApi/AuthProvider';
import axios from 'axios';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import useAuth from './useAuth';
// import { AuthContext } from '../ContextApi/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000/', 
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
 
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;