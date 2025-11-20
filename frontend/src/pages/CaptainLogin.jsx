import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCaptainData({ email, password });
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

        {/* <h2 className='text-2xl font-bold mb-6'>Captain Login</h2> */}

        <form onSubmit={handleSubmit}>
          <h3 className='text-xl mb-2 font-semibold'>Enter your email</h3>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] w-full px-3 py-2 rounded mb-6 placeholder:text-base'
            required
            type="email"
            placeholder='Captain email'
          />

          <h3 className='text-xl mb-2 font-semibold'>Enter password</h3>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='bg-[#eeeeee] w-full px-3 py-2 rounded mb-6 placeholder:text-base'
            required
            type="password"
            placeholder='Password'
          />

          <button
            className='w-full bg-black text-white py-3 rounded mt-2 font-semibold mb-4 hover:bg-[#1a1a1a]'>
            Login as Captain
          </button>

          <p className='text-center text-base'>
            Not a Captain?
            <Link to="/captain-signup" className='text-[#0d6efd] ml-1'>
              Register here
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/login"
          className='w-full flex items-center justify-center bg-[#1a73e8] text-white py-3 rounded font-semibold hover:bg-[#155cbc]'>
          Sign in as User
        </Link>
      </div>
    </div>
  )
}

export default CaptainLogin;
