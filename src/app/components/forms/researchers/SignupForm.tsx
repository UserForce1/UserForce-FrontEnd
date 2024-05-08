import React, { FormEvent, ChangeEvent } from "react";
import { Element } from "react-scroll";

import { RsignUpFormData } from "@/app/interfaces/FormData";

interface TheFormProps {
  formData: RsignUpFormData;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  errors: { [key: string]: string };
}

export default function SignUpForm({
  formData,
  handleInputChange,
  handleSubmit,
  errors,
}: TheFormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 gap-y-7 gap-x-12">
        <div>
          <label className="text-base leading-relaxed mb-2 block">First Name</label>
          <Element name="fullName">
            <input
              className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-[#1553A4]"
              type="text"
              name="firstname"
              onChange={handleInputChange}
              placeholder="First Name"
              value={formData.firstname}
            />
            {errors.firstname && (
              <p className="text-base leading-relaxed text-red-500">{errors.firstname}</p>
            )}
          </Element>
        </div>
        <div>
          <label className="text-base leading-relaxed mb-2 block">Last Name</label>
          <Element name="lastName">
            <input
              className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-[#1553A4]"
              type="text"
              name="lastname"
              onChange={handleInputChange}
              placeholder="Last Name"
              value={formData.lastname}
            />
            {errors.lastname && (
              <p className="text-base leading-relaxed text-red-500">{errors.lastname}</p>
            )}
          </Element>
        </div>
        <div>
          <label className="text-base leading-relaxed mb-2 block">Email Id</label>
          <Element name="email">
            <input
              className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-[#1553A4]"
              type="email"
              name="email"
              onChange={handleInputChange}
              placeholder="Email Address"
              value={formData.email}
            />
            {errors.email && <p className="text-base leading-relaxed text-red-500">{errors.email}</p>}
          </Element>
        </div>
        <div>
          <label className="text-base leading-relaxed mb-2 block">Password</label>
          <Element name="password">
            <input
              className="bg-gray-100 w-full text-sm px-4 py-3 rounded-md outline-[#1553A4]"
              type="password"
              name="password"
              onChange={handleInputChange}
              placeholder="Password"
              value={formData.password}
            />
            {errors.password && (
              <p className="text-base leading-relaxed text-red-500">{errors.password}</p>
            )}
          </Element>
        </div>
      </div>
    </form>
  );
}
