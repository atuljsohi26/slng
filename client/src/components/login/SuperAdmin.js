import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { loginUserDetails } from "../../redux/adminUserSlice";
import { useDispatch } from "react-redux";

const SuperAdmin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (e) => {
    e.preventDefault();
    console.log("username **", username);
    console.log("password **", password);

    if (username && password) {
      const apiPayload = { username: username, password: password };
      const fetchLoginData = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/admin/login`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(apiPayload),
        }
      );
      const loginResult = await fetchLoginData.json();
      console.log("loginResult **", loginResult);
      if (loginResult.status) {
        navigate("dashboard");
        dispatch(loginUserDetails(loginResult.response));
        toast.success(loginResult.message);
      } else {
        toast.error(loginResult.message);
      }
    } else {
      //console.log("Please enter login credentials");
      toast.error("Please enter login credentials");
    }
  };
  return (
    <div className="bg-[#04bd7d] h-screen w-screen flex items-center justify-center">
      <div className="grid grid-cols-2">
        <div className="h-96 w-96 bg-white flex items-center mx-2 justify-center duration-1000 transition-all rounded-3xl shadow-2xl">
          <h1 className="text-[3rem]  font-bold text-center">
            Admin
            <br />
            Login
          </h1>
        </div>
        <form
          onSubmit={login}
          className="h-96 w-96 bg-[#2c2f35] flex flex-col items-center justify-center duration-1000 transition-all space-y-6 rounded-3xl shadow-2xl"
        >
          <h1 className="text-white text-3xl font-semibold">Admin</h1>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Username</p>
            <div className="bg-[#515966] rounded-lg w-[14rem] flex  items-center">
              <input
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                type="text"
                required
                className="bg-[#515966] text-white px-2 outline-none py-2 rounded-lg placeholder:text-sm"
                placeholder="Username"
              />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-[#515966] font-bold text-sm">Password</p>
            <div className="bg-[#515966] rounded-lg px-2 flex  items-center">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
                type={showPassword ? "text" : "password"}
                className=" bg-[#515966] text-white rounded-lg outline-none py-2  placeholder:text-sm"
                placeholder="Password"
              />
              {showPassword ? (
                <FaEye
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                />
              ) : (
                <FaEyeSlash
                  onClick={() => setShowPassword(!showPassword)}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-32 hover:scale-105 transition-all duration-150 rounded-lg flex items-center justify-center text-white text-base py-1 bg-[#04bd7d]"
          >
            Login
          </button>
          {/* {loading && (
            <Spinner
              message="Logging In"
              height={30}
              width={150}
              color="#ffffff"
              messageColor="#fff"
            />
          )} */}
          {/* {(error.usernameError || error.passwordError) && (
            <p className="text-red-500">
              {error.usernameError || error.passwordError}
            </p>
          )} */}
        </form>
      </div>
    </div>
  );
};

export default SuperAdmin;
