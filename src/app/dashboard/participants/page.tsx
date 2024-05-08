"use client";
import router, { useRouter } from "next/navigation";
import NavBarInternal from "../../components/navbarinternal";
import axios from "axios";
import { useState } from "react";

export default function DASHBOARD() {
  const router = useRouter();
  const [data, setData] = useState("nothing")

const getUserDetails = async () => {
  const res = await axios.get('/api/users/me/participants')
  setData(res.data.data._id)
}

  return (
    <>
      <NavBarInternal />
      <div className="bg-white h-screen">
        <div className="max-w-6xl mx-auto font-[sans-serif]">
              
          <h1 className="text-black">Profile</h1>
          <h2 className="text-black">{data==="nothing" ? "Nothing": data }</h2>
          <button onClick={getUserDetails} className="text-black">Details</button>

            
        </div>
      </div>
    </>
  );
}
