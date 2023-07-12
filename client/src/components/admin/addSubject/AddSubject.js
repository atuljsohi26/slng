import React from "react";
import AdminSidebar from "../AdminSidebar";
import Body from "./Body";
import AdminHeader from "../AdminHeader";

const AddSubject = () => {
  return (
    <div className="bg-[#d6d9e0] h-screen flex items-center justify-center">
      <div className="flex flex-col  bg-[#f4f6fa] w-[95%] rounded-2xl shadow-2xl space-y-6 overflow-y-hidden">
        <AdminHeader />
        <div className="flex flex-[0.95]">
          <AdminSidebar />
          <Body />
        </div>
      </div>
    </div>
  );
};

export default AddSubject;
