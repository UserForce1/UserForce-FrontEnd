export default function FOOTER() {
  return (
    <>
      <footer className="mt-16">
        <div className="px-4 sm:px-10">
          <div className="grid max-sm:grid-cols-1 max-xl:grid-cols-2 xl:grid-cols-5 gap-8 max-w-7xl mx-auto">
            <div className="xl:col-span-2">
              <a href="javascript:void(0)">
                <img src="Logo.svg" alt="logo" className="w-40 mb-6" />
              </a>
              <p className="text-base leading-relaxed mb-2">
                We bridge the gap between researchers and participants to help
                you with your market fit.
              </p>
            </div>
            <div>
              {/* <h4 className="text-xl font-extrabold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> Web
                  Development</a></li>
              <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> Mobile App
                  Development</a></li>
              <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> UI/UX
                  Design</a></li>
              <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> Digital Marketing</a></li>
            </ul> */}
            </div>
            <div>
              <h4 className="text-xl font-extrabold mb-6">Contact Us</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#1553A4] flex items-center gap-2"
                  >
                    <svg
                      className="h-5 w-5 text-[#1553A4]"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <rect x="3" y="5" width="18" height="14" rx="2" />{" "}
                      <polyline points="3 7 12 13 21 7" />
                    </svg>{" "}
                    info@userforce.in
                  </a>
                </li>
                {/* <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> Ebooks</a>
              </li>
              <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> Templates</a>
              </li>
              <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> Tutorials</a></li> */}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-extrabold mb-4">Find Us on</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#1553A4] flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0078d4"
                        d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"
                      ></path>
                      <path
                        d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z"
                        opacity=".05"
                      ></path>
                      <path
                        d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z"
                        opacity=".07"
                      ></path>
                      <path
                        fill="#fff"
                        d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"
                      ></path>
                    </svg>{" "}
                    Linkedin
                  </a>
                </li>
                {/* <li>
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#1553A4] flex items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                    >
                      <path d="M 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.105 4 24 4 L 6 4 z M 8.6484375 9 L 13.259766 9 L 15.951172 12.847656 L 19.28125 9 L 20.732422 9 L 16.603516 13.78125 L 21.654297 21 L 17.042969 21 L 14.056641 16.730469 L 10.369141 21 L 8.8945312 21 L 13.400391 15.794922 L 8.6484375 9 z M 10.878906 10.183594 L 17.632812 19.810547 L 19.421875 19.810547 L 12.666016 10.183594 L 10.878906 10.183594 z"></path>
                    </svg>{" "}
                    X
                  </a>
                </li> */}
                {/* <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> Team</a></li>
              <li><a href="javascript:void(0)" className="hover:text-blue-600 flex items-center gap-2"><svg
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-[10px] -rotate-90"
                    viewBox="0 0 24 24">
                    <path fill-rule="evenodd"
                      d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z">
                    </path>
                  </svg> Testimonials</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 px-4 py-6  w-full">
          <p className="text-black text-center">
            © 2024
            <a
              href="https://userforce.in/"
              target="_blank"
              className="hover:underline mx-1"
            >
              UserForce
            </a>
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
