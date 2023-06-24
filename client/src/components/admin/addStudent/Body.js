import React from "react";
import { FaPlusCircle } from "react-icons/fa";

const Body = () => {
  return (
    <div className="flex-[0.8] mt-2">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <FaPlusCircle />
          <h1>Add Student</h1>
        </div>
        <div className=" mr-10 bg-white flex flex-col rounded-xl ">
          <form
            className={`flex flex-col mb-6 scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[40rem]`}
            //onSubmit={handleSubmit}
          >
            <div className="flex py-10 ml-10 space-x-28">
              <div className="flex flex-col space-y-10">
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Name :
                  </h1>

                  <input
                    placeholder="Full Name"
                    required
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    //value={value.name}
                    // onChange={(e) =>
                    //   setValue({ ...value, name: e.target.value })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    DOB :
                  </h1>

                  <input
                    required
                    placeholder="DD/MM/YYYY"
                    className="border-2 px-2 py-1 text-sm"
                    type="date"
                    //value={value.dob}
                    // onChange={(e) =>
                    //   setValue({ ...value, dob: e.target.value })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Father's Name :
                  </h1>

                  <input
                    required
                    placeholder="Father's Name"
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    //value={value.fatherName}
                    // onChange={(e) =>
                    //   setValue({ ...value, fatherName: e.target.value })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Mother's Name :
                  </h1>

                  <input
                    required
                    placeholder="Mother's Name"
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    //value={value.motherName}
                    // onChange={(e) =>
                    //   setValue({ ...value, motherName: e.target.value })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Email :
                  </h1>

                  <input
                    required
                    placeholder="Email"
                    className="border-2 px-2 py-1 text-sm"
                    type="email"
                    //value={value.email}
                    // onChange={(e) =>
                    //   setValue({ ...value, email: e.target.value })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Batch :
                  </h1>

                  <input
                    required
                    placeholder="yyyy-yyyy"
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    //value={value.batch}
                    // onChange={(e) =>
                    //   setValue({ ...value, batch: e.target.value })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Year :
                  </h1>
                  <select
                    required
                    displayEmpty
                    sx={{ height: 36 }}
                    inputProps={{ "aria-label": "Without label" }}
                    //value={value.year}
                    // onChange={(e) =>
                    //   setValue({ ...value, year: e.target.value })
                    // }
                  >
                    <option value="">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Department :
                  </h1>
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
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Gender :
                  </h1>
                  <select
                    required
                    displayEmpty
                    sx={{ height: 36 }}
                    inputProps={{ "aria-label": "Without label" }}
                    //value={value.gender}
                    // onChange={(e) =>
                    //   setValue({ ...value, gender: e.target.value })
                    // }
                  >
                    <option value="">None</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Student Mobile :
                  </h1>

                  <input
                    required
                    placeholder="Student Mobile"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.contactNumber}
                    // onChange={(e) =>
                    //   setValue({ ...value, contactNumber: e.target.value })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Section :
                  </h1>
                  <select
                    required
                    displayEmpty
                    sx={{ height: 36 }}
                    inputProps={{ "aria-label": "Without label" }}
                    //value={value.section}
                    // onChange={(e) =>
                    //   setValue({ ...value, section: e.target.value })
                    // }
                  >
                    <option value="">None</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>

                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Avatar :
                  </h1>

                  <input
                    type="file"
                    multiple={false}
                    // onDone={({ base64 }) =>
                    //   setValue({ ...value, avatar: base64 })
                    // }
                  />
                </div>
              </div>
              <div className="flex flex-col space-y-10 pr-6">
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-1 py-1 rounded-lg">
                    Father Occupation :
                  </h1>

                  <input
                    required
                    placeholder="Father Occupation"
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    //value={value.fatherName}
                    // onChange={(e) =>
                    //   setValue({ ...value, fatherName: e.target.value })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Father's Mobile :
                  </h1>

                  <input
                    required
                    placeholder="Father's Mobile"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.fatherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     fatherContactNumber: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Mother's Mobile :
                  </h1>

                  <input
                    required
                    placeholder="Father's Mobile"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.motherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     motherContactNumber: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Postal Address :
                  </h1>
                  <textarea
                    required
                    placeholder="Postal Address"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.motherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     motherContactNumber: e.target.value,
                    //   })
                    // }>
                  ></textarea>
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Permanent Address :
                  </h1>
                  <textarea
                    required
                    placeholder="Permanent Address"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.motherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     motherContactNumber: e.target.value,
                    //   })
                    // }>
                  ></textarea>
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Pincode :
                  </h1>

                  <input
                    required
                    placeholder="Pincode"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.motherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     motherContactNumber: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Category :
                  </h1>
                  <select
                    required
                    displayEmpty
                    sx={{ height: 36 }}
                    inputProps={{ "aria-label": "Without label" }}
                    //value={value.section}
                    // onChange={(e) =>
                    //   setValue({ ...value, section: e.target.value })
                    // }
                  >
                    <option value="">None</option>
                    <option value="general">General</option>
                    <option value="sc">SC</option>
                    <option value="st">ST</option>
                    <option value="obc">OBC</option>
                  </select>
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Aadhar No. :
                  </h1>

                  <input
                    required
                    placeholder="Aadhar No."
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.motherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     motherContactNumber: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    PAN :
                  </h1>

                  <input
                    required
                    placeholder="PAN"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.motherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     motherContactNumber: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Nationality :
                  </h1>

                  <input
                    required
                    placeholder="Nationality"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.motherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     motherContactNumber: e.target.value,
                    //   })
                    // }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Blood Group :
                  </h1>

                  <input
                    required
                    placeholder="Blood Group"
                    className="border-2 px-2 py-1 text-sm"
                    type="number"
                    //value={value.motherContactNumber}
                    // onChange={(e) =>
                    //   setValue({
                    //     ...value,
                    //     motherContactNumber: e.target.value,
                    //   })
                    // }
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
                // onClick={() => {
                //   setValue({
                //     name: "",
                //     dob: "",
                //     email: "",
                //     department: "",
                //     contactNumber: "",
                //     avatar: "",
                //     batch: "",
                //     gender: "",
                //     year: "",
                //     fatherName: "",
                //     motherName: "",
                //     section: "",
                //     fatherContactNumber: "",
                //     motherContactNumber: "",
                //   });
                //   setError({});
                // }}
                className="bg-blue-500 w-24 h-8 rounded-md text-white hover:scale-105 hover:bg-blue-700 transition-all duration-200"
                type="button"
              >
                Clear
              </button>
            </div>
            {/* <div ref={errorRef} className={classes.loadingAndError}>
              {loading && (
                <Spinner
                  message="Adding Student"
                  height={30}
                  width={150}
                  color="#111111"
                  messageColor="blue"
                />
              )}
              {(error.emailError || error.backendError) && (
                <p className="text-red-500">
                  {error.emailError || error.backendError}
                </p>
              )}
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Body;
