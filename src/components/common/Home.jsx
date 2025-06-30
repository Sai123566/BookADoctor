import React from 'react';
import p3 from '../../images/10130.jpg';
const HomePage = () => {
  return (
    <div className="font-sans bg-blue-50 text-blue-900 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-700 text-white px-8 py-5 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">HealthEase</h1>
        <nav className="space-x-6">
          <a href="/login" className="hover:text-blue-200 font-semibold transition">Login</a>
          <a href="/register" className="hover:text-blue-200 font-semibold transition">Register</a>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-white flex flex-col lg:flex-row items-center justify-between px-10 py-16">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-800 mb-4">
              Your Health, Our Priority
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Book appointments with trusted doctors in seconds. Simple, secure,
              and stress-free — all in one platform.
            </p>
            <a
              href="/login"
              className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-800 transition"
            >
              Get Started
            </a>
          </div>

          <div className="lg:w-1/2 text-center">
           <img
  src={p3}
  alt="Doctor consulting illustration"
  className="w-full max-w-md h-auto object-contain mx-auto rounded-lg shadow-xl"
/>

          </div>
        </section>

        {/* Features */}
        <section className="bg-blue-100 text-center py-16 px-4">
          <h3 className="text-3xl font-bold text-blue-800 mb-10">Why Choose HealthEase?</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Verified Doctors</h4>
              <p className="text-gray-700 text-sm">All listed doctors are verified and approved.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Instant Booking</h4>
              <p className="text-gray-700 text-sm">Schedule appointments quickly with our UI.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="text-xl font-bold text-blue-700 mb-2">Secure Platform</h4>
              <p className="text-gray-700 text-sm">Your data is fully protected and encrypted.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-white text-center py-16 px-4">
          <h3 className="text-3xl font-bold text-blue-800 mb-6">What Our Users Say</h3>
          <p className="italic max-w-xl mx-auto text-gray-800 text-lg">
            “HealthEase made it so easy to connect with specialists. I booked an appointment in just 2 minutes!” – <strong>Aarav M.</strong>
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-4 text-gray-600 text-sm">
        &copy; 2025 HealthEase. All rights reserved.
      </footer>
    </div>
  );
};

export default HomePage;
