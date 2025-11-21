import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
    return (
        <div
            className="h-screen flex flex-col justify-between bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=764&auto=format&fit=crop')"
            }}
        >
            {/* Logo */}
            <img
                className="w-16 mt-8 ml-8"
                src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                alt="Uber Logo"
            />

            {/* Bottom Section */}
            <div className="bg-white p-6 pb-8">
                <h2 className="text-3xl font-bold mb-5 leading-snug">
                    Get Started<br />with Uber
                </h2>

                <Link
                    to="/login"
                    className="w-full block bg-black text-white text-center py-3 rounded font-semibold"
                >
                    Continue
                </Link>
            </div>
        </div>
    )
}

export default Start
