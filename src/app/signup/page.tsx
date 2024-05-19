"use client";
import router, { useRouter } from "next/navigation";
import NavBar from "../components/navbar";

export default function SIGNUP() {
  const router = useRouter();
  return (
    <>
      <NavBar />
      <div className="bg-white h-screen">
        <div className="max-w-6xl mx-auto font-[sans-serif]">
          <div className="text-center max-w-2xl mx-auto pt-10 pb-4">
            <h2 className="text-3xl font-extrabold text-center mb-4 text-black">
              Let's get the account created!
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <a 
             onClick={() => router.push("/researchers/signup")}
            className="bg-[#F9F9F9] cursor-pointer text-black max-sm:px-8 px-12 py-8 w-full rounded shadow-[0_20px_50px_rgb(59,130,246,0.4)] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 focus:bg-transparent focus:text-rose-600">
              <div>
                <img
                  src="/rsignup.webp"
                  className="w-full object-contain border-2 border-gray-500"
                />
              </div>
              <h2 className="md:text-4xl text-3xl font-extrabold mb-6 mt-2">
              Start Researching
              </h2>
              <div className="my-6">
                <p className="">
                  I need help with user interviews as a part of building my
                  product.
                </p>
              </div>

              {/* <button
                onClick={() => router.push("/researchers/signup")}
                className="bg-[#1553A4] hover:bg-blue-200 text-white hover:text-[#1553A4] hover:border-[#1553A4] border flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8"
              >
                Start Researching
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
              </button> */}
            </a>
            <a
             onClick={() => router.push("/participants/signup")}
            className="bg-[#F9F9F9] cursor-pointer max-sm:px-8 px-12 py-6 w-full rounded text-black shadow-[0_20px_50px_rgb(59,130,246,0.4)] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 focus:bg-transparent focus:text-rose-600 ">
              <div className=" py-2">
                <img
                  src="https://readymadeui.com/contact.webp"
                  className="w-full object-contain rounded-md"
                />
              </div>
              <h2 className="md:text-4xl text-3xl font-extrabold mb-6">
              Get participated
              </h2>
              <div className="my-6">
                <p className="text-sm">
                  Want to earn money participating in user research?
                </p>
              </div>

              {/* <button
                onClick={() => router.push("/participants/signup")}
                className="bg-[#1553A4] hover:bg-blue-200 text-white hover:text-[#1553A4] hover:border-[#1553A4] border flex items-center transition-all font-semibold rounded-md px-5 py-4 mt-8"
              >
                Get participated
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
              </button> */}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
