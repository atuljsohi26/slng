import React from "react";
import { FaUserLarge } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { useSelector } from "react-redux";

const AdminHeader = () => {
  const userData = useSelector((state) => state.adminUser);
  return (
    <div className="flex-[0.05] flex justify-between items-center mx-5 my-2">
      <div className="flex items-center ">
        <img
          src="https://icon-library.com/images/cms-icon/cms-icon-11.jpg"
          alt=""
          className="h-7"
        />
        <h1 className="font-bold text-blue-600 text-sm">CMS</h1>
      </div>
      <h1 className="font-semibold text-black">Welcome</h1>
      <div className="flex items-center space-x-3">
        <FaUserLarge
          src=""
          alt=""
          sx={{ width: 24, height: 24 }}
          className="border-blue-600 border-2"
        />
        <h1>{userData.name}</h1>
        <MdLogout
          //onClick={logout}
          className="cursor-pointer hover:scale-125 transition-all "
        />
      </div>
    </div>
  );
};

export default AdminHeader;
