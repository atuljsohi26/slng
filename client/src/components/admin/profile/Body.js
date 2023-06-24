import React from "react";
import Data from "./Data";
import { FaUserTie, FaRegEdit } from "react-icons/fa";

const Body = () => {
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex  items-center justify-between mr-8">
          <div className="flex space-x-2 text-gray-400">
            <FaUserTie />
            <h1>Profile</h1>
          </div>
          <div
            //onClick={() => navigate("/admin/update")}
            className="flex space-x-2 cursor-pointer"
          >
            <FaRegEdit />
            <h1 className="font-bold">Update</h1>
          </div>
        </div>
        <div className="w-[98%] bg-white relative rounded-xl ">
          <div className="absolute left-[50%] top-[-25%]">
            <img
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
              alt=""
              className="w-20 h-20"
            />
          </div>
          <div className="flex py-10 ml-10 space-x-40">
            <div className="flex flex-col space-y-10">
              <Data label="Name" value="Atul Joshi" />
              <Data label="Email" value="joshiatul26@gmail.com" />
              <Data label="Username" value="username" />
              <Data label="Department" value="Super Admin" />
            </div>
            <div className="flex flex-col space-y-10 ">
              <Data label="DOB" value="26-013-1991" />
              <Data label="Joining Year" value="2023" />
              <Data label="Contact Number" value="8823901748" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
