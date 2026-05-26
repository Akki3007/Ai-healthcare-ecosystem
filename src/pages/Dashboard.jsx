import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {
    FaUserDoctor,
    FaCalendarCheck,
    FaHospital,
    FaBell,
    FaMagnifyingGlass
} from "react-icons/fa6";


function Dashboard() {
    const navigate = useNavigate();
    const doctors = [
        {
            id: "DOC001",
            name: "Dr. Raj Kumari",
            department: "Cardiology",
            specialization: "Heart Specialist",
            experience: "10+ Years Experience",
            timing: "10:00 AM - 2:00 PM",
            status: "Available",

            weeklySchedule: [
                {
                    day: "Monday",
                    time: "10:00 AM - 2:00 PM",
                    status: "Available",
                    mode: "Online",
                },
                {
                    day: "Tuesday",
                    time: "11:00 AM - 3:00 PM",
                    status: "Blocked",
                    mode: "Offline",
                },
            ],
        },

        {
            id: "DOC002",
            name: "Dr. Priya Sharma",
            department: "Skin Care",
            specialization: "Dermatologist",
            experience: "8+ Years Experience",
            timing: "12:00 PM - 5:00 PM",
            status: "Busy",

            weeklySchedule: [
                {
                    day: "Monday",
                    time: "12:00 PM - 5:00 PM",
                    status: "Busy",
                    mode: "Offline",
                },
                {
                    day: "Wednesday",
                    time: "2:00 PM - 6:00 PM",
                    status: "Available",
                    mode: "Hybrid",
                },
            ],
        },

        {
            id: "DOC003",
            name: "Dr. Arun Kumar",
            department: "Neuro Sciences",
            specialization: "Neurologist",
            experience: "12+ Years Experience",
            timing: "9:00 AM - 1:00 PM",
            status: "Available",

            weeklySchedule: [
                {
                    day: "Tuesday",
                    time: "9:00 AM - 1:00 PM",
                    status: "Available",
                    mode: "Online",
                },
                {
                    day: "Thursday",
                    time: "2:00 PM - 6:00 PM",
                    status: "Busy",
                    mode: "Offline",
                },
            ],
        },

        {
            id: "DOC004",
            name: "Dr. Katherine",
            department: "Child Care",
            specialization: "Pediatrician",
            experience: "7+ Years Experience",
            timing: "4:00 PM - 8:00 PM",
            status: "Available",

            weeklySchedule: [
                {
                    day: "Monday",
                    time: "4:00 PM - 8:00 PM",
                    status: "Available",
                    mode: "Hybrid",
                },
                {
                    day: "Friday",
                    time: "1:00 PM - 5:00 PM",
                    status: "Blocked",
                    mode: "Offline",
                },
            ],
        },

        {
            id: "DOC005",
            name: "Dr. Ravi Teja",
            department: "Orthopedics",
            specialization: "Bone Specialist",
            experience: "9+ Years Experience",
            timing: "11:00 AM - 4:00 PM",
            status: "Available",

            weeklySchedule: [
                {
                    day: "Wednesday",
                    time: "11:00 AM - 4:00 PM",
                    status: "Available",
                    mode: "Online",
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 1:00 PM",
                    status: "Busy",
                    mode: "Offline",
                },
            ],
        },

        {
            id: "DOC006",
            name: "Dr. Sneha Reddy",
            department: "Women's Health",
            specialization: "Gynecologist",
            experience: "6+ Years Experience",
            timing: "2:00 PM - 7:00 PM",
            status: "Busy",

            weeklySchedule: [
                {
                    day: "Monday",
                    time: "2:00 PM - 7:00 PM",
                    status: "Busy",
                    mode: "Offline",
                },
                {
                    day: "Thursday",
                    time: "9:00 AM - 12:00 PM",
                    status: "Available",
                    mode: "Hybrid",
                },
            ],
        },

        {
            id: "DOC007",
            name: "Dr. Vikram Singh",
            department: "ENT Care",
            specialization: "ENT Specialist",
            experience: "11+ Years Experience",
            timing: "10:00 AM - 6:00 PM",
            status: "Busy",

            weeklySchedule: [
                {
                    day: "Tuesday",
                    time: "10:00 AM - 6:00 PM",
                    status: "Busy",
                    mode: "Offline",
                },
                {
                    day: "Friday",
                    time: "9:00 AM - 1:00 PM",
                    status: "Available",
                    mode: "Online",
                },
            ],
        },

        {
            id: "DOC008",
            name: "Dr. Meera Joshi",
            department: "Mental Wellness",
            specialization: "Psychiatrist",
            experience: "5+ Years Experience",
            timing: "1:00 PM - 5:00 PM",
            status: "Available",

            weeklySchedule: [
                {
                    day: "Wednesday",
                    time: "1:00 PM - 5:00 PM",
                    status: "Available",
                    mode: "Hybrid",
                },
                {
                    day: "Saturday",
                    time: "3:00 PM - 6:00 PM",
                    status: "Blocked",
                    mode: "Offline",
                },
            ],
        },

        {
            id: "DOC009",
            name: "Dr. Rahul Verma",
            department: "Genaral Medicine",
            specialization: "General Physician",
            experience: "14+ Years Experience",
            timing: "8:00 AM - 12:00 PM",
            status: "Busy",

            weeklySchedule: [
                {
                    day: "Monday",
                    time: "8:00 AM - 12:00 PM",
                    status: "Busy",
                    mode: "Offline",
                },
                {
                    day: "Thursday",
                    time: "1:00 PM - 4:00 PM",
                    status: "Available",
                    mode: "Online",
                },
            ],
        },

        {
            id: "DOC010",
            name: "Dr. Anjali Nair",
            department: "Eye Care",
            specialization: "Opthalmologist",
            experience: "10+ Years Experience",
            timing: "3:00 PM - 8:00 PM",
            status: "Available",

            weeklySchedule: [
                {
                    day: "Tuesday",
                    time: "3:00 PM - 8:00 PM",
                    status: "Available",
                    mode: "Hybrid",
                },
                {
                    day: "Friday",
                    time: "10:00 AM - 1:00 PM",
                    status: "Busy",
                    mode: "Offline",
                },
            ],
        },
    ];

    return (
        <Layout>



            {/* Main Content */}
            <div className="px-9 pb-10">


                {/* Search Bar */}
                <div className="bg-white px-5 py-3 rounded-2xl shadow-md flex items-center gap-3 mb-10">

                    <FaMagnifyingGlass className="text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search doctors, appointments..."
                        className="w-full outline-none"
                    />

                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-6 rounded-3xl shadow-xl">

                        <FaUserDoctor className="text-5xl mb-4" />

                        <h2 className="text-3xl font-bold">
                            120+
                        </h2>

                        <p className="mt-2 text-cyan-100">
                            Active Doctors
                        </p>

                    </div>

                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 rounded-3xl shadow-xl">

                        <FaCalendarCheck className="text-5xl mb-4" />

                       <h2 className="text-5xl font-bold">
                            450+
                        </h2>

                        <p className="mt-2 text-green-100">
                            Appointments
                        </p>

                    </div>

                    <div className="bg-gradient-to-r from-violet-500 to-purple-600 text-white p-6 rounded-3xl shadow-xl">

                        <FaHospital className="text-5xl mb-4" />

                        <h2 className="text-5xl font-bold">
                            35+
                        </h2>

                        <p className="mt-2 text-purple-100">
                            Healthcare Centers
                        </p>

                    </div>

                </div>

                {/* Doctor Availability */}
                <div className="bg-white rounded-3xl shadow-lg p-6">

                    <div className="flex justify-between items-center mb-8">

                        <h2 className="text-2xl font-bold text-slate-800">
                            Doctor Availability
                        </h2>

                        <button className="bg-cyan-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-700 transition">
                            View All
                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {doctors.map((doctor) => (
                            <div
                                key={doctor.id}
                                className="border border-slate-200 rounded-2xl p-5 hover:shadow-xl transition duration-300"
                            >

                                <div className="flex justify-between items-start mb-4">

                                    <div className="flex items-center gap-4">

                                        <div className="bg-cyan-100 p-4 rounded-full">
                                            <FaUserDoctor className="text-2xl text-cyan-600" />
                                        </div>

                                        <div>

                                            <h3 className="text-xl font-bold text-slate-800">
                                                {doctor.name}
                                            </h3>

                                            <p className="text-gray-500">
                                                {doctor.department}
                                            </p>

                                        </div>

                                    </div>

                                    <div
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${doctor.status === "Available"
                                            ? "bg-green-100 text-green-700"
                                            : "bg-red-100 text-red-700"
                                            }`}
                                    >
                                        {doctor.status}
                                    </div>

                                </div>

                                <p className="text-gray-600 mb-2">
                                    {doctor.experience}
                                </p>

                                <p className="text-cyan-600 font-medium mb-5">
                                    {doctor.availability}
                                </p>

                                <button
                                    onClick={() =>
                                        navigate("/doctors-availability", {
                                            state: { doctor },
                                        })
                                    }
                                    className="w-full bg-slate-900 text-white py-4 rounded-2xl hover:bg-cyan-600 transition"
                                >
                                    Check Availability
                                </button>


                            </div>
                        ))}

                    </div>

                </div>

            </div>


        </Layout>
    );
}

export default Dashboard;