import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { message } from 'antd';

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    type: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      return message.error('Passwords do not match!');
    }

    try {
      const { fullName, email, phone, password, type } = user;

      const res = await axios.post('http://localhost:5000/api/userC/register', {
        fullName,
        email,
        password,
        phone,
        type,
      });

      if (res.data.success || res.status === 201) {
        message.success('Registration successful!');
        navigate('/login');
      } else {
        message.error(res.data.message || 'Registration failed');
      }
    } catch (error) {
      console.error(error);
      message.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://t4.ftcdn.net/jpg/03/65/76/33/360_F_365763394_KsD8IOHsZVTsIaXMcDuDoJ9TfMNWnpix.jpg')",
      }}
    >
      <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-800 text-center mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold mb-1">Register as:</label>
          <select
            name="type"
            value={user.type}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          >
            <option value="">--Select Role--</option>
            <option value="userC">Customer</option>
            <option value="doctorC">Doctor</option>
          </select>

          <label className="block text-sm font-semibold mb-1">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={user.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <label className="block text-sm font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <label className="block text-sm font-semibold mb-1">Phone</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
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

          <label className="block text-sm font-semibold mb-1">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
            required
            className="w-full p-2 mb-4 border border-gray-300 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 text-white py-2 rounded font-semibold hover:bg-blue-800 transition"
          >
            Register
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
