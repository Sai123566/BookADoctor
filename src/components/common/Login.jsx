import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/userC/login', user);

      if (res.data.success) {
        message.success(res.data.message || 'Login successful');

        // Optional: Save token/userData to localStorage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));
         const isLoggedIn = JSON.parse(localStorage.getItem("userData"));
        const { type } = isLoggedIn
switch (type) {
  case "adminC":
    navigate("/adminHome");
    break;
  case "userC":
    navigate("/userhome");
    break;
  case "doctorC":
    // Navigate to appointments route with doctorId
    navigate(`/userhome/userappointments/${res.data.userData._id}`);
    break;
  default:
    navigate("/Login");
    break;
}

      } else {
        message.error(res.data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      message.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://png.pngtree.com/thumb_back/fh260/background/20220507/pngtree-hospital-building-for-healthcare-cartoon-background-vector-illustration-with-image_1319913.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <label className="block text-sm font-semibold mb-1">Password</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-700">
          Don’t have an account?{' '}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
