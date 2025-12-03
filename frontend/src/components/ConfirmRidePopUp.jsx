import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidePopUp = (props) => {
    const [otp, setOtp] = useState('');
    const submitHandler = (e) => {
        e.preventDefault()
    }
    return (

        <div className="relative p-6">

            {/* Slide down button */}
            <h5
                className="p-1 text-center w-full absolute -top-2 left-0"
                onClick={() => props.setRidePopUpPanel(false)}
            >
                <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
            </h5>

            {/* Heading */}
            <h3 className="text-2xl font-bold mb-6">Confirm Ride to Start</h3>

            {/* Rider Card */}
            <div className="flex items-center justify-between p-4 bg-yellow-400 rounded-xl shadow">
                <div className="flex items-center gap-3">
                    <img
                        className="h-12 w-12 rounded-full object-cover"
                        src="https://i.pinimg.com/236x/af/26/28/af26280b0ca305be47df0b799ed1b12b.jpg"
                        alt=""
                    />
                    <h2 className="text-lg font-semibold">Harsi Patelia</h2>
                </div>
                <h5 className="text-lg font-bold">2.2 KM</h5>
            </div>

            {/* Trip Details */}
            <div className="w-full mt-6">

                {/* Pickup */}
                <div className="flex items-center gap-5 p-3 border-b">
                    <i className="ri-map-pin-user-fill text-xl text-gray-700"></i>
                    <div>
                        <h3 className="text-lg font-semibold">562/11-A</h3>
                        <p className="text-sm text-gray-500 -mt-1">New York</p>
                    </div>
                </div>

                {/* Destination */}
                <div className="flex items-center gap-5 p-3 border-b">
                    <i className="ri-map-pin-2-fill text-xl text-gray-700"></i>
                    <div>
                        <h3 className="text-lg font-semibold">562/11-A</h3>
                        <p className="text-sm text-gray-500 -mt-1">New York</p>
                    </div>
                </div>

                {/* Fare */}
                <div className="flex items-center gap-5 p-3">
                    <i className="ri-currency-line text-xl text-gray-700"></i>
                    <div>
                        <h3 className="text-lg font-semibold">₹123.40</h3>
                        <p className="text-sm text-gray-500 -mt-1">Cash Payment</p>
                    </div>
                </div>
            </div>

            {/* OTP & Buttons */}
            <div className="mt-6 w-full">
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className="flex flex-col gap-3"
                >
                    <input
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="text"
                        className="bg-gray-100 px-4 py-3 text-lg rounded-xl w-full outline-none
                                     border border-transparent focus:border-sky-500 
                                     focus:ring-2 focus:ring-sky-300"
                        placeholder="Enter OTP"
                    />

                    <Link
                        to="/captain-riding"
                        className="bg-green-600 w-full flex justify-center text-white font-semibold py-3 rounded-xl"
                    >
                        Confirm
                    </Link>

                    <button
                        type="button"
                        onClick={() => props.setRidePopUpPanel(false)}
                        className="bg-red-600 text-white font-semibold py-3 rounded-xl"
                    >
                        Cancel
                    </button>
                </form>
            </div>

        </div>
    )
}

export default ConfirmRidePopUp
