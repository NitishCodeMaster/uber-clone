import React from 'react'

const CaptainDetails = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">

                <div className="flex items-center gap-4">
                    <img
                        className='h-12 w-12 rounded-full object-cover'
                        src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60"
                        alt=""
                    />
                    <h4 className='text-lg font-medium'>Saiv Rathore</h4>
                </div>

                <div className="text-right">
                    <h4 className="text-xl font-semibold">₹295.20</h4>
                    <p className="text-sm text-gray-500">Earned</p>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">

                <div className='text-center bg-gray-100 py-4 rounded-xl shadow-sm'>
                    <i className="text-2xl ri-timer-2-line"></i>
                    <h5 className='text-lg font-semibold mt-1'>10.2</h5>
                    <p className='text-sm text-gray-500'>Hours Online</p>
                </div>

                <div className='text-center bg-gray-100 py-4 rounded-xl shadow-sm'>
                    <i className="text-2xl ri-speed-up-line"></i>
                    <h5 className='text-lg font-semibold mt-1'>27</h5>
                    <p className='text-sm text-gray-500'>Trips</p>
                </div>

                <div className='text-center bg-gray-100 py-4 rounded-xl shadow-sm'>
                    <i className="text-2xl ri-booklet-line"></i>
                    <h5 className='text-lg font-semibold mt-1'>4.9</h5>
                    <p className='text-sm text-gray-500'>Rating</p>
                </div>

            </div>
        </div>
    )
}

export default CaptainDetails