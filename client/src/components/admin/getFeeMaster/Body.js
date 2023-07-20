import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaServer, FaTrash } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Spinner from "../../../utils/Spinner";
const Body = () => {
  const getLoginToken = useSelector((state) => state.adminUser);
  const [feeMaster, setFeeMaster] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllFeeMaster();
  }, []);
  const getAllFeeMaster = async () => {
    setLoading(true);
    const fetchFeeMaster = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/admin/getFeeMasterList`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: getLoginToken.token,
        },
      }
    );
    const fetchFeeMasterResult = await fetchFeeMaster.json();
    if (fetchFeeMasterResult.status) {
      setLoading(false);
      setFeeMaster(fetchFeeMasterResult.response);
      toast.success(fetchFeeMasterResult.message);
    } else {
      setLoading(false);
      toast.error(fetchFeeMasterResult.message);
    }
  };
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <FaServer />
          <h1>Fee Master</h1>
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
        <div className=" mr-10 bg-white grid grid-cols-4 rounded-xl pt-6 pl-6 h-[29.5rem]">
          <form className="flex flex-row items-center">
            <div className="flex flex-col ml-4">
              <label htmlFor="department" className="mb-1">
                Department
              </label>
              <select
                required
                className="h-9 px-2 border border-gray-300 rounded-md"
                // value={value.department}
                // onChange={(e) => setValue({ ...value, department: e.target.value })}
              >
                <option value="">None</option>
                {/* {departments.map((dp, idx) => (
        <option key={idx} value={dp.department}>
          {dp.department}
        </option>
      ))} */}
                <option key="d1" value="department 1">
                  Department 1
                </option>
                <option key="d2" value="department 2">
                  Department 2
                </option>
                <option key="d3" value="department 3">
                  Department 3
                </option>
                <option key="d4" value="department 4">
                  Department 4
                </option>
              </select>
            </div>
            <div className="flex flex-col ml-4">
              <label htmlFor="year" className="mb-1">
                Year
              </label>
              <select
                required
                className="h-9 px-2 border border-gray-300 rounded-md"
                // value={value.year}
                // onChange={(e) => setValue({ ...value, year: e.target.value })}
              >
                <option value="">None</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <button
              className="bg-red-500 h-9 px-4 rounded-md text-white hover:scale-105 hover:bg-red-700 transition-all duration-200 ml-4 mt-6"
              type="submit"
            >
              Search
            </button>
          </form>

          <div className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-black rounded-md col-span-4">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    #
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Year
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Course Fee
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Form Fee
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Uniform Fee
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Caution Money
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {feeMaster.map((feeMaster, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {++index}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {feeMaster.year}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {feeMaster.department}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {feeMaster.course_fee}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {feeMaster.form_fee}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {feeMaster.uniform_fee}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {feeMaster.caution_money}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <div className="flex flex-row">
                        <div className="mr-3 cursor-pointer">
                          <FaEye />
                        </div>
                        <div className="mr-3 cursor-pointer">
                          <FaEdit />
                        </div>
                        <div className="mr-3 cursor-pointer">
                          <FaTrash />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
