import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    FaUserMd,
    FaCalendarAlt,
    FaClock,
    FaVideo,
    FaHospital,
    FaLaptopMedical,
} from "react-icons/fa";

function DoctorsAvailabilty() {

    const location = useLocation();
    const navigate = useNavigate();

    const doctor = location.state?.doctor;
    const doctors = location.state?.doctors || [];

    const [formData, setFormData] = useState({
        availableDate: "",
        startTime: "",
        endTime: "",
        consultationType: "Online",
        maximumPatients: "",
        slotDuration: "30",
        notes: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSave = () => {
        if (
            !formData.availableDate ||
            !formData.startTime ||
            !formData.endTime ||
            !formData.maximumPatients
        ) {
            setMessage("Please fill all required fields");
            return;
        }

        setMessage("Availability Saved Successfully");
    };
    if (!doctor) {
        return (
            <div className="min-h-screen bg-slate-100 p-10">
                <h1 className="text-4xl font-bold text-slate-800 mb-8">
                    All Doctors Availability
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {doctors.map((doc) => (
                        <div
                            key={doc.id}
                            className="bg-white p-6 rounded-3xl shadow-md border"
                        >
                            <h2 className="text-2xl font-bold text-slate-800">
                                {doc.name}
                            </h2>

                            <p className="text-slate-500 mt-1">
                                {doc.department}
                            </p>

                            <p className="mt-3 font-semibold">
                                Doctor ID: {doc.id}
                            </p>

                            <p className="mt-2">
                                Status:
                                <span className="text-cyan-600 font-bold ml-2">
                                    {doc.status}
                                </span>
                            </p>

                            <button
                                onClick={() =>
                                    navigate("/doctor-availability", {
                                        state: { doctor: doc },
                                    })
                                }
                                className="mt-5 w-full bg-slate-900 text-white py-3 rounded-2xl hover:bg-cyan-600 transition"
                            >
                                View Full Availability
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-100 p-8">

            {/* Header */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
                <div className="flex items-center gap-5">

                    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-5 rounded-2xl">
                        <FaUserMd className="text-white text-4xl" />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold text-slate-800">
                            Doctor Availability
                        </h1>

                        <p className="text-gray-500 mt-2">
                            Manage doctor schedules and consultation slots
                        </p>
                    </div>

                </div>

                {/* Doctor Info */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-8">

                    <div className="bg-slate-50 p-5 rounded-2xl">
                        <p className="text-gray-500">Doctor Name</p>
                        <h3 className="font-bold text-lg mt-1">
                            {doctor.name}
                        </h3>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl">
                        <p className="text-gray-500">Doctor ID</p>
                        <h3 className="font-bold text-lg mt-1">
                            Doctor ID: {doctor.id}
                        </h3>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl">
                        <p className="text-gray-500">Department</p>
                        <h3 className="font-bold text-lg mt-1">
                            {doctor.department}
                        </h3>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl">
                        <p className="text-gray-500">Specialization</p>
                        <h3 className="font-bold text-lg mt-1">
                            {doctor.specialization}
                        </h3>
                    </div>

                    <div className="bg-slate-50 p-5 rounded-2xl">
                        <p className="text-gray-500">Status</p>

                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold inline-block mt-2">
                            {doctor.status}
                        </span>
                    </div>

                </div>
            </div>

            {/* Weekly Calendar */}
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">

                <div className="flex items-center gap-3 mb-8">
                    <FaCalendarAlt className="text-cyan-600 text-2xl" />

                    <h2 className="text-3xl font-bold text-slate-800">
                        Weekly Availability
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {doctor.weeklySchedule.map((schedule, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition"
                        >
                            <div className="flex justify-between items-center">

                                <h3 className="text-xl font-bold text-slate-800">
                                    {schedule.day}
                                </h3>

                                <span
                                    className={`px-4 py-2 rounded-full text-sm font-semibold ${schedule.status === "Available"
                                        ? "bg-green-100 text-green-700"
                                        : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {schedule.status}
                                </span>

                            </div>

                            <div className="mt-5 space-y-3">

                                <div className="flex items-center gap-3">
                                    <FaClock className="text-cyan-600" />

                                    <p className="text-gray-700 font-medium">
                                        {schedule.time}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3">

                                    {schedule.mode === "Online" && (
                                        <FaVideo className="text-blue-600" />
                                    )}

                                    {schedule.mode === "Offline" && (
                                        <FaHospital className="text-red-600" />
                                    )}

                                    {schedule.mode === "Hybrid" && (
                                        <FaLaptopMedical className="text-purple-600" />
                                    )}

                                    <p className="text-gray-700 font-medium">
                                        {schedule.mode}
                                    </p>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>

            {/* Availability Form */}
            <div className="bg-white rounded-3xl shadow-lg p-8">

                <h2 className="text-3xl font-bold text-slate-800 mb-8">
                    Create Availability
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Available Date
                        </label>

                        <input
                            type="date"
                            name="availableDate"
                            value={formData.availableDate}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Consultation Type
                        </label>

                        <select
                            name="consultationType"
                            value={formData.consultationType}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                        >
                            <option>Online</option>
                            <option>Offline</option>
                            <option>Hybrid</option>
                        </select>
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Start Time
                        </label>

                        <input
                            type="time"
                            name="startTime"
                            value={formData.startTime}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            End Time
                        </label>

                        <input
                            type="time"
                            name="endTime"
                            value={formData.endTime}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Maximum Patients
                        </label>

                        <input
                            type="number"
                            name="maximumPatients"
                            value={formData.maximumPatients}
                            onChange={handleChange}
                            placeholder="Enter number"
                            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-slate-700">
                            Slot Duration
                        </label>

                        <select
                            name="slotDuration"
                            value={formData.slotDuration}
                            onChange={handleChange}
                            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                        >
                            <option value="15">15 Minutes</option>
                            <option value="30">30 Minutes</option>
                            <option value="45">45 Minutes</option>
                            <option value="60">60 Minutes</option>
                        </select>
                    </div>

                </div>

                {/* Notes */}
                <div className="mt-6">

                    <label className="block mb-2 font-semibold text-slate-700">
                        Notes
                    </label>

                    <textarea
                        rows="5"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Add consultation notes..."
                        className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                    />

                </div>

                {/* Message */}
                {message && (
                    <div className="mt-6 bg-green-100 text-green-700 p-4 rounded-2xl font-medium">
                        {message}
                    </div>
                )}

                {/* Buttons */}
                <div className="flex flex-wrap gap-4 mt-8">

                    <button
                        onClick={handleSave}
                        className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
                    >
                        Save Availability
                    </button>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl font-semibold transition">
                        Block Time
                    </button>

                    <button className="bg-slate-400 hover:bg-slate-500 text-white px-8 py-4 rounded-2xl font-semibold transition">
                        Cancel
                    </button>

                </div>

            </div>
        </div>
    );
}

export default DoctorsAvailabilty;