import React from 'react'

const RidePopUp = (props) => {
    return (
        <div className="relative p-6">

            {/* Close / Slide-down handle */}
            <h5
                className="p-1 text-center w-full absolute -top-2 left-0"
                onClick={() => props.setRidePopUpPanel(false)}
            >
                <i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i>
            </h5>

            {/* Heading */}
            <h3 className="text-2xl font-bold mb-6">New Ride Available</h3>

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

            {/* Ride Details */}
            <div className="mt-6 w-full">

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

            {/* Buttons */}
            <div className="flex gap-3 mt-6">

                <button
                    onClick={() => props.setRidePopUpPanel(false)}
                    className="w-1/2 bg-gray-200 text-gray-700 font-semibold py-3 rounded-xl"
                >
                    Ignore
                </button>

                <button
                    onClick={() => props.setConfirmRidePopUpPanel(true)}
                    className="w-1/2 bg-green-600 text-white font-semibold py-3 rounded-xl"
                >
                    Accept
                </button>

            </div>
        </div>
    )
}

export default RidePopUp
