import React, { useEffect, useState } from 'react';
import { Badge, Row } from 'antd';
import Notification from '../common/Notification';
import axios from 'axios';
import { Link } from 'react-router-dom';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MedicationIcon from '@mui/icons-material/Medication';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Container } from 'react-bootstrap';

import ApplyDoctor from './ApplyDoctor';
import UserAppointments from './UserAppointments';
import DoctorList from './DoctorList';

const UserHome = () => {
  const [doctors, setDoctors] = useState([]);
  const [userdata, setUserData] = useState({});
  const [activeMenuItem, setActiveMenuItem] = useState('');

  const getUser = () => {
    const user = JSON.parse(localStorage.getItem('userData'));
    if (user) {
      setUserData(user);
    }
  };

  const getUserData = async () => {
    try {
      await axios.post('http://localhost:5000/api/user/getuserdata', {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getDoctorData = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/user/getalldoctorsu', {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        },
      });
      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    getUserData();
    getDoctorData();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userData");
    window.location.href = "/";
  };

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  return (
    <div className="min-h-screen flex bg-gray-100 text-gray-800">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4 flex flex-col justify-between">
        <div>
          <div className="text-2xl font-bold text-blue-600 mb-8">MediCareBook</div>
          <nav className="space-y-4">
            <button
              className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md transition ${
                activeMenuItem === 'userappointments'
                  ? 'bg-blue-100 text-blue-600'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => handleMenuItemClick('userappointments')}
            >
              <CalendarMonthIcon />
              Appointments
            </button>

            {!userdata.isdoctor && (
              <button
                className={`flex items-center gap-2 w-full text-left px-3 py-2 rounded-md transition ${
                  activeMenuItem === 'applyDoctor'
                    ? 'bg-blue-100 text-blue-600'
                    : 'hover:bg-gray-100'
                }`}
                onClick={() => handleMenuItemClick('applyDoctor')}
              >
                <MedicationIcon />
                Apply Doctor
              </button>
            )}

            <button
              className="flex items-center gap-2 w-full text-left px-3 py-2 rounded-md hover:bg-red-100 text-red-600 transition"
              onClick={logout}
            >
              <LogoutIcon />
              Logout
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between bg-white shadow p-4">
          <div className="flex items-center gap-4">
            <div
              className="relative cursor-pointer"
              onClick={() => handleMenuItemClick('notification')}
            >
              <Badge
                count={userdata?.notification?.length || 0}
                className={`${
                  activeMenuItem === 'notification' ? 'text-blue-600' : ''
                }`}
              >
                <NotificationsIcon className="text-2xl text-gray-700 hover:text-blue-500 transition" />
              </Badge>
            </div>
            <h3 className="text-xl font-semibold">
              {userdata.isdoctor && 'Dr. '}
              {userdata.fullName}
            </h3>
          </div>
        </header>

        {/* Body */}
        <main className="flex-1 p-6 overflow-auto">
          {activeMenuItem === 'applyDoctor' && <ApplyDoctor userId={userdata._id} />}
          {activeMenuItem === 'notification' && <Notification />}
          {activeMenuItem === 'userappointments' && <UserAppointments />}
          {!['applyDoctor', 'notification', 'userappointments'].includes(activeMenuItem) && (
            <div>
              <h2 className="text-center text-2xl font-semibold mb-4">Home</h2>
              {!userdata.isdoctor && (
                <Row className="gap-4">
                  {doctors.map((doctor, i) => (
                    <DoctorList
                      userDoctorId={doctor.userId}
                      doctor={doctor}
                      userdata={userdata}
                      key={i}
                    />
                  ))}
                </Row>
              )}
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default UserHome;
