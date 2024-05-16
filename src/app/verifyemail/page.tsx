"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [usertype, setUsertype] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token, usertype });
      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };
  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    const urlUser = window.location.search.split("=")[2];
    console.log(urlToken);
    setToken(urlToken || "");
    console.log(urlUser);
    setUsertype(urlUser || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token, usertype]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-blue-100">
        {verified && (
          <div>
            <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
              <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 relative">
                <div className="my-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-24 h-24 fill-green-500 absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2"
                    viewBox="0 0 60 60"
                  >
                    <circle cx="30" cy="30" r="29" data-original="#5edd60" />
                    <path
                      fill="#fff"
                      d="m24.262 42.07-6.8-6.642a1.534 1.534 0 0 1 0-2.2l2.255-2.2a1.621 1.621 0 0 1 2.256 0l4.048 3.957 11.353-17.26a1.617 1.617 0 0 1 2.2-.468l2.684 1.686a1.537 1.537 0 0 1 .479 2.154L29.294 41.541a3.3 3.3 0 0 1-5.032.529z"
                      data-original="#ffffff"
                    />
                  </svg>
                  <h4 className="text-xl text-[#333] font-semibold mt-6">
                    Your email address is verified
                  </h4>
                </div>
                <div className="text-right space-x-4"></div>
                <div className="flex max-sm:flex-col gap-4">
                  {usertype === "participants" ? (
                    <>
                      <Link
                        type="button"
                        href="/participant/signin"
                        className="text-center px-6 py-2.5 rounded w-full text-white text-sm font-semibold border-none outline-none bg-[#1553A4] hover:bg-[#1553A4] active:bg-[#1553A4]"
                      >
                        Go to my profile
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        type="button"
                        href="/researchers/signin"
                        className="text-center px-6 py-2.5 rounded w-full text-white text-sm font-semibold border-none outline-none bg-[#1553A4] hover:bg-[#1553A4] active:bg-[#1553A4]"
                      >
                        Go to my profile
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {error && (
          <div>
            <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
              <div className="w-full max-w-md bg-white shadow-lg rounded-md p-6 relative">
                <div className="my-8 text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-16 fill-red-500 inline"
                    viewBox="0 0 286.054 286.054"
                  >
                    <path
                      fill="#e2574c"
                      d="M143.027 0C64.04 0 0 64.04 0 143.027c0 78.996 64.04 143.027 143.027 143.027 78.996 0 143.027-64.022 143.027-143.027C286.054 64.04 222.022 0 143.027 0zm0 259.236c-64.183 0-116.209-52.026-116.209-116.209S78.844 26.818 143.027 26.818s116.209 52.026 116.209 116.209-52.026 116.209-116.209 116.209zm.009-196.51c-10.244 0-17.995 5.346-17.995 13.981v79.201c0 8.644 7.75 13.972 17.995 13.972 9.994 0 17.995-5.551 17.995-13.972V76.707c-.001-8.43-8.001-13.981-17.995-13.981zm0 124.997c-9.842 0-17.852 8.01-17.852 17.86 0 9.833 8.01 17.843 17.852 17.843s17.843-8.01 17.843-17.843c-.001-9.851-8.001-17.86-17.843-17.86z"
                      data-original="#e2574c"
                    />
                  </svg>
                  <h4 className="text-xl text-[#333] font-semibold mt-6">
                    Could not verify your email address!
                  </h4>
                </div>
                <div className="text-right space-x-4"></div>
                <div className="flex max-sm:flex-col gap-4">
                  {usertype === "participants" ? (
                    <>
                      <Link
                        type="button"
                        href="/participant/signin"
                        className="text-center px-6 py-2.5 rounded w-full text-white text-sm font-semibold border-none outline-none bg-[#1553A4] hover:bg-[#1553A4] active:bg-[#1553A4]"
                      >
                        Go to my profile
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        type="button"
                        href="/researchers/signin"
                        className="text-center px-6 py-2.5 rounded w-full text-white text-sm font-semibold border-none outline-none bg-[#1553A4] hover:bg-[#1553A4] active:bg-[#1553A4]"
                      >
                        Go to my profile
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
