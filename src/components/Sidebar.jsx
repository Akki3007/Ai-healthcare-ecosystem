import { Link, useLocation } from "react-router-dom";

function Sidebar() {

    const location = useLocation();

    const menuItems = [
        {
            name: "Dashboard",
            path: "/dashboard",
        },
        {
            name: "Doctor Availability",
            path: "/doctors-availability",
        },
        {
            name: "Appointments",
            path: "/appointments",
        },
        {
            name: "Shift Management",
            path: "/shift-management",
        },
        {
            name: "Reports",
            path: "/reports",
        },
    ];

    return (

        <div className="fixed left-0 top-0 h-screen w-[320px] bg-[#020B2D] px-7 py-10 flex flex-col justify-between">

            {/* Top Section */}
            <div>

                {/* Logo */}
                <div className="flex items-center gap-4 mb-16">

                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">

                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2967/2967350.png"
                            alt="logo"
                            className="w-9 h-9"
                        />

                    </div>

                    <div>

                        <h1 className="text-white text-[24px] font-bold leading-tight">

                            AI Healthcare

                        </h1>

                        <p className="text-cyan-400 text-[15px] mt-1">

                            Healthcare Ecosystem

                        </p>

                    </div>

                </div>

                {/* Menu */}
                <div className="flex flex-col gap-5">

                    {menuItems.map((item) => (

                        <Link
                            key={item.name}
                            to={item.path}
                            className={`px-7 py-5 rounded-2xl text-[18px] font-semibold transition-all duration-300 ${location.pathname === item.path
                                ? "bg-cyan-500 text-white"
                                : "text-white hover:bg-[#18284d]"
                                }`}
                        >

                            {item.name}

                        </Link>

                    ))}

                </div>

            </div>

            {/* Logout Button */}
            <button
                onClick={() => {

                    localStorage.removeItem("token");
                    localStorage.removeItem("user");

                    window.location.href = "/";

                }}
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-4 rounded-2xl text-[18px] font-semibold transition-all duration-300"
            >

                Logout

            </button>

        </div>

    );
}

export default Sidebar;