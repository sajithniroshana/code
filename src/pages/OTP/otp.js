import React from "react";
import "./otp.css";
import "../../App.css";
import "../../assets/css/components.css";

import SIGN_UP_LEFT_IMG from "../../assets/images/signup_left_img.png";

import CustomButton from "../../components/CustomButton";

const SignUpPage = () => {
  return (
    <div className={""}>
      {/*>lg / xxl / xl */}
      <div className="text-center font-bold lg:text-3xl mt-10 md:text-xl text-md">
        OTP Verification
      </div>
      <div className=" img1 hidden lg:flex">
        <div className="flex justify-center items-center h-3/4">
          <div className="flex flex-col lg:flex-row h-full w-10/12 bgs rounded-2xl">
            <div className="w-6/12 grid">
              <div className={" flex justify-center items-center"}>
                <img
                  src={SIGN_UP_LEFT_IMG}
                  alt={"SIGN_UP_LEFT_IMG"}
                  className="w-9/12 rounded-2xl"
                />
              </div>
            </div>

            <div className="w-6/12 grid grid-cols-3 gap-4 content-center ">
              {" "}
              <div className="mt-14 "></div>
              <div className={"flex justify-center items-center"}>
                {" "}
                <div className={"form_section "}>
                  <div className=" flex justify-center items-center mt-5">
                    <p className=" text-sm text-center mb-12  w-full text-black">
                      Enter your 4 pin OTP we have sent to your mobile, Once
                      done click “verify OTP” <br />
                      <br />
                      <p className="font-bold text-black">( 077 - 457 9385 )</p>
                    </p>
                  </div>
                  <div className="relative">
                    <div className="flex flex-col lg:flex-row h-full">
                      <div className="w-1/4">
                        <input className="w-10/12"></input>
                      </div>
                      <div className="w-1/4">
                        <input className="w-10/12"></input>
                      </div>
                      <div className="w-1/4">
                        <input className="w-10/12"></input>
                      </div>
                      <div className="w-1/4">
                        <input className="w-10/12"></input>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <CustomButton BTN_NAME={"Verify"} />
                  </div>
                  <div className=" flex justify-center items-center mt-5 text-sm">
                    <p className="text-black">
                      {" "}
                      Didn’t receive OTP?{" "}
                      <a href={"./"} className={"text-green-600 font-bold"}>
                        Resend OTP
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center  text-green-700 font-bold"> Unable to get the OTP?</div>
        <div className="text-center text-2xl text-green-700 font-bold uppercase"><b className="text-black">Call us</b> 011-234 5678</div>
      </div>
      {/*sm< /md /lg< */}
      <div className="hidden sm:flex lg:hidden img">
        <div className="flex justify-center items-center h-3/4">
          <div className="flex flex-col lg:flex-row h-full w-10/12 bgs rounded-2xl">
            <div className="w-full mt-10 grid">
              <div className={" flex justify-center items-center"}>
                <img
                  src={SIGN_UP_LEFT_IMG}
                  alt={"SIGN_UP_LEFT_IMG"}
                  className="w-9/12 rounded-2xl"
                />
              </div>
            </div>

            <div className="w-full grid grid-cols-3 gap-4 content-center ">
              {" "}
              <div className="mt-14 "></div>
              <div className={"flex justify-center items-center"}>
                {" "}
                <div className={"form_section "}>
                  <div className=" flex justify-center items-center mt-5">
                    <p className=" text-sm text-center mb-12  w-full">
                      Enter your 4 pin OTP we have sent to your mobile, Once
                      done click “verify OTP” <br />
                      <br />
                      <p className="font-bold">( 077 - 457 9385 )</p>
                    </p>
                  </div>
                  <div className="relative">
                    <div className="flex flex-col sm:flex-row h-full ">
                      <div className="w-1/4 lg:w-1/6">
                        <input className="w-5/6"></input>
                      </div>
                      <div className="w-1/4">
                        <input className="w-5/6"></input>
                      </div>
                      <div className="w-1/4">
                        <input className="w-5/6"></input>
                      </div>
                      <div className="w-1/4">
                        <input className="w-5/6"></input>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center items-center">
                    <CustomButton BTN_NAME={"Verify"} />
                  </div>
                  <div className=" flex justify-center items-center mt-5 text-sm">
                    <p>
                      {" "}
                      Didn’t receive OTP?{" "}
                      <a href={"./"} className={"text-green-600 font-bold"}>
                        Resend OTP
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*sm< /md /lg< */}
      <div className="sm:hidden md:hidden lg:hidden xl:hidden bgs ">
        <div className="flex flex-col lg:flex-row h-full w-full bgs ">
          <div className="w-full mt-10 grid">
            <div className={" flex justify-center items-center"}>
              <img
                src={SIGN_UP_LEFT_IMG}
                alt={"SIGN_UP_LEFT_IMG"}
                className="w-9/12 rounded-2xl"
              />
            </div>
          </div>

          <div className="w-full grid grid-cols-3 gap-4 content-center ">
            {" "}
            <div className="mt-14 "></div>
            <div className={"flex justify-center items-center"}>
              {" "}
              <div className={"form_section "}>
                <div className=" flex justify-center items-center mt-5">
                  <p className=" text-sm text-center mb-12  w-full">
                    Enter your 4 pin OTP we have sent to your mobile, Once done
                    click “verify OTP” <br />
                    <br />
                    <p className="font-bold">( 077 - 457 9385 )</p>
                  </p>
                </div>
                <div className="relative">
                  <div className="flex flex-wrap h-full">
                    <div className="w-1/4 lg:w-1/6 p-1">
                      <input className="w-full"></input>
                    </div>
                    <div className="w-1/4 p-1">
                      <input className="w-full"></input>
                    </div>
                    <div className="w-1/4 p-1">
                      <input className="w-full"></input>
                    </div>
                    <div className="w-1/4 p-1">
                      <input className="w-full"></input>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <CustomButton BTN_NAME={"Verify"} />
                </div>
                <div className=" flex justify-center items-center mt-5 mb-5 text-sm">
                  <p>
                    {" "}
                    Didn’t receive OTP?{" "}
                    <a href={"./"} className={"text-green-600 font-bold"}>
                      Resend OTP
                    </a>
                  </p>
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
