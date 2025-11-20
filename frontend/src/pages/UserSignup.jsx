import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({ fullname: { firstName, lastName }, email, password });

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='min-h-screen p-7 flex flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10 opacity-90'
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />

        <form onSubmit={handleSubmit}>

          <h3 className='text-xl mb-2 font-semibold'>What's your name ?</h3>

          <div className='flex gap-4 mb-6'>
            <input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 px-3 py-2 rounded placeholder:text-base'
              required
              type="text"
              placeholder='First name'
            />

            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className='bg-[#eeeeee] w-1/2 px-3 py-2 rounded placeholder:text-base'
              required
              type="text"
              placeholder='Last name'
            />
          </div>

          <h3 className='text-xl mb-2 font-semibold'>Enter your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] w-full px-3 py-2 rounded mb-6 placeholder:text-base'
            required
            type="email"
            placeholder='Enter your email'
          />

          <h3 className='text-xl mb-2 font-semibold'>Create a password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] w-full px-3 py-2 rounded mb-6 placeholder:text-base'
            required
            type="password"
            placeholder='Create password'
          />

          <button
            className='w-full bg-black text-white py-3 rounded mt-2 font-semibold mb-4 hover:bg-[#1a1a1a]'>
            Sign Up
          </button>

          <p className='text-center text-base'>
            Already have an account?
            <Link to="/login" className='text-[#0d6efd] ml-1'>
              Login
            </Link>
          </p>
        </form>
      </div>

      <div>
        <p className='text-[10px] leading-tight text-center text-gray-500'>By proceeding, you consent to receive calls, WhatsApp messages, or SMS messages, including those sent by automated means, from Uber and its affiliates to the number provided.</p>
      </div>
    </div>
  )
}

export default UserSignup;
