"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import NavBar from "@/app/components/navbar";
import React, { FormEvent, useEffect, useState } from "react";
import profileFormSchema from "@/app/schema/researchers/profileFormSchema";
import ProfileForm from "@/app/components/forms/participants/Profile";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import NavBarInternal from "@/app/components/navbarinternal";
import { RprofileFormData } from "@/app/interfaces/FormData";
import { researchersFormData } from "@/constants/constants";
import Link from "next/link";

// interface SelectField {
//   gender: { value: string; label: string };
// }



export default function ResearchersProfile() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isProfileSubmitted, setIsProfileSubmitted] = useState<boolean>(false);
  
  // const schema = yup.object({
  //   gender: yup.object({
  //     value: yup.string().required("Please select a gender"),
  //   }),
  // });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RprofileFormData>({
    resolver: yupResolver(profileFormSchema),
  });

  const submitHandler = async (values: RprofileFormData) => {
    console.log("inside submitHandler")
    const profileData = {
      professional: values.professional.value,
      role: values.role.value,
      audiencetype: values.audiencetype.value,
      modeofconnect: values.modeofconnect.value,
      problemstatement: values.problemstatement,
    };
    try {
      const res = await axios.post(
        "/api/users/signup/profileSubmit",
        profileData
      );
      console.log(res);
    } catch (error: any) {
      console.log("failed", error.message);
    }
    console.log(
      values.professional.value,
      values.role.value,
      values.audiencetype.value,
      values.modeofconnect.value,
      values.problemstatement,
    );
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    console.log(res)
    setIsVerified(res.data.data.isVerified);
    setIsProfileSubmitted(res.data.data.isProfileSubmitted);
    setLoading(false);
  };

  useEffect(() => {
    getUserDetails();
  }, [isVerified]);

  return (
    <>
      <div className="font-[sans-serif] text-[#333] bg-white min-h-screen  items-center justify-center ">
        <NavBarInternal />
         {loading ? <>
         <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full  font-[sans-serif]">
              <button
                type="button"
                className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#1553A4] hover:bg-[#1553A4] active:[#1553A4]"
              >
                Verifying email
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  fill="#fff"
                  className="ml-2 inline animate-spin"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                    data-original="#000000"
                  />
                </svg>
              </button>
            </div>
         </>:<>
         {!isVerified ? <>
         
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
                        Your email address is not verified,
                        <br />
                        please check your mail
                      </h4>
                    </div>
                    <div className="text-right space-x-4"></div>
                    <div className="flex max-sm:flex-col gap-4">
                      <Link
                        type="button"
                        href="/researchers/signin"
                        className="text-center px-6 py-2.5 rounded w-full text-white text-sm font-semibold border-none outline-none bg-red-500 hover:bg-red-600 active:bg-red-500"
                      >
                        Go back to sign in
                      </Link>
                    </div>
                  </div>
                </div>
          
         </>:<>
         {isProfileSubmitted ? <>
          <div
      className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full  before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
        
        <div className="my-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 shrink-0 fill-[#333] inline" viewBox="0 0 512 512">
            <path
              d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
              data-original="#000000" />
            <path
              d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
              data-original="#000000" />
          </svg>
          <h4 className="text-2xl text-[#333] font-semibold mt-6">Profile Successfully Submitted!</h4>
          <p className="text-sm text-black mt-4">We will review your profile and get back to you with matching interviews.</p>
          <p className="text-sm text-black mt-4">Thank you!</p>
        </div>
      </div>
    </div>
         </>:<>
         <div className="text-center  bg-blue-100 min-h-[160px] sm:p-6 p-4">
          <h4 className="md:text-2xl text-xl font-extrabold mb-6">
            We have some questions to help you get started.
          </h4>
          <p className="text-base leading-relaxed mb-14 font-bold">
            Better tailor your User interviews experience by sharing more about your work and role.
          </p>
        </div>

        <div className="mx-4 mb-4 -mt-16">
          <div className="max-w-4xl mx-auto bg-white shadow-[0_2px_18px_-3px_rgba(6,81,237,0.4)] sm:p-8 p-4 rounded-md">
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className="p-6 border-2 border-[#1553A4] sm:rounded-md w-full  mx-auto mb-6">
                <div className="space-y-2 mb-2">
                  <h2 className="md:text-xl text-2xl font-extrabold mb-2 text-blue-400">
                    Professional details
                  </h2>
                  <p className="border border-[#1553A4]"></p>
                </div>
                <label className="block mb-6">
                  <span className="text-gray-700 font-bold">What best describes your professional function?</span>
                  <Controller
                    name={"professional"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <Select
                        {...field}
                        options={researchersFormData.professional}
                        placeholder="Select professional"
                      />
                      );
                    }}
                  />
                  <p className="text-red-500">{errors.professional?.value?.message}</p>
                </label>

                <label className="block mb-6">
                  <span className="text-gray-700">What is your accurate role?</span>
                  <Controller
                    name={"role"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <Select
                          {...field}
                          options={researchersFormData.role}
                          placeholder="Select role"
                        />
                      );
                    }}
                  />
                  <p className="text-red-500">
                    {errors.role?.value?.message}
                  </p>
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">What type of audience are you looking to interview from?</span>
                  <Controller
                    name={"audiencetype"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <Select
                          {...field}
                          options={researchersFormData.audiencetype}
                          placeholder="Select audience type"
                        />
                      );
                    }}
                  />
                  <p className="text-red-500">
                    {errors.audiencetype?.value?.message}
                  </p>
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">How would you like to connect with your participant ?</span>
                  <Controller
                    name={"modeofconnect"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <Select
                          {...field}
                          options={researchersFormData.modeofconnect}
                          placeholder="Select audience type"
                        />
                      );
                    }}
                  />
                  <p className="text-red-500">
                    {errors.modeofconnect?.value?.message}
                  </p>
                </label>
                
              </div>
              <div className="p-6 border-2 border-[#1553A4] sm:rounded-md w-full  mx-auto mb-6">
                <div className="space-y-2 mb-2">
                  <h2 className="md:text-xl text-2xl font-extrabold mb-2 text-blue-400">
                  Problem statement
                  </h2>
                  <p className="border border-[#1553A4]"></p>
                  <p className="text-base leading-relaxed text-orange-400">
                  Could you please provide a brief description of your issue, along with the demographics of your participants? This will help us tailor our user interviews to better suit your needs. Alternatively, feel free to call us to discuss your problem further.
                  </p>
                </div>
                <label className="block mb-6">
                  <span className="text-gray-700">Enter your problem statement</span>
                  <Controller
                    name={"problemstatement"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <textarea
                          {...field}
                          className="
                          block
                          w-full
                          mt-1
                          border-gray-300
                          rounded-md
                          shadow-sm
                          focus:border-indigo-300
                          focus:ring
                          focus:ring-indigo-200
                          focus:ring-opacity-50
                          "
                          placeholder="Enter your problem statement"
                        />
                      );
                    }}
                  />
                   <p className="text-red-500">
                    {errors.problemstatement?.message}
                  </p>
                </label>
                
              </div>
              <div className="!mt-10 items-center justify-center flex">
                <button
                  type="submit"
                  className="w-1/2 shadow-xl py-2.5 px-4 font-semibold rounded-full text-white hover:text-[#1553A4] bg-[#1553A4] border hover:border-[#1553A4] hover:bg-blue-100 focus:outline-none"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
         </>}
        
         </>}
         </>}
         
      </div>
    </>
  );
}
