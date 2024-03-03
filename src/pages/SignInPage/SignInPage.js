import React from "react";
import "./../SignUpPage/signUpStyles.css";
import "../../App.css";
import "../../assets/css/components.css";
import LOGO from "../../assets/images/logo.png";
import SIGN_UP_LEFT_IMG from "../../assets/images/signup_left_img.png";

import { FaMobileAlt } from "react-icons/fa";

import CustomButton from "../../components/CustomButton";

const SignUpPage = () => {
  return (
    <div className={""}>
      {/*>lg / xxl / xl */}
      <div className="hidden lg:flex img1">
        <div className="flex flex-col lg:flex-row h-screen ">
          <div className="w-6/12 grid">
            <div
              className={
                " justify-center items-center   flex flex-col lg:flex-row "
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
            <div className="">
              <p className="flex justify-center items-center mb-5 text-black">
                
                Revolutionizing Agriculture
              </p>
              <div className={" flex justify-center items-center"}>
                <img
                  src={SIGN_UP_LEFT_IMG}
                  alt={"SIGN_UP_LEFT_IMG"}
                  className="w-7/12"
                />
              </div>
            </div>
          </div>

          <div className="w-6/12 border-l-2 border-l-neutral-600 border-opacity-15 grid grid-cols-3 gap-4 content-center ">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center"}>
              {" "}
              <div className={"form_section "}>
                <div className=" flex justify-center items-center mt-5">
                  <p className="font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl mb-12 text-black">
                    {" "}
                    Sign In to GoviSewana
                  </p>
                </div>

                <div className="relative">
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
                <div className="relative mt-5 flex justify-center text-white">
                  <button className="bg-green-700 w-11/12 p-2 rounded-lg text-lg uppercase">
                    Sign In
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <CustomButton BTN_NAME={"SIGN UP"} />
                </div>
                <div className=" flex justify-center items-center mt-5">
                  <p className="text-black"> Already Have An Account? </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="hidden sm:flex lg:hidden img">
        <div className=" ">
          <div className=" w-full grid">
            <div className="mb-10"></div>
            <div
              className={
                " justify-center items-center   flex flex-col lg:flex-row "
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
            <div className="">
              <p className="flex justify-center items-center mb-5 text-black">
                {" "}
                Revolutionizing Agriculture{" "}
              </p>
              <div className={" flex justify-center items-center"}>
                <img
                  src={SIGN_UP_LEFT_IMG}
                  alt={"SIGN_UP_LEFT_IMG"}
                  className="w-9/12"
                />
              </div>
            </div>
          </div>

          <div className="w-full border-l-2 border-l-neutral-600 border-opacity-15 grid grid-cols-3 gap-4 content-center ">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center"}>
              {" "}
              <div className={"form_section "}>
                <div className={"flex justify-center items-center"}>
                  {" "}
                  <div className={"form_section "}>
                    <div className=" flex justify-center items-center mt-5">
                      <p className="font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl mb-12 text-black">
                        {" "}
                        Sign In to GoviSewana{" "}
                      </p>
                    </div>

                    <div className="relative">
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
                    <div className="relative mt-5 flex justify-center text-white">
                      <button className="bg-green-700 w-11/12 p-2 rounded-lg text-lg uppercase">
                        Sign In
                      </button>
                    </div>
                    <div className="flex justify-center items-center">
                      <CustomButton BTN_NAME={"SIGN UP"} />
                    </div>
                    <div className=" flex justify-center items-center mt-5">
                      <p className="text-black"> Already Have An Account? </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="sm:hidden md:hidden lg:hidden xl:hidden    img2">
        <div className=" ">
          <div className=" w-full grid">
            <div className="mb-10"></div>
            <div
              className={
                " justify-center items-center   flex flex-col lg:flex-row "
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
            <div className="">
              <p className="flex justify-center items-center mb-5 text-black">
                {" "}
                Revolutionizing Agriculture{" "}
              </p>
              <div className={" flex justify-center items-center"}>
                <img
                  src={SIGN_UP_LEFT_IMG}
                  alt={"SIGN_UP_LEFT_IMG"}
                  className="w-9/12"
                />
              </div>
            </div>
          </div>

          <div className="w-full border-l-2 border-l-neutral-600 border-opacity-15 grid grid-cols-3 gap-4 content-center ">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center"}>
              {" "}
              <div className={"form_section "}>
                <div className={"flex justify-center items-center"}>
                  {" "}
                  <div className={"form_section "}>
                    <div className="relative">
                      <label className="block mb-2 text-white">Full Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          className="pl-3 pr-10 py-2 border-2 border-white rounded-md focus:outline-none focus:border-blue-500 text-white outline1"
                        />
                        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400"></div>
                      </div>
                    </div>
                    <div className=" flex justify-center items-center mb-5">
                      <p className="font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl text-black ">
                        {" "}
                        Sign Ip to GoviSewana{" "}
                      </p>
                    </div>

                    <div className="relative ">
                      <label className="block mb-2 text-gray-700 text-end px-5 w-6/12">
                        Mobile Number
                      </label>
                      <div className="flex justify-center items-center">
                        <input
                          type="text"
                          placeholder="Enter Your Mobile Number"
                          className="w-7/12 pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                        />
                        <div className="absolute flex items-center pointer-events-none justify-end p-2 text-gray-400 w-7/12">
                          <FaMobileAlt />
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-5 flex justify-center text-white">
                      <button className="bg-green-700 w-6/12 p-2 rounded-lg text-lg uppercase">
                        Sign In
                      </button>
                    </div>
                    <div className="relative mt-5 flex justify-center text-white">
                      <button className="bg-green-700 w-4/12 p-2 rounded-lg text-lg uppercase">
                        Sign Up
                      </button>
                    </div>
                    <div className=" flex justify-center items-center mt-5 mb-12 text-black">
                      <p className="text-black">
                        {" "}
                        Already Have An Account?{" "}
                        <a href={"./"} className={"text-green-600 font-bold"}>
                          SIGN IN
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*~~Niroshana */}
    </div>
  );
};

export default SignUpPage;
