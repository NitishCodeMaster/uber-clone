import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })

    setEmail('');
    setPassword('');
  }
  return (
    <div className='min-h-screen p-7 flex flex-col justify-between'>
      <div>
        <img
          className='w-16 mb-10 opacity-90'
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form onSubmit={(e) => {
          handleSubmit(e)
        }}>
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
