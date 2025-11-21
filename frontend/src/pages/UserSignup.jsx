import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { userDataContext } from '../context/UserContext';

const UserSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 
  const navigate = useNavigate();
  const { setUser } = React.useContext(userDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); 

    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email,
      password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/register`, newUser);

      if (response.status === 201) {
        const data = response.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (err) { 
      if (err.response) { 
        const backendError = err.response.data.error ||
          (err.response.data.errors && err.response.data.errors.length > 0 ? err.response.data.errors[0].msg : null);

        setError(backendError || 'An unexpected error occurred during registration.');
      } else { 
        setError('Network Error: Could not reach the server.');
      }
    } 

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
          {error && (
            <p className='text-red-500 text-sm mb-4 p-2 bg-red-100 rounded text-left'>
              {error}
            </p>
          )}

          <button
            className='w-full bg-black text-white py-3 rounded mt-2 font-semibold mb-4 hover:bg-[#1a1a1a]'>
            Create Account
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