"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import NavBar from "@/app/components/navbar";
import React, { FormEvent, useState } from "react";
import profileFormSchema from "@/app/schema/participants/profileFormSchema";
import ProfileForm from "@/app/components/forms/participants/Profile";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import NavBarInternal from "@/app/components/navbarinternal";
import { PprofileFormData } from "@/app/interfaces/FormData";
import { participantsFormData } from "@/constants/constants";

// interface SelectField {
//   gender: { value: string; label: string };
// }

export default function participantsProfile() {
  const [data, setData] = useState("nothing");
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
      const res = await axios.post(
        "/api/users/signup/participants/profileSubmit",
        profileData
      );
      console.log(res);
    } catch (error: any) {
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
      values.webcam.value,
    );
  };

  return (
    <>
      <div className="font-[sans-serif] text-[#333] bg-white min-h-screen  items-center justify-center ">
        <NavBarInternal />
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

                  <p className="text-red-500">{errors.jobTitle?.message}</p>
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

                  <p className="text-red-500">{errors.skills?.message}</p>
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

                  <p className="text-red-500">{errors.workemail?.message}</p>
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

                  <p className="text-red-500">{errors.company?.message}</p>
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

                  <p className="text-red-500">{errors.industry?.message}</p>
                </label>
                <label className="block mb-6">
                  <span className="text-gray-700">Small business owner</span>
                  <Controller
                    name={"smallbusinessowner"} // for the gender field
                    control={control} // obtained from the useForm hook
                    render={({ field }) => {
                      return (
                        <Select
                          {...field}
                          options={participantsFormData.smallbusinessowner}
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
                  <span className="text-gray-700">LinkedIn profile</span>
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
                  <span className="text-gray-700">Facebook profile</span>
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
                    We'll use this information to match you with relevant
                    studies. Don't worry—we'll never sell your data!
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
                  <p className="text-red-500">{errors.income?.message}</p>
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
                  <span className="text-gray-700">English language proficiency - Speaking</span>
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
                  <span className="text-gray-700">
                    Home owner
                  </span>
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
                  A computer with a webcam is required for most online studies. Don't have a webcam? You can still participate in phone and in-person studies.
                  </p>
                </div>
                
                <label className="block mb-6">
                  <span className="text-gray-700">Do you have a computer with a webcam?(REQUIRED)</span>
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
      </div>
    </>
  );
}
