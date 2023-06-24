import React from "react";
import AdminSidebar from "./AdminSidebar";
import AdminBody from "./AdminBody";
import AdminHeader from "./AdminHeader";

const AdminHome = () => {
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] h-5/6 w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <AdminHeader />
        <div className="flex flex-[0.95]">
          <AdminSidebar />
          <AdminBody />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
