import Layout from "../components/Layout";

function Appointments() {

    const appointmentSlots = [
        {
            id: 1,
            time: "10:00 AM",
            patient: "Rahul Sharma",
            type: "General Checkup",
            mode: "Online",
            status: "Booked",
        },
        {
            id: 2,
            time: "11:00 AM",
            patient: "Priya Reddy",
            type: "Dental",
            mode: "Offline",
            status: "Available",
        },
        {
            id: 3,
            time: "12:30 PM",
            patient: "Aman Verma",
            type: "Cardiology",
            mode: "Hybrid",
            status: "Completed",
        },
    ];

    return (
        <Layout>

            <div className="space-y-8">

                {/* Top Header Card */}
                <div className="bg-white rounded-[30px] p-8 shadow-md">

                    <div className="flex justify-between items-center">

                        <div>
                            <h1 className="text-5xl font-bold text-[#1d2942]">
                                Appointment Linking
                            </h1>

                            <p className="text-gray-500 mt-3 text-lg">
                                Manage appointment slots and booking details
                            </p>
                        </div>

                        <div className="bg-cyan-500 text-white px-6 py-4 rounded-2xl font-semibold">
                            Today: 24 Slots
                        </div>

                    </div>

                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    <div className="bg-white rounded-3xl p-6 shadow-md">
                        <p className="text-gray-500 mb-2">
                            Doctor Name
                        </p>

                        <h2 className="text-2xl font-bold text-[#1d2942]">
                            Dr. Raj Kumari
                        </h2>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-md">
                        <p className="text-gray-500 mb-2">
                            Total Slots
                        </p>

                        <h2 className="text-4xl font-bold text-cyan-500">
                            24
                        </h2>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-md">
                        <p className="text-gray-500 mb-2">
                            Available Slots
                        </p>

                        <h2 className="text-4xl font-bold text-green-500">
                            10
                        </h2>
                    </div>

                    <div className="bg-white rounded-3xl p-6 shadow-md">
                        <p className="text-gray-500 mb-2">
                            Booked Slots
                        </p>

                        <h2 className="text-4xl font-bold text-red-500">
                            14
                        </h2>
                    </div>

                </div>

                {/* Appointment Linking Form */}

                <div className="bg-white rounded-[30px] p-8 shadow-md">

                    <h2 className="text-4xl font-bold text-[#1d2942] mb-8">

                        Link Appointment

                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Doctor */}
                        <div>

                            <label className="block mb-2 font-semibold text-slate-700">

                                Select Doctor

                            </label>

                            <input
                                type="text"
                                placeholder="Enter doctor name"
                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                            />

                        </div>

                        {/* Time Slot */}
                        <div>

                            <label className="block mb-2 font-semibold text-slate-700">

                                Select Time Slot

                            </label>

                            <input
                                type="time"
                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                            />

                        </div>

                        {/* Patient */}
                        <div>

                            <label className="block mb-2 font-semibold text-slate-700">

                                Patient Search

                            </label>

                            <input
                                type="text"
                                placeholder="Enter patient name"
                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                            />

                        </div>

                        {/* Consultation Mode */}
                        <div>

                            <label className="block mb-2 font-semibold text-slate-700">

                                Consultation Mode

                            </label>

                            <select
                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                            >

                                <option>
                                    Online
                                </option>

                                <option>
                                    Offline
                                </option>

                                <option>
                                    Hybrid
                                </option>

                            </select>

                        </div>
                        {/* Appointment Type */}
                        <div>

                            <label className="block mb-2 font-semibold text-slate-700">

                                Appointment Type

                            </label>

                            <select
                                className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                            >

                                <option>
                                    General Checkup
                                </option>

                                <option>
                                    Consultation
                                </option>

                                <option>
                                    Emergency
                                </option>

                            </select>

                        </div>

                    </div>
                    {/* Notes */}
                    <div className="md:col-span-2">

                        <label className="block mb-2 font-semibold text-slate-700">

                            Notes

                        </label>

                        <textarea
                            rows="4"
                            placeholder="Add appointment notes..."
                            className="w-full border border-slate-300 rounded-2xl p-4 outline-none focus:border-cyan-500"
                        />

                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4 mt-8">

                        <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-2xl font-semibold transition">

                            Link Appointment

                        </button>

                        <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-semibold transition">

                            Reschedule

                        </button>

                        <button className="bg-slate-400 hover:bg-slate-500 text-white px-8 py-4 rounded-2xl font-semibold transition">

                            Cancel

                        </button>

                    </div>

                </div>
                {/* Appointment Slots */}
                <div className="bg-white rounded-[30px] p-8 shadow-md">

                    <div className="flex justify-between items-center mb-8">

                        <h2 className="text-4xl font-bold text-[#1d2942]">
                            Appointment Slots
                        </h2>

                        <button className="bg-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold">
                            Add Appointment
                        </button>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                        {appointmentSlots.map((slot) => (

                            <div
                                key={slot.id}
                                className="border border-gray-200 rounded-3xl p-6 hover:shadow-lg transition"
                            >

                                <div className="flex justify-between items-center mb-5">

                                    <h3 className="text-2xl font-bold text-[#1d2942]">
                                        {slot.time}
                                    </h3>

                                    <span
                                        className={`px-4 py-2 rounded-xl text-sm font-semibold ${slot.status === "Booked"
                                            ? "bg-red-100 text-red-600"
                                            : slot.status === "Available"
                                                ? "bg-green-100 text-green-600"
                                                : "bg-blue-100 text-blue-600"
                                            }`}
                                    >
                                        {slot.status}
                                    </span>

                                </div>

                                <div className="space-y-3">

                                    <p className="text-lg text-gray-600">
                                        <span className="font-semibold text-[#1d2942]">
                                            Patient:
                                        </span>{" "}
                                        {slot.patient}
                                    </p>

                                    <p className="text-lg text-gray-600">
                                        <span className="font-semibold text-[#1d2942]">
                                            Type:
                                        </span>{" "}
                                        {slot.type}
                                    </p>

                                    <p className="text-lg text-gray-600">
                                        <span className="font-semibold text-[#1d2942]">
                                            Mode:
                                        </span>{" "}
                                        {slot.mode}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </Layout>
    );
}

export default Appointments;