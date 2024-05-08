"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function NavBarInternal() {
  var toggleOpen = null;
  var toggleClose = null;
  if (typeof window !== "undefined") {
    toggleOpen = document.getElementById("toggleOpen");
    toggleClose = document.getElementById("toggleClose");
    var collapseMenu = document.getElementById("collapseMenu");
  }
  function handleClick() {
    if (collapseMenu?.style.display === "block") {
      collapseMenu.style.display = "none";
    } else {
      collapseMenu!.style.display = "block";
    }
  }

  toggleOpen?.addEventListener("click", handleClick);
  toggleClose?.addEventListener("click", handleClick);
  const router = useRouter();

  const [data, setData] = useState("nothing")

  const logout = async () => {
    try {
        await axios.get('/api/users/logout');
        router.push('/signup')
    } catch (error: any) {
        console.log(error.message)
        
    }
  }

  const getUserDetails = async () => {
    const res = await axios.get('/api/users/me')
    setData(res.data.data._id)
  }

  return (
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white font-[Poppins] min-h-[70px] tracking-wide relative z-50 border-[#D9DEDD]">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="/">
          <img src="/Logo.svg" alt="logo" className="w-36" />
        </a>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
            onClick={() => handleClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 fill-black"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </button>
        </div>

        {/* <div className="flex max-lg:ml-auto space-x-3">

                    <button onClick={() => router.push('/signup')}   className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#1553A4] bg-[#1553A4] transition-all ease-in-out duration-300 hover:bg-transparent hover:border-[#325FFF] hover:text-[#325FFF]">
                        Login
                    </button>
                    <button  onClick={() => router.push('/signup')} className="px-4 py-2 text-sm rounded-full font-bold text-white border-2 border-[#1553A4] bg-[#1553A4] transition-all ease-in-out duration-300 hover:bg-transparent hover:border-[#325FFF] hover:text-[#325FFF]">
                        Sign up
                    </button>

                    <button id="toggleOpen" className="lg:hidden"  onClick={() => handleClick}>
                        <svg
                            className="w-7 h-7"
                            fill="#000"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div> */}
        <div className="flex ml-auto">
          <button
            onClick={logout}
            className="bg-[#1553A4] hover:bg-blue-200 text-white hover:text-[#1553A4] hover:border-[#1553A4] border flex items-center font-semibold rounded-md px-5 py-3 transition-all"
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
              />
            </svg>
          </button>
          </div>
      </div>
    </header>
  );
}
