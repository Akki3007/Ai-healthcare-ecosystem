function Header() {

    return (

        <div className="fixed top-0 left-[320px] right-0 h-[100px] bg-white shadow-sm px-10 flex items-center justify-between z-40">

            {/* Left */}
            <div className="flex items-center gap-5">

                <img
                    src="https://cdn-icons-png.flaticon.com/512/2967/2967350.png"
                    alt="logo"
                    className="w-16 h-16 rounded-2xl"
                />

                <div>

                    <h1 className="text-[28px] font-bold text-[#1E293B] leading-tight">

                        AI Healthcare Ecosystem

                    </h1>

                    <p className="text-gray-500 text-lg">

                        Doctor Availability Dashboard

                    </p>

                </div>

            </div>

            {/* Right */}
            <div className="flex items-center gap-6">

                <div className="w-14 h-14 rounded-2xl bg-gray-100 flex items-center justify-center text-3xl">

                    🔔

                </div>

                <img
                    src="https://i.pravatar.cc/100"
                    alt="profile"
                    className="w-16 h-16 rounded-full border-4 border-cyan-400"
                />

            </div>

        </div>

    );
}

export default Header;