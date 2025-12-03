 import React, { useEffect } from 'react';

const LookingForDriver = ({ setVehicleFound, vehicleFoundRef, setWaitDriver }) => {

    // Auto move to waiting for driver after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setVehicleFound(false);
            setWaitDriver(true);
        }, 3000); // 3 seconds
        return () => clearTimeout(timer);
    }, []);

    return (
        <div ref={vehicleFoundRef} className="fixed bottom-0 left-0 w-full bg-white p-4 z-30 shadow-xl rounded-t-2xl space-y-4">
            <div className="flex items-center gap-2 mb-3 cursor-pointer" onClick={() => setVehicleFound(false)}>
                <i className="ri-arrow-down-wide-line text-xl"></i>
                <h3 className="text-lg font-semibold">Looking for a Driver</h3>
            </div>
            <div className="flex justify-center">
                <p className="text-gray-500">Searching for nearby drivers...</p>
            </div>
        </div>
    )
}

export default LookingForDriver;
