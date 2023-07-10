import React, { useEffect, useState } from "react";
import { FaEdit, FaEye, FaTrash, FaUserAstronaut } from "react-icons/fa";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import Spinner from "./../../../utils/Spinner";
const Body = () => {
  const getLoginToken = useSelector((state) => state.adminUser);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllStudents();
  }, []);
  const getAllStudents = async () => {
    setLoading(true);
    const fetchStudent = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/admin/getAllStudent`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: getLoginToken.token,
        },
      }
    );
    const fetchStudentResult = await fetchStudent.json();
    if (fetchStudentResult.status) {
      setLoading(false);
      setStudents(fetchStudentResult.response);
      toast.success(fetchStudentResult.message);
    } else {
      setLoading(false);
      toast.error(fetchStudentResult.message);
    }
  };
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <FaUserAstronaut />
          <h1>All Students</h1>
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
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1">
                Username
              </label>
              <input
                className="h-9 px-2 border border-gray-300 rounded-md"
                type="text"
                placeholder="Username"
              />
            </div>
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
                    Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Username
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Section
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Batch
                  </th>
                  <th scope="col" className="px-6 py-4"></th>
                </tr>
              </thead>
              <tbody>
                {students.map((student, index) => (
                  <tr key={index} className="border-b dark:border-neutral-500">
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {++index}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {student.name}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {student.email}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {student.username}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {student.section}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {student.batch}
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
