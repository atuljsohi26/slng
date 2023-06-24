import React from "react";
import { FaUserAstronaut } from "react-icons/fa";
const Body = () => {
  return (
    <div className="flex-[0.8] mt-3">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <FaUserAstronaut />
          <h1>All Students</h1>
        </div>
        <div className=" mr-10 bg-white grid grid-cols-4 rounded-xl pt-6 pl-6 h-[29.5rem]">
          <form
            className="flex flex-col space-y-2 col-span-1"
            //onSubmit={handleSubmit}
          >
            <label htmlFor="department">Department</label>
            <select
              required
              displayEmpty
              sx={{ height: 36 }}
              inputProps={{ "aria-label": "Without label" }}
              //value={value.department}
              // onChange={(e) =>
              //   setValue({ ...value, department: e.target.value })
              // }
            >
              <option value="">None</option>
              {/* {departments.map((dp, idx) => (
                      <option key={idx} value={dp.department}>
                        {dp.department}
                      </option>
                    ))} */}
              <option key="d1" value="department 1">
                Department 1/
              </option>
              <option key="d2" value="department 2">
                Department 2/
              </option>
              <option key="d3" value="department 3">
                Department 3/
              </option>
              <option key="d4" value="department 4">
                Department 4/
              </option>
            </select>
            <label htmlFor="year">Year</label>
            <select
              required
              displayEmpty
              sx={{ height: 36, width: 224 }}
              inputProps={{ "aria-label": "Without label" }}
              //value={value.year}
              //onChange={(e) => setValue({ ...value, year: e.target.value })}
            >
              <option value="">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button
              className="bg-red-500 h-8 rounded-md text-white hover:scale-105 hover:bg-red-700 transition-all duration-200  w-56"
              type="submit"
            >
              Search
            </button>
          </form>
          <div className="col-span-3 mr-6">
            {/* <div className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Loading"
                  height={50}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {(error.noStudentError || error.backendError) && (
                <p className="text-red-500 text-2xl font-bold">
                  {error.noStudentError || error.backendError}
                </p>
              )}
            </div> */}
            {
              // search &&
              //   !loading &&
              //   Object.keys(error).length === 0 &&
              //   students.length !== 0 && (
              <div className="flex flex-col overflow-y-auto scrollbar-thin scrollbar-track-white scrollbar-thumb-black h-[25rem]  shadow-lg pl-5 rounded-md overflow-x-hidden">
                <div className="grid grid-cols-10">
                  <h1 className="col-span-1 font-bold py-2 px-2">Sr no.</h1>
                  <h1 className="col-span-2 font-bold py-2 px-2">Name</h1>
                  <h1 className="col-span-2 font-bold py-2 px-2">Username</h1>
                  <h1 className="col-span-3 font-bold py-2 px-2">Email</h1>
                  <h1 className="col-span-1 font-bold py-2 px-2">Section</h1>
                  <h1 className="col-span-1 font-bold py-2 px-2">Batch</h1>
                </div>
                {/* {students.map((stu, idx) => ( */}
                <div className="grid grid-cols-12 hover:scale-105 transition-all duration-150">
                  <h1 className="col-span-1 py-2 px-2">1</h1>
                  <h1 className="col-span-2 py-2 px-2">Atul Joshi</h1>
                  <h1 className="col-span-2 py-2 px-2">Username</h1>
                  <h1 className="col-span-3 py-2 px-2">
                    joshiatul26@gmail.com
                  </h1>
                  <h1 className="col-span-1 py-2 px-2">1</h1>
                  <h1 className="col-span-1 py-2 px-2">2023</h1>
                </div>
                <div className="grid grid-cols-12 hover:scale-105 transition-all duration-150">
                  <h1 className="col-span-1 py-2 px-2">2</h1>
                  <h1 className="col-span-2 py-2 px-2">Atul Joshi</h1>
                  <h1 className="col-span-2 py-2 px-2">Username</h1>
                  <h1 className="col-span-3 py-2 px-2">
                    joshiatul26@gmail.com
                  </h1>
                  <h1 className="col-span-1 py-2 px-2">1</h1>
                  <h1 className="col-span-1 py-2 px-2">2023</h1>
                </div>
                {/* ))} */}
              </div>
              //   )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
