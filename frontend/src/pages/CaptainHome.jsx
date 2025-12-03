import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails.jsx'
import RidePopUp from '../components/RidePopUp.jsx'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp.jsx'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const CaptainHome = () => {
  const [RidePopUpPanel, setRidePopUpPanel] = useState(true);
  const [ConfirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
  const ridePopupPanelRef = useRef(null);
  const confirmRidePopupPanelRef = useRef(null);

  useGSAP(() => {
    if (RidePopUpPanel) {
      gsap.to(ridePopupPanelRef.current, { y: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(ridePopupPanelRef.current, { y: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [RidePopUpPanel]);

  useGSAP(() => {
    if (ConfirmRidePopUpPanel) {
      gsap.to(confirmRidePopupPanelRef.current, { y: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(confirmRidePopupPanelRef.current, { y: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [ConfirmRidePopUpPanel]);

  return (
    <div className="h-screen flex flex-col bg-gray-50">

      {/* Header */}
      {!ConfirmRidePopUpPanel && (
        <div className='fixed top-5 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4'>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
            alt="Uber Logo"
            className='h-6 object-contain'
          />
          <Link
            to='/home'
            className="h-12 w-12 bg-white shadow-lg rounded-full 
                     flex items-center justify-center text-xl"
          >
            <i className="ri-logout-box-r-line"></i>
          </Link>
        </div>
      )}
      
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
      <div className="h-[55%] p-9 bg-white rounded-t-3xl shadow-xl -mt-6">
        <CaptainDetails />
      </div>

      <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} />
      </div>

      <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
        <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
      </div>
    </div>
  )
}

export default CaptainHome
