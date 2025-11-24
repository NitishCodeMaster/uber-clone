import React from 'react';

const LocationSearchpanel = ({ setShowVehiclePanel }) => {
    const locations = [
        "24B, Near Kapoor's cafe, Adarsh Nagar, Roorkee",
        "45A, Civil Lines, Main Market, Roorkee",
        "Near Bus Stand, Railway Road, Roorkee"
    ];

    return (
        <div className="p-3">
            {locations.map((element, index) => (
                <div
                    onClick={() => setShowVehiclePanel(true)}
                    key={index}
                    className="flex items-center gap-4 p-3 rounded-xl my-3 bg-gray-50 
                     hover:bg-gray-100 active:border-[2px] active:border-black transition"
                >
                    <h2 className="bg-gray-200 h-10 w-10 flex items-center justify-center rounded-full ml-1">
                        <i className="ri-map-pin-line text-lg text-gray-700"></i>
                    </h2>

                    <h4 className="font-medium text-sm">
                        {element}
                    </h4>
                </div>
            ))}
        </div>
    );
};

export default LocationSearchpanel;
    