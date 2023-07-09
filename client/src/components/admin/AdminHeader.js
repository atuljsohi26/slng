import React from "react";
import { MdLogout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutUserDetais } from "../../redux/adminUserSlice";

const AdminHeader = () => {
  const userData = useSelector((state) => state.adminUser);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logoutUserDetais());
    navigate("/admin");
  };
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
        <img src={userData.avatar} alt="avatar" className="w-20 rounded-full" />
        <h1>{userData.name}</h1>
        <MdLogout
          onClick={logout}
          className="cursor-pointer hover:scale-125 transition-all "
        />
      </div>
    </div>
  );
};

export default AdminHeader;
