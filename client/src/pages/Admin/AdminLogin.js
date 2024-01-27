import React from 'react';
import { useDispatch } from 'react-redux';
import { Hideloading, Showloading } from '../../redux/rootSlice';
import axios from 'axios';
import { message } from 'antd';

const AdminLogin = () => {
  const [user, setuser] = React.useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const Login = async () => {
    try {
      dispatch(Showloading());
      const response = await axios.post('/api/portfolio/admin-login', user);
      dispatch(Hideloading());

      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem('token',JSON.stringify(response.data));
        // Redirect to the admin page or use React Router for navigation
        window.location.href = '/admin';
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      message.error(error.isAxiosError ? 'Network Error' : error.message);
      dispatch(Hideloading());
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-primary'>
      <div className='w-96 flex gap-5 p-7 shadow border border-gray-500 flex-col bg-white'>
        <h1 className='text-2xl'>Portfolio - Admin Login</h1>
        <hr />
        <input
          type='text'
          placeholder='User Name'
          value={user.username}
          onChange={(e) => setuser({ ...user, username: e.target.value })}
        />
        <input
          type='password'
          placeholder='Password'
          value={user.password}
          onChange={(e) => setuser({ ...user, password: e.target.value })}
        />
        <button
          className='bg-primary text-white p-2 rounded-lg'
          onClick={Login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default AdminLogin;
