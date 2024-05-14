import React, { FormEvent, ChangeEvent } from "react";
import { Element } from "react-scroll";

import { RsignInFormData } from "@/app/interfaces/FormData";

interface TheFormProps {
  formData: RsignInFormData;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
  errors: { [key: string]: string };
}

export default function SignInForm({
  formData,
  handleInputChange,
  handleSubmit,
  errors,
}: TheFormProps) {
  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div>
        <label className="text-base leading-relaxed mb-2 block">Username</label>
          <Element name="email">
                <input
                  name="email"
                  type="email"
                  required
                  className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#1553A4]"
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
                  name="password"
                  type="password"
                  required
                  className="bg-gray-100 w-full text-sm px-4 py-3.5 rounded-md outline-[#1553A4]"
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
