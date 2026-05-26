import { useState } from "react";

import Layout from "../components/Layout";

function ShiftManagement() {

    const [formData, setFormData] = useState({
        doctor: "",
        shiftType: "",
        startTime: "",
        endTime: "",
        department: "",
        notes: "",
    });

    const [message, setMessage] = useState("");

    const shifts = [
        {
            doctor: "Dr. John Doe",
            timing: "09:00 AM - 05:00 PM",
            department: "Cardiology",
            ward: "Ward A",
            mode: "Online",
            status: "Active",
        },
        {
            doctor: "Dr. Sarah Smith",
            timing: "06:00 PM - 11:00 PM",
            department: "Neurology",
            ward: "Ward B",
            mode: "Offline",
            status: "Pending",
        },
        {
            doctor: "Dr. Robert",
            timing: "10:00 PM - 06:00 AM",
            department: "Emergency",
            ward: "Ward C",
            mode: "Hybrid",
            status: "Completed",
        },
    ];

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    };

    const handleAssignShift = () => {

        if (
            !formData.doctor ||
            !formData.shiftType ||
            !formData.startTime ||
            !formData.endTime ||
            !formData.department
        ) {

            setMessage(
                "Please fill all required fields"
            );

            return;

        }

        setMessage(
            "Shift Assigned Successfully"
        );

    };

    return (

        <Layout>

            <div className="px-9 pb-10 bg-[#eef2f7] min-h-screen space-y-8">

                {/* Header */}
                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h1 className="text-4xl font-bold text-slate-800">

                        Shift Management

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Manage doctor shifts efficiently across departments

                    </p>

                </div>

                {/* Shift List */}
                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-3xl font-bold text-slate-800 mb-8">

                        Shift Timeline

                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {shifts.map((shift, index) => (

                            <div
                                key={index}
                                className="border border-slate-200 rounded-3xl p-6 hover:shadow-lg transition"
                            >

                                <div className="flex justify-between items-center">

                                    <h3 className="text-xl font-bold text-slate-800">

                                        {shift.doctor}

                                    </h3>

                                    <span
                                        className={`px-4 py-2 rounded-full text-sm font-semibold ${shift.status === "Active"
                                            ? "bg-green-100 text-green-700"
                                            : shift.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-blue-100 text-blue-700"
                                            }`}
                                    >

                                        {shift.status}

                                    </span>

                                </div>

                                <div className="space-y-3 mt-5">

                                    <p>
                                        <span className="font-semibold">
                                            Timing:
                                        </span>{" "}
                                        {shift.timing}
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            Department:
                                        </span>{" "}
                                        {shift.department}
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            Ward:
                                        </span>{" "}
                                        {shift.ward}
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            Mode:
                                        </span>{" "}
                                        {shift.mode}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

                {/* Shift Form */}
                <div className="bg-white rounded-3xl shadow-lg p-8">

                    <h2 className="text-3xl font-bold text-slate-800 mb-8">

                        Assign Shift

                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Doctor */}
                        <div>

                            <label className="block mb-2 font-semibold text-slate-700">

                                Doctor Selection

                            </label>

                            <input
                                type="text"
                                name="doctor"
                                value={formData.doctor}
                                onChange={handleChange}
                                placeholder="Enter doctor name"
                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                            />

                        </div>

                        {/* Shift Type */}
                        <div>

                            <label className="block mb-2 font-semibold text-slate-700">

                                Shift Type

                            </label>

                            <select
                                name="shiftType"
                                value={formData.shiftType}
                                onChange={handleChange}
                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                            >

                                <option value="">
                                    Select Shift
                                </option>

                                <option>
                                    Morning
                                </option>

                                <option>
                                    Evening
                                </option>

                                <option>
                                    Night
                                </option>

                                <option>
                                    Emergency
                                </option>

                            </select>

                        </div>

                        {/* Start Time */}
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

                        {/* End Time */}
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

                        {/* Department */}
                        <div>

                            <label className="block mb-2 font-semibold text-slate-700">

                                Department

                            </label>

                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="Enter department"
                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                            />

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
                            placeholder="Add shift notes..."
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
                            onClick={handleAssignShift}
                            className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold transition"
                        >

                            Assign Shift

                        </button>

                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold transition"
                        >

                            Save Draft

                        </button>

                        <button
                            className="bg-slate-400 hover:bg-slate-500 text-white px-8 py-4 rounded-2xl font-semibold transition"
                        >

                            Cancel

                        </button>

                    </div>

                </div>

            </div>

        </Layout>

    );
}

export default ShiftManagement;