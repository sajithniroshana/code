import React from "react";
import "./welcome.css";
import "../../App.css";
import "../../assets/css/components.css";
import LOGO from "../../assets/images/logo.png";
import img from "../../assets/images/govi sewana name.png";


const SignUpPage = () => {
  return (
    <div className={""}>
      {/*>lg / xxl / xl */}
      <div className="hidden lg:flex ">
        <div className="flex flex-col lg:flex-row h-screen ">
          <div className="w-6/12 grid img3">
            <div className="text-white grid">
              <div className="flex justify-center items-center w-full">
                <img src={LOGO} alt="Logo" className="w-32 h-28" />
              </div>
            </div>

            <div className="text-white grid">
              <div className="flex justify-center items-center w-full">
                <img src={img} alt="Logo" className="w-7/12 h-28" />
              </div>
            </div>

            <div className="w1 text-center font-bold text-white uppercase w-full pl-28">
              <p>
                Welcome &nbsp;to&nbsp; Govi
              sevana <br />
                ගොවි සෙවන වෙත ඔබව සාදරයෙන් පිළිගනිමු.
                <br />
                விவசாயி நிழல்களுக்கு வரவேற்கிறோம்.
              </p>
            </div>
          </div>

          <div className="w-6/12 border-l-2 bg-green-800 border-l-neutral-600 border-opacity-15 grid grid-cols-3 gap-4 content-center ">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center"}>
              {" "}
              <div className={"form_section "}>
                <div className="flex justify-center">
                  <div>
                    <label htmlFor="country" className="text-white text-lg">
                      Select a country{" "}
                    </label>
                    <select id="country" name="country">
                      <option value="english">English</option>
                      <option value="france">France</option>
                    </select>
                  </div>
                </div>
                <div className=" flex justify-center items-center mt-5">
                  <p className="font-bold sm:text-l  md:text-xl lg:text-2xl xl:text-4xl mb-12 text-white text-center">
                    {" "}
                    Step into the Future of Agriculture{" "}
                  </p>
                </div>
                <div className="w1 text-center text-white text-lg">
                  {" "}
                  <p>
                    Explore Your Crop Yield Forecast Technologies Lorem Ipsum is
                    simply dummy text of the printing and typesetting industry
                    lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley.
                  </p>{" "}
                </div>
                <div className="flex justify-center  items-center mt-12">
                  <button className="bg-white px-12 p-2 font-bold rounded-lg text-lg">
                    Explore !!
                  </button>
                </div>
                <div className=" flex justify-center items-center mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="hidden sm:flex lg:hidden img">
      <div className="">
          <div className="w-full grid img4">
            <div className="text-white grid">
              <div className="flex justify-center items-center w-full">
                <img src={LOGO} alt="Logo" className="w-32 h-28" />
              </div>
            </div>

            <div className="text-white grid">
              <div className="flex justify-center items-center w-full">
                <img src={img} alt="Logo" className="w-7/12 h-28" />
                
              </div>
            </div>

            <div className="w6 mb-3   text-white uppercase text-center font-bold">
              <p>
                Welcome &nbsp;to&nbsp; Govi
              sevana <br />
                ගොවි සෙවන වෙත ඔබව සාදරයෙන් පිළිගනිමු.
                <br />
                விவசாயி நிழல்களுக்கு வரவேற்கிறோம்.
              </p>
            </div>
          </div>

          <div className="w-full border-l-2 bg-green-800 border-l-neutral-600 border-opacity-15 grid grid-cols-3 gap-4 content-center ">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center"}>
              {" "}
              <div className={"form_section "}>
                <div className="flex justify-center mt-5">
                  <div>
                    <label htmlFor="country" className="text-white text-lg ">
                      Select a country{" "}
                    </label>
                    <select id="country" name="country">
                      <option value="english">English</option>
                      <option value="france">France</option>
                    </select>
                  </div>
                </div>
                <div className=" flex justify-center items-center mt-5">
                  <p className="font-bold sm:text-2xl  mb-12  text-white text-center">
                    {" "}
                    Step into the Future of Agriculture{" "}
                  </p>
                </div>
                <div className="w6   text-center text-white text-lg">
                  {" "}
                  <p>
                    Explore Your Crop Yield Forecast Technologies <br/> Lorem Ipsum is
                    simply dummy text of the printing and typesetting  <br/> industry
                    lorem Ipsum has been the industry's standard <br/> dummy text ever
                    since the 1500s, when an unknown printer took a galley.
                  </p>{" "}
                </div>
                <div className="flex justify-center  items-center mt-12">
                  <button className="bg-white px-12 p-2 font-bold rounded-lg text-lg">
                    Explore !!
                  </button>
                </div>
                <div className=" flex justify-center items-center mt-5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="sm:hidden md:hidden lg:hidden xl:hidden    img2">
      <div className="flex flex-col lg:flex-row h-screen ">
          <div className="w-full grid img4">
            <div className="text-white grid">
              <div className="flex justify-center items-center w-full">
                <img src={LOGO} alt="Logo" className="w-10 h-8" />
              </div>
            </div>

            <div className="text-white grid">
              <div className="flex justify-center items-center w-full">
                <img src={img} alt="Logo" className="w-7/12 h-28" />
                
              </div>
            </div>

            <div className="w6 mb-3   text-white uppercase text-center text-sm">
              <p>
                Welcome &nbsp;to&nbsp; Govi
              sevana <br />
                ගොවි සෙවන වෙත ඔබව සාදරයෙන් පිළිගනිමු.
                <br />
                விவசாயி நிழல்களுக்கு வரவேற்கிறோம்.
              </p>
            </div>
          </div>

          
        </div>
        <div className="w-full border-l-2 bg-green-800 border-l-neutral-600 border-opacity-15 grid grid-cols-3 gap-4 content-center ">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center"}>
              {" "}
              <div className={"form_section "}>
                <div className="flex justify-center mt-5">
                  <div>
                    <label htmlFor="country" className="text-white text-lg ">
                      Select a country{" "}
                    </label>
                    <select id="country" name="country">
                      <option value="english">English</option>
                      <option value="france">France</option>
                    </select>
                  </div>
                </div>
                <div className=" flex justify-center items-center mt-5">
                  <p className="font-bold sm:text-2xl  mb-12  text-white text-center">
                    {" "}
                    Step into the Future of Agriculture{" "}
                  </p>
                </div>
                <div className="w6   text-center text-white text-lg">
                  {" "}
                  <p className="text-sm">
                    Explore Your Crop Yield Forecast Technologies <br/> Lorem Ipsum is
                    simply dummy text of the <br/> printing and typesetting   industry
                    lorem Ipsum<br/> has been  the industry's standard  dummy text <br/> ever
                    since the 1500s, when an unknown printer took a galley.
                  </p>{" "}
                </div>
                <div className="flex justify-center  items-center mt-12">
                  <button className="bg-white px-12 p-2 font-bold rounded-lg text-lg">
                    Explore !!
                  </button>
                </div>
                <div className=" flex justify-center items-center mt-5"></div>
              </div>
            </div>
          </div>
      </div>
      {/*~~Niroshana */}
    </div>
  );
};

export default SignUpPage;
