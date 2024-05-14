"use client";

import { useRouter } from "next/navigation";
import axios from "axios";
import NavBar from "@/app/components/navbar";
import React, { FormEvent, useState } from "react";
import profileFormSchema from "@/app/schema/researchers/profileFormSchema";
import ProfileForm from "@/app/components/forms/participants/Profile";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import NavBarInternal from "@/app/components/navbarinternal";
import { RprofileFormData } from "@/app/interfaces/FormData";
import { researchersFormData } from "@/constants/constants";

// interface SelectField {
//   gender: { value: string; label: string };
// }

export default function researchersProfile() {
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
  } = useForm<RprofileFormData>({
    resolver: yupResolver(profileFormSchema),
  });

  const submitHandler = async (values: RprofileFormData) => {
    const profileData = {
      professional: values.professional.value,
      role: values.role.value,
      audiencetype: values.audiencetype.value,
      modeofconnect: values.modeofconnect.value,
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
    );
  };

  return (
    <>
      <div className="font-[sans-serif] text-[#333] bg-white min-h-screen  items-center justify-center ">
        <NavBarInternal />
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
