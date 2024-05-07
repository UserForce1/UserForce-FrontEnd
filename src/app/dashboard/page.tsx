"use client";
import router, { useRouter } from "next/navigation";
import NavBarInternal from "../components/navbarinternal";
import axios from "axios";
import { useState } from "react";

export default function DASHBOARD() {
  const router = useRouter();
  const [data, setData] = useState("nothing")

  const logout = async () => {
    try {
        await axios.get('/api/users/logout');
        router.push('/researchers/signin')
    } catch (error: any) {
        console.log(error.message)
        
    }

}

const getUserDetails = async () => {
  const res = await axios.get('/api/users/me')
  setData(res.data.data._id)
}

  return (
    <>
      <NavBarInternal />
      <div className="bg-white h-screen">
        <div className="max-w-6xl mx-auto font-[sans-serif]">
          

              <button
               onClick={logout}
                className="bg-[#1553A4] hover:bg-blue-200 text-white hover:text-[#1553A4] hover:border-[#1553A4] border flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8"
              >
                Log out
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-[14px] fill-current ml-2"
                  viewBox="0 0 492.004 492.004"
                >
                  <path
                    d="M484.14 226.886 306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z"
                    data-original="#000000"
                  ></path>
                </svg>
              </button>

              <div>
          <h1 className="text-black">Profile</h1>
          <h2 className="text-black">{data==="nothing" ? "Nothing": data }</h2>
          <button onClick={getUserDetails} className="text-black">Details</button>

      </div>
            
        </div>
      </div>
    </>
  );
}