import React, { useState } from "react";
import Nav from "./../../components/Nav/Nav";
import "./Recommendation.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "../../assets/images/logo.png";
import img from "../../assets/images/logo.png";
import profile from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./../../components/Footer/Footer";
import Chart from "./../../components/chart/Recommendation";
import potato from "../../assets/images/potato.jpg";
import Carrot from "../../assets/images/Carrot.jpg";
import Beetroot from "../../assets/images/Beetroot.jpg";
import { FaSearch } from "react-icons/fa";
import {
  faUser,
  faHouse,
  faSliders,
  faGaugeHigh,
  faHandHoldingDollar,
  faLightbulb,
  faRightFromBracket,
  faGear,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      {/*>lg / xxl / xl */}
      <div className="hidden lg:flex">
        <div className="container1">
          <Nav></Nav>

          <div className="Recommendation-content">
            <div className="Recommendation-content-1">
              <div className="Recommendation-content-1-h1 flex justify-center">
                <button className="bg-green-800 px-24 text-white font-bold rounded-xl p-3">
                  Price Prediction
                </button>
              </div>
              <div className="Recommendation-content-1-h1 flex justify-center  ">
                <div className="relative">
                  <input
                    ty0pe="text"
                    placeholder="Search..."
                    className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-96" // Adjust the width here (e.g., w-64 for 64px width)
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <FaSearch />
                  </div>
                </div>
              </div>
            </div>

            <div className="Recommendation-content-2-box w-4/5 ">
              <div className="Recommendation-content-2-box-part-1">
                <div className="district pt-2"></div>
              </div>

              <div className="Recommendation-content-2-box-part-2 ">
                <div className=" p-2 rounded-xl w-11/12 bg-blue-300">
                  <div className="flex w-full flex-col lg:flex-row">
                    <div className="w-1/2 text-xs">
                      Potato Prices (Historical + Forecasted)
                    </div>
                    <div className="h-1/2 w-6/12  flex flex-col lg:flex-row justify-center">
                      <div className="bg-slate-500 w-6/12 flex flex-col lg:flex-row p-1 rounded-xl text-xs">
                        {" "}
                        <div className="w-1/2 text-center">Weekly</div>
                        <div className="bg-green-500 rounded-xl w-1/2 text-center">
                          Monthly
                        </div>
                      </div>
                    </div>
                  </div>
                  <Chart></Chart>
                  <div className="w-full flex justify-end text-xs">
                    {" "}
                    <div className="">
                      {" "}
                      <b className="font-bold text-red-700  mt-5">
                        {" "}
                        _________{" "}
                      </b>{" "}
                      &nbsp;&nbsp;Historical Price&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <b className="font-bold text-red-700  mt-5">--------- </b>
                      &nbsp;&nbsp;Forecasted Price&nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Recommendation-content-2">
              <div className="  mx-14"></div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="hidden sm:flex lg:hidden  ">
        <div className="container1">
          <Nav></Nav>

          <div className="Recommendation-content">
            <div className="Recommendation-content-1">
              <div className="Recommendation-content-1-h1 flex justify-center">
                <button className="bg-green-800 px-24 text-white font-bold rounded-xl p-3">
                  Price Prediction
                </button>
              </div>
              <div className="Recommendation-content-1-h1 flex justify-center  ">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="pl-3 pr-10 py-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 w-96" // Adjust the width here (e.g., w-64 for 64px width)
                  />
                  <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-gray-400">
                    <FaSearch />
                  </div>
                </div>
              </div>
            </div>

            <div className="Recommendation-content-2-box w-4/5 ">
              <div className="Recommendation-content-2-box-part-1">
                <div className="district pt-2"></div>
              </div>

              <div className="Recommendation-content-2-box-part-2 ">
                <div className=" p-2 rounded-xl w-11/12 bg-blue-300">
                  <div className="flex w-full flex-col lg:flex-row">
                    <div className="w-1/2 text-xs">
                      Potato Prices (Historical + Forecasted)
                    </div>
                    <div className="h-1/2 w-6/12  flex flex-col lg:flex-row justify-center">
                      <div className="bg-slate-500 w-6/12 flex flex-col sm:flex-row p-1 rounded-xl text-xs">
                        {" "}
                        <div className="w-1/2 text-center">Weekly</div>
                        <div className="bg-green-500 rounded-xl w-1/2 text-center">
                          Monthly
                        </div>
                      </div>
                    </div>
                  </div>
                  <Chart></Chart>
                  <div className="w-full flex justify-end text-xs">
                    {" "}
                    <div className="">
                      {" "}
                      <b className="font-bold text-red-700  mt-5">
                        {" "}
                        _________{" "}
                      </b>{" "}
                      &nbsp;&nbsp;Historical Price&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <b className="font-bold text-red-700  mt-5">--------- </b>
                      &nbsp;&nbsp;Forecasted Price&nbsp;&nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="Recommendation-content-2">
              <div className="  mx-14"></div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="sm:hidden ">
        <div
          className={`bgrs ${
            open ? "w-72" : "w-20"
          } bg-dark-purple h-screen p-5 pt-8 relative duration-300`}
        >
          <div
            className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple bgrs text-white flex justify-center border-2 rounded-full ${
              !open && "rotate-180"
            }`}
            onClick={() => setOpen(!open)}
          >
            <FontAwesomeIcon icon={faBars} />
          </div>

          <div className="flex gap-x-4 items-center mb-5  justify-center">
            <img
              src={profile}
              className={`cursor-pointer duration-500  m-1 `}
              style={{ width: "10vw", height: "8vw" }} // Adjust width and height as needed
            />
          </div>
          <div className={`flex justify-center ${!open && "scale-0"}`}>
            <div className="bo pb-2">
              <p className="text-center text-white text-sm">sarath kumara</p>
              <p className="text-center text-white text-sm">
                071 0000 000{" "}
              </p>{" "}
            </div>
          </div>
          <div className="flex gap-x-4 items-center px-3 mb-5 mt-1  text-white  ">
            <FontAwesomeIcon icon={faUser} />
            <h1
              className={`text-white origin-left font-medium text-sm duration-200 ${
                !open && "scale-0"
              }`}
            >
              Profile
            </h1>
          </div>
          <div className="flex gap-x-4 items-center p-2 mt-1 text-white  ">
            <FontAwesomeIcon icon={faHouse} />
            <h1
              className={`text-white origin-left font-medium text-sm duration-200 ${
                !open && "scale-0"
              }`}
            >
              Home
            </h1>
          </div>
          <div className="flex gap-x-4 items-center mt-1 p-2 text-white  ">
            <FontAwesomeIcon icon={faSliders} />
            <h1
              className={`text-white origin-left font-medium text-sm duration-200 ${
                !open && "scale-0"
              }`}
            >
              Yield Prediction & Excess check
            </h1>
          </div>
          <div className="flex gap-x-4 items-center mt-1 p-2 text-white  ">
            <FontAwesomeIcon icon={faGaugeHigh} />
            <h1
              className={`text-white origin-left font-medium text-sm duration-200 ${
                !open && "scale-0"
              }`}
            >
              Crop Recommendation
            </h1>
          </div>
          <div className="flex gap-x-4 items-center mt-1 p-2 text-white  ">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
            <h1
              className={`text-white origin-left font-medium text-sm duration-200 ${
                !open && "scale-0"
              }`}
            >
              Price Prediction
            </h1>
          </div>
          <div className="flex gap-x-4 items-center px-3 mt-1  text-white bg-lime-950 border border-solid  border-lime-600 rounded-lg ">
            <FontAwesomeIcon icon={faLightbulb} />
            <h1
              className={`text-white origin-left font-medium text-sm duration-200 ${
                !open && "scale-0"
              }`}
            >
              Cultivation Tips
            </h1>
          </div>
          <div className={`bot pb-5 mt-20  ${!open && "scale-0"}`}></div>
          <div className="flex gap-x-4 items-center    p-2 text-white  ">
            <FontAwesomeIcon icon={faRightFromBracket} />
            <h1
              className={`text-white origin-left font-medium text-sm duration-200 ${
                !open && "scale-0"
              }`}
            >
              Logout
            </h1>
          </div>
          <div className="flex gap-x-4 items-center mt-1 p-2 text-white  ">
            <FontAwesomeIcon icon={faGear} />
            <h1
              className={`text-white origin-left font-medium text-sm duration-200 ${
                !open && "scale-0"
              }`}
            >
              Settings
            </h1>
          </div>
        </div>
        <div className="sm:hidden md:hidden lg:hidden xl:hidden gap-x-4 items-center">
          <div className="h-screen flex-1">
            <div className="bk flex justify-end">
              <div className="w-90 h-90  ">
                <div className="Recommendation-content1">
                  <div className="Recommendation-content-1">
                    <div className="Recommendation-content-1-h1 flex justify-center">
                      <button className="bg-green-800 px-10 text-white font-bold rounded-xl p-3">
                        POTATOES
                      </button>
                    </div>
                    <div className="Recommendation-content-2-box-part-2 flex justify-center ">
                      <div className=" p-2 rounded-xl w-8/12 bg-blue-300 h-96">
                        <div className=" h-11">
                          <div className="flex w-full flex-col lg:flex-row">
                            <div className="w-full text-xs">
                              Potato Prices (Historical + Forecasted)
                            </div>
                            <div className="h-1/2 w-full  flex flex-col lg:flex-row justify-center mt-4">
                              <div className="bg-slate-500 w-6/12 flex  flex-row p-1 rounded-xl text-xs">
                                {" "}
                                <div className="w-1/2 text-center">Weekly</div>
                                <div className="bg-green-500 rounded-xl w-1/2 text-center">
                                  Monthly
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className=" h-80 flex items-end">
                          {" "}
                          <Chart></Chart>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-91  h-20   flex-1">
                  <div className="w-full  text-center">
                    <div className=" flex justify-center  w-full">
                      <img
                        src={Image}
                        alt=""
                        style={{ height: "20px", marginLeft: "20px" }}
                      ></img>
                      <h1 className="text-white text-xs p-1 uppercase font-bold">
                        GoviSewana
                      </h1>
                    </div>
                  </div>
                  <div className="w-full bort h-7 pt-2  flex-1 text-xs text-white uppercase text-center">
                    Home&nbsp; AboutUs&nbsp; HEALTH &nbsp;PRIMARY
                    &nbsp;POLICIE&nbsp; DISCLAIMER
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
}
