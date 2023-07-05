import React from "react";
import Data from "./Data";
import { FaUserTie, FaRegEdit } from "react-icons/fa";
import { useSelector } from "react-redux";

const Body = () => {
  const userProfileData = useSelector((state) => state.adminUser);
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
          <div className="flex py-10 ml-10 space-x-40">
            <div className="flex flex-col space-y-10">
              <Data label="Name" value={userProfileData.name} />
              <Data label="Email" value={userProfileData.email} />
              <Data label="Username" value={userProfileData.username} />
              <Data label="Department" value={userProfileData.department} />
            </div>
            <div className="flex flex-col space-y-10 ">
              <Data label="DOB" value={userProfileData.dob} />
              <Data label="Joining Year" value={userProfileData.joiningYear} />
              <Data
                label="Contact Number"
                value={userProfileData.contactNumber}
              />
              <Data
                label="Avatar"
                value={
                  <img
                    src={userProfileData.avatar}
                    alt=""
                    className="w-20 h-20"
                  />
                }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
