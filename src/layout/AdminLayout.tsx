import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div
      className={` grid relative md:[grid-template-columns:14rem_1fr] md:relative md:[grid-template-rows:auto_1fr]`}
    >
      <AdminSidebar />
      <AdminNavbar />
      <main className="overflow-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
