import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import { useGSAP } from "../hooks/useGSAP";
import { gsap } from "gsap";

const CaptainRiding = () => {
    const [finishRidepanel, setFinishRidePanel] = useState(false);
    const finishRidepanelRef = useRef(null);

    // Slide animation
    useGSAP(() => {
        gsap.to(finishRidepanelRef.current, {
            y: finishRidepanel ? "0%" : "100%",
            duration: 0.45,
            ease: "power3.out"
        });
    }, [finishRidepanel]);

    return (
        <div className="h-screen flex flex-col bg-gray-100">

            {/* TOP LOGO + EXIT */}
            <div className='fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-6'>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
                    alt="Uber Logo"
                    className='h-6 object-contain'
                />

                <Link
                    to='/captain-home'
                    className="h-12 w-12 bg-white border rounded-full flex items-center justify-center text-xl shadow-md"
                >
                    <i className="ri-logout-box-r-line"></i>
                </Link>
            </div>

            {/* MAP IMAGE */}
            <div className="h-[45%] relative">
                <img
                    className="h-full w-full object-cover"
                    src="https://t4.ftcdn.net/jpg/04/05/13/67/240_F_405136725_ZWTZ6Vt2zRdZSVTkfDnUeBWGe6Xvz3bP.jpg"
                    alt=""
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>

            {/* RIDE PROGRESS AREA */}
            <div className="h-[55%] p-8 bg-yellow-400 rounded-t-3xl shadow-xl -mt-6 relative">

                {/* Small bar */}
                <div
                    className="absolute -top-4 left-1/2 -translate-x-1/2 cursor-pointer"
                    onClick={() => setFinishRidePanel(true)}
                >
                    <div className="h-1.5 w-12 bg-gray-200 rounded-full"></div>
                </div>

                <h4 className='text-2xl font-bold mb-6'>4 Km away</h4>

                <button
                    onClick={() => setFinishRidePanel(true)}
                    className="bg-green-600 w-full text-white font-semibold py-3 rounded-xl text-lg shadow-md"
                >
                    Complete Ride
                </button>
            </div>

            {/* SLIDE BOTTOM PANEL */}
            <div
                ref={finishRidepanelRef}
                className='fixed bottom-0 translate-y-full w-full bg-white px-3 py-10 pt-12 rounded-t-3xl shadow-xl z-50'
            >
                <FinishRide setFinishRidePanel={setFinishRidePanel} />
            </div>

        </div>
    )
}

export default CaptainRiding
