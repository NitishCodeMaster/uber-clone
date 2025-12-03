import React from 'react'
import { Link } from 'react-router-dom' 

const Riding = () => {
    return (
        <div className="h-screen flex flex-col">

            {/* Floating Home Button */}
            <Link to='/home' className="fixed top-5 left-1/2 -translate-x-1/2 z-50 
                            h-12 w-12 bg-white shadow-lg rounded-full 
                            flex items-center justify-center text-xl">
                <i className="ri-home-4-line"></i>
            </Link>

            {/* Top Image */}
            <div className="h-[45%] relative">
                <img
                    className="h-full w-full object-cover"
                    src="https://t4.ftcdn.net/jpg/04/05/13/67/240_F_405136725_ZWTZ6Vt2zRdZSVTkfDnUeBWGe6Xvz3bP.jpg"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* Bottom Details */}
            <div className="h-[55%] p-5 bg-white rounded-t-3xl shadow-xl -mt-6">

                {/* Driver Info */}
                <div className="flex items-center justify-between mb-5">
                    <img
                        className="h-14 object-cover border-gray-300"
                        src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
                        alt=""
                    />

                    <div className="text-right p-4">
                        <h2 className="text-lg font-semibold">Nitish Rathore</h2>
                        <h4 className="text-xl font-bold tracking-wider">BR04 AB 1234</h4>
                        <p className="text-sm text-gray-500">KIA Seltos • Grey</p>
                    </div>
                </div>

                {/* Route Details */}
                <div className="space-y-4">

                    <div className="flex items-center gap-3">
                        <i className="ri-map-pin-user-line text-2xl text-gray-600"></i>
                        <div>
                            <h4 className="font-medium">562/11-A</h4>
                            <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <i className="ri-map-pin-2-fill text-2xl text-gray-600"></i>
                        <div>
                            <h4 className="font-medium">562/11-A</h4>
                            <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <i className="ri-currency-line text-2xl text-gray-700"></i>
                        <div>
                            <h4 className="font-medium">₹193.20</h4>
                            <p className="text-sm text-gray-500">Cash</p>
                        </div>
                    </div>
                </div>

                {/* Button */}
                <button
                    className="w-full mt-6 bg-black text-white py-3 rounded-xl 
                               text-lg font-medium active:scale-95 transition-all"
                >
                    Make a Payment
                </button>

            </div>
        </div>
    )
}

export default Riding
