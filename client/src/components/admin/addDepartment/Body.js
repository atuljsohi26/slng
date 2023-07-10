import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Spinner from "../../../utils/Spinner";
import { useNavigate } from "react-router-dom";

const Body = () => {
  const navigate = useNavigate();
  const loginToken = useSelector((state) => state.adminUser);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const submitStudentData = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/admin/addDepartment`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: loginToken.token,
        },
        body: JSON.stringify(value),
      }
    );
    const studentResult = await submitStudentData.json();
    if (studentResult.success) {
      toast.success(studentResult.message);
      setLoading(false);
      setValue({
        name: "",
      });
      navigate("/admin/allstudent");
    } else {
      setLoading(false);
      toast.error(studentResult.message);
    }
  };

  return (
    <div className="flex-[0.8] mt-2">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <FaPlusCircle />
          <h1>Add Department</h1>
        </div>
        {loading && (
          <Spinner
            message="Loading"
            height={50}
            width={150}
            color="#111111"
            messageColor="blue"
          />
        )}
        <div className=" mr-10 bg-white flex flex-col rounded-xl ">
          <form
            className={`flex flex-col mb-6 scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[40rem]`}
            onSubmit={handleSubmit}
          >
            <div className="flex py-10 ml-10 space-x-28">
              <div className="flex flex-col space-y-10">
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Department Name :
                  </h1>

                  <input
                    placeholder="Department Name"
                    required
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    value={value.name}
                    onChange={(e) =>
                      setValue({ ...value, name: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="self-center space-x-6">
              <button
                className="bg-red-500 w-24 h-8 rounded-md text-white hover:scale-105 hover:bg-red-700 transition-all duration-200 "
                type="submit"
              >
                Submit
              </button>
              <button
                onClick={() => {
                  setValue({
                    name: "",
                  });
                }}
                className="bg-blue-500 w-24 h-8 rounded-md text-white hover:scale-105 hover:bg-blue-700 transition-all duration-200"
                type="button"
              >
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
