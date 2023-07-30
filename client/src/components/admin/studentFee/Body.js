import React, { useEffect, useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import Spinner from "../../../utils/Spinner";
import { useParams } from "react-router-dom";
//import { useNavigate } from "react-router-dom";

const Body = () => {
  //const navigate = useNavigate();
  const { studentId } = useParams();
  const loginToken = useSelector((state) => state.adminUser);
  const [loading, setLoading] = useState(false);
  const [studentAndFeeDetails, setStudentAndFeeDetails] = useState("");
  const [value, setValue] = useState({
    year: "",
    department: "",
    course_fee: "",
    form_fee: "",
    uniform_fee: "",
    caution_money: "",
  });

  useEffect(() => {
    getStudentAndFeeDetails();
  }, []);
  const getStudentAndFeeDetails = async () => {
    setLoading(true);
    const fetchStudentAndFeeDetails = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/admin/getStudentFeeDetails?studentId=${studentId}`,
      {
        method: "GET",
        headers: {
          "content-type": "application/json",
          Authorization: loginToken.token,
        },
      }
    );
    const fetchStudentAndFeeDetailsResult =
      await fetchStudentAndFeeDetails.json();
    if (fetchStudentAndFeeDetailsResult.status) {
      console.log(
        "fetchStudentAndFeeDetailsResult **",
        fetchStudentAndFeeDetailsResult
      );
      setLoading(false);
      setStudentAndFeeDetails(fetchStudentAndFeeDetailsResult.response);
      toast.success(fetchStudentAndFeeDetailsResult.message);
    } else {
      setLoading(false);
      toast.error(fetchStudentAndFeeDetailsResult.message);
    }
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // setLoading(true);
    // const submitData = await fetch(
    //   `${process.env.REACT_APP_SERVER_URL}/admin/getStudentFeeDetails?${studentId}`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "content-type": "application/json",
    //       Authorization: loginToken.token,
    //     },
    //     body: JSON.stringify(value),
    //   }
    // );
    // const subjectResult = await submitData.json();
    // console.log("subjectResult **", subjectResult);
    // if (subjectResult.success) {
    //   toast.success(subjectResult.message);
    //   setLoading(false);
    //   setValue({
    //     year: "",
    //     department: "",
    //     course_fee: "",
    //     form_fee: "",
    //     uniform_fee: "",
    //     caution_money: "",
    //   });
    //   //navigate("/admin/getdepartment");
    // } else {
    //   setLoading(false);
    //   toast.error(subjectResult.message);
    // }
  };

  return (
    <div className="flex-[0.8] mt-2">
      <div className="space-y-5">
        <div className="flex text-gray-400 items-center space-x-2">
          <FaPlusCircle />
          <h1>Add Student Fee</h1>
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
        <div className=" mr-10 bg-white flex flex-col rounded-xl mb-10">
          <div className="h-[40.5rem] overflow-auto">
            <h2 className="text-lg font-semibold m-4">Student Detail</h2>
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
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
                    Fee Paid
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Fee Pending
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.year}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.department}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{0}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee - 0}
                  </td>
                </tr>
              </tbody>
            </table>
            <form
              onSubmit={handleSubmit}
              className={`flex flex-col mb-6 scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll`}
            >
              <h2 className="text-lg font-semibold m-4">Fee Detail</h2>
              <table className="w-full border-collapse mb-4">
                <thead>
                  <tr>
                    <th className="px-4 py-2 text-left border">Category</th>
                    <th className="px-4 py-2 text-left border">Fee Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border">
                      Addmission Form Fee (One Time)
                    </td>
                    <td className="px-4 py-2 border">
                      {studentAndFeeDetails?.feeDetails?.[0]?.form_fee}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Uniform Fee (One Time)</td>
                    <td className="px-4 py-2 border">
                      {studentAndFeeDetails?.feeDetails?.[0]?.uniform_fee}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">
                      Caution Money (One Time)
                    </td>
                    <td className="px-4 py-2 border">
                      {studentAndFeeDetails?.feeDetails?.[0]?.caution_money}
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border">Course Fee</td>
                    <td className="px-4 py-2 border">
                      <input
                        type="text"
                        className="w-full px-2 py-1 border rounded"
                      />
                    </td>
                  </tr>
                  {/* Add more fee items as needed */}
                </tbody>
              </table>
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
                      year: "",
                      department: "",
                      course_fee: "",
                      form_fee: "",
                      uniform_fee: "",
                      caution_money: "",
                    });
                  }}
                  className="bg-blue-500 w-24 h-8 rounded-md text-white hover:scale-105 hover:bg-blue-700 transition-all duration-200"
                  type="button"
                >
                  Clear
                </button>
              </div>
            </form>
            <h2 className="text-lg font-semibold m-4">Installment Detail</h2>
            <table className="min-w-full text-left text-sm font-light over">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Name
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
                    Fee Paid
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Fee Pending
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.year}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.department}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{0}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee - 0}
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.year}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.department}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{0}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee - 0}
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.year}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.department}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{0}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee - 0}
                  </td>
                </tr>
                <tr className="border-b dark:border-neutral-500">
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.name}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.year}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.department}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">{0}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    {studentAndFeeDetails?.feeDetails?.[0]?.course_fee - 0}
                  </td>
                </tr>
              </tbody>
            </table>
            {/* <form
            className={`flex flex-col mb-6 scrollbar-thin scrollbar-track-white scrollbar-thumb-black overflow-y-scroll h-[40rem]`}
            onSubmit={handleSubmit}
          >
            <div className="flex py-10 ml-10 space-x-28">
              <div className="flex flex-col space-y-10">
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Course Fee :
                  </h1>

                  <input
                    required
                    placeholder="Course Fee"
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    value={value.course_fee}
                    onChange={(e) =>
                      setValue({ ...value, course_fee: e.target.value })
                    }
                  />
                </div>

                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Addmission Form Fee (One Time) :
                  </h1>

                  <input
                    required
                    placeholder="Form Fee"
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    value={value.form_fee}
                    onChange={(e) =>
                      setValue({ ...value, form_fee: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Uniform Fee (One Time) :
                  </h1>

                  <input
                    required
                    placeholder="Uniform Fee"
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    value={value.uniform_fee}
                    onChange={(e) =>
                      setValue({ ...value, uniform_fee: e.target.value })
                    }
                  />
                </div>
                <div className="grid grid-cols-2  gap-10">
                  <h1 className="font-bold text-lg bg-gray-700 shadow-xl text-white px-2 py-1 rounded-lg">
                    Caution Money (One Time, Refundable after course complition)
                    :
                  </h1>

                  <input
                    required
                    placeholder="Caution Money"
                    className="border-2 px-2 py-1 text-sm"
                    type="text"
                    value={value.caution_money}
                    onChange={(e) =>
                      setValue({ ...value, caution_money: e.target.value })
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
                    year: "",
                    department: "",
                    course_fee: "",
                    form_fee: "",
                    uniform_fee: "",
                    caution_money: "",
                  });
                }}
                className="bg-blue-500 w-24 h-8 rounded-md text-white hover:scale-105 hover:bg-blue-700 transition-all duration-200"
                type="button"
              >
                Clear
              </button>
            </div>
          </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
