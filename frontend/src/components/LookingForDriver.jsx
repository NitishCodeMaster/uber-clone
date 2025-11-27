import React from 'react'

const LookingForDriver = ({ setVehicleFound, vehicleFoundRef }) => {
    return (
        <div ref={vehicleFoundRef} className="fixed bottom-0 left-0 w-full bg-white p-4 z-30 shadow-xl rounded-t-2xl space-y-4">

            <div
                className="flex items-center gap-2 mb-3 cursor-pointer"
                onClick={() => setVehicleFound(false)}
            >
                <i className="ri-arrow-down-wide-line text-xl"></i>
                <h3 className="text-lg font-semibold">Looking for a Driver</h3>
            </div>

            {/* Vehicle Image */}
            <div className="flex justify-center">
                <img
                    className="h-24 object-contain"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
                    alt="confirmed ride"
                />
            </div>

            {/* Ride Details */}
            <div className="space-y-3">
                {/* Pickup */}
                <div className="flex items-center gap-3">
                    <i className="ri-map-pin-user-line text-xl text-gray-600"></i>
                    <div>
                        <h4 className="text-md font-medium">562/11-A</h4>
                        <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
                    </div>
                </div>

                {/* Drop */}
                <div className="flex items-center gap-3">
                    <i className="ri-map-pin-2-fill text-xl text-gray-600"></i>
                    <div>
                        <h4 className="text-md font-medium">562/11-A</h4>
                        <p className="text-sm text-gray-500">Kankariya Talab, Bhopal</p>
                    </div>
                </div>

                {/* Fare */}
                <div className="flex items-center gap-3">
                    <i className="ri-currency-line text-xl text-gray-600"></i>
                    <div>
                        <h4 className="text-md font-medium">₹193.20</h4>
                        <p className="text-sm text-gray-500">Cash</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LookingForDriver