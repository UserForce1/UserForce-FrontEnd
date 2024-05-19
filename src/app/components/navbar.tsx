"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function NavBar() {
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

  return (
    <header className="py-4 px-4 sm:px-10 bg-white z-50 relative shadow-md">
      <div className="max-w-7xl w-full mx-auto flex flex-wrap items-center gap-4">
        <a href="/">
          <img src="/Logo.svg" alt="logo" className="w-full" />
        </a>

        <div
          id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:fixed max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0"
        >
          <button
            id="toggleClose"
            className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white p-3"
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

          {/* <ul
            className='lg:!flex lg:ml-12 lg:space-x-6 max-lg:space-y-6 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50'>
            <li className='max-lg:border-b max-lg:pb-4 px-3 lg:hidden'>
              <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className='w-40' />
              </a>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3'>
              <a href='javascript:void(0)'
                className='hover:text-blue-600 text-blue-600 block font-bold transition-all'>Home</a>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3 group relative'><a href='javascript:void(0)'
                className='hover:text-blue-600 block font-bold transition-all'>Pages
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current inline ml-1.5" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
              </a>

              <ul
                className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-0 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li className='border-b py-2 '><a href='javascript:void(0)'
                    className='hover:text-blue-600 font-bold block transition-all'>About</a></li>
                <li className='border-b py-2 '><a href='javascript:void(0)'
                    className='hover:text-blue-600 font-bold block transition-all'>Contact</a></li>
                <li className='border-b py-2 '><a href='javascript:void(0)'
                    className='hover:text-blue-600 font-bold block transition-all'>Login</a></li>
                <li className='border-b py-2 '><a href='javascript:void(0)'
                    className='hover:text-blue-600 font-bold block transition-all'>Sign
                    up</a></li>
                <li className='border-b py-2 '><a href='javascript:void(0)'
                    className='hover:text-blue-600 font-bold block transition-all'>Blog</a></li>
              </ul>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3 group relative'><a href='javascript:void(0)'
                className='hover:text-blue-600 block font-bold transition-all'>Feature
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current inline ml-1.5" viewBox="0 0 24 24">
                  <path fill-rule="evenodd"
                    d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                    clip-rule="evenodd" data-original="#000000" />
                </svg>
              </a>

              <ul
                className='absolute shadow-lg bg-white space-y-3 lg:top-5 max-lg:top-8 -left-0 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>
                <li className='border-b py-2 '><a href='javascript:void(0)'
                    className='hover:text-blue-600 font-bold block transition-all'>Foods</a></li>
                <li className='border-b py-2 '>
                  <a href='javascript:void(0)' className='hover:text-blue-600 font-bold block transition-all'>Sale</a>
                </li>
                <li className='border-b py-2 '><a href='javascript:void(0)'
                    className='hover:text-blue-600 font-bold block transition-all'>Marketing</a></li>
                <li className='border-b py-2 '><a href='javascript:void(0)'
                    className='hover:text-blue-600 font-bold block transition-all'>Investment</a></li>
              </ul>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
                className='hover:text-blue-600 block font-bold transition-all'>Blog</a>
            </li>
            <li className='max-lg:border-b max-lg:py-2 px-3'><a href='javascript:void(0)'
                className='hover:text-blue-600 block font-bold transition-all'>About</a>
            </li>
          </ul> */}
        </div>

        <div className="flex ml-auto">
          <button
            onClick={() => router.push("/signup")}
            className="bg-[#1553A4] hover:bg-blue-200 text-white hover:text-[#1553A4] hover:border-[#1553A4] border flex items-center transition-all font-semibold rounded-md px-5 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 duration-300 focus:bg-transparent focus:text-rose-600"
          >
            Get started
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
          {/* <button id="toggleOpen" className='lg:hidden ml-7'>
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button> */}
        </div>
      </div>
    </header>
  );
}
