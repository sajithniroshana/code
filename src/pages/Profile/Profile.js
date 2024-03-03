import React from "react";
import "./Profile.css";
import "../../App.css";
import "../../assets/css/components.css";
import LOGO from "../../assets/images/logo.png";

import { FaUser } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import CustomButton from "../../components/CustomButton";

const SignUpPage = () => {
  return (
    <div className={""}>
      {/*>lg / xxl / xl */}
      <div className="hidden lg:flex img1">
        <div className="flex flex-col lg:flex-row h-screen ">
          <div className="w-7/12 grid ">
            <div className="bg-slate-400 mx-24 mt-10 mb-10 rounded-3xl">
              <div
                className={
                  " justify-center items-center   flex flex-col lg:flex-row pt-5"
                }
              >
                <img src={LOGO} alt={"Logo"} className=" " />
                <h5
                  className={
                    "space  font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl flex justify-start items-center"
                  }
                >
                  GoviSewana
                </h5>
              </div>
              <div className={"flex justify-center items-center m-5"}>
                {" "}
                <div className={"form_section "}>
                  <div className="relative mb-5 mt-5">
                    <label className="block mb-2 text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <FaUser />
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-5">
                    <label className="block mb-2 text-gray-700">NIC</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Nic Number"
                        className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <FaIdCard />
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-5">
                    <label className="block mb-2 text-gray-700">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Mobile Number"
                        className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <FaMobileAlt />
                      </div>
                    </div>
                  </div>
                  <div className="relative ">
                    <label className="block mb-2 text-gray-700">District</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your District Name"
                        className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <FaIdCard />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <CustomButton BTN_NAME={"Save Changes"} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-6/12  grid grid-cols-3 gap-4 content-center bor">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center"}>
              {" "}
              <div className={"form_section "}>
                <div className=" flex justify-center items-center mt-5">
                  <p className="font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl mb-12 uppercase">
                    {" "}
                    Account{" "}
                  </p>
                </div>
                <div className="relative bg-slate-400 p-3  border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 w">
                  <div className=" ">
                    <div className="bg-white w-full rounded-xl flex flex-col lg:flex-row ">
                      <div className="w-5/12 flex justify-center items-center h-32 bg-green-300 rounded-xl">
                        {" "}
                        <img src={LOGO} alt={"Logo"} className=" " />
                      </div>
                      <div className="w-6/12 ml-3 mt-1">
                        {" "}
                        <p className="">Name : Laknath Gunarathna</p>
                        <p className="">Nic : 000 000 000 000</p>
                        <p className=" ">Number : 0123456789</p>
                        <p className="">District : 000000 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center mt-5">
                    <button className="bg-green-700 px-8 p-2 text-white  rounded-full">
                      Update
                    </button>
                  </div>
                </div>

                <div className="flex justify-end items-center mt-44">
                  <button className=" bg-green-700 px-8 p-2 text-white mx-2 rounded-xl">
                    Terms & Conditions
                  </button>
                  <button className=" bg-green-700 px-8 p-2 text-white  rounded-xl">
                    Setting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="hidden sm:flex lg:hidden img">
        <div className=" ">
          <div className="w-6/12  grid grid-cols-3 gap-4 content-center bor w1">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center "}>
              {" "}
              <div className={"form_section "}>
                <div className=" flex justify-center items-center mt-5">
                  <p className="font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl mb-12 uppercase">
                    {" "}
                    Account{" "}
                  </p>
                </div>
                <div className="relative bg-slate-400 p-3  border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 w3">
                  <div className=" ">
                    <div className="bg-white w-full rounded-xl flex flex-col lg:flex-row ">
                      <div className="w-full1 flex justify-center items-center h-32 bg-green-300 rounded-xl">
                        {" "}
                        <img src={LOGO} alt={"Logo"} className=" " />
                      </div>
                      <div className="w-6/12 ml-3 mt-1">
                        {" "}
                        <p className="">Name : Laknath Gunarathna</p>
                        <p className="">Nic : 000 000 000 000</p>
                        <p className=" ">Number : 0123456789</p>
                        <p className="">District : 000000 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center mt-5">
                    <button className="bg-green-700 px-8 p-2 text-white  rounded-full">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full grid justify-center ">
            <div className="bg-slate-400 mx-24 mt-10 mb-10 rounded-3xl w-9/12">
              <div
                className={
                  " justify-center items-center   flex flex-col lg:flex-row pt-5"
                }
              >
                <img src={LOGO} alt={"Logo"} className=" " />
                <h5
                  className={
                    "space  font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl flex justify-start items-center"
                  }
                >
                  GoviSewana
                </h5>
              </div>
              <div className={"flex justify-center items-center m-5"}>
                {" "}
                <div className={"form_section "}>
                  <div className="relative mb-5 mt-5">
                    <label className="block mb-2 text-gray-700">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Full Name"
                        className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <FaUser />
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-5">
                    <label className="block mb-2 text-gray-700">NIC</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Nic Number"
                        className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <FaIdCard />
                      </div>
                    </div>
                  </div>
                  <div className="relative mb-5">
                    <label className="block mb-2 text-gray-700">
                      Mobile Number
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your Mobile Number"
                        className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <FaMobileAlt />
                      </div>
                    </div>
                  </div>
                  <div className="relative ">
                    <label className="block mb-2 text-gray-700">District</label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter Your District Name"
                        className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                        <FaIdCard />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center">
                    <CustomButton BTN_NAME={"Save Changes"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <button className=" bg-green-700 px-8 p-2 text-white mx-2 rounded-xl">
                Terms & Conditions
              </button>
              <button className=" bg-green-700 px-20 p-2 text-white  rounded-xl">
                Setting
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="sm:hidden md:hidden lg:hidden xl:hidden    img2">
        <div className=" ">
          <div className="w-6/12  grid grid-cols-3 gap-4 content-center bor w1">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center "}>
              {" "}
              <div className={"form_section "}>
                <div className=" flex justify-center items-center mt-5">
                  <p className="font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl mb-12 uppercase">
                    {" "}
                    Account{" "}
                  </p>
                </div>
                <div className="relative bg-slate-400 p-3  border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 w4">
                  <div className=" ">
                    <div className="bg-white w-full rounded-xl flex flex-col lg:flex-row ">
                      <div className="w-full1 flex justify-center items-center h-32 bg-green-300 rounded-xl">
                        {" "}
                        <img src={LOGO} alt={"Logo"} className=" " />
                      </div>
                      <div className="w-full ml-3 mt-1">
                        {" "}
                        <p className="">Name : Laknath Gunarathna</p>
                        <p className="">Nic : 000 000 000</p>
                        <p className=" ">Number : 0123456789</p>
                        <p className="">District : 000000 </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center mt-5">
                    <button className="bg-green-700 px-8 p-2 text-white  rounded-full">
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  justify-center ">
            <div className="bg-slate-400    rounded-3xl  mt-5">
              <div
                className={
                  " justify-center items-center   flex flex-col lg:flex-row pt-5"
                }
              >
                <img src={LOGO} alt={"Logo"} className=" " />
                <h5
                  className={
                    "space  font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl flex justify-start items-center"
                  }
                >
                  GoviSewana
                </h5>
              </div>
              <div className={"flex justify-center items-center m-5"}>
                {" "}
                <div className={"form_section "}>
                  <div className="relative ">
                    <label className="block mb-2 text-gray-700 text-start px-6 w-9/12">
                      Full Name
                    </label>
                    <div className="flex justify-center items-center">
                      <input
                        type="text"
                      
                        className="w-10/12 pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute flex items-center pointer-events-none justify-end p-2 text-gray-400 w-7/12 ">
                        <FaUser />
                      </div>
                    </div>
                  </div>
                  <div className="relative ">
                    <label className="block mb-2 text-gray-700 text-start px-7 ">
                      NIC
                    </label>
                    <div className="flex justify-center items-center">
                      <input
                        type="text"
                        className="w-10/12 pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute flex items-center pointer-events-none justify-end p-2 text-gray-400 w-9/12">
                        <FaIdCard />
                      </div>
                    </div>
                  </div>
                  <div className="relative ">
                    <label className="block mb-2 text-gray-700 text-start px-5 ">
                      Mobile Number
                    </label>
                    <div className="flex justify-center items-center">
                      <input
                        type="text"
                        className="w-10/12 pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute flex items-center pointer-events-none justify-end text-gray-400 w-9/12">
                        <FaMobileAlt />
                      </div>
                    </div>
                  </div>
                  <div className="relative ">
                    <label className="block mb-2 text-gray-700 text-start px-7 ">
                      District
                    </label>
                    <div className="flex justify-center items-center">
                      <input
                        type="text"
                        className="w-10/12 pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                      />
                      <div className="absolute flex items-center pointer-events-none justify-end p-2 text-gray-400 w-9/12">
                        <FaIdCard />
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center mb-5">
                    <CustomButton BTN_NAME={"Save Changes"} />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <button className=" bg-green-700 px-5 p-2 text-white mx-2 rounded-xl">
                Terms & Conditions
              </button>
              <button className=" bg-green-700 px-20 p-2 text-white  rounded-xl">
                Setting
              </button>
            </div>
          </div>
        </div>
      </div>
      {/*~~Niroshana */}
    </div>
  );
};

export default SignUpPage;
