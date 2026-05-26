import Layout from "../components/Layout";

function Reports() {

    const reports = [
        {
            title: "Total Doctors",
            value: 48,
            color: "text-cyan-500",
        },
        {
            title: "Today's Appointments",
            value: 124,
            color: "text-green-500",
        },
        {
            title: "Available Doctors",
            value: 18,
            color: "text-blue-500",
        },
        {
            title: "Completed Consultations",
            value: 96,
            color: "text-purple-500",
        },
    ];

    return (

        <Layout>

            <div className="space-y-8">

                {/* Header */}
                <div className="bg-white rounded-[30px] p-8 shadow-md">

                    <h1 className="text-5xl font-bold text-[#1d2942]">

                        Reports & Analytics

                    </h1>

                    <p className="text-gray-500 mt-3 text-lg">

                        Monitor healthcare ecosystem performance and analytics

                    </p>

                </div>

                {/* Report Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {reports.map((report, index) => (

                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition"
                        >

                            <p className="text-gray-500 text-lg">

                                {report.title}

                            </p>

                            <h2
                                className={`text-5xl font-bold mt-5 ${report.color}`}
                            >

                                {report.value}

                            </h2>

                        </div>

                    ))}

                </div>

                {/* Reports Table */}
                <div className="bg-white rounded-[30px] p-8 shadow-md">

                    <div className="flex justify-between items-center mb-8">

                        <h2 className="text-4xl font-bold text-[#1d2942]">

                            Recent Reports

                        </h2>

                        <button className="bg-cyan-500 text-white px-6 py-3 rounded-2xl font-semibold">

                            Export Report

                        </button>

                    </div>

                    <div className="overflow-x-auto">

                        <table className="w-full">

                            <thead>

                                <tr className="border-b border-gray-200">

                                    <th className="text-left py-4 text-slate-700">

                                        Report ID

                                    </th>

                                    <th className="text-left py-4 text-slate-700">

                                        Department

                                    </th>

                                    <th className="text-left py-4 text-slate-700">

                                        Doctor

                                    </th>

                                    <th className="text-left py-4 text-slate-700">

                                        Status

                                    </th>

                                    <th className="text-left py-4 text-slate-700">

                                        Date

                                    </th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr className="border-b border-gray-100">

                                    <td className="py-5">
                                        REP-1001
                                    </td>

                                    <td>
                                        Cardiology
                                    </td>

                                    <td>
                                        Dr. Raj Kumari
                                    </td>

                                    <td>

                                        <span className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-semibold">

                                            Completed

                                        </span>

                                    </td>

                                    <td>
                                        26 May 2026
                                    </td>

                                </tr>

                                <tr className="border-b border-gray-100">

                                    <td className="py-5">
                                        REP-1002
                                    </td>

                                    <td>
                                        Neurology
                                    </td>

                                    <td>
                                        Dr. John Doe
                                    </td>

                                    <td>

                                        <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-xl text-sm font-semibold">

                                            Pending

                                        </span>

                                    </td>

                                    <td>
                                        26 May 2026
                                    </td>

                                </tr>

                                <tr>

                                    <td className="py-5">
                                        REP-1003
                                    </td>

                                    <td>
                                        Emergency
                                    </td>

                                    <td>
                                        Dr. Sarah Smith
                                    </td>

                                    <td>

                                        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-xl text-sm font-semibold">

                                            In Review

                                        </span>

                                    </td>

                                    <td>
                                        26 May 2026
                                    </td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </div>

        </Layout>

    );
}

export default Reports;