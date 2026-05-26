import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout({ children }) {
    return (
        <div className="bg-[#eef2f7]">

            {/* Sidebar */}
            <Sidebar />

            {/* Header */}
            <Header />

            {/* Main Content */}
            <div className="ml-[320px] pt-[130px] h-screen overflow-y-auto">
                {children}
            </div>

        </div>
    );
}

export default Layout;