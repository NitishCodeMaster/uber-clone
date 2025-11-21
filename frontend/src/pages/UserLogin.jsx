import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { userDataContext } from '../context/UserContext';

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = React.useContext(userDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const loginData = {
      email: email,
      password: password
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/users/login`, loginData);

      if (response.status === 200) {
        setUser(response.data.user);
        localStorage.setItem('token', response.data.token);
        navigate('/home');
      }
    } catch (err) {
      if (err.response) {
        const backendError = err.response.data.error ||
          (err.response.data.errors && err.response.data.errors.length > 0 ? err.response.data.errors[0].msg : null);

        setError(backendError || 'An unexpected error occurred during login.');
      } else {
        setError('Network Error: Could not reach the server.');
      }
    }
    setPassword('');
  }
  return (
    <div className='min-h-screen p-7 flex flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10 opacity-90'
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />

        <form onSubmit={handleSubmit}>
          <h3 className='text-xl mb-2 font-semibold'>What's Your email?</h3>
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className='bg-[#eeeeee] w-full px-3 py-2 rounded mb-6 placeholder:text-base'
            required
            type="email"
            placeholder='Enter your email'
          />
          <h3 className='text-xl mb-2 font-semibold'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className='bg-[#eeeeee] w-full px-3 py-2 rounded mb-6 placeholder:text-base'
            required
            type="password"
            placeholder='Enter your password'
          />

          {/* Display error message */}
          {error && (
            <p className='text-red-500 text-sm mb-4 p-2 bg-red-100 rounded text-left'>
              {error}
            </p>
          )}

          <button
            className='w-full bg-black text-white py-3 rounded mt-2 font-semibold mb-2 hover:bg-[#1a1a1a]'>
            Login as User
          </button>

          <Link to="/signup" className='block text-center mt-4 text-[#0d6efd]'>
            Don't have an account? Sign Up
          </Link>
        </form>
      </div>

      <div>
        <Link to="/captain-login" className='w-full flex items-center justify-center bg-[#10b461] text-white py-3 rounded mt-3 font-semibold hover:bg-[#0e9b54] mb-4'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
