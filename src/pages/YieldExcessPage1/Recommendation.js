import React, { useState } from "react";
import Nav from "./../../components/Nav/Nav";
import "./Recommendation.css";
import CustomButton from "../../components/CustomButton";
import Footer from "./../../components/Footer/Footer";
import TableComponent from "../../components/TableComponent";
import CropYieldPrediction from "../../components/CropYieldPrediction";
import carrotImage from "../../assets/images/carrot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile from "../../assets/images/logo.png";
import Image from "../../assets/images/logo.png";
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
import { faBars } from "@fortawesome/free-solid-svg-icons";
export default function Home() {
  const [open, setOpen] = useState(true);
  return (
    <div>
      {/*>lg / xxl / xl */}
      <div className="hidden lg:flex ">
        <div className="container1">
          <Nav></Nav>

          <div
            className="Recommendation-content text-xs"
            style={{ overflowY: "scroll" }}
          >
            <div
              className="border border-green-500 rounded-lg p-8 m-14"
              style={{
                backgroundColor: "#cde3b2",
                borderWidth: "2px",
                borderColor: "#1e7355",
              }}
            >
              <h2 className="text-sm  px-2 font-bold">Crop Yield Prediction</h2>

              <CropYieldPrediction />

              <h2 className="text-sm font-bold mt-2 px-2">
                Crop Yield Prediction
              </h2>

              <div
                className="flex-col p-5 border rounded-xl mt-3"
                style={{
                  backgroundColor: "#5c8b7b",
                  borderWidth: "2px",
                  borderColor: "#1e7355",
                }}
              >
                <div
                  className="flex items-center justify-between p-1 bg-gray-600 rounded-lg"
                  style={{ width: "150px" }}
                >
                  <p className="mr-2 text-white">Carrot</p>
                  <img src={carrotImage} alt="Carrot" className="w-8 h-8" />
                </div>

                <TableComponent />

                <div className="flex flex-row w-full items-center justify-between p-1">
                  <div
                    className="flex items-center justify-between px-2 rounded-lg"
                    style={{ width: "550px", backgroundColor: "#4e724a" }}
                  >
                    <div className="flex items-center">
                      <p className="mr-2 text-white">
                        Would you be planting the latest prediction?{" "}
                      </p>
                    </div>

                    <div className="m-1 gap-2">
                      <CustomButton
                        BTN_NAME={"Yes"}
                        STYLE={{ width: "80px" }}
                      />
                      <CustomButton BTN_NAME={"No"} STYLE={{ width: "80px" }} />
                    </div>
                  </div>

                  <div className="flex">
                    <CustomButton BTN_NAME={"Crop recommendations available"} />
                  </div>
                </div>

                <div
                  className="w-full bg-white mt-3"
                  style={{ height: "2px" }}
                />

                <div
                  className="flex items-center justify-between p-2 my-4 bg-gray-600 rounded-lg"
                  style={{ width: "150px" }}
                >
                  <p className="mr-2 text-white">Carrot</p>
                  <img src={carrotImage} alt="Carrot" className="w-8 h-" />
                </div>

                <TableComponent />
              </div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>
      <div className="hidden md:flex lg:hidden">
        <div className="container1">
          <Nav></Nav>

          <div
            className="Recommendation-content text-xs overflow-auto"
            style={{ maxHeight: "calc(100vh - 10px)" }}
          >
            <div
              className="border border-green-500 rounded-lg p-8 m-4 lg:m-14"
              style={{
                backgroundColor: "#cde3b2",
                borderWidth: "2px",
                borderColor: "#1e7355",
              }}
            >
              <h2 className="text-sm px-2 font-bold">Crop Yield Prediction</h2>
              <CropYieldPrediction />
              <h2 className="text-sm font-bold mt-2 px-2">
                Crop Yield Prediction
              </h2>
              <div
                className="flex-col p-5 border rounded-xl mt-3"
                style={{
                  backgroundColor: "#5c8b7b",
                  borderWidth: "2px",
                  borderColor: "#1e7355",
                }}
              >
                <div className="flex items-center justify-between p-1 bg-gray-600 rounded-lg">
                  <p className="mr-2 text-white">Carrot</p>
                  <img src={carrotImage} alt="Carrot" className="w-8 h-8" />
                </div>
                <TableComponent />
                <div className="flex flex-row w-full items-center justify-between p-1">
                  <div
                    className="flex items-center justify-between px-2 rounded-lg"
                    style={{ width: "100%", backgroundColor: "#4e724a" }}
                  >
                    <div className="flex items-center">
                      <p className="mr-2 text-white">
                        Would you be planting the latest prediction?
                      </p>
                    </div>
                    <div className="m-1 gap-2">
                      <CustomButton
                        BTN_NAME={"Yes"}
                        STYLE={{ width: "80px" }}
                      />
                      <CustomButton BTN_NAME={"No"} STYLE={{ width: "80px" }} />
                    </div>
                  </div>
                  <div className="flex">
                    <CustomButton BTN_NAME={"Crop recommendations available"} />
                  </div>
                </div>
                <div
                  className="w-full bg-white mt-3"
                  style={{ height: "2px" }}
                />
                <div className="flex items-center justify-between p-2 my-4 bg-gray-600 rounded-lg">
                  <p className="mr-2 text-white">Carrot</p>
                  <img src={carrotImage} alt="Carrot" className="w-8 h-" />
                </div>
                <TableComponent />
              </div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>

      <div className="hidden sm:flex md:hidden text-black">
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
        <div
          className="Recommendation-content text-xs overflow-auto overflow-x-hidden"
          style={{ maxHeight: "calc(100vh - 10px)" }}
        >
          <div
            className="border border-green-500 rounded-lg p-4 lg:p-8 m-2 lg:m-14"
            style={{
              backgroundColor: "#cde3b2",
              borderWidth: "2px",
              borderColor: "#1e7355",
            }}
          >
            <h2 className="text-sm px-2 font-bold">Crop Yield Prediction</h2>
            <CropYieldPrediction />
            <h2 className="text-sm font-bold mt-2 px-2">
              Crop Yield Prediction
            </h2>
            <div
              className="flex-col p-4 lg:p-5 border rounded-xl mt-2 lg:mt-3"
              style={{
                backgroundColor: "#5c8b7b",
                borderWidth: "2px",
                borderColor: "#1e7355",
              }}
            >
              <div className="flex items-center justify-between p-2 lg:p-1 bg-gray-600 rounded-lg">
                <p className="mr-2 text-white">Carrot</p>
                <img src={carrotImage} alt="Carrot" className="w-8 h-8" />
              </div>
              <TableComponent />
              <div className="flex flex-col lg:flex-row w-full items-center justify-between p-2 lg:p-1">
                <div
                  className="flex items-center justify-between px-2 rounded-lg lg:w-1/2 lg:mr-2"
                  style={{ backgroundColor: "#4e724a" }}
                >
                  <div className="flex items-center">
                    <p className="mr-2 text-white">
                      Would you be planting the latest prediction?
                    </p>
                  </div>
                  <div className="m-1 gap-2">
                    <CustomButton BTN_NAME={"Yes"} STYLE={{ width: "80px" }} />
                    <CustomButton BTN_NAME={"No"} STYLE={{ width: "80px" }} />
                  </div>
                </div>
                <div className="flex mt-2 lg:mt-0">
                  <CustomButton BTN_NAME={"Crop recommendations available"} />
                </div>
              </div>
              <div
                className="w-full bg-white mt-2 lg:mt-3"
                style={{ height: "2px" }}
              />
              <div className="flex items-center justify-between p-2 my-2 lg:my-4 bg-gray-600 rounded-lg">
                <p className="mr-2 text-white">Carrot</p>
                <img src={carrotImage} alt="Carrot" className="w-8 h-8" />
              </div>
              <TableComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
