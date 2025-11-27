import React from "react";

const WaitingForDriver = ({ setWaitDriver, WaitDriverRef }) => {
  return (
    <div
      ref={WaitDriverRef}
      className="fixed bottom-0 left-0 w-full bg-white p-5 z-30 shadow-xl rounded-t-2xl space-y-5"
    >
      {/* Header Close */}
      <div
        className="flex items-center gap-2 mb-2 cursor-pointer"
        onClick={() => setWaitDriver(false)}
      >
        <i className="ri-arrow-down-wide-line text-xl"></i>
        <h3 className="text-lg font-semibold">Driver is on the way</h3>
      </div>

      {/* Driver Row */}
      <div className="flex items-center justify-between">
        {/* Driver Image */}
        <img
          className="h-16 w-16 rounded-full object-cover border shadow-sm"
          src="https://i.ibb.co/k1YWy1C/user-male.png"
          alt="driver"
        />

        {/* Driver Details */}
        <div className="text-right">
          <h2 className="text-lg font-medium">Nitish Kumar</h2>
          <h4 className="text-xl font-semibold -mt-1">BR04 AB 1234</h4>
          <p className="text-sm text-gray-600">Altroz 4500a</p>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
