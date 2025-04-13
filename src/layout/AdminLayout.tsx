import AdminNavbar from "@/components/AdminNavbar";
import AdminSidebar from "@/components/AdminSideBar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <section
      className={`h-dvh grid relative md:[grid-template-columns:14rem_1fr] md:[grid-template-rows:auto_1fr]`}
    >
      <AdminNavbar />
      <AdminSidebar />
      <main>
        <Outlet />
      </main>
    </section>
  );
};

export default AdminLayout;
