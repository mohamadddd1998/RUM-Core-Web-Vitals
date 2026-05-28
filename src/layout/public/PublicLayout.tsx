import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import WebVitalMonitor from "@/shared/components/web-vital-monitor";

const PublicLayout = () => {
  return (
    <>
      <WebVitalMonitor />
      <Header />
      <main className="space-y-6 mb-6 px-6">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default PublicLayout;
