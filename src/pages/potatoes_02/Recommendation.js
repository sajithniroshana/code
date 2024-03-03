import React, { useState } from "react";
import Nav from "./../../components/Nav/Nav";
import "./Recommendation.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "../../assets/images/logo.png";
import img from "../../assets/images/logo.png";
import profile from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./../../components/Footer/Footer";
import potato from "../../assets/images/potato.jpg";
import Carrot from "../../assets/images/Carrot.jpg";
import Beetroot from "../../assets/images/Beetroot.jpg";
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
      <div className="hidden sm:flex ">
        <div className="container1">
          <Nav></Nav>

          <div className="Recommendation-content">
            <div className="Recommendation-content1">
              <div className="m-5 flex justify-center">
                {" "}
                <button className="bg-green-800 px-24 text-white font-bold rounded-xl p-3">
                  POTATOES
                </button>
              </div>
              <div className="Recommendation-content-2-box-part-21  h-4/5 bg-green-700 p-5  w-11/12">
                <div className="flex justify-end w-1/12 text-2xl font-bold text-emerald-200">
                  SOIL
                </div>

                <div className="Recommendation-content-2-box-part-2 w-10/12 ">
                  <div
                    className=" px-12 pt-3 rounded-xl w-full"
                    style={{ backgroundColor: "#93a773" }}
                  >
                    <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                      1. Introduction to Soil in Potato Cultivation:
                    </p>
                    <p className="text-black lg:text-md ">
                      * Soil quality is a decisive factor in the success of
                      potato cultivation in Sri Lanka.
                    </p>
                    {/* 02 */}
                    <br />
                    <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                      2. Ideal Soil Conditions:
                    </p>
                    <p className="text-black lg:text-md ">
                      * Type and pH: Well-drained, loose, slightly acidic to
                      neutral soils with a pH range between 5.5 and 7.0 are
                      preferred.
                    </p>
                    <p className="text-black lg:text-md ">
                      * Texture: Sandy loam or loamy soils are particularly
                      favorable, ensuring proper aeration and drainage.
                    </p>
                    {/* 02 */}
                    <br />
                    <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                      3. Soil Preparation:
                    </p>
                    <p className="text-black lg:text-md ">
                      * Plowing and Incorporation: Farmers plow the soil to
                      break up compacted layers, incorporating well-rotted
                      organic matter such as compost
                    </p>

                    <p className="text-black lg:text-md ">
                      * Raised Beds: Creation of raised beds aids in drainage
                      and provides an optimal environment for potato growth.
                    </p>
                    <p className="text-black lg:text-md ">
                      * Texture: Sandy loam or loamy soils are particularly
                      favorable, ensuring proper aeration and drainage.
                    </p>
                    {/* 02 */}
                    <br />
                    <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                      4. Soil Enrichment:
                    </p>
                    <p className="text-black lg:text-md ">
                      * Fertilization: A balanced approach to soil enrichment
                      involves the application of fertilizers with essential
                      nutrients such as nitrogen, phosphorus, and potassium.
                    </p>
                    {/* 02 */}
                    <br />
                    <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                      5. Moisture Management:
                    </p>
                    <p className="text-black lg:text-md ">
                      * Proper Moisture Levels: Maintaining proper moisture
                      levels is crucial for the success of potato cultivation.
                    </p>
                    <br />
                  </div>
                </div>
              </div>
            </div>
            <Footer></Footer>
          </div>
        </div>
      </div>

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
        <div className="flex gap-x-4 items-center  bg-green-700">
          <div className="h-screen flex-1">
            <div className="bk flex justify-end">
              <div className="w-90 h-90  ">
                <div className="flex justify-center mb-2 mt-2"><button className="bg-green-800  text-white font-bold ">
                  POTATOES
                </button></div>
                <div className=" Recommendation-content-2-box-part-21  h-4/5 p-5  w-11/12">
                  <div className="flex justify-end w-1/12 text-2xl font-bold text-emerald-200">
                    SOIL
                  </div>

                  <div className="Recommendation-content-2-box-part-2 w-10/12 ">
                    <div
                      className=" px-12 pt-3 rounded-xl w-full"
                      style={{ backgroundColor: "#93a773" }}
                    >
                      <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                        1. Introduction to Soil in Potato Cultivation:
                      </p>
                      <p className="text-black lg:text-md ">
                        * Soil quality is a decisive factor in the success of
                        potato cultivation in Sri Lanka.
                      </p>
                      {/* 02 */}
                      <br />
                      <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                        2. Ideal Soil Conditions:
                      </p>
                      <p className="text-black lg:text-md ">
                        * Type and pH: Well-drained, loose, slightly acidic to
                        neutral soils with a pH range between 5.5 and 7.0 are
                        preferred.
                      </p>
                      <p className="text-black lg:text-md ">
                        * Texture: Sandy loam or loamy soils are particularly
                        favorable, ensuring proper aeration and drainage.
                      </p>
                      {/* 02 */}
                      <br />
                      <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                        3. Soil Preparation:
                      </p>
                      <p className="text-black lg:text-md ">
                        * Plowing and Incorporation: Farmers plow the soil to
                        break up compacted layers, incorporating well-rotted
                        organic matter such as compost
                      </p>

                      <p className="text-black lg:text-md ">
                        * Raised Beds: Creation of raised beds aids in drainage
                        and provides an optimal environment for potato growth.
                      </p>
                      <p className="text-black lg:text-md ">
                        * Texture: Sandy loam or loamy soils are particularly
                        favorable, ensuring proper aeration and drainage.
                      </p>
                      {/* 02 */}
                      <br />
                      <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                        4. Soil Enrichment:
                      </p>
                      <p className="text-black lg:text-md ">
                        * Fertilization: A balanced approach to soil enrichment
                        involves the application of fertilizers with essential
                        nutrients such as nitrogen, phosphorus, and potassium.
                      </p>
                      {/* 02 */}
                      <br />
                      <p className=" text-black underline-offset-2 underline lg:text-md flex justify-start font-bold ">
                        5. Moisture Management:
                      </p>
                      <p className="text-black lg:text-md ">
                        * Proper Moisture Levels: Maintaining proper moisture
                        levels is crucial for the success of potato cultivation.
                      </p>
                      <br />
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
    </div>
  );
}
