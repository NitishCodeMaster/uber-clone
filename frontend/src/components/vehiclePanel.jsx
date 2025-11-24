import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const VehiclePanel = ({ setShowVehiclePanel, vehiclePanelRef, setConfirmRidePanel }) => {

    useGSAP(() => {
        gsap.fromTo(
            vehiclePanelRef.current,
            { y: "100%" },
            { y: "0%", duration: 0.5, ease: "power3.out" }
        );
    }, []);

    return (
        <div
            ref={vehiclePanelRef}
            className="fixed bottom-0 left-0 w-full bg-white p-4 z-20 shadow-xl rounded-t-2xl translate-y-full"
        >
            {/* Header */}
            <div
                className="flex items-center gap-2 mb-3 cursor-pointer"
                onClick={() => setShowVehiclePanel(false)}
            >
                <i className="ri-arrow-down-wide-line text-xl"></i>
                <h3 className="text-lg font-semibold">Choose a Vehicle</h3>
            </div>

            {/* Vehicles */}
            <div className="space-y-3">
                <div className=" flex items-center justify-between p-3 border border-gray-200 rounded-xl shadow-sm"
                    onClick={() => { setConfirmRidePanel(true); setShowVehiclePanel(false); }}
                >
                    <div className="flex items-center gap-3">
                        <img
                            className="h-12"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ7Kt54z31PkbdlqmqnyWnaCjvcLYRG-T_8Q&s"
                            alt="car"
                        />
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <h4 className="font-medium text-sm">UberGo</h4>
                                <span className="flex items-center gap-1 bg-gray-100 px-2 py-[2px] rounded-full text-[10px] text-gray-700">
                                    <i className="ri-user-fill text-[10px]"></i> 4
                                </span>
                            </div>
                            <h5 className="text-[11px] text-gray-500">2 mins away</h5>
                            <p className="text-xs text-gray-500">Affordable, compact rides</p>
                        </div>
                    </div>
                    <h2 className="font-semibold text-base">₹193.20</h2>
                </div>

                {/* Moto */}
                <div className=" flex items-center justify-between p-3 border border-gray-200 rounded-xl shadow-sm" onClick={() => { setConfirmRidePanel(true); setShowVehiclePanel(false); }}>
                    <div className="flex items-center gap-3">
                        <img
                            className="h-12"
                            src="https://cn-geo1.uber.com/image-proc/crop/resizecrop/udam/format=auto/width=552/height=368/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC91ZGFtLWFzc2V0cy8yYzdmYTE5NC1jOTU0LTQ5YjItOWM2ZC1hM2I4NjAxMzcwZjUucG5n"
                            alt="car"
                        />
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <h4 className="font-medium text-sm">Moto</h4>
                                <span className="flex items-center gap-1 bg-gray-100 px-2 py-[2px] rounded-full text-[10px] text-gray-700">
                                    <i className="ri-user-fill text-[10px]"></i> 1
                                </span>
                            </div>
                            <h5 className="text-[11px] text-gray-500">5 mins away</h5>
                            <p className="text-xs text-gray-500">Fast & cheapest rides</p>
                        </div>
                    </div>
                    <h2 className="font-semibold text-base">₹65.00</h2>
                </div>

                {/* Premier */}
                <div className=" flex items-center justify-between p-3 border border-gray-200 rounded-xl shadow-sm" onClick={() => { setConfirmRidePanel(true); setShowVehiclePanel(false); }}>
                    <div className="flex items-center gap-3">
                        <img
                            className="h-12"
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQDw8PEBAQEBUQDw8PEBAQFQ8VEBAPFRUWFxUVFhUYHSggGBolGxUVITUhJSkrLi4uFx8zODMsOTQtLisBCgoKDQ0NFQ0PFSsZFR0tKysrKy03KysrKzcrKysrKysrKystLSsrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA9EAACAQIDBQUFBQcEAwAAAAAAAQIDEQQFIQYSMUFRBxNhcZEiMlKBoRRCYrHRIzNykqLB4RZDgrJTY3P/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAwDAQACEQMRAD8A9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEXJuABgYrO8LSdquJw9N9J1acX6NlGHz/CVHaGLw030jVpN+lwNkCE76okAAAAAAAAAAAAAAAAAAAAAAAAAAAABaxOJhSjvVJxgusmkgLoOdxO1Mf8AYo1K3SbW7D1erNFmO1VaN3Vr0sMvhjuub9bgd+Wa+JhBXnOMV4s8WzbbZN6V6sujk20/k9Poc7itpXUes6j/AOTt6cAPcsbtVRhdRvN+iNHi9t5fcjGP1Z4+szT13pL5l6GPlynveev+QPQcTthWl/uNeWn5GurbS1HxqSfm2cm8Vfw/IxqmJd7AdZLaGfxv1YW0c/jfqzjXiSPtIHX1s1hVVqtOlUT4qcISv6o1tfKcDV/2O6fWhKdO3yTt9DSRxRdhiwNphqGNwntZfmFRLj3Nd+y/mvZfzR0WSdsVWjONHNcM4Ph31NWv4292Xya8jkqWNfUvVqkK0HCrGM4v7sv7dGB75k2c0MZTVXDVYVY8916xfSS4pmefLdKjisuqfacuqzstXST9pLp+KPgz17s97U6GYbtDEbtDEaJX0p1ZcNL+7Lw9OgHowAAAAAAAAAAAAAAAAAAAAAAAOW2x2whgl3UEp1pK+792CfBy/Q8yx20FSvPfqzc3yvwXglwRps8xkquKxFRv3q1R+S3nZeljAcgLue7RY6N1GTlT5ODkml0cUc9Tx6qv26s7vlL2fy/U3EpswMZgIVNbWfVAUKEbuyXn/krsaqpSqU/ZbatrGXJeHii/hswT0mt19fuv5gZhCVtU2vL9OBUQBlUMW+EreZkNpqz/AMo1bL1CtbR8PyAyfs7+Jeg+z/i+n+SuM/QpcraFRT3D6ooakuXoXd8nfEKtRql+GIKZxT4r5osypNarVfUg2NPEmBmmVRrPvKb7uqtVJaRn4S/UohUMinWCu37Ne1GVOUcvzNtNWjTry+70U3zj+Ll9T2uMk0mmmnqmuDR8tY/CQrxtLSS9ya96L/Q7Lsy7Qp4KpDLswlek/ZoV3wh0V/g/LyA90B5Nn3a/DvqlHC2j3c5QdSavKbi7Pdi9LXXHW50vZvtRWzCOI77d/ZunutJJtS3r3tpyA7QAAAAAAAAAAAAAAAAAAfNGMX7Wp/8ASf8A2ZYaL2d1lSq4mUtFGtV8/fehyktoqjldQhu/C73t5gdJGK+9w8C1Ugk9HdfkWsvx0a0bx0a96L4p/oZDQFqUFJWauYVfLE/d18GbGwA0UsJKHuuUbcuMQsTOPvRT8Y8fQ3l/mWqmHi+VgNXDFwlzs+j0ZeuXK2Wp8LPzsYssunH3JJeG8mvS4GXh61tGZUtUaac6kNZxul96LRm4DGxqKyeq4rmBkXJ3impo/Mp3isrqkVxmWIu7stfBcTY4TJcTV/d4atLx3JKPq9ArEqU1LXgyy7x4nSU9lK6/ezw9Dwq1Yb38sW2ZUcgwsV+1xM6v4aFOy/nn+hBy1OoZNPLZYpd3GlOp4wTe6+t+R01GlhaX7rCQk/ixEpVX/K/Z+herY6pNbspvd5QjaNNf8I2QVzGKyetUjh8Piqlvs0n3denFVXGlJ6wnFNXd0no3bU9w7PcrwuGw27hqyrudnUqP2ZSa4LcesUrvQ8yVQyMPjXBpxk010bA9vB5plm2tanZTfex6S97+Y7HKtpsPiLJS3JP7s7K78HzA3QAAAAAAAAAAAgASClsXA+XO1CjKjiq1F3u8VWlbrG7lH/sj1LZrswwFPB06eKw8a9acIyrVZOW9Gcldxg01upcF5amJ2+5VTVHB4/dSlTxdKlVkvvUmpPX5xR306z03ecuPha4Hz1txszLJcdBwcp4esnKlN+9u/fpy6yjo78014lxSvrxPT+2LLliMorTsnLDSp4iD6JNRn/TJ+iPIcmq71CHOy3f5dAM8gEXAkrnVurNJ+PQtkAQlx8VYxqkGvEyiGBb2ZzGlQx9GriLxp01UnbdlLfluOMY2X8T9DLzvEQxuKeKpRhQ0UVCCXuq/v24y14mHKknxVymnRUXeOgGdhsPHe9tKa6NyWvmmmbOjOnH3cPh/OUZTf9cmaaFdrjqZEK6YG/p5tVjpCUafhThTh/1SKKmMqT9+pOX8UpM1CqFxVQM9Mq3zAVYq70DN7wd4YSrE96Bmd4O8MPvB3gGaqpcp4lrgzX94SpgdzkG2lWjaNT9rDhZ+9FeDPRsqzSliYb9KV+sfvRfijwSNU2eU5xUw81OnJxafLg10a5oD3UGh2Y2lp4yNtI1Eryh18Y+BvgAAAAAClkEsgA2YuKxUaa3pO3hzZfkzAzHAKqtW01w6AcJ2m4h47LsTh4x4RVWHxOdN7yS87NfMu9n+fLG5fh6l0504Ro1lzVSCSv8ANJS+Zk5tk1WKbS3l1j+h5Bi6+KyTGTr4dfsa0rzpyT7p6+67cGr6MD1jtGxUYZRj3J23qDprxlNqKXqzwfIMbFRdOUknvb0b8Hcztstu8RmUYUpQhRpQe/3cHJ78+sm+NuSOT4gd1cXOWwONqU+ba+GWqNvhs2hLSScH14x9QNlci5TCSaummuq4EsCbgpJuBJAuAFiCQwJjVsX41TFunwafkQnYDPVQq3zDjMr3gjKUid4xVMnvAMneG8Y3ekOsFZe8N8w3WKXVYGb3xVCsYKkZ2XYOpWmqdKEqknwjBNsDa5Pj50qkakG4yjJNM91yrGKvQpVkrd5BSt0fNetzznJ9n6WXRjiMc4zrPWjhYtP2usvL08zv8glfDUpfFFzfnKTf9wNkCCQAAApZBLIAokUNF1opaAx5xNVmmSUcRFwq04yT43SN20UOIHkWddkWHk3OhFx/DFu3o9PQ5LG9n/dO1pLzR9DOmWMRhYzVpxUl4oD5sr7MuPI19bKWuR9A5jspTnd03uvo+ByGa7Lzhfehp1WqA8j7idN3i5RfgZFLMZLScd7xWjOuxmScdDS4rKWuQFijioT92WvR6Mus1lfANcimFapDnddJagbW4uYdLMIvSScfqvUyk76p3XgBU5HMY/GyrTsr7t7QgufR25tm7zWe7RqW5xt66Hbdg+z9Obr5hUipSpT7jD3V9yW6pTmvG0opPlqB5hiMuxOGUZ1KFegpP2Zzp1IKT8HJJM2eV5h3nsT95LR8pL9T6hxWHhWpypVYRqQmnGcJpSjJPk0+J859peyDyrFxlRv3Fa88O3dunJW3qTfO19OqfmBauN4t0KynCM1zXo+aCYF3eZNze7KZll9JVFj8JUxF2pU50pO8dLOLi5xVud/M6L/VGSx9zKZS/j7v+8mBwFyqnFydopyb4KKbb9DvV2g4On+4ybCx8Zd2n9Kf9ymr2rYlK1HD4WivCM5f3SA5rB7LY2t+7wld+LhKMfWVkdBgezDGyW9WdHDx4t1J3a+UdPqa/GdoeY1L3xLgnypRpx+tr/U0GNzOtXd61arV5/tJzl+bA7uOz+UYPXFY6WLmuNLD23b9Hu3f9SLlTbhU4ulluFpYOD0dRpSqvx6X89488pzMuhK4HRUsVKpNznKU5SftTk25M9nySNsNh1/6af5I8Ry3WUUtW2kl4s90wUNylTg+MacIvzSSAyGEQAKgRcgCWQVNEWAgEsgCGilorAFlohxLriQ4gY8oFqpSvx1MtoplEDnsx2fpVb2juPrHh6HK5nsnON2kprrHj6Ho7gUOmB4jjsk4pqxo8Xk7XI96x+ApTT7xR89Ezkc3yairuFVP8Or+oHjeIy5rkYTpyg7xbj5cPQ9LxeUXXC5osZk3HQDkMRiXKnOE1xWkl1WvA9d7C66eW1IrjDF1N75xg0/Rnm+Kytq+huuyHOVhMdWwVR7scTbu78O+hdxX/KLfzSA9whUe9LXS6SXK1jku2HL1XyivK15YeVPEQ8LSUZ/0SkdQpmg7RcXGGUY9ydlKg6a8ZTahFesgPBMiq/s5w+GV15P/ACjPuafIn7VT+GP5s2twLm8N4t3FwLm8N4tom4FzeJUi1vEqYGTBmbh3fga2nVV/0NrlsnfRWA9L7PdntViq1vZ/dw0vf4pLl4I9GjI8kyXEzjZqTXDg2d7kOYVKj3ZWkktZc0B0UWVFpFyIEgACoEkAQ0LEgCLEFTIsBAJsLAUtFLiVgC04lLiX2indAxK2GjP3oqXmYryqj/44m0cSlxA1ssFC27uRt5I0uY7L0p3cPYfTijqnAodMDyvNdlKkLvd3l1iecbXZFOFq9NSjKm03u3UrLVNW5p6n0tOkazH5HRrJ78FrzSA8f2a7Woxpxp46nNyiku/pKL37c5RurS8Vp5Gg7QtvnmMY0KMJUqEJb732t+rNcG0tFFdOp2m03Y9Co3Uw0+7bu91K8W/4f0ZwON7O8XRbUkpW5xutPJgcnRxEoO8X4NcmvE2NLMm1rGxn/wCl6keMH8ypZFNfdAwvt/g/oPtz+Ezo5LL4S7HI5fCBq/tkug7+b6L5G8pZBJ/dM+hs1J8gOXipvmzKo4OT43+p2OF2Xfwm5wWzPDT6Acbgcpemh1GW5Q9NDrsv2Vm7WhbxlodHgdm4Qs5ve/CtEBzeU5RKVlGPm+SO1y3ARpRsuL4syqNBRVopJdEXlECIouRCRIAAAVgAAAAIBIAgEkARYWJAEWFiQBSGiqxFgKbEOJW0QBb3CHTLoAsd0Wa2ChNWlFSXijNsLAc3jNlaM9YrdfR6o1c9i/CH1O4sLAcL/on+D6lyGxluLgvkztd0boHJ0tkILjL0Rl09mKS+J/Q6GwsBqqWS0Y/7afndmZTw0Y+7GK8kjKsALW4VKBWSBSkTYAASEibARYEgCQAAAAAAAAAAAAAAACAAAAAAAAAAAAAWFgAFhYABYWAAWAAAAACQAAAA/9k="
                            alt="car"
                        />
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <h4 className="font-medium text-sm">Uber Premier</h4>
                                <span className="flex items-center gap-1 bg-gray-100 px-2 py-[2px] rounded-full text-[10px] text-gray-700">
                                    <i className="ri-user-fill text-[10px]"></i> 4
                                </span>
                            </div>
                            <h5 className="text-[11px] text-gray-500">7 mins away</h5>
                            <p className="text-xs text-gray-500">Spacious & comfortable</p>
                        </div>
                    </div>
                    <h2 className="font-semibold text-base">₹265.40</h2>
                </div>

            </div>
        </div >

    );
};

export default VehiclePanel;
