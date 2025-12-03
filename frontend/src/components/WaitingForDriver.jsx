import React from "react";

const WaitingForDriver = ({ setWaitDriver, WaitDriverRef }) => {
  return (
    <div
      ref={WaitDriverRef}
      className="fixed bottom-0 left-0 w-full bg-white p-5 z-40 shadow-2xl rounded-t-3xl space-y-6"
    >
      {/* Header Close */}
      <div
        className="flex items-center gap-2 mb-1 cursor-pointer"
        onClick={() => setWaitDriver(false)}
      >
        <i className="ri-arrow-down-wide-line text-xl text-gray-700"></i>
        <h3 className="text-lg font-semibold text-gray-800">
          Driver is on the way
        </h3>
      </div>

      {/* Divider Line */}
      <div className="border-b border-gray-200 mb-2" />

      {/* Driver Row */}
      <div className="flex items-center justify-between">

        {/* Driver Image */}
        <div className="flex items-center gap-4">
          <img
            className="h-16 w-16 rounded-full object-cover border border-gray-200 shadow-sm"
            src="https://i.ibb.co/k1YWy1C/user-male.png"
            alt="driver"
          />

          {/* Basic Details */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800">Nitish Kumar</h2>
            <p className="text-sm text-gray-600">4.8 ★ Rating</p>
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="text-right">
          <h4 className="text-xl font-bold text-gray-900">BR04 AB 1234</h4>
          <p className="text-sm text-gray-600 -mt-1">Altroz • Yellow</p>
        </div>
      </div>

      {/* Estimated Time Box */}
      <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
        <h4 className="text-sm text-gray-600">Estimated arrival</h4>
        <h2 className="text-2xl font-bold text-gray-800">3 - 5 min</h2>
      </div>
    </div>
  );
};

export default WaitingForDriver;
