"use client";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";

import NavBar from "@/app/components/navbar";

export default function PSIGNIN() {
  const router = useRouter();
    const [loading, setLoading] = React.useState(false);
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    })

      const onLogin = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login/participants", user);
            router.push("/dashboard/participants");
            
        } catch (error:any) {
            console.log("Login failed", error.message);
            
        }finally {
            setLoading(false);
        }
    }

  return (
    <>
      <div className="font-[sans-serif] text-[#333] bg-white min-h-screen  items-center justify-center ">
        <NavBar />
        <div className="sm:w-1/2 max-w-4xl items-center justify-center mx-auto mt-10 px-6">
          <div className="items-center gap-4 max-w-7xl w-full">
            {/* <div className="lg:h-[400px] md:h-[300px] max-md:mt-10">
              <img
                src="https://readymadeui.com/login-image.webp"
                className="w-full h-full object-cover"
                alt="Dining Experience"
              />
            </div> */}
            <div className="border border-gray-300 rounded-md p-6 max-w-md shadow-[0_2px_22px_-4px_rgba(93,96,127,0.2)] mx-auto">
              <form className="space-y-6">
                <div className="mb-10">
                  <h3 className="text-2xl font-extrabold">Sign in</h3>
                  <p className="text-base leading-relaxed mt-4">
                    Boost your monthly income in giving product interviews
                  </p>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Username</label>
                  <div className="relative flex items-center">
                    <input
                      name="username"
                      type="text"
                      required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#1553A4]"
                      placeholder="Enter username"
                      onChange={(e) => setUser({...user, email: e.target.value})}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        cx="10"
                        cy="7"
                        r="6"
                        data-original="#000000"
                      ></circle>
                      <path
                        d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <label className="text-sm mb-2 block">Password</label>
                  <div className="relative flex items-center">
                    <input
                      name="password"
                      type="password"
                      required
                      className="w-full text-sm border border-gray-300 px-4 py-3 rounded-md outline-[#1553A4]"
                      placeholder="Enter password"
                      onChange={(e) => setUser({...user, password: e.target.value})}
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#bbb"
                      stroke="#bbb"
                      className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                      viewBox="0 0 128 128"
                    >
                      <path
                        d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </div>
                </div>
                {/* <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 shrink-0 text-[#1553A4] focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label for="remember-me" className="ml-3 block text-sm">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="jajvascript:void(0);"
                      className="text-[#1553A4] hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                </div> */}
                <div className="!mt-6">
                  <button
                  onClick={onLogin}
                    type="button"
                    className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-[#1553A4] hover:bg-blue-100 hover:text-[#1553A4] border hover:border-[#1553A4] focus:outline-none"
                  >
                    Log in
                  </button>
                </div>
                {/* <p className="my-12 text-sm  text-center">or continue with</p>
                <div className="space-x-6 flex justify-center">
                  <button type="button" className="border-none outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      className="inline"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#fbbd00"
                        d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                        data-original="#fbbd00"
                      />
                      <path
                        fill="#0f9d58"
                        d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                        data-original="#0f9d58"
                      />
                      <path
                        fill="#31aa52"
                        d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                        data-original="#31aa52"
                      />
                      <path
                        fill="#3c79e6"
                        d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                        data-original="#3c79e6"
                      />
                      <path
                        fill="#cf2d48"
                        d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                        data-original="#cf2d48"
                      />
                      <path
                        fill="#eb4132"
                        d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                        data-original="#eb4132"
                      />
                    </svg>
                  </button>
                  <button type="button" className="border-none outline-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="40"
                      height="40"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0078d4"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                      ></path>
                      <path
                        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                      ></path>
                    </svg>
                  </button>
                </div> */}
                <p className="text-base leading-relaxed !mt-10 text-center">
                  Don't have an account{" "}
                  <a
                    href="/participants/signup"
                    className="text-[#1553A4] hover:underline ml-1 whitespace-nowrap"
                  >
                    Register here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
