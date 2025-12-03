import React, { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchpanel from "../components/LocationSearchpanel";
import VehiclePanel from "../components/vehiclePanel";
import ConfirmedVehicle from "../components/confirmedVehicle";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [showVehiclePanel, setShowVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [VehicleFound, setVehicleFound] = useState(false);
  const [WaitDriver, setWaitDriver] = useState(false);

  const formPanelRef = useRef(null);
  const slidePanelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const closeRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const WaitDriverRef = useRef(null);

  // LOCATION SEARCH PANEL ANIMATION
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(formPanelRef.current, { top: 0, duration: 0.5, ease: "power3.out" });

      gsap.to(slidePanelRef.current, {
        height: "60%",
        duration: 0.5,
        ease: "power3.out",
        opacity: 1,
      });

      gsap.to(closeRef.current, { opacity: 1 });
    } else {
      gsap.to(formPanelRef.current, {
        top: "59%",
        duration: 0.5,
        ease: "power3.inOut",
      });

      gsap.to(slidePanelRef.current, {
        height: "0%",
        duration: 0.5,
        ease: "power3.inOut",
        opacity: 0,
      });

      gsap.to(closeRef.current, { opacity: 0 });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (showVehiclePanel) {
      gsap.to(vehiclePanelRef.current, {
        y: 0,
        duration: 0.5,
        ease: "power3.out"
      })
    } else {
      gsap.to(vehiclePanelRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power3.in"
      })
    }
  }, [showVehiclePanel])

  useGSAP(() => {
    if (confirmRidePanel) {
      gsap.to(confirmRidePanelRef.current, { y: 0, duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(confirmRidePanelRef.current, { y: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (VehicleFound) {
      gsap.to(vehicleFoundRef.current, { y: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(vehicleFoundRef.current, { y: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [VehicleFound]);

  useGSAP(() => {
    if (WaitDriver) {
      gsap.to(WaitDriverRef.current, { y: "0%", duration: 0.5, ease: "power3.out" });
    } else {
      gsap.to(WaitDriverRef.current, { y: "100%", duration: 0.5, ease: "power3.in" });
    }
  }, [WaitDriver]);

  return (
    <div className="h-screen w-screen relative overflow-hidden">

      <img
        className="w-20 absolute left-5 top-5 z-10"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt="Uber"
      />

      <img
        className="h-full w-full object-cover"
        src="https://camo.githubusercontent.com/e0debd25d05c84be78d89bf7a2858c65e3cfecd72e95bd22ec50e85fa1f84cfb/68747470733a2f2f322e62702e626c6f6773706f742e636f6d2f2d574f70483738393364526b2f5733527372626f476678492f41414141414141414356552f767a6b39683975526262415777485633366a5455644b4f555552795946322d6167434c63424741732f73313630302f73637265656e73686f74362e706e67"
        alt=""
      />

      {/* FORM PANEL */}
      <div
        ref={formPanelRef}
        className="absolute top-[40%] w-full bg-white p-6 shadow-xl z-20 max-h-[60vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-xl font-semibold">Find a trip</h4>

          <h5
            ref={closeRef}
            onClick={() => setPanelOpen(false)}
            className="opacity-0 cursor-pointer"
          >
            <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
          </h5>
        </div>

        <div className="flex flex-col gap-4">
          <input
            onClick={() => setPanelOpen(true)}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            type="text"
            placeholder="Add a pick-up location"
            className="p-3 border rounded-lg w-full"
          />

          <input
            onClick={() => setPanelOpen(true)}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            type="text"
            placeholder="Enter your destination"
            className="p-3 border rounded-lg w-full"
          />

          <button
            onClick={() => setShowVehiclePanel(true)}
            className="bg-black text-white p-3 rounded-lg"
          >
            Find Ride
          </button>
        </div>
      </div>

      {/* LOCATION SEARCH PANEL */}
      <div
        ref={slidePanelRef}
        className="absolute bottom-0 left-0 w-full bg-white overflow-hidden z-10"
        style={{ height: "0%" }}
      >
        <LocationSearchpanel
          setShowVehiclePanel={setShowVehiclePanel}
        />
      </div>

      {showVehiclePanel && (
        <VehiclePanel
          setShowVehiclePanel={setShowVehiclePanel}
          vehiclePanelRef={vehiclePanelRef}
          setConfirmRidePanel={setConfirmRidePanel}
        />
      )}

      {confirmRidePanel && (
        <ConfirmedVehicle
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
          confirmRidePanelRef={confirmRidePanelRef} 
        />
      )}

      {VehicleFound && (
        <LookingForDriver
          setVehicleFound={setVehicleFound}
          vehicleFoundRef={vehicleFoundRef}
          setWaitDriver={setWaitDriver}
        />
      )}

      {WaitDriver && (
        <WaitingForDriver
          setWaitDriver={setWaitDriver}
          WaitDriverRef={WaitDriverRef}
        />
      )}
    </div>
  );
};

export default Home;
