import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUserTie,
  FaPlusCircle,
  // FaTrashAlt,
  // FaTools,
  FaUserAstronaut,
  FaEye,
  FaBook,
  // FaBook,
} from "react-icons/fa";

const AdminSidebar = () => {
  return (
    <div className="flex-[0.2]">
      <div className="space-y-8 overflow-y-scroll scrollbar-thin scrollbar-track-white scrollbar-thumb-gray-300 h-[44rem]">
        <div className="">
          <NavLink
            to="/admin/dashboard"
            className="flex items-center px-5 gap-3 text-blue-600 transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaHome className="" />
            <h1 className="font-normal">Dashboard</h1>
          </NavLink>
          <NavLink
            to="/admin/profile"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaUserTie className="" />
            <h1 className="font-normal">Profile</h1>
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/admin/allstudent"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaUserAstronaut className="" />
            <h1 className="font-normal">Our Students</h1>
          </NavLink>

          <NavLink
            to="/admin/addstudent"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaPlusCircle className="" />
            <h1 className="font-normal">Add Students</h1>
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/admin/getdepartment"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaEye className="" />
            <h1 className="font-normal">Department</h1>
          </NavLink>
          <NavLink
            to="/admin/adddepartment"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaPlusCircle className="" />
            <h1 className="font-normal">Add Department</h1>
          </NavLink>
        </div>
        <div className="">
          <NavLink
            to="/admin/allsubject"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaBook className="" />
            <h1 className="font-normal">Subjects</h1>
          </NavLink>

          <NavLink
            to="/admin/addsubject"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaPlusCircle className="" />
            <h1 className="font-normal">Add Subject</h1>
          </NavLink>
        </div>
        {/* <div className="">
          <NavLink
            to="/admin/createNotice"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaPlusCircle className="" />
            <h1 className="font-normal">Create Notice</h1>
          </NavLink>
        </div> */}
        {/* <div className="">
          <NavLink
            to="/admin/addadmin"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaPlusCircle className="" />
            <h1 className="font-normal">Add Admin</h1>
          </NavLink>
          <NavLink
            to="/admin/deleteadmin"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaTrashAlt className="" />
            <h1 className="font-normal">Delete Admin</h1>
          </NavLink>
        </div> */}

        {/* <div className="">
          <NavLink
            to="/admin/allfaculty"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaTools className="" />
            <h1 className="font-normal">Our Faculty</h1>
          </NavLink>

          <NavLink
            to="/admin/addfaculty"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaPlusCircle className="" />
            <h1 className="font-normal">Add Faculty</h1>
          </NavLink>
          <NavLink
            to="/admin/deletefaculty"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaTrashAlt className="" />
            <h1 className="font-normal">Delete Faculty</h1>
          </NavLink>
        </div> */}
        {/* <div className="">
          <NavLink
            to="/admin/allsubject"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaBook className="" />
            <h1 className="font-normal">Subjects</h1>
          </NavLink>

          <NavLink
            to="/admin/addsubject"
            className="flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize hover:bg-gray-200 py-2 my-1"
          >
            <FaPlusCircle className="" />
            <h1 className="font-normal">Add Subject</h1>
          </NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default AdminSidebar;
