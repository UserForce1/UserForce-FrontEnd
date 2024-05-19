"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import NavBar from "@/app/components/navbar";
import React, { FormEvent, useEffect, useState } from "react";
import profileFormSchema from "@/app/schema/participants/profileFormSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import NavBarInternalP from "@/app/components/navbarinternalP";
import { PprofileFormData } from "@/app/interfaces/FormData";
import { participantsFormData } from "@/constants/constants";
import Link from "next/link";

// interface SelectField {
//   gender: { value: string; label: string };
// }

export default function ParticipantsProfile() {
  const [profileSubmit, setProfileSubmit] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isProfileSubmitted, setIsProfileSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<string>("");
  
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
  } = useForm<PprofileFormData>({
    // @ts-expect-error ts(2322)
    resolver: yupResolver(profileFormSchema),
  });

  const submitHandler = async (values: PprofileFormData) => {
    const profileData = {
      jobTitle: values.jobTitle,
      seniority: values.seniority.value,
      skills: values.skills,
      workemail: values.workemail,
      company: values.company,
      companysize: values.companysize.value,
      worksetting: values.worksetting.value,
      industry: values.industry,
      smallbusinessowner: values.smallbusinessowner.value,
      linkedinprofile: values.linkedinprofile,
      facebookprofile: values.facebookprofile,
      otherprofile: values.otherprofile,
      age: values.age,
      city: values.city,
      gender: values.gender.value,
      income: values.income,
      education: values.education.value,
      maritalstatus: values.maritalstatus.value,
      language: values.language.value,
      homeowner: values.homeowner.value,
      webcam: values.webcam.value,
    };
    try {
      setProfileSubmit(true);
      const res = await axios.post(
        "/api/users/signup/participants/profileSubmit",
        profileData
      );
      console.log(res);
      setProfileSubmit(false);
    } catch (error: any) {
      setProfileSubmit(false);
      console.log("failed", error.message);
    }
    console.log(
      values.jobTitle,
      values.seniority.value,
      values.skills,
      values.workemail,
      values.company,
      values.companysize.value,
      values.worksetting.value,
      values.industry,
      values.smallbusinessowner.value,
      values.linkedinprofile,
      values.facebookprofile,
      values.otherprofile,
      values.gender.value,
      values.age,
      values.city,
      values.income,
      values.education.value,
      values.maritalstatus.value,
      values.language.value,
      values.homeowner.value,
      values.webcam.value
    );
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me/participants");
    console.log(res)
    setIsVerified(res.data.data.isVerified);
    setIsProfileSubmitted(res.data.data.isProfileSubmitted);
    setUser(res.data.data.name);
    setLoading(false);
  };

  useEffect(() => {
    getUserDetails();
  }, [isVerified,profileSubmit]);

  return (
    <>
      <div className="font-[sans-serif] text-[#333] bg-white min-h-screen  items-center justify-center ">
        <NavBarInternalP />
        {loading ? (
          <>
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
          </>
        ) : (
          <>
            {!isVerified ? (
              <>
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
                        href="/participants/signin"
                        className="text-center px-6 py-2.5 rounded w-full text-white text-sm font-semibold border-none outline-none bg-red-500 hover:bg-red-600 active:bg-red-500"
                      >
                        Go back to sign in
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
              {isProfileSubmitted ? <>
          <div
      className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full  before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
        
        <div className="my-8 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-16 shrink-0 fill-[#1553A4] inline" viewBox="0 0 512 512">
            <path
              d="M383.841 171.838c-7.881-8.31-21.02-8.676-29.343-.775L221.987 296.732l-63.204-64.893c-8.005-8.213-21.13-8.393-29.35-.387-8.213 7.998-8.386 21.137-.388 29.35l77.492 79.561a20.687 20.687 0 0 0 14.869 6.275 20.744 20.744 0 0 0 14.288-5.694l147.373-139.762c8.316-7.888 8.668-21.027.774-29.344z"
              data-original="#000000" />
            <path
              d="M256 0C114.84 0 0 114.84 0 256s114.84 256 256 256 256-114.84 256-256S397.16 0 256 0zm0 470.487c-118.265 0-214.487-96.214-214.487-214.487 0-118.265 96.221-214.487 214.487-214.487 118.272 0 214.487 96.221 214.487 214.487 0 118.272-96.215 214.487-214.487 214.487z"
              data-original="#000000" />
          </svg>
          <h4 className="text-2xl text-[#1553A4] font-semibold mt-6">Thank you, {user}!</h4>
          <p className="text-sm text-[#1553A4] mt-4">We are delighted to have you join UserForce.</p>
          <p className="text-sm text-[#1553A4] mt-4">Your feedback will be invaluable in helping operators create better products & features.</p>
        </div>
      </div>
    </div>
         </>:<>
         <div className="text-center  bg-blue-100 min-h-[160px] sm:p-6 p-4">
                  <h4 className="md:text-4xl text-3xl font-extrabold mb-6">
                    Please fill your details.
                  </h4>
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
                          <span className="text-gray-700">Job title</span>
                          <Controller
                            name={"jobTitle"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="eg: Software Developer"
                                />
                              );
                            }}
                          />

                          <p className="text-red-500">
                            {errors.jobTitle?.message}
                          </p>
                        </label>

                        <label className="block mb-6">
                          <span className="text-gray-700">Seniority</span>
                          <Controller
                            name={"seniority"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.seniority}
                                  placeholder="Select Seniority"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.seniority?.value?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Skills</span>
                          <Controller
                            name={"skills"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="eg: Java, AWS certified developer"
                                />
                              );
                            }}
                          />

                          <p className="text-red-500">
                            {errors.skills?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Work Email</span>
                          <Controller
                            name={"workemail"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="email"
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
                                  placeholder="email@company.com"
                                />
                              );
                            }}
                          />

                          <p className="text-red-500">
                            {errors.workemail?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Company</span>
                          <Controller
                            name={"company"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="Enter company name"
                                />
                              );
                            }}
                          />

                          <p className="text-red-500">
                            {errors.company?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Company Size</span>
                          <Controller
                            name={"companysize"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.companysize}
                                  placeholder="Select Seniority"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.companysize?.value?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Work setting</span>
                          <Controller
                            name={"worksetting"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.worksetting}
                                  placeholder="Select Seniority"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.worksetting?.value?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Industry</span>
                          <Controller
                            name={"industry"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="Enter your industry"
                                />
                              );
                            }}
                          />

                          <p className="text-red-500">
                            {errors.industry?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">
                            Small business owner
                          </span>
                          <Controller
                            name={"smallbusinessowner"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={
                                    participantsFormData.smallbusinessowner
                                  }
                                  placeholder="Select Seniority"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.smallbusinessowner?.value?.message}
                          </p>
                        </label>
                      </div>
                      <div className="p-6 border-2 border-[#1553A4] sm:rounded-md w-full  mx-auto mb-6">
                        <div className="space-y-2 mb-2">
                          <h2 className="md:text-xl text-2xl font-extrabold mb-2 text-blue-400">
                            Social media links
                          </h2>
                          <p className="border border-[#1553A4]"></p>
                        </div>
                        <label className="block mb-6">
                          <span className="text-gray-700">
                            LinkedIn profile
                          </span>
                          <Controller
                            name={"linkedinprofile"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="Enter your LinkedIn profile"
                                />
                              );
                            }}
                          />

                          <p className="text-red-500">
                            {errors.linkedinprofile?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">
                            Facebook profile
                          </span>
                          <Controller
                            name={"facebookprofile"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="Enter your Facebook profile"
                                />
                              );
                            }}
                          />
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Others</span>
                          <Controller
                            name={"otherprofile"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="Enter any other profile"
                                />
                              );
                            }}
                          />
                        </label>
                      </div>
                      <div className="p-6 border-2 border-[#1553A4] sm:rounded-md w-full  mx-auto mb-6">
                        <div className="space-y-2 mb-2">
                          <h2 className="md:text-xl text-2xl font-extrabold mb-2 text-blue-400">
                            Demographic details(required)
                          </h2>
                          <p className="border border-[#1553A4]"></p>
                          <p className="text-base leading-relaxed text-orange-400">
                            We'll use this information to match you with
                            relevant studies. Don't worry—we'll never sell your
                            data!
                          </p>
                        </div>
                        <label className="block mb-6">
                          <span className="text-gray-700">Age</span>
                          <Controller
                            name={"age"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="Enter your age"
                                />
                              );
                            }}
                          />

                          <p className="text-red-500">{errors.age?.message}</p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">City</span>
                          <Controller
                            name={"city"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="Enter your city"
                                />
                              );
                            }}
                          />

                          <p className="text-red-500">{errors.city?.message}</p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Gender</span>
                          <Controller
                            name={"gender"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.gender}
                                  placeholder="Select Gender"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.gender?.value?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">
                            Household income per year
                          </span>
                          <Controller
                            name={"income"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <input
                                  {...field}
                                  type="text"
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
                                  placeholder="Mention your income"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.income?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">
                            Higest level of education
                          </span>
                          <Controller
                            name={"education"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.education}
                                  placeholder="Mention your higest education"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.education?.value?.message}
                          </p>
                        </label>
                        <label className="block mb-6">
                          <span className="text-gray-700">Marital status</span>
                          <Controller
                            name={"maritalstatus"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.maritalstatus}
                                  placeholder="What is your marital status"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.maritalstatus?.value?.message}
                          </p>
                        </label>
                      </div>
                      <div className="p-6 border-2 border-[#1553A4] sm:rounded-md w-full  mx-auto mb-6">
                        <div className="space-y-2 mb-2">
                          <h2 className="md:text-xl text-2xl font-extrabold mb-2 text-blue-400">
                            Additional information
                          </h2>
                          <p className="border border-[#1553A4]"></p>
                        </div>

                        <label className="block mb-6">
                          <span className="text-gray-700">
                            English language proficiency - Speaking
                          </span>
                          <Controller
                            name={"language"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.language}
                                  placeholder="Select your english proficiency"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.language?.value?.message}
                          </p>
                        </label>

                        <label className="block mb-6">
                          <span className="text-gray-700">Home owner</span>
                          <Controller
                            name={"homeowner"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.homeowner}
                                  placeholder="Do you own a house"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.homeowner?.value?.message}
                          </p>
                        </label>
                      </div>
                      <div className="p-6 border-2 border-[#1553A4] sm:rounded-md w-full  mx-auto mb-6">
                        <div className="space-y-2 mb-2">
                          <h2 className="md:text-xl text-2xl font-extrabold mb-2 text-blue-400">
                            Technical details(required)
                          </h2>
                          <p className="border border-[#1553A4]"></p>
                          <p className="text-base leading-relaxed text-orange-400">
                            A computer with a webcam is required for most online
                            studies. Don't have a webcam? You can still
                            participate in phone and in-person studies.
                          </p>
                        </div>

                        <label className="block mb-6">
                          <span className="text-gray-700">
                            Do you have a computer with a webcam?(REQUIRED)
                          </span>
                          <Controller
                            name={"webcam"} // for the gender field
                            control={control} // obtained from the useForm hook
                            render={({ field }) => {
                              return (
                                <Select
                                  {...field}
                                  options={participantsFormData.webcam}
                                  placeholder="Do you have webcam"
                                />
                              );
                            }}
                          />
                          <p className="text-red-500">
                            {errors.webcam?.value?.message}
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
                
              </>
            )}
          </>
        )}
        {profileSubmit && <>
          <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full  font-[sans-serif]">
              <button
                type="button"
                className="px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-[#1553A4] hover:bg-[#1553A4] active:[#1553A4]"
              >
                Submitting, Please wait...
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
         </>}
      </div>
    </>
  );
}
