import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CaptainDataContext from '../context/CaptainContext';
import axios from 'axios';

const CaptainSignup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [vehicleColor, setVehicleColor] = useState('');
  const [vehiclePlate, setVehiclePlate] = useState('');
  const [vehicleCapacity, setVehicleCapacity] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const { updateCaptain } = React.useContext(CaptainDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      fullname: { firstname: firstName, lastname: lastName },
      email,
      password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: Number(vehicleCapacity),
        vehicleType: vehicleType,
      }
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/captains/register`, payload);
      if (response.status !== 201) {
        throw new Error('Signup failed');
      }
      const data = response.data;
      updateCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    } catch (error) {
      console.error('Signup failed:', error);
    }

    // reset
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setVehicleColor('');
    setVehiclePlate('');
    setVehicleCapacity('');
    setVehicleType('');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between px-6 py-7 bg-white">

      {/* Logo */}
      <img
        className="w-20 mb-8 opacity-90"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber Logo"
      />

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Name */}
        <div>
          <h3 className="text-xl font-semibold mb-2">What's your name?</h3>

          <div className="flex gap-3">
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 px-3 py-2 rounded text-base"
              required
              type="text"
              placeholder="First name"
            />

            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-[#eeeeee] w-1/2 px-3 py-2 rounded text-base"
              required
              type="text"
              placeholder="Last name"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Enter your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] w-full px-3 py-2 rounded text-base"
            required
            type="email"
            placeholder="Enter email"
          />
        </div>

        {/* Password */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Create a password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] w-full px-3 py-2 rounded text-base"
            required
            type="password"
            placeholder="Create password"
          />
        </div>

        {/* Vehicle Details */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Vehicle details</h3>

          <div className="flex gap-3 mb-3">
            <input
              value={vehicleColor}
              onChange={(e) => setVehicleColor(e.target.value)}
              className="bg-[#eeeeee] w-1/3 px-3 py-2 rounded text-base"
              required
              type="text"
              placeholder="Color"
            />

            <input
              value={vehiclePlate}
              onChange={(e) => setVehiclePlate(e.target.value)}
              className="bg-[#eeeeee] w-1/3 px-3 py-2 rounded text-base"
              required
              type="text"
              placeholder="Plate No."
            />

            <input
              value={vehicleCapacity}
              onChange={(e) => setVehicleCapacity(e.target.value)}
              className="bg-[#eeeeee] w-1/3 px-3 py-2 rounded text-base"
              required
              min={1}
              type="number"
              placeholder="Capacity"
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label className="block mb-2 font-medium text-base">
              Vehicle type
            </label>

            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="bg-[#eeeeee] w-full px-3 py-2 rounded text-base"
              required
            >
              <option value="" disabled>Select vehicle type</option>
              <option value="car">Car</option>
              <option value="auto">Auto</option>
              <option value="bike">Bike</option>
            </select>
          </div>
        </div>

        {/* Button */}
        <button
          className="w-full bg-black text-white py-3 rounded font-semibold text-lg hover:bg-[#111]"
        >
          Sign Up as Captain
        </button>

        <p className="text-center text-base">
          Already registered?
          <Link to="/captain-login" className="text-[#0d6efd] ml-1">
            Login
          </Link>
        </p>
      </form>

      {/* Footer */}
      <p className="text-[10px] text-gray-500 leading-tight text-center mt-8">
        This site is protected by reCAPTCHA.
        <span className="underline"> Google Privacy Policy </span> and
        <span className="underline"> Terms of Service </span> apply.
      </p>
    </div>
  )
}

export default CaptainSignup
