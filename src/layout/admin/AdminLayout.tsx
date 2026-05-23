import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import WebVitalMonitor from "../WebVitalMonitor";

const AdminLayout = () => {
  return (
    <div id="admin-layout">
      <div className="mr-64">
        <Header />
        <main className="px-6 py-6 min-h-[calc(100vh-150px)]">
          <Outlet />
        </main>
        <Footer />
      </div>
      <Sidebar />
      <WebVitalMonitor />
    </div>
  );
};
export default AdminLayout;
